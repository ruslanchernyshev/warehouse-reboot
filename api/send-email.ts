// Vercel Serverless Function for sending emails via SMTP
// Required environment variables in Vercel Secrets:
// - SMTP_HOST
// - SMTP_PORT
// - SMTP_USER
// - SMTP_PASS
// - SMTP_FROM
// - SMTP_TO

import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, city, package: packageType, integration, type } = req.body;

  // Validate required fields
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const subject = type === 'audit' 
      ? `Нова заявка на аудит складу від ${name}`
      : `Нова заявка на розрахунок від ${name}`;

    const html = `
      <h2>${subject}</h2>
      <p><strong>Ім'я:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      ${city ? `<p><strong>Місто:</strong> ${city}</p>` : ''}
      ${packageType ? `<p><strong>Пакет:</strong> ${packageType}</p>` : ''}
      ${integration ? `<p><strong>Час на інтеграцію:</strong> ${integration}</p>` : ''}
      <p><strong>Тип заявки:</strong> ${type === 'audit' ? 'Аудит складу' : 'Розрахунок вартості'}</p>
      <hr>
      <p><small>Дата: ${new Date().toLocaleString('uk-UA')}</small></p>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: subject,
      html: html,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}


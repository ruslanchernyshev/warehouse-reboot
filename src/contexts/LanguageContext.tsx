import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uk: {
    // Header
    'nav.demo': 'Демо системи',
    'nav.pricing': 'Тарифи',
    'nav.cases': 'Кейси',
    'nav.contact': 'Контакти',
    
    // Hero
    'hero.title': 'Перезапустимо ваш склад з повною автоматизацією за $1000/місяць',
    'hero.subtitle': 'Хмарна WMS-система + запуск під ключ + консалтинг + інтеграції з обладнанням',
    'hero.cta1': 'Замовити аудит складу',
    'hero.cta2': 'Подивитись демо системи',
    
    // Problems
    'problems.title': 'Основні проблеми складів сьогодні',
    'problems.1': 'Помилки у відвантаженнях → повернення, незадоволені клієнти',
    'problems.2': 'Хаос у залишках → неточна інвентаризація, відсутність прозорості',
    'problems.3': 'Повільна обробка замовлень → затримки доставки',
    'problems.4': 'Високі витрати на персонал → багато ручних процесів',
    'problems.5': 'Залежність від "людського фактору" → помилки при зміні команди',
    'problems.6': 'Відсутність масштабованості → склад не справляється при рості бізнесу',
    
    // Barriers
    'barriers.title': 'Що заважає бізнесу впровадити WMS',
    'barriers.1.title': 'Висока вартість',
    'barriers.1.desc': 'Великі капітальні інвестиції (десятки тисяч доларів)',
    'barriers.2.title': 'Довгі терміни',
    'barriers.2.desc': 'Класичні WMS запускаються від 6 до 12 місяців',
    'barriers.3.title': 'Відсутність експертизи',
    'barriers.3.desc': 'Немає фахівців, які можуть впровадити систему',
    'barriers.4.title': 'Складність налаштувань',
    'barriers.4.desc': 'Готові рішення не підходять під конкретний бізнес',
    'barriers.5.title': 'Ризик невдачі',
    'barriers.5.desc': 'Компанії бояться витратити кошти, але не отримати результат',
    
    // Solution
    'solution.title': 'Ми робимо автоматизацію складу доступною та реальною',
    'solution.subtitle': 'Що ми пропонуємо:',
    'solution.1.title': 'SaaS WMS',
    'solution.1.desc': 'Сучасна хмарна система управління складом без капітальних витрат',
    'solution.2.title': 'Швидкий запуск',
    'solution.2.desc': 'Повний перезапуск складу за 2–4 тижні замість 6–12 місяців',
    'solution.3.title': 'Під ключ',
    'solution.3.desc': 'Аудит, налаштування процесів, інтеграції, навчання персоналу',
    'solution.4.title': 'Консалтинг',
    'solution.4.desc': 'Готові перевірені процеси, які працюють',
    'solution.5.title': 'Кастомізація',
    'solution.5.desc': 'Гнучка адаптація системи до ваших операцій',
    'solution.6.title': 'Інтеграції',
    'solution.6.desc': 'З ERP, e-commerce і складським обладнанням',
    'solution.7.title': 'Прозора модель',
    'solution.7.desc': 'Зрозумілі тарифи: $1000/міс. + $50 за співробітника',
    'solution.8.title': 'Прозорість',
    'solution.8.desc': 'Ви отримуєте склад, який працює чітко, прозоро й масштабовано',
    
    // Comparison Table
    'comparison.title': 'Проблема → Рішення',
    'comparison.problem': 'Проблема клієнта',
    'comparison.solution': 'Наше рішення',
    'comparison.row1.problem': 'Висока вартість WMS (десятки тисяч $)',
    'comparison.row1.solution': 'SaaS-модель: $1000/міс. без великих інвестицій',
    'comparison.row2.problem': 'Довгі терміни запуску (6–12 місяців)',
    'comparison.row2.solution': 'Запуск складу під ключ за 2–4 тижні',
    'comparison.row3.problem': 'Відсутність експертизи у клієнта',
    'comparison.row3.solution': 'Ми беремо на себе консалтинг, процеси та навчання',
    'comparison.row4.problem': 'Складність налаштувань, готові системи не підходять',
    'comparison.row4.solution': 'Кастомізація під унікальні бізнес-процеси',
    'comparison.row5.problem': 'Хаос у залишках, помилки у відвантаженнях',
    'comparison.row5.solution': 'Автоматизований контроль обліку й прозорі процеси',
    'comparison.row6.problem': 'Високі витрати на персонал, ручні процеси',
    'comparison.row6.solution': 'Автоматизація + оптимізація, зростання продуктивності',
    'comparison.row7.problem': 'Відсутність інтеграцій (ERP, e-commerce, обладнання)',
    'comparison.row7.solution': 'Інтеграції з системами та обладнанням',
    'comparison.row8.problem': 'Неможливість масштабування складу',
    'comparison.row8.solution': 'Готова архітектура SaaS з мультискладом та KPI',
    
    // Pricing
    'pricing.title': 'Прозоре ціноутворення',
    'pricing.base': 'Базовий пакет',
    'pricing.perMonth': '/місяць',
    'pricing.feature1': 'До 10 співробітників складу',
    'pricing.feature2': 'Повний набір функцій WMS',
    'pricing.feature3': 'Постійна підтримка та оновлення',
    'pricing.additional': 'Додатково:',
    'pricing.extra1': '+$50 / кожен співробітник понад базу',
    'pricing.extra2': 'Onboarding (налаштування та запуск): $1000-2000',
    'pricing.extra3': 'Інтеграції з ERP: T&M (від $1000)',
    'pricing.extra4': 'Кастомізація та інтеграції з обладнанням — за запитом',
    'pricing.cta': 'Порахувати для вашого складу',
    
    // Why Us
    'whyus.title': 'Чим ми відрізняємось від інших',
    'whyus.1.title': 'Швидко',
    'whyus.1.desc': 'Запуск за кілька тижнів',
    'whyus.2.title': 'Доступно',
    'whyus.2.desc': 'SaaS-модель без великих капексу',
    'whyus.3.title': 'Гнучко',
    'whyus.3.desc': 'Кастомізація під ваші процеси',
    'whyus.4.title': 'Комплексно',
    'whyus.4.desc': 'Інтеграції з ERP, маркетплейсами та обладнанням',
    'whyus.5.title': 'Під ключ',
    'whyus.5.desc': 'Ми беремо все на себе: від софту до навчання персоналу',
    
    // Competitor Comparison
    'competitors.title': 'Порівняння з конкурентами',
    'competitors.param': 'Параметр',
    'competitors.us': 'Ми (SaaS + процеси)',
    'competitors.enterprise': 'Enterprise WMS (SAP/Oracle/Infor)',
    'competitors.local': 'Локальні WMS (UA)',
    'competitors.odoo': 'Odoo',
    'competitors.price': 'Ціна',
    'competitors.time': 'Час запуску',
    'competitors.functionality': 'Функціональність',
    'competitors.us.price': 'від $1000/міс.',
    'competitors.enterprise.price': '$100k+ разово + $20k/рік підтримка',
    'competitors.local.price': '$30k+ разово + 20%/рік',
    'competitors.odoo.price': 'модулі від $10k, але обмежено',
    'competitors.us.time': '2–4 тижні',
    'competitors.enterprise.time': '6–12 місяців',
    'competitors.local.time': '3–6 місяців',
    'competitors.odoo.time': '3–9 місяців',
    'competitors.us.functionality': '95% enterprise',
    'competitors.enterprise.functionality': '100% enterprise',
    'competitors.local.functionality': '30–40% enterprise',
    'competitors.odoo.functionality': '~40% enterprise',
    
    // Cases
    'cases.title': 'Як це працює на практиці',
    'cases.case1.title': 'E-commerce клієнт',
    'cases.case1.desc': 'Ми автоматизували склад за 2 тижні, знизили помилки у відвантаженнях на 80% і зекономили 30% витрат на персонал.',
    'cases.case2.title': '3PL-оператор',
    'cases.case2.desc': 'Після впровадження WMS обробка замовлень прискорилась у 3 рази.',
    
    // Final CTA
    'cta.title': 'Готові перезапустити ваш склад?',
    'cta.subtitle': 'Замовте аудит складу безкоштовно та дізнайтеся, як автоматизація за $1000/місяць може змінити ваш бізнес.',
    'cta.button1': 'Замовити консультацію',
    'cta.button2': 'Розрахувати вартість',
    
    // Contact Form
    'form.title': 'Залиште ваші контакти',
    'form.name': 'Ім\'я',
    'form.phone': 'Телефон',
    'form.city': 'Місто',
    'form.package': 'Оберіть пакет',
    'form.package.base': 'Базовий ($1000/міс)',
    'form.package.custom': 'Під запит',
    'form.integration': 'Час на інтеграцію',
    'form.integration.2weeks': '2 тижні',
    'form.integration.1month': '1 місяць',
    'form.integration.2months': '2+ місяці',
    'form.submit': 'Надіслати заявку',
    'form.close': 'Закрити',
  },
  en: {
    // Header
    'nav.demo': 'System Demo',
    'nav.pricing': 'Pricing',
    'nav.cases': 'Case Studies',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Restart your warehouse with full automation for $1000/month',
    'hero.subtitle': 'Cloud WMS system + turnkey launch + consulting + equipment integrations',
    'hero.cta1': 'Order warehouse audit',
    'hero.cta2': 'View system demo',
    
    // Problems
    'problems.title': 'Key warehouse challenges today',
    'problems.1': 'Shipping errors → returns, dissatisfied customers',
    'problems.2': 'Inventory chaos → inaccurate counts, lack of transparency',
    'problems.3': 'Slow order processing → delivery delays',
    'problems.4': 'High personnel costs → many manual processes',
    'problems.5': 'Human factor dependency → errors during team changes',
    'problems.6': 'Lack of scalability → warehouse struggles with business growth',
    
    // Barriers
    'barriers.title': 'What prevents businesses from implementing WMS',
    'barriers.1.title': 'High cost',
    'barriers.1.desc': 'Large capital investments (tens of thousands of dollars)',
    'barriers.2.title': 'Long timelines',
    'barriers.2.desc': 'Traditional WMS takes 6 to 12 months to launch',
    'barriers.3.title': 'Lack of expertise',
    'barriers.3.desc': 'No specialists who can implement the system',
    'barriers.4.title': 'Setup complexity',
    'barriers.4.desc': 'Ready-made solutions don\'t fit specific business needs',
    'barriers.5.title': 'Risk of failure',
    'barriers.5.desc': 'Companies fear spending money without getting results',
    
    // Solution
    'solution.title': 'We make warehouse automation accessible and real',
    'solution.subtitle': 'What we offer:',
    'solution.1.title': 'SaaS WMS',
    'solution.1.desc': 'Modern cloud warehouse management system without capital costs',
    'solution.2.title': 'Quick launch',
    'solution.2.desc': 'Full warehouse restart in 2-4 weeks instead of 6-12 months',
    'solution.3.title': 'Turnkey',
    'solution.3.desc': 'Audit, process setup, integrations, staff training',
    'solution.4.title': 'Consulting',
    'solution.4.desc': 'Ready proven processes that work',
    'solution.5.title': 'Customization',
    'solution.5.desc': 'Flexible system adaptation to your operations',
    'solution.6.title': 'Integrations',
    'solution.6.desc': 'With ERP, e-commerce and warehouse equipment',
    'solution.7.title': 'Transparent model',
    'solution.7.desc': 'Clear pricing: $1000/month + $50 per employee',
    'solution.8.title': 'Transparency',
    'solution.8.desc': 'You get a warehouse that works clearly, transparently and scalably',
    
    // Comparison Table
    'comparison.title': 'Problem → Solution',
    'comparison.problem': 'Customer problem',
    'comparison.solution': 'Our solution',
    'comparison.row1.problem': 'High WMS cost (tens of thousands $)',
    'comparison.row1.solution': 'SaaS model: $1000/month without large investments',
    'comparison.row2.problem': 'Long launch times (6-12 months)',
    'comparison.row2.solution': 'Turnkey warehouse launch in 2-4 weeks',
    'comparison.row3.problem': 'Customer lacks expertise',
    'comparison.row3.solution': 'We handle consulting, processes and training',
    'comparison.row4.problem': 'Setup complexity, ready systems don\'t fit',
    'comparison.row4.solution': 'Customization for unique business processes',
    'comparison.row5.problem': 'Inventory chaos, shipping errors',
    'comparison.row5.solution': 'Automated inventory control and transparent processes',
    'comparison.row6.problem': 'High personnel costs, manual processes',
    'comparison.row6.solution': 'Automation + optimization, productivity growth',
    'comparison.row7.problem': 'Lack of integrations (ERP, e-commerce, equipment)',
    'comparison.row7.solution': 'Integrations with systems and equipment',
    'comparison.row8.problem': 'Inability to scale warehouse',
    'comparison.row8.solution': 'Ready SaaS architecture with multi-warehouse and KPI',
    
    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.base': 'Base Package',
    'pricing.perMonth': '/month',
    'pricing.feature1': 'Up to 10 warehouse employees',
    'pricing.feature2': 'Full WMS feature set',
    'pricing.feature3': 'Ongoing support and updates',
    'pricing.additional': 'Additional:',
    'pricing.extra1': '+$50 / each employee above base',
    'pricing.extra2': 'Onboarding (setup and launch): $1000-2000',
    'pricing.extra3': 'ERP integrations: T&M (from $1000)',
    'pricing.extra4': 'Customization and equipment integrations — on request',
    'pricing.cta': 'Calculate for your warehouse',
    
    // Why Us
    'whyus.title': 'How we differ from others',
    'whyus.1.title': 'Fast',
    'whyus.1.desc': 'Launch in a few weeks',
    'whyus.2.title': 'Affordable',
    'whyus.2.desc': 'SaaS model without large capex',
    'whyus.3.title': 'Flexible',
    'whyus.3.desc': 'Customization for your processes',
    'whyus.4.title': 'Comprehensive',
    'whyus.4.desc': 'Integrations with ERP, marketplaces and equipment',
    'whyus.5.title': 'Turnkey',
    'whyus.5.desc': 'We handle everything: from software to staff training',
    
    // Competitor Comparison
    'competitors.title': 'Comparison with Competitors',
    'competitors.param': 'Parameter',
    'competitors.us': 'Us (SaaS + processes)',
    'competitors.enterprise': 'Enterprise WMS (SAP/Oracle/Infor)',
    'competitors.local': 'Local WMS (UA)',
    'competitors.odoo': 'Odoo',
    'competitors.price': 'Price',
    'competitors.time': 'Launch time',
    'competitors.functionality': 'Functionality',
    'competitors.us.price': 'from $1000/month',
    'competitors.enterprise.price': '$100k+ one-time + $20k/year support',
    'competitors.local.price': '$30k+ one-time + 20%/year',
    'competitors.odoo.price': 'modules from $10k, limited',
    'competitors.us.time': '2-4 weeks',
    'competitors.enterprise.time': '6-12 months',
    'competitors.local.time': '3-6 months',
    'competitors.odoo.time': '3-9 months',
    'competitors.us.functionality': '95% enterprise',
    'competitors.enterprise.functionality': '100% enterprise',
    'competitors.local.functionality': '30-40% enterprise',
    'competitors.odoo.functionality': '~40% enterprise',
    
    // Cases
    'cases.title': 'How it works in practice',
    'cases.case1.title': 'E-commerce client',
    'cases.case1.desc': 'We automated the warehouse in 2 weeks, reduced shipping errors by 80% and saved 30% on personnel costs.',
    'cases.case2.title': '3PL operator',
    'cases.case2.desc': 'After WMS implementation, order processing sped up 3x.',
    
    // Final CTA
    'cta.title': 'Ready to restart your warehouse?',
    'cta.subtitle': 'Order a free warehouse audit and learn how $1000/month automation can transform your business.',
    'cta.button1': 'Request consultation',
    'cta.button2': 'Calculate cost',
    
    // Contact Form
    'form.title': 'Leave your contacts',
    'form.name': 'Name',
    'form.phone': 'Phone',
    'form.city': 'City',
    'form.package': 'Choose package',
    'form.package.base': 'Base ($1000/month)',
    'form.package.custom': 'Custom quote',
    'form.integration': 'Integration time',
    'form.integration.2weeks': '2 weeks',
    'form.integration.1month': '1 month',
    'form.integration.2months': '2+ months',
    'form.submit': 'Submit request',
    'form.close': 'Close',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uk');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['uk']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

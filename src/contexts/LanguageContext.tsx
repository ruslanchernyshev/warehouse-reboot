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
    'nav.consultation': 'Консультація',
    
    // Hero
    'hero.title': 'Перезапустимо ваш склад з повною автоматизацією за $1000/місяць',
    'hero.subtitle': 'Хмарна WMS-система + запуск під ключ + консалтинг + інтеграції з обладнанням',
    'hero.cta1': 'Замовити аудит складу',
    'hero.cta2': 'Подивитись демо системи',
    'hero.slide2.title': 'Автоматизація складу за 2-4 тижні замість 6-12 місяців',
    'hero.slide2.subtitle': 'Швидкий запуск, повна інтеграція та навчання персоналу включені',
    'hero.slide3.title': 'Прозора модель: $1000/міс + $50 за співробітника',
    'hero.slide3.subtitle': 'Без прихованих платежів, з повною підтримкою та оновленнями',
    
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
    'barriers.6.title': 'Відсутність гнучкості',
    'barriers.6.desc': 'Жорсткі системи не адаптуються до змін у бізнес-процесах',
    
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
    'comparison.subtitle': 'Як ми вирішуємо ваші складські виклики',
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
    'pricing.custom': 'Своє рішення',
    'pricing.perMonth': '/місяць',
    'pricing.feature1': 'До 10 співробітників складу',
    'pricing.feature2': 'Повний набір функцій WMS',
    'pricing.feature3': 'Постійна підтримка та оновлення',
    'pricing.custom.feature1': 'Індивідуальний аналіз потреб',
    'pricing.custom.feature2': 'Розробка унікальних модулів',
    'pricing.custom.feature3': 'Повна інтеграція з вашою ERP',
    'pricing.custom.feature4': 'Виділений менеджер проекту',
    'pricing.additional': 'Додатково:',
    'pricing.extra1': '+$50 / кожен співробітник понад базу',
    'pricing.extra2': 'Onboarding (налаштування та запуск): $1000-2000',
    'pricing.extra3': 'Інтеграції з ERP: T&M (від $1000)',
    'pricing.extra4': 'Кастомізація та інтеграції з обладнанням — за запитом',
    'pricing.cta': 'Порахувати для вашого складу',
    'pricing.cta.custom': 'Отримати пропозицію',
    
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
    'cases.stats.years': '8+ років',
    'cases.stats.yearsDesc': 'досвіду на ринку',
    'cases.stats.clients': '150+',
    'cases.stats.clientsDesc': 'успішних проектів',
    'cases.stats.cta': 'Ставайте частиною нашої історії успіху',
    
    // Final CTA
    'cta.title.part1': 'Готові перезапустити',
    'cta.title.part2': 'ваш склад?',
    'cta.separator1': 'Автоматизація складу — це не просто програмне забезпечення, це повна трансформація бізнес-процесів',
    'cta.separator2': 'Ми допомагаємо компаніям зробити перший крок до ефективного та масштабованого складу',
    'cta.separator3': 'Наш досвід показує, що правильно налаштована WMS-система збільшує продуктивність на 40-60%',
    'cta.separator4': 'Зниження помилок у відвантаженнях до мінімуму та повна прозорість усіх складських операцій',
    'cta.separator5': 'Масштабування без додаткових капітальних витрат — ваш склад росте разом з бізнесом',
    'cta.separator6': 'Професійна підтримка та консалтинг на кожному етапі впровадження та експлуатації',
    'cta.separator7': 'Результати вже через 2-4 тижні замість місяців очікування та невизначеності',
    'cta.title': 'Готові перезапустити ваш склад?',
    'cta.subtitle': 'Замовте аудит складу безкоштовно та дізнайтеся, як автоматизація за $1000/місяць може змінити ваш бізнес.',
    'cta.button1': 'Замовити консультацію',
    'cta.button2': 'Розрахувати вартість',
    
    // Contact Form
    'form.title': 'Залиште ваші контакти',
    'form.consultation': 'Замовити консультацію',
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
    
    // Footer
    'footer.about': 'Про нас',
    'footer.aboutText': 'Ми робимо автоматизацію складу доступною для кожного бізнесу',
    'footer.contact': 'Контакти',
    'footer.email': 'info@wmspro.com',
    'footer.phone': '+380 (44) 123-45-67',
    'footer.followUs': 'Слідкуйте за нами',
    'footer.rights': '© 2025 WMS Pro. Всі права захищені.',
    
    // Cookie Consent
    'cookies.message': 'Ми використовуємо файли cookie для покращення вашого досвіду на сайті. Продовжуючи перегляд, ви погоджуєтесь з нашою',
    'cookies.policyLink': 'політикою конфіденційності',
    'cookies.accept': 'Прийняти',
    'cookies.decline': 'Відхилити',
    
    // Thank You Dialog
    'thankYou.title': 'Дякуємо за заявку!',
    'thankYou.message.audit': 'Наш менеджер зв\'яжеться з вами найближчим часом для обговорення деталей аудиту складу.',
    'thankYou.message.calculate': 'Наш менеджер зв\'яжеться з вами протягом дня та надішле детальний розрахунок вартості.',
    'thankYou.submessage': 'Ми працюємо з 9:00 до 18:00, Пн-Пт',
    'thankYou.close': 'Закрити',
    
    // Contact Page
    'contactPage.title': 'Контакти',
    'contactPage.subtitle': 'Зв\'яжіться з нами будь-яким зручним способом',
    'contactPage.email.title': 'Email',
    'contactPage.phone.title': 'Телефон',
    'contactPage.address.title': 'Адреса',
    'contactPage.address.value': 'Київ, Україна',
    'contactPage.hours.title': 'Години роботи',
    'contactPage.hours.value': 'Пн-Пт: 9:00 - 18:00',
    'contactPage.form.title': 'Надішліть повідомлення',
    'contactPage.form.subtitle': 'Заповніть форму, і ми зв\'яжемось з вами найближчим часом',
    'contactPage.form.message': 'Повідомлення',
    'contactPage.form.messagePlaceholder': 'Ваше повідомлення...',
    
    // Privacy Page
    'privacy.title': 'Політика конфіденційності',
    'privacy.lastUpdated': 'Останнє оновлення: 2025',
    'privacy.section1.title': '1. Збір інформації',
    'privacy.section1.content': 'Ми збираємо інформацію, яку ви надаєте нам безпосередньо, включаючи ім\'я, телефон, email та інші дані, які ви вводите в форми на нашому сайті.',
    'privacy.section2.title': '2. Використання інформації',
    'privacy.section2.content': 'Ми використовуємо зібрану інформацію для зв\'язку з вами, надання послуг, відправки важливих повідомлень та покращення нашого сервісу.',
    'privacy.section3.title': '3. Захист даних',
    'privacy.section3.content': 'Ми вживаємо заходів для захисту вашої особистої інформації від несанкціонованого доступу, зміни, розкриття або знищення.',
    'privacy.section4.title': '4. Файли cookie',
    'privacy.section4.content': 'Наш сайт використовує файли cookie для покращення користувацького досвіду. Ви можете налаштувати браузер для відмови від cookie.',
    'privacy.section5.title': '5. Розкриття інформації',
    'privacy.section5.content': 'Ми не продаємо, не обмінюємо та не передаємо вашу особисту інформацію третім особам без вашої згоди, за винятком випадків, передбачених законом.',
    'privacy.section6.title': '6. Зв\'язок з нами',
    'privacy.section6.content': 'Якщо у вас є питання щодо цієї політики конфіденційності, будь ласка, зв\'яжіться з нами:',
  },
  en: {
    // Header
    'nav.demo': 'System Demo',
    'nav.pricing': 'Pricing',
    'nav.cases': 'Case Studies',
    'nav.contact': 'Contact',
    'nav.consultation': 'Consultation',
    
    // Hero
    'hero.title': 'Restart your warehouse with full automation for $1000/month',
    'hero.subtitle': 'Cloud WMS system + turnkey launch + consulting + equipment integrations',
    'hero.cta1': 'Order warehouse audit',
    'hero.cta2': 'View system demo',
    'hero.slide2.title': 'Warehouse automation in 2-4 weeks instead of 6-12 months',
    'hero.slide2.subtitle': 'Quick launch, full integration and staff training included',
    'hero.slide3.title': 'Transparent model: $1000/month + $50 per employee',
    'hero.slide3.subtitle': 'No hidden fees, with full support and updates',
    
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
    'barriers.6.title': 'Lack of flexibility',
    'barriers.6.desc': 'Rigid systems don\'t adapt to changes in business processes',
    
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
    'comparison.subtitle': 'How we solve your warehouse challenges',
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
    'pricing.custom': 'Custom Solution',
    'pricing.perMonth': '/month',
    'pricing.feature1': 'Up to 10 warehouse employees',
    'pricing.feature2': 'Full WMS feature set',
    'pricing.feature3': 'Ongoing support and updates',
    'pricing.custom.feature1': 'Individual needs analysis',
    'pricing.custom.feature2': 'Unique module development',
    'pricing.custom.feature3': 'Full ERP integration',
    'pricing.custom.feature4': 'Dedicated project manager',
    'pricing.additional': 'Additional:',
    'pricing.extra1': '+$50 / each employee above base',
    'pricing.extra2': 'Onboarding (setup and launch): $1000-2000',
    'pricing.extra3': 'ERP integrations: T&M (from $1000)',
    'pricing.extra4': 'Customization and equipment integrations — on request',
    'pricing.cta': 'Calculate for your warehouse',
    'pricing.cta.custom': 'Get a quote',
    
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
    'cases.stats.years': '8+ years',
    'cases.stats.yearsDesc': 'of market experience',
    'cases.stats.clients': '150+',
    'cases.stats.clientsDesc': 'successful projects',
    'cases.stats.cta': 'Become part of our success story',
    
    // Final CTA
    'cta.title.part1': 'Ready to restart',
    'cta.title.part2': 'your warehouse?',
    'cta.separator1': 'Warehouse automation is not just software, it\'s a complete transformation of business processes',
    'cta.separator2': 'We help companies take the first step towards an efficient and scalable warehouse',
    'cta.separator3': 'Our experience shows that a properly configured WMS system increases productivity by 40-60%',
    'cta.separator4': 'Reducing shipping errors to a minimum and complete transparency of all warehouse operations',
    'cta.separator5': 'Scaling without additional capital costs — your warehouse grows with your business',
    'cta.separator6': 'Professional support and consulting at every stage of implementation and operation',
    'cta.separator7': 'Results in just 2-4 weeks instead of months of waiting and uncertainty',
    'cta.title': 'Ready to restart your warehouse?',
    'cta.subtitle': 'Order a free warehouse audit and learn how $1000/month automation can transform your business.',
    'cta.button1': 'Request consultation',
    'cta.button2': 'Calculate cost',
    
    // Contact Form
    'form.title': 'Leave your contacts',
    'form.consultation': 'Request consultation',
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
    
    // Footer
    'footer.about': 'About Us',
    'footer.aboutText': 'We make warehouse automation accessible to every business',
    'footer.contact': 'Contact',
    'footer.email': 'info@wmspro.com',
    'footer.phone': '+380 (44) 123-45-67',
    'footer.followUs': 'Follow Us',
    'footer.rights': '© 2025 WMS Pro. All rights reserved.',
    
    // Cookie Consent
    'cookies.message': 'We use cookies to improve your experience on our website. By continuing to browse, you agree to our',
    'cookies.policyLink': 'privacy policy',
    'cookies.accept': 'Accept',
    'cookies.decline': 'Decline',
    
    // Thank You Dialog
    'thankYou.title': 'Thank you for your request!',
    'thankYou.message.audit': 'Our manager will contact you soon to discuss warehouse audit details.',
    'thankYou.message.calculate': 'Our manager will contact you within the day and send a detailed cost calculation.',
    'thankYou.submessage': 'We work from 9:00 AM to 6:00 PM, Mon-Fri',
    'thankYou.close': 'Close',
    
    // Contact Page
    'contactPage.title': 'Contact Us',
    'contactPage.subtitle': 'Get in touch with us in any convenient way',
    'contactPage.email.title': 'Email',
    'contactPage.phone.title': 'Phone',
    'contactPage.address.title': 'Address',
    'contactPage.address.value': 'Kyiv, Ukraine',
    'contactPage.hours.title': 'Working Hours',
    'contactPage.hours.value': 'Mon-Fri: 9:00 AM - 6:00 PM',
    'contactPage.form.title': 'Send us a message',
    'contactPage.form.subtitle': 'Fill out the form and we will contact you soon',
    'contactPage.form.message': 'Message',
    'contactPage.form.messagePlaceholder': 'Your message...',
    
    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: 2025',
    'privacy.section1.title': '1. Information Collection',
    'privacy.section1.content': 'We collect information that you provide to us directly, including name, phone, email, and other data you enter in forms on our website.',
    'privacy.section2.title': '2. Use of Information',
    'privacy.section2.content': 'We use the collected information to contact you, provide services, send important messages, and improve our service.',
    'privacy.section3.title': '3. Data Protection',
    'privacy.section3.content': 'We take measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
    'privacy.section4.title': '4. Cookies',
    'privacy.section4.content': 'Our website uses cookies to improve user experience. You can configure your browser to refuse cookies.',
    'privacy.section5.title': '5. Information Disclosure',
    'privacy.section5.content': 'We do not sell, exchange, or transfer your personal information to third parties without your consent, except as required by law.',
    'privacy.section6.title': '6. Contact Us',
    'privacy.section6.content': 'If you have questions about this privacy policy, please contact us:',
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

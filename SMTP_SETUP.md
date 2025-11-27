# Настройка SMTP для отправки email

## Переменные окружения для Vercel

Добавьте следующие переменные в настройках проекта Vercel (Settings → Environment Variables):

### Обязательные переменные:

1. **SMTP_HOST** - адрес SMTP сервера
   - Пример: `smtp.gmail.com`, `smtp.mail.ru`, `smtp.yandex.ru`

2. **SMTP_PORT** - порт SMTP сервера
   - Обычно: `587` (TLS) или `465` (SSL)
   - Пример: `587`

3. **SMTP_USER** - имя пользователя для авторизации
   - Пример: `your-email@gmail.com`

4. **SMTP_PASS** - пароль для авторизации
   - Для Gmail: используйте "Пароль приложения" из настроек аккаунта
   - Пример: `your-app-password`

5. **SMTP_FROM** - адрес отправителя (обычно совпадает с SMTP_USER)
   - Пример: `your-email@gmail.com`

6. **SMTP_TO** - адрес получателя (ваш email для получения заявок)
   - Пример: `your-email@gmail.com`

## Примеры настройки для популярных почтовых сервисов:

### Gmail
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=your-email@gmail.com
```

**Важно для Gmail:** 
- Включите двухфакторную аутентификацию
- Создайте "Пароль приложения" в настройках Google аккаунта
- Используйте этот пароль приложения в SMTP_PASS

### Mail.ru
```
SMTP_HOST=smtp.mail.ru
SMTP_PORT=465
SMTP_USER=your-email@mail.ru
SMTP_PASS=your-password
SMTP_FROM=your-email@mail.ru
SMTP_TO=your-email@mail.ru
```

### Yandex
```
SMTP_HOST=smtp.yandex.ru
SMTP_PORT=465
SMTP_USER=your-email@yandex.ru
SMTP_PASS=your-password
SMTP_FROM=your-email@yandex.ru
SMTP_TO=your-email@yandex.ru
```

## Установка зависимостей

После добавления переменных окружения, установите зависимости:

```bash
npm install
```

или

```bash
yarn install
```

## Проверка работы

После деплоя на Vercel, отправьте тестовую заявку через форму на сайте. Если все настроено правильно, вы получите email с данными заявки.

## Устранение проблем

1. **Ошибка авторизации**: Проверьте правильность SMTP_USER и SMTP_PASS
2. **Ошибка подключения**: Проверьте SMTP_HOST и SMTP_PORT
3. **Письма не доходят**: Проверьте папку "Спам" и настройки фильтров


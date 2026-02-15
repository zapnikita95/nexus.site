# Форма заявки (order.html)

При отправке форма отправляет данные на **POST /api/order-form** бэкенда мультиагентной платформы. Письмо уходит на почту, заданную в переменных окружения сервера API.

## Настройка на сервере API

В `.env` или окружении сервера, где запущен FastAPI, задайте:

- `ORDER_FORM_TO` — адрес получателя (например `sales@нексус-тех.рф`)
- `ORDER_FORM_SMTP_HOST` — хост SMTP (например `smtp.yandex.ru`, `mail.hosting.reg.ru` и т.п.)
- `ORDER_FORM_SMTP_PASSWORD` — пароль от почты (или пароль приложения)
- Опционально: `ORDER_FORM_SMTP_PORT` (по умолчанию 587), `ORDER_FORM_SMTP_USER` (по умолчанию равен `ORDER_FORM_TO`)

Пароль и логин **не храните в репозитории** — только в env на сервере.

## Настройка сайта (API на другом домене)

Сайт на GitHub Pages, API на Railway (или другом хосте): URL API задаётся в **`config.json`** в корне сайта:

```json
{ "apiBase": "https://nexussite-production-c1b5.up.railway.app" }
```

Форма при загрузке запрашивает `config.json` и шлёт заявки на этот адрес. Альтернатива: атрибут на `<body>`: `data-order-api="https://ваш-api"`.

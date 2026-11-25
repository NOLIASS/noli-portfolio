# NOLI — сайт-портфоліо з адмінкою

Стек: Next.js 14 (App Router) · React 18 · Prisma · SQLite. Адмінка за паролем, заявки й каталог у базі.

## Запуск
1. `npm install`
2. `cp .env.example .env` і впишіть свій `ADMIN_PASSWORD` та довгий випадковий `AUTH_SECRET`
3. `npx prisma db push`
4. `npm run db:seed` (стартовий каталог)
5. `npm run dev` → http://localhost:3000, адмінка: /admin

## Що де
- `app/page.js` головна, `app/catalog` каталог, `app/admin` адмінка (каталог, статус «беру проєкти», заявки)
- `app/globals.css` дві теми й анімації, `components/` клієнтські шматки
- Пароль адмінки не працює, поки він дорівнює `change-me`.

## Публікація
SQLite-файл не живе на Vercel. Для Vercel змініть у `prisma/schema.prisma` provider на `postgresql`, а `DATABASE_URL` на Neon чи Supabase. Для VPS чи Railway з диском SQLite лишається як є.

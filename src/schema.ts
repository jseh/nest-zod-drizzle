// role can be either "user" or "bot"
// export const userBotEnum = pgEnum("user_bot_enum", ["user", "bot"]);

import { bigint, mysqlTable, text, timestamp } from 'drizzle-orm/mysql-core';

export const usuarios = mysqlTable('usuarios', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  nombre: text('nombre').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// export the type declaration of chats.
// export type ChatType = typeof chats.$inferSelect;

export const libros = mysqlTable('libros', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  autorId: bigint('autor_id', { mode: 'bigint' })
    .references(() => usuarios.id)
    .notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// role: userBotEnum('role').notNull(),

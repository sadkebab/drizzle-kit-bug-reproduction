import { nanoid } from "nanoid";

import { int, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const Books = sqliteTable("books", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  title: text("title"),
  description: text("description"),
  year: int("year"),
  author: text("author"),
  genre: text("genre"),
  length: int("length"),
  createdAt: int("createdAt", {
    mode: "timestamp_ms",
  }).$defaultFn(() => new Date()),
});

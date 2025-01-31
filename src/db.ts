import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const db = drizzle({
  client: createClient({ url: "file:./.db.sqlite" }),
});

export { db };

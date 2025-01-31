import { db } from "./db";
import { Books } from "./schema";
import { faker } from "@faker-js/faker";
async function seed() {
  for (let i = 0; i < 100; i++) {
    console.log(i);
    await db.insert(Books).values({
      title: faker.book.title(),
      description: faker.lorem.paragraph(),
      year: faker.date.past().getFullYear(),
      author: faker.book.author(),
      genre: faker.book.genre(),
    });
  }
}

seed();

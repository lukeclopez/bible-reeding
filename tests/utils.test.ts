import { countChaptersFor } from "../src/utils";

test("Should return chapter count for given book", () => {
  const chapterCount = countChaptersFor("Genesis");
  expect(chapterCount).toBe(50);
});

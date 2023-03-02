import { assert, test } from "@hazae41/phobos"
import { Future } from "./future.js"

test("future", async ({ test }) => {
  const future = new Future<void, unknown>()

  const start = Date.now()
  setTimeout(() => future.ok(), 1000)

  await future.promise

  const delay = Date.now() - start
  assert(delay > 1000)
})
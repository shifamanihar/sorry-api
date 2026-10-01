const test = require("node:test");
const assert = require("node:assert");

const sorry = require("../src");

test("returns a cute apology", () => {
  const result = sorry("Baby");

  assert.ok(result.includes("Baby"));
});

test("works without a name", () => {
  const result = sorry();

  assert.ok(result.includes("Baby"));
});
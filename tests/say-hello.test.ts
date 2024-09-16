import { sayHello } from "../src/say-hello";

describe("Say Hello Test", () => {
  it("should say Hello Bimo", () => {
    const bimo = sayHello("Bimo");
    expect(bimo).toBe("Hello Bimo");
  });
});

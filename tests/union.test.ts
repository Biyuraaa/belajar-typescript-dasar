describe("Test Union", () => {
  it("should be union", () => {
    let bimo: string | number | boolean = "Bimo";

    bimo = 20;

    bimo = true;

    expect(bimo).toBeTruthy();
  });

  it("should support typeof operator", () => {
    const operator = (value: string | number | boolean) => {
      if (typeof value == "string") {
        return value.toUpperCase();
      } else if (typeof value == "number") {
        return value * 2;
      } else {
        return !value;
      }
    };

    expect(operator("bimo")).toBe("BIMO");
    expect(operator(5)).toBe(10);
    expect(operator(true)).toBeFalsy();
  });
});

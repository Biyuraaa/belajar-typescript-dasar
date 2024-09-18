describe("Test Null and Undifined", () => {
  it("should support undifined", () => {
    function sayHello(name?: string): string {
      if (name) {
        return `Hello ${name}`;
      } else {
        return "Hello Guest";
      }
    }
    const name: string | undefined = undefined;
    expect(sayHello(name)).toBe("Hello Guest");
    expect(sayHello("Bimo")).toBe("Hello Bimo");
    // sayHello(null) //Error karena parameter tidak bisa menerina null
  });
  it("should support null", () => {
    function sayHello(name?: string | null): string {
      if (name) {
        return `Hello ${name}`;
      } else {
        return "Hello Guest";
      }
    }
    const name: string | undefined = undefined;
    expect(sayHello(name)).toBe("Hello Guest");
    expect(sayHello("Bimo")).toBe("Hello Bimo");
    expect(sayHello(null)).toBe("Hello Guest");
  });
});

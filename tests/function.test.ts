describe("Function TypeScript", () => {
  it("should support funtion in typescript", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Bimo")).toBe("Hello Bimo");
  });
  it("should support function with parameter in typescript", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Bimo")).toBe("Hello Bimo");
    expect(sayHello()).toBe("Hello Guest");
  });
  it("should support function with rest parameter in typescript", () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
    expect(sum()).toBe(0);
  });
  it("should support function with optional parameter in typescript", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello, ${firstName} ${lastName}`;
      } else {
        return `Hello, ${firstName}`;
      }
    }

    expect(sayHello("M Bimo", "Bayu Bagaskara")).toBe(
      "Hello, M Bimo Bayu Bagaskara"
    );
    expect(sayHello("Biyuraaa")).toBe("Hello, Biyuraaa");
  });
  it("should support overloading function in typescript", () => {
    function callMe(value: string, value2: number): string;
    function callMe(value: number): number;
    function callMe(value: any) {
      if (typeof value == "string") {
        return value;
      } else if (typeof value == "number") {
        return value;
      }
    }

    expect(callMe("Bimo", 10)).toBe("Bimo");
    expect(callMe(10)).toBe(10);
  });
  it("should support function as paramater in typescript", () => {
    function sayMyName(name: string, filter: (name: string) => string): string {
      return `Hello, ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayMyName("Bimo", toUpper)).toBe("Hello, BIMO");
  });
  it("should support anynomous function as paramater in typescript", () => {
    function sayMyName(name: string, filter: (name: string) => string): string {
      return `Hello, ${filter(name)}`;
    }

    expect(
      sayMyName("Bimo", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello, BIMO");
  });
  it("should support arrow function as paramater in typescript", () => {
    function sayMyName(name: string, filter: (name: string) => string): string {
      return `Hello, ${filter(name)}`;
    }

    expect(
      sayMyName("Bimo", (name: string): string => name.toUpperCase())
    ).toBe("Hello, BIMO");
  });
});

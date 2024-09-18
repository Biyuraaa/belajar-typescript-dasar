import { Customer, CustomerType } from "../src/enum";

describe("Test Enum", () => {
  it("should be able to create Customer", () => {
    const bimo: Customer = {
      id: "187221049",
      name: "M Bimo Bayu Bagaskara",
      type: CustomerType.GOLD,
    };
    console.info(bimo);
    expect(bimo.type).toBe("GOLD");
  });
});

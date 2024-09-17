import { Category, Product } from "../src/type-alias";

describe("Test Type Alias", () => {
  it("should  support type alias in typescript", () => {
    const makanan: Category = {
      id: 1,
      name: "Makanan",
    };

    const pecel_lele: Product = {
      id: "pecel_lele",
      name: "Pecel Lele",
      category: makanan,
      description: "Pecel Lele enak dengan sajian sambel bajak khas madiun",
      price: 15000,
    };

    expect(pecel_lele.name).toBe("Pecel Lele");
    expect(pecel_lele.price).toBe(15000);
    expect(makanan.id).toBe(1);
  });
});

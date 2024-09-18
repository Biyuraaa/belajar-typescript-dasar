import { Mahasiswa } from "../src/mahasiswa";

describe("Test Interface", () => {
  it("should support interface", () => {
    const bimo: Mahasiswa = {
      nim: "187221049",
      nama: "M Bimo Bayu Bagaskara",
      ipk: 3.52,
    };

    console.log(bimo);
    expect(bimo.nama).toBe("M Bimo Bayu Bagaskara");
  });
});

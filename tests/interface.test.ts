import { Mahasiswa, JK } from "../src/mahasiswa";

describe("Test Interface", () => {
  it("should support interface", () => {
    const bimo: Mahasiswa = {
      nim: "187221049",
      nama: "M Bimo Bayu Bagaskara",
      ipk: 3.52,
      jk: JK["LAKI-LAKI"],
    };

    console.log(bimo);
    expect(bimo.nama).toBe("M Bimo Bayu Bagaskara");
  });
  it("should support readonly properties", () => {
    const bimo: Mahasiswa = {
      nim: "187221049",
      nama: "M Bimo Bayu Bagaskara",
      ipk: 3.52,
      jk: JK["LAKI-LAKI"],
    };

    console.log(bimo);
    // bimo.jk = JK.PEREMPUAN error karena jk merupakan atribut readonly dimana jika atribut tersebut dirubah maka akan menghasilkan error
    expect(bimo.nama).toBe("M Bimo Bayu Bagaskara");
  });
});

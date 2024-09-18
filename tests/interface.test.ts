import { Mahasiswa, JK } from "../src/mahasiswa";
import { Person } from "../src/person";

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
  it("should support interface function", () => {
    interface sum {
      (a: number, b: number): number;
    }

    const sumFunction: sum = (a: number, b: number) => {
      return a + b;
    };

    expect(sumFunction(1, 2)).toBe(3);
  });
  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const bimo: StringArray = [
      "187221049",
      "M Bimo Bayu Bagaskara",
      "Sistem Informasi",
    ];

    expect(bimo[0]).toBe("187221049");

    interface Mahasiswa {
      [key: string]: string;
    }

    const bimo2: Mahasiswa = {
      nim: "187221049",
      nama: "M Bimo Bayu Bagaskara",
      jurusan: "Sistem Informasi",
    };

    expect(bimo2["nim"]).toBe("187221049");
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "M Bimo Bayu Bagaskara",
      sayHello: function (name: string): string {
        return `Hello ${name}`;
      },
    };

    expect(person.sayHello("Bimo")).toBe("Hello Bimo");
  });

  it("should support intersection types in interface", () => {
    interface HasName {
      name: string;
    }
    interface HasId {
      id: string;
    }

    type Person = HasName & HasId;

    const bimo: Person = {
      name: "M Bimo Bayu Bagaskara",
      id: "bimo",
    };

    expect(bimo.name).toBe("M Bimo Bayu Bagaskara");
  });
});

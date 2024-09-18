import { Employee, Manager } from "../src/employee";

describe("Test Extends Interface", () => {
  it("should support extends", () => {
    const bimo: Employee = {
      id: "P001",
      division: "Webdev",
      name: "M Bimo Bayu Bagaskara",
    };

    const biyura: Manager = {
      id: "M001",
      division: "Webdev",
      name: "Biyuraaa",
      numberOfEmployee: 5,
    };

    console.info(bimo);
    console.info(biyura);
  });
});

describe("Tipe Data", () => {
  it("should be string", () => {
    const name: string = "M Bimo Bayu Bagaskara";
    expect(name).toBe("M Bimo Bayu Bagaskara");
  });
  it("should be number", () => {
    const age: number = 20;
    expect(age).toBe(20);
  });

  it("should be boolean", () => {
    const isTrue: boolean = true;
    expect(isTrue).toBeTruthy();
  });
});

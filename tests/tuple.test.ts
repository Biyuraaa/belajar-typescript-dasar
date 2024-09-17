describe("Test Tuple", () => {
  it("should be tuple", () => {
    const bimo: [string, string, string] = [
      "187221049",
      "M Bimo Bayu Bagaskara",
      "Sistem Informasi",
    ];
    bimo[1] = "Biyuraaa";
    expect(bimo[0]).toBe("187221049");
    expect(bimo[1]).toBe("Biyuraaa");
    expect(bimo[2]).toBe("Sistem Informasi");
  });
  it("should be tuple", () => {
    const bimo: readonly [string, string, string] = [
      "187221049",
      "M Bimo Bayu Bagaskara",
      "Sistem Informasi",
    ];

    //bimo[1] = "Biyuraaa"; //Menghasilkan error karena readonly tidak bisa dirubah

    expect(bimo[0]).toBe("187221049");
    expect(bimo[1]).toBe("M Bimo Bayu Bagaskara");
    expect(bimo[2]).toBe("Sistem Informasi");
  });
});

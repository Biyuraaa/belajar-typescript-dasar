describe("Test Any", () => {
  it("should be any", () => {
    const bimo: any = {
      nim: "187221049",
      name: "M Bimo Bayu Bagaskara",
      jurusan: "Sistem Informasi",
    };

    bimo.name = "Biyuraaa";
    expect(bimo.nim).toBe("187221049");
    expect(bimo.name).toBe("Biyuraaa");
    expect(bimo.jurusan).toBe("Sistem Informasi");
  });
});

describe("Test Object", () => {
  it("should be object type", () => {
    const bimo: {
      nim: string;
      name: string;
      jurusan: string;
      description?: string;
    } = {
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

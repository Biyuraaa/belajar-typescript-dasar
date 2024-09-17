describe("Test array", () => {
  it("should be array", () => {
    const hobbies: string[] = ["Coding", "Reading", "Gaming"];
    const number: number[] = [1, 2, 3, 4];
    console.log(hobbies);
    console.log(number);
  });
  it("should be ReadOnly Array", () => {
    const hobbies: ReadonlyArray<string> = ["Coding", "Reading", "Gaming"];
    console.log(hobbies);
  });
});

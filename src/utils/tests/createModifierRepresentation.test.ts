import createModifierRepresentation from "../createModifierRepresentation";

describe("Create  Modifier Representation", () => {
  test("Should return value with plus when number >=12 given", () => {
    const testibleValues = [
      [16, "+3"],
      [9, "-1"],
      [10, "0"],
      [17, "+3"],
      [0, "-5"],
    ];

    testibleValues.forEach((el) => {
      expect(createModifierRepresentation(el[0].toString())).toBe(el[1]);
    });
  });
});

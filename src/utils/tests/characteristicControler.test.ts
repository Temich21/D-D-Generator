import charcteristicControler from "../characteristicControler";

describe("Creat Characteristic Controler", () => {
    test("Should value between 0 and 30", () => {
        const testibleValues = [
            [15, 15],
            [0, 0],
            [30, 30],
            [-5, 0],
            [45, 0],
        ];

        testibleValues.forEach((el) => {
            expect(charcteristicControler(el[0])).toBe(el[1]);
        });
    })
})
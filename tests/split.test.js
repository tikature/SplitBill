const { splitBill } = require("../src/split.js");

test("splitBill membagi tagihan secara rata", () => {
    const result = splitBill(20000, 4);
    expect(result).toBe(5000);
});

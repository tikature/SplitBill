const { splitBill, calculateTotalWithCharge } = require("../src/split.js");

test("splitBill membagi tagihan secara rata (belum pembulatan)", () => {
    const result = splitBill(20000, 4);
    expect(result).toBe(5000);
});

test("splitBill membagi tagihan dengan pembulatan 1000", () => {
    const result = splitBill(21000, 4, 1000);
    expect(result).toBe(6000);
});

test("calculateTotalWithCharge menghitung total dengan service fee dan diskon", () => {
    const result = calculateTotalWithCharge(200000, 10000, 20000);
    expect(result).toBe(190000);
});
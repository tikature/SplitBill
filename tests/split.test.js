const fs = require("fs");
const {
    splitBill,
    calculateTotalWithCharge,
    DEFAULT_ROUND,
    DEFAULT_SERVICE_CHARGE,
    addTransaction,
    getHistory
} = require("../src/split.js");
const TEST_FILE = "./src/data.json";

test("splitBill membagi tagihan secara rata (tanpa pembulatan)", () => {
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

test("calculateTotalWithCharge tanpa diskon menghasilkan total + service fee", () => {
    const result = calculateTotalWithCharge(100000, 5000, 0);
    expect(result).toBe(105000);
});

test("splitBill mengembalikan 0 jika jumlah orang <= 0", () => {
    const result = splitBill(10000, 0, 100);
    expect(result).toBe(0);
});

beforeEach(() => {
    if (fs.existsSync(TEST_FILE)) {
        fs.writeFileSync(TEST_FILE, "[]");
    }
});

test("addTransaction menyimpan transaksi ke file data.json", () => {
    addTransaction("Makan siang", "Dewi Budi", 200000, 4, 5000, 10000, 1000);
    const data = JSON.parse(fs.readFileSync(TEST_FILE, "utf8"));
    expect(data.length).toBe(1);
    expect(data[0].description).toBe("Makan siang");
});

test("getHistory menampilkan data tanpa error", () => {
    addTransaction("Ngopi sore", "Dewi", 100000, 2, 0, 0, 500);
    expect(() => getHistory()).not.toThrow();
});

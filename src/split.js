const fs = require("fs");

const DATA_FILE = "./src/data.json";
const DEFAULT_ROUND = 100;
const DEFAULT_SERVICE_CHARGE = 5000;

function splitBill(total, people, roundTo = DEFAULT_ROUND) {
    if (people <= 0) return 0;
    const raw = total / people;
    return Math.ceil(raw / roundTo) * roundTo;
}

function calculateTotalWithCharge(total, serviceFee = DEFAULT_SERVICE_CHARGE, discount = 0) {
    const afterDiscount = total - discount;
    return afterDiscount + serviceFee;
}

function saveHistory(entry) {
    let data = [];
    if (fs.existsSync(DATA_FILE)) {
        const fileData = fs.readFileSync(DATA_FILE, "utf8");
        if (fileData) data = JSON.parse(fileData);
    }
    data.push(entry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function addTransaction(description, names, total, people, serviceFee = DEFAULT_SERVICE_CHARGE, discount = 0, roundTo = DEFAULT_ROUND) {
    const totalWithCharge = calculateTotalWithCharge(total, serviceFee, discount);
    const perPerson = splitBill(totalWithCharge, people, roundTo);

    const entry = {
        description,
        names,
        total,
        serviceFee,
        discount,
        totalWithCharge,
        perPerson,
        people
    };

    saveHistory(entry);

    console.log(`✅ Transaksi disimpan: ${description}`);
    console.log(`Total setelah service & diskon: Rp${totalWithCharge}`);
    console.log(`Setiap orang bayar: Rp${perPerson}`);
}

function getHistory() {
    if (!fs.existsSync(DATA_FILE)) {
        console.log("📂 Belum ada riwayat transaksi.");
        return;
    }

    const fileData = fs.readFileSync(DATA_FILE, "utf8");
    const data = JSON.parse(fileData);

    console.log("\n📜 Riwayat Transaksi:");
    data.forEach((item, i) => {
        console.log(
            `${i + 1}. ${item.description} - ${item.names} | Total: Rp${item.totalWithCharge}, Per Orang: Rp${item.perPerson}`
        );
    });
}

module.exports = {
    splitBill,
    calculateTotalWithCharge,
    addTransaction,
    getHistory
};

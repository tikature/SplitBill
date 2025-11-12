function splitBill(total, people, roundTo = 100) {
    if (people <= 0) return 0;
    const raw = total / people;
    return Math.ceil(raw / roundTo) * roundTo;
}

function calculateTotalWithCharge(total, serviceFee = 5000, discount = 0) {
    const afterDiscount = total - discount;
    return afterDiscount + serviceFee;
}

module.exports = { splitBill, calculateTotalWithCharge };

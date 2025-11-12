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

module.exports = {
    DEFAULT_ROUND,
    DEFAULT_SERVICE_CHARGE,
    splitBill,
    calculateTotalWithCharge
};

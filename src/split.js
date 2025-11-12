function splitBill(total, people) {
    if (people <= 0) return 0;
    return total / people;
}

module.exports = { splitBill };

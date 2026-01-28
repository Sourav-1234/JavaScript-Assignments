function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (const tx of transactions) {
    if (!categoryTotals[tx.category]) {
      categoryTotals[tx.category] = 0;
    }
    categoryTotals[tx.category] += tx.price;
  }

  return Object.entries(categoryTotals).map(([category, total]) => ({
    category,
    totalSpent: total
  }));
}

module.exports = calculateTotalSpentByCategory;

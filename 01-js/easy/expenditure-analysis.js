/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function calculateTotalSpentByCategory(transactions) {
  let result = []; 
  for (let t of transactions){
    let cat = t.category;
    let price = t.price;
    let index = result.findIndex(item => item.category === cat)
    if (index !== -1){
      result[index].totalSpent = price  + result[index].totalSpent
    }else{
      result.push({'category': cat, 'totalSpent': price});
    }

  }
  return result;
}

module.exports = calculateTotalSpentByCategory;

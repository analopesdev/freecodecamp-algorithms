/**
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 * Update the current existing inventory item quantities (in arr1). If an item cannot be found,
 * add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 */

function updateInventory(arr1, arr2) {
  // varrer array mais atualizado
  arr2.forEach(([qtde, item]) => {
    let found = false;

    // varrer array um e atualizar casou encontrar
    for (let i = 0; i < arr1.length; i++) {
      //verificar se tem um item em array1 em array2
      if (arr1[i][1] === item) {
        // se sim, atualizar a quantidade e dizer que encontrou
        arr1[i][0] += qtde;
        found = true;
        return;
      }
    }

    if (!found) {
      arr1.push([qtde, item]);
    }
  });

  arr1.sort((a, b) => a[1].localeCompare(b[1]));
  return arr1;
}

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));

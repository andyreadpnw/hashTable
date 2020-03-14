function hashStringToInt(s, tableSize) {
  let hash = 13;
  for (let i = 0; i < s.length; i++) {
    hash = (hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
  console.log("hash");
}

class HashTable {
  table = new Array(17);

  setItem = (key, value) => {
    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
    this.table[idx] = [[key, value]];
  };

  getItem = key => {
    const idx = hashStringToInt(key, this.table.length);
    return this.table[idx].find(x => x[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "tim");
myTable.setItem("age", 5);
console.log(myTable.getItem("firstName"));
console.log(myTable.table);
for (let t = 0; t < myTable.table.length; t++) {
  console.log(myTable.table[t]);
}

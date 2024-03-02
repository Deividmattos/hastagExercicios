const regularArray = [1, 7, 3, 5, 8, 0, 9, 7, 8];

for (let count = 0; count < regularArray.length; count++) {
  regularArray[count] += count;
}

console.log("O array atual eh:", regularArray);

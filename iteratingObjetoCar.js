const car = {
  brand: "toyota",
  model: "camry",
  year: 2023,
  color: "silver",
  fuelType: "Gasolina",
  engineCapacity: "2.5l",
  transmission: "Automatic",
  power: "203 horspower",
  seatingCapacity: 5,
  price: "$25.500",
};

for (info in car) {
  console.log(info);
}

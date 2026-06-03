//=====================================================
// HASH TABLE
//=====================================================

console.log("--------------------------------------------");
console.log("HASH TABLE :");
console.log("--------------------------------------------");


//=====================================================
// Problem 1
// Store and Display Student Details
//=====================================================

let arr = {};

arr["name"] = "Ashwin";
arr["age"] = 24;
arr["course"] = "MERN";

console.log("Student Details :", arr);

console.log("Name :", arr["name"]);


//=====================================================
// Problem 2
// Update Product Price
//=====================================================

let brr = {};

brr["product"] = "Laptop";
brr["price"] = 50000;

console.log("Before Update :", brr);

brr["price"] = 55000;

console.log("After Update :", brr);


//=====================================================
// Problem 3
// Add, Delete and Display Employee Details
//=====================================================

let crr = {};

crr["id"] = 101;
crr["name"] = "Rahul";
crr["department"] = "Development";

console.log("Before Delete :", crr);

delete crr["department"];

console.log("After Delete :", crr);

console.log("Employee Name :", crr["name"]);
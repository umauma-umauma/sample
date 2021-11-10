// var sample = "lllllll";
// console.log(sample);

// sample = "aaaaaaa";
// console.log(sample);

// var num = 9;
// console.log(num);

// num = 8;
// console.log(num);

// let num = 100;
// console.log(num);

// num = 1000;
// console.log(num);

// let num = 111;

// const num = 110;
// console.log(num);

// const sam = {
//   name: "kane",
//   age : 30,
// };
// sam.name = "lane";
// sam.sane = "lllll";
// console.log(sam);

// const val = ["dog", "cat"];
// val[0] = "rab";
// val.push("mon");
// console.log(val);

// const name = "kevin";
// const age = 31;

// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

// function func1(num) {
//   return num;
// }
// console.log(func1(10));

// const func2 = (str) => {
// return str;
// }
// console.log(func2(19));

// const func3 = str => str;
// console.log(func3(111));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(func4(5,99));

// const pro = {
//   name: "kane",
//   age: 30,
// };

// const message = `名前は${pro.name}です。年齢は${pro.age}歳です`;
// console.log(message);

// const {name, age} = pro;
// const message1 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message1);

// const myPro = ["kane", 30];
// const message = `名前は${myPro[0]}です。年齢は${myPro[1]}歳です。`;
// console.log(message);

// const [name, age] = myPro;
// const message1 = `名前は${name}です。年齢は${age}歳です`;
//  console.log(message1);

// const sayHello = (name = "guest") => console.log(`こんにちは！${name}さん`);
// sayHello();
// sayHello("kane");

// const arr = [1, 2, 3];
// // console.log(arr);
// // console.log(...arr);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// // sumFunc(arr[0], arr[1]);
// sumFunc(...arr);

// const arr1 = [1, 2, 3, 4, 5];
// const [num1, num2, num3, ...arr2] = arr1;
// console.log(arr2);

// const arr3 = [10, 20];
// const arr4 = [30, 40];

// const arr6 = [...arr3];
// console.log(arr6);

// console.log(arr3 + arr4);

// const arr5 = [...arr3, ...arr4];

// console.log(arr5);

// const arr7 = [...arr3];
// arr7[0] = 100;
// console.log(arr3);

const nameArr = ["kane", "kevin", "jesus"];

// for (let index = 0; index < nameArr.length; index++)
// {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "kevin") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

// const val1 = 3 > 0 ? `true` : `false`;
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formatNum = typeof num === "number" ? num.toLocaleString : "数値ではない";
// console.log(formatNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 >= 100 ? "100以上" : "許容範囲内";
// }

// console.log(checkSum(100, 0));

// const flag1 = true;
// const flag2 = false

// if (flag1 || flag2) {
//   console.log("1か2はtrue")
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrue")
// } else {
//   console.log("NG")
// }

// const num = 500;
// const fee = num || "金額未設定";
// console.log(fee);

// const num2 = 100;
// const fee2 = num2 && "設定された";
// console.log(fee2);

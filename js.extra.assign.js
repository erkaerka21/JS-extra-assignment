//Ugugdsun array iin hamgiin tom, hamgiin bagiin olj, dundajiin olj, min, max, avg gsn 3 utag butsaadag function bichih. jishee ni: input [1, 2, 3, 4, 5] output { min: 1, max: 5, avg: 3 }
function minMaxAvg(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }
  average = sum / arr.length;
  return { min: min, max: max, avg: average };
}
let inputNumbers = [2, 5, 6, 8, 10, 80, 98];
let func = minMaxAvg(inputNumbers);
console.log("өгөгдсөн тоонууд : ", inputNumbers);
console.log("өгөгдсөн тоонуудын хэвлэх утгаад : ", func);

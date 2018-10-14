const wakeUp = (ms: number) => {
  setTimeout(() => {
    console.log("おきた:chap01");
  }, ms);
};
const greet = () => {
  console.log("おやすみ:chap01");
  wakeUp(2000);
  console.log("おはよう:chap01");
};

export const Chap01 = () => {
  greet();

  console.log(arr2, obj2, obj);
};

const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e"];
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1, d: 4, e: 5 };
const name = "aya";
const obj = { name, age: 26 };

export const Chap05 = () => {
  console.log(plusOneDouble(4));

  console.log(multi(2, 4));
  console.log(currieMulti(2)(4));
  console.log(simpleCurrieMulti(2)(4));
  console.log(triple(5));
};

// returnは下記のように省略可能
// const hof = (ex: any, fn: any) => {
//   return (n: any) => fn(n + ex);
// };
const hof = (ex: any, fn: any) => (n: any) => fn(n + ex);
const plusOneDouble = hof(1, (n: any) => n * 2);

// カリー化と関数の部分適用
const multi = (n: number, m: number) => n * m;
const currieMulti = (n: number) => {
  return (m: number) => n * m;
};
const simpleCurrieMulti = (n: number) => (m: number) => n * m;
const triple = currieMulti(3);

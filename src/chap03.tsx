const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const greet = async () => {
  console.log("おやすみ:chap02");

  try {
    await sleep(2000);
    console.log("おきた:chap02");
    console.log("おはよう!:chap02");
  } catch (err) {
    console.log("睡眠例外です：", err);
  }
};

export const Chap03 = () => {
  greet();
};

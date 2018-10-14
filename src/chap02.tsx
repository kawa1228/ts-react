const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const greet = () => {
  console.log('おやすみ:chap03');

  delay(2000)
    .then(() => {
      console.log('おきた:chap03');
    })
    .then(() => {
      console.log('おはよう:chap03');
    })
    .catch(err => {
      console.log('睡眠例外です', err);
    });
};

export const Chap02 = () => {
  greet();
};

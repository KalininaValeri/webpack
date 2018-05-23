const sum = (...arrayNumbers) => {
  let sum = 0;

  arrayNumbers.forEach(item => {
    sum = sum + item;
  });

  return sum;
};

const avg = (...arr) => {
  return sum(...arr) / arr.length;
};

export default avg;
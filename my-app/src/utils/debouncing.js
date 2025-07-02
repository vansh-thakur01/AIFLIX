export const debouncing = (func, delay) => {
  let timer;

  return [
    (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay * 1000);
    },
    () => clearInterval(timer),
  ];
};

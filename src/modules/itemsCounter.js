const count = () => {
  const items = document.querySelectorAll('.photo-item');
  let counter = 0;
  items.forEach(() => {
    counter += 1;
  });
  return counter;
};

export default count;
// Instructions can be found in destructuring_arrays.md

export const sequence = (order => {
  const [first, second, third] = order;
  return `${first}, ${second}, ${third}`;
});

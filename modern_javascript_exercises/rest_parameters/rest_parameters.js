// Instructions can be found in rest_parameters.md

export const add = (...args) => {
  // Add a loop here
  return args.reduce((total, curr) => total + curr, 0);  
};

add(1, 2, 3, 4, 5);
// Instructions can be found in let_vs_var.md

// Problems with var

const count = (() => {
  for (let i = 0; i < 5; i++) {
    console.log(i + " inside the forLoop");
  }
  // console.log(i + " outside the forLoop");
});

count();

// Another problem with var is that we can overwrite it, like this:

let greeting1 = "Hello 😘";
let greeting2 = "Not today, pal! 😤";

console.log(greeting1 + " " + greeting2);

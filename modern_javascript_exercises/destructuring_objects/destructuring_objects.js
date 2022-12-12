// Instructions can be found in destructuring_objects.md

export const introduction = (person => {
  const {name, city, pet} = person;
  return `Hello my name is ${name} and I live in ${city} with ${pet}`;
});

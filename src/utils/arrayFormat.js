const compare = (a, b) => {
  const contactA = a.id;
  const contactB = b.id;

  let comparison = 0;
  if (contactA > contactB) {
    comparison = 1;
  } else if (contactA < contactB) {
    comparison = -1;
  }
  return comparison;
};

export const sortByContactId = (array) => {
  return array.sort(compare);
};

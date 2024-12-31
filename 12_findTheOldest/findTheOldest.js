const findTheOldest = function (people) {
  //   const currentYear = new Date().getFullYear();

  //   const personWithAge = people.reduce((acc, curr) => {
  //     const yearOfDeath = curr.yearOfDeath || currentYear;

  //     acc.push({
  //       ...curr,
  //       age: yearOfDeath - curr.yearOfBirth,
  //     });

  //     return acc;
  //   }, []);

  //   const oldestPerson = personWithAge.sort((a, b) => b.age - a.age)[0];

  //   return oldestPerson;

  const currentYear = new Date().getFullYear();

  const oldestPerson = people.reduce((acc, curr) => {
    const yearOfDeath = curr.yearOfDeath || currentYear;
    const age = yearOfDeath - curr.yearOfBirth;

    if (!acc || age > acc.age) {
      return { ...curr, age };
    }

    return acc;
  }, null);

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

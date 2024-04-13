function findTheOldest(people) {
    const oldestPerson = people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest);
        const currentAge = getAge(current);
        return oldestAge > currentAge ? oldest : current;
    });

    return oldestPerson;
}

function getAge(person) {
    const currentYear = new Date().getFullYear();
    if (!person.yearOfDeath) {
        return currentYear - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;

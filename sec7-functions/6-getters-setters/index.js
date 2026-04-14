const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    fullName() {
        return `${person.firstName} ${person.lastName}`;
    }
};

console.log(person.fullName()); // Mosh Hamedani

// however, cant do person.fullName = 'John Smith';

const person1 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith'; // calls the setter 

console.log(person); // it will consist the new details
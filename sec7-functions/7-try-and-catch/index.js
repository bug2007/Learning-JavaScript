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
        if (typeof value !== string) 
            throw new Error('Value is not a string.')   // somewhere else, we need to catch this exception 
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = 'John Smith'; // calls the setter 
}
catch (e) {
    console.log(e);  // for developers to see
    alert(e); // for users to see
}

console.log(person); // it will consist the new details
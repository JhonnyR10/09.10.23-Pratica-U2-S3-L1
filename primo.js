class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(otherUser) {
    if (this.age === otherUser.age) {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
    } else if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    }
  }
}

// Creazione di due istanze della classe User
const user1 = new User("Giovanni", "Longo", 31, "Roma");
const user2 = new User("Alessandro", "Firano", 45, "Milano");

//const confronto = user1.compareAge(user2);
//console.log(confronto);
console.log(user1.compareAge(user2));

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  hasSameOwnerAs(otherPet) {
    for (let i = 0; i < otherPet.length; i++) {
      //Controllo se il proprietario del pet appena inserito è proprietario di altri Pet già inseriti
      if (this.ownerName === otherPet[i].ownerName) {
        console.log(
          ` Il Proprietario: ${this.ownerName} di: ${this.petName} è anche il propietario di: ${otherPet[i].petName}`
        );
        return true;
      }
    }
  }
}

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");
const pets = [];

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  // Aggiungi l'animale alla lista
  const listItem = document.createElement("li");
  listItem.textContent = `Nome: ${newPet.petName}, Proprietario: ${newPet.ownerName}, Specie: ${newPet.species}, Razza: ${newPet.breed}`;
  petList.appendChild(listItem);
  newPet.hasSameOwnerAs(pets);
  pets.push(newPet);
  // Resetta il form
  petForm.reset();
});

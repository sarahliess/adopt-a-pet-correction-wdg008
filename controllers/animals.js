const pets = require("../helper");

const getHome = (req, res) => {
  res.send(
    `<h1>Adopt a pet</h1><p>Browse through the links below to find your new furry friend:</p><ul>
    <a href="/animals/dogs"><li>Dogs</li></a>
    <a href="/animals/cats"><li>Cats</li></a>
    <a href="/animals/rabbits"><li>Rabbits</li></a>
    </ul>`
  );
};

const getAnimalList = (req, res) => {
  res.send(`<h1>List of pets</h1>`);
};

const getAnimalType = (req, res) => {
  console.log(req.params.pet_type);
  const petType = req.params.pet_type;
  let html = "";

  if (petType === "dogs" || petType === "cats" || petType === "rabbits") {
    const typeList = pets[petType];

    //für jedes Tier in "typeList" einmal html Variable mit Namen füllen
    for (let i = 0; i < typeList.length; i++) {
      html += `<a href="/animals/${petType}/${i}"><li>${typeList[i].name}</li></a>`;
    }
    res.send(`<h1>${petType}</h1><ul>${html}</ul>`);
  } else {
    res.send("nice try");
  }
};

const getSinglePet = (req, res) => {
  console.log(req.params);

  const thisAnimalType = req.params.pet_type;
  const thisAnimalId = req.params.pet_id;

  const thisAnimal = pets[thisAnimalType][thisAnimalId];
  console.log(thisAnimal);

  res.send(`<h1>${thisAnimal.name}</h1>
  <p>${thisAnimal.name} is ${thisAnimal.age} years old. ${thisAnimal.description}</p> <img src=${thisAnimal.url}/>`);
};

module.exports = { getHome, getAnimalList, getAnimalType, getSinglePet };

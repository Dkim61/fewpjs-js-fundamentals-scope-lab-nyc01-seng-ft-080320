
const animal = "dog"

function myAnimal() {
  return animal
}

function yourAnimal(pet = 'cat') {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  let animal = pet
  return animal
}

function add2(n) {
  const two = 2
  return n + two
  

  // Feel free to move things around!
  // two = 2
}
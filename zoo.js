//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your Zoo "object literal" and Animal "constructor" and "prototypes" here.
//------------------------------------------------------------------------------------------------------------------
// (function(window) {

//   function Animal(type, num_limbs) {
//     this.type = type;
//     this.num_limbs = num_limbs;
//   }
//   window.Animal = Animal;

//   Animal.prototype.identify = function() {
//     console.log("I am a " + this.type + " with " + this.num_limbs + " legs.");
//   };

//   window.Zoo = Zoo;

//   function Zoo() {
//   }

//   Zoo.prototype.init = function(animal) {
//     this.animals = animals;
//   };

//   Zoo.prototype.bipeds = function() {
//     var bipeds = [];
//     for(var i = 0; i < animals.length; ++i) {
//     if (animals[i].num_limbs == 2)
//         bipeds.push(animals[i]);
//     }
//     return bipeds;
//   };

//   Zoo.prototype.quadrupeds = function() {
//     var quadrupeds = [];
//     for(var i = 0; i < animals.length; ++i) {
//     if (animals[i].num_limbs == 4)
//         quadrupeds.push(animals[i]);
//     }
//     return quadrupeds;
//   };

// }(window)); // creates a new scope


  function Animal(type, num_limbs) {
    this.type = type;
    this.num_limbs = num_limbs;
  }
  // window.Animal = Animal;

  Animal.prototype.identify = function() {
    console.log("I am a " + this.type + " with " + this.num_limbs + " legs.");
  };

  // window.Zoo = Zoo;

  function Zoo() {
  }

  Zoo.prototype.init = function(animal) {
    this.animals = animals;
  };

  Zoo.prototype.bipeds = function() {
    var bipeds = [];
    for(var i = 0; i < animals.length; ++i) {
    if (animals[i].num_limbs == 2)
        bipeds.push(animals[i]);
    }
    return bipeds;
  };

  Zoo.prototype.quadrupeds = function() {
    var quadrupeds = [];
    for(var i = 0; i < animals.length; ++i) {
    if (animals[i].num_limbs == 4)
        quadrupeds.push(animals[i]);
    }
    return quadrupeds;
  };

// creates a new scope



//------------------------------------------------------------------------------------------------------------------
// DRIVER CODE: Do **NOT** change anything below this point. Your task is to implement code above to make this work.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

var animals = [
  new Animal("Human", 2),
  new Animal("Monkey", 2),
  new Animal("Kangaroo", 2),
  new Animal("Horse", 4),
  new Animal("Cow", 4),
  new Animal("Centipede", 100)
];

Zoo.init(animals);

assert(
  Zoo.bipeds().length === 3, "the Zoo should have 3 bipeds"
);
assert(
  Zoo.quadrupeds().length === 2, "the Zoo should have 2 bipeds"
);
assert(
  animals[0].identify() === "I am a Human with 2 legs.", "humans have 2 legs"
);
assert(
  animals[2].name === "Kangaroo", "expected 'Kangaroo'"
);
assert(
  animals[0].identify === animals[5].identify, "only one implementation of the identify() function should exist"
);

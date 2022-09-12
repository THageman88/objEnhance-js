function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

let favoriteNumber= 42 ;
const instructor ={
    firstName : "Colt", [favoriteNumber] : "That is my favorite number!"
}
//changed name from instructor to professor to get rid of error messages
const professor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  function createAnimal (species , verb, noise){
    return{
        species ,[verb](){
            return noise ;
        }
    }
  }
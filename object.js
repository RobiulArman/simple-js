// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName());
//   const x = id;
  console.log(person.id);
  console.log(person["firstName"]);

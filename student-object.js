// Student Object
const student = {
  name: "Sokha",
  age: 20,
  grade: "A",
  displayInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  },
};

student.displayInfo();

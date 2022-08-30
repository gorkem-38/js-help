// class User {
//     constructor(username, iban, city) {
//       this.username = username;
//       this.iban = iban;
//       this.city = city;
//     };
//   };
  
//   console.log(new User("ruben", 76, "Meaux"));
//   console.log(new User("gorkem", 78, "Meaux"));
  
//   class Car {
//     constructor(mark, model, price, color, desc) {
//       this.mark = mark;
//       this.model = model;
//       this.price = price;
//       this.color = color;
//       this.desc = desc;
//     };
//   };
  
//   console.log(new Car("audi", "a6", 50000, "red", "lorem"));
  
//   // Les Class avec super
  
//   class Fly {
//       constructor(time) {
//           this.time = time;
//       }
  
//       flying() {
//           return "je vole";
//       }
//   }
  
  // class Plane extends Fly {
  //     constructor(society, color, price, desc, time) {
  //         super(time);
  //         this.society = society;
  //         this.color = color;
  //         this.price = price;
  //         this.desc = desc;
  //     };
      
//       results() {
//           console.log(`${super.flying()} avec l'avion de gorkem`);
//       }
//   };
  
//   let gorkemPlane = new Plane("Acs", "white", 200000, "ff");
//   console.log(gorkemPlane);
//   console.log(gorkemPlane.results());
//   console.log(new Date());

// class Car extends Speed {
//   constructor(mark, model, price, color, desc, city) {
//     super(fast);
//     this.mark = mark;
//     this.model = model;
//     this.price = price;
//     this.color = color;
//     this.desc = desc;
//     this.city = city;
//   };
// }

// class Speed {
//   constructor(fast) {
//     this.fast = fast;
//   }

//   fastest() {
//     return "This car is very fast";
//   }
// }
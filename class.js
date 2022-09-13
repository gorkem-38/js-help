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
//       };
//   };
  
//   class Plane extends Fly {
//       constructor(society, color, price, desc, time) {
//           super(time);
//           this.society = society;
//           this.color = color;
//           this.price = price;
//           this.desc = desc;
//       };
      
//       results() {
//           console.log(`${super.flying()} avec l'avion de gorkem`);
//       }
//   };
  
//   let gorkemPlane = new Plane("Acs", "white", 200000, "ff");
//   console.log(gorkemPlane);
//   console.log(gorkemPlane.results());
//   console.log(new Date());

// class Car extends Speed {
//   constructor(mark, model, price, color, desc, city, fast) {
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


// class Agency {
//   constructor(name) {
//     this.name = name;
//   };
  
//   eclair() {
//     return `Je suis l'agence eclair : ${this.name}`;
//   };
  
//   century21() {
//     return `Je suis l'agence century21 : ${this.name}`;
//   }
  
//   foncia() {
//     return `Je suis l'agence century21 : ${this.name}`;
//   };
// };

// class Home extends Agency {
//   constructor(surface, price, location, name) {
//     super(name);
//     this.surface = surface;
//     this.price = price;
//     this.location = location;
//   };

//   showAgency() {
//     console.log(`La surface de ma maison est de : ${this.surface} et le nom de mon agence est : ${this.name}`);
//   };

//   showBis() {
//     console.log(`La surface de ma maison est de : ${this.surface} et le prix est de : ${this.price}€ : et je suis l'agence : ${super.century21}`);
//   }
// };

// let michel = new Home("100m²", 1, "Meaux", "eclair");
// let daniel = new Home("150m²", 10, "Meaux", "century21");
// michel.showAgency();
// daniel.showAgency();
// console.log(`prix : ${daniel.price}`);
// console.log("prix : " + daniel.price + "€");



class Player {
  constructor(injury, strong, technical, happy, age) {
    this.injury = injury;
    this.strong = strong;
    this.technical = technical;
    this.happy = happy;
    this.age = age;
  };

  barcelona() {
    return "Ses meilleures années"
  };
};

let mbappe = new Player("never", "very", "normal", "very happy", 23);
mbappe.barcelona
console.log(mbappe);
class FindClothes {
    constructor(category) {
      this.category = category;
    }
    SearchCategory(value) {
      value = this.category;
      switch (value) {
        case "shirt":
          console.log("je suis un t-shirt");
          break;
        case "shoes":
          console.log("je suis une chaussure");
        default:
          console.log("je suis une alerte");
          break;
      }
    };
  };
  
  export default FindClothes;
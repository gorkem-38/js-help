class Phone {
    constructor(color, price) {
      this.color = color;
      this.price = price;
    };
  };
  
  const time = () => {
    setTimeout(() => {
      console.log(new Phone("red", 1700));
      setInterval(() => {
        console.log(new Phone("blue", 1700));
      }, 50000);
    }, 50000);
  };
  
  time();
  
  const promise = (message) => {
    setTimeout(() => {
      console.log(message);
      return message;
    }, 1000);
  };
  
  let promisee = new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        "42";
      })
    );
  });
  
  promisee
    .then(() => {
      console.log("true");
    })
    .catch((error) => {
      console.error(error);
    });
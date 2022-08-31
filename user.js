class User {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
    };
};

export default User; 

import Input from "./input";

let input1 = Input("number");
let input2 = Input("text")
const root = document.getElementById("root");
root.append(input1);
root.append(input2);
import User from "./components/user";

const submitUser = document.getElementById("submit-user");
const accountNumber = document.getElementById("account-number");
const resultsAccount = document.getElementById("results-account");

function addUser() {
    let user = new User(accountNumber.value);

    console.log(resultsAccount.append(user.accountNumber));
}

submitUser.addEventListener("click", addUser);
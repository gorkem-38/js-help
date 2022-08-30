const Input = () => {
    let input = document.createElement("input");
    input.type = type;
    return input
}

export default Input;

const Inputt = (type, id) => {
    let input = document.createElement("input");
    input.type = type;
    input.id = id || "default";
    input.classList.add("border-2");
    input.classList.add("border-red-500");
    return input;
}

let input2 = Inputt("number", "");
let input3 = Inputt("text", "");
let input4 = Inputt("date", "");
let input5 = Inputt("colors", "");
console.log(input2, input3, input4, input5);

const root = document.getElementById("root");
root.append(input2);
root.append(input3);
root.append(input4);
root.append(input5);
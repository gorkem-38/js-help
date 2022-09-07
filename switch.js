let age = 21;

switch (age) {
    case 18:
        console.log("tu peux boire de l'alcool en France");
        break;
    case 21: 
        console.log("tu peux boire de l'alcool aux usa");
        break;
    default:
        console.log("tu ne peux pas boire de l'alcool");
        break;
};

let pays = "Corée";

switch (pays) {
    case "States":
    case "Mexique": 
        console.log("tu es Européen");
        break;
    case "Corée du nord": 
        console.log("tu n'es pas Européen");
    default:
        console.log("tu es undefined");
        break;
};
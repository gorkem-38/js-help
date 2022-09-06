setTimeout(() => {
    console.log("set time out");
}, 5000);

setInterval(() => {
   console.log("set interval"); 
}, 1000);

const set = () => {
    setTimeout(() => {
        setInterval(() =>{
            console.log("44");
        }, 2000);
    }, 5000);
};
set()
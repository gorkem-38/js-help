import Computer from './computer';

let hatim = new Computer("ssd", "Rtx3090", "intel 7");
let warren = new Computer("hdd", "lorem", "amd 5");

console.log(hatim);
console.log(warren);

const btn = document.getElementById("submit");
const hardDisk = document.getElementById("hard-disk");
const gpu = document.getElementById("gpu");
const cpu = document.getElementById("cpu");
const category = document.getElementById("category");

const resultsHdd = document.getElementById("results-hdd");
const resultsgpu = document.getElementById("results-gpu");
const resultscpu = document.getElementById("results-cpu");
const resultsCategory = document.getElementById("results-category");


const submitForm = () => {
    let computer = new Computer(hardDisk.value, gpu.value, cpu.value, category.value);
    resultsHdd.append(computer.hardDisk);
    resultsgpu.append(computer.gpu);
    resultscpu.append(computer.cpu);
    resultsCategory.append(computer.category);
    console.log(computer);
}
btn.addEventListener("click", submitForm);

let a = new Computer("hdd", "rtc", "intel", "keybo");
console.log(a);
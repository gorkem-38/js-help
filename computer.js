class AccessoryPc {
    constructor(category) {
        this.category = category;
    };

    keyboard(value) {
        value = this.category;
        try {
            if(value === "keyboard") {
                return "je suis un clavier.";
            } else {
                return "keyboard error";
            }
        } catch (error) {
            console.error(error);
        }
    };
};

class Computer extends AccessoryPc {
    constructor(hardDisk, gpu, cpu, category) {
        super(category);
        this.hardDisk = hardDisk;
        this.gpu = gpu;
        this.cpu = cpu;
    };
};

export default Computer;
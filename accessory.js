const resultsCategory = document.getElementById("results-category");

class AccessoryPc {
    constructor(category) {
        this.category = category;
    };

    keyboard() {
        try {
            let span = document.createElement("span");
            span.textContent = "Je suis un clavier";
            resultsCategory.append(span);
            console.log(span);
        } catch (error) {
            console.error(error);
        };
    };

    screens() {
        try {
            let span = document.createElement("span");
            span.textContent = "Je suis un écran";
            resultsCategory.append(span);
            console.log(span);
        } catch (error) {
            console.error(error);
        }
    }
};

export default AccessoryPc;
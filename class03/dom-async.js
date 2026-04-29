// let's load in DOM
const button = document.getElementById("load_button");
const output = document.getElementById("output");
const input_field = document.getElementById("inp")

function inputCheck(str) {
    let promise = new Promise((resolve, reject) => {
        if (str === "Hello") {
            setTimeout(() => {
                resolve("Content loaded");
            }, 3000);
        }
        else {
            setTimeout(() => {
                reject("content didnt load");
            }, 3000);
        }
    });
    return promise;
}

// let's add our function to the button

button.addEventListener("click", () => {
    output.textContent = "loading...";
    let str = input_field.value;

    inputCheck(str).then((result) => {
        output.textContent = result;
    }).catch((error) => {
        output.textContent = error;
    })
});
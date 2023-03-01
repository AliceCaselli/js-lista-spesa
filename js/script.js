
const listItems = ["acqua", "pasta", "fagioli", "passata", "latte", "uova", "cereali"];

let listEl = document.getElementById("list");


let index = 0;

while(index < listItems.length) {

    let newEl = document.createElement("li");

    listEl.append(newEl);

    newEl.innerHTML = listItems[index];

    index++;

}
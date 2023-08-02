const toDoItems = document.getElementsByClassName("to-do-items")[0];

const input = document.getElementById("input");
const deleteIcon = document.getElementById("delete");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter")
    addItem();
})

function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var deleteIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '<div';

    checkIcon.className = "fa-solid fa-check";
    checkIcon.style.color = "black";
    checkIcon.addEventListener("click", function() {
        checkIcon.style.color = "#FBA1B7";
    })

    divChild.appendChild(checkIcon);

    deleteIcon.className = "fa-solid fa-circle-minus";
    deleteIcon.style.color = "black";
    deleteIcon.addEventListener("click", function() {
        divParent.remove();
    })

    divChild.appendChild(deleteIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}
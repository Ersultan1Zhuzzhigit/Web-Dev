const form = document.getElementById("todo-form");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputElement = document.getElementById("todo-input");
    const inputValue = inputElement.value.trim();
    if (inputValue) {
        addListItem(inputValue);
        inputElement.value = "";
    }
});


function contentLabel(content){
    const ht = document.createCDATASection('de')
    
}

function addListItem(itemText) {
    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${itemText}</span>
        <button type="button" class="delete-btn" aria-label="Delete">
            <img src="images/logo.png" alt="">
        </button>
    `;

    taskList.appendChild(li);
}



// ONE listener for all
taskList.addEventListener("change", function (e) {
    if (e.target.classList.contains("task-checkbox")) {
        const li = e.target.closest("li");
        li.classList.toggle("done");
    }
});

taskList.addEventListener("click", function (e) {
    if (e.target.closest(".delete-btn")) {
        const li = e.target.closest("li");
        li.remove();
    }
});
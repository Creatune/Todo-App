function addTask() {
    var ul = document.getElementById("todo")
    var li = document.createElement("li")
    var children = ul.children.length + 1
    li.setAttribute("id", "element" + children)
    let task = window.prompt("Enter task: ")
    if(task != "") {
        li.appendChild(document.createTextNode(task));
        ul.appendChild(li)
    }
    else {
        alert("Task field is empty. Try again")
    }
}

function eraseElements() {
    document.getElementById("todo").innerHTML = ""
}

addBtn.addEventListener("click", addTask)

clearBtn.addEventListener("click", eraseElements)
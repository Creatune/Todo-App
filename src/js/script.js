function addTask() {
    let ul = document.getElementById("todo")
    let li = document.createElement("li")
    let children = ul.children.length + 1
    li.setAttribute("id", "element" + children)
    let task = window.prompt("Enter task: ")
    if(task != "" && task != null) {
        let checkbox = document.createElement("INPUT")
        let i = document.createElement('i')
        i.setAttribute("class", "fa fa-times closeTask")
        i.setAttribute("id", "elementIcon" + children)
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("class", "check")
        li.appendChild(checkbox)
        li.appendChild(document.createTextNode(task))
        li.appendChild(i);
        ul.appendChild(li);
        ("elementIcon" + children).addEventListener("click", document.getElementById("elementIcon" + children).innerHTML = "")

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
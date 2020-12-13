function addTask() {
    let ul = document.getElementById("todo")
    let li = document.createElement("li")
    let children = ul.children.length + 1
    li.setAttribute("id", "element" + children)
    let task = window.prompt("Enter task: ")
    if(task != "") {
        let checkbox = document.createElement("INPUT")
        let i = document.createElement('i')
        i.setAttribute("class", "fa fa-times closeTask")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("class", "check")
        li.appendChild(checkbox)
        li.appendChild(document.createTextNode(task))
        li.appendChild(i)
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
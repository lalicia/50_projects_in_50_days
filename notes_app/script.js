const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"))
console.log(notes);

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
    const note = document.createElement("div")
    note.classList.add("note")

    note.innerHTML = `
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    //if text passed into function want it to show
    textArea.value = text
    main.innerHTML = marked.parse(text)


    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS();
    })

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })

    //keeps updated text when edited
    textArea.addEventListener("input", (e) => {
        const {value} = e.target

        main.innerHTML = marked.parse(value);

        updateLS();
    })

    document.body.appendChild(note)
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea")

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    //console.log(notes)
    localStorage.setItem("notes", JSON.stringify(notes))
}


// //sets something
// localStorage.setItem("name", "Brad")
// //gets something
// localStorage.getItem("name")
// //pretty simple, just key value pairs - can only store strings in local storage, if want to store objects or arrays etc it has to be stringified and you can do this with a method called JSON.stringify
// localStorage.setItem("name", JSON.stringify())
// //to then get out would need to wrap in JSON.parse:
// JSON.parse(localStorage.getItem("name"))

// //to delete
// localStorage.removeItem("name")
// localStore.clear() will clear everything

// sessionStorage works the same but only for the session - if you close the browser it won't come back
const buttonElement = document.getElementById('btn')
const appElement = document.getElementById('app')

const noteTable = "Notes"

getNotes().forEach( (note) => {

    const noteElement = createNoteElement(note.id, note.content)
    appElement.insertBefore(noteElement, buttonElement)
})

function createNoteElement(id, content) {

    const textareaElement = document.createElement('textarea')
    textareaElement.classList.add('note')
    textareaElement.placeholder = "Empty Note"
    textareaElement.value = content

    textareaElement.addEventListener('dblclick', ()=> {

        const warning = confirm('Do You Want To Delete This Note?')

        if (warning) {

            deleteNote(id, textareaElement)

        }
    })

    textareaElement.addEventListener('input', ()=> {

        updateNote(id, textareaElement.value)
    })

    return textareaElement
}

function deleteNote(id, element) {

    const notes = getNotes().filter( (note) => note.id != id)
    saveNote(notes)
    appElement.removeChild(element)
}

function updateNote(id, content) {

    const allNotes = getNotes()
    const target = allNotes.filter( (note)=> note.id == id)[0]
    target.content = content
    saveNote(allNotes)
}

function addNote() {

    const notes = getNotes()

    const noteObj = {

        id: Math.floor( Math.random() * 100000),
        content: "",
    }

    const noteElement = createNoteElement(noteObj.id, noteObj.content)
    appElement.insertBefore(noteElement, buttonElement)

    notes.push(noteObj)

    saveNote(notes)
}

function saveNote(notes) {

    localStorage.setItem(noteTable, JSON.stringify(notes))
}

function getNotes() {

    return JSON.parse(localStorage.getItem(noteTable) || "[]")
}

buttonElement.addEventListener('click', addNote)
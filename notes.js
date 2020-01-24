const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

// Add Note Functuion
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note is added!')
    } else {
        console.log('Note title is taken!')
    }
}

// Remove Note Functuion
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title === title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

// List Note Function
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.red.inverse.bold('- List of your Nots -'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

// Read Notes Function
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}


///////////////////////// APIS /////////////////////

// Save Notes API
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Load Notes API
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

// Export Modules
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

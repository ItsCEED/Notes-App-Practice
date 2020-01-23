const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

// Custome Version Yargs
yargs.version('1.1.0')

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Use a title from existing note',
            demandOption: true,
            type: 'string'
        },
       
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// Add, Remove, Read, List Notes


yargs.parse()
 //test
'use strict';

let modal = document.querySelector('.modal');
let noteForm = document.querySelector('.note-form');
let noteTable = document.querySelector('.note-table');
let cancel = document. querySelector('.cancel-btn');

let noteDeleteButtons;
let noteList = JSON.parse(localStorage.getItem('notes')) || [];

noteForm.addEventListener('submit', (e)=>{
  addNote(e);

});



function addNote(e){
    e.preventDefault();

    let newNote = {};

    let title = document.querySelector('.title');
    let note = document.querySelector('.note');

    console.log(title);
    if(title.value == '' || note.value == ''){
      return alert('Please enter both fields.');
    } else {
      newNote.title = title.value;
      newNote.note = note.value;
    }
    title.value = '';
    note.value = '';
    console.log(newNote);

    noteList.push(newNote);
    appendNotes();
    cancel.click();

}

function appendNotes(){
  let notes = Array.from(document.querySelector('.noteItem'));
  if(notes.length > 0){
    notes.forEach(note =>{
      note.remove();
    })
  }

  noteList.map(note =>{
    //Create table cells
    let tr = document.createElement('tr');
    tr.classList = 'noteItem';
    let tdTitle = document.createElement('td');
    tdTitle.innerText = note.title;
    let tdNote = document.createElement('td');
    tdNote.innerText = note.note;
    let tdDelete = document.createElement('td');
    tdDelete.innerHTML = '&times';
    tdDelete.classList.add('delete-item');

    //Append cells to table row
    tr.appendChild(tdTitle);
    tr.appendChild(tdNote);
    tr.appendChild(tdDelete);

    //Append row to table
    noteTable.appendChild(tr);
    getDeleteButtons();
    localStorage.setItem('notes', JSON.stringify(noteList));
  })
}

function appendNotes(){


  noteTable.innerHTML =''; // clear the table before appending new note

  noteList.map(note =>{
    //Create table cells
    let tr = document.createElement('tr');
    tr.classList = 'noteItem';
    let tdTitle = document.createElement('td');
    tdTitle.innerText = note.title;
    let tdNote = document.createElement('td');
    tdNote.innerText = note.note;
    let tdDelete = document.createElement('td');
    tdDelete.innerHTML = '&times';
    tdDelete.classList.add('delete-item');

    //Append cells to table row
    tr.appendChild(tdTitle);
    tr.appendChild(tdNote);
    tr.appendChild(tdDelete);

    //Append row to table
    noteTable.appendChild(tr);
    getDeleteButtons();
    localStorage.setItem('notes', JSON.stringify(noteList));
  })
}
function getDeleteButtons(){
  noteDeleteButtons = Array.from(document.querySelectorAll('.delete-item'))

  noteDeleteButtons.forEach(button =>{
    let noteTitle = button.previousSibling.previousSibling.innerText;
    button.addEventListener('click', () => {
      deleteNote(noteTitle);
    })
  })
}
function deleteNote(noteTitle){
    for(let i = 0; i < noteList.length; i++) {
      if(noteList[i].title == noteTitle){
        noteList.splice(i, 1);
      }
    }
    localStorage.setItem('notes', JSON.stringify(noteList))
    appendNotes()
}

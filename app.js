 

'use strict'

let noteList = JSON.parse(localStorage.getItem('notes')) || [];
let updateBtn = document.querySelector('.update-btn');
let cancelBtn = document.querySelector('.trash-btn');
let container = document.querySelector('.cards-container');
let closeBtn = document.querySelector('.btn-close');








document.addEventListener('DOMContentLoaded', function(event) {


  //the event occurred
  initNoteButtons();
  appendNotes();
console.log('I am ready');

});


 function initNoteButtons(){


  updateBtn.addEventListener('click', (e)=>{
    addNewNote(e);

  });


  cancelBtn.addEventListener('click', (e)=>{
    closeBtn.click();
  });
 }



 
function addNewNote(e){
 e.preventDefault();


  let noteTitle = document.querySelector('.note-title');
  let note = document.querySelector('.note') ;

  let newNote = {};

  let newNoteTitle = noteTitle.value;
  let newNoteDescription = note.value;


 if(newNoteTitle.value =='' || newNoteDescription == ''){
  return alert('Please enter both fields.');
 }
 else{
    
  newNote.title = newNoteTitle;
  newNote.note = newNoteDescription;

 }
 
 noteList.push(newNote);

 noteTitle.value='';
 note.value='';

 
 appendNotes();


 closeBtn.click();


 console.log(newNote);




}

function deleteNote({target}){


  console.log(target);
  let filtered = noteList.filter(note =>{
    return note.title !== target.id;
  });

  noteList = [...filtered];

  console.log(filtered);

  localStorage.setItem('notes', JSON.stringify(filtered));
   
  appendNotes();

}



function appendNotes(){
    

  let notes = Array.from(document.querySelectorAll('.card'));
  if(notes.length > 0){
    notes.forEach(note =>{
      note.remove();
    })
  }

  noteList.forEach(element => {
  
  //Create cards
    var card = `<!-- card -->

            <div class="card bg-note mx-3 my-3" style="width: 18rem">
              <div
                class="card-body btn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <h5 class="card-title text-center" >${element.title}</h5>
                 
                <p class="card-text">
                  ${element.note}
                </p>
              </div>
              <div class="text-center">
                <button class="btn trash-card-btn" 
                id= ${element.title}>
                  Delete
                </button>
              </div>
            </div>
            <!-- card -->
`

    let newDiv = document.createElement('div');
    newDiv.classList.add('col');
    newDiv.innerHTML = card;


    container.appendChild(newDiv);
    removeAllEventListenersFromTrashBtn();
    addOnClickEventToTrash();


    localStorage.setItem('notes', JSON.stringify(noteList));
 

 });   
}


function addOnClickEventToTrash() {
  console.log();
  let trashBTN = document.querySelectorAll(".trash-card-btn");
  trashBTN.forEach(btn => {
    
    btn.addEventListener('click', deleteNote);

  });
}

function removeAllEventListenersFromTrashBtn(){
  console.log();
  let trashBTN = document.querySelectorAll(".trash-card-btn");
  trashBTN.forEach(btn => {
    
    btn.removeEventListener('click',deleteNote);

  });

}


function otherFunction(){
let addNote = document.querySelector('.add-note');
let modal = document.querySelector('.modal');

let trashBtn = document.querySelector('#trash-card-btn');
let cardTitle = document.querySelector('.card-title');




appendNotes();







}
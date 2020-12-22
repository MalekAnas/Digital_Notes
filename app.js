 

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

 updateBtn.addEventListener('click', function () {
    
    
    

  });
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


function deleteNote(noteToDelete){


  console.log(noteToDelete);
  let filtered = noteList.filter(note =>{
    return note.title !== noteToDelete.title;
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
          
    
    let newDiv = document.createElement('div');
    newDiv.classList.add('col', 'card', 'bg-note', 'm-3' );

    //card body
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.classList.add('btn');
  
    cardBody.setAttribute('type', 'button' );
    


    //card title
    let cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.classList.add('text-center');
    cardTitle.setAttribute('data-bs-toggle', 'modal');
    cardTitle.setAttribute('data-bs-target' , '#staticBackdrop-update');


    
    
    //text content for the card title
    let titleContent = document.createTextNode(element.title);
    cardTitle.appendChild(titleContent);




     
    cardBody.appendChild(cardTitle);


    let cardNote = document.createElement('p');
    let noteContent = document.createTextNode(element.note);

    cardNote.appendChild(noteContent);
    cardNote.classList.add('card-text');
    cardBody.appendChild(cardNote);

    //delete button
    let delBtn = document.createElement('div');

    delBtn.classList.add('text-center');
    
    let btn = document.createElement('Button');
    btn.classList.add('btn', 'trash-btn');
    let icon = document.createElement('i');
    icon.classList.add('fa' ,'fa-trash');
    btn.appendChild(icon);

    //add event listener to delete btn to delete the note
    btn.addEventListener('click', (e)=>{

      deleteNote(element);
    });


    btn.classList.add('btn', 'trash-card-btn');
    delBtn.appendChild(btn);
    cardBody.appendChild(delBtn);


    


    newDiv.appendChild(cardBody);

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
 

 

}


// new features 
// update note title and description 
//


function updateNote({target}){
   

  let updatedTitle = document.getElementById('note-title-update');
  let updatedNote = document.querySelector('.note-update');

  let updateBtn = document.getElementById('save-btn');
  



}



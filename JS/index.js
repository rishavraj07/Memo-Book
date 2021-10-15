console.log("welcome to the javascript code");
showNotes();
// if User adds a notes add it to the local Storage of the Browser
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    notesArr.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    addTxt.value = "";
    // console.log(notesArr);
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    let html = "";
    notesArr.forEach(function (element, index) {
        html += ` <div class="noteCard col-md-4 col-10 col-sm-6">
        <div class="card mx-2 my-2" >
            <div class="card-body">
                <h3 class="card-title text-center" id="heading">Notes - ${index + 1}</h3>
                <hr>
                <p class="card-text" id="para">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>`
    });
    let notesElm = document.getElementById('notes');
    if (notesArr.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = ` <div class="noteCard col-md-9 col-9 col-sm-9">
        <div class="card mx-2 my-2 text-center" >
            <div class="card-body">
                <h5 class="card-title">Empty No Saved notes .</h5> 
            </div>
        </div>
    </div>`
    }
}

// function to delete a Node.
function deleteNote(index) {
    // console.log(`I am Deleating the notes no :${index}`);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    notesArr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    showNotes();
}

//Code for searching the notes.
let searchtxt=document.getElementById("searchTxt");
searchtxt.addEventListener("input",function(){
    let inputVal=searchtxt.value.toLowerCase();
    // console.log(`Iam searching :${inputVal}`);
    let notesCard=document.getElementsByClassName("noteCard");
    Array.from(notesCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })
})

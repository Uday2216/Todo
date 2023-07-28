showNotes()
let addbtn=document.getElementById('addBtn')
addbtn.addEventListener('click',function(e){
    let notes=localStorage.getItem('notes')
    console.log(notes)
    let text=document.getElementById('addTxt')
     
    if(notes == null){
        notesObj=[]
    }else{
        notesObj=JSON.parse(notes)
    }
    notesObj.push(text.value)
    let b=JSON.stringify(notesObj)
    let a=localStorage.setItem("notes",b)
    text.value="";
    console.log(notesObj)
    showNotes()
})


function showNotes(){
    let notes=localStorage.getItem('notes')
    if(notes == null){
        notesObj=[]
    }else{
        notesObj=JSON.parse(notes)
    }
    let html=""
    notesObj.forEach(function(element,index){
        html+=`
        <div class="notecard mx-3 my-3 card" style="width: 18rem;">
          
    <div class="card-body">
  <h5 class="card-title">Notes ${index+1}</h5>
  <p class="card-text">${element}</p>
  <button  id=${index} onclick="deletenote(this.id)" class="btn btn-primary">Delete</button>
</div>
</div>
        `
    });
    let noteelement=document.getElementById('notes')
    if(notesObj.length!=0){
    noteelement.innerHTML=html;
    }

}


function deletenote(index){
    let notes=localStorage.getItem('notes')
    if(notes == null){
        notesObj=[]
    }else{
        notesObj=JSON.parse(notes)
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes",JSON.stringify(notesObj))
    showNotes()

}

let searchtxt=document.getElementById('searchtxt')
searchtxt.addEventListener("input",function (){
  let se= searchtxt.value
 let cards= document.getElementsByClassName('notecard')
 Array.from(cards).forEach(function(element){
        let para=element.getElementsByTagName("p")[0].innerText;
        if(para.includes(se)){
            element.style.display="block"
        }else{
            element.style.display="none"
        }
 })
  
})




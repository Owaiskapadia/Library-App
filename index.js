console.log('this is logged');
reload();

function Book(givenName,givenAuthor,givenType){
    this.name= givenName;
    this.author=givenAuthor;
    this.type=givenType
}

function Display(){

}
function reload(){
    let BookK=localStorage.getItem("book");
    if(BookK == null){
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(BookK)
    }
    let uistring=``;
    let tableBody= document.getElementById('tableBody')
    notesObj.forEach(function(element,index){
       
        uistring += `<tr class="content">
                               
        <td>${element.name}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
        <td>  <button type="submit" class="btn btn-primary" onclick='display.delete(this.id)' id="${index}">Delete Book</button> </td>
        </tr>`
          })
          
          if(notesObj.length != 0){
           tableBody.innerHTML=uistring
              }
              else{
                  tableBody.innerHTML= `There is nothing to show.`
              }
}

// content= document.getElementsByClassName()
dltBtn= document.getElementById('dltBtn')
let display= new Display();
// display.delete();

Display.prototype.delete= function(index){
    let BookK=localStorage.getItem("book");
    if(BookK == null){
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(BookK)
        
        
    }
    notesObj.splice(index,1)
    
 localStorage.setItem("book", JSON.stringify(notesObj))
 reload();
}



 
 Display.prototype.validate= function(book){
if(book.name.length<2|| book.author.length<2){
    return false;
}
else{
    return true;
}
 }

Display.prototype.success= function(){
    let alert= document.getElementById('alert')
    alert.innerHTML +=`<div class="alert alert-success" role="alert">
    A simple success alert—check it out!
  </div>`
  setTimeout(function () {
    alert.innerHTML = ''
}, 2000);
}
Display.prototype.error= function(){
    let alert= document.getElementById('alert');
    alert.innerHTML=`<div class="alert alert-danger" role="alert">
    A simple danger alert—check it out!
  </div>`
  setTimeout(function () {
    alert.innerHTML = ''
}, 2000);
}


Display.prototype.clear= function(){
    let libraryForm= document.getElementById('libraryForm')
    libraryForm.reset();   
    // console.log('mein isse clear bhi kar sakta hu i am ther chqampiomn nobody thopught that i would be') 
}

// Display.prototype.add = function(book){
// let tableBody= document.getElementById('tableBody')
// let uistring= `<tr class="content">
                        
// <td>${book.name}</td>
// <td>${book.author}</td>
// <td>${book.type}</td>
// </tr>`
// tableBody.innerHTML+= uistring;
// }
Display.prototype.vanish= function(book){

}
Display.prototype.storage=function(book){
    let BookK=localStorage.getItem("book");
    if(BookK == null){
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(BookK)
    }
    
    notesObj.push(book);
   localStorage.setItem("book",JSON.stringify(notesObj));

   let tableBody= document.getElementById('tableBody')
   let uistring=``;
   notesObj.forEach(function(element,index){
       
 uistring += `<tr class="content">
                        
 <td>${element.name}</td>
 <td>${element.author}</td>
 <td>${element.type}</td>
 <td>  <button type="submit" class="btn btn-primary" onclick='display.delete(this.id)' id="${index}">Delete Book</button> </td>
 </tr>`
   })
   
   if(notesObj.length != 0){
    tableBody.innerHTML=uistring
       }
       else{
           tableBody.innerHTML= `kuch batane nahi hai bhai`
       }


}


let libraryForm= document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit);


function libraryFormSubmit(e){
    // console.log(e)
    e.preventDefault();
let name= document.getElementById('bookName').value
let author= document.getElementById('author').value

let fiction= document.getElementById('fiction');
let programming= document.getElementById('programming');
let biography= document.getElementById('biography');
let type;
if(fiction.checked){
    type= fiction.value
}
else if(programming.checked){
    type= programming.value
}
else if(biography.checked){
    type= biography.value
}
    let book= new Book(name,author,type);
    // console.log(book)
//  console.log('submit hua bhai form mera')
  let display= new Display();
  if(display.validate(book)== true){
     display.storage(book);
    //   display.add(book);
      display.clear();
      display.success();
  } else{
      display.error();
  }


}

let search= document.getElementById('searchTxt');
console.log(search)
// let content= document.querySelectorAll('.content')
//     console.log(content)
search.addEventListener('input',function(){
    
    let content= document.querySelectorAll('.content')
    console.log(content)
    let searchVal= search.value;
    content.forEach(function(element){
        let booknaam= element.getElementsByTagName('td')[0].innerText;
        console.log(booknaam)
        let authornaam= element.getElementsByTagName('td')[1].innerText;
        let typenaam= element.getElementsByTagName('td')[2].innerText
        console.log(authornaam)
        if(booknaam.includes(searchVal)|| authornaam.includes(searchVal)|| typenaam.includes(searchVal)){
            element.style.display= 'table-row'
        }
        else{
            element.style.display= "none"
        }

    })
    
       
    
})





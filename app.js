var li = document.getElementById("ul")
var addBtn = document.getElementById("addItem")
function addItem()  {
    
    var todoInput = document.getElementById("todoInput");
    // if (todoInput.value.trim() !== "") {
    //     addBtn.disabled = false;
    // }else{
    //     addBtn.disabled = true;
    // }
    var li = document.createElement("li");
    var liText = document.createTextNode(todoInput.value)
    
   
    
    li.appendChild(liText)
    ul.appendChild(li)
    
     
    var dltBtn = document.createElement("button");
    var dltTxt = document.createTextNode("DELETE");
    dltBtn.appendChild(dltTxt);
    li.appendChild(dltBtn)
    dltBtn.setAttribute("onclick", "dlt(this)")
    dltBtn.setAttribute("class", "dltBtn")
  
    var editBtn = document.createElement("button")
    var editTxt = document.createTextNode("Edit")
    editBtn.appendChild(editTxt);
    editBtn.setAttribute("onclick", "edit(this)")
    editBtn.setAttribute("class", "editBtn")
    li.appendChild(editBtn)
   
    todoInput.value = ""
    console.log(dltBtn)
}

 function dlt(e) {
     e.parentNode.remove()
 }
 function deleteAll(){
     li.innerHTML = ""
 }

 function edit(e) {
     var val = prompt("Enter your item", e.parentNode.firstChild.nodeValue)
     e.parentNode.firstChild.nodeValue = val
 }
 


 console.log(addBtn)
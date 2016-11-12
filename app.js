function newToDoItem() {
  var description = document.getElementById("Description").value;
  var priority = document.getElementById("prioritySelector").value;
  var priorityOfitem = document.getElementById("prioritySelector");
  var clonedList = priorityOfitem.cloneNode(true);
  var checkbox = document.createElement('input');
      checkbox.type = "checkbox";   
  var newTodo = new todoItem(description,priority,clonedList,checkbox);
  console.log(newTodo.description);
  console.log(newTodo.priority);
  console.log(newTodo.priorityList);
  removeNewest();
  setEventToNewToDo(newTodo);
  putintoArray(newTodo);
  removeAllListItems();
  PrintArray();
  document.getElementById("Description").value = "";
}
function setSelectedPriorityOfList(clonedList , itemPriority)
{
    for (var i = 0; i < clonedList.options.length; ++i) {
        if (clonedList.options[i].text === itemPriority)
        {
          clonedList.options[i].selected = true;
        }
        else
        {
          clonedList[i].selected = false;
        }
    }
}
var bttn = document.getElementById("addBtn");
var des = document.getElementById("Description");
bttn.addEventListener("click", checkLength, false);
des.addEventListener("keypress", function(event) {
    if (event.keyCode == 13)
        bttn.click();
});

var clr = document.getElementById("clear");
clr.addEventListener("click" , ClearDone, false);

function todoItem (description,priority,priorityList,checkbox){
    this.description = description; 
    description.trim();
    this.priority = priority;
    this.index;
    this.newest = true;
    this.check = false;
    this.priorityList = priorityList;
    this.checkbox = checkbox;
    setSelectedPriorityOfList(this.priorityList,priority);
    checkbox.addEventListener('click', function(ev) {
    if (ev.target.checked == true) {
    ev.target.disabled = true;
    ev.target.parentNode.classList.add("checked");
    console.log(ev.target.parentNode);
    ev.target.parentNode.childNodes[1].disabled=true;
  }

}, false);
}
function putintoArray(todoItem)
{
  switch(todoItem.priority)
  {
    case "Urgent":
   // itemsArray[0].push(todoItem);
   // itemsArray[0].sort(function(a,b){return a.description.localeCompare(b.description); });
      UrgentArray.push(todoItem);
      UrgentArray.sort(function(a,b){return a.description.localeCompare(b.description); });
      todoItem.index = UrgentArray.indexOf(todoItem);
    break;

    case "Critical":
   // itemsArray[1].push(todoItem);
   // itemsArray[1].sort(function(a,b){return a.description.localeCompare(b.description); });
      CriticalArray.push(todoItem);
      CriticalArray.sort(function(a,b){return a.description.localeCompare(b.description); });
      todoItem.index = CriticalArray.indexOf(todoItem);
    break;

    case "Normal":
   // itemsArray[2].push(todoItem);
   // itemsArray[2].sort(function(a,b){return a.description.localeCompare(b.description); });
      NormalArray.push(todoItem);
      NormalArray.sort(function(a,b){return a.description.localeCompare(b.description); });
      todoItem.index = NormalArray.indexOf(todoItem);
    break;

    case "If You Can":
   // itemsArray[3].push(todoItem);
   // itemsArray[3].sort(function(a,b){return a.description.localeCompare(b.description); });
      IfYouCanArray.push(todoItem);
      IfYouCanArray.sort(function(a,b){return a.description.localeCompare(b.description); });
      todoItem.index = IfYouCanArray.indexOf(todoItem);
    break;
  }
}

function setEventToNewToDo(todoItem)
{
  todoItem.priorityList.addEventListener("change", function(){
  switch(todoItem.priority)
  {
    case "Urgent":
      UrgentArray.splice(UrgentArray.indexOf(todoItem),1);
      UrgentArray.sort(function(a,b){return a.description.localeCompare(b.description); });
      console.log("prev priority:" + todoItem.priority);
      todoItem.priority = todoItem.priorityList.value;
      putintoArray(todoItem);
      console.log("new priority:" + todoItem.priority);
    break;

    case "Critical":
      CriticalArray.splice(CriticalArray.indexOf(todoItem),1);
      CriticalArray.sort(function(a,b){return a.description.localeCompare(b.description); });
      console.log("prev priority:" + todoItem.priority);
      todoItem.priority = todoItem.priorityList.value;
      putintoArray(todoItem);
      console.log("new priority:" + todoItem.priority);
    break;

    case "Normal":
      NormalArray.splice(NormalArray.indexOf(todoItem),1);
      NormalArray.sort(function(a,b){return a.description.localeCompare(b.description); });
      console.log("prev priority:" + todoItem.priority);
      todoItem.priority = todoItem.priorityList.value;
      putintoArray(todoItem);
      console.log("new priority:" + todoItem.priority);
    break;

    case "If You Can":
      IfYouCanArray.splice(IfYouCanArray.indexOf(todoItem),1);
      IfYouCanArray.sort(function(a,b){return a.description.localeCompare(b.description); });
      console.log("prev priority:" + todoItem.priority);
      todoItem.priority = todoItem.priorityList.value;
      putintoArray(todoItem);
      console.log("new priority:" + todoItem.priority);
    break;
  }

    removeAllListItems();
    PrintArray();

    }, false);
}

function init()
{
  
  var priorityOfitem = document.getElementById("prioritySelector");
  var clonedList_1 = priorityOfitem.cloneNode(true);
  var clonedList_2 = priorityOfitem.cloneNode(true);
  var clonedList_3 = priorityOfitem.cloneNode(true);
  var checkbox_1 = document.createElement('input');
      checkbox_1.type = "checkbox";
  var checkbox_2 = document.createElement('input');
      checkbox_2.type = "checkbox";
  var checkbox_3 = document.createElement('input');
      checkbox_3.type = "checkbox";        
  var newTodo_1 = new todoItem("Register to Full Stack Web Course","Normal",clonedList_1,checkbox_1);
  var newTodo_2 = new todoItem("Attend Selection Day","Critical",clonedList_2,checkbox_2);
  var newTodo_3 = new todoItem("Go see X-Men apocalypse movie" , "If You Can" , clonedList_3,checkbox_3);
  newTodo_1.newest = false;
  newTodo_2.newest = false;
  newTodo_3.newest = false;
  setEventToNewToDo(newTodo_1);
  putintoArray(newTodo_1);
  setEventToNewToDo(newTodo_2);
  putintoArray(newTodo_2);
  setEventToNewToDo(newTodo_3);
  putintoArray(newTodo_3);
  PrintArray();


}

function removeAllListItems()
{
 var list = document.getElementById("ItemList");

 while (list.hasChildNodes())
{   
    list.removeChild(list.firstChild);
}

}

function PrintArray() {
  itemsArray.forEach(function (priorityArr) {
    priorityArr.forEach(function (element) {
      var li = document.createElement("li");
      var text = document.createTextNode(element.description);
      li.appendChild(text);
      li.appendChild(element.priorityList);
      li.appendChild(element.checkbox);
      //console.log(element.checkbox.checked);
      if(element.checkbox.checked == true)
      {
        li.classList.add("checked");
      }
      if(element.newest == false)
      {
      	li.classList.remove("newest");
      }
      if(element.newest == true)
      {
      	li.classList.add("newest");
      }
      document.getElementById("ItemList").appendChild(li);
    }, this);
  }, this);
}

function checkLength(){
    var textbox = document.getElementById("Description");
    if(textbox.value.length <= 42 && textbox.value.length >= 3){
        newToDoItem();
    }
    else{
        alert("make sure the input is between 3-42 characters long")
    }
}

function ClearDone()
{
itemsArray.forEach(function (priorityArr) {
    priorityArr.forEach(function (element) {
      if(element.checkbox.checked == true)
      {
       switch(element.priority)
  {
    case "Urgent":
      UrgentArray.splice(UrgentArray.indexOf(element),1);
      UrgentArray.sort(function(a,b){return a.description.localeCompare(b.description); });
    break;

    case "Critical":
      CriticalArray.splice(CriticalArray.indexOf(element),1);
      CriticalArray.sort(function(a,b){return a.description.localeCompare(b.description); });
    break;

    case "Normal":
      NormalArray.splice(NormalArray.indexOf(element),1);
      NormalArray.sort(function(a,b){return a.description.localeCompare(b.description); });
    break;

    case "If You Can":
      IfYouCanArray.splice(IfYouCanArray.indexOf(element),1);
      IfYouCanArray.sort(function(a,b){return a.description.localeCompare(b.description); });
    break;
  }
      }
    }, this);
  }, this);
  removeAllListItems();
  PrintArray();
}

function removeNewest() {
  itemsArray.forEach(function (priorityArr) {
    priorityArr.forEach(function (element) {
    	//console.log(element.newest);
      element.newest = false;
    }, this);
  }, this);
}

var UrgentArray = [];
var CriticalArray = [];
var NormalArray =[];
var IfYouCanArray = [];
var itemsArray = [UrgentArray, CriticalArray, NormalArray, IfYouCanArray];

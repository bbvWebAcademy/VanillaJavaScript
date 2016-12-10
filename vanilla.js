var container = document.getElementById('taskContainer');
var button = document.getElementById('add');
var inputField = document.querySelector('input');
var removebutton = document.getElementById('remove');

button.addEventListener('click', function(){
  var input = inputField.value;

  if(input){
    var task = document.createElement("DIV");
    task.classList.add('taskBox');
    task.appendChild(document.createTextNode(input));
    container.appendChild(task);
 
    inputField.value = "";
    inputField.focus();
  }

});

removebutton.addEventListener('click', function(){
 while (container.childElementCount)
  container.removeChild(container.lastChild);
});


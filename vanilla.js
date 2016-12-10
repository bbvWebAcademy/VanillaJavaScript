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

    var tasks = localStorage.getItem('tasks');
    if (!tasks){
      tasks = '';
    }
    else {
      tasks += ',';
    }
    localStorage.setItem('tasks', tasks + input);
  }

});

removebutton.addEventListener('click', function(){
  while (container.childElementCount)
      container.removeChild(container.lastChild);

  localStorage.removeItem('tasks');
});


var items = localStorage.getItem('tasks');
if(items){
  for(var input of items.split(',')){
      var task = document.createElement("DIV");
      task.classList.add('taskBox');
      task.appendChild(document.createTextNode(input));
      container.appendChild(task);  
  }
}

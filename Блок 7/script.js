const form = document.querySelector('#new_task');
const input = document.querySelector('#input_newtoDo');
const btnSubmit = document.querySelector('#add_btnToDo');
const todoList = document.querySelector('#toDo-output');

form.addEventListener('submit', function(e){
	e.preventDefault();
});

btnSubmit.addEventListener('click', function(e){
	let todo = document.createElement('div');
	todo.classList.add('todo-item');
	todoList.appendChild(todo);
	todo.innerHTML = input.value;
	input.value = '';

	todo.addEventListener('click', () => {
		todo.remove()
	});
});
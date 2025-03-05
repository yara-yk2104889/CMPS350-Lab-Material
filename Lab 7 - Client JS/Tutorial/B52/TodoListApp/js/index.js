// 1. check you js is linked
// console.log('It is linked');

// 2. get the references to the elements we want to interact with
const form = document.querySelector('#form');
const todolistContainer = document.querySelector('#todolist-container');
const clearTodos = document.querySelector('#clear-todos');

// 3. add the event listener to the form
form.addEventListener('submit', handleSubmit);
clearTodos.addEventListener('click', handleClearTodos);

// 4. create the function that will handle the submit event

function handleSubmit(e) {
    //    const data = new FormData(event.target);
    e.preventDefault();
    const data = new FormData(form);
    const todo = Object.fromEntries(data);
    todolistContainer.innerHTML += convertToCard(todo);
    form.reset();


}

// 5. helper function to generate the todo item
function convertToCard(todo) {
    return ` <div class="form-group todo" id="">
                    <p class="todo-title ${todo.completed ? 'strike' : ''}" id="" >${todo.title}</p>
                    <input class="completed icon" type="checkbox"
                    onclick="" ${todo.completed ? 'checked' : ''}>
                    <i class="fa fa-trash icon" onclick=""></i>
            </div>`;

}

function handleClearTodos(event) {
    alert('Clearing todos');
}
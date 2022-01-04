const submitBtn = document.querySelector('#submitBtn'),
    input = document.querySelector('#todoInput'),
    msg = document.querySelector('#msg'),
    todoCont = document.querySelector('#todoCont'),
    clearbtn = document.querySelector('#clearbtn'),
    helpBtn = document.querySelector('.helpBtn'),
    helpBox = document.querySelector('.help-box');


// check if the input is empty or not
submitBtn.addEventListener('click', () => {
    if (input.value === '' || input.value === ' ') {
        //if empty, then show the error msg for 3s
        msg.textContent = 'Please write something';
        msg.classList.add('showErr');
        setTimeout(() => {
            msg.textContent = 'Welcome !';
            msg.classList.remove('showErr');
        }, 3000)
    } else {
        // if not empty, start creating the todo items
        todoCont.innerHTML += `<li class="todos">${input.value}</li>`;
        // once created add it to the Localstorage
        addTodoToLS();
        removeTodos();
        // reset the input
        input.value = '';
    }
});


// add todo to LocalStorage
function addTodoToLS() {
    localStorage.setItem('todo', todoCont.innerHTML)
}


// show the todos when page is reloaded
function showTodo() {
    let loacalContent = localStorage.getItem('todo');
    if (!loacalContent) {
        todoCont.innerHTML = `<li class="todos">write a todo to start</li>`
    } else {
        todoCont.innerHTML = loacalContent;
    }
}
showTodo();


// clear all todos
clearbtn.addEventListener('click', () => {
    localStorage.removeItem('todo');
    todoCont.innerHTML = `<li class="todos">write a todo to start</li>`
    removeTodos();
})

// Help fuction
helpBtn.addEventListener('click', () => {
    helpBox.classList.toggle('active');
});


// remove todo
removeTodos();
function removeTodos() {
    const todos = document.querySelectorAll('.todos');
    todos.forEach(todo => {
        todo.addEventListener('click', () => {
            if(todo.classList.contains('done')){
                todo.remove();
                addTodoToLS();
            } else {
                todo.classList.add('done');
                addTodoToLS();
            }
        });
    });
}

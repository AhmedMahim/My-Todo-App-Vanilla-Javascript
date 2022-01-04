const input = document.querySelector('#todoInput'),
    submit = document.querySelector('#btn'),
    todoCont = document.querySelector('#todoCont'),
    msg = document.querySelector('.msg'),
    clrBtn = document.querySelector('#clrBtn')

//   Ckeck if the Create Todo Button is clicked
submit.addEventListener('click', () => {
    startCreateTodo();
});

// check if the input is empty or not
function startCreateTodo() {
    if (input.value === '' || input.value === ' ') {
        msg.innerHTML = "Please write something"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 1000)
    } else {
        createTodo()
    }
};
// if not empty then the function will be execute
function createTodo() {
    const li = document.createElement('li'),
        todoTextCreate = document.createElement('span'),
        delTodoBtn = document.createElement('button'),
        checkInput = document.createElement('input'),
        checkLabelCreate = document.createElement('label');

    // Create the Todo Element
    li.classList.add('todo');
    li.classList.add('todoItems');
    todoCont.appendChild(li);

    // assemble the Todo Item
    li.appendChild(checkInput);
    li.appendChild(checkLabelCreate);
    li.appendChild(todoTextCreate);
    li.appendChild(delTodoBtn);

    // Create the todo text content
        todoTextCreate.innerHTML = input.value;
    todoTextCreate.classList.add('todoText')

    // Create Delete button
    delTodoBtn.innerHTML = 'Delete';
    delTodoBtn.id = 'deltBtn';

    // Create the checkbox 
    checkInput.type = 'checkbox';
    checkInput.id = 'checkbx';
    checkInput.hidden = false;
    // Create the label for the input
    checkLabelCreate.htmlFor = 'checkbx';
    checkLabelCreate.innerHTML = '';

    // Create the delete Todo function
    const btnd = document.querySelectorAll('#deltBtn');
    btnd.forEach(btndel => {
        btndel.onclick = () => {
            btndel.parentElement.remove();
        }
    })

    // Create the 'Todo Done' function
    const checkbx = document.querySelectorAll('#checkbx');
    checkbx.forEach(cbx => {
        cbx.onclick = () => {
            if (cbx.checked) {
                cbx.parentElement.classList.add('line-through')

            } else {
                cbx.parentElement.classList.remove('line-through')
            }
        }
    })

    // Reset the input value
    input.value = '';

    // show the Clear Button    
    clrBtn.style.display = 'block'
}


// Create Clear Todo function
clrBtn.addEventListener('click', () => {
    clearTodo()
    clrBtn.style.display = 'none'
})

function clearTodo() {
    todoCont.replaceChildren('')
}
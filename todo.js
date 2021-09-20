const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search =document.querySelector('.search input');


const generateTemplate = (todo) =>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa fa-trash-o delete"></i>
    </li>
    `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', e =>{
    e.preventDefault();

    // to avoid the space we use trim
    const todo= addForm.add.value.trim();
    if(todo.length){
    generateTemplate(todo);
    addForm.reset();
    }
});


// deleting todo
list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});



// searching method
const filterTodos = (term) =>{
    
    Array.from(list.children)
     .filter( (todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach( (todo)=> todo.classList.add('filtered'));
    console.log(filterTodos);

    Array.from(list.children)
    .filter( (todo) => todo.textContent.toLowerCase().includes(term))
   .forEach( (todo)=> todo.classList.remove('filtered'));

};
// keyup event
search.addEventListener('keyup', () =>{
    const term= search.value.trim().toLowerCase();    
    filterTodos(term);
});


// let val = 45;
//  console.log(typeof val); //boolean 
// val = String(val); // now value is a string "true" 
// console.log(typeof val); // string

export const generateController=()=>{
    let todos = [];
    const button = document.getElementById("submit");
    const input = document.getElementById("inputText");
    const ul = document.getElementById("ul");
    //let count = 0;


    const render = () => {
            let html = "";
            todos.forEach((element, id) => {
            let completedClass = element.completed ? "done" : "";
            html += `<li id='li_${id}' class='divs ${completedClass}'>${element.name}<button type='button' class='pulsantiConferma' id='bottoneC_${id}'>conferma</button><button type='button' class='pulsantiElimina' id='bottoneE_${id}'>elimina</button></li>`;
            });
            ul.innerHTML = html;
            const completeButtons = document.querySelectorAll('.pulsantiConferma');
        const deleteButtons = document.querySelectorAll('.pulsantiElimina');


        completeButtons.forEach((button, index) => {
        button.onclick = () => {
            todos[index].completed = !todos[index].completed; 
            completeTodo(todos[index]).then(() => render()); 
        };
        });


        deleteButtons.forEach((button, index) => {
        button.onclick = () => {
            deleteTodo(todos[index].id).then(() => {
            todos.splice(index, 1); 
            render(); 
            });
        };
        });
    }
}
export const generateForm=()=>{
    const send = (todo) => {
        return new Promise((resolve, reject) => {
        fetch("/todo/add", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        })
        
        .then((response) => response.json())
        .then((json) => {
            resolve(json);
        })
        })
    }
    
    const load = () => {
        return new Promise((resolve, reject) => {
        fetch("/todo").then((response) => response.json())
        .then((json) => {
            resolve(json);
        })
        })
    }

    button.onclick = () => {
        const todo = {          
        name: input.value,
        completed: false
        } 

        send({todo: todo})
        .then(() => load())     
        .then((json) => { 
        todos = json.todos;
        input.value = "";
        render(); 
        });
    }

        load().then((json) => { 
        todos = json.todos;
        input.value = "";
        render();
        });

    const completeTodo = (todo) => {
        return new Promise((resolve, reject) => {
        fetch("/todo/complete", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        })
        .then((response) => response.json()).then((json) => {
            resolve(json);
        })
        })
    }

    const deleteTodo = (id) => {
        return new Promise((resolve, reject) => {
        fetch("/todo/"+id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        })
    
        .then((response) => response.json()).then((json) => {
            resolve(json);
        })
        })
    }

    setInterval(() => {
        load().then((json) => { 
        todos = json.todos;
        input.value = "";
        render();
        });
    }, 30000);
}

var todoList = {
    todos: [],
    displayTodos: function(){
        if(this.todos.length==0){
            console.log('Your todo list is empty!');
        }else{
            console.log("My Todos:");
            for(var i=0; i<this.todos.length; i++){
                // console.log('('+this.todos[i].completed+') '+this.todos[i].todoText);
                if(this.todos[i].completed){
                    console.log('(x) '+this.todos[i].todoText);
                }else{
                    console.log('( ) '+this.todos[i].todoText);
                }
                
            }
        }
    },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    
    deleteTodo: function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    },
    
    toggleCompleted: function(position){
        this.todos[position].completed = !(this.todos[position].completed);
        this.displayTodos();
    },
    
    toggleAll: function(){
        var everythingTrue = true;
        for(var i = 0; i< this.todos.length; i++){
            if(this.todos[i].completed==false){
                everythingTrue = false;
                break;
            }
        }
        
        if(everythingTrue){
            for(var i = 0; i< this.todos.length; i++){
                this.todos[i].completed = false;
            }
        }else{
            for(var i = 0; i< this.todos.length; i++){
                this.todos[i].completed = true;
            }
        }
        
        this.displayTodos();
        
    }
};

// todoList.displayTodos();
// todoList.addTodo('first item');
// todoList.addTodo('second item');
// todoList.toggleCompleted(0);
// todoList.toggleAll();
// todoList.toggleAll();

// var displayTodosButton = document.getElementById('displayTodosButton');
// var toggleAllButton = document.getElementById('toggleAllButton');

// displayTodosButton.addEventListener('click', function(){
//     todoList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function(){
//     todoList.toggleAll();
// });


var handlers = {
    displayTodos: function(){
        todoList.displayTodos();
    },
    toggleAll: function(){
        todoList.toggleAll();
    },
    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    
    deleteTodo: function(){
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
    },
    
    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
    }   
}

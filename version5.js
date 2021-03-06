
var todoList = {
    todos: [],
    // displayTodos: function(){
    //     if(this.todos.length==0){
    //         console.log('Your todo list is empty!');
    //     }else{
    //         console.log("My Todos:");
    //         for(var i=0; i<this.todos.length; i++){
    //             // console.log('('+this.todos[i].completed+') '+this.todos[i].todoText);
    //             if(this.todos[i].completed){
    //                 console.log('(x) '+this.todos[i].todoText);
    //             }else{
    //                 console.log('( ) '+this.todos[i].todoText);
    //             }
                
    //         }
    //     }
    // },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        // this.displayTodos();
    },
    
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        // this.displayTodos();
    },
    
    deleteTodo: function(position){
        this.todos.splice(position,1);
        // this.displayTodos();
    },
    
    toggleCompleted: function(position){
        this.todos[position].completed = !(this.todos[position].completed);
        // this.displayTodos();
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
        
        // this.displayTodos();
        
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
    // displayTodos: function(){
    //     todoList.displayTodos();
    // },
    toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    
    deleteTodo: function(position){
        //By modifying the program to provide functionality with a button delete method
        //we no longer need to use a number input to carry this out which is why we're
        //delegating this functionality below to separate code
        
        // var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        // todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        todoList.deleteTodo(position);
        // deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    
    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    }   
};

var view = {
    displayTodos: function(){
        //Query selector can access and return the reference to specific elements/families/id's
        var todosUl = document.querySelector('ul');
        //innerHTML property of an element gives us access the content between the opening and closing tag
        todosUl.innerHTML = '';
        
        // for(var i = 0; i<todoList.todos.length; i++){
        // //the createmethod injects an html element into the DOM    
        //     var todosLi = document.createElement('li');
            
        //     var todo = todoList.todos[i];
        //     var todoTextWithCompletion = '';
        //     if(todo.completed === true){
        //         todoTextWithCompletion = "(x) "+todo.todoText;
        //     }else{
        //         todoTextWithCompletion = "( ) "+todo.todoText;
        //     }
            
        //     //This line was added to allow for the reference to a specific delete button
        //     todosLi.id = i;
            
            
        //     // the textContent gives us acces to the text an html holds
        //     todosLi.textContent = todoTextWithCompletion;
        //     todosLi.appendChild(this.createDeleteButton());
        //     //appendChild is how we can add elements into other elements using javascript
        //     todosUl.appendChild(todosLi);
        // }
        
        todoList.todos.forEach(function(todo,position){
            var todosLi = document.createElement('li');
            
            var todoTextWithCompletion = '';
            if(todo.completed === true){
                todoTextWithCompletion = "(x) "+todo.todoText;
            }else{
                todoTextWithCompletion = "( ) "+todo.todoText;
            }
            
            //This line was added to allow for the reference to a specific delete button
            todosLi.id = position;
            
            
            // the textContent gives us acces to the text an html holds
            todosLi.textContent = todoTextWithCompletion;
            todosLi.appendChild(this.createDeleteButton());
            //appendChild is how we can add elements into other elements using javascript
            todosUl.appendChild(todosLi);
        },this);
        
        
    },
    
    createDeleteButton: function(){
        //create a delete button on the DOM
        var deleteButton = document.createElement('button');
        //text on button says Delete
        deleteButton.textContent = 'Delete';
        //assign all buttons to the same class
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    
    setUpEventListeners: function(){
        var todosUl = document.querySelector('ul');
        
        todosUl.addEventListener('click', function(){
                var elementClicked = event.target;    
                
                if(elementClicked.className == 'deleteButton'){
                    handlers.deleteTodo(parseInt(elementClicked.parentNode.id));                    
                }
            
            }
        );
    }
    
    
}

view.setUpEventListeners();

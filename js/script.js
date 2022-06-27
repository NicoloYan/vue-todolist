
var app = new Vue(
    {
        el: '#root',
        data: {
            newTaskText: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: true
                }
            ]
        },
        methods: {
            // Funzione che, utilizzando la tecnica dello splice, 
            // rimuove dall'array originale l'elemento selezionato con la X.
            removeTask(index) {
                this.todos.splice(index, 1);
            },
            // Funzione che aggiunge un nuovo oggetto all'array originale e, in seguito, svuota la input.
            addTask() {
                this.todos.push({
                    text: this.newTaskText,
                    done: false
                })
                this.newTaskText = ''
            }    
        }
        
    }
);
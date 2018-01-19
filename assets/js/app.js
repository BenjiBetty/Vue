var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'vous avez affiché cette page le ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { text: 'Apprendre JavaScript' },
            { text: 'Apprendre Vue' },
            { text: 'Créer quelque chose de génial' }
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Message à retourner'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Modifiez moi !'
    }
})

//Components 
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            { id: 0, text: 'Légumes' },
            { id: 1, text: 'Fromage' },
            { id: 2, text: 'Tout ce que les humains sont supposés manger' }
        ]
    }
})
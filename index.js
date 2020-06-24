var app = new Vue(
	{ 
    	el: '#app',
    	data: {
        	message: 'Hello Vue!'
		},
		beforeCreate: function(){
			if (this.message){ console.log(this.message);} 
			else {console.log("data is null");}
		},
		created: function(){
			if (this.message){ console.log(this.message); } 
				else { console.log("data is null"); }
		}
	},
);

app.message = 'I have change the data';




var app2 = new Vue({
	el: '#app-2',
	data: {
	  	message: 'You loaded this page on ' + new Date().toLocaleString()
	}
})


var appIf = new Vue({
	el: '#app-if',
	data: {
		seen: true
	}
})




var appFor = new Vue({
	el: '#app-for',
	data: {
	  	elements: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
	  	]
	}
})



var appOnClick = new Vue({
	el: '#app-on-click',
	data: {
	  	message: 'Hello Vue.js!'
	},
	methods: {
	  	reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
			app.message = "Change title from reverseMessage function"
	  	}
	}
})


var appModel = new Vue({
	el: '#app-model',
	data: {
		message: 'Model Vue.',
		initialValue1: 'Initial value 1',  
		initialValue2: 'Initial value 2', 
		initialValue3: 'Initial value 3',  
	}
})



Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var appComponent = new Vue({
    el: '#app-component',
    data: {
      componentList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})
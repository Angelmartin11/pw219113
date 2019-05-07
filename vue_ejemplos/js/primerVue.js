const app = new Vue({
	el: '#app', 
	data: {
		titulo: 'hola mundo pero con view',
		frutas: ['Manzana', 'Uva','Peras','Fresas'],
		frutas2: [
			{nombre: 'Manzana',cantidad: 11},
			{nombre: 'Uva',cantidad: 0},
			{nombre: 'Peras',cantidad: 80},
			{nombre: 'Fresas',cantidad: 110},
		]
	}
});
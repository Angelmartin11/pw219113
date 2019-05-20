const app = new Vue({
	el: '#app',
	data: {
		saludo: 'Hola Vue'
	},
	beforeCreate(){
		console.log('Antes de crear el objeto vue');
	},
	created(){
		console.log('El objeto vue fue creado');
	},
	beforeMount(){
		console.log('El DOM no se ha cargado');
	},
	mounted(){
		console.log('La pagina o DOM ha sido cargada');
	},
	beforeUpdate(){
		console.log('Antes de actualizar cualquier elmento de la pagina');
	},
	updated(){
		console.log('La pagina ha sido actualizada');
	},
	beforeDestroy(){
		console.log('Antes de destruir el objeto vue');
	},
	destroyed(){
		console.log('El objeto vue ha sido destruido');
	},
	methods:{
		destruir(){
			this.$destroy();
		}
	}
})
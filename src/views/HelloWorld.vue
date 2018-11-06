<template>
	<div>
		<div>hello world</div>
		<hello-world></hello-world>
	</div>
</template>

<script>
	
	import RequestConstant from '@/consts/RequestConstant'
	
	import HelloWorldComponent from '@/components/HelloWorldComponent'
	
	import HelloWorldService from '@/services/HelloWorldService'
	
	export default{
		data(){
			return {
				helloWorldService:null
			}
		},
		created(){
			this.init();
		},
		mounted(){
			let msg= this.helloWorldService.sayHello();
			console.log(msg);
			this.helloWorldService.sayAsyncHello(function(data){
				console.log(data);
			});
		},
		methods:{
			init(){
				this.helloWorldService=new HelloWorldService(this);
			}
		},
		components:{
			'hello-world':HelloWorldComponent
		}
	}
</script>

<style>
</style>
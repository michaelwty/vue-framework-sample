export default{
	install(Vue,options){
		Vue.prototype.sayHello=function(){
			console.log('hello world');
		}
	}
}

export default{
	install(Vue,options){
		Vue.prototype.throwException=function(){
			alert('错咯');
		}
	}
}

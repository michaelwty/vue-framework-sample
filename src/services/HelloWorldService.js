import RequestUtil from '../utils/RequestUtil'

import RequestConstant from '../consts/RequestConstant'
/**
 * 模块名+Service的命名规则
 */
class HelloWorldService {

	/**
	 * 初始化实例变量
	 */
	constructor(_this) {
		this.requestUtil = new RequestUtil();
		this._this = _this;
	}
	/**
	 * 业务逻辑层的方法
	 * 视图层只需要知道调用该方法就行，至于该方法里面的代码是如何成功实现返回是不需要视图层关心的
	 */
	sayHello() {
		console.log(this._this);
		return 'hello';
	}

	/**
	 * 该方法涉及到了异步回调，回调函数只需要关心回调的结果是视图层想要的
	 * RequestConstant.SAY_HELLO_PATH接口路径变量其实是业务层需要知道的，视图层则是不需要关心数据是从哪个接口过来的
	 */
	sayAsyncHello(callBack) {
		this.requestUtil.getRequest(RequestConstant.SAY_HELLO_PATH, {}, function(data) {
			let newObjArr = new Array();
			newObjArr.push(data); //转换数据格式，满足视图层需要
			callBack(newObjArr);
		});
	}

}

export default HelloWorldService;
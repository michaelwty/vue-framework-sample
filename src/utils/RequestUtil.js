import axios from 'axios'

import RequestConstant from '../consts/RequestConstant'

class RequestUtil {

	constructor() {
		this.requestClient = axios.create({
			baseURL: RequestConstant.DOMAIN_URL,
			timeout: 1000
		});
	}

	getRequest(requestPath, params, resFun) {
		const config = {
			'params': params
		};
		let _this = this;
		this.requestClient.get(requestPath, config).then(function(response) {
			resFun(response.data);
		}).catch(function(error) {
			_this.handleError(error);
		});
	}

	postRequest(requestPath, params, resFun) {
		const config = {
			'params': params
		};
		let _this = this;
		this.requestClient.post(requestPath, config).then(function(response) {
			resFun(response.data);
		}).catch(function(error) {
			_this.handleError(error);
		});
	}

	postFormRequest(requestPath, formData, resFun) {
		const config = {
			'data': formData,
			'headers': {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		};
		let _this = this;
		this.requestClient.post(requestPath, config).then(function(response) {
			resFun(response.data);
		}).catch(function(error) {
			_this.handleError(error);
		});
	}

	handleError(error) {

		let statusCode = error.request.status;

		if(statusCode >= 400 && statusCode < 500) {
			console.log('客户端异常');
		} else if(statusCode >= 500 && statusCode < 600) {
			console.log('服务器异常');
		} else {
			console.log('网络错误');
		}
	}
}

export default RequestUtil;
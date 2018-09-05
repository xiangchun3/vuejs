import Vue from 'vue';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VeeValidate, {
	Validator
} from 'vee-validate';

Validator.addLocale(zh_CN);

const config = {
	errorBagName: 'errors',
	fieldsBagName: 'fields',
	delay: 100,
	locale: 'zh_CN',
	strict: true,
	enableAutoClasses: true,
	events: 'blur',
	inject: true
};

Vue.use(VeeValidate, config);

const dictionary = {
	zh_CN: {
		attributes: {
      username: '登录名',
			mobile: '手机号',
			password: '密码',
			phoneCode: '手机验证码',
			imgcode: '图形验证码',
			name: '姓名',
			idCardNo: '身份证号',
			bankCardNo: '银行卡号',
			regCode: '验证码'
		},
		messages: {
			required: field => `${field}不能为空`
		}
	}
};

Validator.extend('username', {
	getMessage: field => '请输入11位手机号或Email',
	validate: value => {
    return (value.length == 11 && /^((13|14|15|16|17|18)[0-9]{1}\d{8})$/.test(value)) || /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
	}
});
Validator.extend('mobile', {
	getMessage: field => '请输入正确的手机号',
	validate: value => {
    return value.length == 11 && /^((13|14|15|16|17|18)[0-9]{1}\d{8})$/.test(value);
	}
});
Validator.extend('password_1', {
	getMessage: field => '请输入8-20位的密码',
	validate: value => {
		return value.length >= 8 && value.length <= 20;
	}
});
Validator.extend('password_2', {
	getMessage: field => '密码至少包含数字、字母、符号中的两种',
	validate: value => {
		var passWord2 = /(^\d+$)|(^[a-z]+$)|(^[A-Z]+$)|(^[^0-9a-zA-Z]+$)|(\s)|([\u4e00-\u9fa5])/.test(value);
		return !passWord2;
	}
});
Validator.extend('imgcode', {
	getMessage: field => '请输入6位验证码',
	validate: value => {
		return value.length == 6;
	}
});
Validator.extend('name', {
	getMessage: field => '姓名至少为两个汉字',
	validate: value => {
		var idCardReg = /^[\u4e00-\u9fa5]+[\u4e00-\u9fa5\u00b7]*[\u4e00-\u9fa5]+$/;
		return value.length > 1 && idCardReg.test(value);
	}
});
Validator.extend('idCardNo', {
	getMessage: field => '身份证号输入有误',
	validate: value => {
		var idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		return idCardReg.test(value);
	}
});
Validator.updateDictionary(dictionary);
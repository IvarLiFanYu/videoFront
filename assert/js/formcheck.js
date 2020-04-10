//判断是否为空方法
function isNull(ele) {
	//判断值是否为空串或者去空格之后成为空串
	if(ele == "" || $.trim(ele).length == 0){
		return true;
	}
	return false;
}
//判断是否非法
function isIllegal(ele) {
	let illegal = /[~#^$@%&!*?()<>:;'"{}【】]/;
	if(ele == "" || ele.length < 6 || illegal.exec(ele)){
		return true;
	}
	return false;
}
//验证用户名
function validateUsername(obj){
	$("#usernameMessegeDiv").hide()
	$("#usernameValidateMessegeDiv").hide()
	//1. 获取 username input中的值.
	let username = $(obj).val()
	//2. 判断是否为空
	if(isNull(username)) {
		//2.1 如果为空, 显示消息栏提示输入用户名
		$("#usernameMessegeDiv").show();
		//2.2 定位到 username input 框
		obj.focus()
		return false
	} else {
		$("#usernameMessegeDiv").hide();
	}
	//3. 如果不为空 判断是否含有特殊字符使用正则表达式
	if(isIllegal(username)) {
		//3.1 如果含有正则表达式, 显示消息栏提示输入非法用户名
		$("#usernameValidateMessegeDiv").show();
		//3.2 定位到 username input 框
		obj.focus();
		return false;
	} else {
		$("#usernameValidateMessegeDiv").hide();
	}
}
function validatePassword(obj){
	$("#passwordMessegeDiv").hide();
	//1. 获取 password input中的值.
	let password = $(obj).val()
	//2. 判断是否为空
	if (isNull(password)) {
		//2.1 如果为空, 显示消息栏提示输入密码
		$("#passwordMessegeDiv").show();
		//2.2 定位到 password input 框
		obj.focus();
	} else {
		$("#passwordMessegeDiv").hide();
	}
}
//判断用户名和密码是否正确
function isTrue() {
	$("#usernameMessegeDiv").hide();
	$("#passwordMessegeDiv").hide();
	$("#usernameValidateMessegeDiv").hide();
	let username = $("input[name='name']").val()
	let password = $("input[name='password']").val()
	if (isNull(username)) {
		$("#usernameMessegeDiv").show();
		if (isNull(password)) {
			$("#passwordMessegeDiv").show();
		}
		return false;
	} else {
		if (isIllegal(username)) {
			$("#usernameValidateMessegeDiv").show();
			if (isNull(password)) {
				$("#passwordMessegeDiv").show();
			}
			return false;
		}
		if (isNull(password)) {
			$("#passwordMessegeDiv").show();
			return false;
		}
	}
	if (username!='lifanyu' || password != '123456') {
		alert("用户名或者密码错误")
		return false;
	}
	return true;
}
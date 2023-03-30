window.addEventListener('load', function () {
	const signInBtn = document.getElementById("signIn");
	const signUpBtn = document.getElementById("signUp");
	const fistForm = document.getElementById("form1");
	const secondForm = document.getElementById("form2");
	const container = document.querySelector(".container");
	signInBtn.addEventListener("click", () => {
		container.classList.remove("right-panel-active");
	});

	signUpBtn.addEventListener("click", () => {
		container.classList.add("right-panel-active");
	});

	fistForm.addEventListener("submit", (e) => e.preventDefault());
	secondForm.addEventListener("submit", (e) => e.preventDefault());

	var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;/*邮箱格式正则表达式*/
	document.getElementById("denglu").addEventListener("click", clicklogin);
	function clicklogin() {
		if (document.getElementById("Name").value == "") {
			window.alert("用户名不能为空！");
			document.getElementById("Name").focus();
			return;
		}else if (document.getElementById("Email").value == "") {
			window.alert("邮箱不能为空！");
			document.getElementById("Email").focus();
			return;
		}
		else if(!reg.test(document.getElementById("Email").value)){
			window.alert("邮箱格式不正确");
		}
		else if (document.getElementById("pwd").value == "") {
			window.alert("密码不能为空！");
			document.getElementById("pwd").focus();
			return;
		}
		else {
			window.location.href = "./web.html"
		}
	}
	var reg1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;/*邮箱格式正则表达式*/
	document.getElementById("zhuce").addEventListener("click", ClickLogin);
	function ClickLogin() {
		if (document.getElementById("EMAIL").value == "") {
			window.alert("邮箱不能为空！");
			document.getElementById("EMAIL").focus();
			return;
		}
		else if(!reg1.test(document.getElementById("EMAIL").value)){
			window.alert("邮箱格式不正确");
		}
		else if (document.getElementById("PWD").value == "") {
			window.alert("密码不能为空！");
			document.getElementById("PWD").focus();
			return;
		}
		else {
			window.alert("注册成功")
		}
	}
})
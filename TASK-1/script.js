function check() {

	var name = document.getElementById("name").value
	var emailReg = document.getElementById("email-reg").value
	var dob = document.getElementById("dob").value
	var rno = document.getElementById("rno").value
	var password1 = document.getElementById("password1").value
	var password2 = document.getElementById("password2").value

	num = /[0-9]/;
	small = /[a-z]/;
	capital = /[A-Z]/;

	if (name=='') {
		alert("Name field is empty.");
		console.log("Name field is empty.");
		return false;
	}
	else if (emailReg=='') {
		alert("E-Mail ID field is empty.");
		console.log("E-Mail ID field is empty.");
		return false;
	}
	else if (dob=='') {
		alert("Date of Birth field is empty.");
		console.log("Date of Birth field is empty.");
		return false;
	}
	else if (rno=='') {
		alert("Roll Number field is empty.");
		console.log("Roll NUmber field is empty.");
		return false;
	}
	else if (password1=='' || password2=='') {
		alert("Password field is empty.");
		console.log("Password field is empty.");
		return false;
	}
	else if (password1!='' && password2!='' && (password1!=password2)) {
		alert("Passwords don't match");
		console.log("Passwords don't match");
		return false;
	}
	else if (password1!='' && password2!='' && (password1==password2) && (password1.length < 6)) {
		alert("Error: Password must contain at least six characters!");
		console.log("Error: Password must contain at least six characters!");
		return false;	
	}
	else if (password1!='' && password2!='' && (password1==password2) && !num.test(password1)) {
		alert("Error: password must contain at least one number (0-9)!");
		console.log("Error: password must contain at least one number (0-9)!");
		return false;
	}
	else if (password1!='' && password2!='' && (password1==password2) && !small.test(password1)) {
		alert("Error: password must contain at least one lowercase letter (a-z)!");
		console.log("Error: password must contain at least one lowercase letter (a-z)!");
		return false;
	}
	else if (password1!='' && password2!='' && (password1==password2) && !capital.test(password1)) {
		alert("Error: password must contain at least one uppercase letter (A-Z)!");
		console.log("Error: password must contain at least one uppercase letter (A-Z)!");
		return false;
	}
	else {
		alert("Thanks for signing up (-: ");
		console.log("Thanks for signing up (-: ");
		return true;
	}
}



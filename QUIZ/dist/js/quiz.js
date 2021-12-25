function submitForm(e) {
	e.preventDefault();
	let name = document.forms["welcome_form"]["name"].value;
	/* storage name */
	sessionStorage.setItem("name", name);
	console.log(name);
}

function getFormvalue() {
	let form = document.getElementById("#form1");
  const firstName = document.forms["form1"]["fname"].value;
  const lastName = document.forms["form1"]["lname"].value;

	form.addEventListener("submit", () ={
		alert(firstName + " " + lastName);
	});
  
}

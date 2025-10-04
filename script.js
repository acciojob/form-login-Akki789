function getFormvalue(event) {
  // stop the form from submitting and reloading the page
  event.preventDefault();

  // get values from the form fields
  const firstName = document.forms["form1"]["fname"].value;
  const lastName = document.forms["form1"]["lname"].value;

  // show the full name
  alert(firstName + " " + lastName);
}

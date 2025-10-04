function getFormvalue() {
  const firstName = document.forms["form1"]["fname"].value;
  const lastName = document.forms["form1"]["lname"].value;

  alert(firstName + " " + lastName);

  return false; // stops form submission without needing event.preventDefault()
}
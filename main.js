var darkMode = $("#darkMode");
console.log(darkMode);
var body = $("body");
console.log(body);

function changeTheme() {
  body.toggleClass("dna-body-dark");
  body.toggleClass("dna-body-light");
  console.log(body.class);
}
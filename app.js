// using javascript

// function myFunction() {
//   var text1 = document.getElementById("text");
//   text1.select();
//   text1.setSelectionRange(0, 1000);
//   navigator.clipboard.writeText(text1.value);
// }

// using jquery

$(document).ready(function () {
  $("#btn").click(function () {
    $("#text").select();
    document.execCommand("copy");
  });
});

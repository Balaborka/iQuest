// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

function start() {
  var date = new Date();
  text = "Year: " + date.getFullYear();
  text += "\nMonth: " + date.getMonth();
  text += "\nDay: " + date.getDate();
  text += "\nHours: " + date.getHours();
  text += "\nMinutes: " + date.getMinutes();
  text += "\nSeconds: " + date.getSeconds();
  alert(text);
}
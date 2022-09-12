const xhr = new XMLHttpRequest();

xhr.onload = function () {
  console.log(this.responseText);
};
xhr.onerror = function () {
  console.log("Error");
};
xhr.open("GET", "https://dummyjson.com/quotes");
xhr.send();

var main = document.getElementsByClassName('main');
// main[0].innerHTML = "<p>Learning JavaScript</p>";
main[0].insertAdjacentHTML('afterbegin', "<p>Learning JavaAcript</p>");

function sample() {
  console.log("これはJavaScriptのサンプルです。");
}
sample();

var Cat = function (name) {
  this.name = name;
};
Cat.prototype.run = function () {
  console.log(this.name + "が走る");
};

var tama = new Cat('タマ');
tama.run();
console.log(tama.name);

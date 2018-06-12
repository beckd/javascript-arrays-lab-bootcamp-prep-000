const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
var kitten = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  var name = "Ralph";
  return kittens.push(name);
}
function destructivelyPrependKitten(name1) {
  var name1 = "Bob";
  return kittens.unshift(name1);
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
var name2 = "Broom";
kitten.appendKitten(name2);

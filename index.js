const app = "I don't do much."
function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
}
function destructivelyAppendKitten(name) {
  var name = "Ralph";
  return kittens.push(name);
}
function destructivelyPrependKitten(name1) {
  var name1 = "Bob";
  return kittens.pop(name1);
}

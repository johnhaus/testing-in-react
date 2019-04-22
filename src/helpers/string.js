export function capitalize(word) {
  if (word === null) {
    return null;
  }
  if (word === "") {
    return "";
  }
  return word[0].toUpperCase() +
    word.substr(1).toLowerCase();
}

// Michael's Code Snippet - String Manipulation
//string
const myString = "harold the apple eater";
// adds hyphens
const hyphendPhrase = myString.toLowerCase().split(" ").join("-");
// removes hyphens
const newText = hyphendPhrase.replace(/-/g, " ");
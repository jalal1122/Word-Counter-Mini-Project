let textarea = document.getElementById("text");

textarea.addEventListener("input", function () {
  let text = this.value;
  let words = text.split(" ");
  let wordCount = words.length;
  let charCount = 0;
  words.forEach((element) => {
    charCount += element.length;
  });

  document.querySelector(
    ".result-div>h3"
  ).innerHTML = `Word Count: ${wordCount}`;
  document.querySelector(
    ".result-div>h4"
  ).innerHTML = `Character Count: ${charCount}`;
});

document
  .querySelector(".container>button")
  .addEventListener("click", function () {
    let copyText = textarea.value;
    navigator.clipboard.writeText(copyText);
    alert("Text Copied to Clipboard");
  });

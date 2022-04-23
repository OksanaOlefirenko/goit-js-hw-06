const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

const list = itemEl.forEach (element => console.log(
`Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.children.length}`));









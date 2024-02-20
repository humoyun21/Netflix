function $(select) {
  return document.querySelector(select);
}

function $$(select) {
  return document.querySelectorAll(select);
}
function creatElement(tegName, clasName, htmlContent) {
  let tag = document.createElement(tegName);
  if (clasName) {
    tag.setAttribute("class", clasName);
  }

  if (htmlContent) {
    tag.innerHTML = htmlContent;
  }

  return tag;
}

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function createElement(tagName, className, content) {
  let div = document.createElement(tagName);
  if (className) {
    div.classList.add(className);
  }
  if (content) {
    div.innerHTML = content;
  }
  return div;
}

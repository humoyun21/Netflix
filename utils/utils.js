// SELECT A VARIABLE UTILS STARTED
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}
// SELECT A VARIABLE UTILS ENDED

// CREATE ELEMENT STARTED
function createElement(tagname, classlist, content) {
  const div = document.createElement(tagname);
  div.classList.add(classlist);
  div.innerHTML = content;

  return div;
}
// CREATE ELEMENT ENDED

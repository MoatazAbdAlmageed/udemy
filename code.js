items = [...document.getElementsByClassName("udlite-accordion-panel-title")];

items.map((item) => {
  return item.getElementsByTagName("span")[0].textContent;
});

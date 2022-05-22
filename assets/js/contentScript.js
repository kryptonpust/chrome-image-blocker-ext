// let images = document.getElementsByTagName("img");
// for (let i = 0; i < images.length; i++) {
//   // console.log(images[i].src);
//   const asrc = document.createAttribute("asrc");
//   asrc.value = images[i].src;
//   images[i].setAttributeNode(asrc);
//   images[i].src = "";
// }

// document.addEventListener(
//   "click",
//   () => console.log("clicked"),
//   false
// );

const observer = new MutationObserver((mutations, observer) => {
  // console.log(mutations)
  for (m of mutations) {
    // console.log(m.target);
    recurseEl(m.target);
  }
});

observer.observe(document.documentElement || document.body, {
  childList: true,
  subtree: true,
});

function recurseEl(element) {
  let val = element.tagName;
  if (val == "IMG" || val == "VIDEO") {
    // console.log("print",element)
    // if(element.height<=16)
    // {
    //   return
    // }
    if (!element.hasAttribute("temp")) {
      const temp = element.src;
      element.setAttribute("temp", temp);
      element.src = "";
      // element.addEventListener("click", handler);
      // console.log(element)
      // console.log(element);
      element.addEventListener(
        "click",
        (e) => {
          console.log(element)
          console.log(element.getAttribute("temp"))
          element.src = element.getAttribute("temp");
          console.log(element)
        },
        true
      );
    }
  }
  Array.from(element.children).forEach((child) => {
    recurseEl(child);
  });
}

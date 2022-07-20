const filterButton = document.querySelector(".filterButt");
const changeValue = document.querySelector(".changeVal");
const diffValue = document.querySelector(".diffValue");

changeValue.addEventListener("click", (e) => {
  if (e.target.innerText.toLowerCase() === "todo") {
    diffValue.innerText = "todo";
  } else if (e.target.innerText.toLowerCase() === "doing") {
    diffValue.innerText = "doing";
  } else if (e.target.innerText.toLowerCase() === "done") {
    diffValue.innerText = "done";
  }
});

/* console.log(statusValue);
filterButton.addEventListener("click", (e) => {
  const notMatchArr = statusValue.filter((item) => {
    console.log(item.hasAttribute("selected"));
    console.log(item.value.toLowerCase());
    if (
      item.value.toLowerCase() !== e.target.innerText.toLowerCase() &&
      item.hasAttribute("selected") === false
    ) {
      return item;
    }
  });
  const MatchArr = statusValue.filter((item) => {
    if (
      item.value.toLowerCase() === e.target.innerText.toLowerCase() &&
      item.hasAttribute("selected") === true
    ) {
      return item;
    }
  });
  notMatchArr.forEach((index) => {
    index.parentElement.parentElement.setAttribute(
      "style",
      "display:none !important"
    );
  });
  MatchArr.forEach((value) => {
    value.parentElement.parentElement.removeAttribute("style");
  });
  console.log(notMatchArr, MatchArr[0].innerText, MatchArr[1].innerText);
}); */

/*   for (let i = 0; i < statusValue.length; i++) {
    console.log(e.target.innerText.toLowerCase(), statusValue[i].value);
    if (
      e.target.innerText.toLowerCase() !== statusValue[i].value.toLowerCase()
    ) {
      statusValue[i].parentElement.parentElement.setAttribute(
        "style",
        "display:none !important"
      );
      break;
    } else if (
      e.target.innerText.toLowerCase() === statusValue[i].value.toLowerCase()
    ) {
      statusValue[i].parentElement.parentElement.removeAttribute("style");
      break;
    }
  } 
*/

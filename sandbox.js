const filterButton = document.querySelector(".filterButt");
const changeValue = document.querySelectorAll(".changeVal");
const diffVal = document.querySelectorAll(".diffValue");
const cleanBtn = document.querySelector(".clearButton");
const delBtn = document.querySelectorAll(".delete");
const statusArr = Array.from(diffVal);

changeValue.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.innerText.toLowerCase());
    if (e.target.innerText.toLowerCase() === "todo") {
      item.firstElementChild.innerText = "ToDo";
    } else if (e.target.innerText.toLowerCase() === "doing") {
      item.firstElementChild.innerText = "Doing";
    } else if (e.target.innerText.toLowerCase() === "done") {
      item.firstElementChild.innerText = "Done";
    }
  });
});

filterButton.addEventListener("click", (e) => {
  cleanBtn.classList.remove("showStatus");
  const notMatchArr = statusArr.filter((item) => {
    if (item.innerText.toLowerCase() !== e.target.innerText.toLowerCase()) {
      return item;
    }
  });
  const MatchArr = statusArr.filter((item) => {
    if (item.innerText.toLowerCase() === e.target.innerText.toLowerCase()) {
      return item;
    }
  });
  notMatchArr.forEach((index) => {
    index.parentElement.parentElement.classList.add("showStatus");
  });
  MatchArr.forEach((value) => {
    value.parentElement.parentElement.classList.remove("showStatus");
  });
});

cleanBtn.addEventListener("click", (e) => {
  e.target.classList.add("showStatus");
  statusArr.forEach((value) => {
    value.parentElement.parentElement.classList.remove("showStatus");
  });
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

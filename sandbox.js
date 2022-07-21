const filterButton = document.querySelector(".filterButt");
const changeValue = document.querySelectorAll(".changeVal");
const diffVal = document.querySelectorAll(".diffValue");
const cleanBtn = document.querySelector(".clearButton");
const delBtn = document.querySelectorAll(".delete");
const checkStatus = document.querySelector(".idenifier");
const statusArr = Array.from(diffVal);

changeValue.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.innerText.toLowerCase());
    if (e.target.innerText.toLowerCase() === "todo") {
      item.firstElementChild.innerText = "ToDo";
      e.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "#ec77ab";
      if (checkStatus.innerText === "") {
        console.log("good");
      } else if (
        e.target.innerText.toLowerCase() !== checkStatus.innerText.toLowerCase()
      ) {
        e.target.parentElement.parentElement.parentElement.classList.add(
          "showStatus"
        );
      }
    } else if (e.target.innerText.toLowerCase() === "doing") {
      item.firstElementChild.innerText = "Doing";
      e.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "#9b6ecb";
      if (checkStatus.innerText === "") {
        console.log("good");
      } else if (
        e.target.innerText.toLowerCase() !== checkStatus.innerText.toLowerCase()
      ) {
        e.target.parentElement.parentElement.parentElement.classList.add(
          "showStatus"
        );
      }
    } else if (e.target.innerText.toLowerCase() === "done") {
      item.firstElementChild.innerText = "Done";
      e.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "#7873f5";
      if (checkStatus.innerText === "") {
        console.log("good");
      } else if (
        e.target.innerText.toLowerCase() !== checkStatus.innerText.toLowerCase()
      ) {
        e.target.parentElement.parentElement.parentElement.classList.add(
          "showStatus"
        );
      }
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
  checkStatus.innerText = e.target.innerText;
});

cleanBtn.addEventListener("click", (e) => {
  e.target.classList.add("showStatus");
  checkStatus.innerText = "";
  statusArr.forEach((value) => {
    value.parentElement.parentElement.classList.remove("showStatus");
  });
});

delBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
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

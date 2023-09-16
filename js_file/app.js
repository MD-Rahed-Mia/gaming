
let header = document.querySelector("#header");
let footer = document.querySelector("#footer");

let count = 1;

window.onload = function () {

  // header start from here

  fetch("../component_file/header.html")
    .then((head) => head.text())
    .then((finalHead) => {
      header.innerHTML = finalHead;

      const menuBtn = document.querySelector("#menuBtn");
      const sideBarMenu = document.querySelector(".side-bar");
      const user = document.querySelector(".user");
      const userType = document.querySelector(".user-type");

      menuBtn.addEventListener("click", function () {
        count++;
        if (count % 2 == 0) {
          sideBarMenu.style.left = "0px";
          menuBtn.classList.remove("fa-bars");
          menuBtn.classList.add("fa-xmark");
        }
        else if (count % 2 == 1) {
          sideBarMenu.style.left = "-300px";
          menuBtn.classList.remove("fa-xmark");
          menuBtn.classList.add("fa-bars");
        }

      })

      const onlineGames = document.querySelector("#online-games");

      onlineGames.addEventListener("click", function () {
        document.querySelector(".online-games-desc").style.display = "flex";
      })

      document.querySelector(".online-games-desc").addEventListener("mouseleave", function () {
        document.querySelector(".online-games-desc").style.display = "none";
      })


      user.addEventListener("click", function () {

        userType.classList.toggle("hidden")
      })


    })



    // footer start from here



    fetch("../component_file/footer.html")
    .then(text => text.text())
    .then((finalText) => {

      footer.innerHTML = finalText;





    })
}
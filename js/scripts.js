const indexContent = document.getElementById("about-me");
const contentFrame = document.getElementById("content");
const contentShow = document.getElementById("content-show");
const contactTitle = "It would be a pleasure to meet you.";
const experienceTitle = "The harder I work, the luckier I get.";
const indexTitle = "Programming is my passion, Not my job.";

/* Open */
function openNav() {
  document.getElementById("menu").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("menu").style.height = "0%";
}

function showPage(pageName) {
  if (pageName != "about-me") {
    indexContent.style.display = "none";
    contentShow.style.display = "block";
    contentFrame.src = pageName + ".html";
  } else {
    indexContent.style.display = "block";
    contentShow.style.display = "none";
  }
}

function setContent() {
  contentShow.innerHTML = contentFrame.contentDocument.body.innerHTML;
  
}

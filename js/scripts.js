const indexContent = document.getElementById("about-me-content");
const contentFrame = document.getElementById("content");
const contentShow = document.getElementById("content-show");
const mainTitle = document.getElementById("mainTitle");

const contactTitle = 'It would be a pleasure to contact you.';
const experienceTitle = '"The harder I work, the luckier I get."';
const defaultTitle = '"Programming is my passion, Not my job."';


function locationHashChanged( e ) {
  switch (location.hash) {
    case '#contact':
      mainTitle.innerText = contactTitle;
      break;
    case '#experience':
      mainTitle.innerText = experienceTitle;
      break;
    default:
      mainTitle.innerText = defaultTitle;
      break;
  }
}


window.onhashchange = locationHashChanged;



/* Open */
function openNav() {
  document.getElementById("menu").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("menu").style.height = "0%";
}

function showPage(pageName) {
  if (pageName != "about-me-content") {
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

function sendEmail(){
  let name = document.getElementById("name").value; 
  let comment = document.getElementById("comment").value; 
  window.open('mailto:ernesto.cabanas.dev@gmail.com?subject="A new contact..."&body='+
  "Hello  I'm " +name+
  " and I'm writing you because, "+comment
  );
  return false;
}

function changeLanguage(sLanguage){
  let language = sLanguage.innerText;
  if(language==='EN'){
   document.getElementById("es").style.display = "none";
   document.getElementById("en").style.display = "block";
   if(!sLanguage.classList.contains("active")){
    document.getElementById("switchEs").classList.toggle("active"); // deactivate
    document.getElementById("switchEn").classList.toggle("active");
    }
  }else{
    document.getElementById("en").style.display = "none";
    document.getElementById("es").style.display = "block";
    if(!sLanguage.classList.contains("active")){
      document.getElementById("switchEn").classList.toggle("active");// deactivate
      document.getElementById("switchEs").classList.toggle("active");
      }
  
  }
 
}

// Event scripts

function onLoadHash( e ) {
  showPage(location.hash.replace('#',''));
}
window.onload = onLoadHash;


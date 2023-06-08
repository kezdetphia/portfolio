//texts
const intro2 = "I'm a visionary software engineer, crafting cutting-edge solutions and shaping the digital future with my code."
const aboutMe = 'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.'
const getToKnowMe = `I'm a passionate Software Engineer specializing in developing robust and efficient software solutions. With expertise in building scalable applications, I craft top-notch backend systems. Check out my impressive software projects in the Portfolio section. I share knowledge and experience through valuable content on my blog and GitHub. Seeking exciting job opportunities that match my skills and ambitions. Let's collaborate in a dynamic and innovative environment. Connect and embark on a remarkable software engineering journey`
const picList = [
  'utils/1.png',
  'utils/2.png',
  'utils/3.png',
  'utils/4.png',
  'utils/5.png',
  'utils/6.png',
  'utils/7.png',
  'utils/10.png',
]

const loadLayOut=()=>{
  //menubar 
  const $icon= $('<img>').attr({'src' : '/Users/WorkSpace/code/portfolio/utils/atom.png', 'id' : 'icon'} ).appendTo('.icon-name-div').click(() => location.reload());
  const $name= $('<h4>').text('mark feher').attr({'id': 'name',}).appendTo('.icon-name-div').wrap('<a href="#"></a>').parent().on('click', () => window.location.reload());
  // <a href="resume.html" target="_blank">resume</a>
  const $home = $('<h4>').text('home').attr('class', 'menu-items').appendTo('.menu-options').wrap('<a href="#"></a>').parent().on('click', () => window.location.reload());
  const $about = $('<h4>').text('about').attr('class', 'menu-items').appendTo('.menu-options').wrap('<a class="scroll-link" href=".about-me" ></a>');
  const $projects = $('<h4>').text('projects').attr('class', 'menu-items').appendTo('.menu-options').wrap('<a class="scroll-link" href=".projects"></a>');
  const $resume = $('<h4>').text('resume').attr('class', 'menu-items').appendTo('.menu-options').wrap('<a href="resume.html" target="_blank"></a>');
  // const $contact = $('<h4>').text('contact').attr({'class': 'menu-items', 'id': 'openModal'} ).appendTo('.menu-options').wrap('<a href="#"></a>');
  

  //main
  const $intro = $('<h1>').text("hi, i'm mark feher").attr('id', 'intro').appendTo('.introduction')
  const $intro2 = $('<h3>').text(intro2).attr('id', 'intro2').appendTo('.introduction');
  const $projbtn = $('<button>').text('projects').attr({'id':'openModal2', 'class':"modal-buttons"}).appendTo('.introduction')

  //main//links
  const $linkedInImg = $('<img>').attr({'src' : 'utils/link.png' , 'id' : 'linkedin-icon' ,'class': 'sm-links', } ).appendTo('.links').wrap('<a href="https://www.linkedin.com/in/mark-feher-3484a2182/" target="_blank" ></a>');
  $linkedInImg.clone().appendTo('.footer-right-icon').wrap('<a href="https://www.linkedin.com/in/mark-feher-3484a2182/" target="_blank" ></a>');
  const $gitHubImg = $('<img>').attr({'src' : 'utils/github.png' , 'id' : 'github-icon', 'class': 'sm-links' } ).appendTo('.links').wrap('<a href="https://github.com/kezdetphia" target="_blank"></a>');
  $gitHubImg.clone().appendTo('.footer-right-icon').wrap('<a href="https://github.com/kezdetphia" target="_blank"></a>');
  const $instaImg = $('<img>').attr({'src' : 'utils/insta.png' , 'id' : 'insta-icon', 'class': 'sm-links' } ).appendTo('.links').wrap('<a href="https://github.com/kezdetphia" target="_blank"></a>');
  $instaImg.clone().appendTo('.footer-right-icon').wrap('<a href="https://github.com/kezdetphia" target="_blank"></a>');
  const $faceImg = $('<img>').attr({'src' : 'utils/facebook(1).png' , 'id' : 'face-icon', 'class': 'sm-links' } ).appendTo('.links').wrap('<a href="https://github.com/kezdetphia" target="_blank"></a>');
  

  //aboutMe
  const $aboutMe = $('<h1>').text('about me.').appendTo('.about-me-intro')
  const aboutMeText = $('<h3>').text(aboutMe).appendTo('.about-me-intro')
  //from here im adding the html in the html file
  $('#know-me-p').text(getToKnowMe)
}

//function that toggles the theme to invert the page and back to normal, 
let functionEnabled = false;
const changeColors=()=>{
  const invert = 'invert(100%)';
  const invertBtn = $('.invert-colors')
  if (functionEnabled){
    $('*').css('filter', 'none');
    invertBtn.text('invert');
  }else{
    $('*').css('filter', invert);
    invertBtn.text('normal');
  }
  functionEnabled = !functionEnabled
}



$(()=>{

loadLayOut()

//pup up window for contact details when button is pressed
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');
const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}
$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);

//pop up for projects
const $openBtn2 = $('#openModal2');
const $modal2 = $('#modal2');
const $closeBtn2 = $('#close2');
const openModal2 = () => {
  $modal2.css('display', 'block');
}
const closeModal2 = () => {
  $modal2.css('display', 'none');
}
$openBtn2.on('click', openModal2);
$closeBtn2.on('click', closeModal2);


//this is a pretty primitive way to make the slide longer. The ideal idea would be if
//the pic array would load again or extend it by the array items once it reaches the end
//also due to this solution when i start with the previous button it shows blank
for (let i=0; i<10; i++){
  picList.forEach((picLink)=>{
    $carouselInside = $('.carousel-inner')
    $('<img>').attr({'src': picLink, id: 'carousel-img'}).appendTo($carouselInside)
  })
}


//projects slide. When button is clicked it checks the width of the first image and 'transforms' the image on the x axis as many pixels
//as the current first images width is in pixels 
let currentPosition = 0;
$(".carousel-next").click(function(e) {
  e.preventDefault();
  currentPosition -= $("#carousel-img").first().width();
  $(".carousel-inner").css("transform", `translateX(${currentPosition}px)`);
});

$(".carousel-prev").click(function(e) {
  e.preventDefault();
  currentPosition += $("#carousel-img").first().width();
  $(".carousel-inner").css("transform", `translateX(${currentPosition}px)`);
});


//inverting colors
$('.invert-colors').on('click', changeColors)


$('a.scroll-link').click(function(e) {
  e.preventDefault();
  var targetDiv = $($(this).attr('href'));
  var offset = targetDiv.offset().top;
  $('html, body').animate({ scrollTop: offset }, 500);
});

$('a.projects').click(function(e) {
  e.preventDefault();
  var targetDiv = $($(this).attr('href'));
  var offset = targetDiv.offset().top;
  $('html, body').animate({ scrollTop: offset }, 500);
});












}) //closing tag of main
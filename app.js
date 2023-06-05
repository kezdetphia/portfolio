const intro2 = "I'm a visionary software engineer, crafting cutting-edge solutions and shaping the digital future with my code."











$(()=>{
  //menubar 
  const $icon= $('<img>').attr({'src' : '/Users/WorkSpace/code/portfolio/utils/atom.png', 'id' : 'icon'} ).appendTo('.icon-name-div').wrap('<a href="https://www.google.com"></a>');
  const $name = $('<h4>').text('mark feher').attr('id', 'name').appendTo('.icon-name-div').wrap('<a href="https://www.google.com"></a>');
  const $home = $('<h4>').text('home').attr('class', 'menu-items').appendTo('.menu-options').wrap('<a href="https://www.google.com"></a>');
  const $about = $('<h4>').text('about').attr('class', 'menu-items').appendTo('.menu-options').wrap('<a href="https://www.google.com"></a>');
  const $projects = $('<h4>').text('projects').attr('class', 'menu-items').appendTo('.menu-options').wrap('<a href="https://www.google.com"></a>');
  const $contact = $('<h4>').text('contact').attr('class', 'menu-items').appendTo('.menu-options').wrap('<a href="https://www.google.com"></a>');

  //main
  const $intro = $('<h1>').text("hi, i'm mark feher").attr('id', 'intro').appendTo('.introduction')
  const $intro2 = $('<h3>').text(intro2).attr('id', 'intro2').appendTo('.introduction');
  const $projbtn = $('<button>').text('projects').attr('id', 'projbtn').appendTo('.introduction')

  //main//links
  const $linkedInImg = $('<img>').attr({'src' : 'utils/linkedin.png' , 'id' : 'linkedin-icon' ,'class': 'sm-links'} ).appendTo('.links').wrap('<a href="https://www.linkedin.com/in/mark-feher-3484a2182/"></a>');
  const $gitHubImg = $('<img>').attr({'src' : 'utils/github.png' , 'id' : 'github-icon', 'class': 'sm-links' } ).appendTo('.links').wrap('<a href="https://github.com/kezdetphia"></a>');


})
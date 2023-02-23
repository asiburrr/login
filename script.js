$(document).ready(function() {
  $('.menu-btn').click(function() {
    $(this).toggleClass('active');
    $('.dropdown-menu').toggle();
    $('.menu-overlay').toggle();
  });
  
  $('.menu-overlay').click(function() {
    $('.menu-btn').removeClass('active');
    $('.dropdown-menu').hide();
    $(this).hide();
  });
});

$(document).ready(function() {
  // Set the initial state of the menu button
  $('#menu-btn').removeClass('close');

  // Toggle the navigation menu when the menu button is clicked
  $('#menu-btn').click(function() {
    $('nav ul').toggleClass('show');
    $(this).toggleClass('close');
  });

  // Hide the navigation menu when a link is clicked
  $('nav ul li a').click(function() {
    $('nav ul').removeClass('show');
    $('#menu-btn').removeClass('close');
  });
  
  // Handle header button click
  $('nav ul li a.header-btn').click(function(e) {
    e.preventDefault();
    alert('Thanks for subscribing!');
  });

  // Change the header background image every 5 seconds
  var headerImages = [
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/user/erondu/1600x900',
    'https://source.unsplash.com/user/erondu/1600x900',
    'https://source.unsplash.com/user/erondu/1600x900'
  ];
  var currentIndex = 0;
  
  setInterval(function() {
    currentIndex++;
    if (currentIndex >= headerImages.length) {
      currentIndex = 0;
    }
    $('header').css('background-image', 'url(' + headerImages[currentIndex] + ')');
  }, 5000);
});

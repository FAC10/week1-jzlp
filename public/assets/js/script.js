// Find elements in DOM
var linksDOM = document.querySelectorAll('.js-nav-link');


// Smooth scroll settings
var scrollDuration = 600;
var numberOfScrolls = 60;
var singleScrollDuration = scrollDuration / numberOfScrolls;


// Smooth scroll function
function smoothScrollTo(elementScrolled, targetElementPosition, scrollDuration) {
  if (scrollDuration <= 0) { return; }
  var distanceToTarget = targetElementPosition - getScrollPosition(elementScrolled);
  var scrollBlock = distanceToTarget / scrollDuration * singleScrollDuration;

  setTimeout(function() {
    console.log();elementScrolled.scrollTop
    elementScrolled.scrollTop = getScrollPosition(elementScrolled) + 10;
    // var currentScrollPosition = getScrollPosition(elementScrolled) + scrollBlock;
    // console.log(currentScrollPosition);

    if (currentScrollPosition === targetElementPosition) { return; }
    smoothScrollTo(elementScrolled, targetElementPosition, scrollDuration - singleScrollDuration);
  }, 10);
}



function getScrollPosition(element) {
  return element.scrollTop ||
         window.pageYOffset ||
         document.documentElement.scrollTop ||
         document.body.scrollTop ||
         0;
}


function setScrollPosition(element) {
  element
}


// Add event listeners
linksDOM.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = event.target.innerText;
    var targetPosition = document.getElementById(targetId).offsetTop;
    smoothScrollTo(document.body, targetPosition, scrollDuration);
  });
});





// Back to top scroll
var amountScrolledThreshold = 1000;
var backToTopButton = document.querySelector('.back-to-top-btn');



// Show or hide 'back to top' button
window.addEventListener('scroll', function(event) {

  if (window.scrollY > amountScrolledThreshold) {
    backToTopButton.style.opacity = '0.6';
  } else {
    backToTopButton.style.opacity = '0';
  }
})


// Scroll to target
backToTopButton.addEventListener('click', function(event) {
  event.preventDefault();
  smoothScrollTo(document.body, 0, scrollDuration);
});

// Find elements in DOM
var linksDOM = document.querySelectorAll('.js-nav-link');


// Smooth scroll settings
var scrollDuration = 600;
var numberOfScrolls = 60;
var singleScrollDuration = scrollDuration / numberOfScrolls;


// Smooth scroll function
function smoothScrollTo(elementScrolled, targetElementPosition, scrollDuration) {
  if (scrollDuration <= 0) { return; }
  var distanceToTarget = targetElementPosition - elementScrolled.scrollTop;
  var scrollBlock = distanceToTarget / scrollDuration * singleScrollDuration;

  setTimeout(function(){
    elementScrolled.scrollTop = elementScrolled.scrollTop + scrollBlock;
    if (elementScrolled.scrollTop === targetElementPosition) { return; }
    smoothScrollTo(elementScrolled, targetElementPosition, scrollDuration - singleScrollDuration);
  }, 10);
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

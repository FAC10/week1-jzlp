// Scroll to target
// Find elements in DOM
var linksDOM = document.querySelectorAll('.js-nav-link');


// Scroll to target function
var totalScrollDuration = 600;
var numberOfScrolls = 60;
var singleScrollDuration = totalScrollDuration / numberOfScrolls;

function scrollTo(targetElementPosition, scrollDuration) {
  if (scrollDuration <= 0) { return; }
  var distanceToTarget = targetElementPosition - getScrollPosition();
  var singleScrollDistance = distanceToTarget / scrollDuration * singleScrollDuration;

  setTimeout(function() {
    var scrolledElement = document.body;
    var positionBeforeScroll = getScrollPosition();
    scrolledElement.scrollTop = positionBeforeScroll + singleScrollDistance; // chrome safar

    if (document.documentElement.scrollTop === positionBeforeScroll) { // firefox
      scrolledElement = document.documentElement;
      scrolledElement.scrollTop = getScrollPosition() + singleScrollDistance;
    }

    if (scrolledElement.scrollTop === targetElementPosition) { return; }
    scrollTo(targetElementPosition, scrollDuration - singleScrollDuration);
  }, singleScrollDuration);
}


function getScrollPosition() {
  return document.body.scrollTop ||
         document.documentElement.scrollTop ||
         window.pageYOffset ||
         0;
}



// Add event listeners
linksDOM.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = event.target.innerText;
    var targetPosition = document.getElementById(targetId).offsetTop;
    scrollTo(targetPosition, totalScrollDuration);
  });
});



// Back to top scroll
var amountScrolledThreshold = 500;
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
  scrollTo(0, totalScrollDuration);
});







/* Scroll to target alternative approach */
/*

// Find elements in DOM
var linksDOM = document.querySelectorAll('.js-nav-link');


Scroll to target function
function scrollTo(targetPosition) {

  var totalScrollDuration = 600;
  var numberOfScrolls = 60;
  var singleScrollDuration = totalScrollDuration / numberOfScrolls;

  var distanceToTarget = targetPosition - getScrollPosition();
  var singleScrollDistance = distanceToTarget / numberOfScrolls;

  // failsafe counter
  var scrollCounter = 0;

  var singleScrollAction = setInterval(function() {
    window.scroll(0, getScrollPosition() + singleScrollDistance);
    if (distanceToTarget > 0) { // scrolling down
      if (getScrollPosition() >= targetPosition) {
        clearInterval(singleScrollAction);
      }
    } else {
      if (getScrollPosition() <= targetPosition) { // scrolling up
        clearInterval(singleScrollAction);
      }
    }

    // clear interval if something goes wrong
    scrollCounter++;
    if (scrollCounter > numberOfScrolls * 2) { // any number > number of scrolls
      clearInterval(singleScrollAction);
    }
  }, singleScrollDuration);
}


function getScrollPosition() {
  return document.body.scrollTop ||
         document.documentElement.scrollTop ||
         window.pageYOffset ||
         0;
}



// Add event listeners
linksDOM.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = event.target.innerText;
    var targetPosition = document.getElementById(targetId).offsetTop;
    scrollTo(targetPosition);
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
  scrollTo(0);
});


*/

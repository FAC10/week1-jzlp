// Find elements in DOM
var linksDOM = document.querySelectorAll('.js-nav-link');


// Scroll to target function
function scrollTo(target) {

  var totalScrollDuration = 600;
  var numberOfScrolls = 60;
  var singleScrollDuration = totalScrollDuration / numberOfScrolls;

  var distanceToTarget = target - getScrollPosition();
  var singleScrollDistance = distanceToTarget / numberOfScrolls;

  // failsafe counter
  var scrollCounter = 0;

  var singleScrollAction = setInterval(function() {
    window.scroll(0, getScrollPosition() + singleScrollDistance);
    if (distanceToTarget > 0) { // scrolling down
      if (getScrollPosition() >= target) {
        clearInterval(singleScrollAction);
      }
    } else {
      if (getScrollPosition() <= target) { // scrolling up
        clearInterval(singleScrollAction);
      }
    }

    // clear interval if something goes wrong
    scrollCounter++;
    if (scrollCounter > numberOfScrolls * 2) { // any number > number of scrolls
      console.log('failsafe');
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









// Scroll function
// function scrollTo(elementScrolled, targetElementPosition, scrollDuration) {
//   if (scrollDuration <= 0) { return; }
//   var distanceToTarget = targetElementPosition - getScrollPosition(elementScrolled);
//   var scrollBlock = distanceToTarget / scrollDuration * singleScrollDuration;
//
//   setTimeout(function() {
//     elementScrolled.scrollTop = getScrollPosition(elementScrolled) + scrollBlock;
//     // var currentScrollPosition = getScrollPosition(elementScrolled) + scrollBlock;
//     // console.log(currentScrollPosition);
//
//     if (elementScrolled.scrollTop === targetElementPosition) { return; }
//     scrollTo(elementScrolled, targetElementPosition, scrollDuration - singleScrollDuration);
//   }, 10);
// }


// function getScrollPosition(element) {
//   return element.scrollTop ||
//          document.documentElement.scrollTop ||
//          window.pageYOffset ||
//          document.body.scrollTop ||
//          0;
// }



// test firefox
var aboutHeaderDOM = document.querySelector('.about__header');

aboutHeaderDOM.addEventListener('click', (e) => {
  console.log('clicked');

  scrollTest(document.getElementById('contact').offsetTop);

  // console.log(window.pageYOffset);
  // console.dir(document.documentElement);
  // console.log(document.body.scrollTop);
  // console.log(window.pageYOffset);

  // window.scroll(0, 600);

  // console.log('document.documentElement.scrollTop', document.documentElement.scrollTop);
  // console.log('document.body.scrollTop', document.body.scrollTop);

  // document.documentElement.scrollTop = 600; // not chrome / safari
  // document.body.scrollTop  = 600; // not ff
});

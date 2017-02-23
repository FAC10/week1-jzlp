

// Find elements in DOM
var linksDOM = document.querySelectorAll('.nav__link');
var aboutDOM = document.getElementById('about');
var teamDOM = document.getElementById('team');
var contactDOM = document.getElementById('contact');




// Add event listeners
linksDOM.forEach(function(link) {
  link.addEventListener('click', function(event) {
    var targetId = event.target.innerText;
    var targetPosition = document.getElementById(targetId).offsetTop;
    //console.log(targetPosition);
    smoothScrollTo(document.body, targetPosition, 400);
  })
});

// Smooth scroll function

function smoothScrollTo(elementScrolled, targetElementPosition, scrollDuration) {
  if (scrollDuration <= 0){
    return;
  }
  //console.log(targetElementPosition)
  var distanceToTarget = targetElementPosition - elementScrolled.offsetTop;
  var scrollBlock = distanceToTarget / scrollDuration * 10;

  setTimeout(function(){
    elementScrolled.scrollTop = elementScrolled.scrollTop + scrollBlock;
    if (elementScrolled.scrollTop === targetElementPosition){
      return;
    }
    smoothScrollTo(elementScrolled, targetElementPosition, scrollDuration - 10);
  }, scrollDuration);

  //console.log(distanceToTarget);
  // elementScrolled.scrollTop = 1000;
}

// window.addEventListener('scroll', function(){
//   console.log(document.body.scrollTop)
// });


//console.log(contactDOM);

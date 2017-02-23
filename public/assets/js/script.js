// Modify nav anchor links to avoid href attribute
// taking precendence over javascript smoothScrollTo function
document.querySelector('.nav__list').innerHTML = `
  <li class="nav__link"><a class="js-nav-link" style="cursor:pointer;" tabindex="0">about</a></li>
  <li class="nav__link"><a class="js-nav-link" style="cursor:pointer;" tabindex="0">team</a></li>
  <li class="nav__link"><a class="js-nav-link" style="cursor:pointer;" tabindex="0">contact</a></li>
`;


// Find elements in DOM
var linksDOM = document.querySelectorAll('.js-nav-link');


// Add event listeners
linksDOM.forEach(function(link) {
  link.addEventListener('click', function(event) {
    var targetId = event.target.innerText;
    var targetPosition = document.getElementById(targetId).offsetTop;
    smoothScrollTo(document.body, targetPosition, 600);
  })
});


// Smooth scroll function
function smoothScrollTo(elementScrolled, targetElementPosition, scrollDuration) {
  if (scrollDuration <= 0) { return; } // seems to be working without this
  var distanceToTarget = targetElementPosition - elementScrolled.scrollTop;
  var scrollBlock = distanceToTarget / scrollDuration * 10;

  setTimeout(function(){
    elementScrolled.scrollTop = elementScrolled.scrollTop + scrollBlock;
    if (elementScrolled.scrollTop === targetElementPosition) { return; }
    smoothScrollTo(elementScrolled, targetElementPosition, scrollDuration - 10);
  }, 10);
}

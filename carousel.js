carousel = (function(){

  // Read necessary elements from the DOM once
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');

  // Define the global counter, the items and the 
  // current item 
  var counter = 0;
  var items = box.querySelectorAll('.content li'); //grab all of the list items
  var amount = items.length //find the number of list items
  console.log(amount)
  var current = items[0]//set current to the first item
  console.log(current)

  // hide all elements and apply the carousel styling
  box.classList.add('active');


  // add event handlers to buttons
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });

  // show the first element 
  // (when direction is 0 counter doesn't change)
  navigate(0);

  // navigate through the carousel

  function navigate(direction) {

    // hide the old current list item 
    current.classList.remove('current-box');
    
    // calculate th new position
    counter = counter + direction;

    // if the previous one was chosen
    // and the counter is less than 0 
    // make the counter the last element,
    // thus looping the carousel
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }

    // if the next button was clicked and there 
    // is no items element, set the counter 
    // to 0
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }

    // set new current element 
    // and add CSS class
    current = items[counter];
    current.classList.add('current-box');
  }


})();

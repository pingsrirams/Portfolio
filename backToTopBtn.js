var backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

// to check no of pixes the document is currently 
// scrolled along vertical axis and hide button accordingly.
function scrollFunction() {
	if (window.pageYOffset > 300) { // show backToTopButton
		if (!backToTopButton.classList.add("btnEntrance")) { // 5
			backToTopButton.classList.remove("btnExit"); // remove irrelevant class each time
			backToTopButton.classList.add("btnEntrance"); // 4
			backToTopButton.style.display = "block"; // 1
		}
	} 
	else { // hide backToTopButton // 3
		if (backToTopButton.classList.contains("btnEntrance")) { // 6 tis is exec oly if the button entrance class already present
			backToTopButton.classList.remove("btnEntrance"); // remove irrelevant class each time
			backToTopButton.classList.add("btnExit"); // 4
			setTimeout(function() { // 7
				backToTopButton.style.display = "none"; // 1
			}, 250);
		}
	}
}

// event listner for click event on backToTopButton
backToTopButton.addEventListener("click", smoothScrollBackToTop); // 2
// at last v r removing backToTop and replacing with smoothScrollBackToTop
	// to smooth transition.
	
// when clicks thr func ll execute. and take us to top.
// scrollTo() = scroll our document to specified co-ordinate.
// in my case the position is x = 0, y = 0.
// function backToTop() { // 3
// 	window.scrollTo(0, 0);
// }

// smooth scroll function from Google Source

function smoothScrollBackToTop() {
	const targetPosition = 0;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	const duration = 750;
	let start = null;
	
	window.requestAnimationFrame(step);
  
	function step(timestamp) {
	  if (!start) start = timestamp;
	  const progress = timestamp - start;
	  window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
	  if (progress < duration) window.requestAnimationFrame(step);
	}
  }
  
  function easeInOutCubic(t, b, c, d) {
	  t /= d/2;
	  if (t < 1) return c/2*t*t*t + b;
	  t -= 2;
	  return c/2*(t*t*t + 2) + b;
  };

  

//responsive navigation
var menuBtn = document.querySelector('.collpse-btn');
var header = document.querySelector('header');
var menuItem = document.querySelector('header .nav-container .nav-items');
var section = document.querySelectorAll('section');
var navli = document.querySelectorAll('header .nav-container .nav-items .nav-item');

menuBtn.addEventListener('click', function(){
     menuBtn.classList.toggle('active');
     header.classList.toggle('active');
     menuItem.classList.toggle('active');
});
//sticky navication
window.addEventListener("scroll", function(){
     header.classList.toggle("sticky", screen.width >= 768 && window.scrollY > window.innerHeight);
	 let current = '';
	 section.forEach(section=>{
		 const secTop = section.offsetTop;
		 const secHeight = section.clientHeight;
		if(pageYOffset >= (secTop - secHeight/3)){
			current = section.getAttribute('id')
		}
	 });
	 navli.forEach(item => {
		 item.classList.remove('active');
		 if(item.classList.contains(current)){
			 item.classList.add('active');
		 }
	 })
})

//counter
const counters = document.querySelectorAll('.counter');
const speed = 500; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	window.addEventListener("scroll", function() {
		var elementTarget = document.querySelector('.author-quote');
		if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
			updateCount();
		}
	  });
});
//AOS Library init
AOS.init();

//botton to top
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)


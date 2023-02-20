const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry.target.getAttribute("data-animation"));

		const animation = entry.target.getAttribute("data-animation");

		if (entry.isIntersecting) {
			entry.target.classList.add("animated", `${animation}`);
		} else {
			entry.target.classList.remove("animated", `${animation}`);
		}
	});
});

    //Scroll Magic------------------------------------
    const spyEls = document.querySelectorAll("section.scroll-spy");
    spyEls.forEach(function (spyEl) {
      new ScrollMagic.Scene({
        triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
        triggerHook: 0.8,
      })
        //.setClassToggle(토글할요소, 넣었다뺄 Class이름)
        .setClassToggle(spyEl, "show")
        .addTo(new ScrollMagic.Controller());
    });
//main - we are 섹션
//  visual제어---------------이미지 순차적 등장-------------------------
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
const toTopEl = document.querySelector("#to-top");
const toBottomEl = document.querySelector("#to-bottom");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    //console.log('scroll!');
    //console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      //badgeEl.style.display = 'none';
      //gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //배지 보이기
      //badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

// 하단으로 스크롤 버튼을 클릭하면,
toBottomEl.addEventListener('click', function () {
  // 페이지 위치를 최하단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 5000 //전체 페이지 height나 더 크게
  })
});
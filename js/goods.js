



//맨위, 맨 아래로 가는 뱃지-----------------------------------------------------------------
const toTopEl = document.querySelector("#to-top");
const toBottomEl = document.querySelector("#to-bottom");

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
    scrollTo: 3500
  })
});

//banner 새로고침할떄마다 랜덤 이미지---------------------------------------------------------
const banner = document.querySelector(".banner-inner");
const IMG_NUMBER = 4;

/* 이미지를 가져오는 함수 */
function paintImage(imgNumber) {
  /* 1. new 를 사용하여 object 만들기 */
  const image = new Image();
  /* 2. object에 이미지 주소(레퍼런스) 연결하기 */
  image.src = `images/goods/banner/${imgNumber + 1}.png`;
  image.style.width = '100%';
  // + 1를 하는 이유는 Math.random() 함수가 0을 줄 수 있기 때문이다.
  /* body 안에 image 넣기 */
  banner.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();

  /* 이미지(갯수) 함수와 randeomNumber변수(랜덤숫자생성함수)를 인자로 설정 */
  paintImage(randomNumber);
}
init();

//artist 섹션에 이미지탭메뉴----------------------------------------------------------------
const tabList = document.querySelectorAll('.tab_menu .list li');
const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(let i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('mouseover', function(e){
    e.preventDefault();
    for(let j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('is_on');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('is_on');

    // 버튼 호버시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}
  //Scroll Magic 스크롤시 요소 보여짐------------------------------------
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

    const menu = document.querySelector('#menu');
const menuHeight = menu.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > menuHeight) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
});

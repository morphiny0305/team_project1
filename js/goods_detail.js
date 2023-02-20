
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
    scrollTo: 24000
  })
});


//버튼 클릭시 숫자 증감소-----------------------------------------------------------------
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let result = document.querySelector('#result');
let totalcost = document.querySelector('.totalcost');
let totalcost2 = document.querySelector('.cost');


let i = 1;
plus.addEventListener('click',()=>{
  if(i<3){
  i++
  result.textContent=i;
  let totalcostNum = i*28000;
  totalcost.textContent =totalcostNum.toLocaleString() +'원';
  totalcost2.textContent =totalcostNum.toLocaleString() +'원';

  }
})
minus.addEventListener('click', ()=>{
  if(i>1){
    i--
    result.textContent = i;
    let totalcostNum = i*28000;
    totalcost.textContent = totalcostNum.toLocaleString()+'원';
    totalcost2.textContent = totalcostNum.toLocaleString()+'원';
  }

  
  }
)

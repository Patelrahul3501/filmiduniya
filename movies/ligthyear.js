const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})









const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".review button,.review textarea,.contact i,.contact,.review,.trailor h1,.download i,.back i,.discription p,.discription h1,.trailor-container,.title12 h3,.f1-title h1,.f1-title i,.kyu,.f2-title a,.f2-title,.f1-title,.wrapper2,.wrapper1,.wrapper,body,.menu ul li a,.container,.movie-list-title,.navbar,.toggle,.toggle-ball,.movie-list-wrapper,.movie-list-wrapper1");


ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
})
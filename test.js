//wrapper 1

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


//wrapper 2

const wrapper1 = document.querySelector(".wrapper1");

let pressed1 = false
let startX1 = 0

wrapper1.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper1.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper1.style.cursor = 'grab'
})

wrapper1.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})


//wrapper 3

const wrapper2 = document.querySelector(".wrapper2");

let pressed2 = false
let startX2 = 0

wrapper2.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper2.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper2.style.cursor = 'grab'
})

wrapper2.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})


//toggle
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".f1-title h1,.f1-title i,.kyu,.f2-title a,.f2-title,.f1-title,.wrapper2,.wrapper1,.wrapper,body,.menu ul li a,.container,.movie-list-title,.navbar,.toggle,.toggle-ball,.movie-list-wrapper,.movie-list-wrapper1");


ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
})
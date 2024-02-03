const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})
//filtering this slider under mainSlider filter: blur(140px) saturate(9); transform: rotate(-20deg)
const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    slidesPerView: 3.5,
    parallax: true,
    spaceBetween: 60,
    allowTouchMove: true,
})

sliderMain.controller.control = sliderBg

const sliderItems = document.querySelectorAll('.slider__item')
const desc = document.querySelector('.description')

function removeClass(items,className) {
    items.forEach(item => {
        item.classList.remove(className)
    })
}

// sliderItems.forEach(item => {
//     item.addEventListener('click', e => {
//         if (!item.classList.contains('opened')) removeClass(sliderItems,'opened')
//         item.classList.toggle('opened')
//     })
// })

// document.getElementById('mainslider').
// onscrollend(() => {
//     document.getElementById('custom').scroll({
//         top: "300px",


//     })
// }, _);
const ele = document.querySelector('#mainslider div:first-child')
document.querySelector('#mainslider div:first-child').addEventListener('scroll', () => {
    
    console.log(ele.scrollTop)
    console.log(ele.scrollHeight)
    console.log(ele.scrollLeft)
    console.log(ele.scrollWidth)
    console.log(">>>>>>>>>>>")
})

sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})
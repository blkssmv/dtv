let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item')
const itemsCount = items.length
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const itemWidth = container.clientWidth / slidesToShow
const movePosition = slidesToScroll * itemWidth

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
    position -= movePosition
    setPosition()
    checkBtns()
})

btnPrev.addEventListener('click', () => {
    position += movePosition
    setPosition()
    checkBtns()
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}
const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
    setOpacityNext()
    setOpacityPrev()
}
const setOpacityPrev = () => {
    if (btnPrev.disabled) {
        document.querySelector('.btn-prev svg').style.opacity = `0.3`
    } else {
        document.querySelector('.btn-prev svg').style.opacity = `1`
    }
}
const setOpacityNext = () => {
    if (btnNext.disabled) {
        document.querySelector('.btn-next svg').style.opacity = `0.3`
    } else {
        document.querySelector('.btn-next svg').style.opacity = `1`
    }
}
checkBtns()


const brands = document.querySelectorAll('.brands__name')

const resetBrands = () => {
    brands.forEach(brand => {
        brand.classList.remove('activeBrand')
    })
}



brands.forEach(brand => {
    brand.addEventListener('click', () => {
        resetBrands()
        brand.classList.add('activeBrand')
    })
})

const faqClosed = document.querySelectorAll('.faq__item')

faqClosed.forEach(open => {
    open.addEventListener('click', () => {
        open.classList.toggle('faq__open')
    })
})

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
})









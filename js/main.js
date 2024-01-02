let ellist = document.querySelector('.body')
let elcato = document.querySelector('.cato')
let elenter = document.querySelector('.enter')
let eldown = document.querySelector('.drapdown')
let elcatolist = document.querySelector('.cato__ip')
let elmorelist = document.querySelector('.more__ip')
let elhello = document.querySelector('.hello').content
let elbrendlist = document.querySelector('.brend__ip')
let elshoplist = document.querySelector('.magaz__ip')
let elsearch = document.querySelector('.search__inp')
let elshop = document.querySelector('.shop__btn')
let elmodal = document.querySelector('.modal__bg')
let elmodal1 = document.querySelector('.modal1')
let elxmark = document.querySelector('.fa-xmark')
let elmark = document.querySelector('.remove')
let enter = document.querySelector('.modal__enter')
let modal2 = document.querySelector('.hoyhoy')
let modal3 = document.querySelector('.voyvoy')
let clear3 = document.querySelector('.clear')
let unitdim = document.querySelector('.pass__link')


elenter.addEventListener('click', () => {
    eldown.classList.toggle('drapdown-flex')
})
elshop.addEventListener('click', ()=> {
    elmodal.classList.toggle('display')
    elmodal1.classList.toggle('display')
})
elxmark.addEventListener('click', ()=> {
    elmodal.classList.remove('display')
    elmodal1.classList.remove('display')
})
enter.addEventListener('click', ()=> {
    elmodal1.classList.remove('display')
    modal2.classList.toggle('display')
})
elmark.addEventListener('click', ()=> {
    modal2.classList.remove('display')
    elmodal.classList.remove('display')

})
unitdim.addEventListener('click', ()=> {
    modal2.classList.remove('display')
    modal3.classList.toggle('display')
})
clear3.addEventListener('click', ()=> {
    modal2.classList.remove('display')
    elmodal.classList.remove('display')

})

function catoiplist (catot) {
    for (let i = 0; i < catot.length; i++) {
        let newdiv = document.createElement('div')
        let newpic = document.createElement('img')
        let newheading = document.createElement('h3')

        newdiv.setAttribute('class', 'cato__item')
        newpic.setAttribute('class', 'cato__pic')
        newpic.setAttribute('src', catot[i].photo)
        newpic.setAttribute('alt', 'smart')
        newheading.setAttribute('class', 'cato__h3')

        newheading.textContent = catot[i].smart

        newdiv.appendChild(newpic)
        newdiv.appendChild(newheading)
        elcatolist.appendChild(newdiv)
    }
    
}

catoiplist(cato)

var selflife = (array) => {
    array.forEach((films) => {
        const render = elhello.cloneNode(true)

        render.querySelector('.more__pic').src = films.poster
        render.querySelector('.cost').textContent = films.release_date
        render.querySelector('.more__text').textContent = films.overview
        render.querySelector('.number').textContent = films.id + 'ta buyurtma'

        elmorelist.appendChild(render)
    });
}
selflife(films)

function brendiplist(array) {
    for (let i = 0; i < array.length; i++) {
        let newph = document.createElement('img')

        newph.setAttribute('class', 'brend__phot')
        newph.setAttribute('src', array[i].brendsorc)
        newph.setAttribute('alt', array[i].brendname)
        newph.setAttribute('width', "188")
        newph.setAttribute('height', "80")


        elbrendlist.appendChild(newph)
    }
    
}

brendiplist(brend)

function magiplist(shops) {
    for (let i = 0; i < shops.length; i++) {
        let newphot = document.createElement('img')

        newphot.setAttribute('class', 'mag__phot')
        newphot.setAttribute('src', shops[i].brendsorc)
        newphot.setAttribute('alt', shops[i].brendname)
        newphot.setAttribute('width', "80")
        newphot.setAttribute('height', "50")


        elshoplist.appendChild(newphot)
    }
    
}

magiplist(shop)

function searchinput() {
    ellist.innerHTML = null
    elcato.innerHTML = null


    let inputvalue = elsearch.value.trim()

    let regex = new RegExp(inputvalue, 'gi')

    let input = films.filter((film) => film.title.match(regex))

    selflife(input, ellist)

}


elsearch.addEventListener('input', searchinput)

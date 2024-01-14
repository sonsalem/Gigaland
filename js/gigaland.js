'use strict'

// Search => First To Make page Faster


let search = document.querySelector('.landSearch .search input')
let serachContent = document.querySelector('.SearchItems');
let serachItmes = document.querySelectorAll('.SearchItems .se');
let serachTitles = document.querySelectorAll('.SearchItems .se .titID');

if (serachContent != undefined) {
  let loc = location.search.substr(11).toLocaleLowerCase().split("+").join(" ");
  if (!loc == '') {
    search.value = loc;
  }
  serachTitles.forEach((ele, j) => {
    if (ele.textContent.toLocaleLowerCase().includes(loc)) {
      ele.parentElement.parentElement.parentElement.classList.remove('d-none')
    } else {
      ele.parentElement.parentElement.parentElement.remove()
    }
  })
}

// Loading

let loading = document.querySelector('.loading');

window.addEventListener('load', function () {
  setTimeout(() => {
    loading.classList.add('hide')
  }, 500);
})

// Scrool To Top

let buttonTop = document.createElement('div');
buttonTop.classList.add('scrollTop');

buttonTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

let icoTop = document.createElement('i');
icoTop.classList.add('fa-solid', 'fa-angle-up');

buttonTop.append(icoTop);
document.body.append(buttonTop);

window.addEventListener('scroll', function () {
  if (this.scrollY > 200) {
    buttonTop.classList.add('show')
  } else {
    buttonTop.classList.remove('show')
  }
})

// Menu Toggle

let menuToggle = document.querySelector('.menu-toggle');
let nav = document.querySelector('nav')

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('show')
})

// Window Scroll

window.onscroll = function () {
  if (scrollY > 0) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

// Start Count

let start = false;
let stateNums = document.querySelectorAll('.num-count');

if (!start) {
  stateNums.forEach(startCount)
}
start = true

function startCount(el) {
  let goal = el.dataset.count;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === el.dataset.count) {
      clearInterval(count)
    }
  }, 2000 / goal)
}

// Crouasel Items

$(document).ready(function () {
  $(".owl-items").owlCarousel({
    nav: true,
    loop: true,
    dots: false,
    margin:30,
    responsive : {
      0: {
        items: 1
      },
      567: {
        items: 2
      },
      992: {
        items: 3
      },
      1199: {
        items: 4
      }
    }
  })
});


$(document).ready(function () {
  $(".owl-collec").owlCarousel({
    nav: true,
    loop: true,
    dots: false,
    margin:30,
    responsive : {
      0: {
        items: 1
      },
      776: {
        items: 2
      }
    }
  })
});


window.addEventListener('load', function () {

  let prev = this.document.querySelectorAll('.owl-prev span');
  let next = this.document.querySelectorAll('.owl-next span');

  prev.forEach(el => {
    el.innerHTML = `<i class="fa fa-chevron-left"></i>`
  })
  next.forEach(el => {
    el.innerHTML = `<i class="fa fa-chevron-right"></i>`
  })


  let share = document.querySelectorAll('.share');
  let shareBut = document.querySelectorAll('.sharebut');

  shareBut.forEach(el => {
    el.onclick = function () {
      share.forEach(ele => {
        if (el.id == ele.id) {
          ele.classList.toggle('active')
        }
      })
    }
  })

  share.forEach(el => {
    el.parentElement.parentElement.onmouseleave = function () {
      share.forEach(el => el.classList.remove('active'));
    }
  })

  for (let i = 0; i < share.length; i++) {
    share[i].id = i;
    shareBut[i].id = i;
  }

  let love = document.querySelectorAll('.item .love i');

  love.forEach(el => {
    el.onclick = function () {
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        this.nextSibling.textContent = ++this.nextSibling.textContent
      } else {
        this.nextSibling.textContent = --this.nextSibling.textContent
      }
    }
  })

})


// Order

let order = document.querySelectorAll('.order');

order.forEach((el, i) => {
  el.textContent = `${i+1}`
})

// Set Year

let year = document.querySelector('.staticYear');

year.innerHTML = new Date().getFullYear()

// Pagintion

let pagination = document.querySelector('.pagination');
let paginationItem = document.querySelectorAll('.pagination .pagina');

if (pagination != undefined) {
  let items = 9;
  let pages = Math.ceil(paginationItem.length / items);
  
  let navLinks = document.createElement('ul');
  navLinks.classList.add('col-12', 'pagination-list')
  
  for (let i = 0; i < pages; i++) {
    let navLink = document.createElement(`li`);
    navLink.classList.add('pagination-num');
  
    let navContent = document.createTextNode(`${i+1}`);
  
    navLink.append(navContent)
    navLinks.append(navLink)
  }
  
  pagination.append(navLinks)
  
  let navLink = document.querySelectorAll('.pagination-list .pagination-num');
  
  navLink.forEach((el, i) => {
    el.onclick = function () {
      navLink.forEach(el => el.classList.remove('active'));
      this.classList.add('active');
  
      localStorage.setItem('navLink', `${i}`)
  
      paginationItem.forEach(el => el.classList.add('hideAnimate'));
      for (let j = (items * i); j < ((items * i) + items); j++) {
        paginationItem[j].classList.remove('hideAnimate')
      }
    }
  });
  
  if (localStorage.getItem('navLink')) {
    navLink[localStorage.getItem('navLink')].click()
  } else {
    navLink[0].click()
  }
}

// Shuffle

let ShuffleItems = document.querySelectorAll('.editProf .shuffle-edit .box');
let contentShuffle = document.querySelectorAll('.editProf .shuffle-content');

if (ShuffleItems != undefined) {
  ShuffleItems.forEach(ShuffleItem => {
    ShuffleItem.onclick = function () {
      ShuffleItems.forEach(ShuffleItem => ShuffleItem.classList.remove('active'));
      this.classList.add('active');

      contentShuffle.forEach(contentShufflItem => contentShufflItem.classList.add('hideAnimate'));
      contentShuffle.forEach(contentShufflItem => {
        if (this.id == contentShufflItem.dataset.edit) {
          contentShufflItem.classList.remove('hideAnimate')
        }
      })
    }
  })
}

// Uplode Image

let imageProfile = document.querySelectorAll('.editProf .proImage');
let chanegImageProfile = document.querySelectorAll(`.editProf input[type='file']`);

chanegImageProfile.forEach(CIPI => {
  CIPI.onchange = function () {
    imageProfile.forEach(imageProfileItem => {
      if (CIPI.id == imageProfileItem.getAttribute('for') && this.value != '') {
        imageProfileItem.classList.add('animtionWork');
        setTimeout(() => {
          imageProfileItem.firstElementChild.src = `img/${this.value.substr(12)}`
        }, 500);
        setTimeout(() => {
          imageProfileItem.classList.remove('animtionWork')
        }, 1000);
      }
    })
  }
})

// Toggle Check

let toggleChecks = document.querySelectorAll('.toggle-check');

toggleChecks.forEach(toggleCheck => {
  toggleCheck.onclick = function () {
    this.classList.toggle('active')
  }
})
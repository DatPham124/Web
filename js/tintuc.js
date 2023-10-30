let thisPage = 1;
let limit = 4;
let list = document.querySelectorAll(' .container .row')

function loadItem() {
    let beginGet = limit*(thisPage-1);
    let endGet = limit*thisPage -1;
    list.forEach((item, key) => {
        if(key >= beginGet && key <= endGet) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
    listPage();
}

function listPage() {
    let count = Math.ceil(list.length/limit);
    document.querySelector('.pagination').innerHTML = '';

    if(thisPage != 1) {
        let prev = document.createElement('li');
        prev.classList.add('page-item-previous');
        let iconL = document.createElement('i');
        iconL.classList.add('fa-solid');
        iconL.classList.add('fa-arrow-left');
        prev.appendChild(iconL);
        prev.setAttribute('onclick', "changePage("+ (thisPage -1) +")");
        document.querySelector('.pagination').appendChild(prev);

    }


    for(i = 1; i<=count; i++) {
        let newPage = document.createElement('li');
        newPage.classList.add('page-item');
        newPage.innerText = i;
        if(i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage("+ i +")");
        document.querySelector('.pagination').appendChild(newPage);
    }

    if(thisPage != count) {
        let next = document.createElement('li');
        next.classList.add('page-item-next');
        let iconR = document.createElement('i');
        iconR.classList.add('fa-solid');
        iconR.classList.add('fa-arrow-right');
        next.appendChild(iconR);
        next.setAttribute('onclick', "changePage("+ (thisPage +1) +")");
        document.querySelector('.pagination').appendChild(next);

    }
}

function changePage(i) {
    thisPage = i;
    loadItem();
}

loadItem();

function heartAct() {
    let heartIcon = document.querySelectorAll('.heart-icon-empty');   
    let heartIconRed = document.querySelectorAll('.heart-icon-full');
    let i;
   
    for(i = 0; i<heartIcon.length; i++) {
        let a = i;
        heartIcon[i].onclick = function() {
            heartIcon[a].style.display = 'none';
            heartIconRed[a].style.display= 'inline-block';
        }
    }

    for(i = 0; i<heartIconRed.length; i++) {
        let a = i;
        heartIconRed[i].onclick = function() { 
            heartIconRed[a].style.display = 'none';
            heartIcon[a].style.display= 'inline-block';
        }
    }
    
}


heartAct();

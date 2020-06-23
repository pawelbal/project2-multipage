import '../scss/app.scss';

// Your JS Code goes here
window.onload = function(){

    document.getElementById("menu").addEventListener("click", read_menu, false);
    document.getElementById("menu_close").addEventListener("click", read_menu, false);
    icon_size()
    foot()
}



let read_menu = function(){

    read_more('nav1','nav2')
}

let read_more = function(class1, class2){

    let x= document.getElementsByClassName(class1);
    x[0].classList.toggle(class2);
}

let icon_size = function(){

    let icon = document.getElementsByClassName('icon')

    let el
    for (el of icon){

        if(window.innerWidth>1279){
            
            el.classList.remove("fa-6x", "fa-7x")
            el.classList.add("fa-8x")
        
        }else if(window.innerWidth>735){
            
            el.classList.remove("fa-6x", "fa-8x")
            el.classList.add("fa-7x")

        }else{
           
            el.classList.remove("fa-7x", "fa-8x")
            el.classList.add("fa-6x")
        }
    }
}

// form

    let subbmitions = document.getElementById('subbmitions')

    new URLSearchParams(window.location.search).forEach((value, name) => {
        subbmitions.append(`${name}: ${value}`)
        subbmitions.append(document.createElement('br'))
    })


let foot = function(){
    let x = window.innerHeight

    console.log(x)

    let y = document.body.scrollHeight

    console.log(y)

    if(x > y){

        let footer = document.getElementsByTagName('footer')

        footer[0].classList.add('footer2')
    }else{
        footer[0].classList.remove('footer2')
    }
}


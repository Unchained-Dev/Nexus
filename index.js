
window.addEventListener('scroll', sticky)

function sticky(){
    console.log('hello')
    let navBar = document.querySelector('.nav')
    if (scrollY>50){
        navBar.style.backgroundColor = 'blue'
        navBar.style.opacity = '0.7'       
    }
    else{
        navBar.style.backgroundColor = ''
        navBar.style.opacity = '1'
    }
}


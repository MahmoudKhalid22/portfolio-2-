const btns = document.querySelectorAll('.btn');
const js = document.querySelector('.javascript')
const react = document.querySelector('.reactjs')


window.addEventListener('load',()=>{
    btns[0].classList.add('active');
    js.classList.add('active');
    react.classList.add('active');
})

btns[0].onclick = function(){
    removeActive();
    btns[0].classList.add('active');
    js.classList.add('active');
    react.classList.add('active');
}

for(let j = 1;j<btns.length;j++){
    btns[j].addEventListener('click',()=>{
        if(btns[j].getAttribute('data-index') === js.getAttribute('data-index') ){
            removeActive();
            btns[j].classList.add('active');
            js.classList.add('active');
        }
        if(btns[j].getAttribute('data-index') === react.getAttribute('data-index')){
            removeActive();
            btns[j].classList.add('active');
            react.classList.add('active');
        }
    }
        )    }


// removeActive()
function removeActive(){
    btns.forEach(btn =>{
        btn.classList.remove('active')
    })
        js.classList.remove('active');
        react.classList.remove('active');   
        // project.classList.remove('active')
    
}
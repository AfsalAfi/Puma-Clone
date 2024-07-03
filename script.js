const left=document.querySelector('.scroll-left');
const right=document.querySelector('.scroll-right');
const silder=document.querySelector('.fam-section-collections');

let slideNumber=1;
const images=3;

//Bottom Slide Dots
const bottom=document.querySelector('.bottom-circles');
for(let i=0;i<4;i++){
    const button=document.createElement('button');
    button.className='scroll-button';
    bottom.appendChild(button);
}
const buttons=document.querySelectorAll('.scroll-button');
buttons[0].style.backgroundColor = 'black';

//Function for Bottom Slide Dots
const changeColor=(num)=>{
    resetButton();
    buttons[num].style.backgroundColor = 'black';
}

const resetButton=()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = 'transparent';
    })
}

// Slide Arrow funtions
const nextSlide=()=>{
    silder.style.transform=`translateX(-${slideNumber*260}px)`;
    slideNumber++;
    changeColor(slideNumber-1);
}

const prevSlide=()=>{
    silder.style.transform=`translateX(-${(slideNumber-2)*260}px)`;
    slideNumber--;
    changeColor(slideNumber-1);
}

const getFirstSlide=()=>{
    silder.style.transform=`translateX(0px)`;
    slideNumber=1;
    changeColor(0);
}

const getLastSlide=()=>{
    silder.style.transform=`translateX(-${(images)*260}px)`;
    slideNumber=images+1;
    changeColor(3);
}


//Slide Event Listeners
right.addEventListener('click',()=>{
    slideNumber<=images ? nextSlide() : getFirstSlide();
})
left.addEventListener('click',()=>{
    slideNumber>1 ? prevSlide() : getLastSlide();
})


let galleryContainer = document.querySelector('.gallery-container');
let backBtn = document.getElementById('back-btn')
let nextBtn = document.getElementById('next-btn')
let isScrolled = false;

galleryContainer.addEventListener('wheel', (e)=>{
    e.preventDefault();
    if(galleryContainer.clientWidth >= 800){
        galleryContainer.scrollLeft += (e.deltaY * 3)
    }
    else{
        galleryContainer.scrollLeft += e.deltaY
    }  
    isScrolled = true;
    StopAutoScroll()
})
if(galleryContainer.clientWidth <= 800){
    backBtn.addEventListener('click', ()=>{
        galleryContainer.scrollBy({left:-100 , behavior:'smooth'})
        isScrolled = true;
        resetScroll()
    })
    nextBtn.addEventListener('click', ()=>{
        galleryContainer.scrollBy({left:100 , behavior:'smooth'})
        isScrolled = true;
        resetScroll()
    })
}
else{
    backBtn.addEventListener('click', ()=>{
        galleryContainer.scrollBy({left:-300 , behavior:'smooth'})
        isScrolled = true;
        resetScroll()
    })
    nextBtn.addEventListener('click', ()=>{
        galleryContainer.scrollBy({left:300 , behavior:'smooth'})
        isScrolled = true;
        resetScroll()
    })  
}

setInterval(() => {
    if(!isScrolled){
        if(galleryContainer.clientWidth <= 910){
            if(galleryContainer.scrollLeft + galleryContainer.clientWidth >= galleryContainer.scrollWidth - 10){
                 galleryContainer.scrollBy({left: -galleryContainer.scrollWidth , behavior:'smooth'})
            }
            else{
                galleryContainer.scrollBy({left:100 , behavior:'smooth'});
            }
            }
            else{
                if(galleryContainer.scrollLeft + galleryContainer.clientWidth >= galleryContainer.scrollWidth - 10){
                    galleryContainer.scrollBy({left: -galleryContainer.scrollWidth , behavior:'smooth'})
                }
                else{
                    galleryContainer.scrollBy({left:300 , behavior:'smooth'});
                }
            }
    }
}, 2000);

function StopAutoScroll(){
    clearTimeout(StopAutoScroll.timeout)
    StopAutoScroll.timeout = setTimeout(()=>{
        isScrolled = false;
    },3000)
}

function resetScroll() {
    isScrolled = true;
    StopAutoScroll();
}
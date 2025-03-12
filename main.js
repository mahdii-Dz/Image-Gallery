let galleryContainer = document.querySelector('.gallery-container');
let backBtn = document.getElementById('back-btn')
let nextBtn = document.getElementById('next-btn')

galleryContainer.addEventListener('wheel', (e)=>{
    e.preventDefault();
    if(galleryContainer.clientWidth >= 1100){
        galleryContainer.scrollLeft += (e.deltaY * 3)
    }
    else{
        galleryContainer.scrollLeft += e.deltaY
    }  
})
if(galleryContainer.clientWidth <= 910){
    backBtn.addEventListener('click', ()=>{
        galleryContainer.scrollBy({left:-100 , behavior:'smooth'})
    })
    nextBtn.addEventListener('click', ()=>{
        galleryContainer.scrollBy({left:100 , behavior:'smooth'})
    })
}
else{
    backBtn.addEventListener('click', ()=>{
     galleryContainer.scrollBy({left:-300 , behavior:'smooth'})
    })
    nextBtn.addEventListener('click', ()=>{
        galleryContainer.scrollBy({left:300 , behavior:'smooth'})
    })  
}

setInterval(() => {
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
}, 2000);

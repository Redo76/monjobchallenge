const leftButton = document.getElementById("precedent");
const rightButton = document.getElementById("suivant");
let slideIndex = 1;
showSlide(slideIndex);

leftButton.addEventListener("click", (n) =>{
    showSlide(slideIndex -= n);
})

rightButton.addEventListener("click", (n) =>{
    showSlide(slideIndex += n);
})


function showSlide(n){
    let i;
    let slide = document.getElementsByClassName("slide");
    if (n > slide.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slide.length;
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[slideIndex-1].style.display = 'block';
    console.log(slide.length)
}

const leftButton = document.getElementById("precedent");
const rightButton = document.getElementById("suivant");
let slide = document.getElementsByClassName("slide");
let slideIndex = 1;


function showSlide(slideIndex){
    let i;
    let tab = slide.length;
    console.log(tab);
    for (i = 0; i < tab; i++) {
        slide[i].style.display = "none";
    }
    if (slideIndex == tab){
        slide[slideIndex-1].style.display = "block" ;
        console.log("slideIndex", slideIndex);
        slideIndex = 1;
    }
    if (slideIndex < 1){
        slide[slideIndex].style.display = "block" ;
        console.log("slideIndex", slideIndex);
        slideIndex = tab;
    }
    slide[slideIndex-1].style.display = "block" ;
    console.log("slideIndex", slideIndex);
};

// leftButton.addEventListener("click", () =>{
//     showSlide(slideIndex -= 1);
// });

// rightButton.addEventListener("click", () =>{
//     showSlide(slideIndex += 1);
// });

showSlide(slideIndex);

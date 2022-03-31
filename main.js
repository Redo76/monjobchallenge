const uk = document.getElementById("#uk");
const france = document.querySelector("#france");

uk.addEventListener("click", (e) =>{
    console.log(e.target)
    if (uk){
        france.classList.toggle(".show")
    }
})
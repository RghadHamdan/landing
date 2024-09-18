
function IncSize(){
    document.querySelector(".Content").classList.add("Inc");
    document.querySelector(".Content").classList.remove("Dec");

}

function DecSize(){
    document.querySelector(".Content").classList.add("Dec");
    document.querySelector(".Content").classList.remove("Inc");
}
document.querySelector(".IncBtn").onclick = IncSize;
document.querySelector(".DecBtn").onclick = DecSize;




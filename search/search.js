const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".movie-container");
    const pname = storeitems.getElementsByTagName("h2");

    for (var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML
            
            if (textValue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            } else{
                product[i].style.display = "none";
            }
        }
    }
}















//toggle
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".search input,.title h1,.movie-container h2,.movie-container a,.movie-container,.back i,.search i,body,.container,.navbar,.toggle,.toggle-ball");


ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
})
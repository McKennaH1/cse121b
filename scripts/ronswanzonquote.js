export function ronswansonquote() {

    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then(res => res.json()).then(result => {
        const quoteText = document.querySelector(".quote")
        const authorName = document.querySelector(".name")
        
        quoteText.innerText = result;
        authorName.innerText = "Ron Swanson";
        console.log(result);

    });

}

export function animequote() {
    const quoteText = document.querySelector(".quote")
    const authorName = document.querySelector(".name")
    fetch("https://animechan.xyz/api/random").then(res => res.json()).then(result => {
        
        console.log(result);
        const quote2 = result.quote;
        quoteText.innerText = result.quote;

        if (quote2.length <= 150) {
            quoteText.innerText = result.quote;
            
            authorName.innerText = result.character;
        }
        else {
            quoteText.innerText = "The quote randomized was to long for this program, please try again"
            authorName.innerText = " ";
        }
        

    });

}
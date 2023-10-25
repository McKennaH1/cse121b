
export function inspirationQuote() {
    const quoteText = document.querySelector(".quote")
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        
        console.log(result)
        const quote2 = result.content;
        const authorName = document.querySelector(".name")
        if (quote2.length <= 150) {
            quoteText.innerText = result.content;
            
            authorName.innerText = result.author;
        }
        else {
            quoteText.innerText = "The quote randomized was to long for this program, please try again"
            authorName.innerText = " ";
        }
    });

}




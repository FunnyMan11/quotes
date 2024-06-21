const quoteTitle = document.querySelector('.title');
const quoteAuthor = document.querySelector('.quote-author')

const generatequote = () => {
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {
            quoteTitle.textContent = data.content;
            quoteAuthor.textContent = data.author;
        })
        .catch(err => console.log(err))
}

window.onload(generatequote())
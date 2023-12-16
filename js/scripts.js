document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        {
            name: "cometa",
            img: "images/cometa.jpg"
        },
        {
            name: "foguete",
            img: "images/foguete.jpg"
        },
        {
            name: "nave",
            img: "images/nave.jpg"
        },
        {
            name: "nave2",
            img: "images/nave2.jpg"
        },
        {
            name: "planetab",
            img: "images/planetab.jpg"
        },
        {
            name: "planetal",
            img: "images/planetal.jpg"
        },
        {
            name: "sol",
            img: "images/sol.jpg"
        },
        {
            name: "terra",
            img: "images/terra.jpg"
        },
        {
            name: "cometa",
            img: "images/cometa.jpg"
        },
        {
            name: "foguete",
            img: "images/foguete.jpg"
        },
        {
            name: "nave",
            img: "images/nave.jpg"
        },
        {
            name: "nave2",
            img: "images/nave2.jpg"
        },
        {
            name: "planetab",
            img: "images/planetab.jpg"
        },
        {
            name: "planetal",
            img: "images/planetal.jpg"
        },
        {
            name: "sol",
            img: "images/sol.jpg"
        },
        {
            name: "terra",
            img: "images/terra.jpg"
        }
    ];

    cards.sort(() => 0.5 - Math.random());
    const board = document.querySelector('.board');
    const result = document.querySelector('.result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function creatBoard() {
        for(let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/board.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);
    }

    creatBoard();

});

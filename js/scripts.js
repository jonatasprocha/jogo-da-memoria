function start() {
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
        const resultView = document.querySelector('.result');
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
    
        function checkForMatch() {
            const cards = document.querySelectorAll('img')
            const optionOneId = cardsChosenId[0]
            const optionTwoId = cardsChosenId[1]
    
            if(optionOneId == optionTwoId) {
              cards[optionOneId].setAttribute('src', 'images/board.jpg')
              cards[optionTwoId].setAttribute('src', 'images/board.jpg')
            } else if(cardsChosen[0] === cardsChosen[1]) {
              cards[optionOneId].setAttribute('src', 'images/check.png')
              cards[optionTwoId].setAttribute('src', 'images/check.png')
              cards[optionOneId].removeEventListener('click', flipCard)
              cards[optionTwoId].removeEventListener('click', flipCard)
              cardsWon.push(cardsChosen)
            } else {
              cards[optionOneId].setAttribute('src', 'images/board.jpg')
              cards[optionTwoId].setAttribute('src', 'images/board.jpg')
            }
            cardsChosen = []
            cardsChosenId = []
            resultView.textContent = `Pares Encontrados: ${cardsWon.length}`;
            if (cardsWon.length === cards.length / 2) {
                resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas'
            }
          }
    
        function flipCard() {
            let cardId = this.getAttribute('data-id')
            cardsChosen.push(cards[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cards[cardId].img)
            if (cardsChosen.length ===2) {
              setTimeout(checkForMatch, 500)
            }
        }
        creatBoard();
    });
}

start();
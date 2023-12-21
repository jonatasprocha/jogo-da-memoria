const initialDispaly = document.querySelector('.initialDisplay')
const board = document.querySelector('.board')
let temporizador
let tempoRestante = 60
let nome
let pontuacao

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
    ]

    cards.sort(() => 0.5 - Math.random())
    const painel = document.querySelector('.painel')
    const pares = document.querySelector('.pares')
    const pontos = document.querySelector('.pontos')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    document.getElementById("btn-entrar").addEventListener("click", function(e) {
        const name = document.querySelector(".nome").value
        if(name.trim() === "") {
            alert("O nome não pode ficar em branco!")
            e.preventDefault() 
        } else {
            initialDispaly.style.display = "none"
            nome = name
            e.preventDefault()  
        }
        startDisplay()
    })

    function startDisplay() {
        const novaDiv = document.createElement('div')
        novaDiv.className = "startDisplay"
        const novoParagrafo = document.createElement('p')
        const texto = document.createTextNode(`Seja bem-vindo, ${nome}! Espero que se divirta muito...`)
        const button = document.createElement('button')
        button.textContent = "Começar"
        novoParagrafo.appendChild(texto)
        novaDiv.appendChild(novoParagrafo)
        novaDiv.appendChild(button)
        document.body.appendChild(novaDiv)
        button.addEventListener("click", creatBoard)
    }

    function endGame() {
        document.body.appendChild(document.createElement("div"))
    }

    function creatBoard() {
        document.querySelector('.startDisplay').style.visibility = 'hidden'
        painel.style.visibility = 'visible'
        iniciarTemporizador()
        for(let i = 0; i < cards.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/board.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
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
            cards[optionOneId].setAttribute('src', 'images/checksf.png')
            cards[optionTwoId].setAttribute('src', 'images/checksf.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/board.jpg')
            cards[optionTwoId].setAttribute('src', 'images/board.jpg')
        }

        cardsChosen = []
        cardsChosenId = []

        pares.textContent = `Pares encontrados: ${cardsWon.length}`
        pontos.textContent = `Pontuação: ${cardsWon.length}`
        
        if(cardsWon.length === cards.length / 2) {
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cards[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cards[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 300)
        }
    }
})

function iniciarTemporizador() {
    temporizador = setInterval(function() {
      tempoRestante--
      document.getElementById("tempoRestante").innerText = tempoRestante

      if (tempoRestante <= 0) {
        alert("Tempo esgotado.!")
        reiniciarTemporizador()
      }
    }, 1000)
}

function reiniciarTemporizador() {
    tempoRestante = 60
    document.getElementById("tempoRestante").innerText = tempoRestante
}
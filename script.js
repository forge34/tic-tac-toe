const X = 'svg/X.svg'
const O = 'svg/O.svg'




const Game = (function(){
    let g = document.getElementById('game-board')
    let game_board = new Array(9)

    let combination =[[0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,3,6],[2,5,8],[6,4,2],[0,4,8]]

    function checker(element ) {
        return game_board[element] === 'X'
    }

    function play() {
       combination.forEach((element) => {
        if (element.every(checker))
        {
            alert("Win")
        }
    })
    }

    const create_grid = () => {
        for (let i = 0; i < game_board.length; i++) {
            let div = document.createElement('div')

            div.classList.add('cell')
            div.dataset.id= i

            g.append(div)

        }
    }

    const add_marker = (m , element) => {
        
        play()
        if (element.querySelector('img') != null){
            return false
        }

        game_board[element.dataset.id] = m
        let img = document.createElement('img')

        if (m === 'X') {
            img.src = X
        } else {
            img.src = O
        }

        element.append(img)
    }


    const cell_click = (p) => {
        let cells = document.querySelectorAll('.cell')

        for (let i = 0; i < cells.length; i++) {
            const element = cells[i];

            element.addEventListener('click' , () => {add_marker(p , element)})
            
        }
    }

    return {
        create_grid , 
        click: (p) => cell_click(p)
    }
})()

function Player(marker){
    return {
        marker
    }
}

let p1 = Player('X')
let p2 = Player('O')


Game.create_grid()
Game.click(p1.marker)

let combination =[[0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,3,6],[2,5,8],[6,4,2],[0,4,8]]

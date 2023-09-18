const X = 'svg/X.svg'
const O = 'svg/O.svg'




const Game = (function () {
    let g = document.getElementById('game-board')
    let game_board = new Array(9)
    let marker = ''

    let combination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [1, 4, 7], [0, 3, 6], [2, 5, 8], [6, 4, 2], [0, 4, 8]]

    function set_turn() {
        if (marker === 'X') {
            marker = 'O'
        }
        else if (marker === 'O') { marker = 'X' }
    }

    function clear_grid() {

        for (let i = 0; i < game_board.length; i++) {
            delete game_board[i]

        }

        let div = g.querySelectorAll('div')

        div.forEach((element) => {
            if (element.firstChild) {
                element.removeChild(element.firstChild)
            }
        })
    }

    function checker(element) {
        return game_board[element] === marker
    }

    function play() {
        combination.forEach((element) => {
            if (element.every(checker)) {
                alert(`${marker} Win`)
                clear_grid()
            }
        })
    }

    const create_grid = () => {
        for (let i = 0; i < game_board.length; i++) {
            let div = document.createElement('div')

            div.classList.add('cell')
            div.dataset.id = i

            g.append(div)

        }
    }

    function add_marker(element) {

        if (element.querySelector('img') != null) {
            return false
        }

        game_board[element.dataset.id] = marker
        let img = document.createElement('img')

        if (marker === 'X') {
            img.src = X
        } else {
            img.src = O
        }

        element.append(img)
        set_turn()
        play()
    }


    function cell_click(m) {
        let cells = document.querySelectorAll('.cell')
        marker = m

        for (let i = 0; i < cells.length; i++) {
            const element = cells[i];

            element.addEventListener('click', () => { add_marker(element) })

        }
    }

    return {
        create_grid,
        click: (p) => cell_click(p)
    }
})()

function Player(marker) {
    return {
        marker
    }
}

let p1 = Player('X')

Game.create_grid()
Game.click(p1.marker)
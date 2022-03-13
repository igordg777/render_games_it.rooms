let isPlayers = false;
let isDisks = false;
let isInput = '';

let players = document.getElementById('players')
let disks = document.getElementById('disks')

function render() {
    container.innerHTML = '';
    let countGames = 0
    for (let i = 0; i < games.length; i++) {
        if (isPlayers && games[i].players < 2) {
            continue
        }

        if (isDisks && games[i].isDisk === false) {
            console.log('lf')
            continue
        }

        if (games[i].name.toLowerCase().match(isInput.toLowerCase()) === null && isInput !== '') {
            console.log(games[i].name, isInput)
            continue
        }

        countGames++
        let styleCard = 'primary'
        let type = 'text-white'
        if (games[i].account === 'IgogoIgogoI') {
            styleCard = 'success'
        } else if (games[i].account === 'assai_as') {
            styleCard = 'info'
        } else if (games[i].account === 'PinkFireMan') {
            styleCard = 'secondary'
        } else if (games[i].account === 'Kuanchi Ku') {
            styleCard = 'danger'
        } else if (games[i].account === 'Без аккаунта') {
            styleCard = ''
            type = 'border-primary'
        }
        container.innerHTML += `<div class="card ${type} bg-${styleCard} mb-3" style="max-width:20rem"><div class="card-header">it.rooms</div><div class="card-body"><h4 class="card-title">Игра ${games[i].name.toLowerCase()}</h4><p class="card-text"> 	&#9734; Аккаунт: ${games[i].account}, <br> &#9734; количество игроков:  ${games[i].players},<br>  &#9734; геймплей на  <a target="_blank" href="${games[i].youtube}" style="color: white">youtube</a></p></div></div>`
    }
    count.innerHTML = countGames;
}


players.addEventListener('click', function () {
    if (players.checked) {
        isPlayers = true
    } else {
        isPlayers = false
    }
    render()
})

disks.addEventListener('click', function () {
    if (disks.checked) {
        isDisks = true
    } else {
        isDisks = false
    }
    render()
})

render()
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('#mediaMenu').classList.toggle('viewSearch')
})

document.getElementById('inputSearch').oninput = () => {
    isInput = document.getElementById('inputSearch').value
    render()
}

const playersURL = 'http://localhost:3000/players'
const playerContainer = document.querySelector('.container')
const array = []
const easyContainer = document.querySelector('#easyContainer')
// const easyButton = document.

fetch(playersURL)
    .then(response => response.json())
    .then(players => {
        players.forEach(player => {

            if (player.difficulty === 'easy') {
                const easyPlayers = document.createElement('li')
                easyPlayers.innerText = `${player.firstName} ${player.lastName}`
                playerContainer.append(easyPlayers)
            } 
            

            // const playerStats = document.createElement('ul')
            // playerStats.innerText = ''

            // const playerNumber = document.createElement('li')
            // playerNumber.innerText = player.numbers

            // const playerTeams = document.createElement('li')
            // playerTeams.innerText = player.teams

            // const playerDifficulty = document.createElement('li')
            // playerDifficulty.innerText = player.difficulty

            // playerStats.append(playerName, playerTeams, playerNumber, playerDifficulty)
            // // if (player.difficulty === 'easy') {
            // //     const easyPlayers = document.createElement('li')
            // //     easyPlayers.innerText = playerName
            // //     playerContainer.append(easyPlayers)
            
        })
    })
        const easyPlayers = players.splice(0, 7)
        const mediumPlayers = players.splice(0, 7)
        const epicPlayers = players


        easyPlayers.forEach(player => {
          
            const playerCard = document.createElement('ul')

            const title = document.createElement('h3')
            title.innerText = `${player.firstName} ${player.lastName}`

            const playerImage = document.createElement('img')
            playerImage.className = 'imagesOfPlayers'
            playerImage.src = player.image
            
            const playerDifficulty = document.createElement('li')
            playerDifficulty.innerText = player.difficulty

            const playerTeams = document.createElement('li')
            playerTeams.innerText = player.teams

            const playerNumber = document.createElement('li')
            playerNumber.innerText = `# ${player.numbers}`

            playerCard.append(title, playerNumber, playerTeams, playerDifficulty, playerImage)
            easyContainer.append(playerCard)

        })
    })
    // mediumPlayers.forEach(player => {

        //     const mediumPlayerCard = document.createElement('ul')

        //     const title = document.createElement('h3')
        //     title.innerText = `${player.firstName} ${player.lastName}`

        //     const playerDifficulty = document.createElement('li')
        //     playerDifficulty.innerText = player.difficulty

        //     const playerTeams = document.createElement('li')
        //     playerTeams.innerText = player.teams

        //     const numberLi = document.createElement('li')
        //     numberLi.innerText = player.numbers

        //     mediumPlayerCard.append(title, playerTeams, numberLi, playerDifficulty)
        //     mediumContainer.append(mediumPlayerCard)

        // })

        // epicPlayers.forEach(player => {

        //     const epicPlayerCard = document.createElement('ul')

        //     const title = document.createElement('h3')
        //     title.innerText = `${player.firstName} ${player.lastName}`

        //     const playerDifficulty = document.createElement('li')
        //     playerDifficulty.innerText = player.difficulty

        //     const playerTeams = document.createElement('li')
        //     playerTeams.innerText = player.teams

        //     const numberLi = document.createElement('li')
        //     numberLi.innerText = player.numbers

        //     epicPlayerCard.append(title, playerTeams, numberLi)
        //     // console.log(epicPlayerCard)

        // })

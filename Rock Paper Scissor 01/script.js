let msgBox = document.getElementById('msg-box');

const playingGame = (playerChoice) => { 
    const choices = ['Rock','Paper','Scissor'];
    const playerIndex = choices.indexOf(playerChoice);
    const computerIndex = Math.floor(Math.random() * 3);
 
    if (playerIndex === computerIndex) { 
        console.log('Nobody wins');
        scores.tie++;
        msgBox.innerHTML = 'Nobody wins! It is a tie';
    } else if ((playerIndex + 1) % 3 === computerIndex) { 
        console.log('Computer wins');
        scores.lose++;
        msgBox.innerHTML = 'Why are you so stupid? you even let computer win?';

    } else { 
        console.log('You win');
        scores.win++;
        msgBox.innerHTML = 'Congrat! You win and I am proud of you';

    }
}

const scoreUpdate = () => { 
    console.log(`Your win count: ${scores.win}`);
    console.log(`Your lose count: ${scores.lose}`);
    console.log(`Tie count: ${scores.tie}`);
    msgBox.innerHTML = 'You dare to see the result? If so doube touch me! Hurry up!';

}

const scores = {
    'win': 0,
    'lose': 0,
    'tie': 0
};

msgBox.addEventListener("dblclick", function() {
    msgBox.innerHTML = `Your win count: ${scores.win} <br> Your lose count: ${scores.lose} <br> Tie count: ${scores.tie}`;
});

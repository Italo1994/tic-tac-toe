const ids = [];
var jogadaAtual=0; // verifica a jogada atual entre os jogadores

function start() {
    iniciaIds();
}

function iniciaIds() {
    let target = false;
    let index;
    
    for(let i=0; i<9; i++) {
        ids[i] = 'a' + (i+1);
    }

    for(let i=0; i<9; i++) {
        ids[i] = document.getElementById(ids[i]);
    }

    for(let i=0; i<9; i++) {
        ids[i].addEventListener('click', function(event) { // verifica o evento de clique de cada campo da matriz
            index = i;
            preencheCampo(i); // envia o índice do elemento da matriz que efetuou o disparo do evento
            console.log('cliquei no elemento de índice ' +index);
            return;
        });
    }

}

function preencheCampo(index) {

    jogadaAtual++;
    console.log('jogada atual = ' +jogadaAtual);

    for(let i=0; i<9; i++) {
        if(index == i) {

            if(ids[index].innerHTML !== " " && jogadaAtual%2 !== 0) {
                ids[index].innerHTML = "X";
            }
            else {
                ids[index].innerHTML = "O";
            }
            
        }       
        
    }

}
const ids = [];
var jogadaAtual=0; // verifica a jogada atual entre os jogadores

function iniciaIds() {
    
    for(let i=0; i<9; i++) {
        ids[i] = 'a' + (i+1);
    }

    insereEvento();
}

function insereEvento() {
    
    for(let i=0; i<9; i++) {
        ids[i] = document.getElementById(ids[i]);
        
    }

    for(let i=0; i<9; i++) {
        ids[i].addEventListener('click', function(event) { // verifica o evento de clique de cada campo da matriz
            preencheCampo(i); // envia o índice do elemento da matriz que efetuou o disparo do evento
        });
    }
}

function preencheCampo(index) {

    jogadaAtual++;
    console.log(jogadaAtual);

    for(let i=0; i<9; i++) {
        if(index == i) {
            //console.log(index)
            if(ids[index].innerHTML !== " " && jogadaAtual%2 !== 0 ){
                ids[index].innerHTML = "X";
            } else {
                ids[index].innerHTML = "O";
            }
            
        }
    }

}

function start() {
    iniciaIds();
}

setTimeout(() => {
     start();   
}, 1000);
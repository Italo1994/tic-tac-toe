let ids = [];

function iniciaIds() {
    
    for(let i=0; i<9; i++) {
        ids[i] = 'a' + (i+1);
    }

    verificaCampos(ids);
}

function verificaCampos() {

    for(let i=0; i<9; i++) {
        ids[i] = document.getElementById(ids[i]);
        ids[i].addEventListener('click', preencheCampo);
    }
}

function preencheCampo() {
    for(let i=0; i<9; i++) {
        if(ids[i].innerHTML !== " ") {
            ids[i].innerHTML = "i";
        }
        console.log(ids[i]);
    }
}

function start() {
    iniciaIds();

}

setInterval(() => {
     start();   
}, 1000);
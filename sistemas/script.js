const notasVisuais = document.querySelectorAll('.notinhas');
const nome = document.querySelector('.nome');
const infoUm = document.querySelector('.infoUm');
const infoDois = document.querySelector('.infoDois');
const bt = document.querySelector('.bt');

function restart() {
    const tipos = document.querySelector('.tipos').value;
    const select = document.querySelector('.selecionar').value;
    const escalaFormada = geraEscala(`${select}`, Number(tipos));
    return escalaFormada;
};


function geraEscala(tonica, tipo) {
    const notas = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];

    const novasNotas = [...notas.slice(notas.indexOf(tonica)), ...notas.slice(0, notas.indexOf(tonica))];

    let formula = new Array();

    if (tipo === 0) {
        formula = [0, 2, 4, 5, 7, 9, 11];
    };

    if (tipo === 1) {
        formula = [0, 2, 3, 5, 7, 8, 11, 12];
    };

    if (tipo === 2) {
        formula = [0,  2,  3,  5, 7, 9, 11];
    }

    if (tipo === 3) {
        formula = [0, 2,  3,  5, 7, 8, 10, 12];
    }

    if (tipo === 4) {
        formula = [0, 3, 5, 7, 10];
    }

    if (tipo === 5) {
        formula = [0, 2, 4, 7, 9];
    }

    if (tipo === 6) {
        formula = [0, 2, 3,  5, 6, 8, 9, 11, 12];
    }

    const escala = new Array();

    for (e of formula) {
        escala.push(novasNotas[e]);
    }

    return escala;
};

function format() {
    
    for (n of notasVisuais) {
        n.style.border = 'none';    
        n.style.color = 'white';
        n.style.backgroundColor = 'black';
    }

    let trem = restart();

    for (l of trem) {
        for (n of notasVisuais) {
            if (n.innerText === l) {
                n.style.color = 'black';
                n.style.backgroundColor = 'white';
            }
        }
    }

    nome.innerHTML = `${trem[0]} maior natural`;
    infoUm.innerHTML = `Notas: ${trem[0]} - ${trem[1]} - ${trem[2]} - ${trem[3]} - ${trem[4]} - ${trem[5]} - ${trem[6]} - ${trem[7]}`;
    infoDois.innerHTML = `O campo harmônico = ${trem[0]}`;
};

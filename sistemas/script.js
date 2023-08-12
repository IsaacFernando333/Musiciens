
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
    };
    
    if (tipo === 3) {
        formula = [0, 2,  3,  5, 7, 8, 10, 12];
    };
    
    if (tipo === 4) {
        formula = [0, 3, 5, 7, 10];
    };
    
    if (tipo === 5) {
        formula = [0, 2, 4, 7, 9];
    };

    if (tipo === 6) {
        formula = [0, 2, 3, 5, 6, 8, 9, 11];
    };
    
    const escala = new Array();
    
    for (e of formula) {
        escala.push(novasNotas[e]);
    };
    
    return escala;
};

function format() {
    let afina = document.querySelector('.afina').value;

    tabela(Number(afina));
    
    const notasVisuais = document.querySelectorAll('.notinhas');
    
    for (n of notasVisuais) {
        n.style.border = 'none';    
        n.style.color = 'white';
        n.style.backgroundColor = 'black';
    };
    
    let trem = restart();
    
    for (l of trem) {
        for (n of notasVisuais) {
            if (n.innerText === l) {
                n.style.color = 'black';
                n.style.backgroundColor = 'white';
            };
        };
    };

    tip = ['maior natural', 'menor harmônica', 'menor melódica', 'menor natural', 'pentatônica menor', 'pentatônica maior', 'diminuta'];
    let indexTip = document.querySelector('.tipos').value;
    
    nome.innerHTML = `${trem[0]} ${tip[indexTip]}`;

    if (trem.length === 8) {
        infoUm.innerHTML = `Notas: ${trem[0]} - ${trem[1]} - ${trem[2]} - ${trem[3]} - ${trem[4]} - ${trem[5]} - ${trem[6]} - ${trem[7]}`;
    } else if (trem.length === 7) {
        infoUm.innerHTML = `Notas: ${trem[0]} - ${trem[1]} - ${trem[2]} - ${trem[3]} - ${trem[4]} - ${trem[5]} - ${trem[6]}`;
    } else if (trem.length === 5) {
        infoUm.innerHTML = `Notas: ${trem[0]} - ${trem[1]} - ${trem[2]} - ${trem[3]} - ${trem[4]}`;
    };
};

function tabela(tom) {
    const tabela = document.querySelector('.tabela');
    const notasBraco = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
    let casaUmA = [];
    let casaUmB = [];
    let casaUmC = [];
    let casaUmD = [];
    let casaUmE = [];
    
    if (tom === 0) {
        casaUmA = notasBraco.slice(17, 33);
        casaUmB = notasBraco.slice(24, 36);
        casaUmC = notasBraco.slice(20, 32);
        casaUmD = notasBraco.slice(15, 27);
        casaUmE = notasBraco.slice(22, 34);
    } else if (tom === -2) {
        casaUmA = notasBraco.slice(13, 29);
        casaUmB = notasBraco.slice(20, 32);
        casaUmC = notasBraco.slice(16, 32);
        casaUmD = notasBraco.slice(11, 25);
        casaUmE = notasBraco.slice(18, 30);
    } else if (tom === -1.5) {
        casaUmA = notasBraco.slice(14, 30);
        casaUmB = notasBraco.slice(21, 33);
        casaUmC = notasBraco.slice(17, 29);
        casaUmD = notasBraco.slice(12, 26);
        casaUmE = notasBraco.slice(19, 31);
    } else if (tom === -1) {
        casaUmA = notasBraco.slice(15, 31);
        casaUmB = notasBraco.slice(22, 34);
        casaUmC = notasBraco.slice(18, 33);
        casaUmD = notasBraco.slice(13, 27);
        casaUmE = notasBraco.slice(20, 32);
    } else if (tom === -0.5) {
        casaUmA = notasBraco.slice(16, 32);
        casaUmB = notasBraco.slice(23, 35);
        casaUmC = notasBraco.slice(19, 31);
        casaUmD = notasBraco.slice(14, 26);
        casaUmE = notasBraco.slice(21, 33);
    } else if (tom === 0.5) {
        casaUmA = notasBraco.slice(18, 34);
        casaUmB = notasBraco.slice(25, 37);
        casaUmC = notasBraco.slice(21, 33);
        casaUmD = notasBraco.slice(16, 28);
        casaUmE = notasBraco.slice(23, 35);
    } else if (tom === 1) {
        casaUmA = notasBraco.slice(19, 35);
        casaUmB = notasBraco.slice(26, 38);
        casaUmC = notasBraco.slice(22, 34);
        casaUmD = notasBraco.slice(17, 29);
        casaUmE = notasBraco.slice(24, 36);
    } else if (tom === 1.5) {
        casaUmA = notasBraco.slice(20, 36);
        casaUmB = notasBraco.slice(27, 39);
        casaUmC = notasBraco.slice(23, 35);
        casaUmD = notasBraco.slice(18, 30);
        casaUmE = notasBraco.slice(25, 37);
    } else if (tom === 2) {
        casaUmA = notasBraco.slice(21, 37);
        casaUmB = notasBraco.slice(28, 40);
        casaUmC = notasBraco.slice(24, 36);
        casaUmD = notasBraco.slice(19, 31);
        casaUmE = notasBraco.slice(26, 38);
    };

    tabela.innerHTML = `
    <tr>
        <td class="notinhas">${casaUmA[11]}</td>
        <td class="pestana"></td>
        <td class="notinhas">${casaUmA[0]}</td>
        <td class="notinhas">${casaUmA[1]}</td>
        <td class="notinhas">${casaUmA[2]}</td>
        <td class="notinhas">${casaUmA[3]}</td>
        <td class="notinhas">${casaUmA[4]}</td>
        <td class="notinhas">${casaUmA[5]}</td>
        <td class="notinhas">${casaUmA[6]}</td>
        <td class="notinhas">${casaUmA[7]}</td>
        <td class="notinhas">${casaUmA[8]}</td>
        <td class="notinhas">${casaUmA[9]}</td>
        <td class="notinhas">${casaUmA[10]}</td>
        <td class="notinhas">${casaUmA[11]}</td>
    </tr>
    <tr>
        <td class="notinhas">${casaUmB[11]}</td>
        <td class="pestana"></td>
        <td class="notinhas">${casaUmB[0]}</td>
        <td class="notinhas">${casaUmB[1]}</td>
        <td class="notinhas">${casaUmB[2]}</td>
        <td class="notinhas">${casaUmB[3]}</td>
        <td class="notinhas">${casaUmB[4]}</td>
        <td class="notinhas">${casaUmB[5]}</td>
        <td class="notinhas">${casaUmB[6]}</td>
        <td class="notinhas">${casaUmB[7]}</td>
        <td class="notinhas">${casaUmB[8]}</td>
        <td class="notinhas">${casaUmB[9]}</td>
        <td class="notinhas">${casaUmB[10]}</td>
        <td class="notinhas">${casaUmB[11]}</td>
    </tr>
    <tr>
        <td class="notinhas">${casaUmC[11]}</td>
        <td class="pestana"></td>
        <td class="notinhas">${casaUmC[0]}</td>
        <td class="notinhas">${casaUmC[1]}</td>
        <td class="notinhas">${casaUmC[2]}</td>
        <td class="notinhas">${casaUmC[3]}</td>
        <td class="notinhas">${casaUmC[4]}</td>
        <td class="notinhas">${casaUmC[5]}</td>
        <td class="notinhas">${casaUmC[6]}</td>
        <td class="notinhas">${casaUmC[7]}</td>
        <td class="notinhas">${casaUmC[8]}</td>
        <td class="notinhas">${casaUmC[9]}</td>
        <td class="notinhas">${casaUmC[10]}</td>
        <td class="notinhas">${casaUmC[11]}</td>
    </tr>
    <tr>
        <td class="notinhas">${casaUmD[11]}</td>
        <td class="pestana"></td>
        <td class="notinhas">${casaUmD[0]}</td>
        <td class="notinhas">${casaUmD[1]}</td>
        <td class="notinhas">${casaUmD[2]}</td>
        <td class="notinhas">${casaUmD[3]}</td>
        <td class="notinhas">${casaUmD[4]}</td>
        <td class="notinhas">${casaUmD[5]}</td>
        <td class="notinhas">${casaUmD[6]}</td>
        <td class="notinhas">${casaUmD[7]}</td>
        <td class="notinhas">${casaUmD[8]}</td>
        <td class="notinhas">${casaUmD[9]}</td>
        <td class="notinhas">${casaUmD[10]}</td>
        <td class="notinhas">${casaUmD[11]}</td>
    </tr>
    <tr>
        <td class="notinhas">${casaUmE[11]}</td>
        <td class="pestana"></td>
        <td class="notinhas">${casaUmE[0]}</td>
        <td class="notinhas">${casaUmE[1]}</td>
        <td class="notinhas">${casaUmE[2]}</td>
        <td class="notinhas">${casaUmE[3]}</td>
        <td class="notinhas">${casaUmE[4]}</td>
        <td class="notinhas">${casaUmE[5]}</td>
        <td class="notinhas">${casaUmE[6]}</td>
        <td class="notinhas">${casaUmE[7]}</td>
        <td class="notinhas">${casaUmE[8]}</td>
        <td class="notinhas">${casaUmE[9]}</td>
        <td class="notinhas">${casaUmE[10]}</td>
        <td class="notinhas">${casaUmE[11]}</td>
    </tr>
    <tr>
        <td class="notinhas">${casaUmA[11]}</td>
        <td class="pestana"></td>
        <td class="notinhas">${casaUmA[0]}</td>
        <td class="notinhas">${casaUmA[1]}</td>
        <td class="notinhas">${casaUmA[2]}</td>
        <td class="notinhas">${casaUmA[3]}</td>
        <td class="notinhas">${casaUmA[4]}</td>
        <td class="notinhas">${casaUmA[5]}</td>
        <td class="notinhas">${casaUmA[6]}</td>
        <td class="notinhas">${casaUmA[7]}</td>
        <td class="notinhas">${casaUmA[8]}</td>
        <td class="notinhas">${casaUmA[9]}</td>
        <td class="notinhas">${casaUmA[10]}</td>
        <td class="notinhas">${casaUmA[11]}</td>
    </tr>`
}

tabela(0);
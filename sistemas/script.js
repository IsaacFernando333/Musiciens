
const nome = document.querySelector('.nome');
const infoUm = document.querySelector('.infoUm');
const infoDois = document.querySelector('.infoDois');
const bt = document.querySelector('.bt');


function restart() {
    const tipos = document.querySelector('.tipos').value;
    const select = document.querySelector('.selecionar').value;
    let bagulho = tipos.split(',')
    let k = [];
    for (n of bagulho) {
        k.push(Number(n));
    }

    const escalaFormada = geraEscala(`${select}`, k);
    return escalaFormada;
};


function geraEscala(tonica, formula) {
      // Definir as notas possíveis na escala cromática
  let escalaCromatica = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  
  // Encontrar a posição da tônica na escala cromática
  let posicaoTonica = escalaCromatica.indexOf(tonica);

  if (posicaoTonica === -1) {
    // Se a tônica não for encontrada na escala cromática, retornar um erro
    return "Tônica inválida";
  }

  // Inicializar a escala com a tônica
  var escala = [tonica];

  // Gerar a escala com base na fórmula
  for (var i = 0; i < formula.length; i++) {
    // Calcular a próxima posição na escala com base na fórmula
    posicaoTonica += formula[i];
    posicaoTonica %= escalaCromatica.length; // Certificar-se de que a posição está dentro do intervalo
    
    // Adicionar a nota correspondente à escala
    escala.push(escalaCromatica[posicaoTonica]);
  }

  return escala;
};


function geraCampo(tipo, escala) {
    let campo = '';
    if (tipo === 0) {
        campo = `Campo Harmônico: ${escala[0]} - ${escala[1]}m - ${escala[2]}m - ${escala[3]} - ${escala[4]} - ${escala[5]}m - ${escala[6]}∅`;
    };
    
    if (tipo === 1) {
        campo = `Campo Harmônico: ${escala[0]}m7M - ${escala[1]}∅ - ${escala[2]}7M(5#) - ${escala[3]}m7 - ${escala[4]}7 - ${escala[5]}7M - ${escala[6]}°`;
    };
    
    if (tipo === 2) {
        campo = `Campo Harmônico: ${escala[0]}m7M - ${escala[1]}m7 - ${escala[2]}7M(5#) - ${escala[3]}7 - ${escala[4]}7 - ${escala[5]}∅ - ${escala[6]}∅`;
    };
    
    if (tipo === 3) {
        campo = `Campo Harmônico: ${escala[0]}m - ${escala[1]}∅ - ${escala[2]} - ${escala[3]}m - ${escala[4]}m - ${escala[5]} - ${escala[6]}`;
    };

    return campo;
};


function format() {
    let tipos = document.querySelector('.tipos').value;
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

    let nt = trem.slice(0, -1);
    let rst = '';

    for (no of nt) {
        rst += `${no} `;
    }

    infoUm.innerHTML = `Notas: ${rst}`;
    

    let campo = geraCampo(Number(tipos), trem);

    infoDois.innerHTML = `${campo}`;

};

function tabela(tom) {
    const tabela = document.querySelector('.tabela');
    const notasBraco = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
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


function iniciar() {
    
    let formulas = [
        [2, 2, 1, 2, 2, 2, 1], // Escala Maior
        [2, 1, 2, 2, 1, 2, 2], // Escala Menor Natural
        [2, 1, 2, 2, 1, 3, 1], // Escala Menor Harmônica
        [2, 1, 2, 2, 2, 2, 1], // Escala Menor Melódica
        [2, 2, 3, 2, 3],       // Pentatônica Maior
        [3, 2, 2, 3, 2],       // Pentatônica Menor
        [3, 2, 1, 1, 3, 2],    // Pentatônica Blues
        [2, 2, 1, 2, 2, 2, 1], // Escala Jônica
        [2, 1, 2, 2, 2, 1, 2], // Escala Dórica
        [1, 2, 2, 2, 1, 2, 2], // Escala Frígia
        [2, 2, 2, 1, 2, 2, 1], // Escala Lídia
        [2, 2, 1, 2, 2, 1, 2], // Escala Mixolídia
        [1, 2, 2, 1, 2, 2, 2], // Escala Locria
        [3, 2, 1, 1, 3, 2],    // Escala Blues
        [3, 2, 1, 1, 1, 3, 2], // Escala Pentablues
        [2, 1, 2, 2, 1, 2, 2], // Escala Eólia
        [2, 1, 2, 2, 1, 3, 1], // Escala Eólia Harmônica
        [2, 1, 2, 2, 2, 2, 1], // Escala Eólia Melódica
        [3, 2, 2, 2, 3],       // Escala Eólia Pentatônica
        [3, 2, 1, 1, 2, 3],    // Escala Eólia Blues
        [1, 2, 2, 2, 2, 1, 2], // Escala Frígia Maior
        [1, 2, 1, 2, 2, 2, 1], // Escala Frígia Maior Blues
        [1, 2, 1, 2, 1, 2, 1, 2], // Escala Dominante Diminuta
        [1, 2, 1, 2, 1, 1, 3, 2], // Escala Dominante Diminuta Blues
        [1, 2, 1, 2, 2, 2, 2], // Escala Alterada
        [2, 1, 3, 1, 1, 3, 1], // Escala Menor Húngara
        [2, 1, 3, 1, 1, 2, 2], // Escala Menor Húngara Blues
        [1, 3, 2, 2, 2, 1, 1], // Escala Enigmática
        [1, 3, 2, 1, 3, 1, 1], // Escala Enigmática Menor
        [2, 2, 1, 2, 1, 1, 2, 1] // Escala Bebop Maior
    ];
    
    let nomesEscalas = [
        "Escala Maior",
        "Escala Menor Natural",
        "Escala Menor Harmônica",
        "Escala Menor Melódica",
        "Pentatônica Maior",
        "Pentatônica Menor",
        "Pentatônica Blues",
        "Escala Jônica",
        "Escala Dórica",
        "Escala Frígia",
        "Escala Lídia",
        "Escala Mixolídia",
        "Escala Locria",
        "Escala Blues",
        "Escala Pentablues",
        "Escala Eólia",
        "Escala Eólia Harmônica",
        "Escala Eólia Melódica",
        "Escala Eólia Pentatônica",
        "Escala Eólia Blues",
        "Escala Frígia Maior",
        "Escala Frígia Maior Blues",
        "Escala Dominante Diminuta",
        "Escala Dominante Diminuta Blues",
        "Escala Alterada",
        "Escala Menor Húngara",
        "Escala Menor Húngara Blues",
        "Escala Enigmática",
        "Escala Enigmática Menor",
        "Escala Bebop Maior"
    ];
    
    // Referência ao elemento <select> no HTML
    let selectTipos = document.querySelector('.selecionar.tipos');
    
    // Preencher as opções do <select> com base nas variáveis
    for (let i = 0; i < formulas.length; i++) {
        let option = document.createElement('option');
        option.value = formulas[i].join(','); // Converter a fórmula em uma string
        option.textContent = nomesEscalas[i]; // Usar o nome da escala como texto
        selectTipos.appendChild(option);
    }
}

iniciar();
function changeColorTheme(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];

    // Alterar cor de fundo do elemento main
    document.getElementById("main").style.backgroundColor = color;

    // Alterar cor de fundo do botão de tema
    const botao = document.getElementById("change-color-theme");
    botao.style.backgroundColor = color;

    // Alterar cor de fundo do botão submit nos eventos de mouse
    const buttonSubmit = document.getElementById('button-submit');
    buttonSubmit.addEventListener('mouseover', function() {
        this.style.backgroundColor = color;
    });

    buttonSubmit.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#fff';
    });

    // Alterar cor de texto das opções de menu nos eventos de mouse
    const opcoesMenu = document.getElementsByClassName('menu-option');
    for (let i = 0; i < opcoesMenu.length; i++) {
        opcoesMenu[i].addEventListener('mouseover', function() {
            this.style.color = color;
        });

        opcoesMenu[i].addEventListener('mouseout', function() {
            this.style.color = '#000';
        });
    }
}

var i = 0;
var txt = "Information Technology student";
var speed = 120;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function getYear() {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
}
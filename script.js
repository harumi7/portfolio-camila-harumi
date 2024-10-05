function changeColorTheme(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];

    // Change background color of the element "main"
    document.getElementById("main").style.backgroundColor = color;

    // Change background color of the button that changes the color theme
    const botao = document.getElementById("change-color-theme");
    botao.style.backgroundColor = color;

    // Change background color of the submit button (form/contact section)
    const buttonSubmit = document.getElementById("button-submit");
    buttonSubmit.addEventListener("mouseover", function() {
        this.style.backgroundColor = color;
    });

    buttonSubmit.addEventListener("mouseout", function() {
        this.style.backgroundColor = "white";
    });

    // When hover, the menu text color will change accordingly to the selected color theme
    const opcoesMenu = document.getElementsByClassName('menu-option');
    for (let i = 0; i < opcoesMenu.length; i++) {
        opcoesMenu[i].addEventListener("mouseover", function() {
            this.style.color = color;
        });

        opcoesMenu[i].addEventListener("mouseout", function() {
            this.style.color = "black";
        });
    }
}

var i = 0;
var txt = "Information Technology student";
var speed = 120;

// Write the string letter by letter
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// When clicked, the user returns to the top of the page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Get the actual year, this way, the copyright year is automatically modified
function getYear() {
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
}
function irpara() {
window.location.href = 'Login.html';
}

function voltar() {
window.location.href = 'index.html';
}

function voltar_login() {
window.location.href = 'Login.html';

}
function abrirreservas(){
window.location.href = 'reservas.html';
}


function voltar_para_principal() {
window.location.href = 'principal.html';
}

function abrirmapa(){
window.location.href = 'mapageral.html';
}

function marcarlocalizacao(){
    window.location.href = 'marcacao.html';
}

function abrirhorarios() {
    window.location.href = 'horario.html';
}

function abrirmenu() {
    document.getElementById("menuLateral").classList.add("ativo");
  }

  function fecharmenu() {
    document.getElementById("menuLateral").classList.remove("ativo");
  }
function editarperfil(){
    window.location.href = 'perfil.html';
}


function onSubmit() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    if (email === "admin@fortes.com.br" && senha === '123456') {
        window.location.href = 'principal.html';
    
    }
    else if (email === "cooperativas@fortes.com.br" && senha === '123456') {
        window.location.href = 'principal.html';
    }

        else{
            document.getElementById("erro").innerHTML = "Email ou senha inválidos!";
        }
    }



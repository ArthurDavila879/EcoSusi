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
            
            // Reset borders
            document.getElementById("email").style.border = "black 2px solid";
            document.getElementById("senha").style.border = "black 2px solid";

            // Check which fields are incorrect
            let emailCorreto = (email === "admin@fortes.com.br" || email === "cooperativas@fortes.com.br");
            let senhaCorreta = (senha === "123456");

            if (!emailCorreto) {
                document.getElementById("email").style.border = "2px solid red";
                document.getElementById("erro").innerHTML = "Email inválido!";
            document.getElementById("erro").style.color = "red";
            }
            if (!senhaCorreta) {
                document.getElementById("senha").style.border = "2px solid red";
                document.getElementById("erro").innerHTML = "Senha inválida!";
            document.getElementById("erro").style.color = "red";
            }
            if (!emailCorreto && !senhaCorreta) {
                document.getElementById("erro").innerHTML = "Email e senha inválidos!";
                document.getElementById("erro").style.color = "red";
            }
        }
    }



const btnCriarNovoProjeto = document.getElementById("btnCriarNovoProjeto");
const caixaFormulario = document.getElementById("caixaFormulario");
const btnCancelarNovoProjeto = document.getElementById("btnCancelarNovoProjeto");
const caixaVerProjetos = document.getElementById("caixaVerProjetos");
const btnVerProjetos = document.getElementById("btnVerProjetos");
const btnFecharVerProjetos = document.getElementById("btnFecharVerProjetos");

let inputNomeProjeto = document.getElementById("nomeProjeto");
let inputPrioridadeProjeto = document.getElementById("prioridadeProjeto");
let inputTipoProjeto = document.getElementById("tipoProjeto");
let inputTecnologiaProjeto = document.getElementById("tecnologiaProjeto");
let inputAndamentoProjeto = document.getElementById("andamentoProjeto");

function mostrarCaixaFormulario(){
    caixaFormulario.removeAttribute("hidden");
    btnCriarNovoProjeto.setAttribute("hidden", "hidden");
    btnVerProjetos.setAttribute("hidden", "hidden");
}

function ocultarCaixaFormulario(){
    caixaFormulario.setAttribute("hidden", "hidden");
    btnCriarNovoProjeto.removeAttribute("hidden");
    btnVerProjetos.removeAttribute("hidden");
    inputNomeProjeto.value = "";
    inputPrioridadeProjeto.value = "";
    inputTipoProjeto.value = "";
    inputTecnologiaProjeto.value = "";
    inputAndamentoProjeto.value = "";
}

function mostrarCaixaVerProjetos() {
    caixaVerProjetos.removeAttribute("hidden");
    btnCriarNovoProjeto.setAttribute("hidden", "hidden");
    btnVerProjetos.setAttribute("hidden", "hidden");
}

function ocultarCaixaVerProjetos(){
    caixaVerProjetos.setAttribute("hidden", "hidden");
    btnCriarNovoProjeto.removeAttribute("hidden");
    btnVerProjetos.removeAttribute("hidden");
}

btnCriarNovoProjeto.addEventListener("click", mostrarCaixaFormulario);
btnCancelarNovoProjeto.addEventListener("click", ocultarCaixaFormulario);
btnVerProjetos.addEventListener("click", mostrarCaixaVerProjetos);
btnFecharVerProjetos.addEventListener("click", ocultarCaixaVerProjetos);

const tabelaProjetos = document.getElementById("tabelaProjetos");
const corpoTabela = document.getElementById("corpoTabela");
const btnEnviarNovoProjeto = document.getElementById("btnEnviarNovoProjeto");
const cabecalhoTabela = document.getElementById("cabecalhoTabela");

let listaProjetos = [];

if(listaProjetos.length == 0){
    cabecalhoTabela.innerHTML = `<tr>
    <th>Nenhum projeto criado!</th>
    </tr>`
}

function atualizarTabela(){
    
    let array2 = [inputNomeProjeto.value, inputPrioridadeProjeto.value, inputTipoProjeto.value, 
    inputTecnologiaProjeto.value, inputAndamentoProjeto.value];

    listaProjetos.unshift(array2);

    cabecalhoTabela.innerHTML = `<tr>
    <th>Nome</th>
    <th>Prioridade</th>
    <th>Tipo</th>
    <th>Tecnologia(s)</th>
    <th>Andamento</th>
    <th>Ações</th>
    </tr>`

    corpoTabela.innerHTML += `<tr>
    <td>${listaProjetos[0][0]}</td>
    <td>${listaProjetos[0][1]}</td>
    <td>${listaProjetos[0][2]}</td>
    <td>${listaProjetos[0][3]}</td>
    <td>${listaProjetos[0][4]}</td>
    <td></td>
    </tr>`;

    ocultarCaixaFormulario();
}

btnEnviarNovoProjeto.addEventListener("click", atualizarTabela);

let teste = true;

if(teste){
    inputNomeProjeto.value = "Teste";
    inputPrioridadeProjeto.value = "Prioridade Baixa";
    inputTipoProjeto.value = "Faculdade";
    inputTecnologiaProjeto.value = "HTML, CSS e JS";
    inputAndamentoProjeto.value = "Em andamento";
}
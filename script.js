async function buscar(btn){
    const apibuscar = `http://10.46.116.64/cadastro_pacientes/buscar?id=${btn.target.dataset.idpaciente}` 
    const response1 = await fetch(apibuscar);
    console.log(response1)
    const data1 = await response1.json();
    console.log(data1)
        
    btn.target.dataset.idpaciente
         
    document.getElementById("id").value = data1.id
    document.getElementById("nome").value = data1.nome
    document.getElementById("data_nascimento").value  = data1.data_nascimento
    document.getElementById("sexo").value = data1.sexo
    document.getElementById("nome_mae").value = data1.nome_mae
    document.getElementById("email").value = data1.email
    document.getElementById("cpf").value = data1.cpf
    document.getElementById("cep").value = data1.cep
    document.getElementById("nome_rua").value = data1.nome_rua
    document.getElementById("numero_casa").value = data1.numero_casa
    document.getElementById("bairro").value = data1.bairro
    document.getElementById("uf").value = data1.uf

    const editar = document.getElementById("id");


if(editar.value.length > 0 )
{
    
    var btncadastrar = document.getElementById("botaocadastrar")
    var btneditar = document.getElementById("botaoeditar")
    
    btncadastrar.style.display = "none"
    btneditar.style.display = "block" 
}


else
{

}
      


    }

   

//--------------------------------------METODO LISTAR(GET)--------------------------------------------------------------//

const api = "http://10.46.116.64/cadastro_pacientes/listar";

(async function fetchApiData(){

const response = await fetch(api);
console.log(response);
const data = await response.json();
console.log(data);

data.map((post) => {

let data =  new Date (post.data_nascimento);
let formatter = Intl.DateTimeFormat("pt-br", {dateStyle: "short"});

let table = document.createElement("tr"); 
let nome = document.createElement("td");
let nasc = document.createElement("td");
let sexo = document.createElement("td");
let mae = document.createElement("td");
let email = document.createElement("td");
let cpf = document.createElement("td");
let cep = document.createElement("td");
let btn = document.createElement("td");
const botao = document.createElement("button");





nome.innerText = post.nome;
nasc.innerText = formatter.format(data), post.data_nascimento;
sexo.innerText = post.sexo;
mae.innerText = post.nome_mae;
email.innerText = post.email;
cpf.innerText = post.cpf;
cep.innerText = post.cep;

botao.addEventListener("click",  buscar)

botao.dataset.idpaciente = post.id
botao.dataset.nome = post.nome
botao.dataset.nasc = post.data_nascimento
botao.dataset.sexo = post.sexo
botao.dataset.nomemae = post.nome_mae
botao.dataset.email = post.email
botao.dataset.cpf = post.cpf
botao.dataset.cep = post.cep
botao.innerText = 'EDITAR'

table.appendChild(nome)
table.appendChild(nasc)
table.appendChild(sexo)
table.appendChild(mae)
table.appendChild(email)
table.appendChild(cpf)
table.appendChild(cep)
table.appendChild(btn)
btn.appendChild(botao)

fill_list.appendChild(table);

});

})


//--------------------------------------METODO ENVIAR(POST)--------------------------------------------------------------//


async function enviar(form){

let response = await fetch('http://10.46.116.64/cadastro_pacientes/atualizar',{
method: 'post',
body: form
});
// let obj = await response.json();
return response;

}

document.getElementById("botaocadastrar").addEventListener("click", async() => {
let form = document.getElementById("formulario");
let vform = new FormData(form);
let response = await enviar(vform);
console.log(response);



})

async function atualizar(form){

let response = await fetch('http://10.46.116.64/cadastro_pacientes/atualizar',{
method: 'post',
body: form
});

return response;

}

document.getElementById("botaoeditar").addEventListener("click", async() => {
    let form = document.getElementById("formulario");
    let vform = new FormData(form);
    let response = await atualizar(vform);
    console.log(response);

    
    
})








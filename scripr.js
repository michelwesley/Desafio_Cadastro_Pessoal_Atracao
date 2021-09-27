


//Função para Validação do CPF;
function validador(cpf) {

    //Se a quantidade de caracteres for diferente de 11 ou for um dos numeros abaixo, emitir alerta!  
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999") {
        alert("CPF informado inválido.");
        return false;
    }

    else {
        var num = cpf.substring(0, 9); // Pega todos caracteres até a posição 9
        var dig = cpf.substring(9); // Pega os caracteres após a posição 9, ou seja, os dois últimos digitos
        
        
        var soma = 0; //Variável de incremento
        //Laço de repetição que percorre de trás para frente
        for (i = 10; i > 1; i--) { 
            soma += num.charAt(10 - i) * i; // CharAt busca posições até encontrar e retorna aquela posição na lista
        }

        //validação do 1º dígito
        var result = (soma % 11) < 2 ? 0 : 11 - (soma % 11); //Operador ternário
        if (result != dig.charAt(0)) {
            alert("CPF informado inválido.");
            return false;
        }

        
        soma = 0; //Reset da variavel de incremento
        num = cpf.substring(0, 10); //Pega todos caracteres até a posição 10

        //Laço de repetição que percorre de trás para frente
        for (k = 11; k > 1; k--) {
            soma += num.charAt(11 - k) * k;
        }

        //validação do 2º dígito
        var result = (soma % 11) < 2 ? 0 : 11 - (soma % 11); // Operador ternário;
        if (result != dig.charAt(1)) {
            alert("CPF informado inválido.");
            return false;
        }
    }
}




//Função para Autopreechimento de CEP
function rastreiocep() {
    var cep = document.getElementById('cep').value; // Variável cep receberá os números digitados;

    var url = "https://viacep.com.br/ws/" + cep + "/json/"; //Variável que armazena o resultado da execução de uma sincronização com link externo concatenado ao cep digitado pelo usuário;

    var endereco = document.getElementById('endereco');
    var bairro = document.getElementById('bairro');
    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado');

    fetch(url, { method: "get" })
        .then(response => {
            response.json()
                .then(data => {
                    endereco.value = data.logradouro;
                    bairro.value = data.bairro;
                    cidade.value = data.localidade;
                    estado.value = data.uf;
                })

        })
}



//Função para Máscara de Telefone Fixo
function mascaraFixo() {
    if (fixo.value.length == 0)
        fixo.value = '(' + fixo.value;  // Adiciona o parêntese esquerdo após digitar o primeiro dígito do DDD
 
    if (fixo.value.length == 3)
        fixo.value = fixo.value + ') ';// Adiciona o parêntese direito após o segundo dígito do DDD quando o primeiro dígito do celular é informado
 
    if (fixo.value.length == 9)
        fixo.value = fixo.value + '-';// Adiciona o hífen após o 9º caractér do input para separar os 4 últimos números do celular

}



//Função para Máscara de Telefone Celular
function mascaraCelular() {
    if (celular.value.length == 0)
        celular.value = '(' + celular.value; // Adiciona o parêntese esquerdo após digitar o primeiro dígito do DDD

    if (celular.value.length == 3)
        celular.value = celular.value + ') ';// Adiciona o parêntese direito após o segundo dígito do DDD quando o primeiro dígito do celular é informado

    if (celular.value.length == 10)
        celular.value = celular.value + '-';// Adiciona o hífen após o 10º caractér do input para separar os 4 últimos números do celular
}

//Alerta para confirmação de submissão de dados
function popUp() {
    confirm("Confirma o envio deste formulário?");
}

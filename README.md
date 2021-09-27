
Desafio Individual - programa Formação Tech Itaú PCD
 
Cadastro Pessoal - Atração

Desenvolvido por:
Michel Wesley Lima Fernandes

Desafio consiste em:
Criar um formulário de cadastro para registrar dados pessoais.

Descrição
O projeto foi desenvolvido em HTML5, estilizado com CSS3 e aplicado algumas funcionalidades  utilizando JavaScript.


-Dados pessoais

•	Nome Completo (obrigatório);
•	CPF (obrigatório);
•	RG; e
•	Sexo.

-Endereço

•	CEP;
•	Endereço (obrigatório);
•	Número (obrigatório);
•	Complemento;
•	Bairro (obrigatório);
•	Cidade (obrigatório);
•	Estado (obrigatório).

-Informações de contato

•	E-mail (obrigatório);
•	Telefone celular (obrigatório);
•	Telefone fixo.

Organização

--HTML5--
Na construção da página HTML foram utilizadas as tags de estruturação do corpo da página (HTML, Head e Body). Já para a separação do conteúdo foi usadas as tags “header”, no caso o cabeçalho da página, “main”, que seria o conteúdo e “footer”, que é o rodapé. Com isso podemos garantia uma boa semântica para a estrutura em HTML5, uma boa navegabilidade e inspeções.

-HEADER (cabeçalho)
No cabeçalho há um logotipo com um atributo “alt”, que informa aos usuários de leitores de tela o que aquela imagem representa, além disso foi inserida uma tag “nav” contendo o título principal da página.

-MAIN (conteúdo)
Na parte principal foi inseria todo o conteúdo relacionado ao formulário, como por exemplo: um título, subtítulo e observação, os campos que receberão as informações do usuário (alguns deles com Required/Obrigatoriedade de preenchimento), seletores, options e checkbox.

-FOOTER (rodapé)
No rodapé temos o nome do desenvolvedor do projeto,  links para as página do Programa Formação Tech Itaú, da Gama Academy e dos perfis do Linkedin e GitHub do desenvolvedor.


--CSS3--
A estilização do conteúdo foi feita utilizando folhas de estilo (CSS3) com algumas propriedades.


--JavaScript--

--Validação do CPF
O campo CPF aciona uma função assim que o usuário termina de digitar a informação solicitada. A função verifica se a informação repassada, o CPF, é válida. Caso não seja  repassada uma informação que esteja dentro dos padrões da função, é dado um alerta informando ao usuário que a informação passada não é um CPF válido clica no camposor sai do input e essa verifica se o número informado é ou não um número de CPF válido. Vale salientar que essa validação não faz referencia à situação cadastral na Receita Federal do Brasil, mas sim uma logica implementada a função
--Validação do CEP
O campo do CEP é uma função baseada no banco de dados do site VIACEP . Se o usuário informar um CEP incorreto, alguns campos do endereço serão preenchidos com undefined. Caso o usuário insira um número de CEP valido, serão preenchidos automaticamente os campos: endereço, bairro, cidade e estado.
--Máscaras para os campos Telefone fixo e celular
A cada número digito nesses campos, serão acionadas as condicionalidade para inclusão das: “ ( “, “ ) ” , “ - “.

*Referências
•	Conteúdos das vídeo aulas sa Gama Academy durante a trilha;
•	Os sites W3Schools e Free Code Camp;
•	Outros materiais de fóruns, blogs e canais do Youtube.


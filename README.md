# jobly - Como usar (Por Gustavo Pinto)
![Texto do seu parágrafo](https://github.com/gustavohpinto/jobly/assets/64512499/bcbe7561-9323-4d4c-99f6-3c06de1c2522)

Bem vindos ao projeto web da Jobly. ele foi desenvolvido com Typescript e os frameworks Angular e Bootstrap. Este é um projeto à pedido da instituição de ensino FIAP. Em seu propósito, busca conectar clientes que estão necessitados de resolver um serviço com profissionais qualificados. Muitas vezes as pessoas não conhecem alguém de confiança, que faça um bom serviço, e ficam com receio de contratar um serviço. Para resolver isso, surgiu a Jobly.

Para baixar o projeto e fazê-lo rodar em sua maquina é necessário seguir o passo a passo:

1. Clone o projeto usando 'git clone https://github.com/gustavohpinto/jobly' ou baixe o arquivo zip e descompacte-o.
2. Baixe a versão v20.14.0 do Node em https://nodejs.org/en
3. Abra o projeto em sua IDE de preferência. Menção honrosa ao Visual Studio Code.
4. Ao abrir, inicie um terminal e envie os seguintes comandos:
   4.1 npm install
   4.2 cd jobly(caso ainda não estiver na pasta)
   4.3 ng serve --open
   4.4 Esses comandos servem para baixar o projeto e iniciá-lo
   
5. Em outro terminal execute:
   5.1 json-server --watch db.json
   5.2 Se o comando acima der erro, rode 'npm install -g json-server'
   5.3 Esse comando serve para rodar a api mock presente no projeto

Se seu navegador padrão abrir a guia abaixo, tudo deu certo, agora é aproveitar!
![image](https://github.com/gustavohpinto/jobly/assets/64512499/d0336898-3d63-41aa-b3ac-fd5d8b4dc9ef)

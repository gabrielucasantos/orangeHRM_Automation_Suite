# OrangeHRM Automation Suite
![projeto1](https://github.com/user-attachments/assets/e3374d2f-6190-47cc-af15-473e57498358)
_Este é o meu projeto de automação de testes para a aplicação OrangeHRM, desenvolvido com o objetivo de validar algumas das funcionalidades principais do sistema. Estruturei o projeto usando o padrão Page Object Model (POM), o que facilita tanto a organização quanto a manutenção dos testes, além de permitir que eu amplie o escopo à medida que adiciono mais cenários._

## Funcionalidades Automatizadas
**Automatizei os seguintes cenários:**

1. Login com Credenciais Válidas

2. Login com Credenciais Inválidas

3. Logout

4. Cadastro de um Novo Usuário

5. Edição de Informações do Usuário

Para aumentar a diversidade e tornar os dados de teste mais dinâmicos, integrei a biblioteca Chance ao projeto. Ela gera dados aleatórios, como nomes de usuário e números de identificação, entre outros. Isso contribui para evitar a repetição dos mesmos dados nos testes, proporcionando mais realismo e abrangência nos cenários testados.

## Estrutura do Projeto
Utilizei o padrão Page Object Model para organizar o código, separando a lógica de cada página em classes específicas. Essa abordagem torna o código mais modular, fácil de manter e escalável, facilitando futuras adições de novos testes.

### Melhorias Futuras
Planejo algumas melhorias para o projeto, incluindo:

+ **Expansão dos Cenários de Teste:** Quero expandir o escopo para incluir mais cenários.
+ **Implementação de Relatórios Detalhados:** Quero adicionar um gerador de relatórios detalhados que permita uma visualização mais clara dos resultados dos testes.
+ **Integração com CI/CD:** Planejo integrar o projeto a um pipeline de CI/CD, automatizando a execução dos testes a cada novo commit para identificar problemas de forma contínua.

## Como Executar o Projeto
### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
+ [Node.js](https://nodejs.org/pt)
  
**Observação:** Caso você não tenha um navegador instalado, o Cypress utilizará o Electron por padrão para executar os testes.

### Passos para Instalação

1. **Clone o repositório** para sua máquina local:
```
git clone https://github.com/seu_usuario/orangehrm-automation-suite.git
```
2. **Acesse o diretório do projeto.** O diretório pode ser escolhido de acordo com o local onde você clonou o repositório:
```
cd caminho/para/o/diretorio/orangehrm-automation-suite
```
3. **Instale as dependências** do projeto:
```
npm install
```
4. **Execute o Cypress** para rodar os testes:
   
Para abrir o Cypress com a interface gráfica:
   
```
npx cypress open
```
Ou, para rodar os testes em modo headless (sem interface gráfica):
```
npx cypress run
```

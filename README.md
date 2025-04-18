# Email Validator

## Descrição

Este é um **validador de e-mail** simples desenvolvido em **JavaScript**. O objetivo do projeto é permitir que os usuários insiram um endereço de e-mail e verifiquem se ele é válido de acordo com o padrão de e-mails normalmente aceito (i.e., `user@example.com`).

### Funcionalidade

O validador realiza a verificação do e-mail inserido com base na **expressão regular** (regex) que valida:
- Se o e-mail possui o **formato correto** com caracteres válidos, como letras, números, e símbolos como `@` e `.`
- Se o domínio do e-mail é válido (contém um ponto após o `@`, como `gmail.com`, `yahoo.com`, etc.).

---

## Como Funciona

1. O usuário insere um e-mail em um campo de entrada.
2. O validador verifica se o e-mail segue o padrão correto.
3. Se o e-mail for válido, ele exibe uma mensagem de sucesso.
4. Se o e-mail for inválido, o sistema fornece uma mensagem de erro explicando o que está errado.

---

## Tecnologias Utilizadas

- **JavaScript** - Para a lógica de validação.
- **HTML** - Para estruturar o formulário de entrada de e-mail.
- **CSS** - Para estilizar o formulário e mensagens.

---

## Como Usar

1. **Clone o repositório**:

git clone https://github.com/EdielsonSolidade/Email-validator


2. **Abra o arquivo `index.html`** no seu navegador.

3. **Insira o e-mail** no campo de texto.

4. **Clique no botão de validação** para verificar o e-mail.

5. O sistema exibirá uma **mensagem de sucesso ou erro** abaixo do campo.

---

# Como Contribuir
Faça um fork do repositório.

Crie uma nova branch para sua feature (git checkout -b feature-nome-da-feature).

Faça alterações e envie um commit (git commit -am 'Adicionando validação para XYZ').

Push para a branch (git push origin feature-nome-da-feature).

Abra um pull request para revisar as alterações.

const emailsCadastrados = ["ediiisilva.2003@gmail.com"];
const inputForm = document.getElementById("email");
const btnCadastro = document.querySelector(".btn-cadastrar");
const mainForm = document.getElementById("form-cadastro");
const messageErrorOrNot = document.querySelector(".text-already-email");

mainForm.addEventListener("submit", evento => {
  evento.preventDefault();
});

btnCadastro.addEventListener("click", evento => {
  evento.preventDefault();
  let inputValue = inputForm.value;
  verificadorDeEmail();
});

async function verificadorDeEmail() {
  let myPromise = new Promise((resolve, reject) => {
    if (emailsCadastrados.includes(inputForm.value)) {
      resolve("Email Cadastrado com sucesso");
    } else {
      reject("Email já cadastado ?");
    }
  });

  try {
    const mensagem = await myPromise;
    messageErrorOrNot.style.color = "green";
    messageErrorOrNot.textContent = "Email cadastrado com Sucesso.";
  } catch (error) {
    messageErrorOrNot.style.color = "red";
    messageErrorOrNot.textContent = "Email já cadastrado.";
  }
}

const btnEmails = document.querySelector(".ver-emails");
const popUpEmails = document.querySelector(".popUpEmails");

btnEmails.addEventListener("click", evento => {
  evento.preventDefault();
  if (popUpEmails.classList.contains("show")) {
    setTimeout(() => {
      popUpEmails.classList.remove("show");
    }, 200);
  } else {
    popUpEmails.classList.add("show");
  }
});

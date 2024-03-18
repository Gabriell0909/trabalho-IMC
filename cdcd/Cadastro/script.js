function limparcampos() {
  document.getElementById("nome").value = ""
  document.getElementById("senha").value = ""
  document.getElementById("confirmar").value = ""
}

function validar() {
  let senha = document.getElementById("senha").value
  let confirmar = document.getElementById("confirmar").value.trim()
  let confirmarInput = document.getElementById("confirmar")
  let senhaInput = document.getElementById("senha")
  let nome = document.getElementById("nome")
  let nomes = nome.value.trim()
  let regex = /^[a-zA-Z]+$/

  if (nomes === "" && senha === "" && confirmar === "") {
    alert("Por favor, preencha todos os campos.")
    nomeInput.focus() 
    return false
  }

  if (nomes === " ") {
    alert("nome em branco")
    limparcampos()
    return false
  } else if (!regex.test(nomes)) {
    limparcampos()
    alert("nome deve ter apenas letras")
    return false
  }

  if (senha === " " && confirmar === " ") {
    confirmar.value = ""
    return false
  }

  if (senha != confirmar) {
    alert("erro na senha")
    confirmarInput.value = ""
    senhaInput.value = ""
    senhaInput.focus()
    return false
  }

  return true
}

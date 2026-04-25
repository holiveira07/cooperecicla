// ======================
// INTERFACE
// ======================

function adicionar() {
  let nome = document.getElementById("material").value;
  let quantidade = document.getElementById("quantidade").value;

  adicionarMaterial(nome, Number(quantidade));
}

function listar() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let i = 0; i < materiais.length; i++) {
    lista.innerHTML +=
      "<li>" + materiais[i].nome + "-" + materiais[i].quantidade + "</li>";
  }
}
function remover() {
  let nome = document.getElementById("material").value;

  removerMaterial(nome);

  console.log("Tentativa de remoção feita");

  listar();
}

function buscar() {
  let nome = document.getElementById("material").value;

  let resultado = buscarMaterial(nome);

  let areaResultado = document.getElementById("resultado");

  if (resultado) {
    areaResultado.innerHTML =
      "Nome: " +
      resultado.nome +
      "<br>" +
      "Quantidade: " +
      resultado.quantidade;
  } else {
    areaResultado.innerHTML = "Material não encontrado";
  }
}

// ================================================
// Projeto Extensão 5º Período - CoopRecicla
// Desenvolvido por: [Seu Nome]
// Data: [Data de Desenvolvimento]
// Descrição: Este projeto é um sistema de gerenciamento de materiais recicláveis para a CoopRecicla, permitindo adicionar, listar, remover e buscar materiais.
// =================================================

// ================================
// 📦 DADOS DO Sistema
// ================================

let materiais = [];

//=================================
//  🛠 Funções do sistema
// ================================

//  ➕ Adicionar material

function adicionarMaterial(nome, quantidade) {
  let material = {
    nome: nome,
    quantidade: quantidade,
  };

  materiais.push(material);

  console.log("Material addicionado com sucesso !");
}

//  📋 Listar materiais
function listarMateriais() {
  if (materiais.length === 0) {
    console.log("Nenhum material cadastrado");
    return;
  }

  for (let i = 0; i < materiais.length; i++) {
    console.log("Material " + (i + 1));
    console.log("Nome: " + materiais[i].nome);
    console.log("Quantidade: " + materiais[i].quantidade);
    console.log("----------------------------");
  }
}

//  ❌ Remover material

function removerMaterial(nome) {
  for (let i = 0; i < materiais.length; i++) {
    if (materiais[i].nome === nome) {
      materiais.splice(i, 1);

      console.log("Material " + nome + " removido com sucesso !");
      return;
    }
  }
  console.log("Material não encontrado");
}

// 🔍 Buscar material
function buscarMaterial(nome) {
  for (let i = 0; i < materiais.length; i++) {
    if (materiais[i].nome.toLowerCase().trim() === nome.toLowerCase().trim()) {
      console.log("O material que você busca, foi encontrado");
      console.log("Nome: " + materiais[i].nome);
      console.log("Quantidade: " + materiais[i].quantidade);
      console.log("Comparando:", materiais[i].nome, "com", nome);
      return materiais[i];
    }
  }
  return null;
  console.log("Material não encontrado");
}

console.log("\n📋 LISTA INICIAL:");
listarMateriais();

console.log("\n 🔍 BUSCANDO MATERIAL");
buscarMaterial("Papel");

console.log("\n ❌ REMOVENDO MATERIAL");
removerMaterial("Papel");

console.log("\n📋 Lista Atualizada:");
listarMateriais();

function menu() {
  let opcao = prompt(
    "Escolha uma opção:\n" +
      "1 -Adicionar Material\n" +
      "2 -Listar Materiais\n" +
      "3 -Remover Material\n0" +
      "4 -Buscar Material\n" +
      "5. Sair",
  );

  if (opcao === "1") {
    let nome = prompt("Digite o nome do material:");
    let quantidade = prompt("Digite a quantidade do material:");
    adicionarMaterial(nome, Number(quantidade));
    return true;
  } else if (opcao === "2") {
    listarMateriais();
    return true;
  } else if (opcao === "3") {
    let nome = prompt("Digite o nome do material a ser removido: ");
    removerMaterial(nome);
    return true;
  } else if (opcao === "4") {
    let nome = prompt("Digite o nome do material a ser buscado:");
    buscarMaterial(nome);
    return true;
  } else if (opcao === "5") {
    console.log("Saindo do sistema...");
    return false;
  } else {
    console.log("Opção inválida. Tente novamente.");
    return true;
  }
}

let executando = true;

while (executando) {
  executando = menu();
}

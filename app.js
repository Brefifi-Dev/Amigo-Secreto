let listaDeamigos = [];
let lista = document.getElementById('listaAmigos');
let inputNomeInserido = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nomeAmigo = inputNomeInserido.value.trim();  // Remove espaços extras

    if (nomeAmigo === '') {
        alert('Informe o nome do amigo.');
        return;
    }

    if (listaDeamigos.includes(nomeAmigo)) {
        alert('Amigo já adicionado.');
        return;
    }

    listaDeamigos.push(nomeAmigo);
    atualizarLista();
    inputNomeInserido.value = ''; // Limpa o campo de entrada
}

// Função para listar amigos na interface
function atualizarLista() {
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    listaDeamigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaDeamigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    let amigoSorteado = listaDeamigos[Math.floor(Math.random() * listaDeamigos.length)];
    resultado.innerHTML = `<li> 🎁O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;

    // Remove o amigo sorteado da lista
    listaDeamigos = listaDeamigos.filter(amigo => amigo !== amigoSorteado);
    atualizarLista();  // Atualiza a lista na interface
}

// Função para limpar a lista
function limparLista() {
    listaDeamigos = [];
    atualizarLista();
    resultado.innerHTML = ''; // Limpa o resultado do sorteio
}


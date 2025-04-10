function carregarPagina() {
    alert("Bem-vindo ao site sobre a importância da preservação de animais silvestres!");
}

function mostrarAnimalSelecionado() {
    var animal = document.getElementById("animalSelect").value;
    var descricao = document.getElementById("animalDescricao");
    var imagem = document.getElementById("imagem");

    var dados = {
        "1": {
            texto: "<b>Tigre-de-Bengala:</b> Este animal está em risco devido à caça ilegal e à perda de habitat.",
            img: "Tigre de Bengala.png"
        },
        "2": {
            texto: "<b>Elefante Asiático:</b> A caça para extração de marfim e a destruição do habitat são as principais ameaças.",
            img: "Elefante Asiático.png"
        },
        "3": {
            texto: "<b>Rinoceronte-branco:</b> A caça ilegal para a comercialização de seus chifres é uma grande ameaça.",
            img: "Rinoceronte Branco.png"
        },
        "4": {
            texto: "<b>Gorila-das-montanhas:</b> A perda de habitat e a caça são os principais motivos da extinção dessa espécie.",
            img: "Gorila das Montanhas.png"
        },
        "5": {
            texto: "<b>Arara-azul:</b> A destruição de seu habitat e o tráfico ilegal são grandes ameaças para sua sobrevivência.",
            img: "Arara Azul.png"
        }
    };

    if (dados[animal]) {
        imagem.src = dados[animal].img;
        imagem.style.display = "block";
        imagem.alt = `Imagem do ${document.querySelector("#animalSelect option:checked").text}`;
        descricao.innerHTML = dados[animal].texto;
        descricao.prepend(imagem); // Insere a imagem antes do texto
    } else {
        descricao.innerHTML = "";
        imagem.style.display = "none";
    }
}

function alertarImportancia() {
    alert("A preservação dos animais silvestres é fundamental para manter o equilíbrio dos ecossistemas e a biodiversidade! Estudos indicam que 475 milhões de bichos silvestres morrem, por ano, nas estradas, sendo 17 mortes por segundo, 1,3 milhão por dia, ou seja, praticamente uma Goiânia a cada 24 horas, segundo o Portal da Alego.");
}

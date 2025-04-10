<?php

$texts = [
    "Algumas pessoas conhecem como o pesadelo dos músicos, outras preferem nem conhecer. A verdade é que se você quiser se tornar músico ou cantor profissional uma hora ou outra vai precisar se tornar amigo desse aparelho.",

    "Inventado em 1812 por um relojoeiro chamado Dietrich Nikolaus Winkel, o metrônomo indica um andamento musical através de pulsos sonoros. Foi criado como um instrumento mecânico mas hoje em dia existe até aplicativo para celular.",

    "É muito utilizado na gravação em estúdio sendo um dos responsáveis pela melhora na captação de áudio. O processo de gravação com metrônomo possibilita que cada instrumento/voz seja captada separadamente, obtendo assim o melhor timbre.",
    
    "Na última década vem ganhando força nas apresentações ao vivo. Possibilitando a banda executar suas músicas com os mesmos sons que foram gravados no estúdio."
];


if (isset($_GET['json'])) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['texts' => $texts], JSON_UNESCAPED_UNICODE);
    exit;
}

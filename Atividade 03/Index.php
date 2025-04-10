<?php include 'Metronome.php'; ?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Metronome Demo com AJAX</title>
    <style>
        #btns { display: flex; gap: 10px; }
        #textContainer { margin-top: 4em; }
        #textContainer p,
        #textContainer pre { margin: 1em 0; }
    </style>
</head>
<body>

    <div id="btns">
        <button id="okBtn">Ok</button>
        <button id="textBtn">Texto em Parágrafo</button>
        <button id="resetBtn">Reset</button>
        <button id="ajaxBtn">Chamar AJAX</button>
    </div>

    <div id="textContainer"></div>

    <script>
    const texts = <?php echo json_encode($texts, JSON_UNESCAPED_UNICODE); ?>;
    let idx = 0;

    document.getElementById('okBtn').addEventListener('click', () => {
        console.log('O botão "Ok" foi clicado.');
    });

    document.getElementById('textBtn').addEventListener('click', () => {
        const container = document.getElementById('textContainer');
        const p = document.createElement('p');
        p.textContent = texts[idx];
        container.appendChild(p);
        idx = (idx + 1) % texts.length;
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        idx = 0;
        document.getElementById('textContainer').innerHTML = '';
    });

    document.getElementById('ajaxBtn').addEventListener('click', () => {
        fetch('Metronome.php?json=1')
            .then(response => {
                if (!response.ok) throw new Error('Erro HTTP: ' + response.status);
                return response.json();
            })
            .then(data => {
                console.log('Resposta AJAX:', data);
                const container = document.getElementById('textContainer');
                const pre = document.createElement('pre');
                pre.textContent = JSON.stringify(data, null, 2);
                container.appendChild(pre);
            })
            .catch(error => {
                console.error('Erro na requisição AJAX:', error);
            });
    });
    </script>

</body>
</html>

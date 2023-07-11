function voltar() {
    window.location.href = "filtros.html";
}

function limpar() {
    document.getElementById('questaoumc').checked = false;
    document.getElementById('questaoumi').checked = false;
    document.getElementById('questaodoisc').checked = false;
    document.getElementById('questaodoisi').checked = false;
    document.getElementById('questaotresc').checked = false;
    document.getElementById('questaotresi').checked = false;
    
    document.getElementById('questaoumg').checked = false;
    document.getElementById('questaodoisg').checked = false;
    document.getElementById('questaotresg').checked = false;

    document.getElementById('questaoumc').disabled = false;
    document.getElementById('questaoumi').disabled = false;
    document.getElementById('questaodoisc').disabled = false;
    document.getElementById('questaodoisi').disabled = false;
    document.getElementById('questaotresc').disabled = false;
    document.getElementById('questaotresi').disabled = false;

    document.getElementById('dt_i').value = '';
    document.getElementById('dt_f').value = '';

    data.labels = ['Corretas', 'Incorretas'];

    contadorquery = 0;
    flag = 1;
    atualizarGrafico();
}


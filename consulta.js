var arrayObjetos = [];
var contadorquery = 0;
var data_inicio = "";
var data_limite = "";

$.ajax({
  url: 'consulta.php',
  dataType: 'json',
  success: function(data) {
    for (var i = 0; i < data.length; i++) {
      var objeto = {};

      for (var propriedade in data[i]) {
        if (data[i].hasOwnProperty(propriedade)) {
          if (propriedade === 'questaoum' || propriedade === 'questaodois' || propriedade === 'questaotres') {
            objeto[propriedade] = data[i][propriedade] === '1';
          } else {
            objeto[propriedade] = data[i][propriedade];
          }
        }
      }

      arrayObjetos.push(objeto);
    }

    minhaFuncao();
  },
  error: function() {
    console.log('Ocorreu um erro na requisição AJAX.');
  }
});

function minhaFuncao() {
    totalAcertos = 0;
    totalErros = 0;
    contadorquery = 0;
    var data_query = "";
    var selecionarquery="";

    data_inicio = document.getElementById('dt_i').value;
    data_limite = document.getElementById('dt_f').value;


    if(document.getElementById('questaoumg').checked||document.getElementById('questaodoisg').checked||document.getElementById('questaotresg').checked){
      document.getElementById('questaoumc').checked = false;
      document.getElementById('questaoumi').checked = false;
      document.getElementById('questaodoisc').checked = false;
      document.getElementById('questaodoisi').checked = false;
      document.getElementById('questaotresc').checked = false;
      document.getElementById('questaotresi').checked = false;
      document.getElementById('questaoumc').disabled = true;
      document.getElementById('questaoumi').disabled = true;
      document.getElementById('questaodoisc').disabled = true;
      document.getElementById('questaodoisi').disabled = true;
      document.getElementById('questaotresc').disabled = true;
      document.getElementById('questaotresi').disabled = true;
      data.labels = ['Corretas','Incorretas'];
    } else {
      document.getElementById('questaoumc').disabled = false;
      document.getElementById('questaoumi').disabled = false;
      document.getElementById('questaodoisc').disabled = false;
      document.getElementById('questaodoisi').disabled = false;
      document.getElementById('questaotresc').disabled = false;
      document.getElementById('questaotresi').disabled = false;
    }
    
    if (document.getElementById('questaoumc').checked) {
      selecionarquery += "arrayObjetos[i].questaoum";
      contadorquery++;
      data.labels = ['No Filtro','Total Restante'];
    }
    
    if (document.getElementById('questaoumi').checked) {
      selecionarquery += "!arrayObjetos[i].questaoum";
      contadorquery++;
      data.labels = ['No Filtro','Total Restante'];
    }
    
    if (document.getElementById('questaodoisc').checked) {
      contadorquery == 0 ? selecionarquery += "arrayObjetos[i].questaodois" : selecionarquery += " && arrayObjetos[i].questaodois";
      contadorquery++;
      data.labels = ['No Filtro','Total Restante'];
    }
    
    if (document.getElementById('questaodoisi').checked) {
      contadorquery == 0 ? selecionarquery += "!arrayObjetos[i].questaodois" : selecionarquery += " && !arrayObjetos[i].questaodois";
      contadorquery++;
      data.labels = ['No Filtro','Total Restante'];
    } 

    if (document.getElementById('questaotresc').checked) {
      contadorquery == 0 ? selecionarquery += "arrayObjetos[i].questaotres" : selecionarquery += " && arrayObjetos[i].questaotres";
      contadorquery++;
      data.labels = ['No Filtro','Total Restante'];
    }
    
    if (document.getElementById('questaotresi').checked) {
      contadorquery == 0 ? selecionarquery += "!arrayObjetos[i].questaotres" : selecionarquery += " && !arrayObjetos[i].questaotres";
      contadorquery++;
      data.labels = ['No Filtro','Total Restante'];
    }

    if ((data_inicio !== '' || data_limite !== '')) {
      if (data_inicio === '' && data_limite !== '') {
        data_query = "arrayObjetos[i].data_resposta<=data_limite";
      } else if (data_inicio !== '' && data_limite === '') {
        data_query = "arrayObjetos[i].data_resposta>=data_inicio" ;
      } else {
        data_query = "arrayObjetos[i].data_resposta>=data_inicio&&arrayObjetos[i].data_resposta<=data_limite";
      }
    } else {
      data_query = "true";
    }

    for(var i=0;i<arrayObjetos.length;i++){
      if(eval(data_query)){
        if(contadorquery==0){
          if(!document.getElementById('questaoumg').checked&&!document.getElementById('questaodoisg').checked&&!document.getElementById('questaotresg').checked){
            arrayObjetos[i].questaoum ? totalAcertos++ : totalErros++;
            arrayObjetos[i].questaodois ? totalAcertos++ : totalErros++;
            arrayObjetos[i].questaotres ? totalAcertos++ : totalErros++;
          } else {
            document.getElementById('questaoumg').checked? arrayObjetos[i].questaoum ? totalAcertos++ : totalErros++ : null;
            document.getElementById('questaodoisg').checked? arrayObjetos[i].questaodois ? totalAcertos++ : totalErros++ : null;
            document.getElementById('questaotresg').checked? arrayObjetos[i].questaotres ? totalAcertos++ : totalErros++ : null;
          }
        } else {
          if(eval(selecionarquery)){
            totalAcertos++;
          } else {
            totalErros++;
          }
        }
      }
    }
}


  
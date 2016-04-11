angular.module('fabricaDados', [])

.factory("Convenios", function ($http, $q) {
    
    var url = "data/convenios.json";

    $http.get(url).success(function (data) {
        convenios = data;
    });

    //var xmlhttp = new XMLHttpRequest();
    //var convenios = [];
    //xmlhttp.onreadystatechange = function () {
    //    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //        convenios = JSON.parse(xmlhttp.responseText);
    //        console.log(convenios);
    //    }
    //};
    //xmlhttp.open("GET", url, true);
    //xmlhttp.send();

    //convenios = [
    //       {
    //           id: 1352288,
    //           imagem: "images/fotos/convenioGovBr1352288-foto001-sm.jpg",
    //           categoria: "Casas Populares",
    //           proposta: "131621/2009",
    //           descricao: "Construção de ponte sobre o rio Manuel Alves na localidade de Boca de Pique com fins de redução/prevenção de desastres em áreas de risco no município de Meleiro/SC.",
    //           totalProjeto: "R$ 422.795,44",
    //           contribFederal: "R$ 300.000,00",
    //           contribEstadual: "R$ 0,00",
    //           contribMunicipal: "R$ 122.795,44",
    //           dtInicio: "27/12/2012",
    //           dtPrazo: "30/06/2016",
    //           justificativa: "O Município de Meleiro localiza-se no Oeste do Vale Araranguá em Santa Catarina possui 6.880 habitantes (IBGE 2007) em uma área total de 186618 Km². A economia do município baseia-se essencialmente na produção agrícola com destaque para o cultivo do arroz fumo milho e feijão além do extrativismo vegetal havendo portanto uma renda irregular da população repercutindo diretamente na arrecadação do município.Entre os dias 07 a 12 de setembro do presente ano o município foi atingido por uma catástrofe por meio de uma enchente. Segundo laudo emitido pela EPAGRI entre estes dias as condições meteorológicas predominantes foram totalmente favoráveis à ocorrência de volume excessivo que resultaram em uma situação crítica de alagamentos e/ou enxurrada no Litoral Sul acarretando no transbordamento do Rio Araranguá Rios Manoel Alves Rio do Cedro e Rio Mãe Luzia Rio Itopava Rio Junidá Rio do Meio e Rio Braço do Cedro.De acordo com a notificação preliminar de desastre emitido pelo Sistema Nacional de Defesa Civil as áreas afetadas no município com a enchente na área urbana foram: Distrito de Sapiranga e na área rural as localidades de Barra do Cedro Jacaré Boca do Pique Sanga Grande Alto Rio Jundiá Manoel Alves Sanga da Areia Morro do Bodoque Pique do Meio Limeira Vila São José Tranqueiras Novo Paraíso Vila União Barra do Rio Cedro Baixo Forquilha Rocha Machado Boa Vista e Poço Verde. O número de atingidos pela catástrofe registra 6.998 pessoas. Em virtude desta catástrofe que abateu todo o município tanto a economia local advinda da agricultura quanto inúmeras infra estrutura foram danificadas pela enchente. Neste sentido o recurso disponível pelo Ministério da Integração Nacional viabilizará obras e serviços de redução de desastres nas áreas de riscos de desastres que existem no município. O Objetivo da proposta será a implementação de obras preventivas para reduzir e/ou minimizar perdas e danos provocados por processos de enchentes. O número de beneficiadas com as obras serão todos os munícipes aproximadamente 6.880 habitantes fora a população flutuante (visitantes). Ações a serem realizadas com o pleito: Construção de ponte sobre o rio Manuel Alves na localidade de Boca de Pique. Esta ponte dá acesso de Meleiro a BR 101 bem como da localidade Boca do Pique ao Distrito de Sapiranga."
    //       },
    //       {
    //           id: 1425823,
    //           imagem: "images/fotos/convenioGovBr1425823-foto001-sm.jpg",
    //           categoria: "Obra de Esgoto",
    //           proposta: "131621/2009",
    //           descricao: "Construção de ponte sobre o rio Manuel Alves na localidade de Boca de Pique com fins de redução/prevenção de desastres em áreas de risco no município de Meleiro/SC.",
    //           totalProjeto: "R$ 422.795,44",
    //           contribFederal: "R$ 300.000,00",
    //           contribEstadual: "R$ 0,00",
    //           contribMunicipal: "R$ 122.795,44",
    //           dtInicio: "27/12/2012",
    //           dtPrazo: "30/06/2016",
    //           justificativa: "O Município de Meleiro localiza-se no Oeste do Vale Araranguá em Santa Catarina possui 6.880 habitantes (IBGE 2007) em uma área total de 186618 Km². A economia do município baseia-se essencialmente na produção agrícola com destaque para o cultivo do arroz fumo milho e feijão além do extrativismo vegetal havendo portanto uma renda irregular da população repercutindo diretamente na arrecadação do município.Entre os dias 07 a 12 de setembro do presente ano o município foi atingido por uma catástrofe por meio de uma enchente. Segundo laudo emitido pela EPAGRI entre estes dias as condições meteorológicas predominantes foram totalmente favoráveis à ocorrência de volume excessivo que resultaram em uma situação crítica de alagamentos e/ou enxurrada no Litoral Sul acarretando no transbordamento do Rio Araranguá Rios Manoel Alves Rio do Cedro e Rio Mãe Luzia Rio Itopava Rio Junidá Rio do Meio e Rio Braço do Cedro.De acordo com a notificação preliminar de desastre emitido pelo Sistema Nacional de Defesa Civil as áreas afetadas no município com a enchente na área urbana foram: Distrito de Sapiranga e na área rural as localidades de Barra do Cedro Jacaré Boca do Pique Sanga Grande Alto Rio Jundiá Manoel Alves Sanga da Areia Morro do Bodoque Pique do Meio Limeira Vila São José Tranqueiras Novo Paraíso Vila União Barra do Rio Cedro Baixo Forquilha Rocha Machado Boa Vista e Poço Verde. O número de atingidos pela catástrofe registra 6.998 pessoas. Em virtude desta catástrofe que abateu todo o município tanto a economia local advinda da agricultura quanto inúmeras infra estrutura foram danificadas pela enchente. Neste sentido o recurso disponível pelo Ministério da Integração Nacional viabilizará obras e serviços de redução de desastres nas áreas de riscos de desastres que existem no município. O Objetivo da proposta será a implementação de obras preventivas para reduzir e/ou minimizar perdas e danos provocados por processos de enchentes. O número de beneficiadas com as obras serão todos os munícipes aproximadamente 6.880 habitantes fora a população flutuante (visitantes). Ações a serem realizadas com o pleito: Construção de ponte sobre o rio Manuel Alves na localidade de Boca de Pique. Esta ponte dá acesso de Meleiro a BR 101 bem como da localidade Boca do Pique ao Distrito de Sapiranga."
    //       },
    //       {
    //           id: 1749781,
    //           imagem: "images/fotos/convenioGovBr1749781-foto001-sm.jpg",
    //           categoria: "Obra Contra Enchentes",
    //           proposta: "131621/2009",
    //           descricao: "Construção de ponte sobre o rio Manuel Alves na localidade de Boca de Pique com fins de redução/prevenção de desastres em áreas de risco no município de Meleiro/SC.",
    //           totalProjeto: "R$ 422.795,44",
    //           contribFederal: "R$ 300.000,00",
    //           contribEstadual: "R$ 0,00",
    //           contribMunicipal: "R$ 122.795,44",
    //           dtInicio: "27/12/2012",
    //           dtPrazo: "30/06/2016",
    //           justificativa: "O Município de Meleiro localiza-se no Oeste do Vale Araranguá em Santa Catarina possui 6.880 habitantes (IBGE 2007) em uma área total de 186618 Km². A economia do município baseia-se essencialmente na produção agrícola com destaque para o cultivo do arroz fumo milho e feijão além do extrativismo vegetal havendo portanto uma renda irregular da população repercutindo diretamente na arrecadação do município.Entre os dias 07 a 12 de setembro do presente ano o município foi atingido por uma catástrofe por meio de uma enchente. Segundo laudo emitido pela EPAGRI entre estes dias as condições meteorológicas predominantes foram totalmente favoráveis à ocorrência de volume excessivo que resultaram em uma situação crítica de alagamentos e/ou enxurrada no Litoral Sul acarretando no transbordamento do Rio Araranguá Rios Manoel Alves Rio do Cedro e Rio Mãe Luzia Rio Itopava Rio Junidá Rio do Meio e Rio Braço do Cedro.De acordo com a notificação preliminar de desastre emitido pelo Sistema Nacional de Defesa Civil as áreas afetadas no município com a enchente na área urbana foram: Distrito de Sapiranga e na área rural as localidades de Barra do Cedro Jacaré Boca do Pique Sanga Grande Alto Rio Jundiá Manoel Alves Sanga da Areia Morro do Bodoque Pique do Meio Limeira Vila São José Tranqueiras Novo Paraíso Vila União Barra do Rio Cedro Baixo Forquilha Rocha Machado Boa Vista e Poço Verde. O número de atingidos pela catástrofe registra 6.998 pessoas. Em virtude desta catástrofe que abateu todo o município tanto a economia local advinda da agricultura quanto inúmeras infra estrutura foram danificadas pela enchente. Neste sentido o recurso disponível pelo Ministério da Integração Nacional viabilizará obras e serviços de redução de desastres nas áreas de riscos de desastres que existem no município. O Objetivo da proposta será a implementação de obras preventivas para reduzir e/ou minimizar perdas e danos provocados por processos de enchentes. O número de beneficiadas com as obras serão todos os munícipes aproximadamente 6.880 habitantes fora a população flutuante (visitantes). Ações a serem realizadas com o pleito: Construção de ponte sobre o rio Manuel Alves na localidade de Boca de Pique. Esta ponte dá acesso de Meleiro a BR 101 bem como da localidade Boca do Pique ao Distrito de Sapiranga."
    //       }
    //];

    return {
        all: function () {
            return convenios;
        },
        remove: function (chat) {
            convenios.splice(convenios.indexOf(chat), 1);
        },
        get: function (chatId) {

            for (var i = 0; i < convenios.length; i++) {
                if (convenios[i].id === parseInt(chatId)) {
                    return convenios[i];
                }
            }
            return null;
        }
    };
})
;
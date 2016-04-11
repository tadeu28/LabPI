angular.module('controllers', [])

.controller('HomeTabCtrl', function ($scope, Convenios) {
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        $scope.changeOriantationLandspace = function () {
            screen.lockOrientation('landscape');
        }

        $scope.changeOriantationPortrait = function () {
            screen.lockOrientation('portrait');
        }
    }
})

.controller("SaudeTabCtrl", function ($scope, Convenios) {
            console.log("Controlador de Saude");
})

.controller("EducacaoTabCtrl", function ($scope, Convenios) {
    console.log("Controlador de Educação");
})

.controller("EstradaTabCtrl", function ($scope, Convenios) {
    console.log("Controlador de Estrada");
})

.controller('DetalheCtrl', function ($scope, $stateParams, $http, Convenios) {
    $scope.id = $stateParams.id;

    $scope.convenio = Convenios.get($stateParams.id);
    $scope.descricao = $scope.convenio.descricao;

    $scope.caminho = "images/fotos/convenioGovBr" + $stateParams.id + "-foto001-sm.jpg";

    $scope.showhide = function(elNome) {
        var elem = document.getElementById(elNome);

        if (elem.classList.contains('item-text-wrap')) {
            elem.classList.remove('item-text-wrap');
        } else {
            elem.classList.add('item-text-wrap');
        }
    };
})
;
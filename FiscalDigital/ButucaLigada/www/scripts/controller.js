/*
    Fiscal Digital
    Copyright (c) by Tadeu Classe, Leo Yukku, Luiza de Paula, Renata Araujo

    https://github.com/tadeu28/LabPI/tree/prot_fase_I

    This file is part of Fiscal Digital.

    Fiscal Digital is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Foobar is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
*/

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
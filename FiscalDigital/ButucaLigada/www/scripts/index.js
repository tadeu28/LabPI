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

// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    //document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);

        /*
        var edtBusca = document.getElementById("edtBusca");

        var btnTeste = document.getElementById("btnTeste");
        btnTeste.addEventListener('click', function() {

            var cont = 0;

            if (typeof(Storage) !== "undefined") {
                if (localStorage.contador) {
                    localStorage.contador = Number(localStorage.contador) + 1;
                } else {
                    localStorage.contador = 1;
                }

                cont = localStorage.contador;
            }

            edtBusca.value = cont.toString();
        }, false);

        */
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

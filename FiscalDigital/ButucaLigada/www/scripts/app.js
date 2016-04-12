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

angular.module('ionicApp', ['ionic', 'controllers', 'fabricaDados'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "templates/home.html",
                        controller: 'HomeTabCtrl'
                    }
                }
            })
            .state('tabs.saude', {
                url: "/saude",
                views: {
                    'saude-tab': {
                        templateUrl: "templates/saude.html",
                        controller: 'SaudeTabCtrl'
                    }
                }
            })
            .state('tabs.educacao', {
                url: "/educacao",
                views: {
                    'educacao-tab': {
                        templateUrl: "templates/educacao.html",
                        controller: 'EducacaoTabCtrl'
                    }
                }
            })
            .state('tabs.estrada', {
                url: "/estrada",
                views: {
                    'estrada-tab': {
                        templateUrl: "templates/estrada.html",
                        controller: 'EstradaTabCtrl'
                    }
                }
            })
            .state('tabs.detalhe', {
                url: "/detalhe/:id",
                views: {
                    'home-tab': {
                        templateUrl: "templates/detalhe.html",
                        controller: 'DetalheCtrl'
                    }
                }
            })
            .state('tabs.detalheSaude', {
                url: "/detalheSaude/:id",
                views: {
                    'saude-tab': {
                        templateUrl: "templates/detalhe.html",
                        controller: 'DetalheCtrl'
                    }
                }
            })
            .state('tabs.detalheEducacao', {
                url: "/detalheEducacao/:id",
                views: {
                    'educacao-tab': {
                        templateUrl: "templates/detalhe.html",
                        controller: 'DetalheCtrl'
                    }
                }
            })
            .state('tabs.detalheEstrada', {
                url: "/detalheEstrada/:id",
                views: {
                    'estrada-tab': {
                        templateUrl: "templates/detalhe.html",
                        controller: 'DetalheCtrl'
                    }
                }
            })
            .state('tabs.facts2', {
                url: "/facts2",
                views: {
                    'home-tab': {
                        templateUrl: "templates/facts2.html"
                    }
                }
            })
            .state('tabs.about', {
                url: "/about",
                views: {
                    'about-tab': {
                        templateUrl: "templates/about.html"
                    }
                }
            })
            .state('tabs.navstack', {
                url: "/navstack",
                views: {
                    'about-tab': {
                        templateUrl: "templates/nav-stack.html"
                    }
                }
            })
            .state('tabs.contact', {
                url: "/contact",
                views: {
                    'contact-tab': {
                        templateUrl: "templates/contact.html"
                    }
                }
            });


        $urlRouterProvider.otherwise("/tab/home");

    });
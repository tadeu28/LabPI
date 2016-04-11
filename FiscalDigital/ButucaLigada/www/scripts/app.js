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
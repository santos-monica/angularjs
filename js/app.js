angular.module('listaTelefonica', [])
    .controller('listaTelefonicaCtrl', function ($scope) {
        $scope.app = 'Lista Telefônia';
        $scope.contatos = [
            { nome: 'Pedro', telefone: '998866559' },
            { nome: 'Ana', telefone: '58479683' },
            { nome: 'Clara', telefone: '874563981'},
        ]

        $scope.adicionarContato = (contato) => {
            $scope.contatos.push(angular.copy(contato));
            delete $scope.contato
        }
    });
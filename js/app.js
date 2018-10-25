angular.module('listaTelefonica', ['ngMessages'])
    .controller('listaTelefonicaCtrl', function ($scope) {
        $scope.app = 'Lista Telefônia';
        $scope.contatos = [
            { nome: 'Pedro', telefone: '998866559' },
            { nome: 'Ana', telefone: '58479683' },
            { nome: 'Clara', telefone: '874563981'},
        ];

        $scope.operadoras = [
            { nome: 'Oi', cod: 14, cat: 'cel' },
            { nome: 'Vivo', cod: 15, cat: 'cel' },
            { nome: 'Tim', cod: 41, cat: 'cel' },
            { nome: 'GVT', cod: 25, cat: 'fixo' },
            { nome: 'Embratel', cod: 21, cat: 'fixo' }
        ];

        $scope.adicionarContato = (contato) => {
            $scope.contatos.push(angular.copy(contato));
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
        }

        $scope.apagarContatos = (contatos) => {
            $scope.contatos = contatos.filter((contato) => {if (!contato.selecionado) return contato})
        }

        $scope.contatoSelecionado = (contatos) => {
            return contatos.some((contato) =>  contato.selecionado);
        }
    });
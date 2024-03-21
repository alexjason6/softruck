Nesse projeto foi desafiador, pois não trabalhei ainda com animações e foi a primeira vez que fiz um sprit de uma imagem. Não ficou bom essa parte mas é algo que com certeza colocarei na minha lista para aprender.

Bom, usei o react-native-maps conforme vocês indicaram e também pelo fato de já usar em outro projeto meu.
Fiz uma tela (inicial) da últia posição enviada pelo rastreador com dados gerais. Basta clicar no carrinho para abrir as informações. Fiz assim pois acredito que no nomemnto que a pessoa abre o APP o que é mais importante de modo geral é a visualização da posição do veículo.
Dentro do box de informações há um botão que permite a expansão do mesmo para exibir algumas informações e por último um botão para visualizar as viagens registradas.

Dentro da tela de viagens, basicamente a pessoa pode mudar de viagem tocando nas setas e com isso ela vai ver os trajetos feitos. Ao clicar no carro temos uma infomação básica sobre o carro (placa) e a distancia percorrida no trjeto.

Perdi muito tempo tentando resolver o sprit e descuidei um pouco do layout e das possibilidades de informações. Por exemplo, eu queria ter implementando uma busca por velocidade da via percorrida, entre outras como analises de tempo parado, tempo de trajeto, velocidade máxima imprimida e etc.

As traduções são relativamente simples, usei o react-native-localize.
Para converter os unixtimestamp usei o moment.

Consegui componentizar muita coisa como services, httpclient e mapas mas faltou uma refatoração para melhorar os componentes de informações. Tinha espaço ali para um retrabalho.

Para os ícones usei o react-native-vector-icons.


acredito que é isso.

Obrigado pela oportunidade.

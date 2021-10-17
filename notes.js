// == introdução à api rest == //

/*  
(190)
HTTP: protocólo de transferência de dados
baseado em Requisição e Resposta

Base para o desenvolvimento de qualquer
aplicação web atual


(191) 
VERBOS / MÉTODOS HTTP: 
Informam o tipo de requisição a ser feita. 

GET: retorna dados do servidor. usado na url.
POST: cria novos registros. usado em formulários. 
PUT: Substitui registros existentes de maneira completa. 
PATCH: Atualiza registros existentes, substituindo de maneira parcial. 
DELETE: deleta registros existentes. 


(192) 
STATUS CODE
É importante que o status code da requisição seja retornado junto com a resposta. 


(193)
WEB SERVICES 

São apis da web / que funcionam através do protocolo HTTP. 

APIs: 
camadas, interfaces de comunicação na web ou na computação.
interfaces de comunicação entre dois ou mais sistemas
// Ex: apis gráficas, 


(194)
Padrão de desenvolvimento de web services
deve seguir os seguintes requisitos:
1) cliente - servidor
diferente de aplicações mvc (por ex laravel) 
que consomem os dados da aplicação e retornam o conteúdo a ser renderizado
a api deve apenas servir os dados, ou seja, ser apenas servidor

2) stateless
não deve guardar o estado do cliente - cabeçalho e corpo da requisição. 
recebe a requisição, retorna o que foi solicitado e "esquece". 

3) cacheável

4) ser compativel com camadas
caso tenha um proxy, um firewall, um middleware entre a resquisição e a
resposta, a api deve funcionar normalmente

5) interface uniforme e direta
rotas devem ser uniformes e diretas
certo: http://meusite.com/clientes/1 (delete)
errado: http://meusite.com/deletarCliente/1

Uma API Rest pode retornar json, xml, imagens, PDFs, etc



(195)
Rest X Restful

Rest: um padrão / arquitetura de APIs
Restful:  API que implementa a arquitetura Rest, e que, além disso, 
segue todas as especificações definidas pela comunidade. 


(198)
Endpoints: basicamente, sao rotas da api





*/
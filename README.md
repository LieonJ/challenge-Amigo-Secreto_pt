# challenge-Amigo-Secreto_pt
# Amigo Secreto

Este projeto é uma aplicação web simples para gerenciamento de um sorteio de "amigo secreto". Nele, você pode adicionar nomes de amigos, visualizar a lista atualizada e sortear um amigo aleatoriamente para revelar o "amigo secreto".

---

## Funcionalidades

- **Adicionar Amigos:**  
  Digite o nome de um amigo no campo de entrada e clique no botão **Adicionar** para incluí-lo na lista. O nome é adicionado a um array e a lista exibida na tela é atualizada automaticamente.

- **Exibir Lista de Amigos:**  
  A lista de nomes adicionados é exibida em tempo real. Cada vez que um novo amigo é adicionado, a lista é atualizada, evitando duplicações.

- **Sortear Amigo Secreto:**  
  Ao clicar no botão **Sortear amigo**, a aplicação valida se há nomes na lista, gera um índice aleatório e exibe o nome do amigo sorteado.

---

## Arquivos do Projeto

- **index.html**  
  Contém a estrutura HTML da aplicação, incluindo:
  - Campo de entrada para digitar os nomes.
  - Botões para adicionar um nome e sortear o amigo secreto.
  - Listas (usando elementos `<ul>`) para exibir os nomes adicionados e o resultado do sorteio.
  - Inclusão do arquivo CSS para estilização e do arquivo JavaScript para a lógica.

- **style.css**  
  Define o design e a apresentação da aplicação:
  - Estilização do layout, botões, listas e seções da página.
  - Variáveis CSS para cores e fontes que garantem um visual moderno e consistente.

- **app.js**  
  Contém a lógica da aplicação:
  - Um array `amigos` para armazenar os nomes inseridos.
  - Funções para adicionar amigos (`adicionarAmigo()`), atualizar a lista na tela (`atualizarLista()`) e sortear um amigo secreto (`sortearAmigo()`).
  - Validações, como a verificação de entrada vazia e a checagem se há amigos disponíveis para o sorteio.

---

## Como Usar

1. **Abrir a Aplicação:**  
   Basta abrir o arquivo `index.html` em seu navegador de preferência ou no seguinte Link: .

2. **Adicionar Amigos:**  
   - Digite o nome de um amigo no campo de entrada.
   - Clique no botão **Adicionar**.  
   O nome será adicionado ao array e a lista de amigos será atualizada.

3. **Sortear Amigo Secreto:**  
   - Clique no botão **Sortear amigo**.
   - Se houver amigos na lista, um nome será escolhido aleatoriamente e exibido na área de resultado.

---

## Requisitos

- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Sem dependências externas, apenas HTML, CSS e JavaScript puro.

---

## Considerações

- **Validação:**  
  A função de adicionar amigo valida se o campo de entrada não está vazio e, caso esteja, exibe um alerta solicitando a inserção de um nome.

- **Atualização Dinâmica:**  
  Sempre que um nome é adicionado, a lista de amigos é atualizada sem duplicações usando `innerHTML` para limpar o conteúdo anterior e um loop `for` para adicionar os itens.

- **Sorteio Aleatório:**  
  A função `sortearAmigo()` utiliza `Math.random()` e `Math.floor()` para gerar um índice aleatório baseado no tamanho atual do array de amigos, garantindo que o sorteio seja justo.

---

## Licença

Este projeto é fornecido apenas para fins educacionais e pode ser modificado conforme necessário.

---

Sinta-se à vontade para contribuir ou sugerir melhorias. Boa sorte com o seu Amigo Secreto!

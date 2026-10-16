
# TechFlow — Projeto Acadêmico ADS

<img width="250" height="250" alt="Logo TechFlow em Azul Neon" src="https://github.com/user-attachments/assets/83c05fa3-e859-4b99-9b9c-aabb81ed1f45" />


Sistema web demonstrativo para **chamados técnicos e controle de estoque**.

## Estrutura
- `index.html` — portal inicial
- `usuario.html` — abertura de chamados
- `gestao.html` — painel da gestão
- `estoque.html` — controle de estoque
- `css/style.css` — identidade visual e responsividade
- `js/app.js` — regras de negócio e armazenamento

## Como executar
1. Extraia o projeto.
2. Abra `index.html` no navegador.
3. Entre em **Portal do Usuário** e abra um chamado.
4. Ao clicar em **Enviar chamado**, o sistema direciona automaticamente para o **Painel da Gestão**.
5. Na Gestão, o chamado aparece com prioridade visual:
   - Verde = baixa
   - Amarelo = média
   - Laranja = alta
   - Vermelho = crítica
6. A gestão pode assumir e resolver chamados.
7. Em Estoque, é possível registrar entradas e saídas e retirar rapidamente unidades.

## Tecnologia
Projeto front-end sem servidor, utilizando HTML5, CSS3 e JavaScript. Os dados são persistidos no `localStorage` do navegador.

## Observação acadêmica
Para uma versão de produção, recomenda-se adicionar backend/API, banco de dados, autenticação por perfil, controle de permissões, logs, validação no servidor e integração com inventário real.


## Controle de acesso
A área administrativa possui uma tela de login. As páginas `gestao.html` e `estoque.html` verificam uma sessão administrativa e redirecionam para `login.html` quando não existe autenticação.

**Credencial demonstrativa:**
- Usuário: `admin`
- Senha: `admin123`

> Importante: essa autenticação é apenas para demonstração acadêmica no front-end. Em produção, as credenciais devem ser validadas por um backend e as senhas armazenadas de forma segura.


## Interface visual

A interface usa um tema escuro azul-marinho com painéis contrastantes e destaques azuis. A autenticação incluída é apenas demonstrativa e os dados permanecem no armazenamento local do navegador.


## 📸 Telas do sistema
As imagens abaixo estão organizadas junto da explicação correspondente. Todos os caminhos são relativos ao arquivo README.md, então as imagens serão exibidas corretamente no GitHub quando a pasta docs/screenshots for enviada junto com o projeto.

1. Fluxo do usuário — Portal do Usuário

Página de entrada
<img width="1805" height="838" alt="pagina de entrada" src="https://github.com/user-attachments/assets/172df59c-886d-4cc7-a1d2-e5d17457a759" />
Tela inicial do TechFlow. Apresenta o sistema como projeto acadêmico de ADS e oferece dois caminhos: o Portal do Usuário, para abrir chamados de suporte, e a Área Administrativa, para consultar chamados, atualizar status e controlar o estoque.

Etapa 1: Identificação
<img width="1886" height="738" alt="usuario indetificaçao" src="https://github.com/user-attachments/assets/f05f3c93-18b8-4bbe-a014-e9c1e6adb985" />
Primeira etapa do formulário de novo chamado. O usuário informa nome, setor/departamento, e-mail corporativo e ramal para contato, para que a equipe de TI saiba quem solicitou o atendimento e como retornar.

Etapa 2: Seleção de equipamento
<img width="1794" height="592" alt="usuario seleçao de equipamento" src="https://github.com/user-attachments/assets/3f4847dd-ccbd-427f-b66f-37bb27a3ee55" />
O usuário escolhe, por meio de cartões visuais, o equipamento com problema: Impressora, Notebook, CPU/Desktop, Monitor, Cabos/Rede ou Periférico. Cada cartão apresenta exemplos de falhas comuns para facilitar a escolha.

Etapa 3: Descrição do problema
<img width="1670" height="541" alt="usuario problema" src="https://github.com/user-attachments/assets/1483dd8a-70a9-4503-80cb-1f000b420048" />
Última etapa do chamado. O usuário seleciona o tipo de problema e o nível de urgência, e descreve o ocorrido no campo de texto. Essas informações ajudam a definir a prioridade do atendimento no painel da gestão.


2. Área administrativa — Gestão
<img width="1459" height="804" alt="login da gestao" src="https://github.com/user-attachments/assets/81f9d2be-cf42-4a33-9753-b9e4e2d40040" />

Login administrativo
Acesso demonstrativo à área administrativa por usuário e senha. As credenciais de teste exibidas no projeto são admin / admin123. A autenticação é apenas demonstrativa e não deve ser considerada segura para uso em produção.

Visão geral do Painel da Gestão
<img width="1842" height="896" alt="visao geral do painel de gestao" src="https://github.com/user-attachments/assets/7515f8e7-e190-4f55-8aa7-3726efaa66be" />
Tela principal do administrador. Reúne indicadores, lista de chamados recebidos, gráfico de movimentação do estoque e ações rápidas. A barra superior permite alternar entre Novo chamado, Gestão e Estoque.

Indicadores de chamados
<img width="1712" height="149" alt="indicadorres de chamados" src="https://github.com/user-attachments/assets/26c82503-e7e3-4f06-bcc8-4c3fa7236e77" />
Quatro cartões resumem o total de chamados, os chamados de alta prioridade, os resolvidos e os que estão em atendimento, oferecendo uma leitura rápida da situação do suporte.

Painel de chamados recebidos
<img width="1283" height="771" alt="painel de chamados abertos" src="https://github.com/user-attachments/assets/d68b2e1b-cd63-4b34-a082-ab3a05673f91" />
A lista apresenta número do chamado, equipamento, solicitante, setor, horário, descrição, prioridade (Baixa, Média, Alta ou Crítica) e status. A gestão pode assumir ou resolver chamados, e filtrar a lista pelo status.

3. Controle de estoque
Visão geral do estoque
<img width="1782" height="789" alt="visao geral do estoque" src="https://github.com/user-attachments/assets/e6298080-aaee-43e9-8e4e-f30010be26db" />
Tela do módulo Controle de Estoque de TI, que reúne indicadores, tabela de itens, histórico de movimentações e botão para registrar uma nova movimentação.


Indicadores do estoque

<img width="1689" height="128" alt="indicadores estoque" src="https://github.com/user-attachments/assets/a1725df8-e903-453b-9360-f5442d65b8ab" />

Resumo de itens cadastrados, unidades disponíveis, saídas no período e itens com estoque baixo. O indicador de estoque baixo ajuda a identificar a necessidade de reposição.

Itens em estoque


<img width="1265" height="611" alt="painel do estoque" src="https://github.com/user-attachments/assets/9a2b53ae-02cb-4294-a393-d09178946d2f" />


Tabela com item, categoria, quantidade, localização e status. Itens com poucas unidades aparecem como Estoque baixo, enquanto os demais são marcados como Disponível. A tela também oferece busca por item e botão para retirar unidades.


Histórico de entradas e saídas

<img width="430" height="618" alt="historico de entrada e saida" src="https://github.com/user-attachments/assets/866baebc-78af-4c19-a867-34122e1aa7db" />


Lista das movimentações recentes, indicando item, tipo de movimentação (entrada ou saída), quantidade e data/hora. Esse histórico ajuda a acompanhar o que entrou e saiu do estoque.

Gráfico de movimentação

<img width="435" height="407" alt="grafico de movimentaçao" src="https://github.com/user-attachments/assets/59e42c39-ace2-431d-94f2-823a69e27042" />


Gráfico de barras que compara entradas (azul) e saídas (laranja) ao longo do período, com o total de movimentações em destaque.


adicionar item ao estoque




<img width="500" height="573" alt="registrar movimentaçao" src="https://github.com/user-attachments/assets/0087afb4-2191-4625-97b0-b4fab9be3e54" />





Janela de movimentação em que o administrador informa item, categoria, tipo (Entrada ou Saída), quantidade e localização. Após confirmar, o sistema atualiza o estoque e o histórico de movimentações.




# TechFlow — Projeto Acadêmico ADS

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


### Ajustes de interface

O CSS foi simplificado para usar cores sólidas, bordas discretas e regras mais fáceis de manter. O objetivo é facilitar a leitura e a alteração do estilo durante o desenvolvimento acadêmico.

## 📸 Telas do sistema

As imagens abaixo estão organizadas junto da explicação correspondente. Todos os caminhos são relativos ao arquivo `README.md`, então as imagens serão exibidas corretamente no GitHub quando a pasta `docs/screenshots` for enviada junto com o projeto.

### 1. Fluxo do usuário — Portal do Usuário

#### Página de entrada
![Página de entrada do TechFlow](docs/screenshots/pagina-de-entrada.png)

Tela inicial do TechFlow. Apresenta o sistema como projeto acadêmico de ADS e oferece dois caminhos: o **Portal do Usuário**, para abrir chamados de suporte, e a **Área Administrativa**, para consultar chamados, atualizar status e controlar o estoque.

#### Etapa 1: Identificação
![Identificação do usuário](docs/screenshots/usuario-identificacao.png)

Primeira etapa do formulário de novo chamado. O usuário informa nome, setor/departamento, e-mail corporativo e ramal para contato, para que a equipe de TI saiba quem solicitou o atendimento e como retornar.

#### Etapa 2: Seleção de equipamento
![Seleção de equipamento](docs/screenshots/usuario-selecao-de-equipamento.png)

O usuário escolhe, por meio de cartões visuais, o equipamento com problema: Impressora, Notebook, CPU/Desktop, Monitor, Cabos/Rede ou Periférico. Cada cartão apresenta exemplos de falhas comuns para facilitar a escolha.

#### Etapa 3: Descrição do problema
![Descrição do problema](docs/screenshots/usuario-problema.png)

Última etapa do chamado. O usuário seleciona o **tipo de problema** e o **nível de urgência**, e descreve o ocorrido no campo de texto. Essas informações ajudam a definir a prioridade do atendimento no painel da gestão.

---

### 2. Área administrativa — Gestão

#### Login administrativo
![Login administrativo](docs/screenshots/login-da-gestao.png)

Acesso demonstrativo à área administrativa por usuário e senha. As credenciais de teste exibidas no projeto são `admin` / `admin123`. A autenticação é apenas demonstrativa e não deve ser considerada segura para uso em produção.

#### Visão geral do Painel da Gestão
![Visão geral do painel de gestão](docs/screenshots/visao-geral-do-painel-de-gestao.png)

Tela principal do administrador. Reúne indicadores, lista de chamados recebidos, gráfico de movimentação do estoque e ações rápidas. A barra superior permite alternar entre Novo chamado, Gestão e Estoque.

#### Indicadores de chamados
![Indicadores de chamados](docs/screenshots/indicadores-de-chamados.png)

Quatro cartões resumem o **total de chamados**, os chamados de **alta prioridade**, os **resolvidos** e os que estão **em atendimento**, oferecendo uma leitura rápida da situação do suporte.

#### Painel de chamados recebidos
![Painel de chamados recebidos](docs/screenshots/painel-de-chamados-abertos.png)

A lista apresenta número do chamado, equipamento, solicitante, setor, horário, descrição, prioridade (Baixa, Média, Alta ou Crítica) e status. A gestão pode assumir ou resolver chamados, e filtrar a lista pelo status.

---

### 3. Controle de estoque

#### Visão geral do estoque
![Visão geral do controle de estoque](docs/screenshots/visao-geral-do-estoque.png)

Tela do módulo **Controle de Estoque de TI**, que reúne indicadores, tabela de itens, histórico de movimentações e botão para registrar uma nova movimentação.

#### Indicadores do estoque
![Indicadores do estoque](docs/screenshots/indicadores-estoque.png)

Resumo de **itens cadastrados**, **unidades disponíveis**, **saídas no período** e **itens com estoque baixo**. O indicador de estoque baixo ajuda a identificar a necessidade de reposição.

#### Itens em estoque
![Tabela de itens em estoque](docs/screenshots/painel-do-estoque.png)

Tabela com item, categoria, quantidade, localização e status. Itens com poucas unidades aparecem como **Estoque baixo**, enquanto os demais são marcados como **Disponível**. A tela também oferece busca por item e botão para retirar unidades.

#### Histórico de entradas e saídas
![Histórico de entradas e saídas](docs/screenshots/historico-de-entrada-e-saida.png)

Lista das movimentações recentes, indicando item, tipo de movimentação (entrada ou saída), quantidade e data/hora. Esse histórico ajuda a acompanhar o que entrou e saiu do estoque.

#### Gráfico de movimentação
![Gráfico de movimentação](docs/screenshots/grafico-de-movimentacao.png)

Gráfico de barras que compara **entradas** (azul) e **saídas** (laranja) ao longo do período, com o total de movimentações em destaque.

#### Registrar movimentação
![Formulário de movimentação do estoque](docs/screenshots/movimentacao-do-estoque.png)

Janela de movimentação em que o administrador informa item, categoria, tipo (Entrada ou Saída), quantidade e localização. Após confirmar, o sistema atualiza o estoque e o histórico de movimentações.

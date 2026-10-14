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

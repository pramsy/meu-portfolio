# Portfólio Pessoal — Ramses Pierre

Portfólio pessoal desenvolvido para apresentar minha trajetória profissional, conhecimentos técnicos, projetos e experiências na área de desenvolvimento de sistemas.

O projeto começou como uma atividade acadêmica de Frontend e evoluiu para um portfólio profissional, incorporando recursos como formulário de contato integrado a serviço externo e um **Assistente de Inteligência Artificial**, desenvolvido para responder perguntas sobre meu perfil, tecnologias e projetos.

## 🌐 Acesse o portfólio

**Portfólio online:**
https://pramsy.github.io/meu-portfolio/

**Repositório:**
https://github.com/pramsy/meu-portfolio

---

## 📌 Sobre o projeto

O portfólio foi desenvolvido com foco em:

* apresentação profissional;
* organização das informações de currículo;
* apresentação de projetos;
* responsividade;
* acessibilidade e semântica HTML;
* formulário de contato;
* integração com serviços externos;
* integração com Inteligência Artificial.

Atualmente, o projeto conta com um **Assistente IA**, acessível diretamente pelo site, permitindo que visitantes façam perguntas sobre minha formação, conhecimentos, tecnologias, projetos e objetivos profissionais.

---

## 🤖 Assistente de Inteligência Artificial

Uma das funcionalidades mais recentes do projeto é um assistente virtual integrado ao portfólio.

O visitante pode fazer perguntas como:

* "Quem é o Ramses?"
* "Quais tecnologias ele conhece?"
* "Quais projetos ele desenvolveu?"
* "Qual é o objetivo profissional dele?"
* "Como posso entrar em contato?"

O assistente utiliza uma **base de conhecimento personalizada** sobre o proprietário do portfólio.

### Arquitetura

```text
┌──────────────────────────────┐
│       Portfólio Web          │
│       GitHub Pages           │
│                              │
│   HTML + CSS + JavaScript    │
└──────────────┬───────────────┘
               │
               │ HTTP / JSON
               ▼
┌──────────────────────────────┐
│          API Backend         │
│            Vercel            │
│       Serverless / Node.js   │
└──────────────┬───────────────┘
               │
               │ API
               ▼
┌──────────────────────────────┐
│          OpenAI API          │
│     Processamento da IA      │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│    Base de Conhecimento      │
│    conhecimento.js           │
└──────────────────────────────┘
```

A chave da API da OpenAI permanece armazenada no ambiente do backend, não sendo exposta no código JavaScript público do portfólio.

### Repositório da API

O backend do assistente está separado do projeto principal:

https://github.com/pramsy/meu-portfolio-api

---

## 🛠️ Tecnologias utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript
* Flexbox
* CSS Grid
* `<picture>` para imagens responsivas
* Design responsivo

### Backend / API

* Node.js
* API REST
* Serverless Functions
* Vercel

### Inteligência Artificial

* OpenAI API
* Integração de assistente de IA
* Base de conhecimento personalizada

### Serviços e ferramentas

* Git
* GitHub
* GitHub Pages
* Web3Forms
* Vercel

---

## 📂 Estrutura do projeto

```text
meu-portfolio/
│
├── imagem/
│   └── imagens utilizadas no projeto
│
├── index.html
├── curriculo.html
├── portfolio.html
├── contato.html
├── mensagem.html
├── style.css
├── script.js
└── README.md
```

### Principais arquivos

| Arquivo          | Descrição                                           |
| ---------------- | --------------------------------------------------- |
| `index.html`     | Página principal do portfólio                       |
| `curriculo.html` | Currículo e informações profissionais               |
| `portfolio.html` | Apresentação dos projetos                           |
| `contato.html`   | Formulário de contato                               |
| `mensagem.html`  | Página de confirmação após envio                    |
| `style.css`      | Estilos, layout e responsividade                    |
| `script.js`      | Interações do site e integração com o Assistente IA |
| `imagem/`        | Imagens utilizadas no projeto                       |

---

## 📄 Páginas do portfólio

### Página inicial

Apresentação profissional e destaque das principais informações do portfólio.

### Currículo

Apresenta informações relacionadas a:

* perfil profissional;
* formação;
* conhecimentos;
* experiências;
* objetivos profissionais.

### Portfólio

Apresentação dos projetos desenvolvidos e das tecnologias utilizadas.

### Contato

Formulário para envio de mensagens através do serviço Web3Forms.

### Mensagem

Página exibida após o envio do formulário de contato.

---

## 📬 Formulário de contato

O formulário de contato utiliza o **Web3Forms** para realizar o envio das mensagens por e-mail.

O fluxo é:

```text
Visitante
   ↓
Formulário de contato
   ↓
Web3Forms
   ↓
E-mail
   ↓
Página de confirmação
```

---

## 🚀 Como executar o projeto

### Opção 1 — Download pelo GitHub

1. Acesse o repositório.
2. Clique em **Code**.
3. Selecione **Download ZIP**.
4. Extraia o arquivo.
5. Abra `index.html` no navegador.

### Opção 2 — Clonar o repositório

```bash
git clone https://github.com/pramsy/meu-portfolio.git
```

Entre na pasta:

```bash
cd meu-portfolio
```

Depois, abra o arquivo:

```text
index.html
```

no navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

---

## 💡 Principais melhorias implementadas

O projeto passou por diversas melhorias desde sua primeira versão:

* HTML semântico utilizando `header`, `main`, `section` e `footer`;
* títulos específicos para cada página;
* `meta description`;
* navegação consistente;
* indicação da página ativa;
* layout responsivo;
* adaptação para diferentes tamanhos de tela;
* identidade visual mais consistente;
* formulário com labels e campos organizados;
* página de confirmação de envio;
* integração do formulário com Web3Forms;
* assistente virtual com Inteligência Artificial;
* integração entre frontend e backend através de API;
* criação de backend serverless;
* utilização de base de conhecimento personalizada;
* proteção da chave da API no ambiente do backend;
* integração com a OpenAI API.

---

## 📚 Projetos apresentados

Entre os projetos apresentados no portfólio estão aplicações desenvolvidas utilizando diferentes tecnologias e conceitos, incluindo:

* **Gestão de Gastos**
* **API de Endereços — ViaCEP**
* **Agenda Médica**
* **Sistema de Tarefas e Eventos**
* **Assistente IA do Portfólio**

Os projetos demonstram conhecimentos em desenvolvimento web, APIs REST, PHP, Laravel, Node.js, bancos de dados, Docker, Vue.js, Firebase e integração com serviços externos.

---

## 🎯 Objetivo profissional

Este projeto também funciona como uma demonstração prática das minhas habilidades como **Analista de Desenvolvimento de Sistemas**, com interesse em oportunidades de desenvolvimento **Backend e Full Stack Júnior**.

Meu foco de desenvolvimento inclui tecnologias como:

* PHP;
* Laravel;
* Node.js;
* JavaScript;
* APIs REST;
* MySQL;
* MariaDB;
* Docker;
* Git e GitHub;
* Vue.js;
* React;
* integração de APIs;
* Inteligência Artificial aplicada ao desenvolvimento.

---

## 🔮 Próximas melhorias

Algumas funcionalidades que podem ser incorporadas futuramente:

* menu hamburguer para dispositivos móveis;
* otimização das imagens utilizando WebP;
* carregamento otimizado de imagens;
* favicon e melhorias de identidade visual;
* novos projetos;
* melhorias de acessibilidade;
* animações e transições sutis;
* melhorias de SEO;
* Open Graph para compartilhamento em redes sociais;
* melhorias na experiência do Assistente IA;
* perguntas rápidas no chatbot;
* apresentação de links dos projetos diretamente pelo assistente;
* mecanismos adicionais de proteção contra uso abusivo da API.

---

## 👨‍💻 Autor

**Ramses Pierre**

Analista de Desenvolvimento de Sistemas
Foco em Desenvolvimento Backend e Full Stack

### Links

* Portfólio: https://pramsy.github.io/meu-portfolio/
* GitHub: https://github.com/pramsy/meu-portfolio
* API do Assistente IA: https://github.com/pramsy/meu-portfolio-api

---

## 📌 Observação

Este projeto foi iniciado como uma atividade acadêmica de Frontend e continua sendo desenvolvido como um projeto pessoal e profissional.

A evolução do projeto busca demonstrar, de forma prática, conhecimentos em desenvolvimento web, integração de APIs, backend, Inteligência Artificial, versionamento de código e publicação de aplicações.

# BioNexus Website — Guia de Utilização

Site completo com 7 páginas, HTML/CSS/JS puro, pronto para deploy.

## Estrutura de ficheiros

```
bionexus/
├── index.html          → Homepage
├── program.html         → Programa (2 dias, tabs, filtros)
├── speakers.html        → Speakers (filtros por categoria)
├── gallery.html         → Fotos (lightbox + filtro por edição)
├── past-editions.html   → Edições passadas
├── committee.html       → Comité organizador
├── registration.html    → Formulário de registo
├── css/style.css        → Todo o design (cores, layout, responsivo)
├── js/main.js           → Navegação, countdown, menu mobile
├── js/program.js        → Lógica das tabs do programa
├── js/speakers.js       → Filtros de speakers
├── js/gallery.js        → Lightbox e filtros de galeria
├── js/registration.js   → Validação e seleção do formulário
└── images/              → Pastas para logo, fotos, speakers, etc.
```

## O que tens de fazer antes de publicar

1. **Logo**: coloca o teu ficheiro de logo em `images/logo.png` (substitui o placeholder — atualmente sem imagem porque não foi anexada na conversa).
2. **Fotos**: adiciona as tuas imagens em `images/speakers/`, `images/gallery/`, `images/editions/`, `images/committee/`, mantendo os nomes de ficheiro usados no HTML (ou atualiza os `src=""` correspondentes).
3. **Data do evento**: em `js/main.js`, linha do `eventDate`, ajusta para a data exata de novembro.
4. **Textos**: todo o conteúdo (bios, descrições, nomes do comité) é placeholder — edita diretamente no HTML de cada página.
5. **Formulário de registo**: atualmente só mostra um alert ao submeter. Quando decidires como processar inscrições (Google Forms, Typeform, backend próprio), diz-me e ligamos isso a sério.

## Design

- Paleta: teal escuro + mint suave — tom científico/biotech, minimalista.
- Fontes: Poppins (títulos) + Inter (texto), via Google Fonts.
- Totalmente responsivo: menu hambúrguer em mobile, grids adaptam-se.

## Como pôr online

Segue os passos do Netlify que já discutimos:

1. Cria conta em [netlify.com](https://netlify.com).
2. Arrasta a pasta `bionexus/` inteira para o Netlify (drag-and-drop).
3. Em segundos tens o site live num URL `algo.netlify.app`.
4. Opcional: liga a um repositório GitHub para deploy automático sempre que editares.

Qualquer alteração de texto ou imagem é só editar o ficheiro `.html` correspondente — não precisas de tocar no CSS/JS a não ser que queiras mudar o design ou comportamento.

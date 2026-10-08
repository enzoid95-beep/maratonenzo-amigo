# Maratonenzo: instruções para o Claude

Site pessoal para organizar filmes e séries: biblioteca, avaliações, episódios, tendências e lançamentos. Publicado no GitHub Pages. Escreva sempre em português do Brasil, com tom direto.

## Os dois sites

Existem dois repositórios com o mesmo código:

- **Enzo** (`enzoid95-beep/cine360`): https://enzoid95-beep.github.io/cine360/
- **Eduardo**: cópia do site do Enzo para um amigo.

Toda mudança de funcionalidade, layout ou estilo vale para os dois sites. As únicas diferenças permitidas são:

1. Em `app.js`, na função `greetingLine()`: `const N='<span class="hi-name">Enzo</span>';` vira `Eduardo` no site do Eduardo.
2. Em `index.html`, no menu lateral: `<strong>Enzo</strong>` vira `<strong>Eduardo</strong>`.
3. Em `biblioteca.js`: no site do Eduardo, `items` e `conflicts` ficam vazios (`[]`). O `catalog` continua igual.

Nunca troque o nome nem a biblioteca de um site pelo do outro. Ao aplicar uma mudança no Eduardo, preserve as três diferenças acima.

## Estrutura

Site estático, sem build: HTML, CSS e JS puros.

- `index.html`: casca da interface (menu lateral, barra superior, `#main`, `#detailDialog`, `#toast`).
- `app.js`: toda a lógica, dentro de uma IIFE. A navegação é por `view` + `render()`, e os cliques são tratados por delegação no `document`.
- `styles.css`: estilos. As regras mais novas ficam no fim do arquivo e sobrescrevem as antigas.
- `biblioteca.js`: `window.CINE360_DATA` (itens, catálogo, conflitos).
- `tendencias.js`: `window.CINE360_TRENDS` (lista de reserva e chave do TMDB).
- Imagens, ícones e `manifest.webmanifest`.

Os dados do usuário ficam só no `localStorage` do navegador (`cine360-prototype-v1`), mais vários caches com prefixo `cine360-`. Não existe backend. A biblioteca tem botões para exportar e importar o backup.

## Partes principais

- **Página do título:** `drawDetail()` (biblioteca) e `drawTrend()` (tendências e lançamentos) abrem em tela cheia, dentro de `#detailDialog`, com classes `tp-*`. O botão Voltar e o "voltar" do navegador fecham a página (`pushDetailState`).
- **Avaliação:** componente `rate-slider` (arrastar, tocar ou usar as setas, de meio em meio ponto).
- **Séries:** linha embaixo do cartaz: azul = série completa e finalizada; verde = temporada completa, com mais temporadas por vir; amarela proporcional = faltam episódios. Os totais vêm do TMDB (`seriesTotals`). O histórico de episódios mostra os episódios que faltam marcar.
- **Início:** carrossel "Em alta" (ordem 1→N, só títulos de plataformas dos últimos 24 meses) e "Continue de onde parou".
- **Lançamentos:** `releasesView()`, com estreias dos últimos 14 dias no cinema e nos streamings (Brasil), cache de 6 horas.
- **Calendário:** lista manual mesclada com o TMDB.

## TMDB

Todo dado ao vivo vem da API v3 do TMDB, com `language=pt-BR` e região `BR`. A chave fica em `tendencias.js` (`tmdbKey`) e é pública por decisão do dono do site. Sempre guarde respostas em cache no `localStorage`, defina um tempo de nova tentativa em caso de erro e evite loops de `render()`.

## Padrões visuais

Tema escuro, com as fontes Manrope (texto e botões) e Space Grotesk (títulos).

Os botões seguem um padrão único, definido no bloco "PADRÃO ÚNICO DE BOTÕES E LINKS" em `styles.css`:

- **Principal:** verde, igual ao "Adicionar título" (classes `.primary` e `.add-btn`).
- **Secundário:** cinza escuro com borda (`.secondary`).
- **Perigo:** vermelho (`.bulk-remove`).
- **Chips e filtros:** o selecionado fica verde-limão.
- **Links:** `.text-btn`, com sublinhado discreto.

Não crie estilos de botão novos fora desse padrão. Evite elementos grandes e chamativos sem necessidade. Pense no celular: abaixo de 760 px aparece a barra inferior com o menu "Mais", e os itens extras precisam de uma cópia `mobile-only-nav` em `#sidebarCollections`.

## Como trabalhar

- Antes de mudar algo grande, explique em poucas linhas o que vai fazer.
- Depois de editar `app.js` ou `styles.css`, atualize o `?v=` correspondente em `index.html` para o navegador não usar a versão antiga.
- Teste antes de entregar. Rode `node --check app.js` e, se possível, abra o site num navegador headless (Playwright): tire prints no computador (1440 px) e no celular (390 px) e confira se não há erros no console. Quando o TMDB não estiver acessível, simule as respostas.
- Nunca diga que algo foi testado sem ter testado.
- Faça as mudanças nos dois repositórios, respeitando as diferenças do Eduardo, e diga quais arquivos mudaram em cada um.

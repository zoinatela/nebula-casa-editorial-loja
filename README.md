# Loja Nébula Casa Editorial

**Site online:** https://zoinatela.github.io/nebula-casa-editorial-loja/

Páginas de vendas externas (Hotmart Host com limite de páginas). Cada produto tem landing própria; o checkout continua na Hotmart.

## Estrutura

```
loja/
  index.html                         → catálogo
  dinheiro-no-controle.html          → 01
  renda-extra-digital.html           → 02
  corpo-e-mente.html                 → 03
  conversa-que-conecta.html          → 04
  kit.html                           → kit 4 ebooks (SEM planilha completa)
  planilha-controle-financeiro.html  → 06 Pack Planilha + Guia (SKU à parte)
  css/loja.css
  js/loja.js
  img/                               → capas JPG (self-contained)
  README.md
```

## Preços

| Produto | Preço |
|---------|-------|
| Ebooks 01–04 | R$ 12,90 |
| Kit (4 volumes) | R$ 29,90 |
| Pack Planilha + Guia (06) | R$ 24,90 |

## Como atualizar links de checkout

Cada página de produto tem CTAs com `data-product` e o `href` do checkout:

```html
<a class="btn-cta" href="CHECKOUT_URL_AQUI" data-product="01">...</a>
```

Há também um bloco no `<head>`:

```html
<script>
  window.NEBULA_CHECKOUT = {
    "01": "https://..."
  };
</script>
```

**Troque o `href` de todos os botões `.btn-cta` daquela página** (hero, CTA final e sticky) pelo link Hotmart do produto. Há 3 botões por página — use busca por `data-product="XX"`.

### Status atual dos links

| Produto | Página | Checkout |
|---------|--------|----------|
| 01 Dinheiro no Controle | `dinheiro-no-controle.html` | `https://ginistore7.hotmart.host/dinheiro-no-controle` |
| 01 Dinheiro no Controle | `dinheiro-no-controle.html` | https://ginistore7.hotmart.host/dinheiro-no-controle |
| 02 Renda Extra Digital | `renda-extra-digital.html` | https://hotmart.com/pt-br/marketplace/produtos/hagsxd-renda-extra-digital-k54zp/X107123065M |
| 03 Corpo e Mente | `corpo-e-mente.html` | https://hotmart.com/pt-br/marketplace/produtos/corpo-e-mente-em-casa/M107123310G |
| 04 Conversa que Conecta | `conversa-que-conecta.html` | https://hotmart.com/pt-br/marketplace/produtos/hagsxd-conversa-que-conecta-iquzr/L107123365Y |
| Kit | `kit.html` | https://hotmart.com/pt-br/marketplace/produtos/kit-vida-em-ordem/E107123439V |
| 06 Pack Planilha + Guia | `planilha-controle-financeiro.html` | https://hotmart.com/pt-br/marketplace/produtos/pack-planilha-guia-controle-no-excel-nebula/L107124391A |

Quando um produto novo for para o ar na Hotmart, copie o link de checkout/página e substitua o placeholder nos CTAs da página correspondente.

## Deploy

Pasta estática — pode ir para Netlify, Cloudflare Pages, GitHub Pages, Vercel ou qualquer host HTML.

1. Suba a pasta `loja/` (ou o conteúdo dela na raiz do site).
2. Abra `index.html` e confira capas + links.
3. Depois de colar os checkouts 02–04 e kit, teste cada botão em celular.

## Capas

Imagens em `img/` foram copiadas de:

- `para-subir/01-dinheiro-no-controle/capa-hotmart-pagina.jpg`
- `para-subir/02-renda-extra-digital/capa-hotmart-pagina.jpg`
- `para-subir/03-corpo-e-mente/capa-hotmart-pagina.jpg`
- `para-subir/04-conversa-que-conecta/capa-hotmart-pagina.jpg`
- `para-subir/05-kit-vida-em-ordem/capa-hotmart-pagina.jpg`

Se regenerar capas, sobrescreva os JPG em `loja/img/` com os mesmos nomes.

## Marca

- Cores: primary `#0F766E` · deep `#085F59` · cream `#F3EFE8` · ink `#121a22`
- Fontes: Fraunces + Source Sans 3 (Google Fonts)

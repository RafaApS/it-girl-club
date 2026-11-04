/* It Girl Club — script.js (sem módulos; funciona também via file://) */

/* 1. DADOS */
const CATEGORIAS = [
  { id: "aesthetic-wardrobe", nome: "The Aesthetic Wardrobe" },
  { id: "everyday-looks", nome: "Everyday Looks" },
  { id: "special-occasions", nome: "Special Occasions" },
  { id: "color-me-fashion", nome: "Color Me Fashion" },
  { id: "seasons-mood", nome: "Season's Mood" },
  { id: "fashion-essentials", nome: "Fashion Essentials" },
  { id: "trending-now", nome: "Trending Now" }
];
const EVENTOS = [
  { id: "copa", nome: "Copa do Mundo" },
  { id: "festa-junina", nome: "Festa Junina" },
  { id: "natal", nome: "Natal" }
];
const LOOKS_POR_GRUPO = 6;
const IDS_ESTILO = ["romantico", "streetwear", "elegante", "casual", "alternativo"]; /* A a E */
const ESTILOS = {
  romantico: {
    nome: "Romântico", frase: "Delicadeza, laços e tons pastel.",
    desc: "Looks suaves e femininos, com rendas, saias e vestidos.",
    paleta: ["Rosa", "Branco", "Lilás", "Tons pastel"], pecas: ["Vestidos", "Saias", "Blusas com renda"],
    acessorios: ["Laços", "Pérolas", "Colares delicados"], ocasioes: ["Dia a dia: vestido leve com tênis branco", "Festa: vestido delicado com laço"]
  },
  streetwear: {
    nome: "Streetwear/Urbano", frase: "Peças largas e muita atitude.",
    desc: "Visual urbano, confortável e cheio de personalidade.",
    paleta: ["Preto", "Cinza", "Vermelho", "Cores fortes"], pecas: ["Calça baggy", "Camiseta oversized", "Jaqueta"],
    acessorios: ["Correntes", "Bonés", "Anéis"], ocasioes: ["Dia a dia: baggy, camiseta grande e tênis", "Festa: look urbano com tênis estiloso"]
  },
  elegante: {
    nome: "Elegante/Clássico", frase: "Sofisticação em peças estruturadas.",
    desc: "Estilo arrumado e minimalista, com cortes bem definidos.",
    paleta: ["Preto", "Branco", "Bege", "Tons neutros"], pecas: ["Blazer", "Calça de alfaiataria", "Blusa elegante"],
    acessorios: ["Relógios", "Brincos discretos", "Bolsas elegantes"], ocasioes: ["Dia a dia: alfaiataria com blusa clean", "Festa: vestido elegante ou conjunto"]
  },
  casual: {
    nome: "Casual/Básico", frase: "Conforto e versatilidade.",
    desc: "Looks simples e descomplicados, fáceis de combinar.",
    paleta: ["Azul", "Branco", "Jeans", "Tons básicos"], pecas: ["Jeans", "Camisetas básicas", "Peças versáteis"],
    acessorios: ["Acessórios simples", "Tênis confortável"], ocasioes: ["Dia a dia: jeans, blusinha e tênis", "Festa: combinação simples e bonita"]
  },
  alternativo: {
    nome: "Alternativo/Criativo", frase: "Autenticidade e mistura de estilos.",
    desc: "Looks diferentes, com estampas, sobreposições e peças vintage.",
    paleta: ["Mistura de cores", "Estampas", "Contrastes"], pecas: ["Peças vintage", "Estampas", "Sobreposições"],
    acessorios: ["Maxi brincos", "Peças coloridas", "Acessórios únicos"], ocasioes: ["Dia a dia: sobreposições e estampas", "Festa: mistura de estilos e acessórios marcantes"]
  }
};
const PERGUNTAS = [
  { t: "Qual look você usaria para sair com suas amigas?", o: ["Vestido delicado, saia e acessórios fofos.", "Calça baggy, camiseta oversized e tênis.", "Calça de alfaiataria, blusa elegante e acessórios discretos.", "Jeans, blusinha básica e tênis confortável.", "Peças diferentes, estampas e acessórios chamativos."] },
  { t: "Quais peças você mais gosta de usar?", o: ["Saias, vestidos, rendas e laços.", "Calças largas, camisetas grandes e jaquetas.", "Blazers, calças de alfaiataria e roupas estruturadas.", "Jeans, camisetas básicas e peças versáteis.", "Peças vintage, estampas, sobreposições e acessórios únicos."] },
  { t: "Quais acessórios você escolheria?", o: ["Colares delicados, pérolas e laços.", "Correntes, anéis, bonés e bolsas estilosas.", "Relógios, brincos discretos e bolsas elegantes.", "Acessórios simples que combinem com tudo.", "Maxi brincos, peças coloridas e acessórios diferentes."] },
  { t: "Qual combinação de cores mais te agrada?", o: ["Rosa, branco, lilás e tons pastel.", "Preto, cinza, vermelho e cores fortes.", "Preto, branco, bege e tons neutros.", "Azul, branco, jeans e tons básicos.", "Uma mistura de cores, estampas e contrastes."] },
  { t: "Como você gostaria de se sentir usando suas roupas?", o: ["Delicada, romântica e feminina.", "Confiante, estilosa e cheia de atitude.", "Elegante, sofisticada e arrumada.", "Confortável, natural e descomplicada.", "Criativa, autêntica e diferente."] },
  { t: "Qual look você escolheria para uma festa?", o: ["Um vestido delicado com acessórios fofos.", "Um look urbano com peças largas e tênis estiloso.", "Um vestido elegante ou um conjunto sofisticado.", "Uma combinação simples, bonita e confortável.", "Um look ousado, com mistura de estilos e acessórios marcantes."] },
  { t: "Qual dessas inspirações mais combina com você?", o: ["Looks românticos, delicados e inspirados em tons pastel.", "Streetwear, hip-hop e moda urbana.", "Moda clássica, minimalista e sofisticada.", "Moda casual, básica e confortável.", "Moda alternativa, vintage e criativa."] }
];

/* 2. UTILITÁRIOS */
function el(tag, attrs, ...filhos) {
  const e = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([k, v]) => (k === "class" ? (e.className = v) : e.setAttribute(k, v)));
  filhos.flat().forEach((f) => e.append(f));
  return e;
}
function numero(n) { return String(n).padStart(2, "0"); }
function gerarLooks(base, grupo) {
  return Array.from({ length: LOOKS_POR_GRUPO }, (_, i) => ({
    titulo: `${grupo.nome} - Look ${numero(i + 1)}`, categoria: grupo.nome,
    imagem: `assets/${base}/${grupo.id}/look-${numero(i + 1)}.jpg`,
    descricao: "Descrição do look (texto provisório para aprovação).", lojas: []
  }));
}
/* Imagem com placeholder "imagem provisória" se o arquivo não existir */
function criarImagem(src, alt) {
  const fig = el("figure", { class: "imagem" });
  const img = el("img", { src, alt, loading: "lazy" });
  img.addEventListener("error", () => {
    img.remove(); fig.classList.add("sem-imagem");
    fig.append(el("span", { class: "selo" }, "imagem provisória"));
  });
  fig.append(img);
  return fig;
}

/* 3. TEMA CLARO/ESCURO */
function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  document.getElementById("botao-tema").setAttribute("aria-pressed", String(tema === "dark"));
}
function iniciarTema() {
  let salvo = null;
  try { salvo = localStorage.getItem("tema"); } catch (e) { }
  aplicarTema(salvo === "dark" ? "dark" : "light");
  document.getElementById("botao-tema").addEventListener("click", () => {
    const novo = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    aplicarTema(novo);
    try { localStorage.setItem("tema", novo); } catch (e) { }
  });
}

/* 4. NAVEGAÇÃO E MENU MOBILE */
function iniciarMenu() {
  const botao = document.getElementById("botao-menu"), menu = document.getElementById("menu-principal");
  const definir = (aberto) => { menu.classList.toggle("aberto", aberto); botao.setAttribute("aria-expanded", String(aberto)); botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu"); };
  botao.addEventListener("click", () => definir(!menu.classList.contains("aberto")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) definir(false); });
}

/* 5. FILEIRAS HORIZONTAIS (catálogo e eventos) */
function criarFileira(grupo, looks) {
  const scroller = el("ul", { class: "scroller", "aria-label": grupo.nome });
  looks.forEach((look) => {
    const card = el("button", { class: "card", type: "button" }, criarImagem(look.imagem, `${look.titulo} (${look.categoria})`), el("span", { class: "card-nome" }, look.titulo));
    card.addEventListener("click", () => abrirModal(look, card));
    scroller.append(el("li", {}, card));
  });
  const passo = (d) => {
    const primeiroItem = scroller.querySelector("li");
    if (!primeiroItem) return;

    const largura = primeiroItem.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(scroller).columnGap) || 0;

    scroller.scrollBy({
      left: d * (largura + gap),
      behavior: "smooth"
    });
  };
  const ant = el("button", { class: "seta seta-ant", type: "button", "aria-label": `Anterior em ${grupo.nome}` }, "‹");
  const prox = el("button", { class: "seta seta-prox", type: "button", "aria-label": `Próximo em ${grupo.nome}` }, "›");
  ant.addEventListener("click", () => passo(-1)); prox.addEventListener("click", () => passo(1));
  return el("div", { class: "fileira" }, el("h3", {}, grupo.nome), el("div", { class: "fileira-area" }, ant, scroller, prox));
}
function montarCatalogo() {
  const alvo = document.getElementById("catalogo-fileiras");
  CATEGORIAS.forEach((c) => alvo.append(criarFileira(c, gerarLooks("looks", c))));
}

/* 6. MODAL DE DETALHES */
let gatilhoModal = null;
function abrirModal(look, gatilho) {
  gatilhoModal = gatilho;
  const m = document.getElementById("modal-detalhes");
  document.getElementById("modal-imagem").replaceChildren(criarImagem(look.imagem, look.titulo));
  document.getElementById("modal-categoria").textContent = look.categoria;
  document.getElementById("modal-titulo").textContent = look.titulo;
  document.getElementById("modal-descricao").textContent = look.descricao;
  const lista = document.getElementById("modal-lojas-lista");
  lista.replaceChildren();
  if (look.lojas.length) look.lojas.forEach((l) => lista.append(el("li", {}, el("a", { href: l.url, target: "_blank", rel: "noopener" }, l.nome))));
  else lista.append(el("li", { class: "aviso" }, "Lojas ainda não definidas."));
  m.hidden = false; document.body.style.overflow = "hidden";
  m.querySelector(".modal-fechar").focus();
}
function fecharModal() {
  const m = document.getElementById("modal-detalhes");
  if (m.hidden) return;
  m.hidden = true; document.body.style.overflow = "";
  if (gatilhoModal) gatilhoModal.focus();
}
function iniciarModal() {
  const m = document.getElementById("modal-detalhes");
  m.addEventListener("click", (e) => { if (e.target.closest("[data-fechar-modal]")) fecharModal(); });
  document.addEventListener("keydown", (e) => {
    if (m.hidden) return;
    if (e.key === "Escape") return fecharModal();
    if (e.key !== "Tab") return;
    const f = [...m.querySelectorAll("a[href],button")];
    const primeiro = f[0], ultimo = f[f.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
  });
}

/* 7. QUIZ */
let respostas = [];
function calcularResultado(resp) {
  const pontos = {}; IDS_ESTILO.forEach((id) => (pontos[id] = 0));
  resp.forEach((i) => (pontos[IDS_ESTILO[i]] += 1));
  const max = Math.max(...Object.values(pontos));
  return {
    pontos,
    principais: IDS_ESTILO.filter((id) => pontos[id] === max),
    secundarios: IDS_ESTILO.filter((id) => pontos[id] < max && pontos[id] >= max - 1)
  };
}
function quizIntro() {
  const c = document.getElementById("quiz-container"); respostas = [];
  const b = el("button", { class: "btn btn-primary", type: "button" }, "Começar");
  b.addEventListener("click", () => quizPergunta());
  c.replaceChildren(el("p", { class: "quiz-intro" }, "Qual estilo mais combina com você ou com o que você gostaria de transmitir?"), b);
}
function quizPergunta() {
  const n = respostas.length, p = PERGUNTAS[n], c = document.getElementById("quiz-container");
  const barra = el("div", { class: "progresso", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(PERGUNTAS.length), "aria-valuenow": String(n) }, el("span", { style: `width:${(n / PERGUNTAS.length) * 100}%` }));
  const opcoes = el("div", { class: "opcoes" });
  p.o.forEach((texto, i) => {
    const b = el("button", { class: "opcao", type: "button", "aria-pressed": "false" }, `${"ABCDE"[i]}) ${texto}`);
    b.addEventListener("click", () => { respostas.push(i); respostas.length === PERGUNTAS.length ? quizResultado() : quizPergunta(); });
    opcoes.append(b);
  });
  const voltar = el("button", { class: "btn", type: "button" }, "Voltar");
  voltar.addEventListener("click", () => { respostas.pop(); n === 0 ? quizIntro() : quizPergunta(); });
  c.replaceChildren(barra, el("p", {}, `Pergunta ${n + 1} de ${PERGUNTAS.length}`), el("h3", { tabindex: "-1" }, p.t), opcoes, el("div", { class: "quiz-nav" }, voltar));
  c.querySelector("h3").focus({ preventScroll: true });
}
function listaChips(itens) { return el("ul", { class: "chips" }, itens.map((i) => el("li", {}, i))); }
function blocoPrincipal(id) {
  const s = ESTILOS[id];
  const galeria = el("div", { class: "galeria" }, Array.from({ length: LOOKS_POR_GRUPO }, (_, i) => criarImagem(`assets/resultados/${id}/look-${numero(i + 1)}.jpg`, `Inspiração ${s.nome} ${i + 1}`)));
  return el("article", { class: "resultado-bloco" },
    el("h3", {}, s.nome), el("p", {}, s.desc), el("p", { class: "prov" }, "texto provisório para aprovação"),
    el("h4", {}, "Paleta de cores"), listaChips(s.paleta), el("h4", {}, "Peças essenciais"), listaChips(s.pecas),
    el("h4", {}, "Acessórios característicos"), listaChips(s.acessorios),
    el("h4", {}, "Looks para diferentes ocasiões"), el("ul", {}, s.ocasioes.map((o) => el("li", {}, o))),
    el("h4", {}, "Inspirações"), galeria,
    el("h4", {}, "Onde pesquisar peças semelhantes"), el("p", { class: "aviso" }, "Lojas ainda não definidas."));
}
function quizResultado() {
  const r = calcularResultado(respostas), c = document.getElementById("quiz-container");
  c.replaceChildren(el("h3", { tabindex: "-1" }, r.principais.length > 1 ? "Seus estilos principais" : "Seu estilo principal"), ...r.principais.map(blocoPrincipal));
  if (r.secundarios.length) {
    c.append(el("h3", {}, "Estilos secundários"), el("div", { class: "sec-lista" }, r.secundarios.map((id) =>
      el("div", { class: "sec-card" }, el("h4", {}, ESTILOS[id].nome), el("p", {}, ESTILOS[id].frase), el("p", {}, `Pontuação: ${r.pontos[id]}`)))));
  }
  const refazer = el("button", { class: "btn btn-primary", type: "button" }, "Refazer o quiz");
  refazer.addEventListener("click", quizIntro);
  c.append(refazer); c.querySelector("h3").focus();
}

/* 8. EVENTOS */
function montarEventos() {
  const alvo = document.getElementById("eventos-lista");
  EVENTOS.forEach((e) => alvo.append(criarFileira(e, gerarLooks("eventos", e))));
}

/* 9. INICIALIZAÇÃO */
function iniciar() { iniciarTema(); iniciarMenu(); iniciarModal(); montarCatalogo(); quizIntro(); montarEventos(); }
if (typeof document !== "undefined") document.addEventListener("DOMContentLoaded", iniciar);

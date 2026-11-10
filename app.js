const steps = {
  backoffice: {number:"01", title:"Configuração da Loja · Backoffice", hasPdf:true},
  server: {number:"02", title:"Configuração do Servidor"},
  kds: {number:"03", title:"Configuração do KDS"},
  painel: {number:"04", title:"Configuração do Painel de Senha"},
  totem: {number:"05", title:"Instalação do Aplicativo do Totem"},
  testes: {number:"06", title:"Teste integrado"},
  entrega: {number:"07", title:"Entrega técnica"}
};
const navItems = document.querySelectorAll(".navitem");
const backofficeView = document.getElementById("backoffice-view");
const placeholderView = document.getElementById("placeholder-view");
navItems.forEach(item => item.addEventListener("click", () => {
  const key = item.dataset.step;
  navItems.forEach(nav => nav.classList.toggle("active", nav === item));
  if (key === "backoffice") {
    backofficeView.hidden = false;
    placeholderView.hidden = true;
  } else {
    const step = steps[key];
    backofficeView.hidden = true;
    placeholderView.hidden = false;
    document.getElementById("placeholder-kicker").textContent = `ETAPA ${step.number} · SW`;
    document.getElementById("placeholder-title").textContent = step.title;
  }
}));

const data = {
  yungas: [
    ["Acessar o Yungas","A franquia acessa a área Loja → Produtos para iniciar a solicitação dos dispositivos."],
    ["Selecionar dispositivos","Selecionar os equipamentos necessários para a operação da unidade."],
    ["Carrinho e intenção de compra","Conferir os itens selecionados e informar a intenção de compra e o tipo de pagamento."],
    ["Contato com fornecedores","Utilizar o chat para conversar e alinhar a aquisição com os fornecedores disponíveis."],
    ["Disponibilização dos equipamentos","Aguardar a disponibilização dos dispositivos e confirmar que a loja está pronta para a etapa SW."]
  ],
  sw: [
    ["Preparação e conferência","Conferir os pré-requisitos da loja, os equipamentos recebidos e as condições necessárias para iniciar a implantação."],
    ["Backoffice e integrações","Preparar o Backoffice e conferir as integrações previstas, incluindo Delivery Próprio e plataforma online."],
    ["Formas de pagamento","Configurar e validar as formas de pagamento previstas para a operação."],
    ["Impressora e TEF / GSurf","Configurar e validar impressora, TEF e GSurf conforme o cenário da unidade."],
    ["Configuração dos totens","Realizar a configuração dos equipamentos de autoatendimento conforme o procedimento SW."],
    ["Configurador do PDV","Aplicar as configurações necessárias no PDV da unidade."],
    ["KDS","Configurar e validar o fluxo de pedidos no KDS."],
    ["Painel de Senhas","Configurar e validar a exibição e o fluxo do painel de senhas."],
    ["Teste integrado","Executar os testes do fluxo completo, verificando a comunicação entre os componentes."],
    ["Entrega técnica","Concluir a validação com a loja e realizar a entrega técnica da solução."]
  ]
};
const storeKey = "subway-autoatendimento-checks-v1";
let checks = JSON.parse(localStorage.getItem(storeKey) || "{}");
let activeId = null;
const modal = document.getElementById("detail");
function makeSteps(lane, target, offset=0){
  const root = document.getElementById(target);
  data[lane].forEach((item,i)=>{
    const id = lane+"-"+i;
    const button = document.createElement("button");
    button.className = "step";
    button.type = "button";
    button.dataset.id = id;
    button.innerHTML = `<span class="num">ETAPA ${String(i+1).padStart(2,"0")}</span><h3></h3><p></p><span class="status"></span>`;
    button.querySelector("h3").textContent = item[0];
    button.querySelector("p").textContent = item[1].length > 76 ? item[1].slice(0,73)+"…" : item[1];
    button.addEventListener("click",()=>openDetail(lane,i,id));
    root.appendChild(button);
  });
}
function render(){
  const total = data.yungas.length + data.sw.length;
  const done = Object.values(checks).filter(Boolean).length;
  document.getElementById("total").textContent = total;
  document.getElementById("done").textContent = done;
  document.getElementById("percent").textContent = Math.round(done/total*100)+"%";
  document.getElementById("progress").style.width = (done/total*100)+"%";
  document.querySelectorAll(".step").forEach(el=>{
    const complete = !!checks[el.dataset.id];
    el.classList.toggle("completed",complete);
    el.querySelector(".status").textContent = complete ? "CONCLUÍDA" : "ABRIR ETAPA  →";
  });
}
function openDetail(lane,i,id){
  activeId=id;
  document.getElementById("modal-kicker").textContent = lane==="yungas" ? "FRANQUIA · YUNGAS" : "IMPLANTAÇÃO · SW";
  document.getElementById("modal-title").textContent = data[lane][i][0];
  document.getElementById("modal-desc").textContent = data[lane][i][1];
  document.getElementById("complete").checked = !!checks[id];
  modal.showModal();
}
document.getElementById("complete").addEventListener("change",e=>{
  if(!activeId)return;
  checks[activeId]=e.target.checked;
  localStorage.setItem(storeKey,JSON.stringify(checks));
  render();
});
document.getElementById("close").addEventListener("click",()=>modal.close());
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});
document.getElementById("reset").addEventListener("click",()=>{
  if(confirm("Limpar todas as marcações salvas neste navegador?")){
    checks={};localStorage.removeItem(storeKey);render();
  }
});
makeSteps("yungas","yungas");
makeSteps("sw","sw");
render();

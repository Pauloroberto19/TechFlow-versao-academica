const KEY_TICKETS="techflow_tickets", KEY_STOCK="techflow_stock", KEY_MOVES="techflow_moves";

const demoTickets=[
{id:1001,nome:"Mariana Souza",setor:"Financeiro",email:"mariana@empresa.com",contato:"2045",equipamento:"Impressora",tipo:"Problema de impressão",prioridade:"alta",descricao:"A impressora não está imprimindo e apresenta erro de conexão com o computador.",status:"aberto",data:"Hoje, 08:42"},
{id:1002,nome:"Carlos Mendes",setor:"RH",email:"carlos@empresa.com",contato:"2031",equipamento:"Notebook",tipo:"Lentidão / travamento",prioridade:"media",descricao:"Notebook está muito lento desde o início do expediente e alguns aplicativos travam.",status:"andamento",data:"Hoje, 09:18"},
{id:1003,nome:"Ana Paula",setor:"Operações",email:"ana@empresa.com",contato:"2018",equipamento:"Monitor",tipo:"Monitor sem imagem",prioridade:"critica",descricao:"Monitor do posto 04 ficou sem imagem e o colaborador está impossibilitado de trabalhar.",status:"aberto",data:"Hoje, 10:05"},
{id:1004,nome:"Rafael Lima",setor:"Comercial",email:"rafael@empresa.com",contato:"2022",equipamento:"Cabos / Rede",tipo:"Sem acesso à internet / rede",prioridade:"baixa",descricao:"Cabo de rede apresentou mau contato, mas existe uma estação reserva disponível.",status:"resolvido",data:"Ontem, 16:20"}
];

const demoStock=[
{id:1,nome:"Mouse USB",categoria:"Periféricos",qty:18,local:"Almoxarifado"},
{id:2,nome:"Teclado USB",categoria:"Periféricos",qty:12,local:"Almoxarifado"},
{id:3,nome:"Cabo de Rede CAT6",categoria:"Cabos",qty:35,local:"Armário A"},
{id:4,nome:"Cabo HDMI",categoria:"Cabos",qty:7,local:"Armário A"},
{id:5,nome:"Toner Impressora HP",categoria:"Impressão",qty:3,local:"Armário B"},
{id:6,nome:"Monitor 24\"",categoria:"Informática",qty:5,local:"Sala de TI"}
];

const demoMoves=[
{item:"Mouse USB",tipo:"entrada",qty:10,data:"Hoje, 08:10"},
{item:"Cabo de Rede CAT6",tipo:"saida",qty:4,data:"Hoje, 09:00"},
{item:"Monitor 24\"",tipo:"entrada",qty:2,data:"Ontem, 15:40"},
{item:"Toner Impressora HP",tipo:"saida",qty:2,data:"Ontem, 14:15"},
{item:"Teclado USB",tipo:"saida",qty:3,data:"Ontem, 10:20"},
{item:"Cabo HDMI",tipo:"entrada",qty:5,data:"02/10/2026"}
];

function get(key,fallback){const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback}
function set(key,value){localStorage.setItem(key,JSON.stringify(value))}
function initData(){
  if(!localStorage.getItem(KEY_TICKETS))set(KEY_TICKETS,demoTickets);
  if(!localStorage.getItem(KEY_STOCK))set(KEY_STOCK,demoStock);
  if(!localStorage.getItem(KEY_MOVES))set(KEY_MOVES,demoMoves);
}
initData();

function renderTickets(){
 const list=document.getElementById("ticketList"); if(!list)return;
 const filter=document.getElementById("filterStatus")?.value||"todos";
 const tickets=get(KEY_TICKETS,[]).filter(t=>filter==="todos"||t.status===filter);
 document.getElementById("totalTickets").textContent=get(KEY_TICKETS,[]).length;
 document.getElementById("urgentTickets").textContent=get(KEY_TICKETS,[]).filter(t=>["alta","critica"].includes(t.prioridade)&&t.status!=="resolvido").length;
 document.getElementById("resolvedTickets").textContent=get(KEY_TICKETS,[]).filter(t=>t.status==="resolvido").length;
 document.getElementById("openTickets").textContent=get(KEY_TICKETS,[]).filter(t=>t.status!=="resolvido").length;
 if(!tickets.length){list.innerHTML='<div class="empty-state">Nenhum chamado encontrado.</div>';return}
 const labels={baixa:"Baixa",media:"Média",alta:"Alta",critica:"Crítica"};
 const status={aberto:"Aberto",andamento:"Em atendimento",resolvido:"Resolvido"};
 list.innerHTML=tickets.map(t=>`<article class="ticket ${t.prioridade}">
 <div class="ticket-top"><div><div class="ticket-title">#${t.id} • ${t.equipamento} — ${t.tipo}</div><div class="ticket-meta">${t.nome} • ${t.setor} • ${t.data}</div></div>
 <span class="priority ${t.prioridade}">! ${labels[t.prioridade]}</span></div>
 <div class="ticket-desc">${escapeHtml(t.descricao)}</div>
 <div class="ticket-bottom"><span class="status">${status[t.status]}</span><div class="ticket-actions">${t.status!=="resolvido"?`<button onclick="advanceTicket(${t.id})">${t.status==="aberto"?"Assumir chamado":"Resolver chamado"}</button>`:"<span style='color:#168457;font-size:10px;font-weight:800'>✓ Finalizado</span>"}</div></div>
 </article>`).join("");
}
function advanceTicket(id){
 const arr=get(KEY_TICKETS,[]);const t=arr.find(x=>x.id===id);if(!t)return;
 t.status=t.status==="aberto"?"andamento":"resolvido";set(KEY_TICKETS,arr);renderTickets();
}
function renderChart(){
 const el=document.getElementById("bars");if(!el)return;
 const moves=get(KEY_MOVES,[]); document.getElementById("movementTotal").textContent=moves.reduce((s,m)=>s+m.qty,0);
 const groups=["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];
 const values=groups.map((_,i)=>({entry:(moves.filter(m=>m.tipo==="entrada").reduce((s,m)=>s+m.qty,0)+i)%20,exit:(moves.filter(m=>m.tipo==="saida").reduce((s,m)=>s+m.qty,0)+i*2)%15}));
 el.innerHTML=values.map((v,i)=>`<div class="bar-group"><div class="bar entry" style="height:${Math.max(4,v.entry*7)}px" title="Entrada: ${v.entry}"></div><div class="bar exit" style="height:${Math.max(4,v.exit*7)}px" title="Saída: ${v.exit}"></div></div>`).join("");
}
function renderStock(){
 const table=document.getElementById("stockTable");if(!table)return;
 const search=(document.getElementById("stockSearch")?.value||"").toLowerCase();
 const stock=get(KEY_STOCK,[]).filter(x=>x.nome.toLowerCase().includes(search)||x.categoria.toLowerCase().includes(search));
 document.getElementById("stockTypes").textContent=get(KEY_STOCK,[]).length;
 document.getElementById("stockUnits").textContent=get(KEY_STOCK,[]).reduce((s,x)=>s+x.qty,0);
 document.getElementById("stockOut").textContent=get(KEY_MOVES,[]).filter(m=>m.tipo==="saida").reduce((s,m)=>s+m.qty,0);
 document.getElementById("lowStock").textContent=get(KEY_STOCK,[]).filter(x=>x.qty<=3).length;
 table.innerHTML=stock.map(x=>{let st=x.qty===0?"Esgotado":x.qty<=3?"Estoque baixo":"Disponível";let cl=x.qty===0?"empty":x.qty<=3?"warning":"ok";return `<tr><td><div class="stock-name">${escapeHtml(x.nome)}</div><div class="stock-category">${x.categoria}</div></td><td>${x.categoria}</td><td class="qty">${x.qty}</td><td>${x.local}</td><td class="stock-status ${cl}">${st}</td><td><button class="table-action" onclick="quickExit(${x.id})">Retirar</button></td></tr>`}).join("");
 renderHistory();
}
function renderHistory(){
 const el=document.getElementById("movementHistory");if(!el)return;
 el.innerHTML=get(KEY_MOVES,[]).slice(0,8).map(m=>`<div class="history-item"><b>${m.item}</b><small><span class="${m.tipo}-text">${m.tipo==="entrada"?"↑ Entrada":"↓ Saída"} • ${m.qty} un.</span> • ${m.data}</small></div>`).join("");
}
function quickExit(id){
 const stock=get(KEY_STOCK,[]);const item=stock.find(x=>x.id===id);if(!item||item.qty<=0){alert("Este item não possui quantidade disponível.");return}
 item.qty--;set(KEY_STOCK,stock);const moves=get(KEY_MOVES,[]);moves.unshift({item:item.nome,tipo:"saida",qty:1,data:"Agora"});set(KEY_MOVES,moves);renderStock();renderChart();
}
function setupStock(){
 const open=document.getElementById("openStockModal"),modal=document.getElementById("stockModal"),close=document.getElementById("closeStockModal"),form=document.getElementById("stockForm");
 if(!open)return;
 open.onclick=()=>modal.classList.remove("hidden");close.onclick=()=>modal.classList.add("hidden");
 form.onsubmit=e=>{e.preventDefault();const nome=document.getElementById("stockItem").value.trim(),cat=document.getElementById("stockCategory").value,tipo=document.getElementById("movementType").value,qty=Number(document.getElementById("stockQty").value),local=document.getElementById("stockLocation").value.trim()||"Almoxarifado";let stock=get(KEY_STOCK,[]),item=stock.find(x=>x.nome.toLowerCase()===nome.toLowerCase());
 if(tipo==="saida"&&(!item||item.qty<qty)){alert("Quantidade insuficiente em estoque.");return}
 if(!item){if(tipo==="saida"){alert("Item não cadastrado.");return}item={id:Date.now(),nome,categoria:cat,qty:0,local};stock.push(item)}
 item.qty+=tipo==="entrada"?qty:-qty;item.categoria=cat;item.local=local;set(KEY_STOCK,stock);
 const moves=get(KEY_MOVES,[]);moves.unshift({item:nome,tipo,qty,data:"Agora"});set(KEY_MOVES,moves);form.reset();document.getElementById("stockQty").value=1;modal.classList.add("hidden");renderStock();renderChart();};
 document.getElementById("stockSearch").addEventListener("input",renderStock);
 renderStock();
}
function setupTicketForm(){
 const form=document.getElementById("ticketForm");if(!form)return;
 form.onsubmit=e=>{e.preventDefault();const equipamento=document.querySelector('input[name="equipamento"]:checked')?.value;
 const ticket={id:Date.now(),nome:document.getElementById("nome").value.trim(),setor:document.getElementById("setor").value.trim(),email:document.getElementById("email").value.trim(),contato:document.getElementById("contato").value.trim(),equipamento,tipo:document.getElementById("tipo").value,prioridade:document.getElementById("prioridade").value,descricao:document.getElementById("descricao").value.trim(),status:"aberto",data:new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})};
 const tickets=get(KEY_TICKETS,[]);tickets.unshift(ticket);set(KEY_TICKETS,tickets);alert("Chamado enviado com sucesso! A equipe de gestão já pode visualizá-lo.");location.href="gestao.html";};
}
function escapeHtml(str){return String(str).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
document.getElementById("filterStatus")?.addEventListener("change",renderTickets);
document.getElementById("clearData")?.addEventListener("click",()=>{if(confirm("Restaurar os dados de demonstração?")){localStorage.removeItem(KEY_TICKETS);localStorage.removeItem(KEY_STOCK);localStorage.removeItem(KEY_MOVES);initData();renderTickets();renderStock();renderChart();}});
setupTicketForm();renderTickets();renderChart();setupStock();

// ==================== AUTENTICAÇÃO ADMINISTRATIVA ====================
function setupAdminLogin(){
  const form=document.getElementById("loginForm");
  if(!form)return;
  if(sessionStorage.getItem("techflow_admin")==="true"){
    location.replace("gestao.html"); return;
  }
  form.onsubmit=e=>{
    e.preventDefault();
    const user=document.getElementById("adminUser").value.trim();
    const pass=document.getElementById("adminPass").value;
    const error=document.getElementById("loginError");

    // Credencial demonstrativa do projeto acadêmico
    if(user==="paulo gestao" && pass==="123456"){
      sessionStorage.setItem("techflow_admin","true");
      location.href="gestao.html";

    }else{

      error.classList.remove("hidden");
      document.getElementById("adminPass").value="";
    }
  };
}
function logoutAdmin(){
  sessionStorage.removeItem("techflow_admin");
  location.href="login.html";
}
setupAdminLogin();

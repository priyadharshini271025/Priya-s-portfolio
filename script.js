/* ===== EDIT YOUR CONTENT HERE ===== */
const SITE={
 name:"Priyadharshini", title:"Digital Marketer",
 headline:"I Turn Digital Strategies Into Measurable Growth.",
 sub:"Helping brands grow through performance marketing, SEO, Google Ads, Meta Ads, and data-driven digital strategies.",
 aboutTitle:"A marketer who answers to the numbers",
 about:"I’m Priyadharshini, a results-driven Digital Marketer passionate about helping businesses build their online presence and achieve measurable growth. I specialize in paid advertising, search engine optimization, audience targeting, campaign optimization, and digital strategy.",
 stats:[{n:90,s:"%",l:"Google Ads"},{n:90,s:"%",l:"Meta Ads"},{n:85,s:"%",l:"SEO"},{n:90,s:"%",l:"Digital Strategy"}],
 services:[
  {i:"🎯",t:"Google Ads",l:["Search campaigns","Display campaigns","Campaign optimization","Conversion-focused advertising"]},
  {i:"📣",t:"Meta Ads",l:["Facebook & Instagram advertising","Audience targeting","Lead generation","Campaign optimization"]},
  {i:"🔍",t:"SEO",l:["Keyword research","On-page SEO","Technical SEO","Organic growth strategies"]},
  {i:"🧭",t:"Digital Marketing Strategy",l:["Marketing strategy","Audience research","Performance tracking","Data-driven optimization"]}],
 skills:[["Google Ads",90],["Meta Ads",90],["SEO",85],["Keyword Research",85],["Digital Marketing Strategy",90],["Analytics & Reporting",80]],
 /* PLACEHOLDER projects: replace titles, text, metrics and links */
 projects:[
  {t:"Placeholder: Local Retail Search Campaign",c:"Google Ads",d:"Replace with a short description of the campaign goal and approach.",tags:["Google Ads","Search"],m:[["+00%","Conversions"],["0.0x","ROAS"]],url:"contact.html"},
  {t:"Placeholder: Lead Generation Funnel",c:"Meta Ads",d:"Replace with a short description of the audience and creative strategy.",tags:["Meta Ads","Lead Gen"],m:[["−00%","Cost per lead"],["000","Leads"]],url:"contact.html"},
  {t:"Placeholder: Website Organic Growth",c:"SEO",d:"Replace with a short description of the keyword and content plan.",tags:["SEO","Keyword Research"],m:[["+000%","Organic traffic"],["#0","Top ranking"]],url:"contact.html"},
  {t:"Placeholder: Product Launch Campaign",c:"Google Ads",d:"Replace with a short description of the launch plan.",tags:["Google Ads","Display"],m:[["0.0%","CTR"],["+00%","Sales"]],url:"contact.html"},
  {t:"Placeholder: Brand Awareness on Instagram",c:"Meta Ads",d:"Replace with a short description of the reach strategy.",tags:["Meta Ads","Instagram"],m:[["0.0M","Reach"],["−00%","CPM"]],url:"contact.html"},
  {t:"Placeholder: Technical SEO Audit",c:"SEO",d:"Replace with a short description of the audit findings and fixes.",tags:["SEO","Technical SEO"],m:[["+00","Pages indexed"],["−0s","Load time"]],url:"contact.html"}],
 why:[{i:"📊",t:"Data-driven approach",d:"Every decision starts with the numbers."},{i:"🚀",t:"Performance-focused campaigns",d:"Budgets are tied to outcomes, not impressions."},{i:"💡",t:"Creative marketing strategies",d:"Fresh angles that stand out in a crowded feed."},{i:"🔄",t:"Continuous optimization",d:"Tests, learnings and refinements every week."},{i:"🏆",t:"Focus on measurable results",d:"Clear reports on what worked and what’s next."}],
 contact:[{i:"✉️",l:"Email",v:"hello@example.com",h:"mailto:hello@example.com"},{i:"💼",l:"LinkedIn",v:"linkedin.com/in/your-profile",h:"https://linkedin.com/"},{i:"📸",l:"Instagram",v:"@your.handle",h:"https://instagram.com/"},{i:"📞",l:"Phone",v:"+91 00000 00000",h:"tel:+910000000000"}],
 social:[["in","https://linkedin.com/","LinkedIn"],["ig","https://instagram.com/","Instagram"],["@","mailto:hello@example.com","Email"]],
 nav:[["Home","index.html"],["About","about.html"],["Services","services.html"],["Skills","skills.html"],["Projects","projects.html"],["Contact","contact.html"]]
};
/* ===== RENDER ===== */
const D=document.createElement("div"),$=s=>document.querySelector(s)||D,E=t=>t.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const logo=`${SITE.name}<i>.</i>`;$("#logo").innerHTML=$("#fLogo").innerHTML=logo;
$("#nv").innerHTML=SITE.nav.map(([a,b])=>`<li><a href="${b}">${a}</a></li>`).join("");
$("#heroTxt").innerHTML=`<h1>${E(SITE.name)}</h1><div class="role">${E(SITE.title)}</div><h2><span class="gold">${E(SITE.headline)}</span></h2><p>${E(SITE.sub)}</p><div class="cta"><a class="btn p" href="projects.html">View My Work</a><a class="btn g" href="contact.html">Contact Me</a></div>`;
$("#abT").textContent=SITE.aboutTitle;$("#abP").textContent=SITE.about;
$("#stats").innerHTML=SITE.stats.map((s,i)=>`<div class="card rv" style="--d:${i*.1}s"><div class="num"><span data-n="${s.n}">0</span>${s.s}</div><div class="lb">${E(s.l)}</div></div>`).join("");
$("#svc").innerHTML=SITE.services.map((s,i)=>`<article class="card rv" style="--d:${i*.1}s"><div class="ic">${s.i}</div><h3>${E(s.t)}</h3><ul>${s.l.map(x=>`<li>${E(x)}</li>`).join("")}</ul></article>`).join("");
$("#sk").innerHTML=SITE.skills.map(([n,v],i)=>`<div class="rv" style="--d:${i*.08}s"><div class="t"><span>${E(n)}</span><span>${v}%</span></div><div class="tr" role="progressbar" aria-label="${E(n)}" aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100"><i data-w="${v}"></i></div></div>`).join("");
const cats=["All",...new Set(SITE.projects.map(p=>p.c))];
$("#fl").innerHTML=cats.map((c,i)=>`<button aria-pressed="${i==0}" data-c="${c}">${c}</button>`).join("");
$("#pg").innerHTML=SITE.projects.map(p=>`<article class="card pj" data-c="${p.c}"><div class="im">Project image placeholder</div><div class="pb"><h3>${E(p.t)}</h3><p>${E(p.d)}</p><div class="tg">${p.tags.map(t=>`<span>${E(t)}</span>`).join("")}</div><div class="mt">${p.m.map(m=>`<div><b>${E(m[0])}</b><small>${E(m[1])}</small></div>`).join("")}</div><a href="${p.url}">View Project</a></div></article>`).join("");
$("#wy").innerHTML=SITE.why.map((w,i)=>`<article class="card rv" style="--d:${i*.08}s"><div class="ic">${w.i}</div><h3>${E(w.t)}</h3><p class="lb" style="margin:0">${E(w.d)}</p></article>`).join("");
$("#ci").innerHTML=SITE.contact.map(c=>`<a href="${c.h}"><span class="ic" style="margin:0;width:46px;height:46px">${c.i}</span><span><small>${c.l}</small>${E(c.v)}</span></a>`).join("");
$("#fn").innerHTML=SITE.nav.map(([a,b])=>`<li><a href="${b}">${a}</a></li>`).join("");
$("#so").innerHTML=SITE.social.map(s=>`<a href="${s[1]}" aria-label="${s[2]}" rel="noopener">${s[0]}</a>`).join("");
$("#cp").textContent=`© 2026 ${SITE.name}. All Rights Reserved.`;
/* ===== BEHAVIOR ===== */
const cur=location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".links a").forEach(a=>{if(a.getAttribute("href")==cur){a.classList.add("on");a.setAttribute("aria-current","page")}});
const hd=$("#hd"),nv=$("#nv"),bg=$("#bg");
addEventListener("scroll",()=>hd.classList.toggle("s",scrollY>20),{passive:true});
bg.onclick=()=>{const o=nv.classList.toggle("o");bg.setAttribute("aria-expanded",o);bg.textContent=o?"✕":"☰"};
nv.onclick=e=>{if(e.target.tagName=="A"){nv.classList.remove("o");bg.textContent="☰";bg.setAttribute("aria-expanded",false)}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add("in");
 t.querySelectorAll("[data-w]").forEach(b=>b.style.width=b.dataset.w+"%");
 t.querySelectorAll("[data-n]").forEach(c=>{const n=+c.dataset.n,s=performance.now();(function f(x){const p=Math.min((x-s)/1400,1);c.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)});
 io.unobserve(t)}),{threshold:.2});
document.querySelectorAll(".rv").forEach(r=>io.observe(r));
$("#fl").onclick=e=>{const b=e.target.closest("button");if(!b)return;
 document.querySelectorAll("#fl button").forEach(x=>x.setAttribute("aria-pressed",x==b));
 document.querySelectorAll(".pj").forEach(p=>{const show=b.dataset.c=="All"||p.dataset.c==b.dataset.c;
  if(show){p.classList.remove("hide");requestAnimationFrame(()=>p.classList.remove("fade"))}
  else{p.classList.add("fade");setTimeout(()=>p.classList.contains("fade")&&p.classList.add("hide"),300)}})};
/* form validation */
const fm=$("#fm"),rules={name:v=>v.trim().length>1||"Enter your name.",email:v=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)||"Enter a valid email address, like name@example.com.",phone:v=>!v||/^[+\d][\d\s()-]{6,}$/.test(v)||"Use digits only, for example +91 98765 43210.",message:v=>v.trim().length>=10||"Write at least 10 characters."};
const chk=f=>{const r=rules[f.name](f.value),ok=r===true;f.setAttribute("aria-invalid",!ok);f.nextElementSibling.textContent=ok?"":r;return ok};
fm.querySelectorAll("input,textarea").forEach(f=>f.addEventListener("blur",()=>chk(f)));
fm.onsubmit=e=>{e.preventDefault();const ok=[...fm.querySelectorAll("input,textarea")].map(chk).every(Boolean),o=$("#ok");
 if(!ok){fm.querySelector("[aria-invalid=true]").focus();o.textContent="";return}
 /* Connect to your form service here (e.g. Formspree) */
 o.textContent="Message ready. Connect a form service to deliver it.";fm.reset()};
/* particles */
(()=>{if(!document.querySelector("#fx")||matchMedia("(prefers-reduced-motion:reduce)").matches)return;const c=$("#fx"),x=c.getContext("2d");let w,h,p=[];
 const rs=()=>{w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;p=Array.from({length:Math.min(60,w/18|0)},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.6+.4,v:Math.random()*.25+.05,g:Math.random()>.5}))};
 rs();addEventListener("resize",rs);
 (function d(){x.clearRect(0,0,w,h);p.forEach(q=>{q.y-=q.v;if(q.y<0){q.y=h;q.x=Math.random()*w}x.fillStyle=q.g?"rgba(212,175,55,.5)":"rgba(139,92,246,.5)";x.beginPath();x.arc(q.x,q.y,q.r,0,7);x.fill()});requestAnimationFrame(d)})()})();
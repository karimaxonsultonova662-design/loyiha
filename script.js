:root{--ink:#232B27;--moss:#5E6F5A;--sage:#A9B7A0;--stone:#E7E4DC;--paper:#F8F7F3;--brass:#A88B50;--dusk:#51657A;--r:14px}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{font:400 16px/1.6 Manrope,system-ui,sans-serif;color:var(--ink);background:var(--paper)}
h1,h2,h3,.logo{font-family:'Cormorant Garamond',Georgia,serif;line-height:1.1}
a{color:inherit;text-decoration:none}
button,select,input,textarea{font:inherit;color:inherit}
button{cursor:pointer}
:focus-visible{outline:2px solid var(--dusk);outline-offset:2px}
.top{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:20px;padding:12px 5vw;background:rgba(248,247,243,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--stone)}
.logo{font-size:1.9rem;font-weight:700;color:var(--moss)}
.top nav{display:flex;gap:18px;margin-left:auto}
.top nav a{font-weight:600;font-size:.95rem}
.top nav i{color:var(--brass)}
.acts{display:flex;gap:8px}
.ghost{background:none;border:1px solid var(--stone);border-radius:99px;padding:8px 14px;position:relative}
.ghost em{position:absolute;top:-6px;right:-6px;background:var(--brass);color:#fff;font:700 .7rem/1 Manrope;border-radius:99px;padding:4px 6px;font-style:normal}
.hero{display:grid;grid-template-columns:1.2fr 1fr;gap:5vw;padding:7vh 5vw;align-items:center;min-height:78vh}
.hero h1{font-size:clamp(2.6rem,6vw,4.8rem);font-weight:700;margin-bottom:18px}
.hero p{max-width:46ch;color:#4a554f;margin-bottom:26px}
.cta{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-flex;gap:8px;align-items:center;justify-content:center;background:var(--moss);color:#fff;border:0;border-radius:99px;padding:13px 24px;font-weight:700;transition:background .2s}
.btn:hover{background:var(--ink)}
.btn.alt{background:none;color:var(--ink);border:1px solid var(--ink)}
.btn.alt:hover{background:var(--stone)}
.perks{display:flex;gap:20px;flex-wrap:wrap;list-style:none;padding:0;margin-top:30px;font-size:.88rem;color:#4a554f}
.perks i{color:var(--brass);margin-right:4px}
.strips{display:flex;gap:10px;height:min(62vh,520px)}
.strips button{flex:1;border:0;border-radius:90px 90px var(--r) var(--r);display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:24px 0;color:#fff;font:700 1.25rem 'Cormorant Garamond',serif;transition:flex .35s}
.strips button:hover{flex:1.6}
.strips i{font-size:1.4rem}
.sec{padding:8vh 5vw}
.sec h2{font-size:2.4rem;margin-bottom:26px}
.sec h2 i{color:var(--brass);font-size:1.6rem;margin-right:6px}
.ai{display:grid;grid-template-columns:minmax(280px,380px) 1fr;gap:28px}
.aiin{display:flex;flex-direction:column;gap:12px;background:var(--stone);padding:20px;border-radius:var(--r)}
.aiin small{color:#5a655f;font-size:.8rem}
.drop{display:grid;place-items:center;aspect-ratio:1;border:2px dashed var(--sage);border-radius:var(--r);background:var(--paper);cursor:pointer;overflow:hidden;text-align:center;padding:10px}
.drop img{width:100%;height:100%;object-fit:cover;border-radius:10px}
.drop i{display:block;font-size:2rem;color:var(--moss);margin-bottom:6px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
select,input,textarea{width:100%;padding:11px 14px;border:1px solid #cfcbc0;border-radius:10px;background:#fff}
.aiout{background:#fff;border:1px solid var(--stone);border-radius:var(--r);padding:22px;min-height:300px}
.aiout h3{font-size:1.7rem;margin-bottom:6px}
.hint,.load{color:#6b756f}.err{color:#9b3b2e}
.pal{display:flex;gap:8px;margin:14px 0}
.pal span{width:46px;height:46px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px var(--stone)}
.filters{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px}
.filters button{background:none;border:1px solid #cfcbc0;border-radius:99px;padding:8px 18px}
.filters button.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.filters select{width:auto;border-radius:99px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:22px}
.aiout .grid{margin-top:18px;grid-template-columns:repeat(auto-fill,minmax(170px,1fr))}
.card{background:#fff;border-radius:var(--r);overflow:hidden;border:1px solid var(--stone)}
.ph{aspect-ratio:4/5;display:grid;place-items:center;color:rgba(255,255,255,.85);font-size:3.4rem}
.ph img{width:100%;height:100%;object-fit:cover}
.in{padding:14px}
.in small{color:var(--brass);font-weight:700}
.in h3{font:600 .98rem/1.3 Manrope;margin:2px 0 10px;min-height:2.6em}
.row{display:flex;justify-content:space-between;align-items:center}
.add{width:40px;height:40px;border-radius:50%;border:0;background:var(--moss);color:#fff}
.add:hover{background:var(--brass)}
footer{padding:30px 5vw;background:var(--ink);color:#d9d6cc;text-align:center;font-size:.9rem}
footer i{color:var(--sage);margin:0 4px}
dialog{border:0;border-radius:var(--r);padding:26px;width:min(420px,92vw);background:var(--paper);color:var(--ink)}
dialog::backdrop{background:rgba(35,43,39,.5)}
dialog form:not(.x){display:flex;flex-direction:column;gap:12px}
.x{position:absolute;top:10px;right:10px}
.x button{background:none;border:0;font-size:1.2rem}
.tabs{display:flex;gap:6px;margin-bottom:16px}
.tabs button{flex:1;padding:9px;border:0;background:var(--stone);border-radius:10px;font-weight:600}
.tabs .on{background:var(--moss);color:#fff}
.drawer{margin:0 0 0 auto;height:100vh;max-height:100vh;border-radius:var(--r) 0 0 var(--r);display:flex;flex-direction:column;gap:14px}
.drawer[open]{display:flex}
.drawer h3,dialog h3{font-size:1.7rem}
#cartList{flex:1;overflow:auto;display:flex;flex-direction:column;gap:12px}
.ci{display:flex;gap:12px;align-items:center;font-size:.9rem}
.ci .sw{width:48px;height:48px;border-radius:10px;display:grid;place-items:center;color:#fff;flex:none}
.ci div{flex:1}.ci b{display:block}
.ci button{width:28px;height:28px;border-radius:50%;border:1px solid #cfcbc0;background:#fff}
.tot{display:flex;justify-content:space-between;font-size:1.05rem}
#toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,90px);background:var(--ink);color:#fff;padding:12px 22px;border-radius:99px;transition:transform .3s;z-index:20}
#toast.on{transform:translate(-50%,0)}
@media(max-width:800px){.hero,.ai{grid-template-columns:1fr}.strips{height:240px}.top nav{display:none}.top .acts{margin-left:auto}.hero{min-height:0}}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}:root{--ink:#232B27;--moss:#5E6F5A;--sage:#A9B7A0;--stone:#E7E4DC;--paper:#F8F7F3;--brass:#A88B50;--dusk:#51657A;--r:14px}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{font:400 16px/1.6 Manrope,system-ui,sans-serif;color:var(--ink);background:var(--paper)}
h1,h2,h3,.logo{font-family:'Cormorant Garamond',Georgia,serif;line-height:1.1}
a{color:inherit;text-decoration:none}
button,select,input,textarea{font:inherit;color:inherit}
button{cursor:pointer}
:focus-visible{outline:2px solid var(--dusk);outline-offset:2px}
.top{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:20px;padding:12px 5vw;background:rgba(248,247,243,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--stone)}
.logo{font-size:1.9rem;font-weight:700;color:var(--moss)}
.top nav{display:flex;gap:18px;margin-left:auto}
.top nav a{font-weight:600;font-size:.95rem}
.top nav i{color:var(--brass)}
.acts{display:flex;gap:8px}
.ghost{background:none;border:1px solid var(--stone);border-radius:99px;padding:8px 14px;position:relative}
.ghost em{position:absolute;top:-6px;right:-6px;background:var(--brass);color:#fff;font:700 .7rem/1 Manrope;border-radius:99px;padding:4px 6px;font-style:normal}
.hero{display:grid;grid-template-columns:1.2fr 1fr;gap:5vw;padding:7vh 5vw;align-items:center;min-height:78vh}
.hero h1{font-size:clamp(2.6rem,6vw,4.8rem);font-weight:700;margin-bottom:18px}
.hero p{max-width:46ch;color:#4a554f;margin-bottom:26px}
.cta{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-flex;gap:8px;align-items:center;justify-content:center;background:var(--moss);color:#fff;border:0;border-radius:99px;padding:13px 24px;font-weight:700;transition:background .2s}
.btn:hover{background:var(--ink)}
.btn.alt{background:none;color:var(--ink);border:1px solid var(--ink)}
.btn.alt:hover{background:var(--stone)}
.perks{display:flex;gap:20px;flex-wrap:wrap;list-style:none;padding:0;margin-top:30px;font-size:.88rem;color:#4a554f}
.perks i{color:var(--brass);margin-right:4px}
.strips{display:flex;gap:10px;height:min(62vh,520px)}
.strips button{flex:1;border:0;border-radius:90px 90px var(--r) var(--r);display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:24px 0;color:#fff;font:700 1.25rem 'Cormorant Garamond',serif;transition:flex .35s}
.strips button:hover{flex:1.6}
.strips i{font-size:1.4rem}
.sec{padding:8vh 5vw}
.sec h2{font-size:2.4rem;margin-bottom:26px}
.sec h2 i{color:var(--brass);font-size:1.6rem;margin-right:6px}
.ai{display:grid;grid-template-columns:minmax(280px,380px) 1fr;gap:28px}
.aiin{display:flex;flex-direction:column;gap:12px;background:var(--stone);padding:20px;border-radius:var(--r)}
.aiin small{color:#5a655f;font-size:.8rem}
.drop{display:grid;place-items:center;aspect-ratio:1;border:2px dashed var(--sage);border-radius:var(--r);background:var(--paper);cursor:pointer;overflow:hidden;text-align:center;padding:10px}
.drop img{width:100%;height:100%;object-fit:cover;border-radius:10px}
.drop i{display:block;font-size:2rem;color:var(--moss);margin-bottom:6px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
select,input,textarea{width:100%;padding:11px 14px;border:1px solid #cfcbc0;border-radius:10px;background:#fff}
.aiout{background:#fff;border:1px solid var(--stone);border-radius:var(--r);padding:22px;min-height:300px}
.aiout h3{font-size:1.7rem;margin-bottom:6px}
.hint,.load{color:#6b756f}.err{color:#9b3b2e}
.pal{display:flex;gap:8px;margin:14px 0}
.pal span{width:46px;height:46px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px var(--stone)}
.filters{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px}
.filters button{background:none;border:1px solid #cfcbc0;border-radius:99px;padding:8px 18px}
.filters button.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.filters select{width:auto;border-radius:99px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:22px}
.aiout .grid{margin-top:18px;grid-template-columns:repeat(auto-fill,minmax(170px,1fr))}
.card{background:#fff;border-radius:var(--r);overflow:hidden;border:1px solid var(--stone)}
.ph{aspect-ratio:4/5;display:grid;place-items:center;color:rgba(255,255,255,.85);font-size:3.4rem}
.ph img{width:100%;height:100%;object-fit:cover}
.in{padding:14px}
.in small{color:var(--brass);font-weight:700}
.in h3{font:600 .98rem/1.3 Manrope;margin:2px 0 10px;min-height:2.6em}
.row{display:flex;justify-content:space-between;align-items:center}
.add{width:40px;height:40px;border-radius:50%;border:0;background:var(--moss);color:#fff}
.add:hover{background:var(--brass)}
footer{padding:30px 5vw;background:var(--ink);color:#d9d6cc;text-align:center;font-size:.9rem}
footer i{color:var(--sage);margin:0 4px}
dialog{border:0;border-radius:var(--r);padding:26px;width:min(420px,92vw);background:var(--paper);color:var(--ink)}
dialog::backdrop{background:rgba(35,43,39,.5)}
dialog form:not(.x){display:flex;flex-direction:column;gap:12px}
.x{position:absolute;top:10px;right:10px}
.x button{background:none;border:0;font-size:1.2rem}
.tabs{display:flex;gap:6px;margin-bottom:16px}
.tabs button{flex:1;padding:9px;border:0;background:var(--stone);border-radius:10px;font-weight:600}
.tabs .on{background:var(--moss);color:#fff}
.drawer{margin:0 0 0 auto;height:100vh;max-height:100vh;border-radius:var(--r) 0 0 var(--r);display:flex;flex-direction:column;gap:14px}
.drawer[open]{display:flex}
.drawer h3,dialog h3{font-size:1.7rem}
#cartList{flex:1;overflow:auto;display:flex;flex-direction:column;gap:12px}
.ci{display:flex;gap:12px;align-items:center;font-size:.9rem}
.ci .sw{width:48px;height:48px;border-radius:10px;display:grid;place-items:center;color:#fff;flex:none}
.ci div{flex:1}.ci b{display:block}
.ci button{width:28px;height:28px;border-radius:50%;border:1px solid #cfcbc0;background:#fff}
.tot{display:flex;justify-content:space-between;font-size:1.05rem}
#toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,90px);background:var(--ink);color:#fff;padding:12px 22px;border-radius:99px;transition:transform .3s;z-index:20}
#toast.on{transform:translate(-50%,0)}
@media(max-width:800px){.hero,.ai{grid-template-columns:1fr}.strips{height:240px}.top nav{display:none}.top .acts{margin-left:auto}.hero{min-height:0}}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}:root{--ink:#232B27;--moss:#5E6F5A;--sage:#A9B7A0;--stone:#E7E4DC;--paper:#F8F7F3;--brass:#A88B50;--dusk:#51657A;--r:14px}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{font:400 16px/1.6 Manrope,system-ui,sans-serif;color:var(--ink);background:var(--paper)}
h1,h2,h3,.logo{font-family:'Cormorant Garamond',Georgia,serif;line-height:1.1}
a{color:inherit;text-decoration:none}
button,select,input,textarea{font:inherit;color:inherit}
button{cursor:pointer}
:focus-visible{outline:2px solid var(--dusk);outline-offset:2px}
.top{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:20px;padding:12px 5vw;background:rgba(248,247,243,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--stone)}
.logo{font-size:1.9rem;font-weight:700;color:var(--moss)}
.top nav{display:flex;gap:18px;margin-left:auto}
.top nav a{font-weight:600;font-size:.95rem}
.top nav i{color:var(--brass)}
.acts{display:flex;gap:8px}
.ghost{background:none;border:1px solid var(--stone);border-radius:99px;padding:8px 14px;position:relative}
.ghost em{position:absolute;top:-6px;right:-6px;background:var(--brass);color:#fff;font:700 .7rem/1 Manrope;border-radius:99px;padding:4px 6px;font-style:normal}
.hero{display:grid;grid-template-columns:1.2fr 1fr;gap:5vw;padding:7vh 5vw;align-items:center;min-height:78vh}
.hero h1{font-size:clamp(2.6rem,6vw,4.8rem);font-weight:700;margin-bottom:18px}
.hero p{max-width:46ch;color:#4a554f;margin-bottom:26px}
.cta{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-flex;gap:8px;align-items:center;justify-content:center;background:var(--moss);color:#fff;border:0;border-radius:99px;padding:13px 24px;font-weight:700;transition:background .2s}
.btn:hover{background:var(--ink)}
.btn.alt{background:none;color:var(--ink);border:1px solid var(--ink)}
.btn.alt:hover{background:var(--stone)}
.perks{display:flex;gap:20px;flex-wrap:wrap;list-style:none;padding:0;margin-top:30px;font-size:.88rem;color:#4a554f}
.perks i{color:var(--brass);margin-right:4px}
.strips{display:flex;gap:10px;height:min(62vh,520px)}
.strips button{flex:1;border:0;border-radius:90px 90px var(--r) var(--r);display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:24px 0;color:#fff;font:700 1.25rem 'Cormorant Garamond',serif;transition:flex .35s}
.strips button:hover{flex:1.6}
.strips i{font-size:1.4rem}
.sec{padding:8vh 5vw}
.sec h2{font-size:2.4rem;margin-bottom:26px}
.sec h2 i{color:var(--brass);font-size:1.6rem;margin-right:6px}
.ai{display:grid;grid-template-columns:minmax(280px,380px) 1fr;gap:28px}
.aiin{display:flex;flex-direction:column;gap:12px;background:var(--stone);padding:20px;border-radius:var(--r)}
.aiin small{color:#5a655f;font-size:.8rem}
.drop{display:grid;place-items:center;aspect-ratio:1;border:2px dashed var(--sage);border-radius:var(--r);background:var(--paper);cursor:pointer;overflow:hidden;text-align:center;padding:10px}
.drop img{width:100%;height:100%;object-fit:cover;border-radius:10px}
.drop i{display:block;font-size:2rem;color:var(--moss);margin-bottom:6px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
select,input,textarea{width:100%;padding:11px 14px;border:1px solid #cfcbc0;border-radius:10px;background:#fff}
.aiout{background:#fff;border:1px solid var(--stone);border-radius:var(--r);padding:22px;min-height:300px}
.aiout h3{font-size:1.7rem;margin-bottom:6px}
.hint,.load{color:#6b756f}.err{color:#9b3b2e}
.pal{display:flex;gap:8px;margin:14px 0}
.pal span{width:46px;height:46px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px var(--stone)}
.filters{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px}
.filters button{background:none;border:1px solid #cfcbc0;border-radius:99px;padding:8px 18px}
.filters button.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.filters select{width:auto;border-radius:99px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:22px}
.aiout .grid{margin-top:18px;grid-template-columns:repeat(auto-fill,minmax(170px,1fr))}
.card{background:#fff;border-radius:var(--r);overflow:hidden;border:1px solid var(--stone)}
.ph{aspect-ratio:4/5;display:grid;place-items:center;color:rgba(255,255,255,.85);font-size:3.4rem}
.ph img{width:100%;height:100%;object-fit:cover}
.in{padding:14px}
.in small{color:var(--brass);font-weight:700}
.in h3{font:600 .98rem/1.3 Manrope;margin:2px 0 10px;min-height:2.6em}
.row{display:flex;justify-content:space-between;align-items:center}
.add{width:40px;height:40px;border-radius:50%;border:0;background:var(--moss);color:#fff}
.add:hover{background:var(--brass)}
footer{padding:30px 5vw;background:var(--ink);color:#d9d6cc;text-align:center;font-size:.9rem}
footer i{color:var(--sage);margin:0 4px}
dialog{border:0;border-radius:var(--r);padding:26px;width:min(420px,92vw);background:var(--paper);color:var(--ink)}
dialog::backdrop{background:rgba(35,43,39,.5)}
dialog form:not(.x){display:flex;flex-direction:column;gap:12px}
.x{position:absolute;top:10px;right:10px}
.x button{background:none;border:0;font-size:1.2rem}
.tabs{display:flex;gap:6px;margin-bottom:16px}
.tabs button{flex:1;padding:9px;border:0;background:var(--stone);border-radius:10px;font-weight:600}
.tabs .on{background:var(--moss);color:#fff}
.drawer{margin:0 0 0 auto;height:100vh;max-height:100vh;border-radius:var(--r) 0 0 var(--r);display:flex;flex-direction:column;gap:14px}
.drawer[open]{display:flex}
.drawer h3,dialog h3{font-size:1.7rem}
#cartList{flex:1;overflow:auto;display:flex;flex-direction:column;gap:12px}
.ci{display:flex;gap:12px;align-items:center;font-size:.9rem}
.ci .sw{width:48px;height:48px;border-radius:10px;display:grid;place-items:center;color:#fff;flex:none}
.ci div{flex:1}.ci b{display:block}
.ci button{width:28px;height:28px;border-radius:50%;border:1px solid #cfcbc0;background:#fff}
.tot{display:flex;justify-content:space-between;font-size:1.05rem}
#toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,90px);background:var(--ink);color:#fff;padding:12px 22px;border-radius:99px;transition:transform .3s;z-index:20}
#toast.on{transform:translate(-50%,0)}
@media(max-width:800px){.hero,.ai{grid-template-columns:1fr}.strips{height:240px}.top nav{display:none}.top .acts{margin-left:auto}.hero{min-height:0}}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}:root{--ink:#232B27;--moss:#5E6F5A;--sage:#A9B7A0;--stone:#E7E4DC;--paper:#F8F7F3;--brass:#A88B50;--dusk:#51657A;--r:14px}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{font:400 16px/1.6 Manrope,system-ui,sans-serif;color:var(--ink);background:var(--paper)}
h1,h2,h3,.logo{font-family:'Cormorant Garamond',Georgia,serif;line-height:1.1}
a{color:inherit;text-decoration:none}
button,select,input,textarea{font:inherit;color:inherit}
button{cursor:pointer}
:focus-visible{outline:2px solid var(--dusk);outline-offset:2px}
.top{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:20px;padding:12px 5vw;background:rgba(248,247,243,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--stone)}
.logo{font-size:1.9rem;font-weight:700;color:var(--moss)}
.top nav{display:flex;gap:18px;margin-left:auto}
.top nav a{font-weight:600;font-size:.95rem}
.top nav i{color:var(--brass)}
.acts{display:flex;gap:8px}
.ghost{background:none;border:1px solid var(--stone);border-radius:99px;padding:8px 14px;position:relative}
.ghost em{position:absolute;top:-6px;right:-6px;background:var(--brass);color:#fff;font:700 .7rem/1 Manrope;border-radius:99px;padding:4px 6px;font-style:normal}
.hero{display:grid;grid-template-columns:1.2fr 1fr;gap:5vw;padding:7vh 5vw;align-items:center;min-height:78vh}
.hero h1{font-size:clamp(2.6rem,6vw,4.8rem);font-weight:700;margin-bottom:18px}
.hero p{max-width:46ch;color:#4a554f;margin-bottom:26px}
.cta{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-flex;gap:8px;align-items:center;justify-content:center;background:var(--moss);color:#fff;border:0;border-radius:99px;padding:13px 24px;font-weight:700;transition:background .2s}
.btn:hover{background:var(--ink)}
.btn.alt{background:none;color:var(--ink);border:1px solid var(--ink)}
.btn.alt:hover{background:var(--stone)}
.perks{display:flex;gap:20px;flex-wrap:wrap;list-style:none;padding:0;margin-top:30px;font-size:.88rem;color:#4a554f}
.perks i{color:var(--brass);margin-right:4px}
.strips{display:flex;gap:10px;height:min(62vh,520px)}
.strips button{flex:1;border:0;border-radius:90px 90px var(--r) var(--r);display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:24px 0;color:#fff;font:700 1.25rem 'Cormorant Garamond',serif;transition:flex .35s}
.strips button:hover{flex:1.6}
.strips i{font-size:1.4rem}
.sec{padding:8vh 5vw}
.sec h2{font-size:2.4rem;margin-bottom:26px}
.sec h2 i{color:var(--brass);font-size:1.6rem;margin-right:6px}
.ai{display:grid;grid-template-columns:minmax(280px,380px) 1fr;gap:28px}
.aiin{display:flex;flex-direction:column;gap:12px;background:var(--stone);padding:20px;border-radius:var(--r)}
.aiin small{color:#5a655f;font-size:.8rem}
.drop{display:grid;place-items:center;aspect-ratio:1;border:2px dashed var(--sage);border-radius:var(--r);background:var(--paper);cursor:pointer;overflow:hidden;text-align:center;padding:10px}
.drop img{width:100%;height:100%;object-fit:cover;border-radius:10px}
.drop i{display:block;font-size:2rem;color:var(--moss);margin-bottom:6px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
select,input,textarea{width:100%;padding:11px 14px;border:1px solid #cfcbc0;border-radius:10px;background:#fff}
.aiout{background:#fff;border:1px solid var(--stone);border-radius:var(--r);padding:22px;min-height:300px}
.aiout h3{font-size:1.7rem;margin-bottom:6px}
.hint,.load{color:#6b756f}.err{color:#9b3b2e}
.pal{display:flex;gap:8px;margin:14px 0}
.pal span{width:46px;height:46px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px var(--stone)}
.filters{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px}
.filters button{background:none;border:1px solid #cfcbc0;border-radius:99px;padding:8px 18px}
.filters button.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.filters select{width:auto;border-radius:99px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:22px}
.aiout .grid{margin-top:18px;grid-template-columns:repeat(auto-fill,minmax(170px,1fr))}
.card{background:#fff;border-radius:var(--r);overflow:hidden;border:1px solid var(--stone)}
.ph{aspect-ratio:4/5;display:grid;place-items:center;color:rgba(255,255,255,.85);font-size:3.4rem}
.ph img{width:100%;height:100%;object-fit:cover}
.in{padding:14px}
.in small{color:var(--brass);font-weight:700}
.in h3{font:600 .98rem/1.3 Manrope;margin:2px 0 10px;min-height:2.6em}
.row{display:flex;justify-content:space-between;align-items:center}
.add{width:40px;height:40px;border-radius:50%;border:0;background:var(--moss);color:#fff}
.add:hover{background:var(--brass)}
footer{padding:30px 5vw;background:var(--ink);color:#d9d6cc;text-align:center;font-size:.9rem}
footer i{color:var(--sage);margin:0 4px}
dialog{border:0;border-radius:var(--r);padding:26px;width:min(420px,92vw);background:var(--paper);color:var(--ink)}
dialog::backdrop{background:rgba(35,43,39,.5)}
dialog form:not(.x){display:flex;flex-direction:column;gap:12px}
.x{position:absolute;top:10px;right:10px}
.x button{background:none;border:0;font-size:1.2rem}
.tabs{display:flex;gap:6px;margin-bottom:16px}
.tabs button{flex:1;padding:9px;border:0;background:var(--stone);border-radius:10px;font-weight:600}
.tabs .on{background:var(--moss);color:#fff}
.drawer{margin:0 0 0 auto;height:100vh;max-height:100vh;border-radius:var(--r) 0 0 var(--r);display:flex;flex-direction:column;gap:14px}
.drawer[open]{display:flex}
.drawer h3,dialog h3{font-size:1.7rem}
#cartList{flex:1;overflow:auto;display:flex;flex-direction:column;gap:12px}
.ci{display:flex;gap:12px;align-items:center;font-size:.9rem}
.ci .sw{width:48px;height:48px;border-radius:10px;display:grid;place-items:center;color:#fff;flex:none}
.ci div{flex:1}.ci b{display:block}
.ci button{width:28px;height:28px;border-radius:50%;border:1px solid #cfcbc0;background:#fff}
.tot{display:flex;justify-content:space-between;font-size:1.05rem}
#toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,90px);background:var(--ink);color:#fff;padding:12px 22px;border-radius:99px;transition:transform .3s;z-index:20}
#toast.on{transform:translate(-50%,0)}
@media(max-width:800px){.hero,.ai{grid-template-columns:1fr}.strips{height:240px}.top nav{display:none}.top .acts{margin-left:auto}.hero{min-height:0}}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}

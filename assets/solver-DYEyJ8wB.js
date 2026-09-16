function e(){return typeof SharedArrayBuffer<`u`&&typeof navigator<`u`&&!!navigator.hardwareConcurrency}function t(e){return async function*(t,n=1,r=[]){let i=[],a=()=>{},o;for(e(t,n,r,e=>{i.push(e),a()}).then(e=>{o=e,a()});o===void 0||i.length>0;)i.length>0?yield i.shift():await new Promise(e=>a=e);return o}}function n(e){let n,r,i=Promise.resolve();function a(e){r?.resolve({Result:`ERROR`,Error:String(e)}),r=void 0}function o(){if(!n){let t=n=e();t.onReply(e=>{n===t&&(e.type===`model`?r?.onModel?.(e.model):(r?.resolve(e.result),r=void 0))}),t.onError(e=>{n===t&&(n=void 0,a(e),t.terminate())})}return n}function s(e,t){return new Promise(n=>{r={resolve:n,onModel:t};try{let t=o();t.ref?.(),t.postMessage(e)}catch(e){a(e)}}).finally(()=>n?.unref?.())}function c(e,t){let n=i.then(()=>s(e,t));return i=n.catch(()=>{}),n}async function l(...e){let[t,n,r,i]=e;return await c({type:`run`,args:[t,n,r],stream:!!i},i)}async function u(e){let t=await c({type:`init`,wasmUrl:e});if(t?.Result===`ERROR`)throw Error(t.Error)}async function d(e){if(n){let e=n.terminate();n=void 0,a(`Aborted by restart().`),await e}e!==void 0&&await u(e)}return{run:l,init:u,restart:d,stream:t(l)}}function r(){if(new URL(import.meta.url).origin===location.origin)return new Worker(new URL(new URL(`run.worker-Dcf80R0t.js`,import.meta.url).href,``+import.meta.url),{type:`module`});let e=new URL(`data:text/javascript;base64,aW1wb3J0IHsgc2VydmUgfSBmcm9tICIuL3dvcmtlci5qcyI7CmNvbnN0IHBvc3QgPSBwb3N0TWVzc2FnZTsKY29uc3QgaGFuZGxlID0gc2VydmUocG9zdCk7Cm9ubWVzc2FnZSA9IChldmVudCkgPT4gaGFuZGxlKGV2ZW50LmRhdGEpOwo=`,``+import.meta.url),t=`
    const queued = [];
    self.onmessage = (event) => queued.push(event);
    try {
      await import(${JSON.stringify(e.href)});
    } catch (error) {
      self.onmessage = () =>
        self.postMessage({
          type: "result",
          result: { Result: "ERROR", Error: String(error) },
        });
    }
    queued.forEach((event) => self.onmessage(event));
  `,n=new Blob([t],{type:`text/javascript`});return new Worker(URL.createObjectURL(n),{type:`module`})}var{run:i,init:a,restart:o,stream:s}=n(()=>{let e=r();return{postMessage:t=>e.postMessage(t),onReply:t=>e.onmessage=e=>t(e.data),onError:t=>e.addEventListener(`error`,e=>t(e.message||e)),terminate:()=>e.terminate()}}),c={run:i,init:a,restart:o,stream:s,supportsThreads:e},l=`
% This program decides planning eligibility, never deployed security.
reason(F,C,missing,K) :- feature(F), candidate(C), needs(F,K), not supports(C,K).
reason(F,C,excluded,C) :- feature(F), candidate(C), forbidden_candidate(C).
reason(F,C,infrastructure,R) :- feature(F), candidate(C), introduces(C,R), forbidden_resource(R).
reason(F,C,protection,W) :- feature(F), candidate(C), required_protection(F,W), not proposes(C,W).
blocked(F,C) :- reason(F,C,_,_).
eligible(F,C) :- feature(F), candidate(C), not blocked(F,C).
`,u=`
1 { chosen(F,C) : eligible(F,C) } 1 :- feature(F).
used(C) :- chosen(_,C).
check(F,functional,K) :- chosen(F,_), needs(F,K).
check(F,criterion,Q) :- chosen(F,_), review(F,R), has_check(R,Q).
check(F,implementation,Q) :- chosen(F,C), candidate_check(C,Q).
distinct(N) :- N = #count { C : used(C) }.
#show chosen/2.
#show check/3.
#show distinct/1.
`;function d(e,t=!1){let n=t=>e.entities.get(t).id,r=(e,...t)=>`${e}(${t.map(n).join(`,`)}).`,i=e.features.map(e=>r(`feature`,e));i.push(...e.candidates.map(e=>r(`candidate`,e)));let a={needs:`needs`,provides:`supports`,protection:`proposes`,introduces:`introduces`,forbidResource:`forbidden_resource`,forbidCandidate:`forbidden_candidate`,review:`review`,hasCheck:`has_check`,candidateCheck:`candidate_check`};for(let t of e.statements)a[t.kind]&&i.push(r(a[t.kind],...t.args));for(let t of e.rows(`review`))for(let n of e.rows(`requirementWeakness`).filter(e=>e.args[0]===t.args[1]))i.push(r(`required_protection`,t.args[0],n.args[1]));return i.join(`
`)+`
`+l+(t?`
#show reason/4.
#show eligible/2.
`:u)}var f=null;async function p(){await c.restart()}async function m(e,t=0){if(f)throw Error(`An analysis is already running.`);let n;try{let r=c.run(e,t,[`--warn=none`]);f=r;let i=await Promise.race([r,new Promise((e,t)=>{n=setTimeout(()=>{c.restart(),t(Error(`The 15-second solver limit was reached. No complete result is available.`))},15e3)})]);if(i.Result===`ERROR`)throw Error(i.Error);return i}finally{clearTimeout(n),f=null}}function h(e){let t=e.match(/^(\w+)\((.*)\)$/);return t?{predicate:t[1],args:t[2].split(`,`)}:null}function g(e){return(e.Call||[]).flatMap(e=>e.Witnesses||[]).map(e=>e.Value.map(h).filter(Boolean))}function _(e){return e.Result===`UNSATISFIABLE`||e.Result===`SATISFIABLE`&&e.Models?.More===`no`}export{p as cancelSolve,_ as complete,d as programFor,m as solve,g as witnesses};
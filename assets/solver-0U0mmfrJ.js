import{r as e}from"./rolldown-runtime-C0FnF6B9.js";function t(){return typeof SharedArrayBuffer<`u`&&typeof navigator<`u`&&!!navigator.hardwareConcurrency}function n(e){return async function*(t,n=1,r=[]){let i=[],a=()=>{},o;for(e(t,n,r,e=>{i.push(e),a()}).then(e=>{o=e,a()});o===void 0||i.length>0;)i.length>0?yield i.shift():await new Promise(e=>a=e);return o}}function r(e){let t,r,i=Promise.resolve();function a(e){r?.resolve({Result:`ERROR`,Error:String(e)}),r=void 0}function o(){if(!t){let n=t=e();n.onReply(e=>{t===n&&(e.type===`model`?r?.onModel?.(e.model):(r?.resolve(e.result),r=void 0))}),n.onError(e=>{t===n&&(t=void 0,a(e),n.terminate())})}return t}function s(e,n){return new Promise(t=>{r={resolve:t,onModel:n};try{let t=o();t.ref?.(),t.postMessage(e)}catch(e){a(e)}}).finally(()=>t?.unref?.())}function c(e,t){let n=i.then(()=>s(e,t));return i=n.catch(()=>{}),n}async function l(...e){let[t,n,r,i]=e;return await c({type:`run`,args:[t,n,r],stream:!!i},i)}async function u(e){let t=await c({type:`init`,wasmUrl:e});if(t?.Result===`ERROR`)throw Error(t.Error)}async function d(e){if(t){let e=t.terminate();t=void 0,a(`Aborted by restart().`),await e}e!==void 0&&await u(e)}return{run:l,init:u,restart:d,stream:n(l)}}function i(){if(new URL(import.meta.url).origin===location.origin)return new Worker(new URL(new URL(`run.worker-Dcf80R0t.js`,import.meta.url).href,``+import.meta.url),{type:`module`});let e=new URL(`data:text/javascript;base64,aW1wb3J0IHsgc2VydmUgfSBmcm9tICIuL3dvcmtlci5qcyI7CmNvbnN0IHBvc3QgPSBwb3N0TWVzc2FnZTsKY29uc3QgaGFuZGxlID0gc2VydmUocG9zdCk7Cm9ubWVzc2FnZSA9IChldmVudCkgPT4gaGFuZGxlKGV2ZW50LmRhdGEpOwo=`,``+import.meta.url),t=`
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
  `,n=new Blob([t],{type:`text/javascript`});return new Worker(URL.createObjectURL(n),{type:`module`})}var{run:a,init:o,restart:s,stream:c}=r(()=>{let e=i();return{postMessage:t=>e.postMessage(t),onReply:t=>e.onmessage=e=>t(e.data),onError:t=>e.addEventListener(`error`,e=>t(e.message||e)),terminate:()=>e.terminate()}}),l={run:a,init:o,restart:s,stream:c,supportsThreads:t},u=e({RULES:()=>d,atom:()=>_,cancelSolve:()=>h,complete:()=>y,programFor:()=>p,solve:()=>g,witnesses:()=>v}),d=`
% This program decides planning eligibility, never deployed security.
reason(F,C,missing,K) :- feature(F), candidate(C), needs(F,K), not supports(C,K).
reason(F,C,excluded,C) :- feature(F), candidate(C), forbidden_candidate(C).
reason(F,C,infrastructure,R) :- feature(F), candidate(C), introduces(C,R), forbidden_resource(R).
reason(F,C,protection,W) :- feature(F), candidate(C), required_protection(F,W), not proposes(C,W).
blocked(F,C) :- reason(F,C,_,_).
eligible(F,C) :- feature(F), candidate(C), not blocked(F,C).
`,f=`
1 { chosen(F,C) : eligible(F,C) } 1 :- feature(F).
used(C) :- chosen(_,C).
check(F,functional,K) :- chosen(F,_), needs(F,K).
check(F,criterion,Q) :- chosen(F,_), review(F,R), has_check(R,Q).
check(F,implementation,Q) :- chosen(F,C), candidate_check(C,Q).
distinct(N) :- N = #count { C : used(C) }.
#show chosen/2.
#show check/3.
#show distinct/1.
`;function p(e,t=!1){let n=t=>e.entities.get(t).id,r=(e,...t)=>`${e}(${t.map(n).join(`,`)}).`,i=e.features.map(e=>r(`feature`,e));i.push(...e.candidates.map(e=>r(`candidate`,e)));let a={needs:`needs`,provides:`supports`,protection:`proposes`,introduces:`introduces`,forbidResource:`forbidden_resource`,forbidCandidate:`forbidden_candidate`,review:`review`,hasCheck:`has_check`,candidateCheck:`candidate_check`};for(let t of e.statements)a[t.kind]&&i.push(r(a[t.kind],...t.args));for(let t of e.rows(`review`))for(let n of e.rows(`requirementWeakness`).filter(e=>e.args[0]===t.args[1]))i.push(r(`required_protection`,t.args[0],n.args[1]));return i.join(`
`)+`
`+d+(t?`
#show reason/4.
#show eligible/2.
`:f)}var m=null;async function h(){await l.restart()}async function g(e,t=0){if(m)throw Error(`An analysis is already running.`);let n;try{let r=l.run(e,t,[`--warn=none`]);m=r;let i=await Promise.race([r,new Promise((e,t)=>{n=setTimeout(()=>{l.restart(),t(Error(`The 15-second solver limit was reached. No complete result is available.`))},15e3)})]);if(i.Result===`ERROR`)throw Error(i.Error);return i}finally{clearTimeout(n),m=null}}function _(e){let t=e.match(/^(\w+)\((.*)\)$/);return t?{predicate:t[1],args:t[2].split(`,`)}:null}function v(e){return(e.Call||[]).flatMap(e=>e.Witnesses||[]).map(e=>e.Value.map(_).filter(Boolean))}function y(e){return e.Result===`UNSATISFIABLE`||e.Result===`SATISFIABLE`&&e.Models?.More===`no`}export{u as a,g as i,y as n,v as o,p as r,h as t};
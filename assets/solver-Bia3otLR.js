var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);function f(){return typeof SharedArrayBuffer<`u`&&typeof navigator<`u`&&!!navigator.hardwareConcurrency}function p(e){return async function*(t,n=1,r=[]){let i=[],a=()=>{},o;for(e(t,n,r,e=>{i.push(e),a()}).then(e=>{o=e,a()});o===void 0||i.length>0;)i.length>0?yield i.shift():await new Promise(e=>a=e);return o}}function m(e){let t,n,r=Promise.resolve();function i(e){n?.resolve({Result:`ERROR`,Error:String(e)}),n=void 0}function a(){if(!t){let r=t=e();r.onReply(e=>{t===r&&(e.type===`model`?n?.onModel?.(e.model):(n?.resolve(e.result),n=void 0))}),r.onError(e=>{t===r&&(t=void 0,i(e),r.terminate())})}return t}function o(e,r){return new Promise(t=>{n={resolve:t,onModel:r};try{let t=a();t.ref?.(),t.postMessage(e)}catch(e){i(e)}}).finally(()=>t?.unref?.())}function s(e,t){let n=r.then(()=>o(e,t));return r=n.catch(()=>{}),n}async function c(...e){let[t,n,r,i]=e;return await s({type:`run`,args:[t,n,r],stream:!!i},i)}async function l(e){let t=await s({type:`init`,wasmUrl:e});if(t?.Result===`ERROR`)throw Error(t.Error)}async function u(e){if(t){let e=t.terminate();t=void 0,i(`Aborted by restart().`),await e}e!==void 0&&await l(e)}return{run:c,init:l,restart:u,stream:p(c)}}function h(){if(new URL(import.meta.url).origin===location.origin)return new Worker(new URL(new URL(`run.worker-Dcf80R0t.js`,import.meta.url).href,``+import.meta.url),{type:`module`});let e=new URL(`data:text/javascript;base64,aW1wb3J0IHsgc2VydmUgfSBmcm9tICIuL3dvcmtlci5qcyI7CmNvbnN0IHBvc3QgPSBwb3N0TWVzc2FnZTsKY29uc3QgaGFuZGxlID0gc2VydmUocG9zdCk7Cm9ubWVzc2FnZSA9IChldmVudCkgPT4gaGFuZGxlKGV2ZW50LmRhdGEpOwo=`,``+import.meta.url),t=`
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
  `,n=new Blob([t],{type:`text/javascript`});return new Worker(URL.createObjectURL(n),{type:`module`})}var{run:g,init:_,restart:v,stream:y}=m(()=>{let e=h();return{postMessage:t=>e.postMessage(t),onReply:t=>e.onmessage=e=>t(e.data),onError:t=>e.addEventListener(`error`,e=>t(e.message||e)),terminate:()=>e.terminate()}}),b={run:g,init:_,restart:v,stream:y,supportsThreads:f},x=c({RULES:()=>S,atom:()=>O,cancelSolve:()=>E,complete:()=>A,programFor:()=>w,solve:()=>D,witnesses:()=>k}),S=`
% This program decides planning eligibility, never deployed security.
reason(F,C,missing,K) :- feature(F), candidate(C), needs(F,K), not supports(C,K).
reason(F,C,excluded,C) :- feature(F), candidate(C), forbidden_candidate(C).
reason(F,C,infrastructure,R) :- feature(F), candidate(C), introduces(C,R), forbidden_resource(R).
reason(F,C,protection,W) :- feature(F), candidate(C), required_protection(F,W), not proposes(C,W).
blocked(F,C) :- reason(F,C,_,_).
eligible(F,C) :- feature(F), candidate(C), not blocked(F,C).
`,C=`
1 { chosen(F,C) : eligible(F,C) } 1 :- feature(F).
used(C) :- chosen(_,C).
check(F,functional,K) :- chosen(F,_), needs(F,K).
check(F,criterion,Q) :- chosen(F,_), review(F,R), has_check(R,Q).
check(F,implementation,Q) :- chosen(F,C), candidate_check(C,Q).
distinct(N) :- N = #count { C : used(C) }.
#show chosen/2.
#show check/3.
#show distinct/1.
`;function w(e,t=!1){let n=t=>e.entities.get(t).id,r=(e,...t)=>`${e}(${t.map(n).join(`,`)}).`,i=e.features.map(e=>r(`feature`,e));i.push(...e.candidates.map(e=>r(`candidate`,e)));let a={needs:`needs`,provides:`supports`,protection:`proposes`,introduces:`introduces`,forbidResource:`forbidden_resource`,forbidCandidate:`forbidden_candidate`,review:`review`,hasCheck:`has_check`,candidateCheck:`candidate_check`};for(let t of e.statements)a[t.kind]&&i.push(r(a[t.kind],...t.args));for(let t of e.rows(`review`))for(let n of e.rows(`requirementWeakness`).filter(e=>e.args[0]===t.args[1]))i.push(r(`required_protection`,t.args[0],n.args[1]));return i.join(`
`)+`
`+S+(t?`
#show reason/4.
#show eligible/2.
`:C)}var T=null;async function E(){await b.restart()}async function D(e,t=0){if(T)throw Error(`An analysis is already running.`);let n;try{let r=b.run(e,t,[`--warn=none`]);T=r;let i=await Promise.race([r,new Promise((e,t)=>{n=setTimeout(()=>{b.restart(),t(Error(`The 15-second solver limit was reached. No complete result is available.`))},15e3)})]);if(i.Result===`ERROR`)throw Error(i.Error);return i}finally{clearTimeout(n),T=null}}function O(e){let t=e.match(/^(\w+)\((.*)\)$/);return t?{predicate:t[1],args:t[2].split(`,`)}:null}function k(e){return(e.Call||[]).flatMap(e=>e.Witnesses||[]).map(e=>e.Value.map(O).filter(Boolean))}function A(e){return e.Result===`UNSATISFIABLE`||e.Result===`SATISFIABLE`&&e.Models?.More===`no`}export{x as a,o as c,u as d,D as i,c as l,A as n,k as o,w as r,s,E as t,d as u};
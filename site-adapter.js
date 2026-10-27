/* Standalone static hosting adapter. Full-page navigation keeps the captured
   Next pages independent of the original site's RSC server. Animations remain
   owned by the original page runtime and retain their timing and geometry. */
(()=>{
 const pages=new Set(['/','/menu','/spices','/contact']);
 document.addEventListener('click',event=>{
  const link=event.target.closest?.('a[href]');if(!link||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||link.target==='_blank')return;
  const url=new URL(link.href,location.href);const path=url.pathname.replace(/\/$/,'')||'/';
  if(url.origin===location.origin&&pages.has(path)&&!url.hash){
   const current=location.pathname.replace(/\/$/,'')||'/';
   if(path===current)return;
   event.preventDefault();event.stopImmediatePropagation();
   document.documentElement.style.transition='opacity 180ms ease';document.documentElement.style.opacity='.15';
   setTimeout(()=>location.assign(path),180);
  }
 },true);
 // The original reference form simulates success. Explicitly keep this demo
 // local and never suggest that a message was delivered to the restaurant.
 document.addEventListener('submit',event=>{
  if(!(event.target instanceof HTMLFormElement))return;
  event.preventDefault();event.stopImmediatePropagation();
  const form=event.target,email=form.querySelector('[name="email"]'),message=form.querySelector('[name="message"]');
  let status=form.querySelector('[data-demo-status]');if(!status){status=document.createElement('p');status.dataset.demoStatus='';status.setAttribute('role','status');status.style.cssText='color:#ffd750;font-size:20px;line-height:1.3';form.append(status)}
  if(!email?.value||!email.checkValidity()){status.textContent='Please enter a valid email address.';email?.focus();return}
  if(!message?.value.trim()||message.value.trim().length<10){status.textContent='Please write at least 10 characters.';message?.focus();return}
  status.textContent='Demo only — your message has not been sent. Contact delivery is not connected yet.';
 },true);
 addEventListener('pageshow',()=>{document.documentElement.style.opacity='1'});
})();

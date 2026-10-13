// Privacy-conscious conversion hooks. These send no form field values or other personal data.
function trackNcsEvent(eventName, parameters = {}) {
  const eventData = { event: eventName, ...parameters };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);
  if (typeof window.gtag === "function") window.gtag("event", eventName, parameters);
}
document.addEventListener("click", function (event) {
  const link = event.target.closest("a[href]");
  if (!link) return;
  const href = link.getAttribute("href") || "";
  const label = (link.innerText || link.getAttribute("aria-label") || "").trim().replace(/\\s+/g, " ").slice(0, 100);
  const common = { link_url: href, link_text: label, page_path: window.location.pathname };
  if (/^tel:/i.test(href)) trackNcsEvent("phone_click", common);
  if (/wa\\.me\\//i.test(href) || /api\\.whatsapp\\.com/i.test(href)) trackNcsEvent("whatsapp_click", common);
  if (/^mailto:/i.test(href)) trackNcsEvent("email_click", common);
  if (link.matches(".btn, .navcta, .text-link, .small-link") || /contact\\.html/i.test(href)) {
    trackNcsEvent("cta_click", { ...common, cta_location: link.closest("header") ? "header" : link.closest("footer") ? "footer" : "content" });
  }
});
\nconst menuButton=document.getElementById("menu");const nav=document.getElementById("navlinks");
if(menuButton&&nav){menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));menuButton.textContent=open?"✕":"☰";});nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");menuButton.textContent="☰";}));}
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
const citySelect=document.getElementById("citySelect");const otherCity=document.getElementById("otherCity");if(citySelect&&otherCity){const toggleOtherCity=()=>{const show=citySelect.value==="Other";otherCity.style.display=show?"block":"none";otherCity.required=show;};citySelect.addEventListener("change",toggleOtherCity);toggleOtherCity();}
const enquiry=document.getElementById("enquiry");if(enquiry)enquiry.addEventListener("submit",function(event){event.preventDefault();if(!this.reportValidity())return;trackNcsEvent("enquiry_form_submit_attempt",{form_id:this.id,page_path:window.location.pathname,submission_destination:"whatsapp"});const form=new FormData(this);const value=name=>String(form.get(name)||"").trim();const message=["New Website Enquiry - Nakoda Creative Studio","","Contact Person: "+value("name").toUpperCase(),"Business Name: "+(value("business")||"Not provided").toUpperCase(),"WhatsApp: "+value("phone"),"Email: "+value("email"),"Business Type: "+value("businessType"),"Service Required: "+value("service"),"City: "+(value("city")==="Other"?(value("otherCity")||"Other / Not Listed"):value("city")),"State: "+value("state"),"Country: India","T&C Accepted: Yes","","Project Details: "+value("message")].join("\n");const whatsappUrl="https://wa.me/919890053179?text="+encodeURIComponent(message);trackNcsEvent("whatsapp_draft_open_attempt",{form_id:this.id,page_path:window.location.pathname});window.location.assign(whatsappUrl);});
document.documentElement.classList.add("js-motion");
if("IntersectionObserver"in window){document.documentElement.classList.add("reveal-ready");const targets=document.querySelectorAll(".section-head,.industry-grid,.about-grid,.services-grid,.process-line,.portfolio-layout,.digital-grid,.contact-grid,.footer-grid,.cinema-content,.intro-grid,.discipline-grid,.statement-inner,.home-end-grid,.final-cta-inner,.page-hero-grid,.case-card,.service-detail,.brand-points article,.brand-steps article,.industry-detail-grid article,.contact-panel,.contact-page-form,.values-grid article,.digital-checks article");const observer=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");obs.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -25px 0px"});targets.forEach(el=>{el.classList.add("reveal");observer.observe(el);});}

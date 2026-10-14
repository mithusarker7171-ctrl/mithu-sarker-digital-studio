'use strict';

// Edit this configuration if your contact details change.
const WHATSAPP = '8801959397202';

const products = [
  {id:'netflix4k',en:'Netflix Premium 4K',bn:'নেটফ্লিক্স প্রিমিয়াম 4K',descEn:'4K entertainment subscription enquiries.',descBn:'4K বিনোদন সাবস্ক্রিপশন সম্পর্কে জানুন।',cat:'streaming',icon:'🎬',bg:'#3d2137'},
  {id:'netflix1080',en:'Netflix Lifetime 1080p',bn:'নেটফ্লিক্স লাইফটাইম 1080p',descEn:'Ask about the advertised plan and its specific terms.',descBn:'এই প্ল্যানের শর্ত ও মেয়াদ সম্পর্কে জেনে নিন।',cat:'streaming',icon:'📺',bg:'#3b2437'},
  {id:'prime',en:'Amazon Prime',bn:'অ্যামাজন প্রাইম',descEn:'Streaming subscription enquiries.',descBn:'স্ট্রিমিং সাবস্ক্রিপশন সংক্রান্ত তথ্য।',cat:'streaming',icon:'▶️',bg:'#2b3449'},
  {id:'chatgpt',en:'ChatGPT Pro',bn:'চ্যাটজিপিটি প্রো',descEn:'AI subscription and access enquiries.',descBn:'এআই সাবস্ক্রিপশন ও অ্যাক্সেস সংক্রান্ত তথ্য।',cat:'ai',icon:'✳️',bg:'#1f3a38'},
  {id:'gemini',en:'Gemini Pro',bn:'জেমিনি প্রো',descEn:'Explore AI tool subscription options.',descBn:'এআই টুলের সাবস্ক্রিপশন সম্পর্কে জানুন।',cat:'ai',icon:'✨',bg:'#292f50'},
  {id:'claude',en:'Claude AI',bn:'ক্লড এআই',descEn:'Ask about AI assistant access options.',descBn:'এআই সহকারীর অ্যাক্সেস সম্পর্কে জানুন।',cat:'ai',icon:'✦',bg:'#46332b'},
  {id:'aiother',en:'Other AI Subscriptions',bn:'অন্যান্য এআই সাবস্ক্রিপশন',descEn:'Enquire about other AI tools and plans.',descBn:'অন্যান্য এআই টুল ও প্ল্যানের তথ্য নিন।',cat:'ai',icon:'🤖',bg:'#38294a'},
  {id:'vidiq',en:'VidIQ Subscription',bn:'ভিডআইকিউ সাবস্ক্রিপশন',descEn:'Tools for YouTube research and insights.',descBn:'ইউটিউব রিসার্চ ও বিশ্লেষণের টুল।',cat:'creator',icon:'📊',bg:'#263954'},
  {id:'capcut',en:'CapCut Pro',bn:'ক্যাপকাট প্রো',descEn:'Video creation and editing tool enquiries.',descBn:'ভিডিও তৈরি ও এডিটিং টুল সম্পর্কে জানুন।',cat:'creator',icon:'🎞️',bg:'#373044'},
  {id:'canva',en:'Canva Pro',bn:'ক্যানভা প্রো',descEn:'Design and creator subscription enquiries.',descBn:'ডিজাইন ও ক্রিয়েটর সাবস্ক্রিপশনের তথ্য।',cat:'creator',icon:'🎨',bg:'#25404c'},
  {id:'adobe',en:'Adobe Creative Cloud',bn:'অ্যাডোবি ক্রিয়েটিভ ক্লাউড',descEn:'Creative software subscription enquiries.',descBn:'ক্রিয়েটিভ সফটওয়্যার সাবস্ক্রিপশনের তথ্য।',cat:'creator',icon:'🖌️',bg:'#46282f'},
  {id:'itunes',en:'iTunes Dollar',bn:'আইটিউনস ডলার',descEn:'Digital credit availability and pricing.',descBn:'ডিজিটাল ক্রেডিটের মূল্য ও প্রাপ্যতা।',cat:'credits',icon:'💳',bg:'#313650'},
  {id:'pubg',en:'PUBG Mobile UC',bn:'পাবজি মোবাইল UC',descEn:'Game credit top-up enquiries.',descBn:'গেম ক্রেডিট টপ-আপ সম্পর্কে জানুন।',cat:'gaming',icon:'🎮',bg:'#443820'},
  {id:'m365',en:'Microsoft 365',bn:'মাইক্রোসফট 365',descEn:'Productivity subscription enquiries.',descBn:'প্রোডাক্টিভিটি সাবস্ক্রিপশনের তথ্য।',cat:'creator',icon:'💻',bg:'#2f3650'}
];

const serviceGroups = [
 {id:'youtube',en:'YouTube & Channel Growth',bn:'ইউটিউব ও চ্যানেল গ্রোথ',icon:'▶',items:[
  ['YouTube SEO & Channel Analysis','ইউটিউব SEO ও চ্যানেল বিশ্লেষণ'],
  ['YouTube Monetization Policy Support','ইউটিউব মনিটাইজেশন পলিসি সাপোর্ট'],
  ['YouTube Subscriber & Audience Growth Enquiries','ইউটিউব সাবস্ক্রাইবার ও অডিয়েন্স গ্রোথ সেবা'],
  ['YouTube Content Idea Research','ইউটিউব কনটেন্ট আইডিয়া রিসার্চ'],
  ['Complete YouTube Channel Setup','সম্পূর্ণ ইউটিউব চ্যানেল সেটআপ'],
  ['AI Logo, Banner & Watermark Design','এআই লোগো, ব্যানার ও ওয়াটারমার্ক ডিজাইন'],
  ['YouTube Hacked / Hijacked Channel Recovery','হ্যাকড / হাইজ্যাকড ইউটিউব চ্যানেল রিকভারি'],
  ['YouTube Thumbnail & Branding Design','ইউটিউব থাম্বনেইল ও ব্র্যান্ডিং ডিজাইন']
 ]},
 {id:'creative',en:'Creative & AI Production',bn:'ক্রিয়েটিভ ও এআই প্রোডাকশন',icon:'✦',items:[
  ['Professional Video Editing','প্রফেশনাল ভিডিও এডিটিং'],
  ['Professional Graphic Design','প্রফেশনাল গ্রাফিক ডিজাইন'],
  ['AI Video Creation','এআই ভিডিও তৈরি'],
  ['3D Animation & Kids Cartoons','থ্রিডি অ্যানিমেশন ও শিশুদের কার্টুন'],
  ['YouTube Kids Content Creation','ইউটিউব কিডস কনটেন্ট তৈরি'],
  ['Motion Graphics & Visual Branding','মোশন গ্রাফিক্স ও ভিজুয়াল ব্র্যান্ডিং']
 ]},
 {id:'social',en:'Social Media & Account Support',bn:'সোশ্যাল মিডিয়া ও অ্যাকাউন্ট সাপোর্ট',icon:'◎',items:[
  ['Facebook Page / Profile Growth & Promotion','ফেসবুক পেজ / প্রোফাইল গ্রোথ ও প্রমোশন'],
  ['Facebook Followers, Reactions, Comments, Views & Shares Enquiries','ফেসবুক ফলোয়ার, রিঅ্যাকশন, কমেন্ট, ভিউ ও শেয়ার সেবা'],
  ['Facebook NID / Identity-Locked Account Recovery','ফেসবুক NID / আইডেন্টিটি-লকড অ্যাকাউন্ট রিকভারি'],
  ['Instagram Followers, Likes, Comments & Views Enquiries','ইনস্টাগ্রাম ফলোয়ার, লাইক, কমেন্ট ও ভিউ সেবা']
 ]},
 {id:'tax',en:'Bangladesh TIN & Google AdSense',bn:'বাংলাদেশ TIN ও গুগল অ্যাডসেন্স',icon:'৳',items:[
  ['Bangladesh e-TIN Creation Support','বাংলাদেশ ই-টিন তৈরি সহায়তা'],
  ['Bangladesh Tax Return Submission Support','বাংলাদেশ ট্যাক্স রিটার্ন জমা সহায়তা'],
  ['Google AdSense Personal Identity Verification Support','গুগল অ্যাডসেন্স ব্যক্তিগত পরিচয় যাচাই সহায়তা'],
  ['AdSense TIN Submission & 10% BD Withholding Guidance','অ্যাডসেন্স TIN জমা ও ১০% BD কর কর্তন বিষয়ে পরামর্শ'],
  ['AdSense 0% Withholding Eligibility & Past Deductions Review','অ্যাডসেন্স ০% কর কর্তনের যোগ্যতা ও আগের কর্তন পর্যালোচনা'],
  ['AdSense Bank Account Setup Support','অ্যাডসেন্স ব্যাংক অ্যাকাউন্ট সেটআপ সহায়তা']
 ]}
];

const tr = {
 en:{navProducts:'Products',navServices:'Services',navPortfolio:'Portfolio',navAbout:'About',navContact:'Contact',headerCta:'Let’s Talk ↗',heroKicker:'CREATIVE STUDIO & DIGITAL STORE',heroTitle:'Digital products.<br><em>Creative possibilities.</em>',heroLead:"Hi, I’m Mithu Sarker — professional video editor, graphic designer, AI video creator and 3D animator. Discover digital products and creative services in one place.",browseProducts:'Explore Products',seePortfolio:'View Portfolio',signal1:'Digital products',signal2:'Creative production',signal3:'Direct WhatsApp support',productsOverline:'01 / DIGITAL MARKETPLACE',productsTitle:'Premium Digital Products',productsIntro:'Find subscriptions, creator tools, gaming credits and other digital solutions. Ask for current pricing and availability before ordering.',productsCount:'products',servicesCount:'services',all:'All',streaming:'Streaming',ai:'AI Tools',creator:'Creator Tools',credits:'Credits',gaming:'Gaming',search:'Search products...',price:'Ask for price',order:'Order now ↗',empty:'No matching products. Try another search.',productDisclaimer:'Availability, eligibility, pricing and terms are confirmed individually. All third-party trademarks belong to their respective owners; this independent studio is not affiliated with them.',servicesOverline:'02 / WHAT I CAN DO',servicesTitle:'Professional Services',servicesIntro:'From YouTube strategy to AI content, social media support and Bangladesh digital services — discover everything I offer.',complianceDisclaimer:'Recovery services require proof of ownership. Growth support follows applicable platform rules. Tax and AdSense outcomes depend on official eligibility; no refund or tax-rate outcome is guaranteed.',portfolioOverline:'03 / CREATIVE WORK',portfolioTitle:'Portfolio & Showreel',portfolioIntro:'The creative areas I specialize in. Real project previews can be added here when sample files or links are available.',portfolioKind1:'VIDEO PRODUCTION',portfolioKind2:'AI CREATION',portfolioKind3:'DESIGN & BRANDING',portfolioKind4:'ANIMATION',portfolioCard1:'Professional Video Editing',portfolioCard2:'AI Video & Visuals',portfolioCard3:'Graphic Design',portfolioCard4:'3D Kids Cartoon Animation',portfolioPending:'Project samples coming soon',aboutOverline:'04 / MEET THE CREATOR',aboutLabel:'FOUNDER & CREATIVE SPECIALIST',aboutTitle:'Creativity meets<br><em>digital expertise.</em>',aboutText:"I’m Mithu Sarker, a freelancer, digital product seller, professional video editor, graphic designer, AI video creator, YouTube kids content creator and 3D animator. I help creators and businesses move forward through thoughtful content, modern tools and hands-on digital support.",connectLinkedin:'Connect on LinkedIn',stepsOverline:'HOW IT WORKS',stepsTitle:'Simple from start to finish',step1Title:'Explore',step1Desc:'Browse products or find the service you need.',step2Title:'Message',step2Desc:'Send a WhatsApp enquiry with your requirements.',step3Title:'Confirm',step3Desc:'Discuss availability, pricing, scope and delivery.',contactOverline:'05 / LET’S CONNECT',contactTitle:'Have something in mind?<br><em>Let’s make it happen.</em>',contactIntro:'Questions about a product or ready to discuss a creative project? Reach me directly using the links below.',chatWhatsapp:'Chat on WhatsApp',rights:'All rights reserved.',backTop:'Back to top ↑',menuOpen:'Open menu',menuClose:'Close menu',waProduct:"Hi Mithu, I'm interested in",waService:"Hi Mithu, I'd like to ask about",waTail:'Please share details, availability and pricing.'},
 bn:{navProducts:'প্রোডাক্ট',navServices:'সার্ভিস',navPortfolio:'পোর্টফোলিও',navAbout:'আমার সম্পর্কে',navContact:'যোগাযোগ',headerCta:'কথা বলুন ↗',heroKicker:'ক্রিয়েটিভ স্টুডিও ও ডিজিটাল স্টোর',heroTitle:'ডিজিটাল প্রোডাক্ট।<br><em>সৃজনশীল সম্ভাবনা।</em>',heroLead:'আমি মিঠু সরকার — প্রফেশনাল ভিডিও এডিটর, গ্রাফিক ডিজাইনার, এআই ভিডিও ক্রিয়েটর ও থ্রিডি অ্যানিমেটর। এখানে পাবেন ডিজিটাল প্রোডাক্ট এবং ক্রিয়েটিভ সার্ভিস।',browseProducts:'প্রোডাক্ট দেখুন',seePortfolio:'পোর্টফোলিও দেখুন',signal1:'ডিজিটাল প্রোডাক্ট',signal2:'ক্রিয়েটিভ প্রোডাকশন',signal3:'সরাসরি হোয়াটসঅ্যাপ সাপোর্ট',productsOverline:'০১ / ডিজিটাল মার্কেটপ্লেস',productsTitle:'প্রিমিয়াম ডিজিটাল প্রোডাক্ট',productsIntro:'সাবস্ক্রিপশন, ক্রিয়েটর টুল, গেম ক্রেডিট ও ডিজিটাল সল্যুশন দেখুন। অর্ডারের আগে বর্তমান দাম ও প্রাপ্যতা জেনে নিন।',productsCount:'টি প্রোডাক্ট',servicesCount:'টি সার্ভিস',all:'সব',streaming:'স্ট্রিমিং',ai:'এআই টুল',creator:'ক্রিয়েটর টুল',credits:'ক্রেডিট',gaming:'গেমিং',search:'প্রোডাক্ট খুঁজুন...',price:'দাম জানতে যোগাযোগ',order:'অর্ডার করুন ↗',empty:'কোনো প্রোডাক্ট পাওয়া যায়নি। অন্য শব্দ দিয়ে খুঁজুন।',productDisclaimer:'প্রাপ্যতা, যোগ্যতা, দাম ও শর্ত আলাদাভাবে নিশ্চিত করা হয়। তৃতীয় পক্ষের সব ট্রেডমার্ক তাদের নিজস্ব; এই স্বাধীন স্টুডিও তাদের সঙ্গে সংশ্লিষ্ট নয়।',servicesOverline:'০২ / আমার সার্ভিস',servicesTitle:'প্রফেশনাল সার্ভিসসমূহ',servicesIntro:'ইউটিউব, এআই কনটেন্ট, সোশ্যাল মিডিয়া এবং বাংলাদেশের ডিজিটাল সার্ভিসসহ আমার সব সেবা দেখুন।',complianceDisclaimer:'রিকভারি সেবার জন্য মালিকানার প্রমাণ প্রয়োজন। গ্রোথ সেবায় সংশ্লিষ্ট প্ল্যাটফর্মের নিয়ম প্রযোজ্য। ট্যাক্স ও অ্যাডসেন্সের ফল সরকারি যোগ্যতার উপর নির্ভর করে; রিফান্ড বা নির্দিষ্ট করহার নিশ্চিত নয়।',portfolioOverline:'০৩ / ক্রিয়েটিভ কাজ',portfolioTitle:'পোর্টফোলিও ও শোরিল',portfolioIntro:'এগুলো আমার কাজের প্রধান ক্ষেত্র। প্রকৃত কাজের ফাইল বা লিংক যোগ করলে এখানে প্রিভিউ দেখানো যাবে।',portfolioKind1:'ভিডিও প্রোডাকশন',portfolioKind2:'এআই ক্রিয়েশন',portfolioKind3:'ডিজাইন ও ব্র্যান্ডিং',portfolioKind4:'অ্যানিমেশন',portfolioCard1:'প্রফেশনাল ভিডিও এডিটিং',portfolioCard2:'এআই ভিডিও ও ভিজুয়াল',portfolioCard3:'গ্রাফিক ডিজাইন',portfolioCard4:'থ্রিডি কিডস কার্টুন অ্যানিমেশন',portfolioPending:'কাজের নমুনা শিগগিরই যোগ হবে',aboutOverline:'০৪ / আমার পরিচয়',aboutLabel:'প্রতিষ্ঠাতা ও ক্রিয়েটিভ স্পেশালিস্ট',aboutTitle:'সৃজনশীলতার সঙ্গে<br><em>ডিজিটাল দক্ষতা।</em>',aboutText:'আমি মিঠু সরকার, একজন ফ্রিল্যান্সার, ডিজিটাল প্রোডাক্ট বিক্রেতা, প্রফেশনাল ভিডিও এডিটর, গ্রাফিক ডিজাইনার, এআই ভিডিও ক্রিয়েটর, ইউটিউব কিডস কনটেন্ট ক্রিয়েটর এবং থ্রিডি অ্যানিমেটর। আধুনিক টুল ও কনটেন্ট তৈরির মাধ্যমে ক্রিয়েটর ও ব্যবসাকে সাহায্য করি।',connectLinkedin:'লিংকডইনে যোগাযোগ করুন',stepsOverline:'যেভাবে কাজ হয়',stepsTitle:'শুরু থেকে শেষ, সহজভাবে',step1Title:'দেখুন',step1Desc:'আপনার পছন্দের প্রোডাক্ট বা সার্ভিস বেছে নিন।',step2Title:'মেসেজ দিন',step2Desc:'আপনার প্রয়োজন লিখে হোয়াটসঅ্যাপে জানান।',step3Title:'নিশ্চিত করুন',step3Desc:'দাম, প্রাপ্যতা, কাজের পরিধি ও ডেলিভারি আলোচনা করুন।',contactOverline:'০৫ / যোগাযোগ',contactTitle:'কোনো পরিকল্পনা আছে?<br><em>একসঙ্গে শুরু করি।</em>',contactIntro:'প্রোডাক্ট নিয়ে প্রশ্ন বা ক্রিয়েটিভ প্রজেক্টে কাজ করতে চান? নিচের মাধ্যমে সরাসরি যোগাযোগ করুন।',chatWhatsapp:'হোয়াটসঅ্যাপে কথা বলুন',rights:'সর্বস্বত্ব সংরক্ষিত।',backTop:'উপরে যান ↑',menuOpen:'মেনু খুলুন',menuClose:'মেনু বন্ধ করুন',waProduct:'হ্যালো মিঠু, আমি জানতে চাই',waService:'হ্যালো মিঠু, আমি সার্ভিস সম্পর্কে জানতে চাই',waTail:'অনুগ্রহ করে বিস্তারিত, প্রাপ্যতা ও দাম জানাবেন।'}
};

let lang='en';
let selectedFilter='all';
let searchValue='';
const el=id=>document.getElementById(id);
function text(key){return tr[lang][key] || tr.en[key] || key;}
function whatsappLink(item,kind){const intro=kind==='service'?text('waService'):text('waProduct');return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(intro+' '+item+'. '+text('waTail'))}`;}
function makeEl(tag, cls, contents){const n=document.createElement(tag);if(cls)n.className=cls;if(contents!==undefined)n.textContent=contents;return n;}
function productCard(p){
 const card=makeEl('article','product-card');
 const top=makeEl('div','product-top');
 const icon=makeEl('div','product-icon',p.icon);icon.style.setProperty('--icon-bg',p.bg);icon.setAttribute('aria-hidden','true');
 const cat=makeEl('span','product-category',text(p.cat));top.append(icon,cat);
 const title=makeEl('h3','',lang==='bn'?p.bn:p.en);
 const desc=makeEl('p','',lang==='bn'?p.descBn:p.descEn);
 const bottom=makeEl('div','product-bottom');const price=makeEl('span','ask-price',text('price'));
 const btn=makeEl('a','product-order',text('order'));btn.href=whatsappLink(p.en,'product');btn.target='_blank';btn.rel='noopener noreferrer';btn.setAttribute('aria-label',`${text('order')} — ${p.en}`);
 bottom.append(price,btn);card.append(top,title,desc,bottom);return card;
}
function renderProducts(){
 const grid=el('productGrid');grid.replaceChildren();
 const list=products.filter(p=>(selectedFilter==='all'||p.cat===selectedFilter)&&[p.en,p.bn,p.descEn,p.descBn].some(v=>v.toLowerCase().includes(searchValue.toLowerCase())));
 list.forEach(p=>grid.append(productCard(p)));
 if(!list.length)grid.append(makeEl('p','empty-state',text('empty')));
 el('productCount').textContent=`${products.length} ${text('productsCount')}`;
}
function renderFilters(){
 const parent=el('productFilters');parent.replaceChildren();
 ['all','streaming','ai','creator','gaming','credits'].forEach(k=>{
  const b=makeEl('button','filter-button'+(k===selectedFilter?' active':''),text(k));b.type='button';b.setAttribute('aria-pressed',String(k===selectedFilter));b.onclick=()=>{selectedFilter=k;renderFilters();renderProducts();};parent.append(b);
 });
}
function renderServices(){
 const target=el('serviceGroups');target.replaceChildren();let count=0;
 serviceGroups.forEach(g=>{
  const section=makeEl('section','service-group');
  const heading=makeEl('div','service-category-head');heading.append(makeEl('span','service-category-icon',g.icon));
  const h=makeEl('h3','',lang==='bn'?g.bn:g.en);heading.append(h);heading.append(makeEl('span','service-group-count',`(${g.items.length})`));
  const grid=makeEl('div','services-grid');
  g.items.forEach(names=>{const a=makeEl('a','service-card');const display=lang==='bn'?names[1]:names[0];a.href=whatsappLink(names[0],'service');a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',`${display} — WhatsApp`);a.append(makeEl('span','service-name',display),makeEl('span','service-action','↗'));grid.append(a);});
  count+=g.items.length;section.append(heading,grid);target.append(section);
 });
 el('serviceCount').textContent=`${count} ${text('servicesCount')}`;
}
function setLanguage(next){
 lang=next;document.documentElement.lang=next;document.body.lang=next;
 document.querySelectorAll('[data-t]').forEach(n=>n.textContent=text(n.dataset.t));
 document.querySelectorAll('[data-t-html]').forEach(n=>n.innerHTML=text(n.dataset.tHtml));
 el('languageLabel').textContent=next==='en'?'বাংলা':'English';
 el('langToggle').setAttribute('aria-label',next==='en'?'Switch to Bengali':'ইংরেজিতে পরিবর্তন করুন');
 el('productSearch').placeholder=text('search');el('productSearch').setAttribute('aria-label',text('search'));
 el('menuToggle').setAttribute('aria-label',text(el('menuToggle').getAttribute('aria-expanded')==='true'?'menuClose':'menuOpen'));
 renderFilters();renderProducts();renderServices();
 try{localStorage.setItem('msds-language',lang);}catch(e){}
}
const menu=el('menuToggle'),nav=el('mainNav');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',text('menuOpen'));nav.classList.remove('open');}
menu.addEventListener('click',()=>{const opening=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(opening));menu.setAttribute('aria-label',text(opening?'menuClose':'menuOpen'));nav.classList.toggle('open',opening);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!nav.contains(e.target))closeMenu();});
window.addEventListener('resize',()=>{if(window.innerWidth>850)closeMenu();});
el('langToggle').addEventListener('click',()=>setLanguage(lang==='en'?'bn':'en'));
el('productSearch').addEventListener('input',e=>{searchValue=e.target.value.trim();renderProducts();});
try{lang=localStorage.getItem('msds-language')==='bn'?'bn':'en';}catch(e){lang='en';}
setLanguage(lang);

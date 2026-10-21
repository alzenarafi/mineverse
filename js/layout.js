/* Navbar, footer, bintang, dan animasi muncul — dipakai semua halaman */
(function(){
  const nav=[['Home','index.html#home'],['Blog','blog.html'],['Team','team.html'],['Multiverse','index.html#branch']];
  const cur=document.body.dataset.page||'';
  document.getElementById('site-header').innerHTML=`
  <header class="fixed top-0 left-0 w-full z-50 glass-nav px-6 lg:px-16 py-4 flex items-center justify-between">
    <a href="index.html" class="flex items-center gap-3"><img src="logo.png" alt="Mineverse Logo" class="w-10 h-10 object-contain"><span class="font-extrabold text-xl tracking-wider text-white">MINEVERSE</span></a>
    <nav class="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide text-gray-300">
      ${nav.map(n=>`<a href="${n[1]}" class="hover:text-mineblue transition-colors ${n[0].toLowerCase()===cur?'text-mineblue':''}">${n[0]}</a>`).join('')}
    </nav>
    <div class="flex items-center bg-cardbg border border-cardborder rounded-lg p-1">
      <button class="px-3 py-1.5 rounded text-xs font-bold bg-mineblue text-black">ID</button>
      <button class="px-3 py-1.5 rounded text-xs font-bold text-gray-400 hover:text-white hover:bg-mineblue hover:text-black transition-all">EN</button>
    </div>
  </header>`;
  document.getElementById('site-footer').innerHTML=`
  <footer class="border-t border-cardborder bg-cardbg pt-16 pb-12 px-6 lg:px-16 relative z-10 mt-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
      <div class="md:col-span-2"><div class="flex items-center gap-3 mb-4"><img src="logo.png" alt="" class="w-8 h-8 object-contain"><span class="font-bold text-lg tracking-wider text-white">Mineverse</span></div>
        <p class="text-xs text-gray-400 leading-relaxed font-medium pr-6">A next-generation digital Minecraft ecosystem infrastructure designed specifically for creative people who need a platform to create.</p></div>
      <div><h4 class="font-bold text-xs uppercase tracking-wider text-white mb-4">SOCIAL MEDIA</h4><ul class="space-y-2 text-xs font-medium text-gray-400">
        <li><a href="https://www.youtube.com/@Mineverse.c" target="_blank" class="hover:text-mineblue transition-colors">YouTube</a></li>
        <li><a href="https://www.instagram.com/mineverse_official/" target="_blank" class="hover:text-mineblue transition-colors">Instagram</a></li>
        <li><a href="https://discord.gg/m8FVYTqZN" target="_blank" class="hover:text-mineblue transition-colors">Discord</a></li></ul></div>
      <div><h4 class="font-bold text-xs uppercase tracking-wider text-white mb-4">DOCUMENT</h4><ul class="space-y-2 text-xs font-medium text-gray-400">
        <li><a href="#" class="hover:text-mineblue transition-colors">Branding</a></li>
        <li><a href="index.html#about-sector" class="hover:text-mineblue transition-colors">Milestone</a></li>
        <li><a href="mailto:mineversepersonal@gmail.com" class="hover:text-mineblue transition-colors">Email</a></li></ul></div>
      <div><h4 class="font-bold text-xs uppercase tracking-wider text-white mb-4">SUPPORT</h4><ul class="space-y-2 text-xs font-medium text-gray-400">
        <li><a href="https://saweria.co/mineverseid" target="_blank" class="hover:text-mineblue transition-colors">Saweria</a></li>
        <li><a href="index.html#about-sector" class="hover:text-mineblue transition-colors">Partnership</a></li>
        <li><a href="index.html#about-sector" class="hover:text-mineblue transition-colors">Proposal</a></li></ul></div>
    </div>
    <div class="max-w-7xl mx-auto pt-8 border-t border-cardborder flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
      <div>&copy; 2026 Mineverse Portal. All Rights Reserved.</div>
      <div class="flex items-center gap-2 text-gray-400"><span class="w-2 h-2 rounded-full bg-mineblue inline-block"></span><span>Alzena - Owner & Founder Mineverse</span><span class="w-2 h-2 rounded-full bg-mineblue inline-block"></span></div>
    </div>
  </footer>`;

  /* bintang */
  const c=document.getElementById('starfield'),x=c.getContext('2d');let st=[];
  function size(){c.width=innerWidth;c.height=innerHeight}
  addEventListener('resize',size);size();
  for(let i=0;i<140;i++)st.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.2+.3,a:Math.random()*.6+.2,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3});
  (function loop(){x.clearRect(0,0,c.width,c.height);x.fillStyle='#fff';
    st.forEach(s=>{s.x+=s.vx;s.y+=s.vy;if(s.x<0)s.x=c.width;if(s.x>c.width)s.x=0;if(s.y<0)s.y=c.height;if(s.y>c.height)s.y=0;x.globalAlpha=s.a;x.beginPath();x.arc(s.x,s.y,s.r,0,6.283);x.fill()});
    requestAnimationFrame(loop)})();

  /* animasi muncul dari bawah: panggil window.mvReveal() setelah isi dirender */
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('active');io.unobserve(e.target)}}),{threshold:.1});
  window.mvReveal=()=>document.querySelectorAll('.reveal-up:not(.active)').forEach(el=>io.observe(el));
  window.mvReveal();
})();

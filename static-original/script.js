(function(){
  var hdr=document.getElementById('hdr'),burg=document.getElementById('burg'),sheet=document.getElementById('sheet');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* header state */
  function onScroll(){ hdr.classList.toggle('stuck', window.scrollY > window.innerHeight*0.7); }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  /* mobile menu */
  burg.addEventListener('click',function(){
    var on=sheet.classList.toggle('on');
    burg.setAttribute('aria-expanded',on);
    document.body.style.overflow = on ? 'hidden' : '';
  });
  sheet.addEventListener('click',function(e){
    if(e.target.closest('a')){ sheet.classList.remove('on'); burg.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
  });

  /* ── count-up ── */
  function countUp(el){
    var end = parseFloat(el.dataset.count),
        dec = parseInt(el.dataset.dec||'0',10),
        suf = el.dataset.suffix||'',
        dur = 1500, t0 = null;
    function frame(t){
      if(!t0) t0=t;
      var p = Math.min((t-t0)/dur,1);
      var eased = 1-Math.pow(1-p,3);
      el.textContent = (end*eased).toFixed(dec) + suf;
      if(p<1) requestAnimationFrame(frame);
      else el.textContent = end.toFixed(dec) + suf;
    }
    requestAnimationFrame(frame);
  }

  /* ── reveal on scroll ── */
  var targets = document.querySelectorAll('.a, .stg, [data-count]');
  if(!('IntersectionObserver' in window) || reduce){
    targets.forEach(function(el){
      el.classList.add('in');
      if(el.dataset.count) el.textContent = parseFloat(el.dataset.count).toFixed(parseInt(el.dataset.dec||'0',10)) + (el.dataset.suffix||'');
    });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(x){
        if(!x.isIntersecting) return;
        x.target.classList.add('in');
        if(x.target.dataset.count) countUp(x.target);
        io.unobserve(x.target);
      });
    },{rootMargin:'0px 0px -8% 0px',threshold:.01});
    targets.forEach(function(el){ io.observe(el); });

    /* safety sweep: reveal anything already on screen that the observer
       missed (zero-area elements, very tall blocks, restored scroll) */
    function sweep(){
      targets.forEach(function(el){
        if(el.classList.contains('in')) return;
        var r = el.getBoundingClientRect();
        if(r.height < 1 && r.width < 1) return;
        if(r.top < innerHeight*1.15 && r.bottom > -200){
          el.classList.add('in');
          if(el.dataset.count) countUp(el);
          io.unobserve(el);
        }
      });
    }
    addEventListener('load', sweep);
    setTimeout(sweep, 400);
    setTimeout(sweep, 1200);
  }

  /* ── gentle parallax on big images ── */
  if(!reduce){
    var par = [].slice.call(document.querySelectorAll('.par'));
    var ticking = false;
    function move(){
      var vh = window.innerHeight;
      par.forEach(function(el){
        var r = el.parentElement.getBoundingClientRect();
        if(r.bottom < -200 || r.top > vh + 200) return;
        var pct = (r.top + r.height/2 - vh/2) / vh;      /* -1 .. 1 */
        el.style.transform = 'translate3d(0,'+ (pct * -22).toFixed(2) +'px,0) scale(1.06)';
      });
      ticking = false;
    }
    window.addEventListener('scroll',function(){
      if(!ticking){ requestAnimationFrame(move); ticking=true; }
    },{passive:true});
    window.addEventListener('resize',move,{passive:true});
    move();
  }

  /* ── form ── */
  var form=document.getElementById('leadForm'),card=form.closest('.formcard'),thanks=document.getElementById('thanks');
  function bad(i){var v=i.value.trim();
    if(!v)return true;
    if(i.type==='email')return !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    if(i.type==='tel')return v.replace(/\D/g,'').length<7;
    return false;}
  function done(){card.style.display='none';thanks.style.display='block';}
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var stop=false;
    form.querySelectorAll('input[required]').forEach(function(i){
      var b=bad(i); i.parentElement.classList.toggle('bad',b);
      if(b&&!stop){i.focus();stop=true;}
    });
    if(stop)return;
    var url=form.dataset.endpoint;
    if(!url){done();return;}
    var btn=form.querySelector('button'); btn.disabled=true; btn.textContent='Sending…';
    fetch(url,{method:'POST',body:new FormData(form)}).then(done)
      .catch(function(){btn.disabled=false;btn.textContent='Try again';});
  });
  form.querySelectorAll('input').forEach(function(i){
    i.addEventListener('input',function(){i.parentElement.classList.remove('bad');});
  });

  /* ── carousels ── */
  function bindCarousel(root, navRoot){
    var track = root.querySelector('[data-track]');
    if(!track) return;
    var nav = navRoot || root;
    var prev = nav.querySelector('[data-prev]');
    var next = nav.querySelector('[data-next]');
    function step(){
      var slide = track.children[0];
      if(!slide) return 280;
      var styles = getComputedStyle(track);
      var gap = parseFloat(styles.columnGap || styles.gap) || 16;
      return slide.getBoundingClientRect().width + gap;
    }
    function go(dir){
      track.scrollBy({left: dir * step(), behavior: reduce ? 'auto' : 'smooth'});
    }
    if(prev) prev.addEventListener('click', function(){ go(-1); });
    if(next) next.addEventListener('click', function(){ go(1); });
  }
  document.querySelectorAll('[data-carousel]').forEach(function(el){
    var featNav = el.classList.contains('feat-carousel')
      ? document.querySelector('[data-feat-nav]')
      : null;
    bindCarousel(el, featNav);
  });
})();

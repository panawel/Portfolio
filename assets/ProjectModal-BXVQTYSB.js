import{a as e,i as t,n,o as r,r as i,t as a}from"./index-w54YHj4I.js";var o=r(e(),1),s=i(),c=({project:e,onClose:r})=>{let[i,c]=(0,o.useState)([]),l=()=>{let e=window.innerWidth<768?14:19;c(Array.from({length:e}).map(()=>{let e=window.innerWidth/2,t=window.innerHeight+150,n=Math.random()*window.innerWidth-100,r=Math.random()*(window.innerHeight*.4)-100,i=Math.random()>.6,a=(i?Math.random()*1.5+2.5:Math.random()*.8+.8)*.6,o=i?1e4:9998;return{id:Math.random().toString(),startX:e,startY:t,peakY:r,endX:n,endY:window.innerHeight+300,rotateXStart:Math.random()*90,rotateXEnd:Math.random()*360*(Math.random()>.5?1:-1),rotateYStart:Math.random()*90,rotateYEnd:Math.random()*360*(Math.random()>.5?1:-1),rotateZStart:Math.random()*360,rotateZEnd:Math.random()*180,scale:a,blur:`none`,zIndex:o,duration:Math.random()*.5+1.5,delay:Math.random()*.3}}))};return a(!0),(0,o.useEffect)(()=>{let t;return e.id===`babaCasino`&&(t=setTimeout(()=>{l()},1e3)),()=>{t&&clearTimeout(t)}},[e.id]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.div,{className:`modal-backdrop`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.35,ease:`easeOut`},onClick:r}),(0,s.jsxs)(`div`,{className:`modal-overlay`,onClick:r,children:[i.map(e=>(0,s.jsx)(n.div,{initial:{x:e.startX,y:e.startY,rotateX:e.rotateXStart,rotateY:e.rotateYStart,rotateZ:e.rotateZStart,scale:e.scale,filter:e.blur,opacity:0},animate:{x:e.endX,y:[e.startY,e.peakY,e.endY],rotateX:e.rotateXStart+e.rotateXEnd,rotateY:e.rotateYStart+e.rotateYEnd,rotateZ:e.rotateZStart+e.rotateZEnd,opacity:[0,1,1,0]},transition:{duration:e.duration,delay:e.delay,x:{duration:e.duration,delay:e.delay,ease:`linear`},y:{duration:e.duration,delay:e.delay,times:[0,.4,1],ease:[`easeOut`,`easeIn`]},rotateX:{duration:e.duration,delay:e.delay,ease:`linear`},rotateY:{duration:e.duration,delay:e.delay,ease:`linear`},rotateZ:{duration:e.duration,delay:e.delay,ease:`linear`},opacity:{duration:e.duration,delay:e.delay,times:[0,.1,.8,1]}},onAnimationComplete:()=>c(t=>t.filter(t=>t.id!==e.id)),style:{position:`fixed`,zIndex:e.zIndex,pointerEvents:`none`,top:0,left:0,willChange:`transform, opacity`},children:(0,s.jsxs)(`svg`,{viewBox:`0 0 100 100`,style:{width:`80px`,height:`80px`},children:[(0,s.jsxs)(`defs`,{children:[(0,s.jsxs)(`linearGradient`,{id:`coinEdge`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,stopColor:`#B8860B`}),(0,s.jsx)(`stop`,{offset:`50%`,stopColor:`#FFD700`}),(0,s.jsx)(`stop`,{offset:`100%`,stopColor:`#8B6508`})]}),(0,s.jsxs)(`linearGradient`,{id:`coinFace`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,stopColor:`#FFFACD`}),(0,s.jsx)(`stop`,{offset:`50%`,stopColor:`#FFD700`}),(0,s.jsx)(`stop`,{offset:`100%`,stopColor:`#DAA520`})]})]}),(0,s.jsx)(`circle`,{cx:`50`,cy:`54`,r:`44`,fill:`url(#coinEdge)`}),(0,s.jsx)(`circle`,{cx:`50`,cy:`46`,r:`44`,fill:`url(#coinFace)`}),(0,s.jsx)(`circle`,{cx:`50`,cy:`46`,r:`36`,fill:`none`,stroke:`#DAA520`,strokeWidth:`2`,strokeDasharray:`4 4`}),(0,s.jsx)(`circle`,{cx:`50`,cy:`46`,r:`32`,fill:`none`,stroke:`#DAA520`,strokeWidth:`1`}),(0,s.jsx)(`text`,{x:`50`,y:`65`,fontFamily:`Arial, sans-serif`,fontSize:`56`,fontWeight:`900`,fill:`#B8860B`,textAnchor:`middle`,style:{textShadow:`0 2px 4px rgba(255, 255, 255, 0.8)`},children:`$`}),(0,s.jsx)(`ellipse`,{cx:`28`,cy:`24`,rx:`14`,ry:`6`,fill:`rgba(255,255,255,0.6)`,transform:`rotate(-40 28 24)`})]})},e.id)),(0,s.jsxs)(n.div,{className:`modal-content`,initial:{x:`100%`},animate:{x:0},exit:{x:`100%`},transition:{type:`spring`,damping:25,stiffness:200},onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(`button`,{className:`close-btn glass`,onClick:r,children:(0,s.jsx)(t,{size:24})}),(0,s.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,background:`radial-gradient(circle at top right, ${e.brandColor||`rgba(0, 243, 255, 0.15)`} 0%, transparent 60%), radial-gradient(circle at bottom left, ${e.brandColor||`rgba(0, 243, 255, 0.1)`} 0%, transparent 50%)`,opacity:.6,pointerEvents:`none`,zIndex:0}}),(0,s.jsx)(`div`,{className:`modal-scroll-area`,style:{zIndex:1,position:`relative`},children:(0,s.jsxs)(`div`,{className:`modal-grid-layout`,children:[(0,s.jsx)(`div`,{className:`modal-sidebar`,children:(0,s.jsxs)(`div`,{className:`sidebar-sticky-content`,children:[(0,s.jsx)(`img`,{src:e.logo.replace(`../`,`/Portfolio/`),alt:e.title,className:`modal-logo`,style:{height:e.id===`planet`?`120px`:`70px`,marginBottom:e.id===`planet`?`1.5rem`:`2rem`}}),(0,s.jsx)(`h1`,{children:e.title||e.id}),(0,s.jsx)(`p`,{className:`modal-subtitle`,children:e.subtitle}),(0,s.jsx)(`div`,{className:`modal-badges`,style:{justifyContent:`flex-start`},children:e.techStack.map((e,t)=>(0,s.jsx)(`span`,{className:`badge`,children:e},t))}),(0,s.jsx)(`div`,{className:`modal-section`,style:{marginTop:`3rem`,marginBottom:`0`},children:(0,s.jsx)(`p`,{className:`overview-text`,children:e.overviewText})})]})}),(0,s.jsxs)(`div`,{className:`modal-body-content`,onClick:t=>{if(e.id===`babaCasino`){let e=t.target;e.tagName===`IMG`&&e.getAttribute(`src`)?.includes(`Baba_Wild_Slot_image`)&&l()}},style:{cursor:e.id===`babaCasino`?`default`:`auto`},children:[e.heroImage&&(0,s.jsx)(`div`,{style:{position:`relative`,margin:0,padding:0},children:(0,s.jsx)(n.div,{whileHover:e.id===`babaCasino`?{scale:1.02,boxShadow:`0 10px 40px rgba(255, 215, 0, 0.3)`}:{},whileTap:e.id===`babaCasino`?{scale:.98}:{},style:{borderRadius:`16px`,overflow:`hidden`,cursor:e.id===`babaCasino`?`pointer`:`default`,border:`1px solid rgba(255, 255, 255, 0.05)`,boxShadow:`0 4px 20px rgba(0,0,0,0.3)`,transition:`all 0.3s ease`,marginBottom:`1rem`},children:(0,s.jsx)(`img`,{src:e.heroImage.replace(`../`,`/Portfolio/`),alt:`Hero`,className:`modal-hero-image`})})}),e.sections.map((e,t)=>(0,s.jsxs)(`div`,{className:`modal-section`,children:[(0,s.jsx)(`h2`,{children:e.title}),(0,s.jsx)(`div`,{className:`section-content`,dangerouslySetInnerHTML:{__html:e.contentHtml.replace(/\.\.\//g,`/Portfolio/`)}})]},t)),e.resultsList&&e.resultsList.length>0&&(0,s.jsxs)(`div`,{className:`modal-section results-section`,children:[(0,s.jsx)(`h2`,{children:`Results`}),(0,s.jsx)(`ul`,{children:e.resultsList.map((e,t)=>(0,s.jsx)(`li`,{children:e},t))})]})]})]})})]}),(0,s.jsx)(`style`,{children:`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 100;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          z-index: 101;
          display: flex;
          justify-content: flex-end;
        }

        .modal-content {
          width: 100%;
          max-width: 900px;
          height: 100vh;
          height: 100dvh;
          background: var(--bg-main);
          border-left: 1px solid var(--border-color);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 10;
          transition: all 0.2s;
        }

        .close-btn:hover {
          color: var(--accent-cyan);
          transform: rotate(90deg);
        }

        .modal-scroll-area {
          overflow-y: auto;
          flex: 1;
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }

        .modal-grid-layout {
          display: flex;
          flex-direction: column;
          padding: 3rem 2rem;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 900px) {
          .modal-grid-layout {
            flex-direction: row;
            padding: 6rem 3rem;
            gap: 5rem;
            align-items: flex-start;
          }
          
          .modal-sidebar {
            width: 35%;
            position: sticky;
            top: 2rem;
          }

          .modal-body-content {
            width: 65%;
          }
        }

        .sidebar-sticky-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .modal-logo {
          height: 70px;
          object-fit: contain;
          margin-bottom: 2rem;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));
        }

        .sidebar-sticky-content h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }

        .modal-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .modal-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-hero-image {
          width: 100%;
          display: block;
          margin: 0;
          border: none;
        }

        .modal-section {
          margin-bottom: 4rem;
        }

        .modal-section h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--accent-cyan);
          border-left: 4px solid var(--accent-cyan);
          padding-left: 1rem;
        }

        .overview-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        /* Dynamic Content Styles */
        .section-content p {
          margin-bottom: 1rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .section-content ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }

        .section-content li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-muted);
        }

        .section-content li::before {
          content: "→";
          color: var(--accent-green);
          position: absolute;
          left: 0;
          font-family: var(--font-mono);
        }

        .section-content img {
          max-width: 100%;
          border-radius: 12px;
          margin: 1.5rem 0;
          border: 1px solid var(--border-color);
        }

        /* Specific classes from old design that might be in the HTML */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .service-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .service-icon {
          width: 32px !important;
          height: 32px !important;
          margin-bottom: 0.5rem !important;
          border: none !important;
        }

        .scope-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .scope-card {
          background: rgba(255, 255, 255, 0.03);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .scope-card h4 {
          color: var(--accent-green);
          margin-bottom: 1rem;
        }

        .results-section {
          background: rgba(0, 243, 255, 0.05);
          border: 1px solid rgba(0, 243, 255, 0.2);
          border-radius: 16px;
          padding: 2.5rem;
        }

        .results-section h2 {
          border-left: none;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .media-gif-row {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding-bottom: 1rem;
        }

        .media-gif-row img {
          max-width: 250px;
          flex-shrink: 0;
        }

        .btn-primary {
          background: var(--accent-cyan);
          color: black;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
        }

        @media (max-width: 768px) {
          .modal-grid-layout {
            padding: 4rem 1.5rem 2rem;
          }
          .sidebar-sticky-content {
            text-align: left;
            align-items: flex-start;
          }
          .sidebar-sticky-content h1 {
            font-size: 2.5rem;
          }
        }

        /* ── Device / Environment Cards ─────────────────────── */
        .testing-env-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .env-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 1.25rem;
        }

        .env-icon, .env-icon-box {
          font-size: 2rem;
          line-height: 1;
          flex-shrink: 0;
        }

        .env-details {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .env-details strong {
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .env-details span {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        /* ── Badges & Buttons ───────────────────────────────── */
        .tech-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.75rem;
          background: rgba(0, 255, 136, 0.1);
          color: var(--accent-green);
          border-radius: 100px;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          border: 1px solid rgba(0, 255, 136, 0.2);
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .round-badge {
          display: inline-block;
          padding: 0.2rem 0.75rem;
          background: rgba(0, 243, 255, 0.12);
          color: var(--accent-cyan);
          border-radius: 100px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
          font-size: 0.95rem;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-secondary);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* ── Check list ─────────────────────────────────────── */
        .check-list {
          list-style: none;
          padding-left: 0;
          margin: 1rem 0;
        }

        .check-list li {
          padding-left: 1.75rem;
          position: relative;
          margin-bottom: 0.75rem;
          color: var(--text-muted);
        }

        .check-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--accent-green);
          font-weight: 700;
        }

        /* ── Quote Block (Smart CRM) ─────────────────────────── */
        .quote-container {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 243, 255, 0.15);
          border-radius: 16px;
          padding: 2.5rem;
          margin: 1rem 0;
        }

        .quote-icon {
          font-size: 3.5rem;
          color: var(--accent-cyan);
          line-height: 1;
          display: block;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .quote-text-restored {
          font-style: italic;
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .quote-author-restored {
          text-align: right;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          margin-top: 1.5rem;
        }

        /* ── Automation Section (Baba Casino) ───────────────── */
        .automation-section {
          margin: 1rem 0;
        }

        .automation-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .automation-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-main);
          text-align: center;
        }

        .automation-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1.5rem;
        }

        .automation-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .automation-icon {
          font-size: 1.25rem;
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        /* ── Gallery (BIGI) ─────────────────────────────────── */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .gallery-item {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          aspect-ratio: 9 / 16;
          background: rgba(0, 0, 0, 0.4);
        }

        .gallery-item img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block !important;
          border: none !important;
          border-radius: 0 !important;
          margin: 0 !important;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .view-btn {
          color: white;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 100px;
        }

        /* ── Media (Paybox / Signal) ────────────────────────── */
        .project-media {
          width: 100%;
          max-width: 100%;
          border-radius: 12px !important;
          display: block;
          margin: 1.5rem auto !important;
          border: 1px solid var(--border-color) !important;
        }

        .media-caption {
          text-align: center;
          font-style: italic;
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }

        /* ── Component Tag Cloud (Carrefour / BIGi / Planet) ── */
        .components-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .component-tag {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.75rem;
          background: rgba(0, 243, 255, 0.08);
          color: var(--accent-cyan);
          border-radius: 100px;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          border: 1px solid rgba(0, 243, 255, 0.15);
        }
      `})]})]})};export{c as ProjectModal};
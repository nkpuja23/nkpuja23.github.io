/**
 * Renders every section from content.js and handles the GSAP/Lenis Motion Engine.
 */
(function () {
  const c = SITE_CONTENT;

  // ---------- GSAP & Lenis Setup ----------
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.8, /* Increased for a more buttery glide */
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 0.7, /* Softens the scroll step */
  touchMultiplier: 2,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

  // ---------- DOM Population ----------
  document.getElementById("hero-name").textContent = c.identity.name;
  document.getElementById("hero-tagline").textContent = c.identity.tagline;
  document.getElementById("hero-subline").textContent = c.identity.subline;
  document.getElementById("resume-link").href = c.identity.resumeLink;
  const resumeLink2 = document.getElementById("resume-link-2");
  if (resumeLink2) resumeLink2.href = c.identity.resumeLink;
  document.title = c.identity.name + " — " + c.identity.tagline;
  // ---------- Magnetic UI ----------
const magneticEls = document.querySelectorAll('.btn-primary, .nav-links a');
magneticEls.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    gsap.to(btn, { x, y, duration: 0.3, ease: "power2.out" });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  });
});

  // ---------- About ----------
  document.getElementById("about-heading").textContent = c.about.heading;
  const aboutGrid = document.getElementById("about-grid");
  c.about.paragraphs.forEach((p) => {
    const el = document.createElement("p");
    el.textContent = p;
    aboutGrid.appendChild(el);
  });

  // ---------- The Serum-Ad Seamless Image Scrub ----------
  const heroImg = document.getElementById("hero-img");
  const aboutTarget = document.getElementById("about-profile-target");

  const buildScrubAnimation = () => {
    gsap.set(heroImg, { transformOrigin: "top left" });
    
    gsap.to(heroImg, {
      x: () => {
        const targetRect = aboutTarget.getBoundingClientRect();
        const startRect = heroImg.parentElement.getBoundingClientRect();
        return targetRect.left - startRect.left;
      },
      y: () => {
        const targetRect = aboutTarget.getBoundingClientRect();
        const startRect = heroImg.parentElement.getBoundingClientRect();
        return targetRect.top - startRect.top;
      },
      width: () => aboutTarget.getBoundingClientRect().width,
      height: () => aboutTarget.getBoundingClientRect().height,
      borderRadius: "28px", 
      borderWidth: "0px", 
      boxShadow: "none",
      ease: "none",
      scrollTrigger: {
        trigger: "body", 
        start: "top top",
        endTrigger: "#about",
        end: "center center",
        scrub: 1, 
        invalidateOnRefresh: true 
      }
    });
  };
  
  window.onload = buildScrubAnimation;
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });

  // ---------- Timeline (git log) ----------
  document.getElementById("timeline-heading").textContent = c.timeline.heading;
  document.getElementById("timeline-subheading").textContent = c.timeline.subheading;
  document.getElementById("timeline-branch-name").textContent = c.timeline.branch;
  const log = document.getElementById("log");
  c.timeline.entries.forEach((entry, i) => {
    const commit = document.createElement("div");
    commit.className = "commit reveal";
    commit.innerHTML = `
      <span class="commit-node" aria-hidden="true"></span>
      <button class="commit-row" aria-expanded="false">
        <span class="commit-meta"><span class="commit-hash">${entry.hash}</span><span>·</span><span>${entry.date}</span></span>
        <span class="commit-message">${entry.message}</span>
        <span class="commit-title">${entry.title} — ${entry.subtitle}</span>
      </button>
      <div class="commit-detail"><div class="commit-detail-inner"><p>${entry.body}</p><div class="commit-tags">${entry.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div></div></div>
    `;
    const row = commit.querySelector(".commit-row");
    row.addEventListener("click", () => {
      const isOpen = commit.classList.toggle("is-open");
      row.setAttribute("aria-expanded", String(isOpen));
    });
    log.appendChild(commit);
  });

  // ---------- Skills ----------
  document.getElementById("skills-heading").textContent = c.skills.heading;
  document.getElementById("skills-subheading").textContent = c.skills.subheading;
  const skillsGrid = document.getElementById("skills-grid");
  c.skills.items.forEach((s) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `<div class="skill-content"><div class="skill-cat">${s.category}</div><div class="skill-name">${s.name}</div><p>${s.description}</p></div>`;
    skillsGrid.appendChild(card);
  });

  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });

  // ---------- Featured project ----------
  const fp = c.featuredProject;
  document.getElementById("feature-heading").textContent = fp.heading;
  document.getElementById("feature-title").textContent = fp.title;
  document.getElementById("feature-desc").textContent = fp.description;
  const featureStack = document.getElementById("feature-stack");
  fp.stack.forEach((s) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = s;
    featureStack.appendChild(tag);
  });
  const featureLink = document.getElementById("feature-link");
  featureLink.href = fp.link;
  featureLink.textContent = fp.linkLabel + " →";

  // ---------- Works Section Interactive Canvas ----------
  const worksSection = document.getElementById('works');
  const worksData = c.works.items; 
  let globalIndex = 0;

  const activatePolaroid = (e, workItem) => {
    const polaroid = document.createElement("div");
    polaroid.className = "polaroid-trail";
    
    polaroid.style.position = "absolute";
    polaroid.style.width = "260px";
    polaroid.style.padding = "12px 12px 50px 12px";
    polaroid.style.background = "#f4f4f4";
    polaroid.style.boxShadow = "0 30px 60px rgba(0,0,0,0.5)";
    polaroid.style.zIndex = "2"; 
    
    // Make the generated polaroid clickable to open the iframe modal
    polaroid.style.pointerEvents = "auto";
    polaroid.style.cursor = "pointer";
    polaroid.addEventListener('click', (ev) => {
  ev.stopPropagation(); 
  if(workItem.link) {
    window.open(workItem.link, '_blank'); 
  }
});

    const img = document.createElement("img");
    img.src = workItem.image;
    img.style.width = "100%";
    img.style.height = "160px";
    img.style.objectFit = "cover";
    img.style.display = "block";
    img.style.border = "1px solid rgba(0,0,0,0.1)";

    const title = document.createElement("div");
    title.textContent = workItem.title;
    title.style.color = "#111";
    title.style.fontFamily = "var(--font-mono)";
    title.style.fontSize = "13px";
    title.style.textAlign = "center";
    title.style.marginTop = "16px";
    title.style.fontWeight = "bold";

    polaroid.appendChild(img);
    polaroid.appendChild(title);
    
    const rect = worksSection.getBoundingClientRect();
    polaroid.style.left = `${e.clientX - rect.left}px`;
    polaroid.style.top = `${e.clientY - rect.top}px`;
    
    const rotation = Math.random() * 40 - 20;
    polaroid.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0.4)`;
    polaroid.style.opacity = "0";
    polaroid.style.transition = "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s";
    
    worksSection.appendChild(polaroid);

    requestAnimationFrame(() => {
      polaroid.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
      polaroid.style.opacity = "1";
    });

    // Stays visible for longer so users have time to click it
    setTimeout(() => {
      polaroid.style.opacity = "0";
      setTimeout(() => polaroid.remove(), 600);
    }, 6000);
  };

  worksSection.addEventListener('click', (e) => {
    activatePolaroid(e, worksData[globalIndex % worksData.length]);
    globalIndex++;
  });

  // Modal close handler for works
  document.getElementById('close-works-modal').addEventListener('click', () => {
    document.getElementById('works-modal').classList.remove('is-open');
    document.getElementById('works-iframe').src = "";
  });

  // ---------- 3D Rotating LORs with Arrows ----------
  document.getElementById("lors-heading").textContent = c.lors.heading;
  const lorGrid = document.getElementById("lor-grid");
  
  c.lors.items.forEach((l) => {
    const card = document.createElement("div");
    card.className = "lor-card";
    card.innerHTML = `
      <div class="lor-thumb"><img src="${l.image}" alt="${l.name}" loading="lazy"></div>
      <div class="lor-body"><div class="lor-name">${l.name}</div><p class="lor-title">${l.title}</p></div>
    `;
    card.addEventListener("click", () => {
      document.getElementById("lor-modal").classList.add("is-open");
      document.getElementById("modal-img").src = l.image;
      document.getElementById("modal-name").textContent = l.name;
      document.getElementById("modal-title").textContent = l.title;
      document.getElementById("modal-fulltext").textContent = l.fullText || "";
    });
    lorGrid.appendChild(card);
  });

  const lorCardsNodes = document.querySelectorAll('.lor-card');
  const radius = window.innerWidth < 768 ? 200 : 380; 
  const angleStep = 360 / lorCardsNodes.length;

  lorCardsNodes.forEach((card, i) => {
    const angle = (i / lorCardsNodes.length) * Math.PI * 2;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    
    gsap.set(card, {
      x: x,
      z: z,
      rotationY: (angle * 180 / Math.PI)
    });
  });

  // Arrow Controls Logic
  let currentLorAngle = 0;

  document.getElementById("lor-prev").addEventListener("click", () => {
    currentLorAngle += angleStep;
    gsap.to("#lor-grid", { rotationY: currentLorAngle, duration: 0.8, ease: "power2.out" });
  });

  document.getElementById("lor-next").addEventListener("click", () => {
    currentLorAngle -= angleStep;
    gsap.to("#lor-grid", { rotationY: currentLorAngle, duration: 0.8, ease: "power2.out" });
  });

  const lorModal = document.getElementById("lor-modal");
  document.getElementById("close-modal").addEventListener("click", () => {
    lorModal.classList.remove("is-open");
  });
  window.addEventListener("click", (e) => {
    if (e.target === lorModal) lorModal.classList.remove("is-open");
    if (e.target === document.getElementById('works-modal')) {
      document.getElementById('works-modal').classList.remove('is-open');
      document.getElementById('works-iframe').src = "";
    }
  });

  // ---------- Activities & Contact ----------
  document.getElementById("activities-heading").textContent = c.activities.heading;
  document.getElementById("activities-desc").textContent = c.activities.description;
  const actImg = document.getElementById("activities-image");
  actImg.src = c.activities.image;

  document.getElementById("contact-heading").textContent = c.contact.heading;
  document.getElementById("contact-message").textContent = c.contact.message;
  const emailLink = document.getElementById("contact-email");
  emailLink.href = "mailto:" + c.identity.email;
  emailLink.textContent = c.identity.email;
  const phoneLink = document.getElementById("contact-phone");
  phoneLink.href = "tel:" + c.identity.phone.replace(/\s+/g, "");
  phoneLink.textContent = c.identity.phone;
  const linkedinLink = document.getElementById("contact-linkedin");
  linkedinLink.href = c.identity.linkedin;
  const githubLink = document.getElementById("contact-github");
  githubLink.href = c.identity.github;
  document.getElementById("footer-name").textContent = c.identity.shortName;
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- Standard Scroll Reveal Observer ----------
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
  document.querySelectorAll(".commit.reveal").forEach((el, i) => {
    el.style.transitionDelay = Math.min(i * 60, 300) + "ms";
  });
  
  // ---------- Fancy Lettering Effect ----------
  const headings = document.querySelectorAll('#hero-name, h2.section-head, #timeline-heading, #skills-heading');
  
  headings.forEach(heading => {
    const text = heading.textContent;
    if (!text || text === "Loading…") return; // Prevent splitting empty/unpopulated titles
    
    heading.innerHTML = ''; 
    
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char === ' ' ? '\u00A0' : char; 
      heading.appendChild(span);
    });

    // Special case for Hero Name: Animate immediately on load
    if (heading.id === 'hero-name') {
      gsap.to(heading.querySelectorAll('.char'), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "back.out(1.5)",
        delay: 0.2
      });
    } else {
      // Other section headings animate on scroll
      gsap.to(heading.querySelectorAll('.char'), {
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "back.out(1.5)"
      });
    }
  });
  
  // ---------- Shape Magic (ReactBits Vanilla Adaptation) ----------
  const shapeContainer = document.getElementById('shape-magic-container');
  if (shapeContainer) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, shapeContainer.clientWidth / shapeContainer.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(shapeContainer.clientWidth, shapeContainer.clientHeight);
    shapeContainer.appendChild(renderer.domElement);

    // Create a complex geometric wireframe
    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x5fd6c0, 
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    
    const magicShape = new THREE.Mesh(geometry, material);
    scene.add(magicShape);
    camera.position.z = 5;

    // Track mouse coordinates for interactive rotation
    let mouseX = 0;
    let mouseY = 0;
    shapeContainer.addEventListener('mousemove', (e) => {
      const rect = shapeContainer.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / shapeContainer.clientWidth) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / shapeContainer.clientHeight) * 2 + 1;
    });

    function animateShape() {
      requestAnimationFrame(animateShape);
      
      // Base rotation + mouse interaction
      magicShape.rotation.x += 0.003 + (mouseY * 0.02);
      magicShape.rotation.y += 0.005 + (mouseX * 0.02);
      
      // Morphing scale effect
      const time = Date.now() * 0.0015;
      const scale = 1 + Math.sin(time) * 0.15;
      magicShape.scale.set(scale, scale, scale);
      
      renderer.render(scene, camera);
    }
    animateShape();

    // Handle container resizing
    window.addEventListener('resize', () => {
      camera.aspect = shapeContainer.clientWidth / shapeContainer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(shapeContainer.clientWidth, shapeContainer.clientHeight);
    });
  }

  // ---------- Vanta.js 3D Net (Global Background) ----------
  // ---------- Vanta.js 3D Net (Hero Section Background) ----------
  VANTA.NET({
    el: ".hero", // Targets the hero section instead of the global canvas
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x5fd6c0,
    backgroundColor: 0x0e1015,
    points: 12.00,
    maxDistance: 22.00,
    spacing: 18.00
  });
  
  // ---------- Vanta.js Halo (Works Section Backdrop) ----------
  VANTA.HALO({
    el: "#works",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    baseColor: 0x5fd6c0,
    backgroundColor: 0x0e1015,
    amplitudeFactor: 1.50,
    size: 1.50
  });
})();
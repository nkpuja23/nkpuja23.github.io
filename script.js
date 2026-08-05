/**
 * Renders every section from content.js and handles the GSAP/Lenis Motion Engine.
 */
(function () {
  const c = SITE_CONTENT;

  // ---------- GSAP & Lenis Setup ----------
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
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

  // ---------- About ----------
  document.getElementById("about-heading").textContent = c.about.heading;
  const aboutGrid = document.getElementById("about-grid");
  c.about.paragraphs.forEach((p) => {
    const el = document.createElement("p");
    el.textContent = p;
    aboutGrid.appendChild(el);
  });

  // ---------- The Serum-Ad Seamless Image Scrub (Fixed Math) ----------
  const heroImg = document.getElementById("hero-img");
  const aboutTarget = document.getElementById("about-profile-target");

  const buildScrubAnimation = () => {
    // Ensure transform origins are top left for accurate coordinate mapping
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
      borderRadius: "28px", // Morph from circle to soft rectangle
      borderWidth: "1px",
      borderColor: "rgba(255,255,255,0.2)",
      boxShadow: "none",
      ease: "none",
      scrollTrigger: {
        trigger: "body", // Absolute page scroll tracking
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
    card.innerHTML = `<div class="skill-cat">${s.category}</div><div class="skill-name">${s.name}</div><p>${s.description}</p>`;
    skillsGrid.appendChild(card);
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

  // ---------- Works gallery (3D Modal Setup) ----------
  document.getElementById("works-heading").textContent = c.works.heading;
  document.getElementById("works-subheading").textContent = c.works.subheading;
  const worksGrid = document.getElementById("works-grid");
  c.works.items.forEach((w) => {
    const card = document.createElement("a");
    card.className = "work-card reveal";
    if (w.link) card.href = w.link;
    card.innerHTML = `
      <div class="work-thumb"><img src="${w.image}" alt="${w.title}" loading="lazy"></div>
      <div class="work-body"><div class="work-cat">${w.category}</div><div class="work-title">${w.title}</div><p>${w.description}</p></div>
    `;
    
    card.addEventListener('click', (e) => {
      if(w.link) {
        e.preventDefault();
        document.getElementById('works-modal').classList.add('is-open');
        document.getElementById('works-iframe').src = w.link; 
      }
    });
    worksGrid.appendChild(card);
  });

  document.getElementById('close-works-modal').addEventListener('click', () => {
    document.getElementById('works-modal').classList.remove('is-open');
    document.getElementById('works-iframe').src = "";
  });

  // ---------- Works Section Polaroid Cursor Trail (Re-routed) ----------
  const worksSection = document.getElementById('works');
  const travelImages = c.travels.images; 
  let globalIndex = 0;
  let last = { x: 0, y: 0 };

  const activatePolaroid = (e, imageSrc) => {
    const polaroid = document.createElement("img");
    polaroid.src = imageSrc;
    polaroid.className = "polaroid-trail";
    
    polaroid.style.position = "absolute";
    polaroid.style.width = "220px";
    polaroid.style.height = "260px";
    polaroid.style.objectFit = "cover";
    polaroid.style.padding = "10px 10px 45px 10px";
    polaroid.style.background = "#fff";
    polaroid.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
    polaroid.style.zIndex = "2"; // Underneath the works cards but above background
    
    // Map absolute mouse position strictly to the works block
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

    setTimeout(() => {
      polaroid.style.opacity = "0";
      setTimeout(() => polaroid.remove(), 500);
    }, 2200);
  };

  worksSection.addEventListener('mousemove', (e) => {
    const distance = Math.hypot(e.clientX - last.x, e.clientY - last.y);
    if (distance > 120) {
      last = { x: e.clientX, y: e.clientY };
      activatePolaroid(e, travelImages[globalIndex % travelImages.length]);
      globalIndex++;
    }
  });

  // ---------- 3D Rotating LORs ----------
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

  gsap.to("#lor-grid", {
    rotationY: 360,
    ease: "none",
    scrollTrigger: {
      trigger: "#lors",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5
    }
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

  // Background Motion Canvas Network logic
  const canvas = document.getElementById("motion-canvas");
  const context = canvas ? canvas.getContext("2d") : null;
  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
  const particles = [];
  const palette = { accent2: [95, 214, 192], neutral: [255, 255, 255] };

  function resizeCanvas() {
    if (!canvas || !context) return;
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }

  function randomBetween(min, max) { return min + Math.random() * (max - min); }
  function spawnParticle(x, y) {
    particles.push({ x, y, vx: randomBetween(-0.7, 0.7), vy: randomBetween(-0.7, 0.7), radius: randomBetween(1.5, 4.2), alpha: 1, life: randomBetween(60, 110) });
    if (particles.length > 140) particles.splice(0, particles.length - 140);
  }

  function renderCanvas() {
    if (!canvas || !context) return;
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 240);
    glow.addColorStop(0, "rgba(95,214,192,0.18)");
    glow.addColorStop(0.35, "rgba(95,214,192,0.02)");
    glow.addColorStop(1, "transparent");
    context.fillStyle = glow;
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dist = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
        if (dist < 110) {
          context.strokeStyle = `rgba(${palette.accent2.join(",")}, ${0.11 - dist / 900})`;
          context.lineWidth = 1;
          context.beginPath(); context.moveTo(a.x, a.y); context.lineTo(b.x, b.y); context.stroke();
        }
      }
    }
    
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.alpha *= 0.987; p.life -= 1;
      if (p.life > 0) {
        context.beginPath();
        context.fillStyle = `rgba(${palette.neutral.join(",")}, ${p.alpha})`;
        context.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        context.fill();
      }
    });

    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i].life <= 0 || particles[i].alpha <= 0.03) particles.splice(i, 1);
    }
    requestAnimationFrame(renderCanvas);
  }

  if (canvas && context) {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (event) => {
      pointer.x = event.clientX; pointer.y = event.clientY; pointer.active = true;
      spawnParticle(pointer.x, pointer.y);
    });
    window.addEventListener("mouseleave", () => { pointer.active = false; });
    document.addEventListener("scroll", () => {
      if (!pointer.active) return;
      spawnParticle(pointer.x + randomBetween(-24, 24), pointer.y + randomBetween(-24, 24));
    }, { passive: true });
    renderCanvas();
  }
})();
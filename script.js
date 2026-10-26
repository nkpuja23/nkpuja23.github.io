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
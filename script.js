/**
 * Renders every section from content.js and wires up interactions.
 * You should not need to edit this file to update your content —
 * edit content.js instead.
 */
(function () {
  const c = SITE_CONTENT;

  // ---------- Hero ----------
  document.getElementById("hero-name").textContent = c.identity.name;
  document.getElementById("hero-tagline").textContent = c.identity.tagline;
  document.getElementById("hero-subline").textContent = c.identity.subline;
  document.getElementById("resume-link").href = c.identity.resumeLink;
  document.getElementById("hero-img").src = c.identity.heroImage;
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
        <span class="commit-meta">
          <span class="commit-hash">${entry.hash}</span>
          <span>·</span>
          <span>${entry.date}</span>
        </span>
        <span class="commit-message">${entry.message}</span>
        <span class="commit-title">${entry.title} — ${entry.subtitle}</span>
      </button>
      <div class="commit-detail">
        <div class="commit-detail-inner">
          <p>${entry.body}</p>
          <div class="commit-tags">
            ${entry.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
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
    card.innerHTML = `
      <div class="skill-cat">${s.category}</div>
      <div class="skill-name">${s.name}</div>
      <p>${s.description}</p>
    `;
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

  // ---------- Works gallery ----------
  document.getElementById("works-heading").textContent = c.works.heading;
  document.getElementById("works-subheading").textContent = c.works.subheading;
  const worksGrid = document.getElementById("works-grid");
  c.works.items.forEach((w) => {
    const card = document.createElement(w.link ? "a" : "div");
    card.className = "work-card reveal";
    if (w.link) { card.href = w.link; card.target = "_blank"; card.rel = "noopener"; }
    card.innerHTML = `
      <div class="work-thumb"><img src="${w.image}" alt="${w.title}" loading="lazy"></div>
      <div class="work-body">
        <div class="work-cat">${w.category}</div>
        <div class="work-title">${w.title}</div>
        <p>${w.description}</p>
      </div>
    `;
    worksGrid.appendChild(card);
  });

  // ---------- LORs ----------
  document.getElementById("lors-heading").textContent = c.lors.heading;
  const lorGrid = document.getElementById("lor-grid");
  
  c.lors.items.forEach((l) => {
    const card = document.createElement("div");
    card.className = "lor-card reveal";
    card.innerHTML = `
      <div class="lor-thumb"><img src="${l.image}" alt="Letter of recommendation from ${l.name}" loading="lazy"></div>
      <div class="lor-body">
        <div class="lor-name">${l.name}</div>
        <p class="lor-title">${l.title}</p>
      </div>
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

  const lorModal = document.getElementById("lor-modal");
  document.getElementById("close-modal").addEventListener("click", () => {
    lorModal.classList.remove("is-open");
  });
  window.addEventListener("click", (e) => {
    if (e.target === lorModal) lorModal.classList.remove("is-open");
  });

  // ---------- Activities ----------
  document.getElementById("activities-heading").textContent = c.activities.heading;
  document.getElementById("activities-desc").textContent = c.activities.description;
  const actImg = document.getElementById("activities-image");
  actImg.src = c.activities.image;
  actImg.alt = "Activity board";

  // ---------- Contact ----------
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

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Stagger the timeline commits slightly for a nicer cascade
  document.querySelectorAll(".commit.reveal").forEach((el, i) => {
    el.style.transitionDelay = Math.min(i * 60, 300) + "ms";
  });

  // ---------- Motion canvas & cursor graphics ----------
  const canvas = document.getElementById("motion-canvas");
  const context = canvas ? canvas.getContext("2d") : null;
  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
  const particles = [];

  const palette = {
    accent: [232, 163, 61],
    accent2: [95, 214, 192],
    neutral: [255, 255, 255]
  };

  function resizeCanvas() {
    if (!canvas || !context) return;
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function spawnParticle(x, y) {
    particles.push({
      x,
      y,
      vx: randomBetween(-0.7, 0.7),
      vy: randomBetween(-0.7, 0.7),
      radius: randomBetween(1.5, 4.2),
      alpha: 1,
      life: randomBetween(60, 110),
      hue: randomBetween(176, 214)
    });
    if (particles.length > 140) particles.splice(0, particles.length - 140);
  }

  function drawParticle(p) {
    context.save();
    context.globalAlpha = p.alpha * 0.85;
    const gradient = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
    gradient.addColorStop(0, `rgba(${palette.accent2.join(",")}, 0.9)`);
    gradient.addColorStop(0.22, `rgba(${palette.accent2.join(",")}, 0.12)`);
    gradient.addColorStop(1, "transparent");
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
    context.fill();
    context.restore();

    context.beginPath();
    context.fillStyle = `rgba(${palette.neutral.join(",")}, ${p.alpha})`;
    context.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    context.fill();
  }

  function drawNetwork() {
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          context.strokeStyle = `rgba(${palette.accent2.join(",")}, ${0.11 - dist / 900})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }
    }
  }

  function renderCanvas() {
    if (!canvas || !context) return;
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.lineWidth = 1;

    const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 240);
    glow.addColorStop(0, "rgba(95,214,192,0.18)");
    glow.addColorStop(0.35, "rgba(95,214,192,0.02)");
    glow.addColorStop(1, "transparent");
    context.fillStyle = glow;
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    if (pointer.active) {
      context.strokeStyle = "rgba(255,255,255,0.08)";
      context.beginPath();
      context.arc(pointer.x, pointer.y, 48, 0, Math.PI * 2);
      context.stroke();
      context.strokeStyle = "rgba(232,163,61,0.12)";
      context.beginPath();
      context.arc(pointer.x, pointer.y, 98, 0, Math.PI * 2);
      context.stroke();
    }

    drawNetwork();
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha *= 0.987;
      p.life -= 1;
      if (p.life > 0) drawParticle(p);
    });

    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i].life <= 0 || particles[i].alpha <= 0.03) particles.splice(i, 1);
    }

    requestAnimationFrame(renderCanvas);
  }

  function applyTiltEffect(element, clientX, clientY, intensity = 8) {
    const rect = element.getBoundingClientRect();
    const offsetX = clientX - (rect.left + rect.width / 2);
    const offsetY = clientY - (rect.top + rect.height / 2);
    const rotateY = (offsetX / (rect.width / 2)) * intensity;
    const rotateX = -(offsetY / (rect.height / 2)) * intensity;
    element.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function resetTiltEffect(element) {
    element.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
  }

  function initMotion() {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      spawnParticle(pointer.x, pointer.y);
    });
    window.addEventListener("mouseleave", () => {
      pointer.active = false;
    });
    document.addEventListener("scroll", () => {
      if (!pointer.active) return;
      spawnParticle(pointer.x + randomBetween(-24, 24), pointer.y + randomBetween(-24, 24));
    }, { passive: true });

    const heroWrapper = document.querySelector(".hero-image-wrapper");
    if (heroWrapper) {
      heroWrapper.addEventListener("mousemove", (event) => {
        applyTiltEffect(heroWrapper, event.clientX, event.clientY, 8);
      });
      heroWrapper.addEventListener("mouseleave", () => {
        resetTiltEffect(heroWrapper);
      });
    }

    document.querySelectorAll(".work-card").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        applyTiltEffect(card, event.clientX, event.clientY, 6);
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
      card.addEventListener("mouseenter", () => {
        card.style.transition = "transform 0.18s ease";
      });
    });

    renderCanvas();
  }

  const heroImage = document.getElementById("hero-img");
  const aboutTarget = document.getElementById("about-profile-target");
  const aboutSection = document.getElementById("about");
  const portraitClone = document.createElement("img");
  portraitClone.id = "portrait-clone";
  portraitClone.style.position = "fixed";
  portraitClone.style.pointerEvents = "none";
  portraitClone.style.transition = "transform 0.7s ease, left 0.7s ease, top 0.7s ease, width 0.7s ease, height 0.7s ease, opacity 0.4s ease";
  portraitClone.style.opacity = "0";
  portraitClone.style.zIndex = "21";
  portraitClone.style.objectFit = "cover";
  portraitClone.style.borderRadius = "50%";
  document.body.appendChild(portraitClone);

  let portraitAnimated = false;
  const heroSection = document.querySelector(".hero");
  let frameRange = { start: 0, end: 0 };

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function updateFrameRange() {
    if (!heroSection || !aboutSection) return;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const startPoint = heroBottom - window.innerHeight * 0.3;
    const endPoint = aboutSection.offsetTop - window.innerHeight * 0.18;
    frameRange.start = startPoint;
    frameRange.end = Math.max(startPoint + 100, endPoint);
  }

  function updateFrameProgress() {
    if (!heroSection || !aboutSection) return;
    const scrollY = window.scrollY;
    const progress = clamp((scrollY - frameRange.start) / (frameRange.end - frameRange.start), 0, 1);
    document.documentElement.style.setProperty("--frame-progress", progress.toFixed(3));
    if (progress > 0.62 && !portraitAnimated) {
      triggerPortraitMove();
    }
  }

  function triggerPortraitMove() {
    if (portraitAnimated || !heroImage || !aboutTarget || !aboutSection) return;
    const heroRect = heroImage.getBoundingClientRect();
    const targetRect = aboutTarget.getBoundingClientRect();
    portraitClone.src = heroImage.src;
    portraitClone.style.width = `${heroRect.width}px`;
    portraitClone.style.height = `${heroRect.height}px`;
    portraitClone.style.left = `${heroRect.left}px`;
    portraitClone.style.top = `${heroRect.top}px`;
    portraitClone.style.opacity = "1";
    portraitClone.style.borderRadius = getComputedStyle(heroImage).borderRadius || "50%";

    window.requestAnimationFrame(() => {
      portraitClone.style.left = `${targetRect.left}px`;
      portraitClone.style.top = `${targetRect.top}px`;
      portraitClone.style.width = `${targetRect.width}px`;
      portraitClone.style.height = `${targetRect.height}px`;
    });

    portraitClone.addEventListener("transitionend", () => {
      aboutTarget.innerHTML = "";
      const finalImg = document.createElement("img");
      finalImg.src = heroImage.src;
      finalImg.alt = heroImage.alt;
      finalImg.className = "about-portrait-final";
      aboutTarget.appendChild(finalImg);
      portraitClone.style.opacity = "0";
      portraitAnimated = true;
    }, { once: true });
  }

  if (aboutSection && "IntersectionObserver" in window) {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.22) {
          triggerPortraitMove();
        }
      });
    }, { threshold: [0.22] });
    aboutObserver.observe(aboutSection);
  }

  updateFrameRange();
  updateFrameProgress();
  window.addEventListener("resize", updateFrameRange);
  window.addEventListener("scroll", updateFrameProgress, { passive: true });

  if (canvas && context) {
    initMotion();
  }
})();

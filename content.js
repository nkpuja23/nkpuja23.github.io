/**
 * ============================================================
 *  CONTENT.JS
 * ============================================================
 */

const SITE_CONTENT = {
  // ---------- Top of page / hero ----------
  identity: {
    name: "Nagapujitha Karthikeyan",
    shortName: "Puja",
    tagline: "CS major & aspiring AI engineer",
    subline: "Incoming @ UMass Amherst, Fall 2026 — previously ICAS, MAHE",
    resumeLink: "NagapujithaCV.pdf",
    email: "nkpuja23@gmail.com",
    phone: "+91 636 442 1819",
    linkedin: "https://www.linkedin.com/in/nagapujitha-karthikeyan-225226318",
    github: "https://github.com/nkpuja23",
    heroImage: "puja-hero-nobg.png"
  },

  // ---------- About section ----------
  about: {
    heading: "About",
    paragraphs: [
      "My journey in computer science has been shaped by a pull toward turning complex ideas into things that actually work. Alongside a 3.906 CGPA, I've stayed hands-on — researching with the Enigma Technical Society and independently building full-stack web applications that can scale.",
      "My technical foundation spans C++, Java, Python, Machine Learning, and DBMS, aimed at one goal: becoming an AI engineer who ships intelligent systems. I've applied that foundation in the lab and through active volunteer work with Enigma, the student-led technical and innovation club.",
      "I'm making the jump to UMass Amherst this fall to keep accelerating that focus on AI. I am ready to start paving the way for my own entrepreneurial path. This site is the log of how I got here."
    ]
  },

  // ---------- Git-log style timeline ----------
  timeline: {
    heading: "Journey Log",
    subheading: "Every stage, committed.",
    branch: "main",
    entries: [
      { hash: "f3a91c2", date: "Jul 2025 — May 2026", title: "ICAS, MAHE", subtitle: "Year II · College", message: "feat: deepen focus on AI/DL, take on leadership", body: "Diving into AI and Deep Learning electives while channeling leadership as Foreign University Secretary.", tags: ["AI", "Deep Learning", "Leadership"] },
      { hash: "b7e2d40", date: "Aug 2024 — Mar 2025", title: "ICAS, MAHE", subtitle: "Year I · College", message: "feat: onboard to college life, take Class Rep role", body: "Earned a 3.86 CGPA while embracing leadership as Class Representative.", tags: ["Academics", "Class Representative", "Mentoring"] },
      { hash: "9c14aa1", date: "Jun 2023 — May 2024", title: "Global Indian International School", subtitle: "Grade 12", message: "fix: lock in on board prep, ship 92.6%", body: "Extreme focus on board preparation, resulting in a 92.6% score.", tags: ["Board Exams", "92.6%"] }
    ]
  },

  // ---------- Skills ----------
  skills: {
    heading: "Stack",
    subheading: "Technical foundation and the traits that put it to use.",
    items: [
      { name: "C++", category: "Language", description: "Strong computational foundation — completed all lab exercises with an 'A' grade, building discipline in efficient algorithmic execution." },
      { name: "Java (OOP)", category: "Language", description: "Mastered object-oriented principles — structuring large-scale, reusable, modular code." },
      { name: "Python", category: "Language", description: "The versatile core of my toolkit, applied across ML experimentation and general scripting." },
      { name: "Machine Learning", category: "Focus", description: "Building toward AI engineering — from foundational theory to applied electives in Deep Learning." },
      { name: "HTML / CSS / JS", category: "Web", description: "Practical front-end skills proven by translating ideas into functional, working interfaces." }
    ]
  },

  // ---------- Featured project ----------
  featuredProject: {
    heading: "Featured Build",
    title: "Online Doctor Appointment System",
    description: "A foundational full-stack exercise demonstrating robust proficiency in the PHP and MySQL environment.",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/nkpuja23/Online-Doctor-Appointment-System",
    linkLabel: "View source on GitHub"
  },

  // ---------- Works gallery ----------
  works: {
    heading: "Works",
    subheading: "Technical proficiency in full-stack fundamentals.",
    items: [
      { image: "images/ss_1.png", title: "Doctor App — Home Page", category: "Web Development", description: "Initial user entry point.", link: "https://github.com/nkpuja23/Online-Doctor-Appointment-System" },
      { image: "images/ss_2.png", title: "Doctor App — Booking Logic", category: "Web Development", description: "The core scheduling form.", link: "https://github.com/nkpuja23/Online-Doctor-Appointment-System" },
      { image: "images/drawing_1.png", title: "Traditional Sketch I", category: "Artwork", description: "Visual detail outside programming." }
    ]
  },

  // ---------- Travel Imagery array ----------
  travels: {
    images: [
      'images/travel_1.jpg', // Load your exported IG content here
      'images/travel_2.jpg',
      'images/travel_3.jpg',
      'images/travel_4.jpg',
      'images/travel_5.jpg'
    ]
  },

  // ---------- Letters of recommendation ----------
  lors: {
    heading: "In Their Words",
    items: [
      { image: "images/ArtiMaam_LOR-1.png", name: "Ms. Arti Pawar", title: "Assistant Professor", fullText: "Excerpt text..." },
      { image: "images/RaghavendraSir_LOR-1.png", name: "Dr. Raghavendra K. G", title: "Assistant Professor", fullText: "Excerpt text..." },
      { image: "images/NagrajSir_LOR-1.png", name: "Dr. Nagraj Naik", title: "Associate Professor", fullText: "Excerpt text..." }
    ]
  },

  // ---------- Activities ----------
  activities: {
    heading: "Beyond the Code",
    description: "Community engagement, creative expression, and teamwork.",
    image: "images/activity-board.png"
  },

  // ---------- Contact ----------
  contact: {
    heading: "Get In Touch",
    message: "Open to conversations about AI, research, or opportunities at UMass and beyond."
  }
};
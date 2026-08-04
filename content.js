/**
 * ============================================================
 *  CONTENT.JS — everything on the site that you'll want to edit
 *  lives here. Layout code (index.html, style.css, script.js)
 *  never needs to change when you update your info.
 *
 *  HOW TO EDIT:
 *  - Change the text between quotes " ".
 *  - To add a new timeline entry / skill / project photo, copy
 *    an existing object inside the array (the { ... } block)
 *    and paste it above or below, then edit the fields.
 *  - Don't remove commas between items.
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
    heroImage: "Site_pic.png" // <-- ADD THIS
  },

  // ---------- About section ----------
  about: {
    heading: "About",
    paragraphs: [
      "My journey in computer science has been shaped by a pull toward turning complex ideas into things that actually work. Alongside a 3.906 CGPA, I've stayed hands-on — researching with the Enigma Technical Society and independently building full-stack web applications.",
      "My technical foundation spans C++, Java, Python, Machine Learning, and DBMS, aimed at one goal: becoming an AI engineer who ships. I've applied that foundation in the lab and through active volunteer work with Enigma, the student-led technical and innovation club.",
      "I'm making the jump to UMass Amherst this fall to keep accelerating that focus on AI — and to start paving the way for my own entrepreneurial path. This site is the log of how I got here."
    ]
  },

  // ---------- Git-log style timeline (signature section) ----------
  timeline: {
    heading: "Journey Log",
    subheading: "Every stage, committed.",
    branch: "main",
    entries: [
      {
        hash: "f3a91c2",
        date: "Jul 2025 — May 2026",
        title: "International Centre for Applied Sciences (ICAS), MAHE",
        subtitle: "Year II · College",
        message: "feat: deepen focus on AI/DL, take on leadership",
        body: "Diving into AI and Deep Learning electives while channeling leadership as Foreign University Secretary. Kept the creative side alive — sang for the juniors' Reverb — all while working toward a global transfer.",
        tags: ["AI", "Deep Learning", "Leadership"]
      },
      {
        hash: "b7e2d40",
        date: "Aug 2024 — Mar 2025",
        title: "International Centre for Applied Sciences (ICAS), MAHE",
        subtitle: "Year I · College",
        message: "feat: onboard to college life, take Class Rep role",
        body: "Earned a 3.86 CGPA while embracing leadership as Class Representative. Stayed involved in campus culture — performed in Reverb/Annual Day, marched in the Independence Day Parade — and mentored incoming students.",
        tags: ["Academics", "Class Representative", "Mentoring"]
      },
      {
        hash: "9c14aa1",
        date: "Jun 2023 — May 2024",
        title: "Global Indian International School",
        subtitle: "Grade 12",
        message: "fix: lock in on board prep, ship 92.6%",
        body: "Extreme focus on board preparation, resulting in a 92.6% score. Extended that discipline to helping teachers and classmates — refined the work ethic and self-discipline that carried into university.",
        tags: ["Board Exams", "92.6%"]
      },
      {
        hash: "5d802f6",
        date: "May 2022 — Apr 2023",
        title: "Global Indian International School",
        subtitle: "Grade 11",
        message: "feat: expand reach — competitions, mentoring, 91.2%",
        body: "Ranked 15th internationally in IEO and competed in a table tennis tournament, while scoring 91.2% and mentoring peers — reinforcing a commitment to academic excellence and collaboration.",
        tags: ["IEO — Rank 15", "91.2%"]
      },
      {
        hash: "1a4bd93",
        date: "Jun 2021 — Apr 2022",
        title: "Global Indian International School",
        subtitle: "Grade 10",
        message: "feat: navigate hybrid learning, ship 94.8% + scholarship",
        body: "Bridged online and offline learning under intense board exam prep. Achieved 94.8% in the final offline boards and secured a merit scholarship — validating consistent effort under pressure.",
        tags: ["94.8%", "Merit Scholarship"]
      },
      {
        hash: "0e1c7b8",
        date: "Mar 2020 — Apr 2021",
        title: "Global Indian International School",
        subtitle: "Grade 9",
        message: "fix: adapt to sudden shift to remote learning (COVID-19)",
        body: "Quickly adapted to e-learning, tackling online exams and pre-board prep through lockdown constraints — staying focused despite limited activities.",
        tags: ["Adaptability", "Remote Learning"]
      }
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
      { name: "DBMS", category: "Focus", description: "Relational schema design and query fundamentals — applied directly in full-stack projects." },
      { name: "HTML / CSS / JS", category: "Web", description: "Practical front-end skills proven by translating ideas into functional, working interfaces." },
      { name: "Communication", category: "Soft Skill", description: "Comfortable articulating complex technical ideas to diverse audiences, honed through leadership roles." },
      { name: "Leadership", category: "Soft Skill", description: "Proven through service as Class Representative and Foreign University Secretary — advocating for peers and exceeding expectations." },
      { name: "Proactiveness", category: "Soft Skill", description: "Anticipating hurdles and delivering milestones ahead of schedule — quality work shouldn't wait." }
    ]
  },

  // ---------- Featured project ----------
  featuredProject: {
    heading: "Featured Build",
    title: "Online Doctor Appointment System",
    description: "A foundational full-stack exercise demonstrating robust proficiency in the PHP and MySQL environment — implementing complex CRUD operations and a secure relational schema for managing patient, doctor, and appointment data.",
    stack: ["PHP", "MySQL (XAMPP)", "HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/nkpuja23/Online-Doctor-Appointment-System",
    linkLabel: "View source on GitHub"
  },

  // ---------- Works gallery (screenshots + creative work) ----------
  works: {
    heading: "Works",
    subheading: "Technical proficiency in full-stack fundamentals, alongside a complementary passion for creative arts.",
    items: [
      {
        image: "images/ss_1.png",
        title: "Doctor App — Home Page",
        category: "Web Development",
        description: "Initial user entry point, demonstrating basic HTML structure and form handling for user authentication.",
        link: "https://github.com/nkpuja23/Online-Doctor-Appointment-System"
      },
      {
        image: "images/drawing_1.png",
        title: "Traditional Sketch I",
        category: "Artwork",
        description: "A piece showcasing creative skill and attention to visual detail outside of programming."
      },
      {
        image: "images/ss_2.png",
        title: "Doctor App — Booking Logic",
        category: "Web Development",
        description: "The core scheduling form, demonstrating form validation and server-side interaction (PHP/MySQL).",
        link: "https://github.com/nkpuja23/Online-Doctor-Appointment-System"
      },
      {
        image: "images/drawing_2.png",
        title: "Traditional Sketch II",
        category: "Artwork",
        description: "Focus on shading — attention to detail and the ability to execute complex forms in a non-technical medium."
      },
      {
        image: "images/ss_3.png",
        title: "Doctor App — Data Management",
        category: "Web Development",
        description: "Internal data handling and dashboard view, proving integration and management of the MySQL database.",
        link: "https://github.com/nkpuja23/Online-Doctor-Appointment-System"
      },
      {
        image: "images/drawing_3.png",
        title: "Abstract Creation: Perspective Drawing",
        category: "Artwork",
        description: "A final piece emphasizing creativity and abstract thinking, complementing a logical CS background."
      }
    ]
  },

  // ---------- Letters of recommendation ----------
  lors: {
    heading: "In Their Words",
    items: [
      { 
        image: "images/ArtiMaam_LOR-1.png", 
        name: "Ms. Arti Pawar", 
        title: "Assistant Professor — Data Science & Computer Applications, ICAS, MAHE",
        fullText: "Paste the full text of Ms. Arti Pawar's recommendation letter here so it can be read in the pop-up." // <-- ADD THIS
      },
      { 
        image: "images/RaghavendraSir_LOR-1.png", 
        name: "Dr. Raghavendra K. G", 
        title: "Assistant Professor — Department of Physics, ICAS, MAHE",
        fullText: "It is with great pleasure that I write this letter of recommendation for Ms. Nagapujitha Karthikeyan, a student of B.Sc. (Applied Sciences) with specialization in Computer Science, for admission to your esteemed institution. I have had the privilege of serving as her mentor and instructor in my capacity as Assistant Professor of Physics at the International Centre for Applied Sciences (ICAS), Manipal, over the past eighteen months. During this period, Ms. Nagapujitha successfully completed two core Physics courses under my guidance, spanning the first and second semesters (October 2024 – May 2025). She consistently demonstrated a high level of intellectual curiosity, discipline, and analytical ability. Her academic performance was exemplary, earning top grades in both courses. Her diligence, conceptual clarity, and commitment to continuous improvement were particularly noteworthy. Beyond her curricular commitments, Ms. Nagapujitha has displayed commendable initiative in broadening her technical expertise. She has undertaken several professional certifications in C++ programming, web development, and related domains, underscoring her motivation to strengthen her computational and problem-solving skills. Notably, she contributed to the development of an online doctor appointment portal, an excellent example of her capacity to translate theoretical knowledge into practical applications. In addition to her academic and technical pursuits, Ms. Nagapujitha has shown strong leadership and interpersonal abilities. As a Class Committee Leader during her first year at ICAS, she effectively served as a liaison between faculty and students, facilitating communication and coordination with maturity and responsibility. With her strong academic foundation, technical acumen, and leadership potential, Ms. Nagapujitha is well-prepared to excel in a rigorous academic environment. I have no doubt that she will make significant contributions to your institution’s academic community. I therefore strongly recommend Ms. Nagapujitha Karthikeyan for admission to your program and wish her continued success in all her future academic and professional pursuits. Dr. Raghavendra K. G, Assistant Professor –Dept. of Physics, International Centre for Applied Sciences, Manipal Academy of Higher Education, Manipal, INDIA - 576104, Contact No: +91 9524236721, Email: raghavendra.kg@manipal.edu"
      },
      { 
        image: "images/NagrajSir_LOR-1.png", 
        name: "Dr. Nagraj Naik", 
        title: "Associate Professor — School of Computer Engineering, ICAS, MAHE",
        fullText: "Paste the full text of Dr. Nagraj's recommendation letter here." // <-- ADD THIS
      }
    ]
  },

  // ---------- Activities ----------
  activities: {
    heading: "Beyond the Code",
    description: "Community engagement, creative expression, and teamwork shape my perspective as much as any technical pursuit. A snapshot of non-technical activities from 2023–25.",
    image: "images/activity-board.png"
  },

  // ---------- Contact / footer ----------
  contact: {
    heading: "Get In Touch",
    message: "Open to conversations about AI, research, or opportunities at UMass and beyond. If you'd like to talk, reach out — I'll get back to you."
  }
};

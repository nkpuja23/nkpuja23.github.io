/**
 * ============================================================
 *  CONTENT.JS
 * ============================================================
 */

const SITE_CONTENT = {
  identity: {
    name: "Nagapujitha Karthikeyan",
    shortName: "Puja",
    tagline: "CS major & aspiring AI engineer",
    subline: "Incoming @ UMass Amherst, Fall 2026 — previously ICAS, MAHE",
    resumeLink: "Nagapujitha_Karthikeyan_Resume.pdf",
    email: "nkpuja23@gmail.com",
    phone: "+91 636 442 1819",
    linkedin: "https://www.linkedin.com/in/nagapujitha-karthikeyan-225226318",
    github: "https://github.com/nkpuja23",
    heroImage: "puja-hero-nobg.png" 
  },

  about: {
    heading: "About",
    paragraphs: [
      "My journey in computer science has been shaped by a pull toward turning complex ideas into things that actually work. Alongside a 3.906 CGPA, I've stayed hands-on — researching with the Enigma Technical Society and independently building full-stack web applications that can scale.",
      "My technical foundation spans C++, Java, Python, Machine Learning, and DBMS, aimed at one goal: becoming an AI engineer who ships intelligent systems. I've applied that foundation in the lab and through active volunteer work with Enigma, the student-led technical and innovation club.",
      "I'm making the jump to UMass Amherst this fall to keep accelerating that focus on AI. I am ready to start paving the way for my own entrepreneurial path. This site is the log of how I got here."
    ]
  },

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
        body: "Diving into AI and Deep Learning electives while channeling leadership as Foreign University Secretary. Kept the creative side alive and sang for the juniors' Reverb, all while working toward a global transfer.",
        tags: ["AI", "Deep Learning", "Leadership"]
      },
      {
        hash: "b7e2d40",
        date: "Aug 2024 — Mar 2025",
        title: "International Centre for Applied Sciences (ICAS), MAHE",
        subtitle: "Year I · College",
        message: "feat: onboard to college life, take Class Rep role",
        body: "Earned a 3.86 CGPA while embracing leadership as Class Representative. Stayed involved in campus culture by performing in Reverb/Annual Day, marched in the Independence Day Parade and mentored incoming students.",
        tags: ["Academics", "Class Representative", "Mentoring"]
      },
      {
        hash: "9c14aa1",
        date: "Jun 2023 — May 2024",
        title: "Global Indian International School",
        subtitle: "Grade 12",
        message: "fix: lock in on board prep, ship 92.6%",
        body: "Extreme focus on board preparation, resulting in a 92.6% score. Extended that discipline to helping teachers and classmates by refining the work ethic and self-discipline that carried into university.",
        tags: ["Board Exams", "92.6%"]
      },
      {
        hash: "5d802f6",
        date: "May 2022 — Apr 2023",
        title: "Global Indian International School",
        subtitle: "Grade 11",
        message: "feat: expand reach — competitions, mentoring, 91.2%",
        body: "Ranked 15th internationally in IEO and competed in a table tennis tournament, while scoring 91.2% and mentoring peers, thus reinforcing a commitment to academic excellence and collaboration.",
        tags: ["IEO — Rank 15", "91.2%"]
      },
      {
        hash: "1a4bd93",
        date: "Jun 2021 — Apr 2022",
        title: "Global Indian International School",
        subtitle: "Grade 10",
        message: "feat: navigate hybrid learning, ship 94.8% + scholarship",
        body: "Bridged online and offline learning under intense board exam prep. Achieved 94.8% in the final offline boards and secured a merit scholarship, thus validating consistent effort under pressure.",
        tags: ["94.8%", "Merit Scholarship"]
      },
      {
        hash: "0e1c7b8",
        date: "Mar 2020 — Apr 2021",
        title: "Global Indian International School",
        subtitle: "Grade 9",
        message: "fix: adapt to sudden shift to remote learning (COVID-19)",
        body: "Quickly adapted to e-learning, tackling online exams and pre-board prep through lockdown constraints by staying focused despite limited activities.",
        tags: ["Adaptability", "Remote Learning"]
      }
    ]
  },

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

  featuredProject: {
    heading: "Featured Build",
    title: "Online Doctor Appointment System",
    description: "A foundational full-stack exercise demonstrating robust proficiency in the PHP and MySQL environment — implementing complex CRUD operations and a secure relational schema for managing patient, doctor, and appointment data with product-ready thinking.",
    stack: ["PHP", "MySQL (XAMPP)", "HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/nkpuja23/Online-Doctor-Appointment-System",
    linkLabel: "View source on GitHub"
  },

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

  // Travel polaroids for the interactive Works cursor trail
  travels: {
    images: [
      'images/travel_1.jpg',
      'images/travel_2.jpg',
      'images/travel_3.jpg',
      'images/travel_4.jpg',
      'images/travel_5.jpg'
    ]
  },

  lors: {
    heading: "In Their Words",
    items: [
      { 
        image: "images/ArtiMaam_LOR-1.png", 
        name: "Ms. Arti Pawar", 
        title: "Assistant Professor",
        fullText: "To Whom It May Concern, It is my privilege to recommend Ms. Nagapujitha Karthikeyan, a student of mine at the International Centre for Applied Sciences (ICAS), MAHE, as she continues her education at your esteemed university. Nagapujitha has consistently distinguished herself through outstanding academic excellence. She secured a full 4.0 GPA in her second semester. In addition to maintaining top grades at her school, at ICAS, she has continued to remain among the top achievers of her class, combining diligence with intellectual rigour. Her leadership and initiative are equally commendable. She served as class representative in her first year, responsibly bridging communication between students and faculty while creating and sharing meticulous notes for her peers. In her second year, she successfully served as the Foreign Facilitation Secretary. Nagapujitha is also an active participant beyond academics. She has excelled in sports by winning multiple races on sports day and has enthusiastically contributed to cultural programs, gracing us with melodious tunes, participating in Independence Day parades, and other events. Balancing her diverse extracurricular engagements with academic brilliance highlights her exceptional sense of responsibility, leadership, and time management. She is also a member of the technical club ‘Enigma’ at ICAS as a part of the research division, to which she has contributed some commendable research work. I am confident that she will continue to excel and contribute meaningfully to your institution, and I strongly recommend her for admission. Arti Pawar, Assistant Professor, Data Science & Computer Applications, International Centre for Applied Sciences (ICAS), Manipal Academy of Higher Education (MAHE), Manipal, Karnataka, India, Manipal, Karnataka, India - 576104, arti.pawar@manipal.edu, (+91)9886832668"
      },
      { 
        image: "images/RaghavendraSir_LOR-1.png", 
        name: "Dr. Raghavendra K. G", 
        title: "Assistant Professor",
        fullText: "It is with great pleasure that I write this letter of recommendation for Ms. Nagapujitha Karthikeyan, a student of B.Sc. (Applied Sciences) with specialization in Computer Science, for admission to your esteemed institution. I have had the privilege of serving as her mentor and instructor in my capacity as Assistant Professor of Physics at the International Centre for Applied Sciences (ICAS), Manipal, over the past eighteen months. During this period, Ms. Nagapujitha successfully completed two core Physics courses under my guidance, spanning the first and second semesters (October 2024 – May 2025). She consistently demonstrated a high level of intellectual curiosity, discipline, and analytical ability. Her academic performance was exemplary, earning top grades in both courses. Her diligence, conceptual clarity, and commitment to continuous improvement were particularly noteworthy. Beyond her curricular commitments, Ms. Nagapujitha has displayed commendable initiative in broadening her technical expertise. She has undertaken several professional certifications in C++ programming, web development, and related domains, underscoring her motivation to strengthen her computational and problem-solving skills. Notably, she contributed to the development of an online doctor appointment portal, an excellent example of her capacity to translate theoretical knowledge into practical applications. In addition to her academic and technical pursuits, Ms. Nagapujitha has shown strong leadership and interpersonal abilities. As a Class Committee Leader during her first year at ICAS, she effectively served as a liaison between faculty and students, facilitating communication and coordination with maturity and responsibility. With her strong academic foundation, technical acumen, and leadership potential, Ms. Nagapujitha is well-prepared to excel in a rigorous academic environment. I have no doubt that she will make significant contributions to your institution’s academic community. I therefore strongly recommend Ms. Nagapujitha Karthikeyan for admission to your program and wish her continued success in all her future academic and professional pursuits. Dr. Raghavendra K. G, Assistant Professor –Dept. of Physics, International Centre for Applied Sciences, Manipal Academy of Higher Education, Manipal, INDIA - 576104, Contact No: +91 9524236721, Email: raghavendra.kg@manipal.edu"
      },
      { 
        image: "images/NagrajSir_LOR-1.png", 
        name: "Dr. Nagraj Naik", 
        title: "Associate Professor",
        fullText: "It gives me great pleasure to write this recommendation for Ms. Nagapujitha Karthikeyan, a student of B.Sc. (Applied Sciences) in Computer Science and Engineering, for her admission at your esteemed institute. I am writing this letter as an Associate Professor at the International Centre for Applied Sciences, MAHE, Manipal, and having interacted with and taught her over the past 12 months. Ms. Nagapujitha Karthikeyan took two core computer science courses during her third semester, under my tutelage. She has been a committed and sincere student and has always put in her best efforts to perform well in the subjects. She has consistently distinguished herself through outstanding academic excellence. She was awarded a merit-based scholarship in her sophomore year. At ICAS, she has continued to remain among the top achievers of her class, securing a full 4.0 GPA in her second semester and combining diligence with intellectual rigour. She served as class representative in her first year, responsibly bridging communication between students and faculty while creating and sharing meticulous notes for her peers. In her second year, she successfully served as the Foreign Facilitation Secretary. She has also remained an active member of the technical club, Enigma, as a part of the research division. With her strong academic background, leadership abilities, and interpersonal skills, Ms. Nagapujitha Karthikeyan is striving to achieve excellence in her professional life. I highly recommend her for admission to your esteemed institute and wish her all the very best in her future endeavours. Dr. Nagaraj Naik, Associate Professor—School of Computer Engineering, International Centre for Applied Sciences, Manipal Academy of Higher Education (MAHE), Manipal, INDIA – 576104, Orcid ID: 0000-0001-7031-9787, Scopus ID: 57208816923, Contact No: +91 8123449690, Email: nagaraj.naik@manipal.edu"
      }
    ]
  },

  activities: {
    heading: "Beyond the Code",
    description: "Community engagement, creative expression, and teamwork shape my perspective as much as any technical pursuit. A snapshot of non-technical activities from 2023–25.",
    image: "images/activity-board.png"
  },

  contact: {
    heading: "Get In Touch",
    message: "Open to conversations about AI, research, or opportunities at UMass and beyond. If you'd like to talk, reach out — I'll get back to you."
  }
};
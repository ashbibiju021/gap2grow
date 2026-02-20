// Comprehensive list of 100 top companies with requirements and salaries (in LPA - Indian format)
const companiesDatabase = {
  google: { name: "Google", salary: "₹1.24 - ₹2.07 Cr (124.5 - 207.5 LPA)", requirements: "Strong DSA, System Design, Computer Science fundamentals, Problem-solving skills" },
  microsoft: { name: "Microsoft", salary: "₹1.16 - ₹1.99 Cr (116.2 - 199.2 LPA)", requirements: "C++/C#/.NET, Algorithm expertise, Cloud computing, Azure knowledge" },
  apple: { name: "Apple", salary: "₹1.33 - ₹2.24 Cr (132.8 - 224.1 LPA)", requirements: "iOS/macOS development, Objective-C, Swift, Performance optimization" },
  amazon: { name: "Amazon", salary: "₹1.08 - ₹1.83 Cr (107.9 - 182.6 LPA)", requirements: "Java/Python, AWS, Scalability, Business logic understanding" },
  facebook: { name: "Meta", salary: "₹1.16 - ₹2.16 Cr (116.2 - 215.8 LPA)", requirements: "React, JavaScript, System design, User experience" },
  netflix: { name: "Netflix", salary: "₹1.29 - ₹2.32 Cr (128.65 - 232.4 LPA)", requirements: "Backend systems, Video streaming, Distributed systems, Scale at volume" },
  tesla: { name: "Tesla", salary: "₹1.08 - ₹1.99 Cr (107.9 - 199.2 LPA)", requirements: "Embedded systems, Python, C++, Hardware integration" },
  spacex: { name: "SpaceX", salary: "₹1.16 - ₹2.07 Cr (116.2 - 207.5 LPA)", requirements: "Systems engineering, C++, Real-time systems, Physics basics" },
  oracle: { name: "Oracle", salary: "₹0.996 - ₹1.74 Cr (99.6 - 174.3 LPA)", requirements: "Java, SQL, Database optimization, Enterprise systems" },
  ibm: { name: "IBM", salary: "₹0.913 - ₹1.66 Cr (91.3 - 166 LPA)", requirements: "Enterprise software, Java, Mainframe experience, Cloud" },
  nvidia: { name: "Nvidia", salary: "₹1.20 - ₹2.12 Cr (120.35 - 211.65 LPA)", requirements: "CUDA, GPU computing, C++, AI/ML performance" },
  intel: { name: "Intel", salary: "₹1.04 - ₹1.87 Cr (103.75 - 186.75 LPA)", requirements: "System-level programming, C++, Hardware design, Low-level optimization" },
  qualcomm: { name: "Qualcomm", salary: "₹0.996 - ₹1.74 Cr (99.6 - 174.3 LPA)", requirements: "Embedded systems, Mobile development, C/C++, Wireless protocols" },
  cisco: { name: "Cisco", salary: "₹0.954 - ₹1.70 Cr (95.45 - 170.15 LPA)", requirements: "Networking protocols, C/C++, Network security, IP technologies" },
  juniper: { name: "Juniper Networks", salary: "₹0.913 - ₹1.66 Cr (91.3 - 166 LPA)", requirements: "Network routing, Routing protocols, C++, Linux" },
  amd: { name: "AMD", salary: "₹1.04 - ₹1.87 Cr (103.75 - 186.75 LPA)", requirements: "CPU/GPU architecture, C++, Performance tuning, Hardware knowledge" },
  broadcom: { name: "Broadcom", salary: "₹0.954 - ₹1.70 Cr (95.45 - 170.15 LPA)", requirements: "Semiconductor knowledge, Networking, C/C++, Hardware design" },
  arista: { name: "Arista Networks", salary: "₹0.996 - ₹1.78 Cr (99.6 - 178.45 LPA)", requirements: "Network programming, Python, Linux, Data center networking" },
  vmware: { name: "VMware", salary: "₹1.04 - ₹1.83 Cr (103.75 - 182.6 LPA)", requirements: "Virtualization, Linux, C++, Cloud infrastructure" },
  redhat: { name: "Red Hat", salary: "₹0.954 - ₹1.74 Cr (95.45 - 174.3 LPA)", requirements: "Linux kernel, Open source, C/Rust, Enterprise systems" },
  uber: { name: "Uber", salary: "₹1.12 - ₹1.99 Cr (112.05 - 199.2 LPA)", requirements: "Geolocation systems, Real-time analytics, System design, Scalability" },
  lyft: { name: "Lyft", salary: "₹1.08 - ₹1.91 Cr (107.9 - 190.9 LPA)", requirements: "Mobile development, Real-time systems, Map APIs, Backend systems" },
  airbnb: { name: "Airbnb", salary: "₹1.08 - ₹1.95 Cr (107.9 - 195.05 LPA)", requirements: "Full-stack development, React, Node.js, User experience focus" },
  pinterest: { name: "Pinterest", salary: "₹1.04 - ₹1.87 Cr (103.75 - 186.75 LPA)", requirements: "Full-stack, Python, Java, Large-scale systems" },
  spotify: { name: "Spotify", salary: "₹1.12 - ₹1.99 Cr (112.05 - 199.2 LPA)", requirements: "Audio streaming, Backend systems, Scala/Kotlin, Distributed systems" },
  twitch: { name: "Twitch", salary: "₹1.08 - ₹1.91 Cr (107.9 - 190.9 LPA)", requirements: "Live streaming, WebRTC, Backend systems, Real-time data" },
  github: { name: "GitHub", salary: "₹1.08 - ₹1.95 Cr (107.9 - 195.05 LPA)", requirements: "Version control systems, Ruby on Rails, Git internals, API design" },
  gitlab: { name: "GitLab", salary: "₹0.996 - ₹1.83 Cr (99.6 - 182.6 LPA)", requirements: "DevOps, Ruby, Kubernetes, CI/CD pipelines" },
  stripe: { name: "Stripe", salary: "₹1.16 - ₹2.07 Cr (116.2 - 207.5 LPA)", requirements: "Payment systems, Financial software, Fraud detection, Security" },
  square: { name: "Square", salary: "₹1.04 - ₹1.83 Cr (103.75 - 182.6 LPA)", requirements: "Payment processing, Mobile development, Financial systems" },
  paypal: { name: "PayPal", salary: "₹0.996 - ₹1.78 Cr (99.6 - 178.45 LPA)", requirements: "Payment systems, Java, Security, Large-scale transactions" },
  shopify: { name: "Shopify", salary: "₹1.08 - ₹1.95 Cr (107.9 - 195.05 LPA)", requirements: "Ruby on Rails, E-commerce, Full-stack development, Scalability" },
  dropbox: { name: "Dropbox", salary: "₹1.08 - ₹1.95 Cr (107.9 - 195.05 LPA)", requirements: "File systems, Distributed storage, C++, Security" },
  slack: { name: "Slack", salary: "₹1.08 - ₹1.99 Cr (107.9 - 199.2 LPA)", requirements: "Real-time messaging, JavaScript, WebSockets, Backend systems" },
  zoom: { name: "Zoom", salary: "₹1.04 - ₹1.87 Cr (103.75 - 186.75 LPA)", requirements: "Video conferencing, WebRTC, C++, Real-time communication" },
  discord: { name: "Discord", salary: "₹1.04 - ₹1.91 Cr (103.75 - 190.9 LPA)", requirements: "Real-time systems, Rust/Python, Voice/video, Scalability" },
  telegram: { name: "Telegram", salary: "₹0.996 - ₹1.83 Cr (99.6 - 182.6 LPA)", requirements: "Cryptography, Protocol design, MTProto, Backend systems" },
  signal: { name: "Signal", salary: "₹0.913 - ₹1.66 Cr (91.3 - 166 LPA)", requirements: "Cryptography, End-to-end encryption, Mobile security, Open source" },
  mozilla: { name: "Mozilla", salary: "₹0.954 - ₹1.74 Cr (95.45 - 174.3 LPA)", requirements: "Rust, Browser engine, Web standards, Open source" },
  chrome: { name: "Google Chrome", salary: "₹1.16 - ₹2.07 Cr (116.2 - 207.5 LPA)", requirements: "C++, V8 engine, Web standards, Performance optimization" },
  tor: { name: "Tor Project", salary: "₹0.871 - ₹1.62 Cr (87.1 - 161.85 LPA)", requirements: "Network security, C/Rust, Privacy, Cryptography" },
  epics: { name: "Epic Games", salary: "₹0.996 - ₹1.83 Cr (99.6 - 182.6 LPA)", requirements: "C++, Game engine, Unreal/Unity, Graphics programming" },
  roblox: { name: "Roblox", salary: "₹1.04 - ₹1.87 Cr (103.75 - 186.75 LPA)", requirements: "Lua, Game development, Real-time systems, User-generated content" },
  unity: { name: "Unity", salary: "₹0.996 - ₹1.78 Cr (99.6 - 178.45 LPA)", requirements: "C#, Game engine, Graphics, Cross-platform development" },
  unreal: { name: "Unreal Engine (Epic)", salary: "₹1.04 - ₹1.87 Cr (103.75 - 186.75 LPA)", requirements: "C++, Graphics programming, Game development, Performance" },
  riot: { name: "Riot Games", salary: "₹0.996 - ₹1.83 Cr (99.6 - 182.6 LPA)", requirements: "C++, Game development, Online systems, Real-time gaming" },
  activision: { name: "Activision Blizzard", salary: "₹0.954 - ₹1.74 Cr (95.45 - 174.3 LPA)", requirements: "Game development, C++/C#, Networking, Game server backend" },
  ubisoft: { name: "Ubisoft", salary: "₹0.913 - ₹1.70 Cr (91.3 - 170.15 LPA)", requirements: "Game development, C++, Animation systems, Cross-platform" },
  rockstar: { name: "Rockstar Games", salary: "₹0.996 - ₹1.83 Cr (99.6 - 182.6 LPA)", requirements: "C++/C#, Game engine, Graphics, Large-scale game development" },
  insomniac: { name: "Insomniac Games", salary: "₹0.954 - ₹1.74 Cr (95.45 - 174.3 LPA)", requirements: "C++, PlayStation development, Graphics programming, Performance" },
  bethesda: { name: "Bethesda Softworks", salary: "₹0.913 - ₹1.70 Cr (91.3 - 170.15 LPA)", requirements: "C++, Game scripting, Physics engines, Open-world development" },
  bioware: { name: "BioWare", salary: "₹0.913 - ₹1.70 Cr (91.3 - 170.15 LPA)", requirements: "C++, Story systems, AI programming, RPG development" },
  tesla_ai: { name: "Tesla AI (Autonomous)", salary: "₹1.24 - ₹2.16 Cr (124.5 - 215.8 LPA)", requirements: "Computer vision, Deep learning, Autonomous systems, Python/C++" },
  openai: { name: "OpenAI", salary: "₹1.33 - ₹2.32 Cr (132.8 - 232.4 LPA)", requirements: "Deep learning, Transformers, LLMs, Large-scale training" },
  anthropic: { name: "Anthropic", salary: "₹1.29 - ₹2.24 Cr (128.65 - 224.1 LPA)", requirements: "Constitutional AI, Language models, ML safety, Python/JAX" },
  deepmind: { name: "DeepMind", salary: "₹1.33 - ₹2.32 Cr (132.8 - 232.4 LPA)", requirements: "Reinforcement learning, Neural networks, Distributed training, Python" },
  facebook_ai: { name: "Meta AI", salary: "₹1.20 - ₹2.16 Cr (120.35 - 215.8 LPA)", requirements: "Deep learning, MLOps, Large-scale training, PyTorch expertise" },
  baidu: { name: "Baidu", salary: "₹1.04 - ₹1.83 Cr (103.75 - 182.6 LPA)", requirements: "AI/ML, Search algorithms, Natural language processing, Scale optimization" },
  alibaba: { name: "Alibaba", salary: "₹0.996 - ₹1.78 Cr (99.6 - 178.45 LPA)", requirements: "Cloud computing, E-commerce technology, Big data, Distributed systems" },
  tencent: { name: "Tencent", salary: "₹0.954 - ₹1.74 Cr (95.45 - 174.3 LPA)", requirements: "Gaming, Social platforms, Cloud services, Distributed systems" },
  bytedance: { name: "ByteDance", salary: "₹1.08 - ₹1.91 Cr (107.9 - 190.9 LPA)", requirements: "AI/ML, Recommendation systems, Content delivery, Large-scale systems" },
  huawei: { name: "Huawei", salary: "₹0.996 - ₹1.78 Cr (99.6 - 178.45 LPA)", requirements: "5G/6G, Telecom, Cloud platforms, Hardware-software integration" },
  dji: { name: "DJI", salary: "₹0.954 - ₹1.74 Cr (95.45 - 174.3 LPA)", requirements: "Embedded systems, Robotics, Control systems, Computer vision" },
  boston_dynamics: { name: "Boston Dynamics", salary: "₹1.16 - ₹1.99 Cr (116.2 - 199.2 LPA)", requirements: "Robotics, Control theory, Computer vision, Mechanical engineering" },
  irobot: { name: "iRobot", salary: "₹0.954 - ₹1.74 Cr (95.45 - 174.3 LPA)", requirements: "Robotics, Navigation, Autonomous systems, Embedded systems" },
  agv: { name: "Autonomous Vehicle Co", salary: "₹1.12 - ₹1.99 Cr (112.05 - 199.2 LPA)", requirements: "Autonomous driving, Computer vision, LIDAR, Sensor fusion" },
  waymo: { name: "Waymo", salary: "₹1.16 - ₹2.07 Cr (116.2 - 207.5 LPA)", requirements: "Autonomous vehicles, Computer vision, Machine learning, Simulation" },
  cruise: { name: "Cruise Automation", salary: "₹1.12 - ₹1.99 Cr (112.05 - 199.2 LPA)", requirements: "Autonomous driving, Perception systems, Deep learning" },
  linkedin: { name: "LinkedIn", salary: "₹1.08 - ₹1.95 Cr (107.9 - 195.05 LPA)", requirements: "Social graphs, Recommendation at scale, Full-stack, Big data" },
  twitter: { name: "X (Twitter)", salary: "₹1.04 - ₹1.87 Cr (103.75 - 186.75 LPA)", requirements: "Real-time systems, Full-stack, Redis, Distributed cache" },
  reddit: { name: "Reddit", salary: "₹0.996 - ₹1.78 Cr (99.6 - 178.45 LPA)", requirements: "Community systems, Full-stack, Python, Large-scale content" },
  quora: { name: "Quora", salary: "₹0.954 - ₹1.74 Cr (95.45 - 174.3 LPA)", requirements: "Question-answer systems, ML ranking, Python, Scalability" },
  medium: { name: "Medium", salary: "₹0.913 - ₹1.70 Cr (91.3 - 170.15 LPA)", requirements: "Publishing platforms, Full-stack, Content recommendation, Python" },
  substack: { name: "Substack", salary: "₹0.913 - ₹1.70 Cr (91.3 - 170.15 LPA)", requirements: "Publishing, Payments integration, Creator economy, Backend systems" },
  patreon: { name: "Patreon", salary: "₹0.913 - ₹1.70 Cr (91.3 - 170.15 LPA)", requirements: "Creator economy, Payments, Subscription systems, Full-stack" },
  onlyfans: { name: "OnlyFans", salary: "₹0.913 - ₹1.70 Cr (91.3 - 170.15 LPA)", requirements: "Content delivery, Payments, Real-time systems, Scalability" },
  gumroad: { name: "Gumroad", salary: "₹0.871 - ₹1.66 Cr (87.1 - 166 LPA)", requirements: "E-commerce, Payments, Creator tools, Full-stack" },
  notion: { name: "Notion", salary: "₹1.04 - ₹1.87 Cr (103.75 - 186.75 LPA)", requirements: "Collaborative tools, Real-time sync, Frontend performance, Full-stack" },
  figma: { name: "Figma", salary: "₹1.08 - ₹1.95 Cr (107.9 - 195.05 LPA)", requirements: "WebGL/graphics, Real-time collaboration, Design tools, Performance" },
  canva: { name: "Canva", salary: "₹0.996 - ₹1.83 Cr (99.6 - 182.6 LPA)", requirements: "Graphics rendering, Design tools, Full-stack, Performance optimization" },
  adobe: { name: "Adobe", salary: "₹1.08 - ₹1.95 Cr (107.9 - 195.05 LPA)", requirements: "Graphics programming, Creative tools, C++, Performance" },
  autodesk: { name: "Autodesk", salary: "₹1.04 - ₹1.87 Cr (103.75 - 186.75 LPA)", requirements: "3D graphics, CAD design, C++, Real-time rendering" },
  jetbrains: { name: "JetBrains", salary: "₹0.996 - ₹1.83 Cr (99.6 - 182.6 LPA)", requirements: "IDE development, Java/Kotlin, Language parsing, Performance" }
};

function generateRoadmap(){

const name=document.getElementById("name").value;
const career=document.getElementById("career").value;
const dreamCompany=document.getElementById("dreamCompany").value;
const skills=document.getElementById("skills").value;
const box=document.getElementById("roadmap");

if(name==""||career==""){
box.innerHTML="<p style='color:white;text-align:center;'>Please fill in Name and Career fields</p>";
return;
}

if(skills==""){
box.innerHTML="<p style='color:white;text-align:center;'>Please specify your current skills or type 'None' if you have no skills yet</p>";
return;
}

// Check if user has no skills (handle "None", "no skills", etc.)
const noSkillsKeywords = ["none", "no skills", "nothing", "blank", "beginner", "0"];
const isNoSkills = noSkillsKeywords.some(keyword => skills.toLowerCase().includes(keyword));

const currentSkillsArray = isNoSkills ? [] : skills.split(",").map(s => s.trim().toLowerCase()).filter(s => s);

// Comprehensive skill roadmaps for all careers
let roadmapData={

web:{
skills:[
{name:"HTML", duration:"2 weeks"},
{name:"CSS", duration:"3 weeks"},
{name:"Responsive Design", duration:"2 weeks"},
{name:"JavaScript", duration:"4 weeks"},
{name:"DOM", duration:"2 weeks"},
{name:"Git", duration:"1 week"},
{name:"React", duration:"4 weeks"},
{name:"Vue", duration:"4 weeks"},
{name:"Angular", duration:"5 weeks"},
{name:"Node.js", duration:"3 weeks"},
{name:"Express", duration:"2 weeks"},
{name:"MongoDB", duration:"2 weeks"},
{name:"PostgreSQL", duration:"2 weeks"},
{name:"REST API", duration:"3 weeks"},
{name:"API Integration", duration:"2 weeks"},
{name:"Authentication", duration:"2 weeks"},
{name:"Testing", duration:"3 weeks"},
{name:"Webpack", duration:"2 weeks"},
{name:"ESLint", duration:"1 week"},
{name:"Docker", duration:"3 weeks"},
{name:"CI/CD", duration:"2 weeks"}
]
},

app:{
skills:[
{name:"Java", duration:"4 weeks"},
{name:"Kotlin", duration:"3 weeks"},
{name:"Swift", duration:"4 weeks"},
{name:"React Native", duration:"4 weeks"},
{name:"Flutter", duration:"4 weeks"},
{name:"Mobile UI", duration:"3 weeks"},
{name:"Android Studio", duration:"1 week"},
{name:"Xcode", duration:"1 week"},
{name:"SQLite", duration:"2 weeks"},
{name:"Firebase", duration:"2 weeks"},
{name:"API Integration", duration:"2 weeks"},
{name:"Push Notifications", duration:"2 weeks"},
{name:"App Store Publishing", duration:"1 week"},
{name:"Git", duration:"1 week"},
{name:"Testing", duration:"2 weeks"},
{name:"Performance Optimization", duration:"2 weeks"}
]
},

ai:{
skills:[
{name:"Python", duration:"3 weeks"},
{name:"Math Fundamentals", duration:"4 weeks"},
{name:"Linear Algebra", duration:"3 weeks"},
{name:"Statistics", duration:"4 weeks"},
{name:"Pandas", duration:"2 weeks"},
{name:"NumPy", duration:"2 weeks"},
{name:"Scikit-learn", duration:"3 weeks"},
{name:"TensorFlow", duration:"4 weeks"},
{name:"PyTorch", duration:"4 weeks"},
{name:"Deep Learning", duration:"5 weeks"},
{name:"NLP", duration:"4 weeks"},
{name:"Computer Vision", duration:"4 weeks"},
{name:"Data Visualization", duration:"2 weeks"},
{name:"Jupyter", duration:"1 week"},
{name:"Git", duration:"1 week"},
{name:"Cloud Platforms", duration:"2 weeks"}
]
},

data:{
skills:[
{name:"Excel", duration:"2 weeks"},
{name:"SQL", duration:"3 weeks"},
{name:"Python", duration:"3 weeks"},
{name:"R", duration:"3 weeks"},
{name:"Tableau", duration:"3 weeks"},
{name:"Power BI", duration:"3 weeks"},
{name:"Data Visualization", duration:"2 weeks"},
{name:"Statistics", duration:"4 weeks"},
{name:"Pandas", duration:"2 weeks"},
{name:"NumPy", duration:"2 weeks"},
{name:"ETL", duration:"3 weeks"},
{name:"Big Data", duration:"4 weeks"},
{name:"Hadoop", duration:"3 weeks"},
{name:"Spark", duration:"3 weeks"},
{name:"Data Mining", duration:"3 weeks"},
{name:"Business Analysis", duration:"3 weeks"}
]
},

cyber:{
skills:[
{name:"Networking", duration:"4 weeks"},
{name:"Linux", duration:"3 weeks"},
{name:"Windows Security", duration:"2 weeks"},
{name:"Firewalls", duration:"2 weeks"},
{name:"Ethical Hacking", duration:"4 weeks"},
{name:"Penetration Testing", duration:"5 weeks"},
{name:"Cryptography", duration:"3 weeks"},
{name:"Security Protocols", duration:"2 weeks"},
{name:"Malware Analysis", duration:"3 weeks"},
{name:"Incident Response", duration:"2 weeks"},
{name:"Certifications (CEH, OSCP)", duration:"8 weeks"},
{name:"Python Scripting", duration:"3 weeks"},
{name:"Wireshark", duration:"2 weeks"},
{name:"Burp Suite", duration:"2 weeks"}
]
},

ui:{
skills:[
{name:"Design Fundamentals", duration:"3 weeks"},
{name:"Color Theory", duration:"1 week"},
{name:"Typography", duration:"1 week"},
{name:"Figma", duration:"2 weeks"},
{name:"Adobe XD", duration:"2 weeks"},
{name:"Sketch", duration:"2 weeks"},
{name:"UI Design", duration:"4 weeks"},
{name:"UX Research", duration:"3 weeks"},
{name:"Prototyping", duration:"2 weeks"},
{name:"Wireframing", duration:"2 weeks"},
{name:"User Testing", duration:"2 weeks"},
{name:"CSS", duration:"2 weeks"},
{name:"HTML", duration:"1 week"},
{name:"JavaScript", duration:"2 weeks"},
{name:"Responsive Design", duration:"2 weeks"},
{name:"Design Systems", duration:"3 weeks"},
{name:"Accessibility", duration:"2 weeks"}
]
},

cloud:{
skills:[
{name:"AWS", duration:"4 weeks"},
{name:"Azure", duration:"4 weeks"},
{name:"Google Cloud", duration:"4 weeks"},
{name:"Linux", duration:"3 weeks"},
{name:"Docker", duration:"3 weeks"},
{name:"Kubernetes", duration:"4 weeks"},
{name:"Terraform", duration:"3 weeks"},
{name:"CI/CD", duration:"3 weeks"},
{name:"Load Balancing", duration:"2 weeks"},
{name:"Networking", duration:"2 weeks"},
{name:"Security", duration:"3 weeks"},
{name:"Database Management", duration:"3 weeks"},
{name:"Monitoring", duration:"2 weeks"},
{name:"Auto-scaling", duration:"2 weeks"},
{name:"Cost Optimization", duration:"2 weeks"}
]
},

embedded:{
skills:[
{name:"C", duration:"4 weeks"},
{name:"C++", duration:"4 weeks"},
{name:"Arduino", duration:"2 weeks"},
{name:"Microcontrollers", duration:"3 weeks"},
{name:"Electronics", duration:"4 weeks"},
{name:"PCB Design", duration:"4 weeks"},
{name:"Embedded Linux", duration:"3 weeks"},
{name:"Real-time OS", duration:"3 weeks"},
{name:"Sensors & Actuators", duration:"3 weeks"},
{name:"IoT", duration:"3 weeks"},
{name:"Assembly Language", duration:"3 weeks"},
{name:"Hardware Debugging", duration:"2 weeks"},
{name:"RTOS", duration:"2 weeks"},
{name:"Protocol Communication", duration:"2 weeks"}
]
},

testing:{
skills:[
{name:"Manual Testing", duration:"2 weeks"},
{name:"Test Planning", duration:"2 weeks"},
{name:"Selenium", duration:"3 weeks"},
{name:"JUnit", duration:"2 weeks"},
{name:"TestNG", duration:"2 weeks"},
{name:"Automation", duration:"4 weeks"},
{name:"API Testing", duration:"2 weeks"},
{name:"Performance Testing", duration:"3 weeks"},
{name:"Load Testing", duration:"2 weeks"},
{name:"QA Methodologies", duration:"2 weeks"},
{name:"Bug Tracking", duration:"1 week"},
{name:"Test Cases", duration:"2 weeks"},
{name:"UAT", duration:"1 week"},
{name:"Mobile Testing", duration:"2 weeks"}
]
},

devops:{
skills:[
{name:"Linux", duration:"3 weeks"},
{name:"Bash Scripting", duration:"2 weeks"},
{name:"Docker", duration:"3 weeks"},
{name:"Kubernetes", duration:"4 weeks"},
{name:"Jenkins", duration:"3 weeks"},
{name:"GitLab CI", duration:"3 weeks"},
{name:"Terraform", duration:"3 weeks"},
{name:"Ansible", duration:"3 weeks"},
{name:"AWS", duration:"3 weeks"},
{name:"Azure", duration:"3 weeks"},
{name:"Prometheus", duration:"2 weeks"},
{name:"ELK Stack", duration:"3 weeks"},
{name:"Logging", duration:"2 weeks"},
{name:"Security", duration:"2 weeks"},
{name:"Git", duration:"1 week"}
]
},

game:{
skills:[
{name:"C#", duration:"3 weeks"},
{name:"C++", duration:"4 weeks"},
{name:"Unity", duration:"3 weeks"},
{name:"Unreal Engine", duration:"4 weeks"},
{name:"Game Physics", duration:"3 weeks"},
{name:"Graphics Programming", duration:"4 weeks"},
{name:"AI in Games", duration:"3 weeks"},
{name:"Level Design", duration:"2 weeks"},
{name:"3D Modeling", duration:"4 weeks"},
{name:"Animation", duration:"3 weeks"},
{name:"Audio Integration", duration:"2 weeks"},
{name:"Performance Optimization", duration:"2 weeks"},
{name:"Multiplayer Networking", duration:"3 weeks"}
]
}

};

let remainingSkills = [];
let selectedCareer = career;

if(roadmapData[career]){
const careerSkillNames = roadmapData[career].skills.map(s => s.name.toLowerCase());
remainingSkills = roadmapData[career].skills.filter(skill => !currentSkillsArray.includes(skill.name.toLowerCase()));
}

const roadmapHTML = remainingSkills.length > 0 
? `<div class="skills-flowchart">
${remainingSkills.map((skill, i) => `
<div class="skill-card">
    <div class="skill-card-content">
        <h4>${skill.name}</h4>
        <p class="skill-duration">⏱️ ${skill.duration}</p>
    </div>
    ${i < remainingSkills.length - 1 ? '<div class="arrow-down">↓</div>' : ''}
</div>`).join("")}
</div>`
: "<div class='card' style='text-align:center;'><h3>Great! 🎉</h3><p>You already have all the skills for this career path!</p></div>";

// Calculate total duration
let totalWeeks = 0;
remainingSkills.forEach(skill => {
    const weeks = parseInt(skill.duration);
    if(!isNaN(weeks)) totalWeeks += weeks;
});
const totalMonths = (totalWeeks / 4.33).toFixed(1);

box.style.display = "block";
setTimeout(() => box.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
const dreamCompanyKey = document.getElementById("dreamCompany").value;
const companyInfo = companiesDatabase[dreamCompanyKey];
const dreamCompanyDisplay = companyInfo ? `
<div style="text-align:center;background:linear-gradient(135deg, #667FEA 0%, #764BA2 100%);color:white;padding:15px;border-radius:10px;margin-bottom:15px;">
  <p style="margin:0;font-size:18px;"><b>🏢 Dream Company: ${companyInfo.name}</b></p>
</div>` : "";
box.innerHTML=`
<h2 style="text-align:center;color:#0B3D91;">📚 ${name}'s Learning Roadmap</h2>
<p style="text-align:center;color:#FF6B6B;font-size:16px;"><b>Career Goal: ${selectedCareer}</b></p>
${dreamCompanyDisplay}
${isNoSkills ? '<p style="text-align:center;color:#FF6B6B;margin-bottom:8px;"><b>🚀 Starting from Scratch:</b> Complete beginner - you\'ll learn all skills needed for this career!</p>' : `<p style="text-align:center;color:#666;margin-bottom:8px;">You already know: <b>${currentSkillsArray.join(", ")}</b></p>`}
<div style="text-align:center;background:linear-gradient(135deg, #FF6B6B 0%, #FF8E72 100%);color:white;padding:15px;border-radius:10px;margin-bottom:25px;font-weight:bold;">
  ⏱️ Total Study Duration: <span style="font-size:18px;">${totalWeeks} weeks (~${totalMonths} months)</span>
</div>
<div class="flowchart-container">
    ${roadmapHTML}
</div>
${companyInfo ? `
<div style="margin-top:30px;padding:20px;background:linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);border-left:5px solid #667FEA;border-radius:8px;">
  <h3 style="color:#0B3D91;margin-bottom:15px;">📋 Company Requirements & Package</h3>
  <div style="background:white;padding:15px;border-radius:6px;margin-bottom:10px;">
    <p style="margin:5px 0;color:#333;"><b>Company:</b> ${companyInfo.name}</p>
    <p style="margin:5px 0;color:#333;"><b>💰 Salary Package:</b> <span style="color:#2ecc71;font-weight:bold;">${companyInfo.salary}</span></p>
    <p style="margin:5px 0;color:#333;"><b>✅ Requirements:</b></p>
    <p style="margin:10px 0;padding:10px;background:#f8f9fa;border-radius:4px;color:#555;">${companyInfo.requirements}</p>
  </div>
</div>
` : ""}
`;
}

// Coding Theme Quotes Slideshow
const codingQuotes = [
    { text: "Code is poetry written in logic.", author: "— Developer" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "— Dennis M. Ritchie" },
    { text: "First, solve the problem. Then, write the code.", author: "— John Johnson" },
    { text: "Debugging is twice as hard as writing code in the first place.", author: "— Brian W. Kernighan" },
    { text: "The best variable names are self-documenting.", author: "— Code Master" },
    { text: "Don't write code for the computer, write code for the next developer.", author: "— Software Wisdom" },
    { text: "Innovation distinguishes between a leader and a follower. Code distinguishes between amateurs and professionals.", author: "— Tech Philosophy" },
    { text: "Talk is cheap. Show me the code.", author: "— Linus Torvalds" },
    { text: "A good programmer is someone who always looks both ways before crossing a one-way street.", author: "— Doug Linder" },
    { text: "Programming can be fun, so can cryptography; however they should not be combined.", author: "— Kreitzberg and Shneiderman" },
    { text: "The most important skill is knowing what you don't know.", author: "— Developer Truth" },
    { text: "Every expert was once a beginner. Keep pushing forward.", author: "— Motivation" },
    { text: "In code we trust. In comments we pray.", author: "— Developer Mantra" }
];

let currentQuoteIndex = 0;

function initializeQuoteSlideshow() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const quoteIndicators = document.getElementById('quoteIndicators');
    
    // Create indicators
    codingQuotes.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.className = 'quote-indicator' + (index === 0 ? ' active' : '');
        indicator.onclick = () => showQuote(index);
        quoteIndicators.appendChild(indicator);
    });
    
    // Show first quote
    showQuote(0);
    
    // Auto-rotate quotes every 5 seconds
    setInterval(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % codingQuotes.length;
        showQuote(currentQuoteIndex);
    }, 5000);
}

function showQuote(index) {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const quoteDisplay = document.getElementById('quoteDisplay');
    
    // Remove active class from all indicators
    document.querySelectorAll('.quote-indicator').forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Add active class to current indicator
    document.querySelectorAll('.quote-indicator')[index].classList.add('active');
    
    // Fade out
    quoteDisplay.classList.remove('fade-in');
    quoteDisplay.classList.add('fade-out');
    
    setTimeout(() => {
        // Update quotes
        quoteText.textContent = `"${codingQuotes[index].text}"`;
        quoteAuthor.textContent = codingQuotes[index].author;
        
        // Fade in
        quoteDisplay.classList.remove('fade-out');
        quoteDisplay.classList.add('fade-in');
    }, 300);
    
    currentQuoteIndex = index;
}

// Initialize slideshow when page loads
window.addEventListener('load', () => {
    initializeQuoteSlideshow();
});
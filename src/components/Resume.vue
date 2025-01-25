# App.vue
<script setup>
import { ref } from 'vue'

const sections = {
  contact: {
    name: "Clayton Cruse",
    location: "Santa Clara, CA 95050",
    phone: "(408) 335 8370",
    email: "cmcruse15@gmail.com"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/clayton-cruse-2b02b823b/",
    github: "https://github.com/raccoonhands1"
  },
  education: [
    "Santa Clara High School graduate (4.0+ GPA)",
    "Student at De Anza College (3.76 GPA as of transfer date)",
    "Current Junior at UC Santa Cruz"
  ],
  relevantCourses: [
    "Data Structures and Algorithms",
    "C++ (full series)",
    "Discrete Math",
    "Probability and Stats for Engineers", 
    "x86 Processor Assembly Language",
    "Python"
  ],
  technicalSkills: [
    "C++", "C#", "Javascript", "Python", "SQL", "OpenCV",
    "Robotics and Design", "MongoDB", "Docker", "ElectronJS",
    "React", "Node", "Git", "Full-stack"
  ],
  experience: [
    {
      title: "Neurofocus",
      points: [
        "A neurotech project I developed as a part of a team. I worked on the software part of a hardware-software EEG focus tracker which implemented several ground-breaking signal analysis AI papers. The project isn't packaged yet, but is fully functional. This project is ongoing taken over by students at De Anza College",
        "Highlighted as a section in De Anza and Foothill newspapers"
      ]
    },
    {
      title: "UCB Hackathon Project, NeuralNurse",
      points: [
        "With a team of 4, I helped develop NeuralNurse, a realtime face and object recognition device that's intended to help patients with dementia recognize faces and give context to who the face is associated with. The hardware includes a head mounted webcam, and rPI with a power supply that slips into the user's pocket. Considering we designed a fully functioning hardware device and software backend in just 9 hours, the project was majorly successful among judges and won 2nd place."
      ]
    },
    {
      title: "Catchup",
      points: [
        "A platform which allows enterprises to share their research with peers and filter new papers by whichever subjects interest them or affect their startups or companies. Catchup! uses multiple AI agents in its backend to help the user tailor their own experience. https://trycatchup.vercel.app/ Prod is still in development.",
        "Winner of the Groq and MultiOn awards at the Agents that Work 2.0 hackathon at CloudFlare."
      ]
    }
  ],
  leadership: [
    "Club founder and leader:",
    "I created Project-Oriented Programming at De Anza College along with the help of some of my friends and an industry professional. I made about every mistake in the book from conception to now. For a long time it was a failure but I ended up turning it around and it became something I was proud of"
  ],
  achievements: [
    "2nd place hackathon award winner at Berkeley Hackathon (NeuralNurse)",
    "Hardware track hackathon award winner at SF Hacks 2024 (CleanMars)",
    "Hackathon award winner at CloudFlare Hacks (Catchup)",
    "Professor's Recommendation (Merit) : Data Structures and Algorithms",
    "Neurotech project highlight and college sponsor at Foothill and De Anza College"
  ],
  interests: [
    "Industrial design",
    "Medtech and Neurotech"
  ]
}

const activeExpTab = ref('neurofocus')
const activeAchTab = ref('berkeley')
const showMore = ref(false)
</script>

<template>
  <div class="resume">

    <div class="section-spacing"></div>

    <!-- Header -->
    <div class="cs-dialog header">
      <div class="heading">
        <div class="wrapper">
          <div class="icon"></div>
          <div class="text">{{ sections.contact.name }}</div>
        </div>
      </div>
      <div class="content contact-info">
        {{ sections.contact.location }} • 
        {{ sections.contact.phone }} • 
        {{ sections.contact.email }}
      </div>
    </div>

    <div class="section-spacing"></div>

    <!-- Education Section -->
    <div class="section">
      <h2>Education</h2>
      <hr class="cs-hr">
      <ul>
        <li v-for="(edu, index) in sections.education" :key="index">
          {{ edu }}
        </li>
      </ul>
    </div>

    <div class="section-spacing"></div>

    <!-- Skills Section -->
    <div class="section">
      <h2>Skills</h2>
      <hr class="cs-hr">
      
      <h3>Technical Skills</h3>
      <div class="skills-grid">
        <button v-for="skill in sections.technicalSkills" 
                :key="skill"
                class="cs-btn">
          {{ skill }}
        </button>
      </div>
      
      <h3>Relevant Courses</h3>
      <div class="courses-list">
        <div v-for="course in sections.relevantCourses" 
             :key="course"
             class="cs-checkbox">
          <input type="checkbox" :id="course" checked="true">
          <label :for="course" class="cs-checkbox__label">{{ course }}</label>
        </div>
      </div>
    </div>

    <div class="section-spacing"></div>

    <!-- Experience Section -->
    <div class="section">
      <h2>Experience</h2>
      <hr class="cs-hr">
      
      <div class="cs-tabs">
        <input type="radio" name="exp-tabs" class="radiotab" id="tab-neurofocus" 
               v-model="activeExpTab" value="neurofocus">
        <label for="tab-neurofocus" class="label">Neurofocus</label>
        <div class="panel">
          <ul>
            <li v-for="(point, index) in sections.experience[0].points" 
                :key="index">
              {{ point }}
            </li>
          </ul>
        </div>

        <input type="radio" name="exp-tabs" class="radiotab" id="tab-neural" 
               v-model="activeExpTab" value="neural">
        <label for="tab-neural" class="label">NeuralNurse</label>
        <div class="panel">
          <ul>
            <li v-for="(point, index) in sections.experience[1].points" 
                :key="index">
              {{ point }}
            </li>
          </ul>
        </div>

        <input type="radio" name="exp-tabs" class="radiotab" id="tab-catchup" 
               v-model="activeExpTab" value="catchup">
        <label for="tab-catchup" class="label">Catchup</label>
        <div class="panel">
          <ul>
            <li v-for="(point, index) in sections.experience[2].points" 
                :key="index">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section-spacing"></div>

    <!-- Achievements Section -->
    <div class="section">
      <h2>Achievements</h2>
      <hr class="cs-hr">
      
      <div class="achievement-list">
        <ul>
          <li v-for="achievement in sections.achievements" 
              :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>

    <div class="section-spacing"></div>

    <!-- More Button -->
    <div class="section">
      <button class="cs-btn" @click="showMore = !showMore">
        {{ showMore ? 'Less Info' : 'More Info' }}
      </button>

      <div v-if="showMore" class="more-content">
        <div class="subsection">
          <h3>Leadership Experience</h3>
          <p>{{ sections.leadership.join(' ') }}</p>
        </div>

        <div class="subsection">
          <h3>Other Interests</h3>
          <ul>
            <li v-for="interest in sections.interests" 
                :key="interest">
              {{ interest }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section-spacing"></div>

    <!-- Footer -->
    <div class="footer">
      <a :href="sections.social.linkedin" 
         target="_blank" 
         class="cs-btn">
        LinkedIn
      </a>
      <a :href="sections.social.github" 
         target="_blank" 
         class="cs-btn">
        GitHub
      </a>
    </div>
  </div>
</template>

<style scoped>
.resume {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
}

.header {
  position: relative;
  margin-bottom: 2rem;
}

.section {
  margin-bottom: 2rem;
}

h2 {
  color: var(--accent);
  margin-bottom: 0.5rem;
}

h3 {
  margin: 1.5rem 0 1rem;
  color: var(--accent);
}

.cs-hr {
  margin: 0.5rem 0 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}
.courses-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem auto;
  max-width: 50%;
}


.more-content {
  margin-top: 1rem;
  padding: 1rem;
  background: var(--secondary-bg);
  border: 1px solid var(--border-light);
}

.subsection {
  margin-bottom: 1.5rem;
}

.subsection:last-child {
  margin-bottom: 0;
}

.footer {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-light);
}

.section-spacing {
  height: 32px;
  width: 100%;
  display: block;
}

ul {
  list-style-type: none;
  padding-left: 1.5rem;
}

ul li {
  margin-bottom: 0.5rem;
  position: relative;
}

ul li::before {
  content: ">";
  position: absolute;
  left: -1.5rem;
  color: var(--accent);
}

/* cs-btn styles reset to remove rounded corners and purple glow */
.cs-btn {
  border-radius: 0;
  transition: none;
}

.cs-btn:hover {
  box-shadow: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  .courses-list {
    grid-template-columns: 1fr;
  }
}
</style>
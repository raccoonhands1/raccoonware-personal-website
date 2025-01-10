<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const cursorPosition = ref({ x: 0, y: 0 });
const isLinkHovered = ref(false);

let rafId = null;

const handleMouseMove = (e) => {
    if (rafId) {
        cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
        cursorPosition.value = {
            x: e.clientX,
            y: e.clientY,
        };
    });
};

const handleLinkMouseEnter = () => {
    isLinkHovered.value = true;
};

const handleLinkMouseLeave = () => {
    isLinkHovered.value = false;
};

onMounted(() => {
    document.documentElement.style.cursor = "none";
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    if (rafId) {
        cancelAnimationFrame(rafId);
    }
});

const sections = {
    contact: {
        name: "Clayton Cruse",
        location: "Santa Clara, CA 95050",
        phone: "(408) 335 8370",
        email: "cmcruse15@gmail.com",
    },
    social: {
        linkedin: "https://www.linkedin.com/in/claytoncruse",
        github: "https://github.com/claytoncruse",
    },
    education: [
        "Santa Clara High School graduate (4.0+ GPA)",
        "Student at De Anza College (3.76 GPA as of transfer date)",
        "Current Junior at UC Santa Cruz",
    ],
    relevantCourses: [
        "Data Structures and Algorithms",
        "Intro to C++",
        "Intermediate C++",
        "x86 Processor Assembly Language",
        "Python",
    ],
    technicalSkills: [
        "C++",
        "C#",
        "Javascript",
        "Python",
        "SQL",
        "OpenCV",
        "Robotics and Design",
        "MongoDB",
        "Docker",
        "ElectronJS",
        "React",
        "Node",
        "Git",
        "Full-stack",
    ],
    experience: [
        {
            title: "Neurofocus",
            points: [
                "A neurotech project I developed as a part of a team. I worked on the software part of a hardware-software EEG focus tracker which implemented several ground-breaking signal analysis AI papers. The project isn't packaged yet, but is fully functional. This project is ongoing taken over by students at De Anza College",
                "Highlighted as a section in De Anza and Foothill newspapers",
            ],
        },
        {
            title: "UCB Hackathon Project, NeuralNurse",
            points: [
                "With a team of 4, I helped develop NeuralNurse, a realtime face and object recognition device that's intended to help patients with dementia recognize faces and give context to who the face is associated with. The hardware includes a head mounted webcam, and rPI with a power supply that slips into the user's pocket. Considering we designed a fully functioning hardware device and software backend in just 9 hours, the project was majorly successful among judges and won 2nd place.",
            ],
        },
        {
            title: "Catchup",
            points: [
                "A platform which allows enterprises to share their research with peers and filter new papers by whichever subjects interest them or affect their startups or companies. Catchup! uses multiple AI agents in its backend to help the user tailor their own experience. https://trycatchup.vercel.app/ Prod is still in active development.",
                "Winner of the Groq and MultiOn awards at the Agents that Work 2.0 hackathon at CloudFlare.",
            ],
        },
    ],
    leadership: [
        "Club founder and leader:",
        "I created Project-Oriented Programming at De Anza College along with the help of some of my friends and an industry professional. I made about every mistake in the book from conception to now. For a long time it was a failure but I ended up turning it around and it became something I was proud of",
    ],
    achievements: [
        "2nd place hackathon award winner at Berkeley Hackathon (NeuralNurse)",
        "Hardware track hackathon award winner at SF Hacks 2024 (CleanMars)",
        "Hackathon award winner at CloudFlare Hacks (Catchup)",
        "Professor's Recommendation (Merit) : Data Structures and Algorithms",
        "Neurotech project highlight and college sponsor at Foothill and De Anza College",
    ],
    interests: ["Industrial design", "Medtech and Neurotech"],
};
</script>

<template>
    <div class="content-wrapper">
        <div
            class="cursor"
            :class="{ 'cursor-hover': isLinkHovered }"
            :style="{
                transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
            }"
        ></div>

        <div class="resume">
            <header class="header">
                <h1>{{ sections.contact.name }}</h1>
                <p>
                    {{ sections.contact.location }} ⧫ Tele:
                    {{ sections.contact.phone }} ⧫ Email:
                    {{ sections.contact.email }}
                </p>
            </header>

            <section>
                <h2>Education:</h2>
                <ul>
                    <li v-for="(edu, index) in sections.education" :key="index">
                        {{ edu }}
                    </li>
                </ul>
            </section>

            <section>
                <h2>Relevant Courses:</h2>
                <p>{{ sections.relevantCourses.join(", ") }}</p>
            </section>

            <section>
                <h2>Technical Skills:</h2>
                <p>{{ sections.technicalSkills.join(", ") }}</p>
            </section>

            <section>
                <h2>Ongoing and Past Experience (Earliest to Newest):</h2>
                <div
                    v-for="(exp, index) in sections.experience"
                    :key="index"
                    class="experience-item"
                >
                    <h3>{{ exp.title }}</h3>
                    <ul>
                        <li v-for="(point, pIndex) in exp.points" :key="pIndex">
                            {{ point }}
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>Leadership Experience:</h2>
                <p>{{ sections.leadership.join(" ") }}</p>
            </section>

            <section>
                <h2>Achievements:</h2>
                <ul>
                    <li
                        v-for="(achievement, index) in sections.achievements"
                        :key="index"
                    >
                        {{ achievement }}
                    </li>
                </ul>
            </section>

            <section>
                <h2>Other Interests:</h2>
                <ul>
                    <li
                        v-for="(interest, index) in sections.interests"
                        :key="index"
                    >
                        {{ interest }}
                    </li>
                </ul>
            </section>

            <footer class="social-links">
                <a>
                    :href="sections.social.linkedin" target="_blank"
                    class="social-link" @mouseenter="handleLinkMouseEnter"
                    @mouseleave="handleLinkMouseLeave"
                </a>
                <i class="fab fa-linkedin"></i> LinkedIn
                :href="sections.social.github" target="_blank"
                class="social-link" @mouseenter="handleLinkMouseEnter"
                @mouseleave="handleLinkMouseLeave" >
                <i class="fab fa-github"></i> GitHub
            </footer>
        </div>
    </div>
</template>

<style scoped>
.content-wrapper {
    width: 100%;
    min-height: 100vh;
}

.cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background: rgba(52, 152, 219, 0.3);
    border: 2px solid #3498db;
    pointer-events: none;
    z-index: 9999;
    top: -10px;
    left: -10px;
    mix-blend-mode: difference;
    will-change: transform;
    transition: width 0.2s, height 0.2s, background 0.2s;
}

.cursor-hover {
    width: 30px;
    height: 30px;
    background: rgba(52, 152, 219, 0.5);
    top: -15px;
    left: -15px;
}

.resume {
    max-width: 1000px;
    margin: 2rem auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.header {
    text-align: center;
    margin-bottom: 2rem;
}

h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

h2 {
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.3rem;
    margin: 1.5rem 0 1rem 0;
}

h3 {
    color: #34495e;
    margin: 1rem 0 0.5rem 0;
}

section {
    margin-bottom: 1.5rem;
}

ul {
    list-style-type: none;
    padding-left: 1.2rem;
}

li {
    margin-bottom: 0.5rem;
}

li:before {
    content: "•";
    color: #3498db;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}

.experience-item {
    margin-bottom: 1.5rem;
}

p {
    margin: 0.5rem 0;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e1e1e1;
}

.social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: #3498db;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    pointer-events: auto;
}

.social-link:hover {
    background-color: #3498db;
    color: white;
}

@media print {
    .cursor {
        display: none;
    }
    .social-links {
        display: none;
    }
}
</style>

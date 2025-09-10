---
layout: single
author_profile: false
permalink: /
---
<style>
/* Final, definitive container for the spine-and-branch tree */
.spine-nav-container {
    position: relative;
    width: 100%;
    max-width: 320px; /* Wider for a more spacious layout */
    height: 450px;    /* Tall to prevent any cramping */
    margin: 0 auto;
    font-family: monospace;
}

.spine-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.spine-svg path {
    stroke-width: 2; /* Thinner, more elegant lines */
    stroke: #888;
    fill: none;
    transition: stroke 0.2s ease-in-out, stroke-width 0.2s ease-in-out;
    stroke-dasharray: 1000; /* For the drawing animation */
    stroke-dashoffset: 1000;
    animation: draw 3s ease-in-out forwards;
}

/* Keyframes for the line drawing animation */
@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}

.spine-svg path.highlight {
    stroke: #0056b3;
    stroke-width: 3;
}

.s-node {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: transparent !important;
    text-align: center;
    opacity: 0; /* Fade in nodes after lines are drawn */
    animation: fade-in 1s ease-in-out forwards 2s;
}
/* Keyframes for the node fade-in animation */
@keyframes fade-in {
    to {
        opacity: 1;
    }
}

.s-node a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    padding: 0.1em 0.3em;
    color: #0056b3;
    background: transparent !important;
}

.s-node.join {
    font-size: 2em;
    color: #333;
}

/* --- Meticulous, Corrected Positioning --- */
.s-node.j1 { top: 10%; left: 60%; }
.s-node.j2 { top: 30%; left: 80%; }
.s-node.j3 { top: 50%; left: 80%; }
.s-node.j4 { top: 70%; left: 80%; }
.s-node.j5 { top: 90%; left: 80%; }
.s-node.name { top: 10%; left: 25%; }
.s-node.blog { top: 30%; left: 50%; }
.s-node.cv { top: 50%; left: 50%; }
.s-node.github { top: 70%; left: 50%; }
.s-node.social { top: 90%; left: 50%; }
</style>

<div style="display: flex; align-items: center; margin-top: 2em;">
  <div style="flex: 2; padding-right: 20px;">
    <div class="spine-nav-container">
        <svg class="spine-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <!-- Use SVG Paths for angled lines -->
            <path id="path-j1-name" d="M 60 10 L 25 10" />
            <path id="path-j1-j2" d="M 60 10 L 80 30" />
            <path id="path-j2-blog" d="M 80 30 L 50 30" />
            <path id="path-j2-j3" d="M 80 30 L 80 50" />
            <path id="path-j3-cv" d="M 80 50 L 50 50" />
            <path id="path-j3-j4" d="M 80 50 L 80 70" />
            <path id="path-j4-github" d="M 80 70 L 50 70" />
            <path id="path-j4-j5" d="M 80 70 L 80 90" />
            <path id="path-j5-social" d="M 80 90 L 50 90" />
        </svg>
        
        <!-- Nodes -->
        <div class="s-node join j1">⋈</div>
        <div class="s-node join j2">⋈</div>
        <div class="s-node join j3">⋈</div>
        <div class="s-node join j4">⋈</div>
        <div class="s-node join j5">⋈</div>
        <div id="node-name" class="s-node name"><a href="/">Aliya Bannayeva</a></div>
        <div id="node-blog" class="s-node blog"><a href="/blog/">Blog</a></div>
        <div id="node-cv" class="s-node cv"><a href="/files/cv.pdf" target="_blank">CV as PDF</a></div>
        <div id="node-github" class="s-node github"><a href="https://github.com/bannayeva" target="_blank">GitHub</a></div>
        <div id="node-social" class="s-node social"><a href="https://scholar.google.com/citations?user=qyOolasAAAAJ&hl=en" target="_blank">Scholar</a> & <a href="mailto:aliya.bannaeva@gmail.com">Email</a></div>
    </div>
  </div>
  <div style="flex: 3; padding-right: 20px;">
    <p>Final semester master student at TU Munich. I did my thesis at the <a href="https://db.in.tum.de/">Chair for Database Systems</a> under the supervision of Altan Birler and Prof. Thomas Neumann, on multi-join cardinality estimation using sketches. My current focus is on adaptive query optimization. </p>
    <p>Outside of databases, my interests are mainly surrounding mathematics (concentration bounds) and materials science (crystallography). I'm always open to collaborating on interesting projects, please feel free to reach out for a chat.</p>
  </div>
  <div style="flex: 1;">
    <img src="/images/profile.png" alt="Aliya Bannayeva" style="border-radius: 50%; max-width: 100%; height: auto;">
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const nodes = {
        name: document.getElementById('node-name'), blog: document.getElementById('node-blog'),
        cv: document.getElementById('node-cv'), github: document.getElementById('node-github'),
        social: document.getElementById('node-social')
    };
    const paths = {
        p_j1_j2: document.getElementById('path-j1-j2'), p_j2_j3: document.getElementById('path-j2-j3'),
        p_j3_j4: document.getElementById('path-j3-j4'), p_j4_j5: document.getElementById('path-j4-j5'),
        p_j1_name: document.getElementById('path-j1-name'), p_j2_blog: document.getElementById('path-j2-blog'),
        p_j3_cv: document.getElementById('path-j3-cv'), p_j4_github: document.getElementById('path-j4-github'),
        p_j5_social: document.getElementById('path-j5-social')
    };
    const highlight = (path_ids, active) => {
        path_ids.forEach(id => {
            if (paths[id]) {
                active ? paths[id].classList.add('highlight') : paths[id].classList.remove('highlight');
            }
        });
    };
    nodes.name.addEventListener('mouseover', () => highlight(['p_j1_name'], true));
    nodes.name.addEventListener('mouseout',  () => highlight(['p_j1_name'], false));
    nodes.blog.addEventListener('mouseover', () => highlight(['p_j2_blog', 'p_j1_j2'], true));
    nodes.blog.addEventListener('mouseout',  () => highlight(['p_j2_blog', 'p_j1_j2'], false));
    nodes.cv.addEventListener('mouseover', () => highlight(['p_j3_cv', 'p_j2_j3', 'p_j1_j2'], true));
    nodes.cv.addEventListener('mouseout',  () => highlight(['p_j3_cv', 'p_j2_j3', 'p_j1_j2'], false));
    nodes.github.addEventListener('mouseover', () => highlight(['p_j4_github', 'p_j3_j4', 'p_j2_j3', 'p_j1_j2'], true));
    nodes.github.addEventListener('mouseout',  () => highlight(['p_j4_github', 'p_j3_j4', 'p_j2_j3', 'p_j1_j2'], false));
    nodes.social.addEventListener('mouseover', () => highlight(['p_j5_social', 'p_j4_j5', 'p_j3_j4', 'p_j2_j3', 'p_j1_j2'], true));
    nodes.social.addEventListener('mouseout',  () => highlight(['p_j5_social', 'p_j4_j5', 'p_j3_j4', 'p_j2_j3', 'p_j1_j2'], false));
});
</script>
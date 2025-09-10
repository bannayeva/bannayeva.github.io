---
layout: single
author_profile: false
permalink: /
---
<style>
/* Final container for the spine-and-branch tree */
.spine-nav-container {
    position: relative;
    width: 100%;
    max-width: 300px;
    height: 400px; /* Tall and spacious */
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

.spine-svg line {
    stroke: #999;
    stroke-width: 2; /* Thinner lines */
    transition: all 0.2s ease-in-out;
}

.spine-svg line.highlight {
    stroke: #0056b3;
    stroke-width: 3;
}

.s-node {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: transparent !important;
    text-align: center;
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
    font-size: 2em; /* Smaller, cleaner bowties */
    color: #333;
}

/* --- Meticulous Positioning --- */
/* The Spine */
.s-node.j1 { top: 10%; left: 60%; }
.s-node.j2 { top: 30%; left: 80%; }
.s-node.j3 { top: 50%; left: 80%; }
.s-node.j4 { top: 70%; left: 80%; }
.s-node.j5 { top: 90%; left: 80%; }
/* The Leaves */
.s-node.name { top: 10%; left: 20%; }
.s-node.blog { top: 30%; left: 45%; }
.s-node.cv { top: 50%; left: 45%; }
.s-node.github { top: 70%; left: 45%; }
.s-node.social { top: 90%; left: 45%; }
</style>

<div style="display: flex; align-items: center; margin-top: 2em;">
  <div style="flex: 2; padding-right: 20px;">
    <div class="spine-nav-container">
        <svg class="spine-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <!-- Spine lines -->
            <line id="line-j1-j2" x1="60" y1="10" x2="80" y2="30" />
            <line id="line-j2-j3" x1="80" y1="30" x2="80" y2="50" />
            <line id="line-j3-j4" x1="80" y1="50" x2="80" y2="70" />
            <line id="line-j4-j5" x1="80" y1="70" x2="80" y2="90" />
            <!-- Branch lines -->
            <line id="line-j1-name" x1="60" y1="10" x2="20" y2="10" />
            <line id="line-j2-blog" x1="80" y1="30" x2="45" y2="30" />
            <line id="line-j3-cv" x1="80" y1="50" x2="45" y2="50" />
            <line id="line-j4-github" x1="80" y1="70" x2="45" y2="70" />
            <line id="line-j5-social" x1="80" y1="90" x2="45" y2="90" />
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
    const lines = {
        j1j2: document.getElementById('line-j1-j2'), j2j3: document.getElementById('line-j2-j3'),
        j3j4: document.getElementById('line-j3-j4'), j4j5: document.getElementById('line-j4-j5'),
        j1name: document.getElementById('line-j1-name'), j2blog: document.getElementById('line-j2-blog'),
        j3cv: document.getElementById('line-j3-cv'), j4github: document.getElementById('line-j4-github'),
        j5social: document.getElementById('line-j5-social')
    };
    const highlight = (line_ids, active) => {
        line_ids.forEach(id => {
            if (lines[id]) {
                active ? lines[id].classList.add('highlight') : lines[id].classList.remove('highlight');
            }
        });
    };
    nodes.name.addEventListener('mouseover', () => highlight(['j1name'], true));
    nodes.name.addEventListener('mouseout',  () => highlight(['j1name'], false));
    nodes.blog.addEventListener('mouseover', () => highlight(['j2blog', 'j1j2'], true));
    nodes.blog.addEventListener('mouseout',  () => highlight(['j2blog', 'j1j2'], false));
    nodes.cv.addEventListener('mouseover', () => highlight(['j3cv', 'j2j3', 'j1j2'], true));
    nodes.cv.addEventListener('mouseout',  () => highlight(['j3cv', 'j2j3', 'j1j2'], false));
    nodes.github.addEventListener('mouseover', () => highlight(['j4github', 'j3j4', 'j2j3', 'j1j2'], true));
    nodes.github.addEventListener('mouseout',  () => highlight(['j4github', 'j3j4', 'j2j3', 'j1j2'], false));
    nodes.social.addEventListener('mouseover', () => highlight(['j5social', 'j4j5', 'j3j4', 'j2j3', 'j1j2'], true));
    nodes.social.addEventListener('mouseout',  () => highlight(['j5social', 'j4j5', 'j3j4', 'j2j3', 'j1j2'], false));
});
</script>
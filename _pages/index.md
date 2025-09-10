---
layout: single
author_profile: false
permalink: /
---
<style>
/* Main container for the right-deep tree */
.right-deep-nav-container {
    position: relative;
    width: 100%;
    max-width: 350px; /* Wider for the new tree */
    height: 450px;    /* Taller for the new tree */
    margin: 0 auto;
    font-family: monospace;
}

.right-deep-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.right-deep-svg line {
    stroke: #888;
    stroke-width: 3;
    transition: stroke 0.2s ease-in-out;
}

.right-deep-svg line.highlight {
    stroke: #0056b3;
    stroke-width: 4;
}

.rd-node {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: transparent !important;
}

.rd-node a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.15em;
    padding: 0.2em 0.4em;
    color: #0056b3;
    background: transparent !important;
}

.rd-node.join {
    font-size: 2.5em;
    color: #333;
}

/* Precise positioning for the right-deep tree */
.rd-node.join-1 { top: 10%; left: 50%; }
.rd-node.homepage { top: 25%; left: 20%; }
.rd-node.join-2 { top: 30%; left: 80%; }
.rd-node.blog { top: 45%; left: 50%; }
.rd-node.join-3 { top: 50%; left: 80%; }
.rd-node.cv { top: 65%; left: 50%; }
.rd-node.join-4 { top: 70%; left: 80%; }
.rd-node.github { top: 85%; left: 50%; }
.rd-node.join-5 { top: 90%; left: 80%; }
.rd-node.scholar { top: 98%; left: 60%; }
.rd-node.email { top: 98%; left: 95%; }
</style>

<div style="display: flex; align-items: center; margin-top: 2em;">
  <div style="flex: 2; padding-right: 20px;">
    <div class="right-deep-nav-container">
        <svg class="right-deep-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <line id="line-j1-h" x1="50" y1="10" x2="20" y2="25" />
            <line id="line-j1-j2" x1="50" y1="10" x2="80" y2="30" />
            <line id="line-j2-b" x1="80" y1="30" x2="50" y2="45" />
            <line id="line-j2-j3" x1="80" y1="30" x2="80" y2="50" />
            <line id="line-j3-c" x1="80" y1="50" x2="50" y2="65" />
            <line id="line-j3-j4" x1="80" y1="50" x2="80" y2="70" />
            <line id="line-j4-g" x1="80" y1="70" x2="50" y2="85" />
            <line id="line-j4-j5" x1="80" y1="70" x2="80" y2="90" />
            <line id="line-j5-s" x1="80" y1="90" x2="60" y2="98" />
            <line id="line-j5-e" x1="80" y1="90" x2="95" y2="98" />
        </svg>

        <!-- Nodes of the tree -->
        <div class="rd-node join join-1">⋈</div>
        <div id="node-homepage" class="rd-node homepage"><a href="/">Aliya Bannayeva</a></div>
        <div class="rd-node join join-2">⋈</div>
        <div id="node-blog" class="rd-node blog"><a href="/blog/">Blog</a></div>
        <div class="rd-node join join-3">⋈</div>
        <div id="node-cv" class="rd-node cv"><a href="/files/cv.pdf" target="_blank">CV as PDF</a></div>
        <div class="rd-node join join-4">⋈</div>
        <div id="node-github" class="rd-node github"><a href="https://github.com/bannayeva" target="_blank">GitHub</a></div>
        <div class="rd-node join join-5">⋈</div>
        <div id="node-scholar" class="rd-node scholar"><a href="https://scholar.google.com/citations?user=qyOolasAAAAJ&hl=en" target="_blank">Scholar</a></div>
        <div id="node-email" class="rd-node email"><a href="mailto:aliya.bannaeva@gmail.com">Email</a></div>
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
        homepage: document.getElementById('node-homepage'), blog: document.getElementById('node-blog'),
        cv: document.getElementById('node-cv'), github: document.getElementById('node-github'),
        scholar: document.getElementById('node-scholar'), email: document.getElementById('node-email')
    };
    const lines = {
        j1h: document.getElementById('line-j1-h'), j1j2: document.getElementById('line-j1-j2'),
        j2b: document.getElementById('line-j2-b'), j2j3: document.getElementById('line-j2-j3'),
        j3c: document.getElementById('line-j3-c'), j3j4: document.getElementById('line-j3-j4'),
        j4g: document.getElementById('line-j4-g'), j4j5: document.getElementById('line-j4-j5'),
        j5s: document.getElementById('line-j5-s'), j5e: document.getElementById('line-j5-e')
    };
    const highlight = (line_ids, active) => {
        line_ids.forEach(id => {
            if (lines[id]) {
                active ? lines[id].classList.add('highlight') : lines[id].classList.remove('highlight');
            }
        });
    };
    nodes.homepage.addEventListener('mouseover', () => highlight(['j1h'], true));
    nodes.homepage.addEventListener('mouseout',  () => highlight(['j1h'], false));
    nodes.blog.addEventListener('mouseover', () => highlight(['j2b', 'j1j2'], true));
    nodes.blog.addEventListener('mouseout',  () => highlight(['j2b', 'j1j2'], false));
    nodes.cv.addEventListener('mouseover', () => highlight(['j3c', 'j2j3', 'j1j2'], true));
    nodes.cv.addEventListener('mouseout',  () => highlight(['j3c', 'j2j3', 'j1j2'], false));
    nodes.github.addEventListener('mouseover', () => highlight(['j4g', 'j3j4', 'j2j3', 'j1j2'], true));
    nodes.github.addEventListener('mouseout',  () => highlight(['j4g', 'j3j4', 'j2j3', 'j1j2'], false));
    nodes.scholar.addEventListener('mouseover', () => highlight(['j5s', 'j4j5', 'j3j4', 'j2j3', 'j1j2'], true));
    nodes.scholar.addEventListener('mouseout',  () => highlight(['j5s', 'j4j5', 'j3j4', 'j2j3', 'j1j2'], false));
    nodes.email.addEventListener('mouseover', () => highlight(['j5e', 'j4j5', 'j3j4', 'j2j3', 'j1j2'], true));
    nodes.email.addEventListener('mouseout',  () => highlight(['j5e', 'j4j5', 'j3j4', 'j2j3', 'j1j2'], false));
});
</script>
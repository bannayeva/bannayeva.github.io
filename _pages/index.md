---
layout: single
author_profile: false
permalink: /
---
<style>
/* Final, definitive container for the user's SVG design */
.svg-nav-container {
    position: relative;
    width: 100%;
    max-width: 450px; /* Wider for the right-deep layout */
    height: 380px;
    margin: 0 auto;
    font-family: monospace;
}

.svg-nav-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.svg-nav-svg line {
    stroke: #764ba2;
    stroke-width: 2;
    transition: all 0.2s ease-in-out;
}

.svg-nav-svg line.highlight {
    stroke: #333;
    stroke-width: 3;
}

.svg-node {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: transparent !important;
}

.svg-node a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    padding: 0.1em 0.3em;
    color: #333;
    background: transparent !important;
}

.svg-node.join {
    font-size: 2em;
    color: #764ba2;
    font-weight: bold;
}

/* --- Meticulous Positioning Based on User's SVG --- */
.svg-node.j1 { top: 8%; left: 44.4%; } /* 400/900 */
.svg-node.n-name { top: 20%; left: 27.7%; } /* 250/900 */
.svg-node.j2 { top: 20%; left: 61.1%; } /* 550/900 */
.svg-node.n-blog { top: 32%; left: 50%; } /* 450/900 */
.svg-node.j3 { top: 32%; left: 72.2%; } /* 650/900 */
.svg-node.n-cv { top: 44%; left: 61.1%; } /* 550/900 */
.svg-node.j4 { top: 44%; left: 83.3%; } /* 750/900 */
.svg-node.n-github { top: 56%; left: 72.2%; } /* 650/900 */
.svg-node.j5 { top: 56%; left: 94.4%; } /* 850/900 -- Added Join */
.svg-node.n-scholar { top: 68%; left: 83.3%; } /* 750/900 */
.svg-node.n-email { top: 68%; left: 94.4%; } /* 850/900 */
</style>

<div style="display: flex; align-items: center; margin-top: 2em;">
  <div style="flex: 2; padding-right: 20px;">
    <div class="svg-nav-container">
        <svg class="svg-nav-svg" viewBox="0 0 900 500" preserveAspectRatio="xMidYMid meet">
            <line id="line-j1-name" x1="400" y1="45" x2="250" y2="95" />
            <line id="line-j1-j2" x1="400" y1="45" x2="550" y2="95" />
            <line id="line-j2-blog" x1="550" y1="105" x2="450" y2="155" />
            <line id="line-j2-j3" x1="550" y1="105" x2="650" y2="155" />
            <line id="line-j3-cv" x1="650" y1="165" x2="550" y2="215" />
            <line id="line-j3-j4" x1="650" y1="165" x2="750" y2="215" />
            <line id="line-j4-github" x1="750" y1="225" x2="650" y2="275" />
            <line id="line-j4-j5" x1="750" y1="225" x2="850" y2="275" />
            <line id="line-j5-scholar" x1="850" y1="285" x2="750" y2="335" />
            <line id="line-j5-email" x1="850" y1="285" x2="850" y2="335" />
        </svg>

        <!-- Nodes based on SVG -->
        <div class="svg-node join j1">⋈</div>
        <div id="node-name" class="svg-node n-name"><a href="/">Aliya Bannayeva</a></div>
        <div class="svg-node join j2">⋈</div>
        <div id="node-blog" class="svg-node n-blog"><a href="/blog/">Blog</a></div>
        <div class="svg-node join j3">⋈</div>
        <div id="node-cv" class="svg-node n-cv"><a href="/files/cv.pdf" target="_blank">CV</a></div>
        <div class="svg-node join j4">⋈</div>
        <div id="node-github" class="svg-node n-github"><a href="https://github.com/bannayeva" target="_blank">GitHub</a></div>
        <div class="svg-node join j5">⋈</div>
        <div id="node-scholar" class="svg-node n-scholar"><a href="https://scholar.google.com/citations?user=qyOolasAAAAJ&hl=en" target="_blank">Scholar</a></div>
        <div id="node-email" class="svg-node n-email"><a href="mailto:aliya.bannaeva@gmail.com">Email</a></div>
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
        scholar: document.getElementById('node-scholar'), email: document.getElementById('node-email')
    };
    const lines = {
        j1name: document.getElementById('line-j1-name'), j1j2: document.getElementById('line-j1-j2'),
        j2blog: document.getElementById('line-j2-blog'), j2j3: document.getElementById('line-j2-j3'),
        j3cv: document.getElementById('line-j3-cv'), j3j4: document.getElementById('line-j3-j4'),
        j4github: document.getElementById('line-j4-github'), j4j5: document.getElementById('line-j4-j5'),
        j5scholar: document.getElementById('line-j5-scholar'), j5email: document.getElementById('line-j5-email')
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
    nodes.scholar.addEventListener('mouseover', () => highlight(['j5scholar', 'j4j5', 'j3j4', 'j2j3', 'j1j2'], true));
    nodes.scholar.addEventListener('mouseout',  () => highlight(['j5scholar', 'j4j5', 'j3j4', 'j2j3', 'j1j2'], false));
    nodes.email.addEventListener('mouseover', () => highlight(['j5email', 'j4j5', 'j3j4', 'j2j3', 'j1j2'], true));
    nodes.email.addEventListener('mouseout',  () => highlight(['j5email', 'j4j5', 'j3j4', 'j2j3', 'j1j2'], false));
});
</script>
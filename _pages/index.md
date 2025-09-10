---
layout: single
author_profile: false
permalink: /
---
<style>
/* Container for the entire navigation module */
.query-plan-nav-container {
    position: relative;
    width: 100%;
    max-width: 250px;
    height: 220px; /* Fixed height for stable positioning */
    margin: 0 auto;
    font-family: monospace;
}

/* The SVG canvas for drawing lines */
.query-plan-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

/* Style for the SVG lines */
.query-plan-svg line {
    stroke: #999;
    stroke-width: 2;
    transition: stroke 0.3s ease;
}

/* Class to highlight a line on hover */
.query-plan-svg line.highlight {
    stroke: #007bff;
    stroke-width: 3;
}

/* General style for all nodes */
.query-plan-node {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: center;
}

.query-plan-node a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    padding: 0.2em 0;
    background-color: transparent; /* TRANSPARENT BACKGROUND */
}

.query-plan-node.join {
    font-size: 2em;
    background: transparent;
}

/* Positioning for the new left-deep tree */
.query-plan-node.join-top { top: 20%; left: 50%; }
.query-plan-node.join-bottom { top: 50%; left: 30%; }
.query-plan-node.leaf-cv { top: 50%; left: 70%; }
.query-plan-node.leaf-blog { top: 80%; left: 50%; }
.query-plan-node.leaf-name { top: 80%; left: 10%; }
</style>

<div style="display: flex; align-items: center; margin-top: 2em;">
  <div style="flex: 1.5; padding-right: 20px;">
    
    <div class="query-plan-nav-container">
        <svg class="query-plan-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <!-- Top join to CV -->
            <line id="line-top-join" x1="50" y1="20" x2="30" y2="50" />
            <line id="line-cv" x1="50" y1="20" x2="70" y2="50" />
            
            <!-- Bottom join to leaves -->
            <line id="line-bottom-join" x1="30" y1="50" x2="10" y2="80" />
            <line id="line-blog" x1="30" y1="50" x2="50" y2="80" />
        </svg>

        <!-- Nodes (text and joins) -->
        <div class="query-plan-node join join-top">⋈</div>
        <div class="query-plan-node join join-bottom">⋈</div>

        <div id="node-name" class="query-plan-node leaf-name">
            <a href="/">Aliya Bannayeva</a>
        </div>
        <div id="node-blog" class="query-plan-node leaf-blog">
            <a href="/blog/">Blog</a>
        </div>
        <div id="node-cv" class="query-plan-node leaf-cv">
            <a href="/files/cv.pdf" target="_blank">CV as PDF</a>
        </div>
    </div>

  </div>
  <div style="flex: 3; padding-right: 20px;">
    <p>Final semester master student at TU Munich. I did my thesis at the <a href="https://db.in.tum.de/">Chair for Database Systems</a> under the supervision of Altan Birler and Prof. Thomas Neumann, on multi-join cardinality estimation using sketches. My current focus is on adaptive query optimization. </p>
    <p>Outside of databases, my interests are mainly surrounding mathematics (concentration bounds) and materials science (crystallography). I'm always open to collaborating on interesting projects, please feel free to reach out for a chat.</p>
    <p>[<a href="https://scholar.google.com/citations?user=qyOolasAAAAJ&hl=en">Google Scholar</a>] | [<a href="https://github.com/bannayeva">GitHub</a>] | [<a href="mailto:aliya.bannaeva@gmail.com">Email</a>]</p>
  </div>
  <div style="flex: 1;">
    <img src="/images/profile.png" alt="Aliya Bannayeva" style="border-radius: 50%; max-width: 100%; height: auto;">
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const nameNode = document.getElementById('node-name');
    const blogNode = document.getElementById('node-blog');
    const cvNode = document.getElementById('node-cv');

    const lineTopJoin = document.getElementById('line-top-join');
    const lineBottomJoin = document.getElementById('line-bottom-join');
    const lineCv = document.getElementById('line-cv');
    const lineBlog = document.getElementById('line-blog');

    nameNode.addEventListener('mouseover', () => { lineBottomJoin.classList.add('highlight'); lineTopJoin.classList.add('highlight'); });
    nameNode.addEventListener('mouseout', () => { lineBottomJoin.classList.remove('highlight'); lineTopJoin.classList.remove('highlight'); });

    blogNode.addEventListener('mouseover', () => { lineBlog.classList.add('highlight'); lineTopJoin.classList.add('highlight'); });
    blogNode.addEventListener('mouseout', () => { lineBlog.classList.remove('highlight'); lineTopJoin.classList.remove('highlight'); });
    
    cvNode.addEventListener('mouseover', () => lineCv.classList.add('highlight'));
    cvNode.addEventListener('mouseout', () => lineCv.classList.remove('highlight'));
});
</script>
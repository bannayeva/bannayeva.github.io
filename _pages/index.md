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
    max-width: 250px; /* Control max size */
    min-height: 200px; /* Ensure space for the tree */
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
    stroke: #007bff; /* A nice blue color */
    stroke-width: 3;
}

/* General style for all nodes (text links) */
.query-plan-node {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 2; /* Ensure nodes are on top of lines */
    text-align: center;
}

.query-plan-node a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    padding: 0.2em 0.5em;
    background-color: #fff;
}

/* Positioning for each node */
.query-plan-node.root { top: 10%; left: 50%; }
.query-plan-node.join { top: 40%; left: 50%; font-size: 2em; background: transparent; }
.query-plan-node.leaf-left { top: 80%; left: 20%; }
.query-plan-node.leaf-right { top: 80%; left: 80%; }
</style>

<div style="display: flex; align-items: center; margin-top: 2em;">
  <div style="flex: 1.5; padding-right: 20px;">
    
    <div class="query-plan-nav-container">
        <svg class="query-plan-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line id="line-root" x1="50" y1="10" x2="50" y2="40" />
            <line id="line-left" x1="50" y1="40" x2="20" y2="80" />
            <line id="line-right" x1="50" y1="40" x2="80" y2="80" />
        </svg>

        <div id="node-root" class="query-plan-node root">
            <a href="/">Aliya Bannayeva</a>
        </div>
        <div class="query-plan-node join">⋈</div>
        <div id="node-left" class="query-plan-node leaf-left">
            <a href="/blog/">Blog</a>
        </div>
        <div id="node-right" class="query-plan-node leaf-right">
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
    const rootNode = document.getElementById('node-root');
    const leftNode = document.getElementById('node-left');
    const rightNode = document.getElementById('node-right');

    const rootLine = document.getElementById('line-root');
    const leftLine = document.getElementById('line-left');
    const rightLine = document.getElementById('line-right');

    rootNode.addEventListener('mouseover', () => rootLine.classList.add('highlight'));
    rootNode.addEventListener('mouseout', () => rootLine.classList.remove('highlight'));

    leftNode.addEventListener('mouseover', () => leftLine.classList.add('highlight'));
    leftNode.addEventListener('mouseout', () => leftLine.classList.remove('highlight'));
    
    rightNode.addEventListener('mouseover', () => rightLine.classList.add('highlight'));
    rightNode.addEventListener('mouseout', () => rightLine.classList.remove('highlight'));
});
</script>
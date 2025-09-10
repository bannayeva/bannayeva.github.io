---
layout: single
author_profile: false
permalink: /
---
<style>
/* Main container for the entire visual nav assembly */
.visual-nav-area {
    position: relative;
    width: 100%;
    max-width: 300px; /* Increased width for more space */
    height: 380px;    /* Increased height for the sub-tree */
    margin: 0 auto;
    font-family: monospace;
}

/* Base container for a tree structure */
.query-plan-container {
    position: absolute;
    width: 100%;
    height: 100%;
}

/* Sub-tree container, positioned relative to the main tree's CV node */
#sub-tree-container {
    top: 135px; /* Manually position under the CV node */
    left: 85px;
    width: 200px;
    height: 180px;
}

.query-plan-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.query-plan-svg line {
    stroke: #999;
    stroke-width: 2.5; /* Thicker lines */
    transition: stroke 0.3s ease;
}

.query-plan-svg line.highlight {
    stroke: #007bff;
    stroke-width: 4;
}

.query-plan-node {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: center;
    background: transparent !important; /* Ensure transparent background */
}

.query-plan-node a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    padding: 0.2em 0.4em;
    color: #0056b3;
    background: transparent !important; /* Ensure transparent background */
}

.query-plan-node.join {
    font-size: 2.5em; /* Larger join symbol */
    color: #333;
}

/* Positioning for MAIN tree */
.query-plan-node.main-join-top { top: 25%; left: 50%; }
.query-plan-node.main-join-bottom { top: 60%; left: 25%; }
.query-plan-node.main-leaf-name { top: 90%; left: 10%; }
.query-plan-node.main-leaf-blog { top: 90%; left: 45%; }
.query-plan-node.main-leaf-cv { top: 60%; left: 75%; }

/* Positioning for SUB tree */
.query-plan-node.sub-join-top { top: 25%; left: 50%; }
.query-plan-node.sub-join-bottom { top: 60%; left: 25%; }
.query-plan-node.sub-leaf-email { top: 90%; left: 10%; }
.query-plan-node.sub-leaf-gs { top: 90%; left: 45%; }
.query-plan-node.sub-leaf-gh { top: 60%; left: 75%; }
</style>

<div style="display: flex; align-items: center; margin-top: 2em;">
  <div style="flex: 2; padding-right: 20px;"> <!-- More flex space for the nav -->
    
    <div class="visual-nav-area">
        <!-- Main Nav Tree -->
        <div id="main-tree-container" class="query-plan-container">
            <svg class="query-plan-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <line id="line-main-top" x1="50" y1="25" x2="25" y2="60" />
                <line id="line-main-cv" x1="50" y1="25" x2="75" y2="60" />
                <line id="line-main-bottom" x1="25" y1="60" x2="10" y2="90" />
                <line id="line-main-blog" x1="25" y1="60" x2="45" y2="90" />
            </svg>
            <div class="query-plan-node join main-join-top">⋈</div>
            <div class="query-plan-node join main-join-bottom">⋈</div>
            <div id="node-name" class="query-plan-node main-leaf-name"><a href="/">Aliya Bannayeva</a></div>
            <div id="node-blog" class="query-plan-node main-leaf-blog"><a href="/blog/">Blog</a></div>
            <div id="node-cv" class="query-plan-node main-leaf-cv"><a>CV as PDF</a></div>
        </div>

        <!-- Sub Nav Tree (under CV) -->
        <div id="sub-tree-container" class="query-plan-container">
            <svg class="query-plan-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                 <line id="line-sub-top" x1="50" y1="25" x2="25" y2="60" />
                 <line id="line-sub-gh" x1="50" y1="25" x2="75" y2="60" />
                 <line id="line-sub-bottom" x1="25" y1="60" x2="10" y2="90" />
                 <line id="line-sub-gs" x1="25" y1="60" x2="45" y2="90" />
            </svg>
            <div class="query-plan-node join sub-join-top">⋈</div>
            <div class="query-plan-node join sub-join-bottom">⋈</div>
            <div id="node-email" class="query-plan-node sub-leaf-email"><a href="mailto:aliya.bannaeva@gmail.com">Email</a></div>
            <div id="node-gs" class="query-plan-node sub-leaf-gs"><a href="https://scholar.google.com/citations?user=qyOolasAAAAJ&hl=en" target="_blank">Google Scholar</a></div>
            <div id="node-gh" class="query-plan-node sub-leaf-gh"><a href="https://github.com/bannayeva" target="_blank">GitHub</a></div>
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
    // Main tree elements
    const nameNode = document.getElementById('node-name');
    const blogNode = document.getElementById('node-blog');
    const cvNode = document.getElementById('node-cv');
    const lineMainTop = document.getElementById('line-main-top');
    const lineMainBottom = document.getElementById('line-main-bottom');
    const lineMainBlog = document.getElementById('line-main-blog');
    const lineMainCv = document.getElementById('line-main-cv');

    // Sub-tree elements
    const emailNode = document.getElementById('node-email');
    const gsNode = document.getElementById('node-gs');
    const ghNode = document.getElementById('node-gh');
    const lineSubTop = document.getElementById('line-sub-top');
    const lineSubBottom = document.getElementById('line-sub-bottom');
    const lineSubGs = document.getElementById('line-sub-gs');
    const lineSubGh = document.getElementById('line-sub-gh');

    // --- Event Listeners ---
    const highlight = (element, add) => {
        if (element) {
            add ? element.classList.add('highlight') : element.classList.remove('highlight');
        }
    };
    
    nameNode.addEventListener('mouseover', () => { highlight(lineMainBottom, true); highlight(lineMainTop, true); });
    nameNode.addEventListener('mouseout', () => { highlight(lineMainBottom, false); highlight(lineMainTop, false); });

    blogNode.addEventListener('mouseover', () => { highlight(lineMainBlog, true); highlight(lineMainTop, true); });
    blogNode.addEventListener('mouseout', () => { highlight(lineMainBlog, false); highlight(lineMainTop, false); });

    cvNode.addEventListener('mouseover', () => highlight(lineMainCv, true));
    cvNode.addEventListener('mouseout', () => highlight(lineMainCv, false));
    
    emailNode.addEventListener('mouseover', () => { highlight(lineSubBottom, true); highlight(lineSubTop, true); });
    emailNode.addEventListener('mouseout', () => { highlight(lineSubBottom, false); highlight(lineSubTop, false); });

    gsNode.addEventListener('mouseover', () => { highlight(lineSubGs, true); highlight(lineSubTop, true); });
    gsNode.addEventListener('mouseout', () => { highlight(lineSubGs, false); highlight(lineSubTop, false); });

    ghNode.addEventListener('mouseover', () => highlight(lineSubGh, true));
    ghNode.addEventListener('mouseout', () => highlight(lineSubGh, false));
});
</script>
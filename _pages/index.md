---
layout: single
author_profile: false
permalink: /
---
<style>
.join-nav-wrapper {
    --line-color: #999;
    font-family: monospace;
    font-size: 1.1em;
    position: relative;
    display: inline-block;
}
.join-node {
    position: relative;
    padding: 2em 0 0 2em;
}
.join-node .op {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5em;
    background: transparent;
    z-index: 1;
}
.join-node .relation {
    padding-left: 1em;
}
.join-node::before, .join-node::after {
    content: '';
    position: absolute;
    left: 0.4em;
    background-color: var(--line-color);
}
/* Vertical line */
.join-node::before {
    top: 0;
    width: 2px;
    height: 100%;
}
/* Horizontal line */
.join-node::after {
    top: 50%;
    width: 2em;
    height: 2px;
}
.join-tree > .join-node::before, .join-tree > .join-node::after {
    display: none; /* No lines for the root */
}
.join-tree {
    padding-left: 2em;
    border-left: 2px solid var(--line-color);
}
.join-tree .join-node:last-child::before {
    height: 50%;
}
.join-nav-wrapper a {
    text-decoration: none;
    font-weight: bold;
}
</style>
<div style="display: flex; align-items: center; margin-top: 2em;">
  <div style="flex: 1.5; padding-right: 20px;">
    <div class="join-nav-wrapper">
        <div class="join-tree">
            <div class="join-node">
                <span class="op">⋈</span>
                <div class="join-tree">
                    <div class="join-node">
                        <span class="op">⋈</span>
                        <div class="relation">
                            <a href="/blog/">Blog</a>
                        </div>
                    </div>
                    <div class="join-node">
                        <span class="op"></span>
                        <div class="relation">
                            <a href="/files/cv.pdf" target="_blank">CV as PDF</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="join-node">
                <span class="op"></span>
                <div class="relation">
                     <a href="/">Aliya Bannayeva</a>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div style="flex: 3; padding-right: 20px;">
    <p>Final semester master student at TU Munich. I did my thesis at the <a href="https://db.in.tum.de/">Chair for Database Systems</a> under the supervision of Altan Birler and Prof. Thomas Neumann, on multi-Join cardinality estimation using sketches. My current focus is on adaptive query optimization. </p>
    <p>Outside of databases, my interests are mainly surrounding mathematics (concentration bounds, knot theory, algorithmic complexity) and materials science (crystallography, materials design, desert sand beneficiation). I'm always open to collaborating on interesting projects, please feel free to reach out for a chat.</p>
    <p>[<a href="https://scholar.google.com/citations?user=qyOolasAAAAJ&hl=en">Google Scholar</a>] | [<a href="https://github.com/bannayeva">GitHub</a>] | [<a href="mailto:aliya.bannaeva@gmail.com">Email</a>]</p>
  </div>
  <div style="flex: 1;">
    <img src="/images/profile.png" alt="Aliya Bannayeva" style="border-radius: 50%; max-width: 100%; height: auto;">
  </div>
</div>
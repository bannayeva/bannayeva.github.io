---
layout: single
author_profile: false
permalink: /
---
<style>
.join-tree {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-family: monospace;
    font-size: 1.1em;
}
.join-tree ul {
    list-style-type: none;
    padding-left: 30px;
    margin-left: 10px;
    border-left: 2px solid #ccc;
    
}
.join-tree li {
    position: relative;
    padding-left: 40px;
    line-height: 2em;
}
.join-tree li::before {
    content: "⋈";
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5em;
    color: #333;
    background: #fff;
    padding: 0 5px;
}
.join-tree li a {
    text-decoration: none;
    font-weight: bold;
}
</style>

<div style="display: flex; align-items: flex-start; margin-top: 2em;">
  <div style="flex: 1.5; padding-right: 20px;">
    <ul class="join-tree">
        <li> <a href="/blog/">Blog</a>
            <ul>
                <li> <a href="/files/cv.pdf" target="_blank">CV as PDF</a>
                    <ul>
                        <li><a href="/">Aliya Bannayeva</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
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
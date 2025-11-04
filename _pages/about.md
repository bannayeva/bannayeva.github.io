---
layout: single
title: ""
permalink: /about/
author_profile: false
---

<style>
    .about-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 40px 20px;
        display: flex;
        gap: 40px;
        align-items: center;
    }
    
    .about-text {
        flex: 1;
        font-family: "Courier New", monospace !important;
        color: #2d5016 !important;
        text-align: left;
    }
    
    .about-text h1 {
        font-family: "Courier New", monospace !important;
        color: #2d5016 !important;
        font-size: 2em;
        margin-bottom: 20px;
        text-transform: lowercase;
    }
    
    .about-text p {
        font-family: "Courier New", monospace !important;
        color: #2d5016 !important;
        line-height: 1.6;
        margin-bottom: 20px;
    }
    
    .about-text a {
        color: #228b22 !important;
        text-decoration: none;
    }
    
    .about-text a:hover {
        color: #006400 !important;
        text-decoration: underline;
    }
    
    .about-image {
        flex-shrink: 0;
    }
    
    .about-image img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    @media (max-width: 768px) {
        .about-container {
            flex-direction: column;
            align-items: center;
        }
        
        .about-text {
            text-align: center;
        }
    }
</style>

<div class="about-container">
    <div class="about-text">
        <h1>aliya bannayeva</h1>
        
        <p>Final semester master student at TU Munich. I did my thesis at the <a href="https://db.in.tum.de/">Chair for Database Systems</a> under the supervision of Altan Birler and Prof. Thomas Neumann, on multi-join cardinality estimation using sketches. My current focus is on adaptive query optimization.</p>
        
        <p>Outside of databases, my interests are mainly surrounding mathematics (concentration bounds) and materials science (crystallography). I'm always open to collaborating on interesting projects, please feel free to reach out for a chat.</p>
    </div>
    
    <div class="about-image">
        <img src="{{ '/images/profile.png' | relative_url }}" alt="Aliya Bannayeva">
    </div>
</div>


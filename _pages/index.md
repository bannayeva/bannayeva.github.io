---
layout: default
title: "Aliya Bannayeva"
permalink: /
---

<div class="query-plan-container">
    <svg id="query-plan-svg"></svg>
</div>

<style>
    .query-plan-container {
        max-width: 1200px;
        margin: 40px auto;
        padding: 20px;
        display: flex;
        justify-content: center;
    }

    #query-plan-svg {
        font-family: "Courier New", monospace;
        font-size: 11px;
        background: transparent;
    }

    .ascii-text {
        fill: #2d5016;
        font-family: "Courier New", monospace;
        font-size: 11px;
        white-space: pre;
    }

    .ascii-link {
        fill: #228b22;
        font-weight: bold;
        cursor: pointer;
    }

    .ascii-link:hover {
        fill: #006400;
    }

    .ascii-operator {
        fill: #556b2f;
    }

    .ascii-scan {
        fill: #228b22;
    }

    .ascii-card {
        fill: #6b8e23;
    }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
<script>
(function() {
    const svg = d3.select("#query-plan-svg");
    const container = d3.select(".query-plan-container");
    
    const asciiArt = [
        "                    +----------------+",
        "                    | aliya bannayeva|",
        "                    | card 5         |",
        "                    +-------o--------+",
        "                            |",
        "                    +-------o--------+",
        "                    | append         |",
        "                    | card 5         |",
        "                    +-------o--------+",
        "                            |",
        "",
        "",
        "+----o-----+ +---o----+ +---o---+ +-----o----+ +---o----+",
        "| seq      | | index  | | bitmap| | index    | | index  |",
        "| scan     | | scan   | | scan  | | scan     | | scan   |",
        "| cv       | | blog   | | github| | scholar  | | email  |",
        "| card 1   | | card 1 | | card 9| | card 1   | | card 1 |",
        "+----------+ +--------+ +-------+ +----------+ +--------+"
    ];
    
    function renderQueryPlan() {
        const charWidth = 6.6;
        const lineHeight = 13.2;
        
        const boxLine = "+----o-----+ +---o----+ +---o---+ +-----o----+ +---o----+";
        const oPositions = [6, 17, 28, 40, 51];
        const centerPos = 28;
        const minPos = 0;
        const lastOPos = Math.max(...oPositions);
        const maxPos = lastOPos + 4;
        
        const connectorLine1 = Array(maxPos + 1).fill(' ').map((_, idx) => {
            if (idx < minPos) return ' ';
            if (idx === minPos) return '+';
            if (idx === centerPos) return '+';
            if (oPositions.includes(idx)) return '+';
            if (idx === maxPos) return '+';
            if (idx <= maxPos) return '-';
            return ' ';
        }).join('');
        
        const connectorLine2 = Array(maxPos + 1).fill(' ').map((_, idx) => {
            if (idx === centerPos) return '|';
            if (oPositions.includes(idx)) return '|';
            return ' ';
        }).join('');
        
        const asciiArtWithConnector = [
            "                    +----------------+",
            "                    | aliya bannayeva|",
            "                    | card 5         |",
            "                    +-------o--------+",
            "                            |",
            "                    +-------o--------+",
            "                    | append         |",
            "                    | card 5         |",
            "                    +-------o--------+",
            "                            |",
            connectorLine1,
            connectorLine2,
            boxLine,
            "| seq      | | index  | | bitmap| | index    | | index  |",
            "| scan     | | scan   | | scan  | | scan     | | scan   |",
            "| cv       | | blog   | | github| | scholar  | | email  |",
            "| card 1   | | card 1 | | card 9| | card 1   | | card 1 |",
            "+----------+ +--------+ +-------+ +----------+ +--------+"
        ];
        
        const maxLineLength = d3.max(asciiArtWithConnector.map(l => l.length));
        const svgWidth = maxLineLength * charWidth + 40;
        const svgHeight = asciiArtWithConnector.length * lineHeight + 40;
        
        svg.attr("width", svgWidth)
           .attr("height", svgHeight);
        
        svg.selectAll("*").remove();

    const g = svg.append("g")
            .attr("transform", "translate(20, 20)");
        
        asciiArtWithConnector.forEach((line, i) => {
            
            const baseText = g.append("text")
                .attr("class", "ascii-text")
                .attr("x", 0)
                .attr("y", (i + 1) * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
            
            if (line.includes('aliya bannayeva')) {
                const startX = line.indexOf('aliya bannayeva') * charWidth;
                g.append("text")
                    .attr("class", "ascii-link")
                    .attr("x", startX)
                    .attr("y", (i + 1) * lineHeight)
                    .text("aliya bannayeva")
                    .style("cursor", "pointer")
                    .on("click", () => window.location.href = "/about/");
            }
            
            if (line.includes('cv') && line.includes('| cv')) {
                const startX = line.indexOf('cv') * charWidth;
                g.append("text")
                    .attr("class", "ascii-link")
                    .attr("x", startX)
                    .attr("y", (i + 1) * lineHeight)
                    .text("cv")
                    .style("cursor", "pointer")
                    .on("click", () => window.open("/files/cv.pdf", "_blank"));
            }
            
            if (line.includes('blog') && line.includes('| blog')) {
                const startX = line.indexOf('blog') * charWidth;
                g.append("text")
                    .attr("class", "ascii-link")
                    .attr("x", startX)
                    .attr("y", (i + 1) * lineHeight)
                    .text("blog")
                    .style("cursor", "pointer")
                    .on("click", () => window.location.href = "/blog/");
            }
            
            if (line.includes('github') && line.includes('| github')) {
                const startX = line.indexOf('github') * charWidth;
                g.append("text")
                    .attr("class", "ascii-link")
                    .attr("x", startX)
                    .attr("y", (i + 1) * lineHeight)
                    .text("github")
                    .style("cursor", "pointer")
                    .on("click", () => window.open("https://github.com/bannayeva", "_blank"));
            }
            
            if (line.includes('scholar') && line.includes('| scholar')) {
                const startX = line.indexOf('scholar') * charWidth;
                g.append("text")
                    .attr("class", "ascii-link")
                    .attr("x", startX)
                    .attr("y", (i + 1) * lineHeight)
                    .text("scholar")
                    .style("cursor", "pointer")
                    .on("click", () => window.open("https://scholar.google.com/citations?user=qyOolasAAAAJ&hl=en", "_blank"));
            }
            
            if (line.includes('email') && line.includes('| email')) {
                const startX = line.indexOf('email') * charWidth;
                g.append("text")
                    .attr("class", "ascii-link")
                    .attr("x", startX)
                    .attr("y", (i + 1) * lineHeight)
                    .text("email")
        .style("cursor", "pointer")
                    .on("click", () => window.location.href = "mailto:aliya.bannayeva@tum.de");
            }
        });
    }
    
    renderQueryPlan();
    window.addEventListener("resize", () => {
        setTimeout(renderQueryPlan, 100);
    });
})();
</script>

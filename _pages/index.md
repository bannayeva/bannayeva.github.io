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
        max-width: 100%;
        margin: 40px auto;
        padding: 20px;
        display: flex;
        justify-content: center;
        overflow: visible;
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

    .ascii-scenery {
        fill: #8fbc8f;
        opacity: 0.9;
    }

    .ascii-cloud {
        fill: #c8e6c3;
        opacity: 0.9;
    }

    .ascii-bird {
        fill: #6b8e23;
        opacity: 0.8;
    }

    .ascii-flower {
        fill: #228b22;
        opacity: 0.85;
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
        const queryPlanWidth = maxLineLength * charWidth;
        const queryPlanHeight = asciiArtWithConnector.length * lineHeight;
        
        const padding = 200;
        const svgWidth = queryPlanWidth + padding * 2;
        const svgHeight = queryPlanHeight + padding * 3;
        
        const queryPlanStartX = padding;
        const queryPlanStartY = padding;
        
        svg.attr("width", svgWidth)
           .attr("height", svgHeight);
        
        svg.selectAll("*").remove();

        const sceneryG = svg.append("g").attr("class", "scenery");
        
        const bigCloud = [
            "           __",
            "        __(  )__",
            "      (          )",
            "     (            )",
            "    (              )"
        ];
        
        const clouds = [
            { x: 50, y: 50, lines: bigCloud },
            { x: svgWidth - 300, y: 40, lines: bigCloud },
            { x: svgWidth / 2 - 80, y: 30, lines: [
                "     __",
                "  __(  )__",
                " (        )"
            ]}
        ];
        
        clouds.forEach(cloud => {
            cloud.lines.forEach((line, i) => {
                sceneryG.append("text")
                    .attr("class", "ascii-cloud")
                    .attr("x", cloud.x)
                    .attr("y", cloud.y + i * lineHeight)
                    .attr("xml:space", "preserve")
                    .text(line);
            });
        });
        
        const birds = [
            { x: 80, y: 100, text: ">^>^>^" },
            { x: svgWidth - 200, y: 110, text: ">^>^>^" },
            { x: 120, y: queryPlanStartY + queryPlanHeight + 60, text: ">^>^" },
            { x: svgWidth - 180, y: queryPlanStartY + queryPlanHeight + 70, text: ">^>^" },
            { x: svgWidth / 2 - 100, y: 90, text: ">^>^" }
        ];
        
        birds.forEach(bird => {
            sceneryG.append("text")
                .attr("class", "ascii-bird")
                .attr("x", bird.x)
                .attr("y", bird.y)
                .text(bird.text);
        });
        
        const leftMountain = [
            "              /\\",
            "             /  \\",
            "            /    \\",
            "           /      \\",
            "          /        \\",
            "         /          \\",
            "        /            \\",
            "       /              \\",
            "      /                \\",
            "     /                  \\",
            "    /                    \\",
            "   /                      \\",
            "  /                        \\",
            " /                          \\",
            "/____________________________\\"
        ];
        
        const rightMountain = [
            "              /\\",
            "             /  \\",
            "            /    \\",
            "           /      \\",
            "          /        \\",
            "         /          \\",
            "        /            \\",
            "       /              \\",
            "      /                \\",
            "     /                  \\",
            "    /                    \\",
            "   /                      \\",
            "  /                        \\",
            " /                          \\",
            "/____________________________\\"
        ];
        
        const queryPlanCenterX = queryPlanStartX + queryPlanWidth / 2;
        const shiftRight = queryPlanCenterX - svgWidth / 2 + 100;
        
        const mountainX = 10 + shiftRight;
        const mountainY = svgHeight - leftMountain.length * lineHeight - 10;
        leftMountain.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("x", mountainX)
                .attr("y", mountainY + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const mountain2X = svgWidth - 350 + shiftRight;
        const mountain2Y = svgHeight - rightMountain.length * lineHeight - 10;
        rightMountain.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("x", mountain2X)
                .attr("y", mountain2Y + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const centerMountain = [
            "        /\\",
            "       /  \\",
            "      /    \\",
            "     /      \\",
            "    /        \\",
            "   /          \\",
            "  /            \\",
            " /              \\",
            "/________________\\"
        ];
        
        const centerMountainX = svgWidth / 2 - 120 + shiftRight;
        const centerMountainY = svgHeight - centerMountain.length * lineHeight - 10;
        centerMountain.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("x", centerMountainX)
                .attr("y", centerMountainY + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const mediumMountain1 = [
            "      /\\",
            "     /  \\",
            "    /    \\",
            "   /      \\",
            "  /        \\",
            " /          \\",
            "/____________\\"
        ];
        
        const mediumMountain1X = 180 + shiftRight;
        const mediumMountain1Y = svgHeight - mediumMountain1.length * lineHeight - 10;
        mediumMountain1.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("x", mediumMountain1X)
                .attr("y", mediumMountain1Y + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const mediumMountain2 = [
            "      /\\",
            "     /  \\",
            "    /    \\",
            "   /      \\",
            "  /        \\",
            " /          \\",
            "/____________\\"
        ];
        
        const mediumMountain2X = svgWidth - 250 + shiftRight;
        const mediumMountain2Y = svgHeight - mediumMountain2.length * lineHeight - 10;
        mediumMountain2.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("x", mediumMountain2X)
                .attr("y", mediumMountain2Y + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const smallMountain1 = [
            "    /\\",
            "   /  \\",
            "  /    \\",
            " /      \\",
            "/________\\"
        ];
        
        const smallMountain1X = 350 + shiftRight;
        const smallMountain1Y = svgHeight - smallMountain1.length * lineHeight - 10;
        smallMountain1.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("x", smallMountain1X)
                .attr("y", smallMountain1Y + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const smallMountain2 = [
            "    /\\",
            "   /  \\",
            "  /    \\",
            " /      \\",
            "/________\\"
        ];
        
        const smallMountain2X = svgWidth - 400 + shiftRight;
        const smallMountain2Y = svgHeight - smallMountain2.length * lineHeight - 10;
        smallMountain2.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("x", smallMountain2X)
                .attr("y", smallMountain2Y + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const tinyMountain1 = [
            "  /\\",
            " /  \\",
            "/____\\"
        ];
        
        const tinyMountain1X = 450 + shiftRight;
        const tinyMountain1Y = svgHeight - tinyMountain1.length * lineHeight - 10;
        tinyMountain1.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("x", tinyMountain1X)
                .attr("y", tinyMountain1Y + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const tinyMountain2 = [
            "  /\\",
            " /  \\",
            "/____\\"
        ];
        
        const tinyMountain2X = svgWidth - 500 + shiftRight;
        const tinyMountain2Y = svgHeight - tinyMountain2.length * lineHeight - 10;
        tinyMountain2.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("x", tinyMountain2X)
                .attr("y", tinyMountain2Y + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const flowers = [
            { x: queryPlanStartX - 80, y: queryPlanStartY + queryPlanHeight + 40, text: "  @\n @@@\n  |" },
            { x: queryPlanStartX - 60, y: queryPlanStartY + queryPlanHeight + 60, text: "  @\n @@@\n  |" },
            { x: queryPlanStartX + queryPlanWidth + 40, y: queryPlanStartY + queryPlanHeight + 50, text: "  @\n @@@\n  |" },
            { x: queryPlanStartX + queryPlanWidth + 60, y: queryPlanStartY + queryPlanHeight + 70, text: "  @\n @@@\n  |" },
            { x: queryPlanStartX - 50, y: queryPlanStartY + 100, text: "  @\n @@@\n  |" },
            { x: queryPlanStartX + queryPlanWidth + 30, y: queryPlanStartY + 120, text: "  @\n @@@\n  |" },
            { x: queryPlanStartX + queryPlanWidth / 2 - 20, y: queryPlanStartY + queryPlanHeight + 80, text: "  @\n @@@\n  |" },
            { x: queryPlanStartX + queryPlanWidth / 2 + 20, y: queryPlanStartY + queryPlanHeight + 60, text: "  @\n @@@\n  |" }
        ];
        
        flowers.forEach(flower => {
            const lines = flower.text.split('\n');
            lines.forEach((line, i) => {
                sceneryG.append("text")
                    .attr("class", "ascii-flower")
                    .attr("x", flower.x)
                    .attr("y", flower.y + i * lineHeight)
                    .attr("xml:space", "preserve")
                    .text(line);
            });
        });

    const g = svg.append("g")
            .attr("transform", `translate(${queryPlanStartX}, ${queryPlanStartY})`);
        
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

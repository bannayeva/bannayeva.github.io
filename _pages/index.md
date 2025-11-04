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
        margin: 20px auto;
        padding: 10px;
        display: flex;
        justify-content: center;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }

    #query-plan-svg {
        font-family: "Courier New", monospace;
        font-size: 11px;
        background: transparent;
        max-width: 100%;
        height: auto;
    }
    
    @media (max-width: 768px) {
        .query-plan-container {
            margin: 10px auto;
            padding: 5px;
        }
        
        #query-plan-svg {
            font-size: 9px;
        }
    }
    
    @media (max-width: 480px) {
        .query-plan-container {
            margin: 5px auto;
            padding: 2px;
        }
        
        #query-plan-svg {
            font-size: 8px;
        }
    }

    #query-plan-svg .ascii-text {
        fill: #2d5016 !important;
        font-family: "Courier New", monospace;
        font-size: 11px;
        white-space: pre;
    }

    #query-plan-svg .ascii-link {
        fill: #228b22 !important;
        font-weight: bold;
        cursor: pointer;
    }

    #query-plan-svg .ascii-link:hover {
        fill: #006400 !important;
    }

    #query-plan-svg .ascii-scenery {
        fill: #8fbc8f !important;
        opacity: 0.9;
    }

    #query-plan-svg .ascii-cloud {
        fill: #c8e6c3 !important;
        opacity: 0.9;
    }

    #query-plan-svg .ascii-bird {
        fill: #6b8e23 !important;
        opacity: 0.8;
    }

    #query-plan-svg .ascii-flower {
        fill: #228b22 !important;
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
        const isMobile = window.innerWidth < 768;
        const isSmallMobile = window.innerWidth < 480;
        
        const charWidth = isSmallMobile ? 5.3 : (isMobile ? 5.9 : 6.6);
        const lineHeight = isSmallMobile ? 10.6 : (isMobile ? 11.9 : 13.2);
        
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
        
        const padding = isMobile ? 50 : (isSmallMobile ? 30 : 200);
        const svgWidth = Math.max(queryPlanWidth + padding * 2, window.innerWidth - 20);
        const svgHeight = queryPlanHeight + padding * 3 + (isMobile ? 200 : 400);
        
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
        
        const clouds = isMobile ? [
            { x: 20, y: 20, lines: ["     __", "  __(  )__", " (        )"] },
            { x: svgWidth - 120, y: 15, lines: ["     __", "  __(  )__", " (        )"] }
        ] : [
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
                    .attr("fill", "#c8e6c3")
                    .attr("opacity", "0.9")
                    .attr("x", cloud.x)
                    .attr("y", cloud.y + i * lineHeight)
                    .attr("xml:space", "preserve")
                    .text(line);
            });
        });
        
        const birds = isMobile ? [
            { x: 30, y: 40, text: ">^>^" },
            { x: svgWidth - 80, y: 45, text: ">^>^" },
            { x: 50, y: queryPlanStartY + queryPlanHeight + 30, text: ">^" },
            { x: svgWidth - 70, y: queryPlanStartY + queryPlanHeight + 35, text: ">^" }
        ] : [
            { x: 80, y: 100, text: ">^>^>^" },
            { x: svgWidth - 200, y: 110, text: ">^>^>^" },
            { x: 120, y: queryPlanStartY + queryPlanHeight + 60, text: ">^>^" },
            { x: svgWidth - 180, y: queryPlanStartY + queryPlanHeight + 70, text: ">^>^" },
            { x: svgWidth / 2 - 100, y: 90, text: ">^>^" }
        ];
        
        birds.forEach(bird => {
            sceneryG.append("text")
                .attr("class", "ascii-bird")
                .attr("fill", "#6b8e23")
                .attr("opacity", "0.8")
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
        const shiftRight = isMobile ? 0 : (queryPlanCenterX - svgWidth / 2 + 100);
        
        const commonBaseY = queryPlanStartY + queryPlanHeight + (isMobile ? 80 : 250);
        
        const mountainX = isMobile ? Math.max(5, 5 + shiftRight) : Math.max(10, 10 + shiftRight);
        const mountainY = commonBaseY - (leftMountain.length - 1) * lineHeight;
        leftMountain.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("fill", "#8fbc8f")
                .attr("opacity", "0.9")
                .attr("x", mountainX)
                .attr("y", mountainY + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const mountain2X = isMobile ? Math.min(svgWidth - 150, svgWidth - 150 + shiftRight) : Math.min(svgWidth - 350, svgWidth - 350 + shiftRight);
        const mountain2Y = commonBaseY - (rightMountain.length - 1) * lineHeight;
        rightMountain.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("fill", "#8fbc8f")
                .attr("opacity", "0.9")
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
        
        const centerMountainX = isMobile ? queryPlanCenterX - 60 : queryPlanCenterX - 120;
        const centerMountainY = commonBaseY - (centerMountain.length - 1) * lineHeight;
        centerMountain.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("fill", "#8fbc8f")
                .attr("opacity", "0.9")
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
        
        const mediumMountain1X = isMobile ? queryPlanCenterX - queryPlanWidth / 4 - 35 : queryPlanCenterX - queryPlanWidth / 4 - 70;
        const mediumMountain1Y = commonBaseY - (mediumMountain1.length - 1) * lineHeight;
        mediumMountain1.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("fill", "#8fbc8f")
                .attr("opacity", "0.9")
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
        
        const mediumMountain2X = isMobile ? queryPlanCenterX + queryPlanWidth / 4 - 35 : queryPlanCenterX + queryPlanWidth / 4 - 70;
        const mediumMountain2Y = commonBaseY - (mediumMountain2.length - 1) * lineHeight;
        mediumMountain2.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("fill", "#8fbc8f")
                .attr("opacity", "0.9")
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
        
        const smallMountain1X = isMobile ? queryPlanCenterX - queryPlanWidth / 6 - 25 : queryPlanCenterX - queryPlanWidth / 6 - 50;
        const smallMountain1Y = commonBaseY - (smallMountain1.length - 1) * lineHeight;
        smallMountain1.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("fill", "#8fbc8f")
                .attr("opacity", "0.9")
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
        
        const smallMountain2X = isMobile ? queryPlanCenterX + queryPlanWidth / 6 - 25 : queryPlanCenterX + queryPlanWidth / 6 - 50;
        const smallMountain2Y = commonBaseY - (smallMountain2.length - 1) * lineHeight;
        smallMountain2.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("fill", "#8fbc8f")
                .attr("opacity", "0.9")
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
        
        const tinyMountain1X = isMobile ? queryPlanCenterX - queryPlanWidth / 8 - 15 : queryPlanCenterX - queryPlanWidth / 8 - 30;
        const tinyMountain1Y = commonBaseY - (tinyMountain1.length - 1) * lineHeight;
        tinyMountain1.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("fill", "#8fbc8f")
                .attr("opacity", "0.9")
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
        
        const tinyMountain2X = isMobile ? queryPlanCenterX + queryPlanWidth / 8 - 15 : queryPlanCenterX + queryPlanWidth / 8 - 30;
        const tinyMountain2Y = commonBaseY - (tinyMountain2.length - 1) * lineHeight;
        tinyMountain2.forEach((line, i) => {
            sceneryG.append("text")
                .attr("class", "ascii-scenery")
                .attr("fill", "#8fbc8f")
                .attr("opacity", "0.9")
                .attr("x", tinyMountain2X)
                .attr("y", tinyMountain2Y + i * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
        });
        
        const flowers = isMobile ? [
            { x: queryPlanStartX - 40, y: queryPlanStartY + queryPlanHeight + 20, text: "  @\n @@@\n  |" },
            { x: queryPlanStartX + queryPlanWidth + 20, y: queryPlanStartY + queryPlanHeight + 25, text: "  @\n @@@\n  |" },
            { x: queryPlanStartX - 30, y: queryPlanStartY + 50, text: "  @\n @@@\n  |" },
            { x: queryPlanStartX + queryPlanWidth + 15, y: queryPlanStartY + 60, text: "  @\n @@@\n  |" }
        ] : [
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
                    .attr("fill", "#228b22")
                    .attr("opacity", "0.85")
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
                .attr("fill", "#2d5016")
                .attr("x", 0)
                .attr("y", (i + 1) * lineHeight)
                .attr("xml:space", "preserve")
                .text(line);
            
            if (line.includes('aliya bannayeva')) {
                const startX = line.indexOf('aliya bannayeva') * charWidth;
                g.append("text")
                    .attr("class", "ascii-link")
                    .attr("fill", "#228b22")
                    .attr("font-weight", "bold")
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
                    .attr("fill", "#228b22")
                    .attr("font-weight", "bold")
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
                    .attr("fill", "#228b22")
                    .attr("font-weight", "bold")
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
                    .attr("fill", "#228b22")
                    .attr("font-weight", "bold")
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
                    .attr("fill", "#228b22")
                    .attr("font-weight", "bold")
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
                    .attr("fill", "#228b22")
                    .attr("font-weight", "bold")
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

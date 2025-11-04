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

<script>
(function() {
    'use strict';
    
    function createSVGElement(tag, attributes) {
        const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }
        return element;
    }
    
    function createTextElement(x, y, text, className, fill, opacity) {
        const textEl = createSVGElement('text', {
            'class': className,
            'x': String(x),
            'y': String(y),
            'xml:space': 'preserve',
            'font-family': '"Courier New", monospace',
            'font-size': '11px'
        });
        if (fill) textEl.setAttribute('fill', fill);
        if (opacity !== undefined) textEl.setAttribute('opacity', opacity);
        textEl.textContent = text;
        return textEl;
    }
    
    function renderQueryPlan() {
        const svg = document.getElementById('query-plan-svg');
        if (!svg) {
            console.error('SVG element not found');
            return;
        }
        
        const isMobile = window.innerWidth < 768;
        const isSmallMobile = window.innerWidth < 480;
        
        const charWidth = isSmallMobile ? 5.3 : (isMobile ? 5.9 : 6.6);
        const lineHeight = isSmallMobile ? 10.6 : (isMobile ? 11.9 : 13.2);
        
        if (isNaN(charWidth) || isNaN(lineHeight) || charWidth <= 0 || lineHeight <= 0) {
            console.error('Invalid dimensions:', { charWidth, lineHeight });
            return;
        }
        
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
        
        const maxLineLength = Math.max(...asciiArtWithConnector.map(l => l.length));
        if (!maxLineLength || maxLineLength <= 0) {
            console.error('Invalid maxLineLength:', maxLineLength);
            return;
        }
        
        const queryPlanWidth = maxLineLength * charWidth;
        const queryPlanHeight = asciiArtWithConnector.length * lineHeight;
        
        if (isNaN(queryPlanWidth) || isNaN(queryPlanHeight) || queryPlanWidth <= 0 || queryPlanHeight <= 0) {
            console.error('Invalid query plan dimensions:', { queryPlanWidth, queryPlanHeight });
            return;
        }
        
        const padding = isMobile ? 50 : (isSmallMobile ? 30 : 200);
        const svgWidth = Math.max(queryPlanWidth + padding * 2, window.innerWidth - 20);
        const svgHeight = queryPlanHeight + padding * 3 + (isMobile ? 200 : 400);
        
        if (isNaN(svgWidth) || isNaN(svgHeight) || svgWidth <= 0 || svgHeight <= 0) {
            console.error('Invalid SVG dimensions:', { svgWidth, svgHeight });
            return;
        }
        
        const queryPlanStartX = (svgWidth - queryPlanWidth) / 2;
        const queryPlanStartY = padding;
        
        if (isNaN(queryPlanStartX) || isNaN(queryPlanStartY)) {
            console.error('Invalid start positions:', { queryPlanStartX, queryPlanStartY });
            return;
        }
        
        svg.setAttribute('width', svgWidth);
        svg.setAttribute('height', svgHeight);
        
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }
        
        const sceneryG = createSVGElement('g', { 'class': 'scenery' });
        svg.appendChild(sceneryG);
        
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
                const textEl = createTextElement(cloud.x, cloud.y + i * lineHeight, line, 'ascii-cloud', '#c8e6c3', '0.9');
                sceneryG.appendChild(textEl);
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
            const textEl = createTextElement(bird.x, bird.y, bird.text, 'ascii-bird', '#6b8e23', '0.8');
            sceneryG.appendChild(textEl);
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
        
        const commonBaseY = queryPlanStartY + queryPlanHeight + (isMobile ? 80 : 250);
        
        function renderMountain(mountain, x, baseY, charWidth, lineHeight) {
            for (let i = 0; i < mountain.length; i++) {
                const line = mountain[i];
                const isBaseLine = (i === mountain.length - 1);
                const y = isBaseLine ? baseY : (baseY - (mountain.length - 1 - i) * lineHeight);
                const textEl = createTextElement(x, y, line, 'ascii-scenery', '#8fbc8f', '0.9');
                sceneryG.appendChild(textEl);
            }
        }
        
        const leftMountainWidth = 30 * charWidth;
        const leftMountainX = queryPlanCenterX - queryPlanWidth / 2 - leftMountainWidth;
        renderMountain(leftMountain, leftMountainX, commonBaseY, charWidth, lineHeight);
        
        const rightMountainWidth = 30 * charWidth;
        const rightMountainX = queryPlanCenterX + queryPlanWidth / 2 + 20;
        renderMountain(rightMountain, rightMountainX, commonBaseY, charWidth, lineHeight);
        
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
        
        const centerMountainWidth = 18 * charWidth;
        const centerMountainX = queryPlanCenterX - centerMountainWidth / 2;
        renderMountain(centerMountain, centerMountainX, commonBaseY, charWidth, lineHeight);
        
        const mediumMountain1 = [
            "      /\\",
            "     /  \\",
            "    /    \\",
            "   /      \\",
            "  /        \\",
            " /          \\",
            "/____________\\"
        ];
        
        const mediumMountain1Width = 14 * charWidth;
        const mediumMountain1X = queryPlanCenterX - queryPlanWidth / 4 - mediumMountain1Width / 2;
        renderMountain(mediumMountain1, mediumMountain1X, commonBaseY, charWidth, lineHeight);
        
        const mediumMountain2 = [
            "      /\\",
            "     /  \\",
            "    /    \\",
            "   /      \\",
            "  /        \\",
            " /          \\",
            "/____________\\"
        ];
        
        const mediumMountain2Width = 14 * charWidth;
        const mediumMountain2X = queryPlanCenterX + queryPlanWidth / 4 - mediumMountain2Width / 2;
        renderMountain(mediumMountain2, mediumMountain2X, commonBaseY, charWidth, lineHeight);
        
        const smallMountain1 = [
            "    /\\",
            "   /  \\",
            "  /    \\",
            " /      \\",
            "/________\\"
        ];
        
        const smallMountain1Width = 10 * charWidth;
        const smallMountain1X = queryPlanCenterX - queryPlanWidth / 6 - smallMountain1Width / 2;
        renderMountain(smallMountain1, smallMountain1X, commonBaseY, charWidth, lineHeight);
        
        const smallMountain2 = [
            "    /\\",
            "   /  \\",
            "  /    \\",
            " /      \\",
            "/________\\"
        ];
        
        const smallMountain2Width = 10 * charWidth;
        const smallMountain2X = queryPlanCenterX + queryPlanWidth / 6 - smallMountain2Width / 2;
        renderMountain(smallMountain2, smallMountain2X, commonBaseY, charWidth, lineHeight);
        
        const tinyMountain1 = [
            "  /\\",
            " /  \\",
            "/____\\"
        ];
        
        const tinyMountain1Width = 6 * charWidth;
        const tinyMountain1X = queryPlanCenterX - queryPlanWidth / 8 - tinyMountain1Width / 2;
        renderMountain(tinyMountain1, tinyMountain1X, commonBaseY, charWidth, lineHeight);
        
        const tinyMountain2 = [
            "  /\\",
            " /  \\",
            "/____\\"
        ];
        
        const tinyMountain2Width = 6 * charWidth;
        const tinyMountain2X = queryPlanCenterX + queryPlanWidth / 8 - tinyMountain2Width / 2;
        renderMountain(tinyMountain2, tinyMountain2X, commonBaseY, charWidth, lineHeight);
        
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
                const textEl = createTextElement(flower.x, flower.y + i * lineHeight, line, 'ascii-flower', '#228b22', '0.85');
                sceneryG.appendChild(textEl);
            });
        });
        
        const g = createSVGElement('g', {
            'transform': `translate(${queryPlanStartX}, ${queryPlanStartY})`
        });
        svg.appendChild(g);
        
        asciiArtWithConnector.forEach((line, i) => {
            const baseText = createTextElement(0, (i + 1) * lineHeight, line, 'ascii-text', '#2d5016');
            g.appendChild(baseText);
            
            if (line.includes('aliya bannayeva')) {
                const startX = line.indexOf('aliya bannayeva') * charWidth;
                const linkText = createTextElement(startX, (i + 1) * lineHeight, 'aliya bannayeva', 'ascii-link', '#228b22');
                linkText.setAttribute('font-weight', 'bold');
                linkText.style.cursor = 'pointer';
                linkText.addEventListener('click', () => window.location.href = '/about/');
                g.appendChild(linkText);
            }
            
            if (line.includes('cv') && line.includes('| cv')) {
                const startX = line.indexOf('cv') * charWidth;
                const linkText = createTextElement(startX, (i + 1) * lineHeight, 'cv', 'ascii-link', '#228b22');
                linkText.setAttribute('font-weight', 'bold');
                linkText.style.cursor = 'pointer';
                linkText.addEventListener('click', () => window.open('/files/cv.pdf', '_blank'));
                g.appendChild(linkText);
            }
            
            if (line.includes('blog') && line.includes('| blog')) {
                const startX = line.indexOf('blog') * charWidth;
                const linkText = createTextElement(startX, (i + 1) * lineHeight, 'blog', 'ascii-link', '#228b22');
                linkText.setAttribute('font-weight', 'bold');
                linkText.style.cursor = 'pointer';
                linkText.addEventListener('click', () => window.location.href = '/blog/');
                g.appendChild(linkText);
            }
            
            if (line.includes('github') && line.includes('| github')) {
                const startX = line.indexOf('github') * charWidth;
                const linkText = createTextElement(startX, (i + 1) * lineHeight, 'github', 'ascii-link', '#228b22');
                linkText.setAttribute('font-weight', 'bold');
                linkText.style.cursor = 'pointer';
                linkText.addEventListener('click', () => window.open('https://github.com/bannayeva', '_blank'));
                g.appendChild(linkText);
            }
            
            if (line.includes('scholar') && line.includes('| scholar')) {
                const startX = line.indexOf('scholar') * charWidth;
                const linkText = createTextElement(startX, (i + 1) * lineHeight, 'scholar', 'ascii-link', '#228b22');
                linkText.setAttribute('font-weight', 'bold');
                linkText.style.cursor = 'pointer';
                linkText.addEventListener('click', () => window.open('https://scholar.google.com/citations?user=qyOolasAAAAJ&hl=en', '_blank'));
                g.appendChild(linkText);
            }
            
            if (line.includes('email') && line.includes('| email')) {
                const startX = line.indexOf('email') * charWidth;
                const linkText = createTextElement(startX, (i + 1) * lineHeight, 'email', 'ascii-link', '#228b22');
                linkText.setAttribute('font-weight', 'bold');
                linkText.style.cursor = 'pointer';
                linkText.addEventListener('click', () => window.location.href = 'mailto:aliya.bannayeva@tum.de');
                g.appendChild(linkText);
            }
        });
    }
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    const debouncedRender = debounce(renderQueryPlan, 150);
    
    function init() {
        try {
            function tryRender() {
                const svg = document.getElementById('query-plan-svg');
                if (svg) {
                    renderQueryPlan();
                } else {
                    setTimeout(tryRender, 50);
                }
            }
            
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    setTimeout(tryRender, 100);
                });
            } else {
                setTimeout(tryRender, 100);
            }
        } catch (error) {
            console.error('Error initializing query plan:', error);
        }
    }
    
    init();
    
    window.addEventListener('resize', debouncedRender);
    window.addEventListener('orientationchange', () => {
        setTimeout(renderQueryPlan, 200);
    });
})();
</script>

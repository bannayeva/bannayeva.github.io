<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Join Tree Navigation</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f5f5f5;
        }

        .container {
            display: flex;
            align-items: flex-start;
            max-width: 1200px;
            margin: 0 auto;
            gap: 30px;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .tree-container {
            flex: 2;
            min-width: 500px;
        }

        .info-container {
            flex: 3;
            padding: 20px;
        }

        .profile-container {
            flex: 1;
            text-align: center;
        }

        .profile-container img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        /* Tree styles */
        .link {
            fill: none;
            stroke: #764ba2;
            stroke-width: 2px;
            transition: all 0.3s ease;
        }

        .link.highlighted {
            stroke: #333;
            stroke-width: 3px;
        }

        .node {
            cursor: pointer;
        }

        .node circle {
            fill: #fff;
            stroke: #764ba2;
            stroke-width: 2px;
        }

        .join-node {
            font-size: 24px;
            font-weight: bold;
            fill: #764ba2;
            font-family: "Courier New", monospace;
        }

        .leaf-node text {
            font-size: 13px;
            font-weight: 600;
            fill: #333;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .leaf-node:hover text {
            fill: #764ba2;
        }

        h1 {
            color: #333;
            margin: 0 0 20px 0;
        }

        p {
            line-height: 1.6;
            color: #666;
        }

        a {
            color: #764ba2;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        svg {
            background: #fafafa;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="tree-container">
            <svg id="tree-svg"></svg>
        </div>
        <div class="info-container">
            <h1>Aliya Bannayeva</h1>
            <p>Final semester master student at TU Munich. I did my thesis at the <a href="https://db.in.tum.de/">Chair for Database Systems</a> under the supervision of Altan Birler and Prof. Thomas Neumann, on multi-join cardinality estimation using sketches. My current focus is on adaptive query optimization.</p>
            <p>Outside of databases, my interests are mainly surrounding mathematics (concentration bounds) and materials science (crystallography). I'm always open to collaborating on interesting projects, please feel free to reach out for a chat.</p>
        </div>
        <div class="profile-container">
            <img src="/images/profile.png" alt="Aliya Bannayeva">
        </div>
    </div>

    <script>
        // Tree data structure
        const treeData = {
            name: "⋈",
            type: "join",
            children: [
                {
                    name: "Aliya Bannayeva",
                    type: "leaf",
                    url: "/"
                },
                {
                    name: "⋈",
                    type: "join",
                    children: [
                        {
                            name: "Blog",
                            type: "leaf",
                            url: "/blog/"
                        },
                        {
                            name: "⋈",
                            type: "join",
                            children: [
                                {
                                    name: "CV",
                                    type: "leaf",
                                    url: "/files/cv.pdf",
                                    target: "_blank"
                                },
                                {
                                    name: "⋈",
                                    type: "join",
                                    children: [
                                        {
                                            name: "GitHub",
                                            type: "leaf",
                                            url: "https://github.com/bannayeva",
                                            target: "_blank"
                                        },
                                        {
                                            name: "⋈",
                                            type: "join",
                                            children: [
                                                {
                                                    name: "Scholar",
                                                    type: "leaf",
                                                    url: "https://scholar.google.com/citations?user=qyOolasAAAAJ&hl=en",
                                                    target: "_blank"
                                                },
                                                {
                                                    name: "Email",
                                                    type: "leaf",
                                                    url: "mailto:aliya.bannaeva@gmail.com"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        // Set dimensions and margins - increased for better spacing
        const margin = {top: 40, right: 40, bottom: 40, left: 40};
        const width = 550 - margin.left - margin.right;
        const height = 420 - margin.top - margin.bottom;

        // Create SVG
        const svg = d3.select("#tree-svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

        const g = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Create tree layout with fixed node positions for equal edge lengths
        const treemap = d3.tree()
            .size([width, height])
            .separation(() => 1); // Uniform separation

        // Convert to hierarchy
        const root = d3.hierarchy(treeData);
        const treeNodes = treemap(root);

        // Manually adjust positions for equal edge lengths
        const nodes = treeNodes.descendants();
        const edgeLength = 60; // Fixed edge length
        const horizontalSpacing = 100; // Increased horizontal spacing between siblings

        // Custom positioning for equal edge lengths with better horizontal spacing
        nodes.forEach(node => {
            if (node.depth === 0) {
                // Root node at top center
                node.x = width / 2;
                node.y = 20;
            } else if (node.depth === 1) {
                // First level children - much wider spacing
                if (node.parent.children.indexOf(node) === 0) {
                    node.x = node.parent.x - horizontalSpacing;
                } else {
                    node.x = node.parent.x + horizontalSpacing;
                }
                node.y = node.parent.y + edgeLength;
            } else {
                // For deeper levels, maintain good horizontal spacing
                if (node.parent.children && node.parent.children.length === 2) {
                    const index = node.parent.children.indexOf(node);
                    // Maintain consistent horizontal spacing at each level
                    const offset = horizontalSpacing / Math.pow(1.3, node.depth - 1);
                    node.x = node.parent.x + (index === 0 ? -offset : offset);
                } else {
                    node.x = node.parent.x;
                }
                node.y = node.parent.y + edgeLength;
            }
        });

        // Special handling for the last level to prevent overlap
        const lastLevelNodes = nodes.filter(n => !n.children);
        const scholarNode = lastLevelNodes.find(n => n.data.name === "Scholar");
        const emailNode = lastLevelNodes.find(n => n.data.name === "Email");
        if (scholarNode && emailNode) {
            const parentX = scholarNode.parent.x;
            scholarNode.x = parentX - 50;
            emailNode.x = parentX + 50;
        }

        const links = treeNodes.links();

        // Add links (edges) - with uniform offset for equal visual length
        const link = g.selectAll(".link")
            .data(links)
            .enter().append("line")
            .attr("class", "link")
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y + 12)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y - 12);

        // Add nodes
        const node = g.selectAll(".node")
            .data(nodes)
            .enter().append("g")
            .attr("class", d => d.data.type === "join" ? "node join-node" : "node leaf-node")
            .attr("transform", d => `translate(${d.x},${d.y})`);

        // Add join symbols for join nodes
        node.filter(d => d.data.type === "join")
            .append("text")
            .attr("text-anchor", "middle")
            .attr("dy", "0.35em")
            .text(d => d.data.name);

        // Add text for leaf nodes with better positioning
        const leafNodes = node.filter(d => d.data.type === "leaf");

        leafNodes.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", d => d.children ? "-0.5em" : "0.35em")
            .text(d => d.data.name);

        // Make leaf nodes clickable
        leafNodes
            .style("cursor", "pointer")
            .on("click", (event, d) => {
                if (d.data.url) {
                    if (d.data.target === "_blank") {
                        window.open(d.data.url, "_blank");
                    } else {
                        window.location.href = d.data.url;
                    }
                }
            });

        // Add hover effects
        leafNodes.on("mouseover", function(event, d) {
            // Highlight path from root to this node
            const pathToRoot = [];
            let current = d;
            while (current.parent) {
                pathToRoot.push(current);
                current = current.parent;
            }
            
            link.classed("highlighted", l => {
                return pathToRoot.some(node => 
                    l.target === node || 
                    (l.source === node.parent && l.target === node)
                );
            });
        })
        .on("mouseout", function() {
            link.classed("highlighted", false);
        });

        // Optional: Add animation on load
        link.style("opacity", 0)
            .transition()
            .duration(500)
            .delay((d, i) => i * 50)
            .style("opacity", 1);

        node.style("opacity", 0)
            .transition()
            .duration(500)
            .delay((d, i) => i * 30)
            .style("opacity", 1);
    </script>
</body>
</html>
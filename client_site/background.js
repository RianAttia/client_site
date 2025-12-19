// --- Creative Coding Agent: Optimized Voronoi Tessellations ---

// Initialize p5.js sketch
const voronoiSketch = (p) => {
  // --- OPTIMIZATION: Calculate on a lower-res grid and scale up ---
  // A larger number means more performance but a blockier look. 8 is a good balance.
  const resolutionScale = 8;
  let gridWidth, gridHeight;

  let sites = [];
  const numSites = 40;

  // Toggles for visual style and behavior.
  let showSites = true;
  let drawVoronoiEdges = true;
  let drawDelaunayEdges = false;
  let useRelaxation = false;

  const noiseSpeed = 0.005;

  // Physics parameters
  const repulsionRadiusSq = 60 * 60; // Use squared radius for faster checks
  const repulsionStrength = 0.4;

  // Data structures for the low-resolution grid
  let closestSiteMap; 
  let centroidSumsX, centroidSumsY, cellPixelCounts;

  p.setup = function() {
    createCanvas(window.innerWidth, window.innerHeight);
    p.colorMode(p.HSB, 360, 100, 100, 100);
    
    // Initialize grid dimensions and data structures
    initGrid();

    // Initialize sites
    for (let i = 0; i < numSites; i++) {
      sites.push({
        pos: p.createVector(p.random(p.width), p.random(p.height)),
        force: p.createVector(0, 0),
        color: p.color(p.random(60), p.random(80, 100), p.random(85, 100)),
        noiseOffset: p.createVector(p.random(1000), p.random(1000)),
      });
    }
  };

  p.draw = function() {
    p.background(30, 80, 20); // Dark, warm background

    // --- Step 1: Update Site Positions ---
    applyPhysicsAndMovement();

    // --- Step 2: Main Calculation Pass (Optimized) ---
    // On the low-res grid, find the closest site for each cell
    // AND simultaneously gather data for Lloyd's Relaxation.
    // This combines two major loops from the previous version.
    
    // Reset centroid calculation arrays for this frame
    centroidSumsX.fill(0);
    centroidSumsY.fill(0);
    cellPixelCounts.fill(0);
    
    let mapIndex = 0;
    for (let gy = 0; gy < gridHeight; gy++) {
      for (let gx = 0; gx < gridWidth; gx++) {
        const canvasX = gx * resolutionScale;
        const canvasY = gy * resolutionScale;
        
        let recordDistSq = Infinity;
        let closestSiteIndex = -1;
        
        for (let i = 0; i < sites.length; i++) {
          const dSq = distSq(canvasX, canvasY, sites[i].pos.x, sites[i].pos.y);
          if (dSq < recordDistSq) {
            recordDistSq = dSq;
            closestSiteIndex = i;
          }
        }
        closestSiteMap[mapIndex] = closestSiteIndex;

        // Accumulate data for centroid calculation (for Lloyd's relaxation)
        centroidSumsX[closestSiteIndex] += canvasX;
        centroidSumsY[closestSiteIndex] += canvasY;
        cellPixelCounts[closestSiteIndex]++;
        
        mapIndex++;
      }
    }

    // --- Step 3: Render from the Low-Res Map ---
    // Draw the colored cells as scaled-up rectangles
    p.noStroke();
    mapIndex = 0;
    for (let gy = 0; gy < gridHeight; gy++) {
      for (let gx = 0; gx < gridWidth; gx++) {
        const ownerIndex = closestSiteMap[mapIndex];
        p.fill(sites[ownerIndex].color);
        p.rect(gx * resolutionScale, gy * resolutionScale, resolutionScale, resolutionScale);
        mapIndex++;
      }
    }

    // --- Step 4: Optional Overlays (Edges, Sites) ---
    const delaunayEdges = new Set();
    
    if (drawVoronoiEdges || drawDelaunayEdges) {
      mapIndex = 0;
      for (let gy = 0; gy < gridHeight; gy++) {
        for (let gx = 0; gx < gridWidth; gx++) {
          const ownerIndex = closestSiteMap[mapIndex];

          // Check right neighbor
          if (gx < gridWidth - 1) {
            const rightOwner = closestSiteMap[mapIndex + 1];
            if (ownerIndex !== rightOwner) {
              if(drawVoronoiEdges) {
                 p.stroke(0, 0, 10);
                 p.strokeWeight(1);
                 p.line((gx + 1) * resolutionScale, gy * resolutionScale, (gx + 1) * resolutionScale, (gy + 1) * resolutionScale);
              }
              const key = ownerIndex < rightOwner ? `${ownerIndex}-${rightOwner}` : `${rightOwner}-${ownerIndex}`;
              delaunayEdges.add(key);
            }
          }
          // Check bottom neighbor
          if (gy < gridHeight - 1) {
            const bottomOwner = closestSiteMap[mapIndex + gridWidth];
            if(ownerIndex !== bottomOwner) {
               if(drawVoronoiEdges) {
                  p.stroke(0, 0, 10);
                  p.strokeWeight(1);
                  p.line(gx * resolutionScale, (gy + 1) * resolutionScale, (gx + 1) * resolutionScale, (gy + 1) * resolutionScale);
               }
               const key = ownerIndex < bottomOwner ? `${ownerIndex}-${bottomOwner}` : `${bottomOwner}-${ownerIndex}`;
               delaunayEdges.add(key);
            }
          }
          mapIndex++;
        }
      }
    }
    
    if (drawDelaunayEdges) {
      p.stroke(0, 0, 100, 50);
      p.strokeWeight(1.5);
      for (const edgeKey of delaunayEdges) {
        const [i, j] = edgeKey.split('-').map(Number);
        p.line(sites[i].pos.x, sites[i].pos.y, sites[j].pos.x, sites[j].pos.y);
      }
    }

    if (showSites) {
      for (let site of sites) {
        p.stroke(0, 0, 0, 50);
        p.strokeWeight(2);
        p.fill(0, 0, 100);
        p.ellipse(site.pos.x, site.pos.y, 8, 8);
      }
    }
  };

  // --- Helper and Logic Functions ---

  function applyPhysicsAndMovement() {
    // Apply repulsion to prevent clustering
    for (let i = 0; i < sites.length; i++) {
      for (let j = i + 1; j < sites.length; j++) {
        const siteA = sites[i];
        const siteB = sites[j];
        const heading = p5.Vector.sub(siteA.pos, siteB.pos);
        const dSq = heading.magSq();
        
        if (dSq > 0 && dSq < repulsionRadiusSq) {
          const d = p.sqrt(dSq);
          const magnitude = (1 - (d / p.sqrt(repulsionRadiusSq))) * repulsionStrength;
          heading.setMag(magnitude);
          siteA.force.add(heading);
          siteB.force.sub(heading);
        }
      }
    }

    // Apply movement based on mode
    if (useRelaxation) {
      applyLloydsRelaxation();
    } else {
      applyNoiseMovement();
    }

    // Apply forces and constrain to canvas
    for (let site of sites) {
      site.pos.add(site.force);
      site.pos.x = p.constrain(site.pos.x, 0, p.width);
      site.pos.y = p.constrain(site.pos.y, 0, p.height);
      site.force.set(0, 0); // Reset force for next frame
    }
  }

  function applyNoiseMovement() {
    const t = p.frameCount * noiseSpeed;
    for (let site of sites) {
      const angle = p.noise(site.noiseOffset.x + t, site.noiseOffset.y + t) * p.TWO_PI * 4;
      const move = p5.Vector.fromAngle(angle);
      move.setMag(0.7);
      site.force.add(move);
    }
  }

  function applyLloydsRelaxation() {
    for (let i = 0; i < sites.length; i++) {
      if (cellPixelCounts[i] > 0) {
        const targetX = centroidSumsX[i] / cellPixelCounts[i];
        const targetY = centroidSumsY[i] / cellPixelCounts[i];
        const target = p.createVector(targetX, targetY);
        
        const move = p5.Vector.sub(target, sites[i].pos);
        move.mult(0.1); // Lerp factor
        sites[i].force.add(move);
      }
    }
  }

  function initGrid() {
    gridWidth = p.floor(p.width / resolutionScale);
    gridHeight = p.floor(p.height / resolutionScale);
    closestSiteMap = new Int32Array(gridWidth * gridHeight);
    // These are now Float64 for precision with large canvas sizes
    centroidSumsX = new Float64Array(numSites);
    centroidSumsY = new Float64Array(numSites);
    cellPixelCounts = new Int32Array(numSites);
  }

  function distSq(x1, y1, x2, y2) {
    return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
  }

  // --- User Interaction ---

  p.mousePressed = function() {
    useRelaxation = !useRelaxation;
  };

  p.keyPressed = function() {
    if (p.key === 's' || p.key === 'S') showSites = !showSites;
    if (p.key === 'e' || p.key === 'E') drawVoronoiEdges = !drawVoronoiEdges;
    if (p.key === 'd' || p.key === 'D') drawDelaunayEdges = !drawDelaunayEdges;
  };

  p.windowResized = function() {
    if (document.querySelector('#p5-container')) {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
      initGrid(); // Re-initialize grid for new size
      for (let i = 0; i < numSites; i++) {
        sites[i].pos.set(p.random(p.width), p.random(p.height));
      }
    }
  };
};

// Create the p5 sketch
new p5(voronoiSketch, 'p5-container');

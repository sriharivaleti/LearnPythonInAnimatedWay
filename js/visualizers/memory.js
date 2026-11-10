/**
 * Memory Visualizer - Pure Vanilla SVG + DOM
 * Visualizes Python Stack frames (Variable Name Bindings) and Heap (Objects & References)
 */

(function (global) {
  'use strict';

  class MemoryVisualizer {
    constructor(canvasEl, svgEl) {
      this.canvas = canvasEl;
      this.svg = svgEl;
      this.initSvgDefs();
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => this.redrawPointers());
      }
    }

    initSvgDefs() {
      this.svg.innerHTML = `
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                  refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" class="pointer-arrowhead" />
          </marker>
        </defs>
      `;
    }

    clear() {
      this.canvas.innerHTML = '';
      this.initSvgDefs();
    }

    renderState(state) {
      if (!state) {
        this.clear();
        return;
      }

      const { variables = [], objects = [], callout = null } = state;

      let html = `
        <div class="memory-stage">
          ${callout ? `<div class="eval-callout">${callout}</div>` : ''}

          <!-- Namespace / Variables (Names) -->
          <div class="memory-zone" id="zone-namespace">
            <span class="zone-label">Global Namespace (Names)</span>
            <div class="zone-cards" id="var-list" style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
              ${variables.map(v => `
                <div class="var-card ${v.isHighlighted ? 'highlight' : ''}" id="var-${v.name}">
                  <span class="var-name">${v.name}</span>
                  <span class="var-binding-arrow">➔</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Python Heap / Memory Pool (Objects) -->
          <div class="memory-zone" id="zone-heap">
            <span class="zone-label">Heap Memory (Objects)</span>
            <div class="zone-cards" id="obj-list" style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
              ${objects.map(obj => `
                <div class="obj-card ${obj.isNew ? 'created' : ''} ${obj.isMutated ? 'mutated' : ''}" id="obj-${obj.id}">
                  <div class="obj-header">
                    <span class="obj-type">&lt;${obj.type}&gt;</span>
                    <span class="obj-id">${obj.id}</span>
                  </div>
                  ${Array.isArray(obj.items) ? `
                    <div class="obj-list-container">
                      ${obj.items.map((item, idx) => `
                        <div class="list-element-cell">
                          <span class="element-index">[${idx}]</span>
                          <span class="element-value">${item}</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : `
                    <div class="obj-value">${obj.displayValue !== undefined ? obj.displayValue : obj.value}</div>
                  `}
                  <div class="obj-ref-count">refs: ${obj.refCount || 1}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      this.canvas.innerHTML = html;

      // Redraw SVG arrows connecting variables to objects
      requestAnimationFrame(() => {
        this.drawPointers(variables);
      });
    }

    drawPointers(variables) {
      this.initSvgDefs();
      const stageRect = this.svg.getBoundingClientRect();

      variables.forEach(v => {
        if (!v.targetObjId) return;

        const varEl = document.getElementById(`var-${v.name}`);
        const objEl = document.getElementById(`obj-${v.targetObjId}`);

        if (!varEl || !objEl) return;

        const varRect = varEl.getBoundingClientRect();
        const objRect = objEl.getBoundingClientRect();

        // Coordinates relative to SVG overlay
        const startX = varRect.right - stageRect.left;
        const startY = varRect.top + (varRect.height / 2) - stageRect.top;
        const endX = objRect.left - stageRect.left;
        const endY = objRect.top + (objRect.height / 2) - stageRect.top;

        // Smooth horizontal cubic bezier curve
        const curvature = Math.max(30, (endX - startX) * 0.5);
        const cp1X = startX + curvature;
        const cp1Y = startY;
        const cp2X = endX - curvature;
        const cp2Y = endY;

        const d = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('class', 'pointer-line');
        path.setAttribute('marker-end', 'url(#arrowhead)');

        this.svg.appendChild(path);
      });
    }

    redrawPointers() {
      if (window._currentVisualState && window._currentVisualState.variables) {
        this.drawPointers(window._currentVisualState.variables);
      }
    }
  }

  global.MemoryVisualizer = MemoryVisualizer;
})(typeof window !== 'undefined' ? window : globalThis);

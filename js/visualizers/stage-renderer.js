/**
 * Stage Renderer - Pure Vanilla JS & SVG Visualizer Engine
 * Dispatches and renders specialized animated scenes for each Python concept:
 * - History Timeline & Constellation
 * - File Runner & Terminal Flow
 * - Why Learn Python Grid
 * - Main Features Matrix
 * - Version Comparison & CLI Check
 * - Python Code Execution Pipeline (Source -> Bytecode -> PVM -> Output)
 * - Compiler vs Interpreter Dual-Track Comparison
 * - Memory & References Model (Stack & Heap)
 */

(function (global) {
  'use strict';

  class StageRenderer {
    constructor(canvasEl, svgEl) {
      this.canvas = canvasEl;
      this.svg = svgEl;
      this.memoryVisualizer = new MemoryVisualizer(canvasEl, svgEl);
      this.currentMode = null;
    }

    clear() {
      this.canvas.innerHTML = '';
      this.svg.innerHTML = `
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" class="pointer-arrowhead" />
        </marker>
      </defs>
    `;
    }

    render(visualState) {
      if (!visualState) {
        this.clear();
        return;
      }

      const mode = visualState.mode || 'memory';
      this.currentMode = mode;

      switch (mode) {
        case 'history-timeline':
          this.renderHistoryTimeline(visualState);
          break;
        case 'file-runner':
          this.renderFileRunner(visualState);
          break;
        case 'why-python':
          this.renderWhyPython(visualState);
          break;
        case 'features-matrix':
          this.renderFeaturesMatrix(visualState);
          break;
        case 'version-comparison':
          this.renderVersionComparison(visualState);
          break;
        case 'pipeline-flow':
          this.renderPipelineFlow(visualState);
          break;
        case 'compiler-vs-interpreter':
          this.renderCompilerVsInterpreter(visualState);
          break;
        case 'memory':
        default:
          this.memoryVisualizer.renderState(visualState);
          break;
      }
    }

    // 1.1 History of Python Visualizer
    renderHistoryTimeline(state) {
      this.clear();
      const activeMilestone = state.activeMilestone || 0;

      const milestones = [
        {
          year: 'Late 1980s',
          title: 'The Origin at CWI',
          subtitle: 'Guido van Rossum starts Python project',
          icon: '👨‍💻',
          detail: 'Guido set out to build an intuitive, readable language where developers focus on problem solving rather than complex syntax.'
        },
        {
          year: '1991',
          title: 'Python 0.9.0 Released',
          subtitle: 'First public release',
          icon: '🚀',
          detail: 'Shipped with functions, exception handling, and core types: list, dict, and str.'
        },
        {
          year: 'The Name',
          title: "Monty Python's Circus",
          subtitle: 'Not named after a snake!',
          icon: '🎭',
          detail: 'Named in honor of the surreal British comedy show "Monty Python\'s Flying Circus".'
        },
        {
          year: 'Today',
          title: 'Global Phenomenon',
          subtitle: '#1 Language worldwide',
          icon: '🌐',
          detail: 'Powers AI, Data Science, Web, Automation, Testing, and Cloud Backend Infrastructure.'
        }
      ];

      const domains = [
        { name: 'AI & Machine Learning', icon: '🤖' },
        { name: 'Data Science', icon: '📊' },
        { name: 'Web Development', icon: '🌐' },
        { name: 'Automation & Scripting', icon: '⚡' },
        { name: 'Testing & QA', icon: '🧪' },
        { name: 'Backend Services', icon: '🖥️' }
      ];

      let html = `
      <div class="history-stage">
        <!-- Milestone Track -->
        <div class="timeline-track">
          <div class="timeline-line">
            <div class="timeline-progress-bar" style="width: ${((activeMilestone + 1) / milestones.length) * 100}%"></div>
          </div>
          <div class="timeline-nodes">
            ${milestones.map((m, idx) => `
              <div class="timeline-node ${idx <= activeMilestone ? 'active' : ''} ${idx === activeMilestone ? 'current-pulse' : ''}">
                <div class="node-marker">${m.icon}</div>
                <div class="node-year">${m.year}</div>
                <div class="node-title">${m.title}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Spotlight Card -->
        <div class="history-spotlight-card">
          <div class="spotlight-header">
            <span class="spotlight-icon">${milestones[activeMilestone].icon}</span>
            <div>
              <div class="spotlight-year">${milestones[activeMilestone].year}</div>
              <h3 class="spotlight-title">${milestones[activeMilestone].title} — <span style="font-weight: 400; font-size: 0.9em; color: var(--accent-cyan);">${milestones[activeMilestone].subtitle}</span></h3>
            </div>
          </div>
          <p class="spotlight-detail">${milestones[activeMilestone].detail}</p>
        </div>

        <!-- Ecosystem Domain Pills -->
        ${activeMilestone === 3 ? `
          <div class="ecosystem-domain-row">
            ${domains.map((d, i) => `
              <div class="domain-pill" style="animation-delay: ${i * 0.08}s">
                <span>${d.icon}</span>
                <span>${d.name}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;

      this.canvas.innerHTML = html;
    }

    // 1.2 What is Python File Runner
    renderFileRunner(state) {
      this.clear();
      const stage = state.stage || 0; // 0: file, 1: running, 2: output, 3: extensions

      let html = `
      <div class="file-runner-stage">
        <div class="runner-left-file ${stage >= 0 ? 'highlight-file' : ''}">
          <div class="file-header">
            <span class="file-badge">📄 Python Source</span>
            <span class="file-name">hello.py</span>
          </div>
          <div class="file-code-preview">
            <span class="code-comment"># Valid Python file (.py)</span>
            <span class="code-exec"><span class="func">print</span>(<span class="str">"Hello, World!"</span>)</span>
          </div>
          <div class="extension-tag">Extension: <strong>.py</strong></div>
        </div>

        <div class="runner-middle-channel">
          <div class="flow-arrow-container ${stage >= 1 ? 'flowing' : ''}">
            <span class="flow-label">Python Interpreter</span>
            <div class="flow-particle-stream">
              <span class="particle">⚡</span>
              <span class="particle">⚡</span>
              <span class="particle">⚡</span>
            </div>
            <div class="flow-line-bar"></div>
          </div>
        </div>

        <div class="runner-right-console ${stage >= 2 ? 'active-output' : ''}">
          <div class="console-header">
            <span class="console-dot red"></span>
            <span class="console-dot yellow"></span>
            <span class="console-dot green"></span>
            <span class="console-title">Standard Output (Screen)</span>
          </div>
          <div class="console-screen">
            <div class="screen-prompt">$ python hello.py</div>
            ${stage >= 2 ? `
              <div class="screen-result">Hello, World!</div>
            ` : `
              <div class="screen-idle">Waiting for execution...</div>
            `}
          </div>
        </div>
      </div>

      ${stage >= 3 ? `
        <div class="extension-examples-bar">
          <span class="ext-title">Common Python Filenames:</span>
          <span class="file-pill">📄 main.py</span>
          <span class="file-pill">📄 app.py</span>
          <span class="file-pill">📄 hello.py</span>
          <span class="file-pill">📄 script.py</span>
          <span class="file-pill">📄 utils.py</span>
        </div>
      ` : ''}
    `;

      this.canvas.innerHTML = html;
    }

    // 1.3 Why Learn Python Grid
    renderWhyPython(state) {
      this.clear();
      const activeIndex = state.activeIndex !== undefined ? state.activeIndex : -1;

      const cards = [
        {
          icon: '🌱',
          title: 'Beginner-Friendly',
          desc: 'Clean, readable syntax that mirrors plain English with minimal boilerplate.'
        },
        {
          icon: '💼',
          title: 'Used in Many Industries',
          desc: 'Adopted across top tech giants, startups, finance, science, and healthcare.'
        },
        {
          icon: '✍️',
          title: 'Simple & Clean Syntax',
          desc: 'Code looks clear and understandable so you focus on problem-solving.'
        },
        {
          icon: '📦',
          title: 'Many Libraries (500k+)',
          desc: 'Massive ecosystem on PyPI with pre-built packages for every domain.'
        },
        {
          icon: '⚡',
          title: 'Good for Automation',
          desc: 'Automate repetitive tasks, file processing, and scripts in just a few lines.'
        },
        {
          icon: '🤖',
          title: 'AI, Data Science & Backend',
          desc: 'Industry standard for Machine Learning, Data Analytics, and web backends.'
        }
      ];

      let html = `
      <div class="why-python-stage">
        <div class="why-grid">
          ${cards.map((c, idx) => {
        const isFocused = activeIndex === idx || activeIndex === 'all';
        const isDimmed = activeIndex >= 0 && activeIndex !== idx && activeIndex !== 'all';
        return `
              <div class="why-card ${isFocused ? 'focused' : ''} ${isDimmed ? 'dimmed' : ''}">
                <div class="why-card-icon">${c.icon}</div>
                <div class="why-card-title">${c.title}</div>
                <div class="why-card-desc">${c.desc}</div>
              </div>
            `;
      }).join('')}
        </div>
      </div>
    `;

      this.canvas.innerHTML = html;
    }

    // 1.4 Main Features of Python Matrix
    renderFeaturesMatrix(state) {
      this.clear();
      const activeFeatureIndex = state.activeFeatureIndex !== undefined ? state.activeFeatureIndex : -1;

      const features = [
        {
          name: 'Easy Syntax',
          meaning: 'Python code is clean, concise, and reads almost like English prose.',
          demo: 'if x > 5: print("Greater!")',
          icon: '✍️'
        },
        {
          name: 'High-Level',
          meaning: 'No direct hardware or manual memory management (free from pointers and malloc).',
          demo: 'Automatic Garbage Collection ♻️',
          icon: '🚀'
        },
        {
          name: 'Interpreted',
          meaning: 'Runs code directly via Python interpreter without a separate compilation build step.',
          demo: 'Instant feedback in REPL',
          icon: '⚡'
        },
        {
          name: 'Dynamically Typed',
          meaning: 'Variable types are determined automatically at runtime; no manual type declarations.',
          demo: 'x = 10 ➔ x = "Python" (Valid!)',
          icon: '🏷️'
        },
        {
          name: 'Object-Oriented',
          meaning: 'Everything in Python is an object! Full support for classes and encapsulation.',
          demo: 'class Car: ... my_car = Car()',
          icon: '🧱'
        },
        {
          name: 'Cross-Platform',
          meaning: 'Write once, run on Windows, macOS, Linux, Raspberry Pi, and Cloud containers.',
          demo: '🪟 Windows | 🍎 macOS | 🐧 Linux',
          icon: '🌍'
        },
        {
          name: 'Large Library Support',
          meaning: 'Huge ecosystem of built-in standard modules plus 500,000+ PyPI packages.',
          demo: 'import math, os, json, requests',
          icon: '📚'
        },
        {
          name: 'Open-Source',
          meaning: '100% free to use, modify, distribute, and contribute to via PSF.',
          demo: 'Open Source License (PSF)',
          icon: '🔓'
        }
      ];

      let html = `
      <div class="features-stage">
        <div class="features-grid">
          ${features.map((f, idx) => {
        const isSelected = idx === activeFeatureIndex;
        return `
              <div class="feature-card ${isSelected ? 'active-feature' : ''}">
                <div class="feature-top">
                  <span class="feature-icon">${f.icon}</span>
                  <span class="feature-title">${f.name}</span>
                </div>
                <div class="feature-meaning">${f.meaning}</div>
                <div class="feature-demo">${f.demo}</div>
              </div>
            `;
      }).join('')}
        </div>
      </div>
    `;

      this.canvas.innerHTML = html;
    }

    // 1.5 Python Version Comparison & CLI
    renderVersionComparison(state) {
      this.clear();
      const step = state.step || 0; // 0: comparison, 1: cli typing, 2: cli result

      let html = `
      <div class="version-stage">
        <div class="version-comparison-cards">
          <!-- Python 2 -->
          <div class="ver-card py2-card">
            <div class="ver-header">
              <span class="ver-badge legacy">OLD / DEPRECATED</span>
              <h3 class="ver-title">Python 2</h3>
            </div>
            <ul class="ver-list">
              <li>❌ End of Life: Jan 1, 2020</li>
              <li>❌ No security or performance updates</li>
              <li>❌ Should NOT be used for new projects</li>
              <li>❌ print was a statement: <code>print "hi"</code></li>
            </ul>
          </div>

          <!-- Python 3 -->
          <div class="ver-card py3-card active-ver">
            <div class="ver-header">
              <span class="ver-badge modern">MODERN STANDARD</span>
              <h3 class="ver-title">Python 3 (Use This!)</h3>
            </div>
            <ul class="ver-list">
              <li>✅ Actively developed & supported</li>
              <li>✅ Modern Unicode string handling</li>
              <li>✅ print is a function: <code>print("hi")</code></li>
              <li>✅ Faster, safer, more powerful</li>
            </ul>
          </div>
        </div>

        <!-- Terminal Command Runner -->
        <div class="cli-demo-box">
          <div class="cli-title-bar">
            <span>Terminal: Checking Your Installed Python Version</span>
          </div>
          <div class="cli-window">
            <div class="cli-command-line">
              <span class="cli-prompt">$</span>
              <span class="cli-cmd">${step >= 1 ? 'python --version' : ''}</span>
              <span class="cli-cursor"></span>
            </div>
            ${step >= 2 ? `
              <div class="cli-output">Python 3.12.5</div>
              <div class="cli-note">💡 On macOS/Linux, you might also use: <code>python3 --version</code></div>
            ` : ''}
          </div>
        </div>
      </div>
    `;

      this.canvas.innerHTML = html;
    }

    // 1.6 How Python Code Runs (Pipeline)
    renderPipelineFlow(state) {
      this.clear();
      const activeStage = state.activeStage !== undefined ? state.activeStage : -1; // 0 to 3

      const pipelineStages = [
        {
          num: '1',
          title: 'Source Code',
          sub: 'script.py',
          desc: 'Human-readable instructions written in plain text (.py file)',
          icon: '📄'
        },
        {
          num: '2',
          title: 'Bytecode Compiler',
          sub: '.pyc / Opcodes',
          desc: 'Python translates code into platform-independent intermediate bytecode',
          icon: '⚙️'
        },
        {
          num: '3',
          title: 'Python Virtual Machine',
          sub: 'PVM (Runtime Loop)',
          desc: 'The execution engine that reads bytecode line-by-line and executes it on the CPU',
          icon: '🖥️'
        },
        {
          num: '4',
          title: 'Program Output',
          sub: 'Screen / stdout',
          desc: 'Results, print statements, and mutations displayed to user',
          icon: '✨'
        }
      ];

      let html = `
      <div class="pipeline-stage-view">
        <div class="pipeline-track-container">
          ${pipelineStages.map((stage, idx) => {
        const isCompleted = idx < activeStage;
        const isCurrent = idx === activeStage;
        return `
              <div class="pipeline-step-node ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''}">
                <div class="node-circle">
                  <span class="node-icon">${stage.icon}</span>
                  <span class="node-index">${stage.num}</span>
                </div>
                <div class="node-content">
                  <div class="node-name">${stage.title}</div>
                  <div class="node-sub">${stage.sub}</div>
                </div>
                ${idx < pipelineStages.length - 1 ? `
                  <div class="pipeline-connector ${idx < activeStage ? 'filled' : ''}">
                    <span class="connector-arrow">➔</span>
                  </div>
                ` : ''}
              </div>
            `;
      }).join('')}
        </div>

        <div class="pipeline-detail-card">
          ${activeStage >= 0 && activeStage < pipelineStages.length ? `
            <div class="detail-badge">Stage ${activeStage + 1} of 4: ${pipelineStages[activeStage].title}</div>
            <p class="detail-text">${pipelineStages[activeStage].desc}</p>
          ` : `
            <div class="detail-badge">Python Execution Overview</div>
            <p class="detail-text">Press <strong>'▶ Play'</strong> or <strong>'Step ▶'</strong> to trace how Python takes source code from a .py file and executes it via the PVM.</p>
          `}
        </div>
      </div>
    `;

      this.canvas.innerHTML = html;
    }

    // 1.7 Compiler vs Interpreter Basics
    renderCompilerVsInterpreter(state) {
      this.clear();
      const phase = state.phase || 'overview'; // 'overview', 'compiler', 'interpreter', 'comparison'

      let html = `
      <div class="comp-vs-interp-stage">
        <!-- Dual Execution Tracks -->
        <div class="tracks-wrapper">
          <!-- Track A: Compiled (C, C++, Rust, Go) -->
          <div class="track-box compiled ${phase === 'compiler' || phase === 'overview' ? 'active-track' : 'dimmed-track'}">
            <div class="track-header">
              <span class="track-badge">Compiled Languages (C, C++, Go, Rust)</span>
            </div>
            <div class="track-flow">
              <span class="flow-pill">Source Code</span>
              <span class="flow-connector">➔</span>
              <span class="flow-pill action">Compiler</span>
              <span class="flow-connector">➔</span>
              <span class="flow-pill binary">Executable File (.exe)</span>
              <span class="flow-connector">➔</span>
              <span class="flow-pill output">Run Program</span>
            </div>
            <div class="track-note">⚡ Translates entire codebase ahead of time before running.</div>
          </div>

          <!-- Track B: Interpreted (Python, JavaScript, Ruby) -->
          <div class="track-box interpreted ${phase === 'interpreter' || phase === 'overview' ? 'active-track' : 'dimmed-track'}">
            <div class="track-header">
              <span class="track-badge">Interpreted Languages (Python, JS, Ruby)</span>
            </div>
            <div class="track-flow">
              <span class="flow-pill">Source Code</span>
              <span class="flow-connector">➔</span>
              <span class="flow-pill action-interp">Interpreter</span>
              <span class="flow-connector">➔</span>
              <span class="flow-pill output">Immediate Output</span>
            </div>
            <div class="track-note">🔄 Reads, translates, and runs instructions more directly.</div>
          </div>
        </div>

        <!-- Comparison Table Callout -->
        <div class="comparison-matrix-card">
          <table class="comp-table">
            <thead>
              <tr>
                <th>Feature Point</th>
                <th>Compiler (C / C++ / Go)</th>
                <th>Interpreter (Python / JS)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="${state.highlightRow === 'translation' ? 'highlight-row' : ''}">
                <td><strong>Translation</strong></td>
                <td>Translates entire program before running</td>
                <td>Translates and runs code more directly</td>
              </tr>
              <tr class="${state.highlightRow === 'speed' ? 'highlight-row' : ''}">
                <td><strong>Speed</strong></td>
                <td>Usually faster execution after compilation</td>
                <td>Usually slower raw execution</td>
              </tr>
              <tr class="${state.highlightRow === 'errors' ? 'highlight-row' : ''}">
                <td><strong>Error Checking</strong></td>
                <td>Syntax & type errors caught before running</td>
                <td>Errors appear while running line-by-line</td>
              </tr>
              <tr class="${state.highlightRow === 'examples' ? 'highlight-row' : ''}">
                <td><strong>Examples</strong></td>
                <td>C, C++, Go, Rust</td>
                <td>Python, JavaScript, Ruby</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;

      this.canvas.innerHTML = html;
    }
  }

  global.StageRenderer = StageRenderer;
})(typeof window !== 'undefined' ? window : globalThis);

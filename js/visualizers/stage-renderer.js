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
        case 'install-os':
          this.renderInstallOS(visualState);
          break;
        case 'vscode-workflow':
          this.renderVSCodeWorkflow(visualState);
          break;
        case 'terminal-cli':
          this.renderTerminalCLI(visualState);
          break;
        case 'interpreter-stream':
          this.renderInterpreterStream(visualState);
          break;
        case 'repl-interactive':
          this.renderREPLInteractive(visualState);
          break;
        case 'file-lifecycle':
          this.renderFileLifecycle(visualState);
          break;
        case 'venv-isolation':
          this.renderVenvIsolation(visualState);
          break;
        case 'pip-package-hub':
          this.renderPipPackageHub(visualState);
          break;
        case 'requirements-lifecycle':
          this.renderRequirementsLifecycle(visualState);
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

    // 2.1 OS Installer Visualizer
    renderInstallOS(state) {
      this.clear();
      const os = state.os || 'windows';

      let html = `
        <div class="installer-stage">
          <div class="os-tab-bar">
            <div class="os-tab ${os === 'windows' ? 'active' : ''}">🪟 Windows</div>
            <div class="os-tab ${os === 'macos' ? 'active' : ''}">🍎 macOS</div>
            <div class="os-tab ${os === 'linux' ? 'active' : ''}">🐧 Linux</div>
          </div>

          ${os === 'windows' ? `
            <div class="installer-window">
              <div class="installer-title-row">
                <span class="installer-icon">🐍</span>
                <div>
                  <div class="installer-header-text">Python 3.12.5 (64-bit) Setup</div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">Select Install Now to install with standard settings</div>
                </div>
              </div>
              <div class="installer-body">
                <div class="btn-install-now">
                  <span style="font-size: 1.3rem;">⚡</span>
                  <div>
                    <div style="font-weight: 700; font-size: 0.9rem;">Install Now</div>
                    <div style="font-size: 0.68rem; opacity: 0.85;">C:\\Users\\Student\\AppData\\Local\\Programs\\Python\\Python312</div>
                  </div>
                </div>

                <div class="path-checkbox-box">
                  <span class="path-alert-pill">CRITICAL STEP</span>
                  <input type="checkbox" id="path-check" checked disabled>
                  <label for="path-check" class="path-label">☑ Add python.exe to PATH</label>
                </div>
                <div style="font-size: 0.72rem; color: #fbbf24;">
                  ⚠️ <strong>Must be ticked:</strong> This registers Python globally so Command Prompt & PowerShell can run <code>python</code>!
                </div>
              </div>
            </div>
          ` : ''}

          ${os === 'macos' ? `
            <div class="installer-window">
              <div class="installer-title-row">
                <span class="installer-icon">🍎</span>
                <div>
                  <div class="installer-header-text">Install Python 3 on macOS</div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">Official .pkg Installer from python.org</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.8rem;">
                <div style="background: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: 4px; border-left: 3px solid var(--accent-cyan);">
                  <strong>1. Download:</strong> Get latest macOS 64-bit installer from <code>python.org/downloads</code>
                </div>
                <div style="background: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: 4px; border-left: 3px solid var(--accent-cyan);">
                  <strong>2. Run .pkg:</strong> Double-click installer and follow guided steps
                </div>
                <div style="background: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: 4px; border-left: 3px solid var(--accent-green);">
                  <strong>3. Verify in Terminal:</strong> Run <code>python3 --version</code>
                </div>
              </div>
            </div>
          ` : ''}

          ${os === 'linux' ? `
            <div class="installer-window">
              <div class="installer-title-row">
                <span class="installer-icon">🐧</span>
                <div>
                  <div class="installer-header-text">Install Python 3 on Ubuntu / Debian Linux</div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">Terminal Package Manager (APT)</div>
                </div>
              </div>
              <div class="cli-window" style="background: #090d16; border-radius: 6px; padding: 0.75rem;">
                <div style="color: var(--text-dim); margin-bottom: 0.25rem;"># Update repositories and install Python 3 stack:</div>
                <div style="color: var(--accent-green);"><span style="color: var(--text-muted);">$</span> sudo apt update</div>
                <div style="color: var(--accent-green); margin-top: 0.25rem;"><span style="color: var(--text-muted);">$</span> sudo apt install python3 python3-pip python3-venv</div>
                <div style="color: #38bdf8; margin-top: 0.5rem;"><span style="color: var(--text-muted);">$</span> python3 --version</div>
                <div style="color: #fbbf24; font-weight: 700;">Python 3.12.5</div>
              </div>
            </div>
          ` : ''}
        </div>
      `;

      this.canvas.innerHTML = html;
    }

    // 2.3 VS Code Workflow Visualizer
    renderVSCodeWorkflow(state) {
      this.clear();
      const phase = state.phase || 'editor';

      let html = `
        <div class="vscode-stage">
          <div class="vscode-mock-window">
            <div class="vscode-activity-bar">
              <span class="activity-icon">📄</span>
              <span class="activity-icon">🔍</span>
              <span class="activity-icon">🌿</span>
              <span class="activity-icon ${phase === 'extensions' ? 'active' : ''}">🧩</span>
              <span class="activity-icon">⚙️</span>
            </div>

            <div class="vscode-main-area">
              <div class="vscode-editor-tabs">
                <div class="editor-tab">
                  <span>🐍</span>
                  <span>hello.py</span>
                </div>
                <button class="run-code-btn" title="Run Python File in Terminal">
                  <span>▶</span>
                  <span>Run</span>
                </button>
              </div>

              <div class="vscode-code-canvas">
                <div style="color: var(--text-dim); font-size: 0.72rem;"># hello.py - Created in VS Code</div>
                <div style="color: #f8fafc; margin-top: 0.35rem;">
                  <span style="color: #ffd43b;">print</span>(<span style="color: #34d399;">"Hello, World!"</span>)
                </div>

                ${phase === 'run' ? `
                  <div style="margin-top: 0.85rem; background: #0b0f19; border: 1px solid var(--border-color); border-radius: 4px; padding: 0.5rem;">
                    <div style="font-size: 0.68rem; color: var(--text-dim); border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.2rem; margin-bottom: 0.3rem;">TERMINAL</div>
                    <div style="color: var(--text-muted); font-size: 0.75rem;">$ python hello.py</div>
                    <div style="color: #34d399; font-weight: 700; font-size: 0.8rem; margin-top: 0.2rem;">Hello, World!</div>
                  </div>
                ` : `
                  <div style="margin-top: 1rem; color: var(--text-dim); font-size: 0.72rem;">
                    💡 Run methods: 1) Click ▶ Run button  2) Right-click ➔ 'Run Python File in Terminal'  3) Terminal command
                  </div>
                `}
              </div>
            </div>
          </div>

          <div class="vscode-naming-rules-bar">
            <span class="name-rule-pill bad">❌ Bad: math.py, random.py, sys.py (conflicts with built-in modules!)</span>
            <span class="name-rule-pill good">✅ Good: number_game.py, student_report.py, calculator.py</span>
          </div>
        </div>
      `;

      this.canvas.innerHTML = html;
    }

    // 2.4 Terminal & Command Line Basics
    renderTerminalCLI(state) {
      this.clear();
      const currentCmd = state.currentCmd || 'pwd';
      const currentDir = state.currentDir || 'C:\\Users\\Student\\project';

      const commands = [
        { task: 'Check current folder', win: 'pwd', unix: 'pwd', desc: 'Shows current folder path' },
        { task: 'List files and folders', win: 'dir', unix: 'ls', desc: 'Lists all items inside folder' },
        { task: 'Create folder', win: 'mkdir python-notes', unix: 'mkdir python-notes', desc: 'Creates new folder' },
        { task: 'Change folder', win: 'cd python-notes', unix: 'cd python-notes', desc: 'Navigates into folder' },
        { task: 'Go back one level', win: 'cd ..', unix: 'cd ..', desc: 'Moves up to parent folder' },
        { task: 'Clear screen', win: 'cls', unix: 'clear', desc: 'Clears terminal screen' },
        { task: 'Run Python script', win: 'python app.py', unix: 'python3 app.py', desc: 'Executes Python program' }
      ];

      let html = `
        <div class="terminal-cli-stage">
          <div class="cli-breadcrumbs-bar">
            <span>📁 Location:</span>
            <strong>${currentDir}</strong>
          </div>

          <div class="comparison-matrix-card" style="max-height: 200px; overflow-y: auto;">
            <table class="cli-cheatsheet-table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Windows (CMD/PS)</th>
                  <th>macOS / Linux</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                ${commands.map(c => `
                  <tr class="${currentCmd === c.win || currentCmd === c.unix ? 'active-cli-row' : ''}">
                    <td>${c.task}</td>
                    <td><code>${c.win}</code></td>
                    <td><code>${c.unix}</code></td>
                    <td>${c.desc}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

      this.canvas.innerHTML = html;
    }

    // 2.5 Python Interpreter Stream
    renderInterpreterStream(state) {
      this.clear();
      const stage = state.stage || 0; // 0: code, 1: interpreter, 2: output

      let html = `
        <div class="file-runner-stage">
          <div class="runner-left-file ${stage >= 0 ? 'highlight-file' : ''}">
            <div class="file-header">
              <span class="file-badge">📄 Python Source</span>
              <span class="file-name">app.py</span>
            </div>
            <div class="file-code-preview">
              <span class="code-comment"># Code humans write</span>
              <span class="code-exec"><span class="func">print</span>(<span class="str">"Hello, Python"</span>)</span>
            </div>
          </div>

          <div class="runner-middle-channel">
            <div class="flow-arrow-container ${stage >= 1 ? 'flowing' : ''}">
              <span class="flow-label">Python Interpreter</span>
              <div class="flow-particle-stream">
                <span class="particle">⚙️</span>
                <span class="particle">⚡</span>
                <span class="particle">⚙️</span>
              </div>
              <div style="font-size: 0.65rem; color: var(--text-dim); text-align: center; margin-top: 0.2rem;">
                Reads line-by-line & executes on CPU
              </div>
            </div>
          </div>

          <div class="runner-right-console ${stage >= 2 ? 'active-output' : ''}">
            <div class="console-header">
              <span class="console-dot green"></span>
              <span class="console-title">Output</span>
            </div>
            <div class="console-screen">
              <div class="screen-prompt">$ python app.py</div>
              ${stage >= 2 ? `
                <div class="screen-result">Hello, Python</div>
              ` : `
                <div class="screen-idle">Interpreter evaluating...</div>
              `}
            </div>
          </div>
        </div>
      `;

      this.canvas.innerHTML = html;
    }

    // 2.6 REPL Visualizer
    renderREPLInteractive(state) {
      this.clear();
      const activePhase = state.activePhase || 'R'; // R, E, P, L

      let html = `
        <div class="repl-stage">
          <div class="repl-cycle-row">
            <div class="repl-cycle-badge ${activePhase === 'R' ? 'active' : ''}">
              <span class="letter">R</span>
              <span>Read</span>
            </div>
            <span style="color: var(--text-dim);">➔</span>
            <div class="repl-cycle-badge ${activePhase === 'E' ? 'active' : ''}">
              <span class="letter">E</span>
              <span>Evaluate</span>
            </div>
            <span style="color: var(--text-dim);">➔</span>
            <div class="repl-cycle-badge ${activePhase === 'P' ? 'active' : ''}">
              <span class="letter">P</span>
              <span>Print</span>
            </div>
            <span style="color: var(--text-dim);">➔</span>
            <div class="repl-cycle-badge ${activePhase === 'L' ? 'active' : ''}">
              <span class="letter">L</span>
              <span>Loop</span>
            </div>
          </div>

          <div class="repl-window">
            <div style="color: var(--text-dim); font-size: 0.72rem; margin-bottom: 0.4rem;">
              Python 3.12.5 interactive shell (Type "exit()" or Ctrl+Z Enter to exit)
            </div>
            ${(state.replLines || []).map(line => `
              <div class="repl-line"><span class="prompt">&gt;&gt;&gt;</span> ${line.cmd}</div>
              ${line.out ? `<div class="repl-output">${line.out}</div>` : ''}
            `).join('')}
            ${state.currentPrompt ? `
              <div class="repl-line"><span class="prompt">&gt;&gt;&gt;</span> ${state.currentPrompt}<span class="cli-cursor"></span></div>
            ` : `
              <div class="repl-line"><span class="prompt">&gt;&gt;&gt;</span> <span class="cli-cursor"></span></div>
            `}
          </div>

          <div style="display: flex; gap: 0.5rem; justify-content: space-around; font-size: 0.72rem; color: var(--text-muted);">
            <span>⚡ <strong>REPL:</strong> Fast experiments, line-by-line, not saved to disk</span>
            <span>💾 <strong>.py File:</strong> Permanent programs, reusable projects</span>
          </div>
        </div>
      `;

      this.canvas.innerHTML = html;
    }

    // 2.7 File Lifecycle & Top-to-Bottom Execution
    renderFileLifecycle(state) {
      this.clear();
      const currentLine = state.currentLine || 1;

      const lines = [
        { num: 1, text: 'print("Start")', output: 'Start' },
        { num: 2, text: 'name = "Nishchal"', output: null },
        { num: 3, text: 'print("Name:", name)', output: 'Name: Nishchal' },
        { num: 4, text: 'print("End")', output: 'End' }
      ];

      let html = `
        <div class="vscode-stage">
          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 1rem;">
            <!-- Code Scanner -->
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem;">
              <div style="color: var(--text-dim); font-size: 0.7rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.25rem; margin-bottom: 0.5rem;">
                📄 script.py — Top-to-Bottom Execution Flow
              </div>
              ${lines.map(l => `
                <div class="code-line ${currentLine === l.num ? 'active' : ''}" style="padding: 0.2rem 0.4rem;">
                  <span class="line-num">${l.num}</span>
                  <span class="line-content">${l.text}</span>
                </div>
              `).join('')}
            </div>

            <!-- Traps & Best Practices -->
            <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.72rem;">
              <div style="background: rgba(244, 63, 94, 0.1); border: 1px solid var(--accent-rose); padding: 0.4rem 0.6rem; border-radius: 4px; color: #fecdd3;">
                <strong>⚠️ Avoid Common Traps:</strong>
                <div>• Never save as <code>hello.py.txt</code></div>
                <div>• No spaces in names: <code>my file.py</code> ❌</div>
                <div>• Always save (Ctrl+S) before running</div>
              </div>

              <div style="background: rgba(34, 197, 94, 0.1); border: 1px solid var(--accent-green); padding: 0.4rem 0.6rem; border-radius: 4px; color: #bbf7d0;">
                <strong>✅ Best Practices:</strong>
                <div>• Use lowercase with underscores: <code>first_script.py</code></div>
                <div>• One project per folder</div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.canvas.innerHTML = html;
    }

    // 2.8 Virtual Environment (venv) Isolation
    renderVenvIsolation(state) {
      this.clear();
      const showIsolation = state.showIsolation !== undefined ? state.showIsolation : true;

      let html = `
        <div class="venv-stage">
          <div class="venv-global-bar">
            <span>💻 Global System Python (v3.12)</span>
            ${showIsolation ? `
              <span style="color: var(--accent-green); font-weight: 700;">✅ Protected: Projects Isolated in venvs</span>
            ` : `
              <span class="venv-conflict-warning">⚠️ Global Package Conflict Danger!</span>
            `}
          </div>

          <div class="venv-projects-grid">
            <!-- Project A Bubble -->
            <div class="venv-bubble-card">
              <div class="venv-bubble-header">
                <span>📁 Project A (venv)</span>
                <span class="badge py-version">Isolated</span>
              </div>
              <div class="venv-pkg-list">
                <div class="venv-pkg-item">
                  <span>requests</span>
                  <span style="color: var(--accent-cyan); font-weight: bold;">== 1.0.0</span>
                </div>
                <div class="venv-pkg-item">
                  <span>urllib3</span>
                  <span style="color: var(--accent-yellow);">== 1.26.0</span>
                </div>
              </div>
            </div>

            <!-- Project B Bubble -->
            <div class="venv-bubble-card" style="border-color: var(--accent-cyan);">
              <div class="venv-bubble-header" style="color: var(--accent-cyan);">
                <span>📁 Project B (venv)</span>
                <span class="badge py-version">Isolated</span>
              </div>
              <div class="venv-pkg-list">
                <div class="venv-pkg-item">
                  <span>requests</span>
                  <span style="color: var(--accent-cyan); font-weight: bold;">== 2.32.3</span>
                </div>
                <div class="venv-pkg-item">
                  <span>pandas</span>
                  <span style="color: var(--accent-yellow);">== 2.2.2</span>
                </div>
              </div>
            </div>
          </div>

          <div style="text-align: center; font-size: 0.72rem; color: var(--text-dim);">
            Command to create: <code>python -m venv myenv</code> | Keeps project dependencies independent without collisions!
          </div>
        </div>
      `;

      this.canvas.innerHTML = html;
    }

    // 2.9 pip Package Hub
    renderPipPackageHub(state) {
      this.clear();
      const activePkg = state.activePkg || null;

      const packages = [
        { name: 'requests', icon: '🌐', use: 'Working with web APIs & HTTP' },
        { name: 'pandas', icon: '📊', use: 'Data analysis & dataframes' },
        { name: 'numpy', icon: '🔢', use: 'Numerical arrays & scientific math' },
        { name: 'flask', icon: '🌶️', use: 'Lightweight web development' },
        { name: 'django', icon: '🦄', use: 'Full-featured web framework' },
        { name: 'pytest', icon: '🧪', use: 'Automated testing & test suites' }
      ];

      let html = `
        <div class="pip-stage">
          <div class="pypi-cloud-banner">
            <div>
              <strong>📦 PyPI (Python Package Index)</strong>
              <span style="color: var(--text-dim); margin-left: 0.5rem;">500,000+ open-source libraries</span>
            </div>
            <div style="font-family: var(--font-mono); color: var(--accent-yellow); font-size: 0.72rem;">
              python -m pip install &lt;package&gt;
            </div>
          </div>

          <div class="pip-packages-grid">
            ${packages.map(p => `
              <div class="pip-pkg-card ${activePkg === p.name ? 'active' : ''}">
                <div style="display: flex; align-items: center; gap: 0.4rem;">
                  <span>${p.icon}</span>
                  <span class="pip-pkg-name">${p.name}</span>
                </div>
                <div class="pip-pkg-use">${p.use}</div>
              </div>
            `).join('')}
          </div>

          <div style="font-size: 0.72rem; background: var(--bg-tertiary); border: 1px solid var(--border-color); padding: 0.35rem 0.65rem; border-radius: 4px; color: var(--text-muted); text-align: center;">
            💡 <strong>Why <code>python -m pip</code>?</strong> Guarantees packages install for the <em>exact</em> Python interpreter currently in use!
          </div>
        </div>
      `;

      this.canvas.innerHTML = html;
    }

    // 2.10 requirements.txt Lifecycle
    renderRequirementsLifecycle(state) {
      this.clear();
      const phase = state.phase || 'freeze'; // 'freeze', 'file', 'install', 'tree'

      let html = `
        <div class="requirements-stage">
          <div class="req-pipeline-flow">
            <div class="req-step-box">
              <span style="font-size: 1.1rem;">📤</span>
              <span style="font-weight: 700;">1. Export</span>
              <span class="cmd">pip freeze &gt; requirements.txt</span>
            </div>
            <span style="color: var(--text-dim); font-size: 1.1rem;">➔</span>
            <div class="req-step-box">
              <span style="font-size: 1.1rem;">📄</span>
              <span style="font-weight: 700;">2. Share File</span>
              <span style="font-size: 0.7rem; color: var(--accent-cyan);">Committed to Git repo</span>
            </div>
            <span style="color: var(--text-dim); font-size: 1.1rem;">➔</span>
            <div class="req-step-box">
              <span style="font-size: 1.1rem;">📥</span>
              <span style="font-weight: 700;">3. Replicate</span>
              <span class="cmd">pip install -r requirements.txt</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <!-- requirements.txt content -->
            <div class="req-file-preview">
              <div style="color: var(--text-dim); font-size: 0.68rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.2rem; margin-bottom: 0.4rem;">
                requirements.txt
              </div>
              <div>requests==2.32.3</div>
              <div>pandas==2.2.2</div>
              <div>numpy==2.0.1</div>
            </div>

            <!-- Project Structure Tree -->
            <div class="project-tree-pill">
              <div style="color: var(--text-dim); font-size: 0.68rem; margin-bottom: 0.2rem;">Typical Project Structure:</div>
weather_app/
├── app.py
├── requirements.txt
└── venv/
            </div>
          </div>
        </div>
      `;

      this.canvas.innerHTML = html;
    }
  }

  global.StageRenderer = StageRenderer;
})(typeof window !== 'undefined' ? window : globalThis);

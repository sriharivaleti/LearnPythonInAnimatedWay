/**
 * Learn Python in an Animated Way - Application Controller
 * Zero Frameworks, Pure Vanilla JavaScript
 */

(function () {
  'use strict';

  // DOM Elements
  const sidebarNav = document.getElementById('curriculum-list');
  const topicCountBadge = document.getElementById('topic-count-badge');
  const progressIndicator = document.getElementById('progress-indicator');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  const topicBreadcrumb = document.getElementById('topic-breadcrumb');
  const topicTitle = document.getElementById('topic-title');
  const topicTags = document.getElementById('topic-tags');
  const topicSummary = document.getElementById('topic-summary');

  const stageCanvas = document.getElementById('stage-canvas');
  const stageSvgOverlay = document.getElementById('stage-svg-overlay');

  const ctrlFirstBtn = document.getElementById('ctrl-first-btn');
  const ctrlPrevBtn = document.getElementById('ctrl-prev-btn');
  const ctrlPlayBtn = document.getElementById('ctrl-play-btn');
  const ctrlNextBtn = document.getElementById('ctrl-next-btn');
  const ctrlResetBtn = document.getElementById('ctrl-reset-btn');

  const currentStepNum = document.getElementById('current-step-num');
  const totalStepsNum = document.getElementById('total-steps-num');
  const stepDescText = document.getElementById('step-description-text');
  const timelineSlider = document.getElementById('timeline-slider');
  const speedSelect = document.getElementById('speed-select');

  const codeViewer = document.getElementById('code-viewer');
  const terminalOutput = document.getElementById('terminal-output');

  let currentTopic = null;
  let completedTopics = JSON.parse(localStorage.getItem('py_anim_completed') || '[]');
  let collapsedSessions = JSON.parse(localStorage.getItem('py_anim_collapsed_sessions') || '[]');

  // Visualizer & Animator Instances
  const stageRenderer = new StageRenderer(stageCanvas, stageSvgOverlay);
  const animator = new TimelineAnimator({
    onStepChange: handleStepChange,
    onPlayStateChange: handlePlayStateChange
  });

  // Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem('py_anim_theme') || 'theme-dark';
    document.body.className = savedTheme;
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('theme-dark');
      const nextTheme = isDark ? 'theme-light' : 'theme-dark';
      document.body.className = nextTheme;
      localStorage.setItem('py_anim_theme', nextTheme);
    });
  }

  // Render Sidebar
  function renderSidebar() {
    const sessions = CurriculumStore.getAllSessions();
    const allTopics = CurriculumStore.getAllTopics();

    topicCountBadge.textContent = `${allTopics.length} Topics`;
    updateProgressUI();

    if (sessions.length === 0) {
      sidebarNav.innerHTML = `
        <div style="padding: 1.5rem 1rem; color: var(--text-muted); font-size: 0.85rem; text-align: center;">
          <p>✨ Ready for topics!</p>
          <p style="margin-top: 0.5rem; font-size: 0.78rem;">Provide your first session and subtopics in chat to populate the course.</p>
        </div>
      `;
      return;
    }

    let html = '';
    sessions.forEach(session => {
      const isCollapsed = collapsedSessions.includes(session.id);
      html += `
        <div class="session-group ${isCollapsed ? 'collapsed' : ''}" data-session-group-id="${session.id}">
          <div class="session-title" data-session-id="${session.id}">
            <div class="session-title-left">
              <span class="session-folder-icon">${isCollapsed ? '📁' : '📂'}</span>
              <span>${session.title}</span>
            </div>
            <span class="session-chevron">${isCollapsed ? '▸' : '▾'}</span>
          </div>
          <ul class="topic-list">
            ${(session.topics || []).map(topic => {
              const isCompleted = completedTopics.includes(topic.id);
              const isActive = currentTopic && currentTopic.id === topic.id;
              return `
                <li class="topic-item ${isActive ? 'active' : ''}" data-topic-id="${topic.id}">
                  <span class="topic-status-icon">${isCompleted ? '✅' : '⚪'}</span>
                  <span>${topic.title}</span>
                </li>
              `;
            }).join('')}
          </ul>
        </div>
      `;
    });

    sidebarNav.innerHTML = html;

    // Attach click listeners to session titles (collapse / expand accordion)
    sidebarNav.querySelectorAll('.session-title').forEach(header => {
      header.addEventListener('click', () => {
        const sessionId = header.getAttribute('data-session-id');
        const group = header.closest('.session-group');
        const willCollapse = !group.classList.contains('collapsed');

        group.classList.toggle('collapsed', willCollapse);

        const chevron = header.querySelector('.session-chevron');
        const folder = header.querySelector('.session-folder-icon');
        if (chevron) chevron.textContent = willCollapse ? '▸' : '▾';
        if (folder) folder.textContent = willCollapse ? '📁' : '📂';

        if (willCollapse) {
          if (!collapsedSessions.includes(sessionId)) collapsedSessions.push(sessionId);
        } else {
          collapsedSessions = collapsedSessions.filter(id => id !== sessionId);
        }
        localStorage.setItem('py_anim_collapsed_sessions', JSON.stringify(collapsedSessions));
      });
    });

    // Attach click listeners to topic items
    sidebarNav.querySelectorAll('.topic-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const topicId = item.getAttribute('data-topic-id');
        loadTopic(topicId);
      });
    });
  }

  function updateProgressUI() {
    const allTopics = CurriculumStore.getAllTopics();
    const total = allTopics.length;
    const completed = completedTopics.filter(id => allTopics.some(t => t.id === id)).length;
    progressIndicator.textContent = `${completed} / ${total} Completed`;
  }

  // Load a Topic
  function loadTopic(topicId) {
    const topic = CurriculumStore.getTopicById(topicId);
    if (!topic) return;

    currentTopic = topic;
    window.location.hash = `#${topic.id}`;

    // Ensure parent session group is expanded so the active topic is visible
    const targetItem = sidebarNav.querySelector(`[data-topic-id="${topic.id}"]`);
    if (targetItem) {
      const parentGroup = targetItem.closest('.session-group');
      if (parentGroup && parentGroup.classList.contains('collapsed')) {
        parentGroup.classList.remove('collapsed');
        const header = parentGroup.querySelector('.session-title');
        if (header) {
          const chevron = header.querySelector('.session-chevron');
          const folder = header.querySelector('.session-folder-icon');
          if (chevron) chevron.textContent = '▾';
          if (folder) folder.textContent = '📂';
          const sessionId = header.getAttribute('data-session-id');
          collapsedSessions = collapsedSessions.filter(id => id !== sessionId);
          localStorage.setItem('py_anim_collapsed_sessions', JSON.stringify(collapsedSessions));
        }
      }
    }

    // Highlight active in sidebar
    sidebarNav.querySelectorAll('.topic-item').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-topic-id') === topic.id);
    });

    // Update Header
    topicBreadcrumb.textContent = `${topic.sessionTitle || 'Session'} / ${topic.title}`;
    topicTitle.textContent = topic.title;

    // Tags
    if (topic.tags && topic.tags.length > 0) {
      topicTags.innerHTML = topic.tags.map(t => `<span class="badge py-version">${t}</span>`).join('');
    } else {
      topicTags.innerHTML = '';
    }

    // Summary
    topicSummary.innerHTML = `<p>${topic.summary || ''}</p>`;

    // Render Code Lines
    renderCode(topic.code || '');

    // Reset Terminal
    resetTerminal();

    // Load Steps into Animator
    animator.loadSteps(topic.steps || []);
    timelineSlider.max = Math.max(0, (topic.steps || []).length - 1);
    timelineSlider.value = 0;
    totalStepsNum.textContent = (topic.steps || []).length;
  }

  // Render Formatted Code with Line Numbers
  function renderCode(codeText) {
    const lines = codeText.trim().split('\n');
    let html = '';
    lines.forEach((line, idx) => {
      const lineNum = idx + 1;
      html += `
        <div class="code-line" id="code-line-${lineNum}" data-line="${lineNum}">
          <span class="line-num">${lineNum}</span>
          <span class="line-content">${escapeHtml(line)}</span>
        </div>
      `;
    });
    codeViewer.innerHTML = html;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function highlightLine(lineNum) {
    codeViewer.querySelectorAll('.code-line').forEach(el => el.classList.remove('active'));
    if (lineNum !== null && lineNum !== undefined) {
      const target = document.getElementById(`code-line-${lineNum}`);
      if (target) {
        target.classList.add('active');
        target.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }

  // Step Change Handler
  function handleStepChange({ currentIndex, totalSteps, stepData }) {
    currentStepNum.textContent = totalSteps > 0 ? currentIndex + 1 : 0;
    timelineSlider.value = currentIndex;

    if (!stepData) {
      stepDescText.textContent = 'End of lesson';
      highlightLine(null);
      stageRenderer.clear();
      return;
    }

    stepDescText.textContent = stepData.description || `Step ${currentIndex + 1}`;
    highlightLine(stepData.activeLine);

    // Save state globally for resize event
    window._currentVisualState = stepData.visualState;

    // Render Stage Visuals
    stageRenderer.render(stepData.visualState);

    // Update Terminal synchronized with current step history
    renderTerminalState(currentIndex);

    // Auto mark as completed if final step reached
    if (currentIndex === totalSteps - 1 && currentTopic) {
      if (!completedTopics.includes(currentTopic.id)) {
        completedTopics.push(currentTopic.id);
        localStorage.setItem('py_anim_completed', JSON.stringify(completedTopics));
        renderSidebar();
      }
    }
  }

  function handlePlayStateChange(isPlaying) {
    ctrlPlayBtn.textContent = isPlaying ? '⏸ Pause' : '▶ Play';
  }

  function resetTerminal() {
    terminalOutput.innerHTML = '<div class="terminal-line placeholder">Visual evaluation output will appear here as steps execute...</div>';
  }

  function renderTerminalState(upToIndex) {
    if (!currentTopic || !currentTopic.steps) {
      resetTerminal();
      return;
    }

    const outputs = [];
    for (let i = 0; i <= upToIndex; i++) {
      const step = currentTopic.steps[i];
      if (step && step.terminalOutput) {
        outputs.push(step.terminalOutput);
      }
    }

    if (outputs.length === 0) {
      resetTerminal();
      return;
    }

    terminalOutput.innerHTML = '';
    outputs.forEach(text => {
      const lineEl = document.createElement('div');
      lineEl.className = 'terminal-line';
      const formatted = escapeHtml(text).replace(/\n/g, '<br><span class="terminal-prompt">&gt;&gt;&gt;</span> ');
      lineEl.innerHTML = `<span class="terminal-prompt">&gt;&gt;&gt;</span> ${formatted}`;
      terminalOutput.appendChild(lineEl);
    });
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  // Attach Controls Listeners
  function initControls() {
    ctrlPlayBtn.addEventListener('click', () => animator.togglePlay());
    ctrlNextBtn.addEventListener('click', () => animator.stepForward());
    ctrlPrevBtn.addEventListener('click', () => animator.stepBackward());
    ctrlFirstBtn.addEventListener('click', () => animator.goToStep(0));
    ctrlResetBtn.addEventListener('click', () => {
      resetTerminal();
      animator.reset();
    });

    timelineSlider.addEventListener('input', (e) => {
      const stepIndex = parseInt(e.target.value, 10);
      animator.goToStep(stepIndex);
    });

    speedSelect.addEventListener('change', (e) => {
      animator.setSpeed(e.target.value);
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Don't intercept if user is focused on an input/select
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        animator.togglePlay();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        animator.stepForward();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        animator.stepBackward();
      } else if (e.key === 'r' || e.key === 'R') {
        resetTerminal();
        animator.reset();
      }
    });
  }

  // Bootstrapping
  function init() {
    initTheme();
    initControls();
    renderSidebar();

    // Check hash for direct topic link
    const hash = window.location.hash.replace('#', '');
    const allTopics = CurriculumStore.getAllTopics();
    if (hash && allTopics.some(t => t.id === hash)) {
      loadTopic(hash);
    } else if (allTopics.length > 0) {
      loadTopic(allTopics[0].id);
    }
  }

  // Expose global methods for external topic registration
  window.App = {
    loadTopic,
    refreshCurriculum: () => {
      renderSidebar();
      const allTopics = CurriculumStore.getAllTopics();
      if (!currentTopic && allTopics.length > 0) {
        loadTopic(allTopics[0].id);
      }
    }
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


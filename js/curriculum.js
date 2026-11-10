/**
 * Curriculum Data Store
 * All sessions, subsections, animated states, and code walkthroughs are defined here.
 */

(function (global) {
  'use strict';

  const CURRICULUM = [
    {
      id: "session-1",
      title: "1. Python Overview",
      topics: [
        {
          id: "1-1-history-of-python",
          title: "1.1 History of Python",
          tags: ["History", "Guido van Rossum", "1991"],
          summary: "Python was created by <strong>Guido van Rossum</strong> in the late 1980s and first released in <strong>1991</strong>. Designed to be clean and readable, it lets programmers focus on solving problems rather than wrestling with complex syntax. The name comes from the British comedy show <em>“Monty Python's Flying Circus”</em>—not the snake!",
          code: `# Python's design philosophy: Clean, readable & human-friendly
# Created by Guido van Rossum in late 1980s, released in 1991
# Inspired by "Monty Python's Flying Circus" (not the snake!)

fields = [
    "Web Development",
    "Automation & Scripting",
    "Data Science & AI",
    "Backend & Testing"
]

for field in fields:
    print(f"Python powers: {field}")`,
          steps: [
            {
              activeLine: 2,
              description: "Late 1980s: Guido van Rossum starts Python at CWI in the Netherlands to build an accessible, readable language.",
              terminalOutput: "Guido van Rossum begins Python project (late 1980s)...",
              visualState: {
                mode: "history-timeline",
                activeMilestone: 0
              }
            },
            {
              activeLine: 3,
              description: "1991: Python 0.9.0 is publicly released with functions, exception handling, and core data types (list, dict, str).",
              terminalOutput: "1991: Python 0.9.0 released to the public",
              visualState: {
                mode: "history-timeline",
                activeMilestone: 1
              }
            },
            {
              activeLine: 4,
              description: "The Name: Guido named it after the BBC comedy series 'Monty Python's Flying Circus' to keep the language fun!",
              terminalOutput: "Origin: Named after Monty Python's Flying Circus (not the snake!)",
              visualState: {
                mode: "history-timeline",
                activeMilestone: 2
              }
            },
            {
              activeLine: 12,
              description: "Today: Python is the #1 language worldwide, powering Web, Automation, AI/ML, Data Science, Testing, and Backend.",
              terminalOutput: "Python powers: Web Development\nPython powers: Automation & Scripting\nPython powers: Data Science & AI\nPython powers: Backend & Testing",
              visualState: {
                mode: "history-timeline",
                activeMilestone: 3
              }
            }
          ]
        },
        {
          id: "1-2-what-is-python",
          title: "1.2 What is Python?",
          tags: ["High-Level", "General-Purpose", ".py files"],
          summary: "Python is a <strong>high-level, general-purpose</strong> programming language. It is used to write programs for automation, web development, data handling, AI, machine learning, scripting, testing, and backend development. Python files are saved with the <code>.py</code> extension (e.g., <code>main.py</code>, <code>app.py</code>, <code>hello.py</code>).",
          code: `# Example: Your first Python program!
# Saved in a file named: hello.py

print("Hello, World!")

# Python files use the .py extension:
# Examples: main.py, app.py, hello.py`,
          steps: [
            {
              activeLine: 2,
              description: "Python code is stored in plain text files with the .py extension (e.g. hello.py).",
              terminalOutput: null,
              visualState: {
                mode: "file-runner",
                stage: 0
              }
            },
            {
              activeLine: 4,
              description: "When executed, the Python interpreter reads the file instructions directly.",
              terminalOutput: "$ python hello.py",
              visualState: {
                mode: "file-runner",
                stage: 1
              }
            },
            {
              activeLine: 4,
              description: "The function print(\"Hello, World!\") evaluates and writes text to the standard output screen.",
              terminalOutput: "Hello, World!",
              visualState: {
                mode: "file-runner",
                stage: 2
              }
            },
            {
              activeLine: 7,
              description: "Standard naming conventions: Python scripts commonly use names like main.py, app.py, and script.py.",
              terminalOutput: "Python files: main.py, app.py, hello.py, script.py, utils.py",
              visualState: {
                mode: "file-runner",
                stage: 3
              }
            }
          ]
        },
        {
          id: "1-3-why-learn-python",
          title: "1.3 Why Learn Python?",
          tags: ["Benefits", "Beginner-Friendly", "Ecosystem"],
          summary: "Python is easy to start with and powerful enough for enterprise, real-world projects. It is beginner-friendly, has clean and intuitive syntax, is widely adopted across industries, and possesses the world's largest ecosystem for AI, data science, and automation.",
          code: `# Why Learn Python?
reasons = [
    "Beginner-friendly",
    "Used in many industries",
    "Simple & clean syntax",
    "Many libraries available",
    "Good for automation",
    "Widely used in AI, data science & backend"
]

for idx, reason in enumerate(reasons, 1):
    print(f"{idx}. {reason}")`,
          steps: [
            {
              activeLine: 1,
              description: "Explore the core reasons Python is the world's most recommended programming language.",
              terminalOutput: null,
              visualState: {
                mode: "why-python",
                activeIndex: -1
              }
            },
            {
              activeLine: 3,
              description: "1. Beginner-Friendly: Readable syntax that closely mirrors natural English with minimal punctuation.",
              terminalOutput: "1. Beginner-friendly",
              visualState: {
                mode: "why-python",
                activeIndex: 0
              }
            },
            {
              activeLine: 4,
              description: "2. Used in Many Industries: Adopted widely across tech giants, startups, finance, science, and healthcare.",
              terminalOutput: "2. Used in many industries",
              visualState: {
                mode: "why-python",
                activeIndex: 1
              }
            },
            {
              activeLine: 5,
              description: "3. Simple & Clean Syntax: Clear code structure lets programmers focus on solving problems rather than syntax.",
              terminalOutput: "3. Simple & clean syntax",
              visualState: {
                mode: "why-python",
                activeIndex: 2
              }
            },
            {
              activeLine: 6,
              description: "4. Many Libraries: Massive ecosystem on PyPI with over 500,000 community packages for every domain.",
              terminalOutput: "4. Many libraries available",
              visualState: {
                mode: "why-python",
                activeIndex: 3
              }
            },
            {
              activeLine: 7,
              description: "5. Good for Automation: Eliminate repetitive manual tasks and process data with concise scripts.",
              terminalOutput: "5. Good for automation",
              visualState: {
                mode: "why-python",
                activeIndex: 4
              }
            },
            {
              activeLine: 8,
              description: "6. AI, Data Science & Backend: The undisputed standard for Machine Learning, Pandas, and cloud backend APIs.",
              terminalOutput: "6. Widely used in AI, data science & backend",
              visualState: {
                mode: "why-python",
                activeIndex: 5
              }
            },
            {
              activeLine: 11,
              description: "All 6 Pillars Complete: Python is beginner-friendly to start with and powerful enough for enterprise projects.",
              terminalOutput: "Python: Beginner-friendly & Industry-proven!",
              visualState: {
                mode: "why-python",
                activeIndex: "all"
              }
            }
          ]
        },
        {
          id: "1-4-main-features-of-python",
          title: "1.4 Main Features of Python",
          tags: ["Features", "Dynamic Typing", "High-Level", "Cross-Platform"],
          summary: "Python combines readability with formidable power through 8 primary design features: Easy syntax, High-level abstraction, Interpreted execution, Dynamic typing, Object-oriented structure, Cross-platform portability, Huge library support, and Open-source accessibility.",
          code: `# Feature Demo: Dynamic Typing & High-Level Abstraction
# 1. Easy syntax & no type declarations needed:
x = 10              # x is dynamically an integer
print("x is:", x, type(x))

# 2. Dynamic typing: Reassigning to text works seamlessly:
x = "Hello Python"  # x dynamically becomes a string
print("x is now:", x, type(x))

# 3. High-level: Memory allocation & cleanup handled automatically!`,
          steps: [
            {
              activeLine: 1,
              description: "Python's 8 defining architectural features. Step forward to explore each feature in detail.",
              terminalOutput: null,
              visualState: {
                mode: "features-matrix",
                activeFeatureIndex: -1
              }
            },
            {
              activeLine: 2,
              description: "1. Easy Syntax: Code is simple, clean, and uncluttered by braces and semicolons.",
              terminalOutput: "Feature: Easy syntax -> Clean & human-readable",
              visualState: {
                mode: "features-matrix",
                activeFeatureIndex: 0
              }
            },
            {
              activeLine: 3,
              description: "2. High-Level: Developers don't manage pointers, memory allocation, or registers manually.",
              terminalOutput: "Feature: High-level -> Automatic memory & garbage collection",
              visualState: {
                mode: "features-matrix",
                activeFeatureIndex: 1
              }
            },
            {
              activeLine: 4,
              description: "3. Interpreted: Executes instructions directly through the Python interpreter with immediate feedback.",
              terminalOutput: "Feature: Interpreted -> Runs directly via interpreter",
              visualState: {
                mode: "features-matrix",
                activeFeatureIndex: 2
              }
            },
            {
              activeLine: 7,
              description: "4. Dynamically Typed: Variable types are inferred at runtime; no need for int, float, or String declarations.",
              terminalOutput: "x is: 10 <class 'int'>\nx is now: Hello Python <class 'str'>",
              visualState: {
                mode: "features-matrix",
                activeFeatureIndex: 3
              }
            },
            {
              activeLine: 9,
              description: "5. Object-Oriented: Everything in Python is an object! Full support for classes and encapsulation.",
              terminalOutput: "Feature: Object-oriented -> Everything is an object",
              visualState: {
                mode: "features-matrix",
                activeFeatureIndex: 4
              }
            },
            {
              activeLine: 10,
              description: "6. Cross-Platform: The exact same script runs seamlessly on Windows, macOS, and Linux without changes.",
              terminalOutput: "Feature: Cross-platform -> Windows, macOS, Linux support",
              visualState: {
                mode: "features-matrix",
                activeFeatureIndex: 5
              }
            },
            {
              activeLine: 11,
              description: "7. Large Library Support & 8. Open-Source: Huge built-in battery of tools, 100% free and open-source.",
              terminalOutput: "Feature: Large library support + 100% Open-Source",
              visualState: {
                mode: "features-matrix",
                activeFeatureIndex: 6
              }
            }
          ]
        },
        {
          id: "1-5-python-version",
          title: "1.5 Python Version",
          tags: ["Python 3", "Python 2 Legacy", "CLI Version"],
          summary: "For modern development, always use <strong>Python 3</strong>. Python 2 reached End of Life in 2020 and is obsolete. To check your installed version in the terminal, run <code>python --version</code> or <code>python3 --version</code>.",
          code: `# Checking your installed Python version in code:
import sys

print("Current Python Version:")
print(sys.version)

# Terminal check commands:
# $ python --version
# $ python3 --version`,
          steps: [
            {
              activeLine: 2,
              description: "Python 2 vs Python 3: Python 2 is legacy/deprecated. Modern learning strictly uses Python 3.",
              terminalOutput: null,
              visualState: {
                mode: "version-comparison",
                step: 0
              }
            },
            {
              activeLine: 7,
              description: "Run 'python --version' or 'python3 --version' in your command prompt / terminal.",
              terminalOutput: "$ python --version",
              visualState: {
                mode: "version-comparison",
                step: 1
              }
            },
            {
              activeLine: 8,
              description: "The system outputs the current installed version (e.g. Python 3.12.5).",
              terminalOutput: "Python 3.12.5",
              visualState: {
                mode: "version-comparison",
                step: 2
              }
            }
          ]
        },
        {
          id: "1-6-how-python-code-runs",
          title: "1.6 How Python Code Runs",
          tags: ["Source Code", "Bytecode", "PVM", "Execution Flow"],
          summary: "Basic flow: <strong>Python Code → Python Interpreter → Output</strong>.<br>More accurate internal flow: <strong>Source Code (.py) → Bytecode (.pyc / opcodes) → Python Virtual Machine (PVM) → Output</strong>. Python executes instructions top to bottom, one statement at a time.",
          code: `# How Python code executes from top to bottom:
# 1. Source code (.py) is compiled to bytecode (.pyc)
# 2. Python Virtual Machine (PVM) executes bytecode instructions

line1 = "Reading line 1: Setting up application"
line2 = "Reading line 2: Calculating result"

print(line1)
print(line2)
print("Execution complete!")`,
          steps: [
            {
              activeLine: 1,
              description: "Overview of Python execution: Source Code (.py) ➔ Bytecode (.pyc) ➔ PVM ➔ Output.",
              terminalOutput: null,
              visualState: {
                mode: "pipeline-flow",
                activeStage: -1
              }
            },
            {
              activeLine: 4,
              description: "Stage 1: Source Code (.py) - Plain text instructions written by the programmer.",
              terminalOutput: "Step 1: Reading script.py source code...",
              visualState: {
                mode: "pipeline-flow",
                activeStage: 0
              }
            },
            {
              activeLine: 5,
              description: "Stage 2: Bytecode (.pyc) - Python compiles source into compact, platform-independent opcodes.",
              terminalOutput: "Step 2: Compiled into intermediate bytecode (.pyc / opcodes)...",
              visualState: {
                mode: "pipeline-flow",
                activeStage: 1
              }
            },
            {
              activeLine: 7,
              description: "Stage 3: Python Virtual Machine (PVM) - The runtime loop that executes bytecode on the host computer.",
              terminalOutput: "Step 3: PVM evaluation loop executing instructions...",
              visualState: {
                mode: "pipeline-flow",
                activeStage: 2
              }
            },
            {
              activeLine: 9,
              description: "Stage 4: Program Output - Results are rendered to screen/stdout line by line from top to bottom.",
              terminalOutput: "Reading line 1: Setting up application\nReading line 2: Calculating result\nExecution complete!",
              visualState: {
                mode: "pipeline-flow",
                activeStage: 3
              }
            }
          ]
        },
        {
          id: "1-7-compiler-vs-interpreter-basics",
          title: "1.7 Compiler vs Interpreter Basics",
          tags: ["Compiler", "Interpreter", "Compiled vs Interpreted"],
          summary: "Before code runs, it must be translated into machine instructions. <strong>Compilers</strong> translate the entire program upfront into an executable binary file (.exe) before running. <strong>Interpreters</strong> translate and execute code more directly line-by-line. Python is commonly classified as an interpreted language.",
          code: `# Compiler vs Interpreter:
# Compiled: Source -> Compiler -> Binary Executable (.exe) -> Run
# Interpreted (Python): Source -> Interpreter -> Immediate Execution

language = "Python"
engine = "Interpreter"

print(f"{language} executes directly via an {engine}!")
# Errors are caught dynamically as lines are evaluated.`,
          steps: [
            {
              activeLine: 2,
              description: "Translators comparison: Compilers translate full code before execution; Interpreters translate and run directly.",
              terminalOutput: null,
              visualState: {
                mode: "compiler-vs-interpreter",
                phase: "overview"
              }
            },
            {
              activeLine: 2,
              description: "Compiler Flow (C, C++, Go, Rust): Source Code ➔ Compiler ➔ Executable File (.exe) ➔ Run Program.",
              terminalOutput: "Compiler: Generates standalone binary executable upfront",
              visualState: {
                mode: "compiler-vs-interpreter",
                phase: "compiler"
              }
            },
            {
              activeLine: 3,
              description: "Interpreter Flow (Python, JS, Ruby): Source Code ➔ Interpreter ➔ Immediate Output line-by-line.",
              terminalOutput: "Interpreter: Evaluates and runs source code statements directly",
              visualState: {
                mode: "compiler-vs-interpreter",
                phase: "interpreter"
              }
            },
            {
              activeLine: 7,
              description: "Translation: Compilers translate whole program upfront; Interpreters translate on the fly.",
              terminalOutput: "Comparison Point 1: Translation strategy",
              visualState: {
                mode: "compiler-vs-interpreter",
                phase: "overview",
                highlightRow: "translation"
              }
            },
            {
              activeLine: 7,
              description: "Execution Speed: Compiled code is typically faster after build; Interpreted code trades raw speed for dynamic flexibility.",
              terminalOutput: "Comparison Point 2: Execution speed & build overhead",
              visualState: {
                mode: "compiler-vs-interpreter",
                phase: "overview",
                highlightRow: "speed"
              }
            },
            {
              activeLine: 8,
              description: "Error Checking: Compilers catch syntax/type errors before running; Interpreters catch errors during execution.",
              terminalOutput: "Comparison Point 3: Error checking (Compile-time vs Runtime)",
              visualState: {
                mode: "compiler-vs-interpreter",
                phase: "overview",
                highlightRow: "errors"
              }
            },
            {
              activeLine: 7,
              description: "Examples: Compiled = C, C++, Go, Rust | Interpreted = Python, JavaScript, Ruby.",
              terminalOutput: "Python executes directly via an Interpreter!",
              visualState: {
                mode: "compiler-vs-interpreter",
                phase: "overview",
                highlightRow: "examples"
              }
            }
          ]
        }
      ]
    },
    {
      id: "session-2",
      number: 2,
      title: "2. Environment Setup",
      description: "Preparing your computer: Python installation, VS Code, Terminal essentials, REPL, script execution, virtual environments, and pip package management.",
      topics: [
        {
          id: "2-1-installing-python",
          title: "2.1 Installing Python",
          tags: ["Installation", "Windows", "macOS", "Linux", "PATH"],
          summary: "The safest way is to download Python from the official Python website (python.org). On Windows, <strong>always tick 'Add python.exe to PATH'</strong> before clicking Install Now. On macOS, run the .pkg installer. On Ubuntu/Debian Linux, install via apt.",
          code: `# Step 1: Download installer from official website: https://www.python.org/downloads
# Step 2: On Windows, make sure to check:
#   [X] Add python.exe to PATH  <-- CRITICAL STEP!
# Step 3: Click 'Install Now'
#
# Terminal check after installation:
# Windows:
python --version
# macOS / Linux:
python3 --version`,
          steps: [
            {
              activeLine: 1,
              description: "Windows Installation: Download official installer, check 'Add python.exe to PATH', click Install Now.",
              terminalOutput: "Downloading Python 3.12 installer for Windows...",
              visualState: {
                mode: "install-os",
                os: "windows"
              }
            },
            {
              activeLine: 3,
              description: "CRITICAL WINDOWS STEP: Always tick 'Add python.exe to PATH' so the terminal can find python globally.",
              terminalOutput: "Verifying PATH environment variable registration...",
              visualState: {
                mode: "install-os",
                os: "windows"
              }
            },
            {
              activeLine: 8,
              description: "macOS Installation: Download official .pkg installer from python.org, run package wizard, and verify in Terminal.",
              terminalOutput: "macOS: Checking /usr/local/bin/python3...",
              visualState: {
                mode: "install-os",
                os: "macos"
              }
            },
            {
              activeLine: 8,
              description: "Linux Installation: Run 'sudo apt update && sudo apt install python3 python3-pip python3-venv'.",
              terminalOutput: "$ sudo apt install python3 python3-pip python3-venv\\nPython 3.12.5 successfully installed!",
              visualState: {
                mode: "install-os",
                os: "linux"
              }
            }
          ]
        },
        {
          id: "2-2-checking-python-version",
          title: "2.2 Checking Python Version",
          tags: ["CLI", "Version Check", "Terminal"],
          summary: "Verify that Python is properly recognized by your terminal. On Windows use <code>python --version</code> or <code>py --version</code>. On macOS and Linux use <code>python3 --version</code>.",
          code: `# Terminal commands to verify Python version:
# Windows:
python --version
# or Windows Python launcher:
py --version

# macOS and Linux:
python3 --version

# Expected output:
# Python 3.12.5`,
          steps: [
            {
              activeLine: 3,
              description: "Windows: Run 'python --version' or 'py --version' in Command Prompt or PowerShell.",
              terminalOutput: "$ python --version\\nPython 3.12.5",
              visualState: {
                mode: "version-comparison",
                activeBranch: "python3",
                cliCommand: "python --version",
                cliOutput: "Python 3.12.5"
              }
            },
            {
              activeLine: 7,
              description: "macOS / Linux: Run 'python3 --version' in the terminal to invoke Python 3.",
              terminalOutput: "$ python3 --version\\nPython 3.12.5",
              visualState: {
                mode: "version-comparison",
                activeBranch: "python3",
                cliCommand: "python3 --version",
                cliOutput: "Python 3.12.5"
              }
            }
          ]
        },
        {
          id: "2-3-installing-vs-code",
          title: "2.3 Installing VS Code",
          tags: ["VS Code", "IDE", "Extensions", "File Naming"],
          summary: "VS Code is a lightweight, modern code editor. Python itself runs the code, but VS Code makes editing, syntax highlighting, and debugging effortless. Install the official <strong>Python extension by Microsoft</strong> and follow good file naming practices.",
          code: `# Creating your first Python file in VS Code: hello.py
print("Hello, World!")

# Ways to run in VS Code:
# 1. Click ▶ Play button (top right)
# 2. Right-click editor -> 'Run Python File in Terminal'
# 3. Open integrated terminal -> python hello.py

# File naming rule:
# Never name files after built-ins like math.py, random.py, sys.py!
# Use clean, descriptive names: number_game.py, calculator.py`,
          steps: [
            {
              activeLine: 1,
              description: "1. Install VS Code and install the official Microsoft Python extension from the Marketplace tab.",
              terminalOutput: "VS Code Extension: Python (ms-python.python) loaded",
              visualState: {
                mode: "vscode-workflow",
                phase: "extensions"
              }
            },
            {
              activeLine: 2,
              description: "2. Create a clean file named 'hello.py' and write print('Hello, World!').",
              terminalOutput: "hello.py active in VS Code editor buffer",
              visualState: {
                mode: "vscode-workflow",
                phase: "editor"
              }
            },
            {
              activeLine: 5,
              description: "3. Run the file using the ▶ Run button or Right-click ➔ 'Run Python File in Terminal'.",
              terminalOutput: "$ python hello.py\\nHello, World!",
              visualState: {
                mode: "vscode-workflow",
                phase: "run"
              }
            },
            {
              activeLine: 10,
              description: "4. File naming caution: Never name scripts math.py, random.py, or sys.py as they shadow Python standard libraries!",
              terminalOutput: "Rule verified: Avoid built-in name shadowing. Use student_report.py, calculator.py.",
              visualState: {
                mode: "vscode-workflow",
                phase: "editor"
              }
            }
          ]
        },
        {
          id: "2-4-terminal-and-command-line-basics",
          title: "2.4 Terminal & Command Line Basics",
          tags: ["Terminal", "CLI", "Navigation", "Commands"],
          summary: "The terminal or command prompt is where you interact directly with your operating system and run programs. Key commands include checking directory (<code>pwd</code>), listing files (<code>dir</code> / <code>ls</code>), navigating (<code>cd</code>), creating folders (<code>mkdir</code>), and running Python files.",
          code: `# Terminal Navigation & Execution Cheatsheet:
# 1. Check current directory: pwd
# 2. List files: dir (Windows) or ls (macOS/Linux)
# 3. Make project folder: mkdir python-notes
# 4. Enter folder: cd python-notes
# 5. Move back up: cd ..
# 6. Clear terminal: cls (Windows) or clear (macOS/Linux)
# 7. Run a script: python app.py (Windows) or python3 app.py (macOS/Linux)

print("Terminal is running Python")`,
          steps: [
            {
              activeLine: 2,
              description: "pwd (print working directory) shows the exact folder path your terminal is currently focused in.",
              terminalOutput: "$ pwd\\nC:\\\\Users\\\\Student\\\\project",
              visualState: {
                mode: "terminal-cli",
                currentCmd: "pwd",
                currentDir: "C:\\\\Users\\\\Student\\\\project"
              }
            },
            {
              activeLine: 3,
              description: "dir (Windows) / ls (macOS/Linux) lists all files and directories in the current folder.",
              terminalOutput: "$ dir\\napp.py   notes.txt   data/",
              visualState: {
                mode: "terminal-cli",
                currentCmd: "dir",
                currentDir: "C:\\\\Users\\\\Student\\\\project"
              }
            },
            {
              activeLine: 4,
              description: "mkdir creates a new directory (e.g. mkdir python-notes).",
              terminalOutput: "$ mkdir python-notes\\nFolder created: python-notes",
              visualState: {
                mode: "terminal-cli",
                currentCmd: "mkdir python-notes",
                currentDir: "C:\\\\Users\\\\Student\\\\project"
              }
            },
            {
              activeLine: 5,
              description: "cd changes into the target directory (e.g. cd python-notes).",
              terminalOutput: "$ cd python-notes\\nCurrent path updated to C:\\\\Users\\\\Student\\\\project\\\\python-notes",
              visualState: {
                mode: "terminal-cli",
                currentCmd: "cd python-notes",
                currentDir: "C:\\\\Users\\\\Student\\\\project\\\\python-notes"
              }
            },
            {
              activeLine: 6,
              description: "cd .. navigates one level backward to the parent directory.",
              terminalOutput: "$ cd ..\\nMoved back to C:\\\\Users\\\\Student\\\\project",
              visualState: {
                mode: "terminal-cli",
                currentCmd: "cd ..",
                currentDir: "C:\\\\Users\\\\Student\\\\project"
              }
            },
            {
              activeLine: 7,
              description: "cls (Windows) / clear (macOS/Linux) clears the terminal screen.",
              terminalOutput: "[Screen cleared]",
              visualState: {
                mode: "terminal-cli",
                currentCmd: "cls",
                currentDir: "C:\\\\Users\\\\Student\\\\project"
              }
            },
            {
              activeLine: 8,
              description: "Execute Python script from terminal: python app.py or python3 app.py.",
              terminalOutput: "$ python app.py\\nTerminal is running Python",
              visualState: {
                mode: "terminal-cli",
                currentCmd: "python app.py",
                currentDir: "C:\\\\Users\\\\Student\\\\project"
              }
            }
          ]
        },
        {
          id: "2-5-python-interpreter",
          title: "2.5 Python Interpreter",
          tags: ["Interpreter", "Execution Flow", "CPython"],
          summary: "The Python interpreter is the engine that reads and runs Python code. Computers only understand machine language (binary bits 0 & 1). When you write <code>print('Hello')</code>, the Python interpreter translates human code into bytecode and runs it on the CPU.",
          code: `# The Python Interpreter in Action
# Python Code -> Interpreter Translation -> CPU Output

message = "Hello, Python"
print(message)

# The interpreter reads line by line, compiles to bytecode,
# and executes instructions via the Python Virtual Machine (PVM).`,
          steps: [
            {
              activeLine: 4,
              description: "Step 1: Human-readable Python code is saved in app.py.",
              terminalOutput: "Source code ready: print('Hello, Python')",
              visualState: {
                mode: "interpreter-stream",
                stage: 0
              }
            },
            {
              activeLine: 5,
              description: "Step 2: Python interpreter reads source code, parses syntax, compiles to bytecode, and evaluates instructions.",
              terminalOutput: "Python interpreter parsing code into internal bytecode instructions...",
              visualState: {
                mode: "interpreter-stream",
                stage: 1
              }
            },
            {
              activeLine: 5,
              description: "Step 3: Program output is printed to the console: 'Hello, Python'.",
              terminalOutput: "$ python app.py\\nHello, Python",
              visualState: {
                mode: "interpreter-stream",
                stage: 2
              }
            }
          ]
        },
        {
          id: "2-6-python-repl",
          title: "2.6 Python REPL",
          tags: ["REPL", "Interactive Shell", "CLI"],
          summary: "REPL stands for <strong>Read - Evaluate - Print - Loop</strong>. It allows you to run Python statements interactively line by line without saving files. Ideal for testing short calculations, checking syntax, and rapid experimentation.",
          code: `# Opening REPL:
# Windows: python or py
# macOS/Linux: python3
# Prompt appears: >>>

# Example interactive session:
>>> 10 + 20
30
>>> print("Hello")
Hello
>>> name = "Aman"
>>> name
'Aman'
>>> exit()  # or Ctrl+Z Enter (Win) / Ctrl+D (Mac/Linux)`,
          steps: [
            {
              activeLine: 7,
              description: "1. Read: Interpreter reads expression '10 + 20' typed at the >>> prompt.",
              terminalOutput: ">>> 10 + 20",
              visualState: {
                mode: "repl-interactive",
                activePhase: "R",
                currentPrompt: "10 + 20",
                replLines: []
              }
            },
            {
              activeLine: 8,
              description: "2. Evaluate & Print: Evaluates math to 30, prints 30, and loops back for next command.",
              terminalOutput: ">>> 10 + 20\\n30",
              visualState: {
                mode: "repl-interactive",
                activePhase: "P",
                currentPrompt: "",
                replLines: [
                  { cmd: "10 + 20", out: "30" }
                ]
              }
            },
            {
              activeLine: 9,
              description: "3. Evaluate print function: Displays string message 'Hello'.",
              terminalOutput: ">>> print('Hello')\\nHello",
              visualState: {
                mode: "repl-interactive",
                activePhase: "E",
                currentPrompt: "",
                replLines: [
                  { cmd: "10 + 20", out: "30" },
                  { cmd: "print(\"Hello\")", out: "Hello" }
                ]
              }
            },
            {
              activeLine: 11,
              description: "4. Variable inspection: Assign name = 'Aman', then evaluate name to see 'Aman'.",
              terminalOutput: ">>> name = 'Aman'\\n>>> name\\n'Aman'",
              visualState: {
                mode: "repl-interactive",
                activePhase: "L",
                currentPrompt: "exit()",
                replLines: [
                  { cmd: "10 + 20", out: "30" },
                  { cmd: "print(\"Hello\")", out: "Hello" },
                  { cmd: "name = \"Aman\"", out: "" },
                  { cmd: "name", out: "'Aman'" }
                ]
              }
            },
            {
              activeLine: 14,
              description: "Exiting REPL: Call exit() or press Ctrl+Z + Enter (Windows) or Ctrl+D (macOS/Linux).",
              terminalOutput: "Exited Python REPL back to system shell.",
              visualState: {
                mode: "repl-interactive",
                activePhase: "L",
                currentPrompt: "",
                replLines: [
                  { cmd: "10 + 20", out: "30" },
                  { cmd: "print(\"Hello\")", out: "Hello" },
                  { cmd: "name = \"Aman\"", out: "" },
                  { cmd: "name", out: "'Aman'" },
                  { cmd: "exit()", out: "[Exited REPL]" }
                ]
              }
            }
          ]
        },
        {
          id: "2-7-creating-and-running-py-files",
          title: "2.7 Creating & Running .py Files",
          tags: ["Scripts", "Execution Order", "Best Practices"],
          summary: "Python files use the <code>.py</code> extension. Python executes statements sequentially from top to bottom. Remember best practices: always save before running, use lowercase underscores, avoid spaces in filenames, and avoid <code>hello.py.txt</code>.",
          code: `# Python executes from top to bottom sequentially:
print("Start")
name = "Nishchal"
print("Name:", name)
print("End")

# Output:
# Start
# Name: Nishchal
# End`,
          steps: [
            {
              activeLine: 2,
              description: "Line 1: Executes print('Start') -> outputs 'Start'.",
              terminalOutput: "Start",
              visualState: {
                mode: "file-lifecycle",
                currentLine: 1
              }
            },
            {
              activeLine: 3,
              description: "Line 2: Allocates variable 'name' with string value 'Nishchal' in memory.",
              terminalOutput: "Variable stored: name = 'Nishchal'",
              visualState: {
                mode: "file-lifecycle",
                currentLine: 2
              }
            },
            {
              activeLine: 4,
              description: "Line 3: Evaluates print('Name:', name) -> outputs 'Name: Nishchal'.",
              terminalOutput: "Start\\nName: Nishchal",
              visualState: {
                mode: "file-lifecycle",
                currentLine: 3
              }
            },
            {
              activeLine: 5,
              description: "Line 4: Executes print('End') -> outputs 'End'. Script execution finishes.",
              terminalOutput: "Start\\nName: Nishchal\\nEnd\\n[Process completed]",
              visualState: {
                mode: "file-lifecycle",
                currentLine: 4
              }
            }
          ]
        },
        {
          id: "2-8-virtual-environments-using-venv",
          title: "2.8 Virtual Environments (venv)",
          tags: ["venv", "Isolation", "Dependencies"],
          summary: "A virtual environment is an isolated directory tree that contains a specific Python installation plus independent third-party packages. It prevents dependency conflicts when Project A requires an older version of a package while Project B requires a newer version.",
          code: `# Creating a Virtual Environment:
python -m venv myenv

# Activating the Virtual Environment:
# Windows (Command Prompt):
myenv\\Scripts\\activate
# Windows (PowerShell):
myenv\\Scripts\\Activate.ps1
# macOS / Linux:
source myenv/bin/activate

# Prompt changes to: (myenv) C:\\project>

# Deactivating when finished:
deactivate`,
          steps: [
            {
              activeLine: 2,
              description: "The Conflict Problem: Without venv, installing package version for Project B overwrites Project A's requirements.",
              terminalOutput: "Global environment collision: requests 1.0.0 vs requests 2.32.3!",
              visualState: {
                mode: "venv-isolation",
                showIsolation: false
              }
            },
            {
              activeLine: 2,
              description: "Create venv: Run 'python -m venv myenv' to build isolated container.",
              terminalOutput: "$ python -m venv myenv\\nCreating isolated virtual environment folder 'myenv'...",
              visualState: {
                mode: "venv-isolation",
                showIsolation: true
              }
            },
            {
              activeLine: 6,
              description: "Activate venv: Run activation script for your OS. Terminal prompt prepends '(myenv)'.",
              terminalOutput: "$ myenv\\\\Scripts\\\\activate\\n(myenv) C:\\\\project>",
              visualState: {
                mode: "venv-isolation",
                showIsolation: true
              }
            },
            {
              activeLine: 15,
              description: "Deactivate: Type 'deactivate' to exit back to the global environment safely.",
              terminalOutput: "(myenv) C:\\\\project> deactivate\\nC:\\\\project>",
              visualState: {
                mode: "venv-isolation",
                showIsolation: true
              }
            }
          ]
        },
        {
          id: "2-9-installing-packages-using-pip",
          title: "2.9 Installing Packages Using pip",
          tags: ["pip", "PyPI", "Package Manager"],
          summary: "<code>pip</code> is the package installer for Python, downloading packages from PyPI (Python Package Index). Best practice is to run <code>python -m pip install &lt;package&gt;</code> to ensure packages are installed to the exact active interpreter.",
          code: `# Recommended Best Practice:
python -m pip install requests

# Checking installed packages:
pip list

# Inspecting package details:
pip show requests

# Uninstalling packages:
pip uninstall requests -y

# Popular packages: requests, pandas, numpy, flask, django, pytest`,
          steps: [
            {
              activeLine: 2,
              description: "PyPI Ecosystem: Access over 500,000+ open-source libraries published on pypi.org.",
              terminalOutput: "Browsing PyPI package index...",
              visualState: {
                mode: "pip-package-hub",
                activePkg: null
              }
            },
            {
              activeLine: 2,
              description: "Install requests: python -m pip install requests (for HTTP & REST API calls).",
              terminalOutput: "$ python -m pip install requests\\nCollecting requests\\nSuccessfully installed requests-2.32.3",
              visualState: {
                mode: "pip-package-hub",
                activePkg: "requests"
              }
            },
            {
              activeLine: 11,
              description: "Install pandas & numpy: Data analysis, tabular data manipulation, and scientific numerical computing.",
              terminalOutput: "$ python -m pip install pandas numpy\\nSuccessfully installed pandas-2.2.2 numpy-2.0.1",
              visualState: {
                mode: "pip-package-hub",
                activePkg: "pandas"
              }
            },
            {
              activeLine: 5,
              description: "Inspect with pip list & pip show: View installed packages and specific version metadata.",
              terminalOutput: "$ pip list\\nPackage    Version\\n---------- -------\\npandas     2.2.2\\nnumpy      2.0.1\\nrequests   2.32.3",
              visualState: {
                mode: "pip-package-hub",
                activePkg: "numpy"
              }
            }
          ]
        },
        {
          id: "2-10-requirements-txt",
          title: "2.10 requirements.txt",
          tags: ["requirements.txt", "pip freeze", "Deployment", "Reproducibility"],
          summary: "<code>requirements.txt</code> records your project's dependencies with pinned versions. This allows teammates or cloud production servers to duplicate the exact identical environment using <code>pip install -r requirements.txt</code>.",
          code: `# 1. Export all installed packages in current venv:
pip freeze > requirements.txt

# 2. Inside requirements.txt:
# requests==2.32.3
# pandas==2.2.2
# numpy==2.0.1

# 3. Teammate/Server installs all dependencies with one command:
pip install -r requirements.txt

# Clean Project Layout:
# my_project/
# ├── app.py
# ├── requirements.txt
# └── venv/`,
          steps: [
            {
              activeLine: 2,
              description: "1. Export dependencies: Run 'pip freeze > requirements.txt' to generate the pinned version list.",
              terminalOutput: "$ pip freeze > requirements.txt\\nExported 3 packages to requirements.txt",
              visualState: {
                mode: "requirements-lifecycle",
                phase: "freeze"
              }
            },
            {
              activeLine: 5,
              description: "2. Share with team: Commit requirements.txt to Git. (Never commit the venv folder itself!)",
              terminalOutput: "requirements.txt committed to Git repository",
              visualState: {
                mode: "requirements-lifecycle",
                phase: "file"
              }
            },
            {
              activeLine: 10,
              description: "3. Replicate environment: Run 'pip install -r requirements.txt' on any new machine.",
              terminalOutput: "$ pip install -r requirements.txt\\nInstalling requests, pandas, numpy...\\nEnvironment successfully replicated!",
              visualState: {
                mode: "requirements-lifecycle",
                phase: "install"
              }
            }
          ]
        }
      ]
    }
  ];

  // Helper methods to query curriculum
  const CurriculumStore = {
    getAllSessions() {
      return CURRICULUM;
    },

    getAllTopics() {
      const list = [];
      CURRICULUM.forEach(session => {
        if (session.topics && Array.isArray(session.topics)) {
          session.topics.forEach(topic => {
            list.push({ ...topic, sessionId: session.id, sessionTitle: session.title });
          });
        }
      });
      return list;
    },

    getTopicById(topicId) {
      const all = this.getAllTopics();
      return all.find(t => t.id === topicId) || (all.length > 0 ? all[0] : null);
    },

    registerSession(sessionData) {
      const existingIndex = CURRICULUM.findIndex(s => s.id === sessionData.id);
      if (existingIndex >= 0) {
        CURRICULUM[existingIndex] = sessionData;
      } else {
        CURRICULUM.push(sessionData);
      }
    }
  };

  global.CURRICULUM = CURRICULUM;
  global.CurriculumStore = CurriculumStore;
})(typeof window !== 'undefined' ? window : globalThis);

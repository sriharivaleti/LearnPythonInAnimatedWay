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
        code: `# Why Developers Love Python:
# Minimal boilerplate, rapid prototyping, massive ecosystem

reasons = [
    "Beginner-friendly & readable",
    "Used in every major industry",
    "Simple & expressive syntax",
    "500,000+ libraries on PyPI",
    "Automation & scripting power",
    "Industry leader in AI & Data Science"
]

for idx, reason in enumerate(reasons, 1):
    print(f"{idx}. {reason}")`,
        steps: [
          {
            activeLine: 4,
            description: "Explore the core reasons Python is the world's most recommended programming language.",
            terminalOutput: null,
            visualState: {
              mode: "why-python",
              activeIndex: -1
            }
          },
          {
            activeLine: 5,
            description: "1. Beginner-Friendly: Readable syntax that closely mirrors natural English with minimal punctuation.",
            terminalOutput: "1. Beginner-friendly & readable",
            visualState: {
              mode: "why-python",
              activeIndex: 0
            }
          },
          {
            activeLine: 6,
            description: "2. Industry Adoption: Used extensively at Google, Netflix, Spotify, NASA, and top tech companies.",
            terminalOutput: "2. Used in every major industry",
            visualState: {
              mode: "why-python",
              activeIndex: 1
            }
          },
          {
            activeLine: 8,
            description: "3. Massive Library Ecosystem: More than 500,000 community packages on PyPI for any task imaginable.",
            terminalOutput: "3. 500,000+ libraries on PyPI",
            visualState: {
              mode: "why-python",
              activeIndex: 2
            }
          },
          {
            activeLine: 10,
            description: "4. AI & Data Science: The undisputed #1 language for PyTorch, TensorFlow, Pandas, and OpenAI APIs.",
            terminalOutput: "4. Industry leader in AI & Data Science",
            visualState: {
              mode: "why-python",
              activeIndex: 3
            }
          },
          {
            activeLine: 9,
            description: "5. Automation Powerhouse: Write 10-line scripts to automate hours of tedious manual computer tasks.",
            terminalOutput: "5. Automation & scripting power",
            visualState: {
              mode: "why-python",
              activeIndex: 4
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

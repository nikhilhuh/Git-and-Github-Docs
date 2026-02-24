export interface CodeBlock {
  label: string;
  language: string;
  code: string;
  explanation?: string;
}

export interface ContentSection {
  id: string;
  category: string;
  title: string;
  description: string;

  // Comprehensive content
  overview: string;
  detailedExplanation: string[];

  // Code blocks - now optional and universal
  codeBlocks?: CodeBlock[];

  // Workflow and tutorial support
  workflowSteps?: string[];
  desktopSteps?: string[];

  // Learning and practice
  keyTakeaways?: string[];
  commonMistakes?: string[];
  tips?: string[];
  interviewQuestions?: string[];

  // Important notices
  warnings?: string[];

  lastUpdated?: string;
}

export const gitContent: ContentSection[] = [
  // ===== GIT FUNDAMENTALS =====
  {
    id: "introduction-to-version-control",
    category: "Git Fundamentals",
    title: "Introduction to Version Control",
    description:
      "Understand why version control systems exist and how they solve real-world collaboration and change-management problems.",

    overview:
      "Version control is a system that records changes to files over time, allowing you to track history, revert to previous states, and collaborate safely. It replaces manual file duplication with structured change tracking and enables teams to work on the same project without overwriting each other’s work.",

    detailedExplanation: [
      "Before version control systems, developers managed changes by manually copying files with names like project_v1, project_final, or project_final_revised. This approach quickly becomes confusing, error-prone, and impossible to scale in team environments.",

      "A Version Control System (VCS) tracks who changed what, when it was changed, and why it was changed. Every change is recorded in a structured history, making it possible to compare versions, restore older states, and investigate when bugs were introduced.",

      "There are two primary types of version control systems: Centralized Version Control Systems (CVCS) and Distributed Version Control Systems (DVCS). In CVCS, a central server stores the project history, and developers must connect to it to collaborate. If the server fails, access to history can be disrupted.",

      "In DVCS, every developer has a complete copy of the repository, including its entire history. This improves resilience, enables offline work, and removes dependence on a single central server for accessing project history.",

      "In practical terms, version control acts like a project time machine combined with a collaboration log. It allows teams to experiment safely, roll back mistakes, and maintain a clear record of how a project evolved over time.",

      "Modern development workflows rely heavily on distributed systems because they support branching strategies, parallel development, and automated deployment pipelines efficiently.",
    ],

    keyTakeaways: [
      "Version control replaces manual file versioning with structured change tracking.",
      "It enables safe collaboration across multiple contributors.",
      "It provides a complete and searchable history of all changes.",
      "Distributed systems offer resilience and flexibility.",
    ],

    commonMistakes: [
      "Managing versions manually using file name suffixes instead of a VCS.",
      "Believing version control is unnecessary for solo developers.",
      "Failing to write meaningful commit messages.",
    ],

    tips: [
      "Initialize version control at the start of every project.",
      "Commit small, logically grouped changes for better traceability.",
      "Use clear and descriptive commit messages to make history useful.",
    ],

    warnings: [
      "Not using version control in collaborative projects increases the risk of data loss and conflicts.",
      "Poor commit discipline reduces the long-term usefulness of project history.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "what-is-git",
    category: "Git Fundamentals",
    title: "What is Git",
    description:
      "Git is a distributed version control system designed for speed, reliability, and efficient collaboration across projects of any size.",

    overview:
      "Git is a free and open-source distributed version control system created by Linus Torvalds in 2005 to manage development of the Linux kernel. It is designed to handle everything from small personal projects to massive enterprise codebases with speed, integrity, and flexibility.",

    detailedExplanation: [
      "Git is distributed, meaning every developer has a complete copy of the repository, including its entire history, on their local machine. This allows most operations—such as commits, diffs, logs, and branch management—to be performed locally without requiring a network connection.",

      "Unlike older systems that store changes as file differences (deltas), Git stores data as snapshots. Each commit represents a snapshot of the entire project at a specific point in time. If a file has not changed, Git simply references the previous version instead of duplicating it, making storage efficient.",

      "Git is built around a content-addressable storage model. Each object (commit, tree, blob) is identified by a cryptographic hash. This ensures integrity—if any file content changes, its hash changes, making tampering detectable.",

      "Performance is a major strength of Git. Because operations are local and optimized, branching and merging are lightweight and fast. This encourages modern workflows like feature branching and parallel development.",

      "Git became the industry standard because it combines distributed architecture, strong data integrity, lightweight branching, and strong community adoption. It supports modern DevOps workflows and integrates seamlessly with hosting platforms and CI/CD systems.",
    ],

    codeBlocks: [
      {
        label: "Initialize a New Git Repository",
        language: "bash",
        code: "git init",
        explanation: "Creates a new Git repository in the current directory.",
      },
      {
        label: "Check Repository Status",
        language: "bash",
        code: "git status",
        explanation:
          "Shows the current state of the working directory and staging area.",
      },
    ],

    keyTakeaways: [
      "Git is a distributed version control system.",
      "Every user has a complete copy of the repository history.",
      "Git stores data as snapshots, not file differences.",
      "Git is the industry standard for modern software development.",
      "Git is not the same as hosting platforms like GitHub.",
    ],

    commonMistakes: [
      "Confusing Git (the tool) with GitHub or GitLab (hosting platforms).",
      "Believing Git requires an internet connection for basic operations.",
      "Avoiding branches due to fear of complexity (branching is lightweight in Git).",
    ],

    tips: [
      "Use branches frequently for new features or experiments.",
      "Commit small, meaningful changes instead of large grouped modifications.",
      "Learn core commands (status, add, commit, log) before advanced workflows.",
    ],

    warnings: [
      "Force pushing to shared branches can overwrite team members' work.",
      "Large binary files can significantly increase repository size if not managed properly.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "git-architecture",
    category: "Git Fundamentals",
    title: "Git Architecture",
    description:
      "Understand Git’s internal architecture through the Three Trees model: Working Directory, Staging Area, and Repository.",

    overview:
      "Git operates using a three-tree architecture: the Working Directory, the Staging Area (Index), and the Repository (HEAD). Understanding how changes move between these areas is essential for mastering commits, resets, checkouts, and debugging Git behavior.",

    detailedExplanation: [
      "Git manages your project using three primary areas often referred to as 'trees'. These are not physical trees but conceptual states representing where your data exists at a given moment.",

      "1. Working Directory: This is the actual folder on your machine containing project files. When you edit a file, you are modifying the Working Directory. At this stage, Git sees the changes but has not recorded them.",

      "2. Staging Area (Index): The staging area is an intermediate layer where you prepare changes before committing. Using 'git add', you explicitly choose which modifications will be included in the next commit. This allows for precise and meaningful commits instead of blindly committing everything.",

      "3. Repository (HEAD): The repository is stored inside the hidden .git directory. It contains the complete project history in the form of commits. HEAD is a pointer that references the latest commit in the current branch.",

      "When you run 'git add', changes move from the Working Directory to the Staging Area. When you run 'git commit', the staged changes are permanently recorded in the Repository as a new snapshot.",

      "Many Git commands operate by moving data between these three areas. For example, 'git reset' can move changes from the Staging Area back to the Working Directory, while 'git checkout' can replace Working Directory files with versions from the Repository.",

      "It is important to understand that the local repository is different from a remote repository. The three-tree model describes your local environment only.",
    ],

    codeBlocks: [
      {
        label: "Basic Data Flow",
        language: "bash",
        code: 'git add <file>\ngit commit -m "message"',
        explanation:
          "Moves changes from Working Directory to Staging Area, then records them in the Repository.",
      },
      {
        label: "Three Tree Visualization",
        language: "text",
        code: "Working Directory --(git add)--> Staging Area --(git commit)--> Repository (HEAD)",
        explanation: "Conceptual flow of changes through Git’s architecture.",
      },
    ],

    keyTakeaways: [
      "Git uses a three-tree architecture: Working Directory, Staging Area, and Repository.",
      "The staging area allows precise control over what goes into a commit.",
      "HEAD points to the latest commit in the current branch.",
      "Most Git commands manipulate one or more of these three areas.",
    ],

    commonMistakes: [
      "Confusing the local repository with a remote repository.",
      "Committing without reviewing what is staged.",
      "Not understanding why a file is staged but not committed.",
    ],

    tips: [
      "Use 'git status' frequently to understand which tree your changes are in.",
      "Stage related changes together to create clean commit history.",
      "Use 'git diff' and 'git diff --staged' to inspect changes before committing.",
    ],

    warnings: [
      "Using 'git reset --hard' can permanently discard uncommitted changes.",
      "Overwriting files with checkout commands may result in data loss if changes are not staged or committed.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "working-directory-staging-area",
    category: "Git Fundamentals",
    title: "Working Directory & Staging Area",
    description:
      "Understand how files move between Untracked, Modified, and Staged states inside Git’s working directory lifecycle.",

    overview:
      "In Git, files in your working directory exist in specific states that determine how Git treats them. A file can be Untracked or Tracked, and tracked files can further be Unmodified, Modified, or Staged. Understanding these states is essential for crafting precise commits and avoiding accidental changes.",

    detailedExplanation: [
      "When you create a new file in your project, Git initially considers it Untracked. This means Git sees the file but is not yet managing it. To begin tracking it, you must explicitly run 'git add'.",

      "Once a file is tracked, it enters the Unmodified state if no changes have been made since the last commit. This means the working directory version matches the latest snapshot stored in the repository.",

      "If you edit a tracked file, it becomes Modified. At this point, Git detects changes, but they are not yet staged for commit.",

      "When you run 'git add <file>', the file’s current changes move into the Staging Area. This marks the file as Staged, meaning it will be included in the next commit.",

      "A file can be staged and then modified again before committing. In that case, the staged version and the working directory version differ. The next commit will include only the staged changes unless you add the file again.",

      "This lifecycle—Untracked → Modified → Staged → Committed—forms the core workflow of Git’s local change management system.",
    ],

    codeBlocks: [
      {
        label: "Check File States",
        language: "bash",
        code: "git status",
        explanation: "Displays which files are untracked, modified, or staged.",
      },
      {
        label: "Stage a File",
        language: "bash",
        code: "git add <file>",
        explanation:
          "Moves file changes from the Working Directory to the Staging Area.",
      },
    ],

    keyTakeaways: [
      "New files start as Untracked until explicitly added.",
      "Modified files are not included in commits unless staged.",
      "The staging area allows selective control over what gets committed.",
      "A file can be staged and then modified again before committing.",
    ],

    commonMistakes: [
      "Assuming Git automatically stages modified files.",
      "Committing without checking what is staged.",
      "Forgetting to re-add a file after modifying it post-staging.",
    ],

    tips: [
      "Use 'git status' frequently to monitor file states.",
      "Use 'git diff' to inspect working directory changes.",
      "Use 'git diff --staged' to review what will be committed.",
    ],

    warnings: [
      "Failing to review staged changes may result in committing unintended modifications.",
      "Untracked files are not included in commits unless explicitly added.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "git-internals",
    category: "Git Fundamentals",
    title: "Git Internals",
    description:
      "Understand how Git stores data using blobs, trees, commits, and content-addressable hashing.",

    overview:
      "Git is fundamentally a content-addressable filesystem. Instead of tracking files by name, Git stores data as objects identified by cryptographic hashes. The core object types are Blobs (file contents), Trees (directory structures), and Commits (snapshots with metadata). This architecture ensures integrity, efficiency, and powerful history management.",

    detailedExplanation: [
      "Git stores everything inside the .git/objects directory as objects identified by a cryptographic hash (historically SHA-1). The hash is generated from the object's content, meaning if the content changes, the hash changes. This makes Git content-addressable and ensures data integrity.",

      "Blob objects store file content only. They do not store filenames or directory structure. If two files contain identical content, Git stores only one blob and references it multiple times. This reduces duplication and improves efficiency.",

      "Tree objects represent directories. A tree maps filenames to blobs (files) or other trees (subdirectories). Trees build the hierarchical structure of your project.",

      "Commit objects store metadata such as author, timestamp, commit message, and a pointer to a tree object representing the project state at that moment. A commit also references one or more parent commits, forming a Directed Acyclic Graph (DAG) that represents project history.",

      "HEAD is simply a pointer to the current commit. When you create a new commit, Git creates a new commit object that points to the previous commit as its parent, preserving history.",

      "When you run 'git add', Git creates blob objects for staged file content and updates the index. During 'git commit', Git builds a tree object from the index and creates a commit object pointing to that tree.",

      "This architecture makes Git extremely efficient. Since objects are immutable and content-addressed, Git can detect corruption, reuse identical data, and perform operations like branching and merging quickly.",
    ],

    codeBlocks: [
      {
        label: "Create a Blob Object Manually",
        language: "bash",
        code: 'echo "Hello Git" | git hash-object --stdin',
        explanation:
          "Generates a hash for content and stores it as a blob in the Git object database.",
      },
      {
        label: "Inspect a Git Object",
        language: "bash",
        code: "git cat-file -p <object-hash>",
        explanation:
          "Displays the contents of a Git object (blob, tree, or commit).",
      },
    ],

    keyTakeaways: [
      "Git stores data as content-addressable objects identified by cryptographic hashes.",
      "Blobs store file content only.",
      "Trees represent directory structure.",
      "Commits store metadata and point to trees and parent commits.",
      "Project history forms a Directed Acyclic Graph (DAG).",
    ],

    commonMistakes: [
      "Thinking Git tracks files by filename rather than content.",
      "Confusing commits with file snapshots instead of full project snapshots.",
      "Assuming Git history is linear instead of a graph.",
    ],

    tips: [
      "Use 'git cat-file -p' to explore Git objects and understand internals.",
      "Remember that commits are immutable—new commits are created instead of modifying old ones.",
      "Understanding internals makes advanced debugging much easier.",
    ],

    warnings: [
      "Manually modifying files inside the .git directory can corrupt the repository.",
      "Rewriting history changes commit hashes and can disrupt shared repositories.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "git-fundamentals-interview-questions",
    category: "Git Fundamentals",
    title: "Interview Questions",
    description:
      "Comprehensive interview questions covering Git fundamentals, architecture, and real-world usage scenarios.",

    overview:
      "This section consolidates commonly asked Git interview questions ranging from basic conceptual understanding to deeper architectural and workflow-based discussions. It is designed to test both theoretical knowledge and practical reasoning about Git.",

    detailedExplanation: [
      "Interview questions on Git fundamentals typically evaluate your understanding of version control concepts, Git’s distributed architecture, the three-tree model, and internal object storage.",

      "Basic questions focus on definitions and differences, such as Git vs GitHub or centralized vs distributed systems.",

      "Intermediate questions test understanding of file states, staging behavior, branching concepts, and common workflows.",

      "Advanced questions may explore Git internals, commit graphs, data integrity mechanisms, and real-world debugging scenarios.",

      "Strong candidates demonstrate not only command familiarity but also architectural understanding and the ability to reason about Git behavior in complex situations.",
    ],

    keyTakeaways: [
      "Interviewers assess both conceptual clarity and practical understanding.",
      "Understanding Git architecture gives you an advantage over command-only knowledge.",
      "Scenario-based reasoning is often more important than memorizing commands.",
      "Clarity about Git internals distinguishes senior-level candidates.",
    ],

    commonMistakes: [
      "Confusing Git (the tool) with GitHub or other hosting platforms.",
      "Explaining commands without understanding underlying concepts.",
      "Ignoring Git internals when answering advanced questions.",
      "Failing to explain why a workflow is used instead of just describing it.",
    ],

    interviewQuestions: [
      "What is the difference between Git and GitHub?",
      "Explain the difference between centralized and distributed version control systems.",
      "Describe the three trees in Git architecture.",
      "What are the states a file can be in within Git?",
      "How does Git ensure data integrity?",
      "What is the difference between a commit and a snapshot?",
      "Why is branching considered lightweight in Git?",
      "Explain what happens internally when you run 'git commit'.",
      "What is a Directed Acyclic Graph (DAG) in Git?",
      "What problems does the staging area solve?",
    ],

    tips: [
      "When answering interview questions, explain concepts before mentioning commands.",
      "Use small practical examples to demonstrate understanding.",
      "If discussing internals, mention blobs, trees, commits, and hashing.",
      "Clarify differences between local and remote repositories when relevant.",
    ],

    warnings: [
      "Overly memorized answers without conceptual clarity are easy for interviewers to detect.",
      "Giving tool-specific answers without explaining underlying principles may appear shallow.",
    ],

    lastUpdated: "2026-02-14",
  },

  // ===== INSTALLATION & CONFIGURATION =====
  {
    id: "install-git",
    category: "Installation & Configuration",
    title: "Install Git",
    description:
      "Step-by-step instructions to install and verify Git on Windows, macOS, and Linux systems.",

    overview:
      "Before using Git, you must install it on your system. Installation methods vary depending on your operating system. After installation, it is important to verify the version and ensure Git is correctly configured in your system PATH.",

    detailedExplanation: [
      "On Windows, Git can be installed using the official installer from git-scm.com or through package managers like Winget or Chocolatey. The official installer includes Git Bash, which provides a Unix-like terminal environment.",

      "On macOS, Git can be installed using Homebrew (recommended for developers) or by installing Xcode Command Line Tools. macOS may come with a preinstalled version of Git, but it is often outdated.",

      "On Linux distributions, Git is typically installed using the system package manager (apt, dnf, pacman, etc.). While convenient, repository versions may lag behind the latest official Git release.",

      "After installation, always verify the installation by checking the installed version. This ensures Git is properly configured and accessible via the command line.",

      "If Git commands are not recognized, the issue is often related to the system PATH environment variable. Reinstalling or manually updating PATH settings typically resolves this problem.",

      "Keeping Git updated is recommended, especially in professional environments where performance improvements and security patches matter.",
    ],

    codeBlocks: [
      {
        label: "Windows (Winget)",
        language: "bash",
        code: "winget install --id Git.Git -e --source winget",
        explanation: "Installs Git using Windows Package Manager.",
      },
      {
        label: "Windows (Chocolatey)",
        language: "bash",
        code: "choco install git",
        explanation: "Installs Git using Chocolatey package manager.",
      },
      {
        label: "Windows (Update Existing)",
        language: "bash",
        code: "git update-git-for-windows",
        explanation: "Updates Git to the latest version (Git Bash only).",
      },
      {
        label: "Linux (Debian/Ubuntu)",
        language: "bash",
        code: "sudo apt update\nsudo apt install git",
        explanation: "Installs Git using apt package manager.",
      },
      {
        label: "macOS (Homebrew)",
        language: "bash",
        code: "brew install git",
        explanation: "Installs Git using Homebrew.",
      },
      {
        label: "Verify Installation",
        language: "bash",
        code: "git --version",
        explanation:
          "Checks if Git is installed and displays the current version.",
      },
    ],

    keyTakeaways: [
      "Installation methods vary by operating system.",
      "Always verify installation using 'git --version'.",
      "System package managers may install older Git versions.",
      "Git must be accessible in your system PATH to work properly.",
    ],

    commonMistakes: [
      "Assuming Git is installed because the OS includes a default version.",
      "Ignoring PATH errors when the command is not recognized.",
      "Using outdated Git versions in production environments.",
    ],

    tips: [
      "Use package managers for easier updates.",
      "Prefer Homebrew on macOS for maintaining updated versions.",
      "Verify installation immediately after setup.",
    ],

    warnings: [
      "Outdated Git versions may lack important security and performance updates.",
      "Installing Git without ensuring PATH configuration can prevent command-line access.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "verify-installation",
    category: "Installation & Configuration",
    title: "Verify Installation",
    description:
      "Verify that Git is correctly installed, accessible in your system PATH, and properly configured.",

    overview:
      "After installing Git, it is important to confirm that the 'git' command is available in your terminal and that the installed version meets your requirements. Verification ensures Git is correctly configured and accessible from your command line environment.",

    detailedExplanation: [
      "To verify installation, open your terminal (Command Prompt, PowerShell, Git Bash, or macOS/Linux Terminal) and run 'git --version'. If Git is installed correctly, the command will display the installed version number.",

      "If you receive a 'command not found' or similar error, Git may not be added to your system PATH. On Windows, this often means reinstalling Git with the 'Add to PATH' option enabled. On macOS/Linux, it may indicate a missing or misconfigured installation.",

      "To confirm which Git binary is being used, you can run 'where git' on Windows or 'which git' on macOS/Linux. This shows the executable path and helps identify conflicts when multiple Git versions are installed.",

      "In professional environments, it is also important to verify that the installed version meets the minimum required version for your project or CI/CD pipeline.",

      "After confirming installation, you may also check your Git configuration using 'git config --list' to ensure your environment is ready for commits.",
    ],

    codeBlocks: [
      {
        label: "Check Git Version",
        language: "bash",
        code: "git --version",
        explanation: "Displays the installed Git version.",
      },
      {
        label: "Locate Git Executable (Windows)",
        language: "bash",
        code: "where git",
        explanation: "Shows the path of the Git executable on Windows.",
      },
      {
        label: "Locate Git Executable (macOS/Linux)",
        language: "bash",
        code: "which git",
        explanation:
          "Shows the path of the Git executable on Unix-based systems.",
      },
      {
        label: "Check Git Configuration",
        language: "bash",
        code: "git config --list",
        explanation: "Displays current Git configuration settings.",
      },
    ],

    keyTakeaways: [
      "Use 'git --version' to verify installation.",
      "If Git is not recognized, check system PATH configuration.",
      "Use 'where git' or 'which git' to detect multiple installations.",
      "Ensure your installed version meets project requirements.",
    ],

    commonMistakes: [
      "Assuming Git is installed because the installer completed successfully.",
      "Ignoring PATH errors when the command is not recognized.",
      "Having multiple Git installations causing version conflicts.",
    ],

    tips: [
      "Restart your terminal after installation to refresh environment variables.",
      "Use package managers for easier version updates.",
      "Verify Git configuration immediately after confirming installation.",
    ],

    warnings: [
      "Multiple Git installations can lead to inconsistent behavior across terminals.",
      "Using outdated Git versions may cause compatibility issues in modern workflows.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "git-config",
    category: "Installation & Configuration",
    title: "Git Config (System vs Global vs Local)",
    description:
      "Understand Git configuration levels and correctly configure identity, line endings, and defaults.",

    overview:
      "Git requires you to configure your identity before making commits. Configuration settings are stored at three levels: System (applies to all users), Global (current user), and Local (current repository). Each level overrides the previous one in order of precedence: system → global → local.",

    detailedExplanation: [
      "Git configuration exists at three levels. System-level configuration affects all users on a machine and is stored in /etc/gitconfig. Global-level configuration applies to the current user and is stored in ~/.gitconfig. Local-level configuration applies only to a specific repository and is stored in .git/config.",

      "Configuration precedence works from lowest to highest as follows: system → global → local. This means local configuration overrides global settings, and global overrides system settings.",

      "You must set 'user.name' and 'user.email' before creating commits. These values are permanently embedded into commit history and identify the author of changes.",

      "Windows users should configure 'core.autocrlf' to handle line ending conversions between CRLF and LF. macOS and Linux users typically use 'input' mode to prevent unwanted CRLF characters.",

      "You can inspect where a configuration value is defined using 'git config --show-origin <key>'. This helps debug conflicts when multiple configuration levels are involved.",

      "It is recommended to configure a default branch name and credential helper to align with modern Git workflows.",
    ],

    codeBlocks: [
      {
        label: "Set Identity (Global)",
        language: "bash",
        code: 'git config --global user.name "Your Name"\ngit config --global user.email "you@example.com"',
        explanation:
          "Sets default identity for all repositories on this machine.",
      },
      {
        label: "Set Identity (Local Repository)",
        language: "bash",
        code: 'git config --local user.name "Project Specific Name"',
        explanation:
          "Overrides global identity only for the current repository.",
      },
      {
        label: "Windows Credential Manager",
        language: "bash",
        code: "git config --global credential.helper manager",
        explanation:
          "Stores credentials securely in Windows Credential Manager.",
      },
      {
        label: "Windows Line Endings (CRLF)",
        language: "bash",
        code: "git config --global core.autocrlf true",
        explanation:
          "Converts LF to CRLF on checkout and CRLF to LF on commit.",
      },
      {
        label: "Mac/Linux Line Endings (LF)",
        language: "bash",
        code: "git config --global core.autocrlf input",
        explanation: "Prevents accidental CRLF introduction.",
      },
      {
        label: "Set Default Branch Name",
        language: "bash",
        code: "git config --global init.defaultBranch main",
        explanation:
          "Ensures new repositories use 'main' as the default branch.",
      },
      {
        label: "View All Configuration",
        language: "bash",
        code: "git config --list",
        explanation: "Displays all active configuration values.",
      },
      {
        label: "Show Config Source",
        language: "bash",
        code: "git config --show-origin user.name",
        explanation: "Displays where the configuration value is defined.",
      },
      {
        label: "Unset a Configuration Value",
        language: "bash",
        code: "git config --global --unset user.name",
        explanation: "Removes a configuration value from the specified level.",
      },
    ],

    keyTakeaways: [
      "Git configuration has three levels: system, global, and local.",
      "Local settings override global, and global overrides system.",
      "user.name and user.email are required before committing.",
      "Line ending configuration is critical for cross-platform teams.",
      "Use '--show-origin' to debug configuration conflicts.",
    ],

    commonMistakes: [
      "Forgetting to set user.name and user.email before committing.",
      "Using different emails across repositories unintentionally.",
      "Misconfiguring core.autocrlf and causing line-ending noise in commits.",
      "Not understanding configuration precedence.",
    ],

    tips: [
      "Use the same email as your GitHub account to link commits properly.",
      "Set init.defaultBranch to 'main' to follow modern standards.",
      "Check configuration source when debugging unexpected behavior.",
      "Configure a credential helper to avoid repeated authentication prompts.",
    ],

    warnings: [
      "Incorrect user.email settings can permanently attach the wrong identity to commits.",
      "Improper line-ending configuration can cause massive diff noise in collaborative projects.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "git-help",
    category: "Installation & Configuration",
    title: "Git Help & Documentation",
    description:
      "Access and navigate Git's built-in documentation and manual pages effectively.",

    overview:
      "Git provides extensive built-in documentation accessible directly from the command line. You can open full manual pages, view quick command summaries, list all available commands, and even search help topics. Mastering Git's help system is essential for self-sufficient development.",

    detailedExplanation: [
      "You can access full documentation for any command using 'git help <command>' or 'git <command> --help'. This opens a detailed manual page (manpage) explaining usage, options, configuration, and examples.",

      "For a quick overview of available flags and syntax, use 'git <command> -h'. This prints a concise summary directly in the terminal without opening the full manual.",

      "By default, Git displays help pages using a pager such as 'less'. You can scroll using arrow keys and exit by pressing 'q'. On Windows, help may open in a browser if a man viewer is not available.",

      "To see a list of all available Git commands, use 'git help -a'. This is useful when exploring Git’s full capabilities.",

      "You can search help topics using 'git help -g' to explore conceptual guides, such as workflows and tutorials.",

      "If help pages fail to open, it may be due to a missing man viewer or pager configuration. You can configure your preferred help format using Git configuration options.",
    ],

    codeBlocks: [
      {
        label: "Open Full Manual Page",
        language: "bash",
        code: "git help commit",
        explanation: "Opens the complete manual page for the 'commit' command.",
      },
      {
        label: "Alternative Full Manual Syntax",
        language: "bash",
        code: "git commit --help",
        explanation: "Alternative way to open the full documentation.",
      },
      {
        label: "Quick Usage Summary",
        language: "bash",
        code: "git commit -h",
        explanation: "Displays a short summary of available options.",
      },
      {
        label: "List All Git Commands",
        language: "bash",
        code: "git help -a",
        explanation: "Lists all available Git commands.",
      },
      {
        label: "View Conceptual Guides",
        language: "bash",
        code: "git help -g",
        explanation: "Lists available Git tutorial and workflow guides.",
      },
    ],

    keyTakeaways: [
      "Use 'git help <command>' for full documentation.",
      "Use '-h' for quick command summaries.",
      "Git help pages open in a pager like 'less'.",
      "Use 'git help -a' to explore all available commands.",
      "Git’s built-in documentation is extensive and professional-grade.",
    ],

    commonMistakes: [
      "Using '-h' when detailed documentation is required.",
      "Not knowing how to exit the pager (press 'q').",
      "Assuming Git has limited documentation without checking built-in help.",
    ],

    tips: [
      "Press '/' inside the pager to search within a help page.",
      "Use '--help' when you need detailed examples and explanations.",
      "Explore 'git help -a' periodically to discover lesser-known commands.",
    ],

    warnings: [
      "On some systems, missing man viewers may prevent help pages from opening correctly.",
      "Relying only on quick summaries can lead to incomplete understanding of advanced flags.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "installation-configuration-interview-questions",
    category: "Installation & Configuration",
    title: "Interview Questions",
    description:
      "Common beginner to advanced interview questions related to Git installation, configuration, and environment setup.",

    overview:
      "This section covers common interview questions related to Git installation, configuration levels, identity setup, environment troubleshooting, and cross-platform considerations. These questions are frequently asked in junior, mid-level, and DevOps interviews.",

    detailedExplanation: [
      "Interviewers often test whether candidates understand Git configuration levels (system, global, local) and how precedence works.",

      "You should clearly explain where configuration files are stored and how to inspect or override them.",

      "Be prepared to discuss why setting user.name and user.email is required and what happens if they are incorrect.",

      "Expect troubleshooting-based questions such as resolving 'git not recognized' errors or handling multiple Git installations.",

      "For mid-level roles, you may be asked about line ending management (core.autocrlf), credential helpers, and default branch configuration.",

      "Senior-level interviews may include environment standardization, CI/CD compatibility, and version management across teams.",
    ],

    keyTakeaways: [
      "Understand Git configuration hierarchy: system → global → local.",
      "Know where configuration files are stored.",
      "Be able to troubleshoot PATH and version issues.",
      "Understand cross-platform line ending behavior.",
      "Know how to inspect and debug configuration conflicts.",
    ],

    commonMistakes: [
      "Confusing global and local configuration scope.",
      "Not understanding configuration precedence.",
      "Forgetting that commits permanently store author identity.",
      "Ignoring line-ending configuration in cross-platform teams.",
    ],

    interviewQuestions: [
      "What is the difference between --system, --global, and --local configuration in Git?",
      "In what order does Git apply configuration precedence?",
      "Where are global Git configurations stored on Windows and macOS/Linux?",
      "Why is it important to set user.name and user.email before committing?",
      "How do you check your current Git configuration?",
      "How do you determine where a specific Git configuration value is coming from?",
      "How do you remove or unset a Git configuration value?",
      "What happens if you forget to configure your identity before committing?",
      "How would you fix the error 'git is not recognized as an internal or external command'?",
      "What is core.autocrlf and why is it important?",
      "Why might multiple Git installations cause problems?",
      "How do you set the default branch name for new repositories?",
      "How do you verify which Git version is currently being used?",
      "How would you standardize Git configuration across a development team?",
    ],

    lastUpdated: "2026-02-14",
  },

  // ===== REPOSITORY MANAGEMENT =====
  {
    id: "git-init",
    category: "Repository Management",
    title: "git init",
    description:
      "Initialize a new Git repository to begin tracking changes and managing version control.",

    overview:
      "The git init command creates a new Git repository in the current directory. It initializes version control by generating a hidden .git directory that contains all repository metadata, commit history, configuration, and internal database objects. This is the first step when starting a new project with Git.",

    detailedExplanation: [
      "When you run git init, Git creates a hidden .git directory inside the current folder. This directory contains all the internal data structures required for version control, including the objects database, references (branches and tags), hooks, HEAD pointer, and configuration files.",

      "The presence of the .git directory is what makes a folder a Git repository. Without it, Git commands cannot track or manage changes in that directory.",

      "Immediately after initialization, the repository contains no commits. You must stage files using git add and create the first commit using git commit before version tracking begins.",

      "By default, Git creates an initial branch (commonly named 'main' depending on configuration). You can override this using the -b or --initial-branch flag.",

      "Using git init <directory> creates a new folder and initializes it as a repository in a single command.",

      "The --bare option creates a bare repository. Bare repositories do not contain a working directory and are typically used as central remote repositories on servers.",

      "If git init is executed inside an already initialized repository, Git will reinitialize it without deleting history. However, repeatedly running it is unnecessary and may indicate workflow confusion.",
    ],

    codeBlocks: [
      {
        label: "Initialize Git in Current Directory",
        language: "bash",
        code: "git init",
        explanation:
          "Creates a .git directory in the current folder and initializes version control.",
      },
      {
        label: "Initialize with Specific Branch Name",
        language: "bash",
        code: "git init -b main",
        explanation: "Creates a repository with 'main' as the default branch.",
      },
      {
        label: "Create New Directory and Initialize",
        language: "bash",
        code: "git init my-project\ncd my-project",
        explanation: "Creates a new folder and initializes Git inside it.",
      },
      {
        label: "Initialize Bare Repository",
        language: "bash",
        code: "git init --bare my-repo.git",
        explanation:
          "Creates a bare repository (no working directory), typically used as a remote repository.",
      },
      {
        label: "Verify Initialization",
        language: "bash",
        code: "ls -la\n# Look for .git directory",
        explanation:
          "Lists files (including hidden ones) to confirm the .git directory exists.",
      },
      {
        label: "Check Repository Status",
        language: "bash",
        code: "git status",
        explanation:
          "Confirms the repository is initialized and shows current branch and file status.",
      },
    ],

    workflowSteps: [
      "Navigate to your project directory using the cd command.",
      "Run git init to initialize the repository.",
      "Verify that the .git directory was created.",
      "Create or add project files.",
      "Stage files using git add.",
      "Create the first commit using git commit.",
    ],

    keyTakeaways: [
      "git init must be run once per project to start version control.",
      "The .git directory stores the complete project history and metadata.",
      "No commits exist immediately after initialization.",
      "Bare repositories are used for remote or server-based repositories.",
      "Use the --initial-branch flag to control the default branch name.",
    ],

    commonMistakes: [
      "Initializing Git in the wrong directory (e.g., home folder).",
      "Deleting the .git directory and losing all version history.",
      "Creating nested Git repositories accidentally.",
      "Forgetting to make the first commit after initialization.",
      "Confusing bare repositories with standard repositories.",
    ],

    tips: [
      "Run pwd before git init to confirm your current directory.",
      "Use git status immediately after initialization to verify branch and repository state.",
      "Create a .gitignore file right after initializing.",
      "Use git init -b main to standardize branch naming.",
    ],

    warnings: [
      "Deleting the .git directory permanently removes all commit history.",
      "Initializing inside an existing repository can create nested repos and workflow confusion.",
      "Bare repositories should not be used for active development work.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "git-clone",
    category: "Repository Management",
    title: "git clone",
    description:
      "Clone an existing Git repository from a remote source to create a local copy with full version history.",

    overview:
      "The git clone command creates a complete local copy of a remote repository. Unlike downloading source code as a ZIP file, cloning includes the entire commit history, branches, tags, and metadata. It also automatically sets up a remote connection to the source repository, enabling seamless collaboration.",

    detailedExplanation: [
      "When you clone a repository, Git downloads the entire history of the project. This means you receive every commit, branch reference, and tag, allowing full version control functionality locally.",

      "The clone command automatically creates a remote connection named 'origin'. This remote points to the original repository URL and is used for pulling updates and pushing changes.",

      "By default, Git creates a new directory matching the repository name, initializes a .git directory inside it, checks out the default branch, and configures remote-tracking branches.",

      "All branches are downloaded during cloning, but only the default branch is checked out locally. Other branches remain available as remote-tracking branches.",

      "Repositories can be cloned using HTTPS or SSH. HTTPS is simpler for public repositories, while SSH is recommended for private repositories and long-term development workflows.",

      "Using --depth allows shallow cloning, which downloads limited history. This is useful for large repositories but restricts access to full commit history.",

      "The --bare option creates a repository without a working directory, typically used for server-side repositories. The --mirror option clones all refs including remote configuration, making it suitable for backups or repository mirroring.",

      "Cloning is different from downloading a ZIP file because ZIP downloads do not include commit history or version control metadata.",
    ],

    codeBlocks: [
      {
        label: "Clone Repository (HTTPS)",
        language: "bash",
        code: "git clone https://github.com/username/repository.git",
        explanation:
          "Clones the repository using HTTPS into a folder named after the repository.",
      },
      {
        label: "Clone with Custom Directory Name",
        language: "bash",
        code: "git clone https://github.com/username/repository.git my-project",
        explanation:
          "Clones into a folder named 'my-project' instead of the default repository name.",
      },
      {
        label: "Clone via SSH",
        language: "bash",
        code: "git clone git@github.com:username/repository.git",
        explanation:
          "Clones using SSH protocol (requires SSH key configuration).",
      },
      {
        label: "Clone Specific Branch Only",
        language: "bash",
        code: "git clone -b development --single-branch https://github.com/username/repository.git",
        explanation: "Clones and checks out only the specified branch.",
      },
      {
        label: "Shallow Clone (Limited History)",
        language: "bash",
        code: "git clone --depth 1 https://github.com/username/repository.git",
        explanation:
          "Clones only the most recent commit to reduce bandwidth and disk usage.",
      },
      {
        label: "Clone Bare Repository",
        language: "bash",
        code: "git clone --bare https://github.com/username/repository.git",
        explanation: "Creates a bare repository (no working directory).",
      },
      {
        label: "Verify Remote Configuration",
        language: "bash",
        code: "git remote -v",
        explanation:
          "Displays the configured remote repositories and their URLs.",
      },
    ],

    workflowSteps: [
      "Copy the repository URL from GitHub/GitLab/Bitbucket.",
      "Navigate to the directory where you want the project folder.",
      "Run git clone with the repository URL.",
      "Wait for Git to download the project history.",
      "Navigate into the cloned directory using cd.",
      "Verify remote setup using git remote -v.",
    ],

    keyTakeaways: [
      "Cloning creates a full repository with complete commit history.",
      "The default remote is automatically named 'origin'.",
      "All branches are downloaded, but only the default branch is checked out.",
      "Use SSH for private repositories and long-term development.",
      "Shallow clones are faster but limit historical access.",
    ],

    commonMistakes: [
      "Cloning into the wrong parent directory.",
      "Attempting to clone into a non-empty directory.",
      "Confusing ZIP download with actual cloning.",
      "Using shallow clone when full history is required.",
      "Trying to clone private repositories without proper authentication.",
    ],

    tips: [
      "Use --depth 1 for large repositories when full history is unnecessary.",
      "Set up SSH keys to avoid repeated password prompts.",
      "Run git remote -v after cloning to confirm remote URL.",
      "Use --single-branch to reduce unnecessary branch downloads.",
    ],

    warnings: [
      "Shallow clones may break workflows that require full history (e.g., rebasing or tagging older commits).",
      "Bare repositories are not meant for active development.",
      "Never share private repository URLs without proper access control.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "git-status",
    category: "Repository Management",
    title: "git status",
    description:
      "Inspect the current state of your repository, including staged, unstaged, untracked, and branch status information.",

    overview:
      "The git status command displays the state of the working directory and staging area. It shows which changes are staged for commit, which are modified but not staged, and which files are untracked. It also displays branch information and synchronization status with the remote repository.",

    detailedExplanation: [
      "Git operates across three main areas: the Working Directory (your files), the Staging Area (index), and the Repository (committed history). The git status command shows how files differ between these areas.",

      "Staged files are changes added using 'git add' and are ready to be committed. Modified files are tracked files that have changes but are not yet staged. Untracked files are new files that Git is not currently tracking.",

      "The command also shows your current branch and whether it is ahead, behind, or synchronized with its upstream remote branch. This helps determine whether you need to push or pull changes.",

      "In short format (-s), status displays two-letter codes. The first column represents the staging area, and the second column represents the working directory. For example: 'M ' means modified and staged, ' M' means modified but not staged, 'A ' means added, and '??' means untracked.",

      "You can use '--ignored' to display ignored files and '--untracked-files=no' to suppress untracked file display. This is useful in large repositories with many generated files.",

      "git status does not modify your repository. It is safe to run at any time and is considered one of the most important commands in daily Git workflows.",
    ],

    codeBlocks: [
      {
        label: "Check Repository Status",
        language: "bash",
        code: "git status",
        explanation:
          "Shows detailed repository state including branch info and file changes.",
      },
      {
        label: "Short Status Format",
        language: "bash",
        code: "git status -s\n# or\ngit status --short",
        explanation:
          "Compact format using status codes like M (modified), A (added), ?? (untracked).",
      },
      {
        label: "Short Format with Branch Info",
        language: "bash",
        code: "git status -sb",
        explanation:
          "Displays short format along with current branch information.",
      },
      {
        label: "Show Ignored Files",
        language: "bash",
        code: "git status --ignored",
        explanation: "Displays files ignored by .gitignore.",
      },
      {
        label: "Hide Untracked Files",
        language: "bash",
        code: "git status --untracked-files=no",
        explanation: "Suppresses display of untracked files.",
      },
      {
        label: "Example Output",
        language: "bash",
        code: "On branch main\nYour branch is up to date with 'origin/main'.\n\nChanges to be committed:\n  modified:   index.html\n\nChanges not staged for commit:\n  modified:   style.css\n\nUntracked files:\n  script.js",
        explanation:
          "Typical output showing staged, unstaged, and untracked files.",
      },
    ],

    keyTakeaways: [
      "git status is safe and does not modify the repository.",
      "Understand the difference between staged, modified, and untracked files.",
      "Use short format (-s) for quick checks.",
      "Branch synchronization status helps determine push/pull actions.",
      "Run git status frequently during development.",
    ],

    commonMistakes: [
      "Committing without checking status first.",
      "Confusing staged and unstaged changes.",
      "Ignoring branch information and committing to the wrong branch.",
      "Not understanding short-format status codes.",
      "Forgetting to check ignored files when debugging missing assets.",
    ],

    tips: [
      "Run git status before every commit.",
      "Use git status -sb for a compact but informative output.",
      "Create an alias like 'gs' for faster access.",
      "Use --ignored when debugging .gitignore issues.",
    ],

    warnings: [
      "Large repositories with many untracked files may slow down git status.",
      "Misunderstanding staged vs unstaged changes can lead to incomplete commits.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "repository-management-interview-questions",
    category: "Repository Management",
    title: "Interview Questions",
    description:
      "Beginner to advanced interview questions covering repository initialization, cloning, status inspection, and core repository workflows.",

    overview:
      "This section covers common interview questions related to Git repository management. Topics include repository initialization, cloning, staging, status inspection, and understanding Git’s internal areas such as the working directory and staging area. These questions frequently appear in developer and DevOps interviews.",

    detailedExplanation: [
      "Interviewers often test whether you understand how a repository is created using git init and how cloning differs from downloading source code.",

      "You should be able to clearly explain the difference between the working directory, staging area (index), and repository (HEAD/commits).",

      "Understanding how git clone sets up the 'origin' remote and remote-tracking branches is important for collaborative workflows.",

      "Expect scenario-based questions such as handling nested repositories, cloning private repositories, or troubleshooting missing .git directories.",

      "For mid-level roles, be prepared to explain shallow clones, bare repositories, and how Git tracks file changes internally.",
    ],

    keyTakeaways: [
      "Understand how git init creates the .git directory.",
      "Know the difference between cloning and downloading a ZIP file.",
      "Be able to explain staged vs unstaged vs untracked files.",
      "Understand how 'origin' is configured automatically during cloning.",
      "Know when to use shallow or bare repositories.",
    ],

    commonMistakes: [
      "Confusing working directory and staging area.",
      "Not understanding what the .git directory contains.",
      "Believing clone only downloads the latest snapshot.",
      "Ignoring remote tracking setup after cloning.",
      "Accidentally creating nested repositories.",
    ],

    interviewQuestions: [
      "What does git init actually create inside a project directory?",
      "What is stored inside the .git folder?",
      "What is the difference between git init and git clone?",
      "How is cloning different from downloading a ZIP file?",
      "What is the default remote name created by git clone?",
      "What are remote-tracking branches?",
      "Explain the difference between working directory, staging area, and repository.",
      "What does git status show?",
      "What do the two columns represent in git status -s?",
      "What is a bare repository and when would you use it?",
      "What is a shallow clone and when is it useful?",
      "How would you verify that a repository was initialized correctly?",
      "How do you check which remote repository is connected?",
      "What happens if you delete the .git directory?",
      "What problems can nested Git repositories cause?",
    ],

    lastUpdated: "2026-02-14",
  },

  // ===== STAGING & COMMIT =====
  {
    id: "git-add",
    category: "Staging & Commit",
    title: "git add",
    description:
      "Stage file changes by adding them to the staging area (index) before committing.",

    overview:
      "The git add command moves changes from the working directory to the staging area (also called the index). Only staged changes are included in the next commit. This command allows you to precisely control what content becomes part of your repository history.",

    detailedExplanation: [
      "Git operates using three areas: Working Directory (your files), Staging Area (index), and Repository (commits). The git add command copies the current state of selected files into the staging area.",

      "When you stage a file, Git stores a snapshot of its current contents in the index. If you modify the file again after staging it, those new changes are not included in the next commit unless you run git add again.",

      "You can stage specific files, entire directories, file patterns, or even selected portions of files. This allows you to create clean, logical commits instead of committing unrelated changes together.",

      "The staging area enables atomic commits — grouping related changes into a single meaningful snapshot.",

      "git add . stages changes in the current directory only. git add -A stages all changes in the entire repository (including deletions). git add -u stages modifications and deletions but not new untracked files.",

      "You can force-add files ignored by .gitignore using the -f flag, though this should be used cautiously.",

      "Interactive patch mode (git add -p) allows staging specific chunks (hunks) of changes within files, providing fine-grained control over commit content.",
    ],

    codeBlocks: [
      {
        label: "Add Specific File",
        language: "bash",
        code: "git add index.html",
        explanation: "Stages only the specified file.",
      },
      {
        label: "Add Current Directory",
        language: "bash",
        code: "git add .",
        explanation: "Stages new and modified files in the current directory.",
      },
      {
        label: "Add All Changes (Entire Repo)",
        language: "bash",
        code: "git add -A\n# or\ngit add --all",
        explanation:
          "Stages all changes including new, modified, and deleted files.",
      },
      {
        label: "Add Modified & Deleted Only",
        language: "bash",
        code: "git add -u",
        explanation:
          "Stages modified and deleted files, but not new untracked files.",
      },
      {
        label: "Add Multiple Files",
        language: "bash",
        code: "git add index.html style.css script.js",
        explanation: "Stages multiple specified files.",
      },
      {
        label: "Add by Pattern",
        language: "bash",
        code: "git add *.js",
        explanation: "Stages all JavaScript files in the current directory.",
      },
      {
        label: "Interactive Patch Mode",
        language: "bash",
        code: "git add -p",
        explanation: "Stages specific chunks of changes interactively.",
      },
      {
        label: "Force Add Ignored File",
        language: "bash",
        code: "git add -f secret.env",
        explanation: "Forces adding a file that is ignored by .gitignore.",
      },
    ],

    workflowSteps: [
      "Modify one or more files in the working directory.",
      "Run git status to inspect changes.",
      "Stage selected files using git add.",
      "Run git status again to verify staged changes.",
      "Commit staged changes using git commit.",
    ],

    keyTakeaways: [
      "git add moves changes from working directory to staging area.",
      "Only staged changes are included in the next commit.",
      "Modifying a file after staging requires re-staging it.",
      "Use -p for granular, clean commits.",
      "Understand the difference between '.', '-A', and '-u'.",
    ],

    commonMistakes: [
      "Using git add . without reviewing changes first.",
      "Forgetting to re-add files after modifying them again.",
      "Accidentally staging sensitive files.",
      "Not understanding the difference between -A and -u.",
      "Force-adding files that should remain ignored.",
    ],

    tips: [
      "Run git status before and after staging.",
      "Use git diff to review changes before staging.",
      "Use git add -p to create professional, focused commits.",
      "Maintain a proper .gitignore file.",
    ],

    warnings: [
      "Once committed, sensitive information can be difficult to remove from history.",
      "Blindly using git add . may stage unintended files.",
      "Force-adding ignored files can expose credentials or secrets.",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "git-commit",
    category: "Staging & Commit",
    title: "git commit",
    description:
      "Record staged changes as a new commit in the repository with a meaningful message that explains what changed and why.",

    overview:
      "The git commit command saves a snapshot of the staging area into the repository history. Each commit represents a logical unit of work and forms part of a chronological chain that tracks your project's evolution. Writing clear and structured commit messages is essential for maintainable and collaborative development.",

    detailedExplanation: [
      "A commit captures the exact state of all files in the staging area at the time of execution. Git stores metadata including the author, timestamp, commit message, and a unique SHA-1 hash that identifies the commit.",

      "Each commit references its parent commit, forming a linked history chain. This structure allows Git to efficiently track changes, compare versions, and revert to previous states.",

      "HEAD is a pointer to the current branch's latest commit. When you create a new commit, HEAD moves forward to reference that new commit.",

      "The commit message is critical documentation. A strong message explains both WHAT changed and WHY it changed. Poor messages make debugging and collaboration significantly harder.",

      "Commits should represent a single logical change. Small, focused commits make code reviews, debugging, and rollbacks much easier.",
    ],

    codeBlocks: [
      {
        label: "Commit with inline message",
        language: "bash",
        code: "git commit -m 'Add user authentication feature'",
        explanation: "Creates a commit with a short message using the -m flag",
      },
      {
        label: "Commit with detailed message (opens editor)",
        language: "bash",
        code: "git commit",
        explanation:
          "Opens the configured default editor to write a structured multi-line commit message",
      },
      {
        label: "Commit all tracked changes (skip explicit add)",
        language: "bash",
        code: "git commit -am 'Fix navigation bug'",
        explanation:
          "Automatically stages all modified tracked files and commits them (does not include new untracked files)",
      },
      {
        label: "Amend the last commit",
        language: "bash",
        code: "git commit --amend -m 'Update authentication logic'",
        explanation:
          "Modifies the most recent commit (message or content). Rewrites history — use carefully on shared branches.",
      },
      {
        label: "Create an empty commit",
        language: "bash",
        code: "git commit --allow-empty -m 'Trigger CI pipeline'",
        explanation:
          "Creates a commit with no file changes, often used to trigger automation workflows.",
      },
      {
        label: "Sign a commit with GPG",
        language: "bash",
        code: "git commit -S -m 'Add secure login endpoint'",
        explanation:
          "Creates a cryptographically signed commit to verify author authenticity.",
      },
      {
        label: "View commit history",
        language: "bash",
        code: "git log --oneline --graph --decorate",
        explanation:
          "Displays a compact, visual representation of commit history.",
      },
    ],

    workflowSteps: [
      "Make changes to project files",
      "Stage changes using git add",
      "Review staged changes with git diff --staged",
      "Run git commit with a clear message",
      "Verify commit history with git log",
      "Push commits to remote repository if collaborating",
    ],

    keyTakeaways: [
      "Commits create permanent snapshots of staged changes",
      "Each commit has a unique SHA identifier",
      "HEAD moves forward with every new commit",
      "Write commit messages that explain WHAT and WHY",
      "Keep commits small and logically grouped",
      "Use --amend carefully as it rewrites history",
    ],

    commonMistakes: [
      "Writing vague commit messages like 'update' or 'fix'",
      "Creating large commits with unrelated changes",
      "Using git commit -a without understanding it excludes new files",
      "Amending commits that were already pushed to shared branches",
      "Committing sensitive data accidentally",
    ],

    tips: [
      "Follow Conventional Commits format (feat:, fix:, docs:, refactor:)",
      "Keep the first line under 50 characters",
      "Leave a blank line before detailed explanations",
      "Review changes with git diff --staged before committing",
      "Use interactive rebase to clean up commit history before merging",
    ],

    warnings: [
      "Avoid rewriting commit history on shared branches",
      "Never commit passwords, API keys, or private credentials",
      "Be cautious when using --amend after pushing commits",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "git-log",
    category: "Staging & Commit",
    title: "git log",
    description:
      "View the commit history of your repository to see what changes wer made, when, and by whom.",
    overview:
      "The git log command displays the commit history of your repository. It shows you a chronological list of commits, including commit messages, authors, dates, and commit IDs. This command is essential for understanding your project's evolution and finding specific changes.",
    detailedExplanation: [
      "Git log displays commits in reverse chronological order (newest first). Each entry shows the commit hash (unique identifier), author name and email, date, and the commit message. You often need only the first 7 characters of the hash.",
      "The log can be customized extensively to show only the information you need. You can filter by author, date range, file, or search commit messages. You can also format the output to be more compact or include additional details.",
      "Understanding git log is crucial for navigating your project's history. It helps you find when bugs were introduced, understand why changes were made, and identify which commit you need to checkout, revert, or cherry-pick.",
      "The log shows the history from HEAD (current commit) backward through the parent commits. If you're on a branch, you see that branch's history. To see other branches, you need to specify them or use --all.",
    ],
    codeBlocks: [
      {
        label: "View commit history",
        language: "bash",
        code: "git log",
        explanation:
          "Shows full commit history with hashes, authors, dates, and messages",
      },
      {
        label: "Compact one-line format",
        language: "bash",
        code: "git log --oneline",
        explanation:
          "Shows each commit on a single line with short hash and message",
      },
      {
        label: "Show last N commits",
        language: "bash",
        code: "git log -5\n# or\ngit log -n 5",
        explanation: "Displays only the 5 most recent commits",
      },
      {
        label: "Visual branch graph",
        language: "bash",
        code: "git log --oneline --graph --all --decorate",
        explanation:
          "Shows a visual representation of branch structure with commits",
      },
      {
        label: "Filter by author",
        language: "bash",
        code: "git log --author='John Doe'",
        explanation: "Shows only commits by a specific author",
      },
      {
        label: "Filter by date",
        language: "bash",
        code: "git log --since='2 weeks ago'\n# or\ngit log --after='2024-01-01' --before='2024-02-01'",
        explanation: "Shows commits within a specific time range",
      },
      {
        label: "Show changes in each commit",
        language: "bash",
        code: "git log -p",
        explanation: "Displays the actual diff (changes) for each commit",
      },
      {
        label: "Search commit messages",
        language: "bash",
        code: "git log --grep='fix bug'",
        explanation: "Shows commits whose messages contain 'fix bug'",
      },
    ],
    keyTakeaways: [
      "git log shows commit history in reverse chronological order",
      "Use --oneline for a quick, compact view of commit history",
      "Commit hashes uniquely identify each commit",
      "You can filter logs by author, date, file, or message content",
      "Use --graph to visualize branch structure",
    ],
    commonMistakes: [
      "Getting overwhelmed by the default verbose output instead of using --oneline",
      "Not knowing how to exit git log (press 'q' to quit)",
      "Forgetting that log shows only current branch history by default",
      "Not using filters when looking for specific commits in large repositories",
    ],
    tips: [
      "Create an alias for your most-used log format: git config --global alias.lg 'log --oneline --graph --all'",
      "Use git log --follow <file> to see history of a renamed file",
      "Combine flags for powerful queries: git log --author='Jane' --since='1 month ago' --oneline",
    ],
  },
  {
    id: "understanding-head",
    category: "Staging & Commit",
    title: "Understanding HEAD",
    description:
      "Learn what HEAD represents in Git, how it moves, and why understanding it is essential for navigating and modifying repository history.",

    overview:
      "HEAD is a reference that points to your current position in the Git repository. In most cases, it points to the latest commit of the currently checked-out branch. Understanding HEAD is crucial for working with commits, branches, resets, checkouts, and rebasing operations.",

    detailedExplanation: [
      "In Git, HEAD is a special pointer that refers to your current commit. Normally, HEAD points to a branch (like main), and that branch points to the latest commit.",

      "When you create a new commit, the branch moves forward to the new commit, and HEAD follows because it points to the branch.",

      "If you checkout a specific commit instead of a branch, HEAD enters a 'detached HEAD' state. In this state, HEAD points directly to a commit instead of a branch reference.",

      "Detached HEAD is not an error, but commits created in this state are not attached to a branch unless you create one explicitly.",

      "Commands like git reset, git checkout, git switch, and git rebase change where HEAD points. Understanding how HEAD moves helps prevent accidental history loss.",
    ],

    codeBlocks: [
      {
        label: "See where HEAD is pointing",
        language: "bash",
        code: "git log --oneline --decorate -1",
        explanation:
          "Shows the latest commit and indicates where HEAD is pointing",
      },
      {
        label: "View HEAD reference file",
        language: "bash",
        code: "cat .git/HEAD",
        explanation:
          "Displays the reference HEAD currently points to (usually a branch)",
      },
      {
        label: "Checkout a branch (normal HEAD state)",
        language: "bash",
        code: "git checkout main",
        explanation: "Moves HEAD to point to the main branch",
      },
      {
        label: "Checkout a specific commit (detached HEAD)",
        language: "bash",
        code: "git checkout <commit-hash>",
        explanation:
          "Moves HEAD directly to a specific commit, entering detached HEAD state",
      },
      {
        label: "Create branch from detached HEAD",
        language: "bash",
        code: "git checkout -b new-branch",
        explanation:
          "Creates a new branch to preserve commits made in detached HEAD state",
      },
      {
        label: "Move HEAD backward with reset",
        language: "bash",
        code: "git reset --hard HEAD~1",
        explanation:
          "Moves HEAD and current branch one commit back (destructive operation)",
      },
    ],

    keyTakeaways: [
      "HEAD represents your current position in the repository",
      "Normally, HEAD points to a branch, not directly to a commit",
      "Detached HEAD occurs when checking out a specific commit",
      "Creating commits in detached HEAD requires creating a branch to preserve them",
      "Many Git commands work by moving the HEAD pointer",
    ],

    commonMistakes: [
      "Panicking when seeing 'detached HEAD' message",
      "Making commits in detached HEAD and losing them",
      "Using git reset --hard without understanding it moves HEAD and deletes changes",
      "Confusing HEAD with the latest commit in all branches",
    ],

    tips: [
      "Use git status to check if you're in detached HEAD state",
      "Use git branch to see which branch HEAD is attached to",
      "Use git reflog to recover lost commits if HEAD was moved incorrectly",
      "Think of HEAD as your current 'working position' in Git history",
    ],

    warnings: [
      "git reset --hard moves HEAD and deletes uncommitted changes permanently",
      "Detached HEAD commits can be garbage collected if not attached to a branch",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "staging-commit-interview-questions",
    category: "Staging & Commit",
    title: "Interview Questions",
    description:
      "Comprehensive interview questions covering Git staging, committing, HEAD behavior, and commit history management.",

    overview:
      "This section includes beginner to advanced interview questions related to Git’s staging area, commit process, history inspection, and HEAD mechanics. These questions frequently appear in developer, DevOps, and senior engineering interviews.",

    detailedExplanation: [
      "Interviewers often test whether you truly understand Git’s three areas: working directory, staging area (index), and repository.",

      "You should be able to explain how git add interacts with the staging area and how git commit creates a snapshot from it.",

      "Understanding how HEAD moves during commits, resets, and checkouts is a strong indicator of Git proficiency.",

      "Advanced interviews may include scenario-based questions about amending commits, recovering lost commits, or working in detached HEAD state.",

      "Senior-level roles may require understanding commit hashes, parent relationships, and how history rewriting affects collaboration.",
    ],

    keyTakeaways: [
      "Know the difference between working directory, staging area, and repository",
      "Understand what git add actually does",
      "Be able to explain what a commit contains",
      "Understand how HEAD moves",
      "Know the risks of rewriting history",
    ],

    commonMistakes: [
      "Confusing staging area with the repository",
      "Believing git commit automatically includes all file changes",
      "Not understanding detached HEAD state",
      "Amending commits after pushing to shared branches",
      "Thinking commit hashes never change (they change after history rewrite)",
    ],

    interviewQuestions: [
      // Fundamental
      "What are the three main areas in Git architecture?",
      "What does git add actually do?",
      "What happens internally when you run git commit?",
      "Why is the staging area important?",
      "What information is stored inside a commit?",

      // Intermediate
      "What is HEAD in Git?",
      "What happens to HEAD after you create a commit?",
      "What is detached HEAD state and when does it occur?",
      "What happens if you modify a file after running git add but before commit?",
      "What is the difference between git commit -m and git commit?",
      "What does git commit -a do?",
      "What is the purpose of git commit --amend?",
      "When should you avoid using --amend?",

      // History & Log
      "How does git log differ from git reflog?",
      "How can you find who introduced a specific change?",
      "How do you view commits made by a specific author?",
      "How can you compare commits between two branches?",

      // Advanced / Scenario-Based
      "You committed to the wrong branch. What would you do?",
      "You forgot to include a file in your last commit. How do you fix it?",
      "You accidentally committed sensitive data. What steps would you take?",
      "You are in detached HEAD and created commits. How do you preserve them?",
      "What happens to commit hashes if you amend or rebase?",
      "How would you recover a lost commit after a hard reset?",
    ],

    lastUpdated: "2026-02-14",
  },

  // ===== .GITIGNORE & TRACKING =====
  {
    id: "what-is-gitignore",
    category: ".gitignore & Tracking",
    title: "What is .gitignore",
    description:
      "Understand how .gitignore prevents Git from tracking unwanted files such as build artifacts, dependencies, logs, and sensitive data.",

    overview:
      "The .gitignore file tells Git which files and directories should be ignored and not tracked. It is essential for excluding generated files, dependencies, IDE settings, system files, and secrets from version control. A properly configured .gitignore keeps your repository clean, secure, and efficient.",

    detailedExplanation: [
      "Git tracks file changes inside a repository, but not all files should be version-controlled. Build outputs, dependency folders, logs, temporary files, and environment secrets should never be committed. The .gitignore file defines patterns that match files Git should ignore.",

      ".gitignore files are usually placed at the root of a repository, but you can have multiple .gitignore files in subdirectories. Each file applies to its directory and all subdirectories beneath it.",

      "Patterns support wildcards and special rules. For example, '*.log' ignores all log files, 'node_modules/' ignores a directory, '/dist' ignores a directory only at root level, and '!important.log' re-includes a previously ignored file.",

      "If a file is already being tracked by Git, adding it to .gitignore will NOT stop Git from tracking it. You must remove it from the index using 'git rm --cached <file>' before .gitignore takes effect.",

      "You can configure a global .gitignore file to ignore system-wide files (like .DS_Store). Git also provides a local exclude file at '.git/info/exclude' for repository-specific ignores that should not be shared.",
    ],

    codeBlocks: [
      {
        label: "Basic .gitignore example",
        language: "bash",
        code: "# Ignore dependencies\nnode_modules/\n\n# Ignore logs\n*.log\n\n# Ignore environment files\n.env\n\n# Ignore build output\ndist/\nbuild/",
        explanation:
          "Ignores dependency folders, logs, environment files, and build artifacts",
      },
      {
        label: "Ignore root-only directory",
        language: "bash",
        code: "/dist",
        explanation: "Ignores the dist folder only at repository root",
      },
      {
        label: "Re-include an ignored file",
        language: "bash",
        code: "*.log\n!important.log",
        explanation: "Ignores all log files except important.log",
      },
      {
        label: "Check why a file is ignored",
        language: "bash",
        code: "git check-ignore -v file.txt",
        explanation: "Shows which rule is causing the file to be ignored",
      },
      {
        label: "Untrack already tracked file",
        language: "bash",
        code: "git rm --cached secret.txt",
        explanation: "Removes the file from Git tracking but keeps it locally",
      },
      {
        label: "Set global .gitignore",
        language: "bash",
        code: "git config --global core.excludesfile ~/.gitignore_global",
        explanation: "Defines a global ignore file applied to all repositories",
      },
    ],

    keyTakeaways: [
      ".gitignore prevents specific files from being tracked",
      "Ignored files are not added to commits unless force-added",
      "Files already tracked must be manually untracked",
      "Use root-level .gitignore for shared rules",
      "Use global excludes for system-level ignores",
    ],

    commonMistakes: [
      "Adding files to .gitignore after committing them",
      "Committing sensitive files before configuring .gitignore",
      "Ignoring too broadly (accidentally hiding important files)",
      "Forgetting to commit the .gitignore file itself",
      "Assuming .gitignore deletes files (it only prevents tracking)",
    ],

    tips: [
      "Initialize .gitignore before your first commit",
      "Use language/framework templates as a starting point",
      "Review ignored files with git status before committing",
      "Use separate environment files (.env.example) for safe configuration sharing",
    ],

    warnings: [
      "Never commit secrets, API keys, or credentials — even temporarily",
      "Once pushed to remote, sensitive files remain in Git history unless rewritten",
      "Force-adding ignored files (git add -f) bypasses .gitignore protections",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "tracked-vs-untracked-files",
    category: ".gitignore & Tracking",
    title: "Tracked vs Untracked Files",
    description:
      "Understand the difference between tracked, untracked, and ignored files, and how Git monitors file changes throughout its lifecycle.",

    overview:
      "Tracked files are files that Git knows about and monitors for changes. Untracked files exist in your working directory but are not yet being tracked by Git. Ignored files are intentionally excluded using .gitignore rules. Understanding these states is fundamental to managing changes correctly in Git.",

    detailedExplanation: [
      "A tracked file is any file that was included in a previous commit or has been staged using 'git add'. Git monitors tracked files for modifications, deletions, and renames.",

      "Tracked files can exist in three states: unmodified (matches last commit), modified (changed but not staged), or staged (ready to be committed). These states are visible in 'git status'.",

      "Untracked files are new files that Git sees in the working directory but has never been told to track. They will not be included in commits unless explicitly added with 'git add'.",

      "Ignored files are a subset of untracked files that match patterns in .gitignore. Git intentionally hides these files from normal status output to reduce clutter.",

      "Files can move between states. Adding a file makes it tracked. Removing it with 'git rm --cached' makes it untracked again. Using 'git clean' permanently deletes untracked files.",
    ],

    codeBlocks: [
      {
        label: "Check file states",
        language: "bash",
        code: "git status",
        explanation: "Displays tracked (modified/staged) and untracked files",
      },
      {
        label: "Short status format",
        language: "bash",
        code: "git status -s",
        explanation:
          "Compact view showing file state indicators (M, A, ??, etc.)",
      },
      {
        label: "List all tracked files",
        language: "bash",
        code: "git ls-files",
        explanation: "Shows all files currently tracked in the repository",
      },
      {
        label: "List only untracked files",
        language: "bash",
        code: "git ls-files --others --exclude-standard",
        explanation: "Displays untracked files excluding ignored ones",
      },
      {
        label: "Add untracked file",
        language: "bash",
        code: "git add newfile.js",
        explanation: "Moves a file from untracked to tracked (staged state)",
      },
      {
        label: "Force add ignored file",
        language: "bash",
        code: "git add -f secret.log",
        explanation:
          "Forcefully adds a file even if it is ignored by .gitignore",
      },
      {
        label: "Untrack a tracked file",
        language: "bash",
        code: "git rm --cached file.txt",
        explanation: "Removes the file from Git tracking but keeps it locally",
      },
      {
        label: "Remove untracked files permanently",
        language: "bash",
        code: "git clean -f",
        explanation:
          "Deletes untracked files from the working directory (destructive)",
      },
    ],

    keyTakeaways: [
      "Tracked files are monitored by Git",
      "Untracked files are not included in commits until added",
      "Ignored files are untracked files hidden by .gitignore rules",
      "Use git status frequently to monitor file states",
      "git clean permanently deletes untracked files",
    ],

    commonMistakes: [
      "Expecting new files to be automatically tracked",
      "Confusing ignored files with tracked files",
      "Accidentally deleting untracked files using git clean",
      "Force-adding sensitive files that were intentionally ignored",
      "Forgetting to stage new files before committing",
    ],

    tips: [
      "Use git status -s for quick state inspection",
      "Use git add . carefully — review status first",
      "Keep dependencies and build outputs untracked",
      "Use git clean -n before git clean -f to preview deletions",
    ],

    warnings: [
      "git clean -f permanently deletes untracked files",
      "Force-adding ignored files can expose sensitive data",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "ignore-patterns",
    category: ".gitignore & Tracking",
    title: "Ignore Patterns",
    description:
      "Master .gitignore pattern rules to precisely control which files and directories Git should ignore.",

    overview:
      "Git ignore patterns allow you to define exactly which files should be excluded from version control. Using filenames, directory paths, wildcards, recursive matching, and negation rules, you can create flexible and safe ignore configurations. Correct pattern usage prevents accidental commits of build artifacts, dependencies, or sensitive data.",

    detailedExplanation: [
      "Patterns in .gitignore are matched relative to the location of the .gitignore file. A simple filename like 'secret.txt' ignores that file in any directory unless restricted by a leading slash.",

      "Ending a pattern with a slash (e.g., 'build/') matches directories only. Without the slash ('build'), it can match both a file or directory named build.",

      "A leading slash (e.g., '/config.json') restricts the match to the repository root. Without the slash, the pattern matches recursively in all directories.",

      "Wildcards provide flexibility: '*' matches zero or more characters, '?' matches exactly one character, and '**' matches across directory boundaries. For example, '**/logs' matches a logs directory at any depth.",

      "Negation rules start with '!'. They override previous ignore rules and re-include specific files. Order matters — exception rules must appear after the rule they override.",

      "To ignore literal characters like '#' or '!', you must escape them with a backslash (e.g., '\\#file').",

      "Multiple .gitignore files can exist in different directories. Rules are applied hierarchically, and deeper .gitignore files can override parent rules.",
    ],

    codeBlocks: [
      {
        label: "Basic ignore patterns",
        language: "bash",
        code: "# Ignore all .a files\n*.a\n\n# Ignore a directory\nbuild/\n\n# Ignore node_modules anywhere\nnode_modules/",
        explanation: "Ignore specific file types and directories",
      },
      {
        label: "Wildcards and recursive matching",
        language: "bash",
        code: "# Ignore all log directories at any depth\n**/logs/\n\n# Ignore files with one-character prefix\n?.txt",
        explanation: "Use *, ?, and ** for flexible matching",
      },
      {
        label: "Negation (exception rule)",
        language: "bash",
        code: "*.log\n!important.log",
        explanation:
          "Ignore all .log files except important.log (order matters)",
      },
      {
        label: "Root-only matching",
        language: "bash",
        code: "/config.json",
        explanation: "Ignores config.json only at repository root",
      },
      {
        label: "Escape special characters",
        language: "bash",
        code: "\\#file.txt\n\\!important.txt",
        explanation: "Ignore files literally starting with # or !",
      },
      {
        label: "Test ignore rule",
        language: "bash",
        code: "git check-ignore -v filename",
        explanation: "Shows which rule is causing the file to be ignored",
      },
    ],

    keyTakeaways: [
      "Patterns are matched relative to the .gitignore location",
      "Trailing slash (dir/) matches directories only",
      "Leading slash (/file) restricts to root level",
      "Wildcards (*, ?, **) enable flexible matching",
      "Negation (!) creates rule exceptions",
      "Order matters — later rules override earlier ones",
    ],

    commonMistakes: [
      "Trying to ignore files that are already tracked",
      "Misunderstanding root-level vs recursive matching",
      "Placing negation rules before general ignore rules",
      "Forgetting that patterns are relative to the .gitignore file location",
      "Accidentally force-adding ignored files with git add -f",
    ],

    tips: [
      "Organize patterns logically (dependencies, builds, logs, secrets)",
      "Comment complex rules for team clarity",
      "Use git check-ignore -v to debug matching issues",
      "Use global excludes for system files like .DS_Store",
    ],

    warnings: [
      "Ignored files can still be force-added with git add -f",
      "Once committed, adding to .gitignore does not remove files from history",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "gitignore-tracking-interview-questions",
    category: ".gitignore & Tracking",
    title: "Interview Questions",
    description:
      "Comprehensive interview questions covering Git tracking states, .gitignore behavior, pattern matching, and file lifecycle management.",

    overview:
      "This section includes beginner to advanced interview questions related to tracked, untracked, and ignored files in Git. These questions test your understanding of .gitignore rules, file state transitions, security implications, and repository hygiene best practices.",

    detailedExplanation: [
      "Interviewers often test whether you understand the difference between tracked, untracked, and ignored files.",

      "You should be able to explain how .gitignore works, how patterns are matched, and why adding a file to .gitignore does not automatically untrack it.",

      "Mid-level interviews often include scenario-based questions such as recovering from accidentally committing secrets or fixing incorrect ignore patterns.",

      "Senior-level interviews may test your understanding of global ignore files, hierarchical .gitignore behavior, and security best practices for repository management.",
    ],

    keyTakeaways: [
      "Understand tracked vs untracked vs ignored files",
      "Know how .gitignore patterns are evaluated",
      "Understand how to untrack files properly",
      "Be aware of security risks when committing sensitive files",
      "Know how to debug ignore rules using git check-ignore",
    ],

    commonMistakes: [
      "Believing .gitignore removes already tracked files",
      "Confusing ignored files with deleted files",
      "Forgetting that rule order matters in .gitignore",
      "Force-adding ignored files without realizing the risk",
      "Committing secrets before configuring ignore rules",
    ],

    interviewQuestions: [
      // Fundamental
      "What is the difference between tracked and untracked files?",
      "What does .gitignore do?",
      "Are ignored files the same as untracked files?",
      "How do you see which files are untracked?",
      "How do you list all tracked files?",

      // Intermediate
      "What happens if you add a file to .gitignore after committing it?",
      "How do you stop tracking a file but keep it locally?",
      "What is the difference between 'build/' and 'build' in .gitignore?",
      "What does a leading slash in .gitignore mean?",
      "What does the '**' wildcard do?",
      "How do negation rules (!) work?",
      "Why does order matter in .gitignore rules?",

      // Practical Scenarios
      "You accidentally committed a .env file. What steps would you take?",
      "A file is not being ignored even though it matches a pattern. What could be the reason?",
      "How can you check which ignore rule is affecting a file?",
      "How do you ignore system files like .DS_Store globally?",
      "When would you use .git/info/exclude instead of .gitignore?",

      // Advanced / Security
      "If sensitive data was committed and pushed, is deleting the file enough?",
      "How would you remove sensitive data from Git history?",
      "Can an ignored file still be force-added?",
      "What risks come with using git add -f?",
      "How does .gitignore behavior differ across nested directories?",
    ],

    lastUpdated: "2026-02-14",
  },

  // ===== BRANCHING =====
  {
    id: "what-is-branch",
    category: "Branching",
    title: "What is a Branch?",
    description:
      "Understand Git branches as lightweight pointers that enable independent lines of development without duplicating files.",

    overview:
      "A branch in Git is a lightweight movable pointer to a commit. Branches allow developers to diverge from the main line of development and work independently on features, fixes, or experiments — without affecting the stable codebase. Branching is one of Git’s most powerful and distinguishing features.",

    detailedExplanation: [
      "In Git, a branch is simply a pointer (reference) to a commit object. When you create a new branch, Git does not copy files or create a new directory — it creates a new reference that points to the current commit. This makes branch creation extremely fast and lightweight.",

      "The default branch in modern repositories is typically called 'main' (historically 'master'). When you create a new branch, it starts at the current commit. As you create new commits, the branch pointer automatically moves forward to the latest commit.",

      "Internally, Git stores branches as files inside .git/refs/heads/. Each file contains the SHA-1 (or SHA-256 in newer versions) of the commit it points to. This simple implementation is why branches are cheap and instant to create or delete.",

      "HEAD is a special pointer that indicates your current working branch. Normally, HEAD points to a branch name (like 'main'). When you commit, Git moves the current branch forward. If HEAD points directly to a commit instead of a branch, you are in a 'detached HEAD' state.",

      "Branches enable parallel development. Teams can work on multiple features simultaneously without interfering with each other. Once work is complete, branches are merged back into the main branch, integrating the changes.",
    ],

    codeBlocks: [
      {
        label: "List all local branches",
        language: "bash",
        code: "git branch",
        explanation:
          "Shows all local branches. The * symbol indicates the currently checked-out branch.",
      },
      {
        label: "List all branches (local + remote)",
        language: "bash",
        code: "git branch -a",
        explanation: "Displays local branches and remote-tracking branches.",
      },
      {
        label: "View branches with last commit",
        language: "bash",
        code: "git branch -v",
        explanation:
          "Shows each branch along with its latest commit hash and message.",
      },
      {
        label: "Visualize branch structure",
        language: "bash",
        code: "git log --oneline --graph --all",
        explanation: "Displays a visual commit graph across all branches.",
      },
      {
        label: "Create a new branch",
        language: "bash",
        code: "git branch feature-login",
        explanation: "Creates a new branch pointing to the current commit.",
      },
    ],

    keyTakeaways: [
      "A branch is a movable pointer to a commit",
      "Branches do NOT copy files or create directories",
      "HEAD points to the current branch",
      "Branch creation is instant and lightweight",
      "Branches enable safe parallel development",
    ],

    commonMistakes: [
      "Thinking branches duplicate project files",
      "Doing all work directly on main",
      "Confusing HEAD with a branch",
      "Not understanding detached HEAD state",
      "Being afraid to create many small branches",
    ],

    tips: [
      "Use descriptive branch names (feature/auth-login, bugfix/payment-error)",
      "Create a new branch for each feature or bug fix",
      "Keep the main branch stable and production-ready",
      "Delete branches after merging to keep repository clean",
      "Use short-lived feature branches for better workflow",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "create-branch",
    category: "Branching",
    title: "Create Branch",
    description:
      "Create new branches to develop features, fix bugs, or experiment safely without affecting the main codebase.",

    overview:
      "Creating a branch in Git allows you to start a new line of development from any existing commit. A branch is a lightweight movable pointer, making branch creation instant and efficient. This enables safe feature development, bug fixes, and parallel team collaboration.",

    detailedExplanation: [
      "When you create a branch, Git creates a new reference that points to a specific commit — usually the commit you're currently on (HEAD). No files are copied. The branch is simply another pointer in Git’s commit graph.",

      "Creating a branch does NOT automatically switch you to it unless you use special flags like '-b' (checkout) or '-c' (switch). After switching, HEAD points to the new branch, and new commits will move that branch forward.",

      "Branches are commonly used for feature development, bug fixes, hotfixes, and releases. The main branch (usually 'main') should remain stable and production-ready, while development happens in separate branches.",

      "Modern Git (2.23+) introduced 'git switch' to simplify branch operations. Previously, 'git checkout' handled both file restoration and branch switching, which often caused confusion.",

      "You can create a branch from any commit, tag, or existing branch. This allows flexible workflows such as creating hotfix branches from older production commits.",

      "When pushing a new branch to a remote repository for the first time, you typically set an upstream tracking branch. This allows future 'git push' and 'git pull' commands to work without specifying the branch name.",
    ],

    codeBlocks: [
      {
        label: "Create a new branch",
        language: "bash",
        code: "git branch feature-login",
        explanation:
          "Creates a branch named 'feature-login' pointing to the current commit. Does NOT switch to it.",
      },
      {
        label: "Create and switch (old syntax)",
        language: "bash",
        code: "git checkout -b feature-login",
        explanation:
          "Creates the branch and switches to it in one step (pre-Git 2.23 method).",
      },
      {
        label: "Create and switch (modern syntax)",
        language: "bash",
        code: "git switch -c feature-login",
        explanation:
          "Modern and clearer way to create and switch to a new branch.",
      },
      {
        label: "Create branch from specific commit",
        language: "bash",
        code: "git branch bugfix abc1234",
        explanation: "Creates 'bugfix' branch starting from commit abc1234.",
      },
      {
        label: "Create branch from another branch",
        language: "bash",
        code: "git branch feature-payment development",
        explanation:
          "Creates 'feature-payment' based on the 'development' branch.",
      },
      {
        label: "Push branch and set upstream",
        language: "bash",
        code: "git push -u origin feature-login",
        explanation:
          "Pushes the branch to remote and sets upstream tracking for future push/pull.",
      },
      {
        label: "List all branches",
        language: "bash",
        code: "git branch -a\n# or with last commit info\ngit branch -v",
        explanation:
          "Lists local and remote branches. The current branch is marked with *.",
      },
    ],

    workflowSteps: [
      "Ensure you are on the correct base branch (usually main or development)",
      "Pull the latest changes to stay updated",
      "Create a new branch with a descriptive name",
      "Switch to the new branch (if not already switched)",
      "Make changes and commit them",
      "Push the branch to remote and set upstream tracking",
    ],

    keyTakeaways: [
      "A branch is a pointer to a commit, not a copy of files",
      "Creating a branch does not switch to it automatically",
      "HEAD moves to the branch when you switch",
      "Use git switch -c as the modern approach",
      "Set upstream tracking when pushing a new branch",
    ],

    commonMistakes: [
      "Creating a branch but forgetting to switch to it",
      "Basing a branch on an outdated main branch",
      "Using unclear branch names like 'test' or 'new'",
      "Forgetting to set upstream when pushing",
      "Making commits on the wrong branch",
    ],

    tips: [
      "Use naming conventions: feature/, bugfix/, hotfix/, release/",
      "Keep branch names lowercase with hyphens (feature-user-auth)",
      "Keep branches short-lived and focused",
      "Delete merged branches to keep repository clean",
      "Always pull latest changes before branching",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "switch-branch",
    category: "Branching",
    title: "Switch Branch",
    description:
      "Switch between branches to move across different lines of development safely and efficiently.",

    overview:
      "Switching branches updates your working directory to match the snapshot of another branch. Git moves the HEAD pointer and updates both the staging area (index) and working directory to reflect the selected branch. This allows you to seamlessly work on multiple features, fixes, or releases in parallel.",

    detailedExplanation: [
      "When you switch branches, Git performs three key operations: it moves HEAD to point to the new branch, updates the index (staging area), and updates the working directory files to match the target branch’s commit snapshot.",

      "Git prevents switching branches if you have uncommitted changes that would be overwritten. This safety mechanism protects you from accidental data loss. You must either commit your changes, stash them, or discard them before switching.",

      "The 'git switch' command was introduced in Git 2.23 to simplify branch-related operations. Unlike 'git checkout', which handles both branch switching and file restoration, 'git switch' focuses only on switching branches. This reduces accidental misuse.",

      "If you switch directly to a commit instead of a branch, Git enters a 'detached HEAD' state. In this state, HEAD points directly to a commit instead of a branch reference. Commits made here are not attached to any branch unless you create one.",

      "When switching to a remote branch for the first time, Git automatically creates a local branch that tracks the remote branch. This establishes an upstream relationship for easier push and pull operations.",
    ],

    codeBlocks: [
      {
        label: "Switch to existing branch (modern)",
        language: "bash",
        code: "git switch main",
        explanation:
          "Switches to the 'main' branch using the modern git switch command.",
      },
      {
        label: "Switch to existing branch (old syntax)",
        language: "bash",
        code: "git checkout development",
        explanation: "Traditional way to switch branches before Git 2.23.",
      },
      {
        label: "Switch to previous branch",
        language: "bash",
        code: "git switch -",
        explanation:
          "Quickly toggles back to the previously checked-out branch.",
      },
      {
        label: "Stash before switching",
        language: "bash",
        code: "git stash\ngit switch feature-auth",
        explanation:
          "Temporarily saves uncommitted changes before switching branches.",
      },
      {
        label: "Force discard changes (dangerous)",
        language: "bash",
        code: "git switch --discard-changes feature-branch",
        explanation:
          "Switches branches and discards local modifications. Use with extreme caution.",
      },
      {
        label: "Switch to remote branch",
        language: "bash",
        code: "git switch feature-payment",
        explanation:
          "If the branch exists on the remote but not locally, Git creates a local tracking branch automatically.",
      },
      {
        label: "Enter detached HEAD state",
        language: "bash",
        code: "git switch --detach abc1234",
        explanation:
          "Switches directly to a specific commit, resulting in a detached HEAD.",
      },
    ],

    workflowSteps: [
      "Run git status to check current branch and uncommitted changes",
      "Commit or stash changes if necessary",
      "Switch to the target branch using git switch <branch>",
      "Verify the branch change with git status",
      "Continue development on the new branch",
    ],

    keyTakeaways: [
      "git switch is the modern command for branch switching",
      "HEAD moves to the selected branch",
      "Git updates both index and working directory when switching",
      "Detached HEAD occurs when switching directly to a commit",
      "Always handle uncommitted changes before switching",
    ],

    commonMistakes: [
      "Switching branches without committing or stashing changes",
      "Making commits in detached HEAD state unintentionally",
      "Confusing git checkout (file restore) with branch switching",
      "Not verifying the current branch before committing",
      "Force discarding changes without understanding the consequences",
    ],

    tips: [
      "Use git status before and after switching branches",
      "Configure your terminal to show the current branch",
      "Use git switch - to quickly move between two branches",
      "Create a branch immediately if you find yourself in detached HEAD and want to keep the commits",
    ],

    warnings: [
      "Using --discard-changes permanently deletes uncommitted work",
      "Untracked files are not removed when switching branches",
      "Commits made in detached HEAD can be lost if not attached to a branch",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "delete-branch",
    category: "Branching",
    title: "Delete Branch",
    description:
      "Safely remove local and remote branches that are no longer needed to keep your repository clean and maintainable.",

    overview:
      "Deleting branches in Git removes branch references that are no longer needed. Since branches are just pointers to commits, deleting a branch removes the reference — not the underlying commits. Git includes safety mechanisms to prevent accidental deletion of unmerged work. Regular branch cleanup is an essential best practice in collaborative workflows.",

    detailedExplanation: [
      "When you delete a branch, Git removes the branch reference (a pointer stored in .git/refs/heads/). The commits themselves remain in the repository as long as they are referenced by another branch or reachable via reflog.",

      "The safe deletion flag '-d' checks whether the branch has been fully merged into the current branch. Git determines this by verifying that the branch’s tip commit is reachable from the current branch (i.e., it's already integrated). If not, deletion is blocked to prevent data loss.",

      "The force deletion flag '-D' bypasses this safety check. It deletes the branch regardless of merge status. This should only be used when you are certain the branch’s commits are no longer needed.",

      "Local and remote branches are independent. Deleting a local branch does not remove the remote branch, and deleting a remote branch does not automatically remove local tracking references unless you prune them.",

      "Deleted branch commits can often be recovered using 'git reflog', since reflog records updates to branch references and HEAD movements. However, unreferenced commits may eventually be removed by Git's garbage collection process.",
    ],

    codeBlocks: [
      {
        label: "Delete local branch (safe)",
        language: "bash",
        code: "git branch -d feature-login",
        explanation:
          "Deletes the branch only if it has already been merged into the current branch.",
      },
      {
        label: "Force delete local branch",
        language: "bash",
        code: "git branch -D feature-old",
        explanation:
          "Deletes the branch even if it contains unmerged commits. Use with caution.",
      },
      {
        label: "Delete remote branch",
        language: "bash",
        code: "git push origin --delete feature-login",
        explanation:
          "Removes the branch from the remote repository (e.g., GitHub, GitLab).",
      },
      {
        label: "Old syntax for remote delete",
        language: "bash",
        code: "git push origin :feature-login",
        explanation: "Legacy syntax for deleting a remote branch.",
      },
      {
        label: "Delete current branch (must switch first)",
        language: "bash",
        code: "git switch main\ngit branch -d old-feature",
        explanation: "You cannot delete the branch you are currently on.",
      },
      {
        label: "List merged branches",
        language: "bash",
        code: "git branch --merged main",
        explanation:
          "Shows branches already merged into 'main' and safe to delete.",
      },
      {
        label: "Prune deleted remote branches",
        language: "bash",
        code: "git fetch --prune",
        explanation:
          "Removes local references to remote branches that no longer exist.",
      },
      {
        label: "Recover deleted branch (if needed)",
        language: "bash",
        code: "git reflog\ngit branch recovered-branch <commit-hash>",
        explanation:
          "Find the commit in reflog and recreate the branch from it.",
      },
    ],

    workflowSteps: [
      "Ensure the branch has been merged (git branch --merged)",
      "Switch to a different branch",
      "Delete the local branch using -d",
      "Delete the remote branch if necessary",
      "Prune stale remote references with git fetch --prune",
      "Verify cleanup with git branch -a",
    ],

    keyTakeaways: [
      "Deleting a branch removes the pointer, not the commits",
      "-d is safe and checks merge status",
      "-D forces deletion and bypasses safety checks",
      "Local and remote branch deletions are separate",
      "Deleted branches can often be recovered via reflog",
    ],

    commonMistakes: [
      "Using -D habitually instead of -d",
      "Deleting a branch that hasn’t been merged",
      "Forgetting to delete the remote branch after local deletion",
      "Not pruning stale remote references",
      "Deleting shared branches without team coordination",
    ],

    tips: [
      "Delete feature branches immediately after merging",
      "Use descriptive branch names to avoid accidental deletion",
      "Run git branch --merged regularly to identify cleanup candidates",
      "Communicate before deleting shared remote branches",
    ],

    warnings: [
      "Force deleting (-D) can permanently discard unmerged work",
      "Remote branch deletion affects the entire team",
      "Unreferenced commits may eventually be garbage collected",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "branching-interview-questions",
    category: "Branching",
    title: "Interview Questions",
    description:
      "Comprehensive interview questions covering Git branching concepts, workflows, merging strategies, and advanced recovery scenarios.",

    overview:
      "This section contains beginner to advanced interview questions focused on Git branching. These questions test conceptual clarity, real-world workflow understanding, internal Git mechanics, and problem-solving abilities related to branches.",

    detailedExplanation: [
      "Branching questions often test whether you understand that branches are lightweight pointers rather than file copies.",

      "Interviewers frequently ask about HEAD, detached HEAD state, and what happens internally when switching branches.",

      "Mid-level interviews focus on merge vs rebase differences, conflict handling, and collaboration workflows.",

      "Senior-level interviews include advanced recovery scenarios, reflog usage, branch hygiene practices, and distributed team workflows.",
    ],

    keyTakeaways: [
      "A branch is a movable pointer to a commit",
      "HEAD points to the current branch",
      "Switching branches updates working directory and index",
      "Merge and rebase solve similar problems differently",
      "Deleted branches can often be recovered via reflog",
    ],

    commonMistakes: [
      "Thinking branches duplicate project files",
      "Confusing HEAD with a branch",
      "Working directly on main in team environments",
      "Using force delete (-D) carelessly",
      "Misunderstanding merge vs rebase behavior",
    ],

    interviewQuestions: [
      // Fundamentals
      "What is a branch in Git?",
      "How are branches stored internally in Git?",
      "What is the difference between main and a feature branch?",
      "What does HEAD represent?",
      "What happens internally when you create a branch?",

      // Switching & Detached HEAD
      "What happens when you switch branches?",
      "What is a detached HEAD state?",
      "How do you recover from detached HEAD?",
      "Why does Git prevent switching branches with uncommitted changes?",
      "What is the difference between git switch and git checkout?",

      // Branch Creation & Deletion
      "What is the difference between git branch and git switch -c?",
      "What does git branch -d check before deleting?",
      "When would you use git branch -D?",
      "Can you delete the branch you're currently on? Why not?",
      "How do you delete a remote branch?",

      // Merge & Rebase Concepts
      "What is the difference between merge and rebase?",
      "What is a fast-forward merge?",
      "What is a three-way merge?",
      "When would you prefer rebase over merge?",
      "What problems can rebase cause in shared branches?",

      // Real-World Scenarios
      "You committed to the wrong branch. How do you fix it?",
      "You deleted a branch accidentally. How do you recover it?",
      "A branch was force-deleted but contained important commits. What can you do?",
      "How do you clean up stale remote branches?",
      "What branching strategy have you used in team projects?",

      // Advanced
      "How does Git determine if a branch is fully merged?",
      "What is upstream tracking in branches?",
      "How does Git handle branch references internally?",
      "What is the role of reflog in branch recovery?",
      "What are the risks of force pushing a rebased branch?",
    ],

    lastUpdated: "2026-02-14",
  },

  // ===== MERGE =====
  {
    id: "what-is-merge",
    category: "Merge",
    title: "What is Merge?",
    description:
      "Merge combines changes from one branch into another, integrating separate lines of development into a unified history.",

    overview:
      "Merging is Git’s mechanism for integrating changes from one branch into another. When you merge a source branch into a target branch, Git combines their histories and updates the target branch to include the source branch’s commits. This is how isolated feature development is integrated into the main codebase.",

    detailedExplanation: [
      "A merge integrates the history of a source branch into the currently checked-out (target) branch. Git identifies the 'merge base' — the common ancestor of both branches — and uses it to determine what changes need to be combined.",

      "There are two primary types of merges: fast-forward merges and three-way merges. A fast-forward merge occurs when the target branch has not diverged. Git simply moves the branch pointer forward — no new commit is created.",

      "A three-way merge (true merge) happens when both branches have diverged and contain unique commits. Git creates a new 'merge commit' that has two parent commits — one from each branch. This preserves the full history of both development paths.",

      "If changes from both branches modify the same lines differently, Git cannot automatically resolve the difference and produces a merge conflict. You must manually edit the files, remove conflict markers, and complete the merge.",

      "Merging is non-destructive. It does not rewrite history or alter existing commits. Instead, it adds a new commit that ties both histories together.",

      "By default, Git uses the 'recursive' (or 'ort' in modern Git) merge strategy for two branches. This strategy is highly efficient at detecting changes and minimizing conflicts.",
    ],

    codeBlocks: [
      {
        label: "Basic merge",
        language: "bash",
        code: "git switch main\ngit merge feature-branch",
        explanation:
          "Switch to the target branch (main) and merge feature-branch into it.",
      },
      {
        label: "Fast-forward merge example",
        language: "bash",
        code: "git merge feature-branch",
        explanation:
          "If main has no new commits since branching, Git simply moves the pointer forward.",
      },
      {
        label: "Force merge commit (--no-ff)",
        language: "bash",
        code: "git merge --no-ff feature-branch",
        explanation:
          "Creates a merge commit even if fast-forward is possible. Useful for preserving feature branch history.",
      },
      {
        label: "Merge with custom message",
        language: "bash",
        code: 'git merge feature-branch -m "Merge feature: authentication"',
        explanation: "Adds a custom message to the merge commit.",
      },
      {
        label: "Abort an in-progress merge",
        language: "bash",
        code: "git merge --abort",
        explanation:
          "Cancels the merge and restores the working directory to pre-merge state.",
      },
      {
        label: "Visualize merge history",
        language: "bash",
        code: "git log --oneline --graph --all",
        explanation: "Displays branch structure and merge commits visually.",
      },
    ],

    workflowSteps: [
      "Ensure your working directory is clean (commit or stash changes)",
      "Switch to the branch you want to merge INTO (target branch)",
      "Pull latest changes if collaborating",
      "Run git merge <source-branch>",
      "Resolve conflicts if necessary",
      "Test changes before pushing",
      "Delete feature branch if no longer needed",
    ],

    keyTakeaways: [
      "Merge integrates one branch into another",
      "Fast-forward merges move the branch pointer only",
      "Three-way merges create a merge commit with two parents",
      "Merging does not rewrite history",
      "Conflicts occur when the same lines are modified differently",
    ],

    commonMistakes: [
      "Merging in the wrong direction (not switching to correct target branch first)",
      "Not pulling latest changes before merging",
      "Committing unresolved conflict markers (<<<<<<<, =======, >>>>>>>)",
      "Not understanding the difference between fast-forward and merge commits",
      "Pushing untested merges to shared branches",
    ],

    tips: [
      "Always verify the current branch before merging",
      "Use --no-ff to preserve feature branch context in history",
      "Use git log --graph to understand merge structure",
      "Run tests after merging before pushing to remote",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "fast-forward-merge",
    category: "Merge",
    title: "Fast Forward Merge",
    description:
      "Understand fast-forward merges that move the branch pointer forward when no divergent commits exist.",

    overview:
      "A fast-forward merge occurs when the target branch has not diverged from the source branch. Instead of creating a new merge commit, Git simply moves the target branch pointer forward to the latest commit of the source branch. This results in a clean, linear commit history.",

    detailedExplanation: [
      "A fast-forward merge is possible when the current (target) branch’s latest commit is an ancestor of the branch being merged. This means no new commits were added to the target branch after the feature branch was created.",

      "During a fast-forward merge, Git does not create a new commit. It simply updates the branch reference to point to the newest commit from the source branch. Because of this, the history remains completely linear.",

      "Fast-forward merges are automatic when no divergence exists. Git detects that the merge can be completed by just moving the pointer and performs it without creating a merge commit.",

      "While this produces a clean history, it removes explicit evidence that a feature branch was merged. The commits appear as though they were made directly on the target branch.",

      "If you want to preserve branch structure in the history, you can prevent fast-forward merges by using the --no-ff flag, which forces Git to create a merge commit.",
    ],

    codeBlocks: [
      {
        label: "Automatic fast-forward merge",
        language: "bash",
        code: "git switch main\ngit merge feature-branch\n# Output: Fast-forward",
        explanation:
          "If no divergence exists, Git moves the main branch pointer forward.",
      },
      {
        label: "Force creation of merge commit",
        language: "bash",
        code: "git merge --no-ff feature-branch",
        explanation: "Creates a merge commit even if fast-forward is possible.",
      },
      {
        label: "Allow only fast-forward merges",
        language: "bash",
        code: "git merge --ff-only feature-branch",
        explanation: "Aborts the merge if a fast-forward is not possible.",
      },
      {
        label: "Check if fast-forward is possible",
        language: "bash",
        code: "git merge-base --is-ancestor HEAD feature-branch",
        explanation:
          "Returns success (exit code 0) if HEAD is an ancestor of feature-branch.",
      },
    ],

    workflowSteps: [
      "Ensure your working directory is clean",
      "Switch to the branch you want to merge INTO (target branch)",
      "Run git merge <source-branch>",
      "Verify that Git outputs 'Fast-forward'",
      "Test changes after merge",
    ],

    keyTakeaways: [
      "Fast-forward merge moves the branch pointer without creating a commit",
      "It is only possible when there is no divergence between branches",
      "Results in a clean, linear history",
      "Git performs fast-forward automatically when possible",
      "Use --no-ff to preserve branch merge context",
    ],

    commonMistakes: [
      "Expecting a merge commit when Git performs fast-forward",
      "Not understanding why sometimes merge creates a commit and sometimes doesn’t",
      "Losing visibility of feature branch context in history",
    ],

    tips: [
      "Use --no-ff in team projects to preserve feature history",
      "Use --ff-only in protected branches to enforce linear history",
      "Visualize history using git log --graph to understand merge behavior",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "three-way-merge",
    category: "Merge",
    title: "Three Way Merge",
    description:
      "Learn about three-way merges that combine divergent branches by creating a new merge commit.",

    overview:
      "A three-way merge occurs when two branches have diverged and both contain unique commits. Instead of moving a branch pointer forward, Git creates a new merge commit that combines the histories. It is called 'three-way' because Git compares three commits: the two branch tips and their common ancestor (merge base).",

    detailedExplanation: [
      "Three-way merges happen when the current (target) branch and the branch being merged both have new commits since they diverged. Because the histories are no longer linear, Git cannot perform a fast-forward merge.",

      "To complete a three-way merge, Git identifies the merge base (the most recent common ancestor of both branches). It then compares the changes introduced in each branch relative to that common ancestor and attempts to combine them automatically.",

      "If changes affect different parts of the code, Git merges them automatically. However, if the same lines were modified differently in both branches, Git creates a merge conflict that must be resolved manually.",

      "The resulting merge commit has two parent commits — one from each branch. This preserves the complete history and clearly indicates where the branches were joined.",

      "Three-way merges are valuable in collaborative environments because they maintain the context of feature development and make it clear when integration occurred.",
    ],

    codeBlocks: [
      {
        label: "Perform a three-way merge",
        language: "bash",
        code: "git switch main\ngit merge feature-branch\n# Git creates a merge commit",
        explanation:
          "If branches have diverged, Git automatically creates a merge commit.",
      },
      {
        label: "Three-way merge with custom message",
        language: "bash",
        code: 'git merge feature-auth -m "Merge feature: Add user authentication"',
        explanation: "Provide a descriptive message for the merge commit.",
      },
      {
        label: "View only merge commits",
        language: "bash",
        code: "git log --merges",
        explanation:
          "Displays only commits that have multiple parents (merge commits).",
      },
      {
        label: "Inspect a merge commit",
        language: "bash",
        code: "git show <merge-commit-hash>",
        explanation:
          "Shows the merge commit details and its two parent commits.",
      },
      {
        label: "Visualize branch history",
        language: "bash",
        code: "git log --oneline --graph --all",
        explanation:
          "Displays the branching and merge structure in a graphical format.",
      },
    ],

    workflowSteps: [
      "Ensure your working directory is clean",
      "Switch to the target branch (the branch you want to merge INTO)",
      "Run git merge <source-branch>",
      "Resolve conflicts if Git reports any",
      "Commit the merge (if conflicts were resolved manually)",
      "Test the merged changes before pushing",
    ],

    keyTakeaways: [
      "Three-way merge creates a new merge commit",
      "The merge commit has two parent commits",
      "Used when both branches have diverged",
      "Git compares the common ancestor and both branch tips",
      "Conflicts occur when the same lines are modified differently",
    ],

    commonMistakes: [
      "Not understanding why a merge commit was created",
      "Confusing three-way merges with fast-forward merges",
      "Merging without pulling latest changes first",
      "Committing unresolved conflict markers",
    ],

    tips: [
      "Write meaningful merge commit messages describing what was integrated",
      "Use git log --graph to better understand merge structure",
      "Resolve conflicts carefully and test before pushing",
      "Three-way merges are normal and preserve important development history",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "merge-conflicts",
    category: "Merge",
    title: "Merge Conflicts",
    description:
      "Understand merge conflicts that occur when Git can't automatically combine changes from different branches.",

    overview:
      "Merge conflicts occur when Git cannot automatically merge changes from two branches. This usually happens when the same lines of a file are modified differently, or when one branch deletes a file that another branch modifies. Git pauses the merge process and asks you to manually resolve the conflict before continuing.",

    detailedExplanation: [
      "A merge conflict happens when Git detects competing changes that it cannot safely combine. The most common scenario is when both branches modify the same lines in a file differently. Git cannot determine which change should take precedence, so it requires manual intervention.",

      "When a conflict occurs, Git marks the affected files with special conflict markers. These markers clearly show the current branch's changes (HEAD), the incoming branch's changes, and a separator between them. You must manually edit the file to resolve the differences and remove the markers.",

      "Conflicts can also occur when one branch deletes a file that another branch modifies, or when files are renamed differently. In such cases, Git will ask you to decide the correct action.",

      "During a conflict, the repository enters a 'merging' state. You cannot complete the merge or create new commits until all conflicts are resolved or the merge is aborted.",

      "Conflicts are a normal part of collaborative development. They are not errors — they are Git’s way of preventing unintended code loss. Frequent merging reduces the size and complexity of conflicts.",
    ],

    codeBlocks: [
      {
        label: "Merge that results in conflict",
        language: "bash",
        code: "git merge feature-branch\n# CONFLICT (content): Merge conflict in file.js\n# Automatic merge failed; fix conflicts and then commit.",
        explanation:
          "Git reports the files that contain conflicts and pauses the merge.",
      },
      {
        label: "Check repository status",
        language: "bash",
        code: "git status",
        explanation:
          "Shows which files are in conflict (marked as 'both modified').",
      },
      {
        label: "Example conflict markers",
        language: "bash",
        code: "<<<<<<< HEAD\nconst version = 1;\n=======\nconst version = 2;\n>>>>>>> feature-branch",
        explanation:
          "HEAD shows current branch changes, below ======= shows incoming changes.",
      },
      {
        label: "List only conflicted files",
        language: "bash",
        code: "git diff --name-only --diff-filter=U",
        explanation:
          "Displays only files that still contain unresolved conflicts.",
      },
      {
        label: "Abort the merge",
        language: "bash",
        code: "git merge --abort",
        explanation:
          "Cancels the merge and restores the repository to its pre-merge state.",
      },
    ],

    workflowSteps: [
      "Run git merge <branch> and observe conflict message",
      "Run git status to identify conflicted files",
      "Open each conflicted file and locate conflict markers",
      "Decide whether to keep one version or combine both",
      "Remove all conflict markers",
      "Stage resolved files using git add",
      "Complete the merge with git commit",
      "Test the application after resolving conflicts",
    ],

    keyTakeaways: [
      "Conflicts occur when Git cannot automatically combine changes",
      "Conflict markers show competing changes in the file",
      "All conflicts must be resolved before completing the merge",
      "Use git status to track resolution progress",
      "Conflicts are normal in collaborative workflows",
    ],

    commonMistakes: [
      "Committing files with conflict markers still present",
      "Deleting one side without reviewing both changes carefully",
      "Forgetting to stage files after resolving conflicts",
      "Not testing code after resolving conflicts",
      "Panicking instead of methodically resolving conflicts",
    ],

    tips: [
      "Use git mergetool for guided conflict resolution",
      "Merge frequently to reduce conflict size",
      "Communicate with teammates about overlapping changes",
      "Use git log and git diff to understand context before resolving",
    ],

    warnings: [
      "Never commit unresolved conflict markers (<<<<<<<, =======, >>>>>>>)",
      "Always verify functionality after resolving conflicts before pushing",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "solving-conflicts",
    category: "Merge",
    title: "Solving Conflicts",
    description:
      "Master the step-by-step process of resolving merge conflicts and completing successful merges.",

    overview:
      "Resolving merge conflicts is an essential Git skill. When Git cannot automatically combine changes, it pauses the merge process and asks for manual intervention. The resolution process involves identifying conflicted files, understanding both versions of the code, editing carefully, and completing the merge correctly.",

    detailedExplanation: [
      "The first step in resolving conflicts is identifying which files are affected. Running git status shows files marked as 'both modified' under the 'Unmerged paths' section. These files require manual attention.",

      "Inside each conflicted file, Git inserts conflict markers. The section between <<<<<<< HEAD and ======= represents the current branch's version. The section between ======= and >>>>>>> branch-name represents the incoming branch's version. You must decide whether to keep one version, combine both, or rewrite the section entirely.",

      "After editing the file, you must remove ALL conflict markers. Leaving markers in the file will break your code and cause errors. Carefully review the final content to ensure correctness before staging it.",

      "Once a file is resolved, stage it using git add. This tells Git that the conflict for that file has been handled. After all conflicted files are staged, complete the merge with git commit.",

      "Conflict resolution requires careful thinking. Never blindly choose one version without understanding the changes. Testing after resolution is critical to ensure functionality remains intact.",
    ],

    codeBlocks: [
      {
        label: "Step 1: Identify conflicted files",
        language: "bash",
        code: "git status",
        explanation:
          "Look under 'Unmerged paths' to see which files need resolution.",
      },
      {
        label: "Step 2: Locate conflict markers",
        language: "bash",
        code: "<<<<<<< HEAD\nyour code here\n=======\ntheir code here\n>>>>>>> feature-branch",
        explanation:
          "Markers show differences between current and incoming branch.",
      },
      {
        label: "Step 3: Resolve the conflict",
        language: "bash",
        code: "# Edit the file\n# Remove ALL markers\n# Keep the correct combined code",
        explanation:
          "Manually edit the file to produce the final correct version.",
      },
      {
        label: "Step 4: Stage resolved file",
        language: "bash",
        code: "git add path/to/resolved-file.js",
        explanation: "Marks the file as resolved.",
      },
      {
        label: "Step 5: Complete the merge",
        language: "bash",
        code: 'git commit\n# or\ngit commit -m "Merge: Resolved conflicts in authentication module"',
        explanation: "Finalizes the merge after all conflicts are resolved.",
      },
      {
        label: "Use a merge tool",
        language: "bash",
        code: "git mergetool",
        explanation:
          "Opens a configured visual merge tool to simplify conflict resolution.",
      },
      {
        label: "Abort merge if necessary",
        language: "bash",
        code: "git merge --abort",
        explanation:
          "Cancels the merge and restores repository to pre-merge state.",
      },
    ],

    workflowSteps: [
      "Run git status to identify all conflicted files",
      "Open each conflicted file in your editor",
      "Locate conflict markers (<<<<<<<, =======, >>>>>>>)",
      "Understand both versions before making changes",
      "Edit the file and remove ALL conflict markers",
      "Save the file",
      "Stage resolved files using git add",
      "Repeat until all conflicts are resolved",
      "Verify resolution with git status",
      "Complete the merge using git commit",
      "Test your code before pushing",
    ],

    keyTakeaways: [
      "Always remove all conflict markers before committing",
      "Use git status to track unresolved files",
      "Stage each resolved file with git add",
      "Complete merge with git commit after resolving all conflicts",
      "Testing after conflict resolution is critical",
    ],

    commonMistakes: [
      "Committing files with conflict markers still present",
      "Forgetting to stage resolved files",
      "Resolving only one file when multiple conflicts exist",
      "Choosing one version without reviewing both changes",
      "Not testing the application after resolution",
    ],

    tips: [
      "Use git diff to review your final changes before committing",
      "Configure a merge tool with git config merge.tool <tool-name>",
      "Popular merge tools include vimdiff, meld, kdiff3, and VS Code",
      "Merge frequently to keep conflicts small and manageable",
      "Communicate with teammates when unsure about conflicting changes",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "merge-interview-questions",
    category: "Merge",
    title: "Interview Questions",
    description:
      "Common interview questions covering Git merge concepts, conflicts, strategies, and best practices.",

    overview:
      "This section contains frequently asked interview questions about Git merging. It covers fast-forward merges, three-way merges, conflict resolution, merge strategies, and practical decision-making in collaborative workflows.",

    detailedExplanation: [
      "Interviewers often test your understanding of how Git integrates branches. You should clearly explain the difference between fast-forward merges and three-way merges, and when each occurs.",

      "You should understand what a merge commit is, how Git determines the merge base, and why conflicts occur. Being able to explain conflict markers and resolution steps is important.",

      "You may also be asked about merge strategies such as recursive (ort), squash merge, and no-fast-forward merges. Knowing when to use each shows real-world experience.",

      "Practical questions may involve resolving conflicts, maintaining clean history, or choosing between merge and rebase in team environments.",
    ],

    keyTakeaways: [
      "Understand difference between fast-forward and three-way merges",
      "Know how Git finds the merge base",
      "Be able to explain and resolve merge conflicts",
      "Understand merge commit structure (two parents)",
      "Know when to use --no-ff, --ff-only, and squash merges",
    ],

    commonMistakes: [
      "Confusing merge with rebase",
      "Not understanding why a merge commit was created",
      "Failing to explain conflict markers clearly",
      "Ignoring practical workflow scenarios in answers",
    ],

    interviewQuestions: [
      "What is a merge in Git?",
      "What is the difference between fast-forward and three-way merge?",
      "When does Git create a merge commit?",
      "What is a merge base?",
      "How does Git perform a three-way merge?",
      "What causes merge conflicts?",
      "How do you resolve a merge conflict step-by-step?",
      "What do conflict markers (<<<<<<<, =======, >>>>>>>) represent?",
      "What is the difference between git merge --no-ff and default merge?",
      "What does git merge --ff-only do?",
      "How can you abort a merge?",
      "What is a squash merge?",
      "What is the difference between merge and rebase?",
      "How do you view merge commits in history?",
      "Why might a team enforce --no-ff merges?",
    ],

    lastUpdated: "2026-02-14",
  },

  // ===== REBASE =====
  {
    id: "what-is-rebase",
    category: "Rebase",
    title: "What is Rebase",
    description:
      "Learn how rebasing moves commits to a new base, creating a linear history alternative to merging.",

    overview:
      "Rebasing is the process of moving a sequence of commits to a new base commit. Instead of preserving branch structure like a merge does, rebase rewrites commit history to create a clean, linear progression of changes. It is powerful for maintaining tidy history but must be used carefully.",

    detailedExplanation: [
      "When you run git rebase, Git temporarily removes the commits from your current branch, updates your branch to match the target branch, and then reapplies (replays) your commits one by one on top of the new base. The result looks as if your work started from the latest commit of the target branch.",

      "Rebasing creates entirely new commits with new SHA hashes. Even though the changes may be identical, the parent commit is different, so Git treats them as new commits. This is why rebase is considered history rewriting.",

      "Because rebase rewrites history, it should not be used on public branches that others depend on. Rebasing shared commits can force collaborators to reconcile duplicated or rewritten history, causing confusion and conflicts.",

      "Rebasing is commonly used to keep feature branches up to date with the main branch. Instead of repeatedly merging main into your feature branch (which creates merge commits), you can rebase your feature branch onto main to maintain a clean, linear history.",

      "Interactive rebase allows you to modify commit history intentionally — for example, squashing multiple commits into one, editing commit messages, or reordering commits before pushing.",
    ],

    codeBlocks: [
      {
        label: "Basic rebase onto main",
        language: "bash",
        code: "git switch feature-branch\ngit rebase main",
        explanation: "Replays feature branch commits on top of main.",
      },
      {
        label: "Handling conflicts during rebase",
        language: "bash",
        code: "git rebase main\n# Resolve conflicts\n# git add resolved-files\n# git rebase --continue",
        explanation:
          "Resolve conflicts, stage changes, then continue rebasing.",
      },
      {
        label: "Abort a rebase",
        language: "bash",
        code: "git rebase --abort",
        explanation:
          "Cancels the rebase and restores the branch to its original state.",
      },
      {
        label: "Interactive rebase",
        language: "bash",
        code: "git rebase -i HEAD~3",
        explanation:
          "Interactively modify the last 3 commits (squash, reword, reorder).",
      },
      {
        label: "Rebase onto specific commit",
        language: "bash",
        code: "git rebase <commit-hash>",
        explanation: "Replays current branch commits onto a specific commit.",
      },
    ],

    workflowSteps: [
      "Switch to the branch you want to rebase",
      "Run git rebase <target-branch>",
      "If conflicts occur, resolve them manually",
      "Stage resolved files with git add",
      "Run git rebase --continue",
      "Repeat until rebase completes",
      "Test your code after rebasing",
    ],

    keyTakeaways: [
      "Rebase replays commits onto a new base",
      "Rebasing rewrites commit history and creates new SHAs",
      "Use rebase to maintain clean, linear history",
      "Never rebase commits that others depend on",
      "Interactive rebase allows history cleanup before pushing",
    ],

    commonMistakes: [
      "Rebasing shared or public branches",
      "Not understanding that rebase creates new commit hashes",
      "Force pushing without understanding consequences",
      "Abandoning rebase when conflicts occur instead of resolving them",
      "Using rebase when merge would be safer in team workflows",
    ],

    tips: [
      "Use rebase to clean up local commits before pushing",
      "When collaborating, prefer merge if unsure",
      "Use interactive rebase to squash or edit commits",
      "Use git rebase --abort if something goes wrong",
    ],

    warnings: [
      "Do NOT rebase commits that have been pushed to shared branches",
      "Rebasing rewrites history and may require force pushing",
      "Force pushing after rebase can overwrite remote history if not careful",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "merge-vs-rebase",
    category: "Rebase",
    title: "Merge vs Rebase",
    description:
      "Compare merging and rebasing to understand when to use each approach for integrating changes.",

    overview:
      "Both merge and rebase integrate changes from one branch into another, but they do so differently. Merging preserves the true development history by creating a merge commit, while rebasing rewrites history to produce a clean, linear sequence of commits. Choosing the right approach depends on your workflow and collaboration needs.",

    detailedExplanation: [
      "Merging combines two branches by creating a new merge commit that has two parent commits. This preserves the exact historical timeline, including when branches diverged and when they were merged back together. The result is a non-linear history that accurately reflects collaboration.",

      "Rebasing, in contrast, rewrites history. It moves commits from one branch and reapplies them on top of another branch. This eliminates merge commits and creates a linear commit history. However, each rebased commit receives a new SHA because its parent changes.",

      "The key difference lies in history preservation versus history rewriting. Merge keeps history intact and is safe for shared branches. Rebase modifies commit history and should only be used on private or local branches.",

      "From a collaboration perspective, merging is safer in team environments because it does not alter existing commits. Rebasing shared commits requires force pushing and can disrupt teammates' work if not handled carefully.",

      "Many professional workflows combine both approaches: developers rebase their local feature branches to keep them up to date with main, then merge the completed feature branch into main using a merge commit to preserve feature boundaries.",
    ],

    codeBlocks: [
      {
        label: "Merge example",
        language: "bash",
        code: "git switch main\ngit merge feature-branch",
        explanation: "Creates a merge commit that preserves branch structure.",
      },
      {
        label: "Rebase example",
        language: "bash",
        code: "git switch feature-branch\ngit rebase main",
        explanation:
          "Replays feature commits on top of main, creating linear history.",
      },
      {
        label: "Visualize merge history",
        language: "bash",
        code: "git log --oneline --graph --all",
        explanation: "Shows non-linear history with merge commits.",
      },
      {
        label: "Pull with rebase",
        language: "bash",
        code: "git pull --rebase",
        explanation:
          "Fetches changes and rebases your local commits on top of remote branch.",
      },
    ],

    workflowSteps: [
      "Use merge when working on shared/public branches",
      "Use rebase to update private feature branches",
      "Avoid rebasing commits already pushed to shared repositories",
      "Test thoroughly after either merge or rebase",
      "Push changes carefully (force push only when absolutely necessary)",
    ],

    keyTakeaways: [
      "Merge preserves complete branch history",
      "Rebase rewrites history to create linear progression",
      "Merge is safe for shared branches",
      "Rebase should only be used on private commits",
      "Many teams rebase locally and merge into main",
    ],

    commonMistakes: [
      "Rebasing shared branches and disrupting collaborators",
      "Using merge excessively and creating cluttered history",
      "Not understanding that rebase creates new commit SHAs",
      "Force pushing without understanding consequences",
    ],

    tips: [
      "When unsure, prefer merge (safer option)",
      "Rebase local branches to keep history clean",
      "Use --no-ff merge to preserve feature boundaries",
      "Discuss team conventions before choosing a workflow",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "interactive-rebase",
    category: "Rebase",
    title: "Interactive Rebase",
    description:
      "Clean up your commit history by squashing, rewording, editing, reordering, or removing commits.",
    overview:
      "Interactive rebase (git rebase -i) is a powerful Git feature used to rewrite and polish commit history before sharing it. It opens an editor listing selected commits and allows you to modify how they appear in history. This helps create clean, meaningful, and professional commit logs.",
    detailedExplanation: [
      "Running 'git rebase -i <base>' opens a list of commits in your default editor. Each commit can be modified using specific commands like pick, reword, edit, squash, fixup, or drop.",
      "The 'pick' command keeps a commit unchanged. 'reword' allows editing only the commit message. 'edit' pauses the rebase to let you modify the commit content using 'git commit --amend'.",
      "'squash' combines a commit with the previous one and allows you to edit the combined commit message. 'fixup' also combines commits but discards the second commit’s message.",
      "'drop' removes a commit completely from history. You can also reorder commits simply by rearranging lines in the editor.",
      "Because interactive rebase rewrites history and creates new commit SHAs, it must only be used on local or private branches. Never rebase commits that have already been pushed to shared branches.",
    ],
    codeBlocks: [
      {
        label: "Start interactive rebase (last 3 commits)",
        language: "bash",
        code: "git rebase -i HEAD~3",
        explanation:
          "Opens an editor showing the last 3 commits for modification",
      },
      {
        label: "Squash commits (in editor)",
        language: "bash",
        code: "pick 12345 Implement feature part 1\nsquash 67890 WIP part 2\nsquash abcde Fix typo",
        explanation:
          "Combines multiple commits into one and lets you edit the final message",
      },
      {
        label: "Reword a commit message",
        language: "bash",
        code: "reword 12345 Fix authentication bug",
        explanation: "Changes only the commit message",
      },
      {
        label: "Edit a previous commit",
        language: "bash",
        code: "edit 12345 Forgot to add file\n# After pause\ngit add missing-file.js\ngit commit --amend\ngit rebase --continue",
        explanation: "Pauses rebase to modify commit content",
      },
      {
        label: "Abort rebase if needed",
        language: "bash",
        code: "git rebase --abort",
        explanation: "Cancels the rebase and restores original state",
      },
    ],
    keyTakeaways: [
      "Interactive rebase is used to rewrite and clean commit history",
      "Use squash or fixup to combine small WIP commits",
      "Use reword to improve commit messages",
      "Only use on private/local branches",
      "Always verify history with git log after rebasing",
    ],
    commonMistakes: [
      "Rebasing commits that were already pushed to a shared branch",
      "Accidentally dropping commits during reordering",
      "Forgetting to run 'git rebase --continue' after resolving conflicts",
      "Not checking final history before pushing",
    ],
    tips: [
      "Use 'fixup' when you don’t want to edit commit messages",
      "Use 'git log --oneline' before rebasing to plan changes",
      "Configure a comfortable Git editor (VS Code, Nano, Vim)",
      "Use 'git push --force-with-lease' (not --force) after rebasing pushed commits",
    ],
  },
  {
    id: "cherry-pick",
    category: "Rebase",
    title: "Cherry Pick",
    description:
      "Select specific commits from one branch and apply them to another.",
    overview:
      "Cherry-picking allows you to pick a single commit (or a few) from a different branch and apply it to your current branch. This is useful for apply hotfixes to multiple branches (e.g., v1.0 and v2.0) or retrieving a specific change without merging the whole branch.",
    detailedExplanation: [
      "Command: `git cherry-pick <commit-sha>`",
      "This copies the changes from that commit and creates a NEW commit with a new SHA on your current branch. It introduces the same change but is technically a different commit object.",
      "Useful for 'Backporting': fixing a bug in 'main' and cherry-picking that fix into a 'release-v1' branch.",
    ],
    codeBlocks: [
      {
        label: "Cherry pick a single commit",
        language: "bash",
        code: "git cherry-pick abc1234",
        explanation: "Applies commit abc1234 to current branch",
      },
      {
        label: "Cherry pick multiple commits",
        language: "bash",
        code: "git cherry-pick abc1234 def5678",
        explanation: "Applies multiple commits in order",
      },
      {
        label: "Resolve conflicts",
        language: "bash",
        code: "git cherry-pick --continue\n# or\ngit cherry-pick --abort",
        explanation: "Standard conflict resolution workflow",
      },
    ],
    keyTakeaways: [
      "Selective merging of specific commits",
      "Creates new commits (duplicate capability, different SHA)",
      "Great for hotfixes and backporting",
      "Can cause duplicate commit noise if branches are later merged",
    ],
    commonMistakes: [
      "Cherry-picking commits that are eventually going to be merged anyway",
      "Cherry-picking a commit but forgetting its dependencies",
      "Confusing cherry-pick with merge",
    ],
    tips: [
      "Use -x flag (`git cherry-pick -x`) to append 'cherry picked from commit...' to message",
      "Don't cherry-pick if you can merge",
      "Great for undoing a mistake: cherry-pick the reverting commit",
    ],
  },
  {
    id: "rebase-interview-questions",
    category: "Rebase",
    title: "Interview Questions",
    description:
      "Common interview questions covering Git rebase concepts, history rewriting, conflicts, and best practices.",

    overview:
      "This section contains frequently asked interview questions about Git rebase. It covers standard rebase operations, interactive rebase, conflict handling, history rewriting risks, and real-world workflow decisions in collaborative environments.",

    detailedExplanation: [
      "Interviewers often test your understanding of how rebase integrates changes by replaying commits onto a new base. You should clearly explain how rebase differs from merge in terms of history structure.",

      "You should understand why rebasing rewrites commit history and changes commit SHAs. Explaining the internal concept of replaying commits demonstrates deeper Git knowledge.",

      "You may be asked about interactive rebase and how it is used to squash, reword, reorder, or drop commits before merging a feature branch.",

      "Practical questions often focus on handling conflicts during rebase, when to use git pull --rebase, and the risks of rebasing shared branches in team workflows.",
    ],

    keyTakeaways: [
      "Rebase replays commits onto a new base to create linear history",
      "Rebasing rewrites history and changes commit SHAs",
      "Never rebase shared/public branches",
      "Interactive rebase is used to clean up commits before merging",
      "Understanding merge vs rebase is essential in interviews",
    ],

    commonMistakes: [
      "Confusing rebase with merge",
      "Saying rebase deletes commits instead of rewriting them",
      "Not explaining why SHAs change after rebase",
      "Rebasing public branches in collaborative workflows",
      "Not knowing how to continue or abort a conflicted rebase",
    ],

    interviewQuestions: [
      "What is git rebase?",
      "How is git rebase different from git merge?",
      "What happens internally when you run git rebase main?",
      "Why does rebasing change commit SHAs?",
      "When should you use rebase instead of merge?",
      "Why is rebasing shared branches dangerous?",
      "What is interactive rebase?",
      "What is the difference between squash and fixup?",
      "How do you resolve conflicts during a rebase?",
      "How do you abort an ongoing rebase?",
      "What is the difference between git pull and git pull --rebase?",
      "What is the golden rule of rebasing?",
      "What does git rebase --onto do?",
      "When would you use rebase in a team workflow?",
      "What is force push and why is --force-with-lease safer after rebase?",
    ],

    lastUpdated: "2026-02-14",
  },

  // ===== STASH =====
  {
    id: "git-stash",
    category: "Stash",
    title: "git stash",
    description:
      "Temporarily save uncommitted changes to switch contexts without committing incomplete work.",

    overview:
      "The git stash command temporarily saves your uncommitted changes (staged and unstaged) and restores your working directory to match the latest commit (HEAD). This allows you to switch branches or pull updates without committing unfinished work.",

    detailedExplanation: [
      "Stashing saves your modified tracked files and staged changes onto a stack. After stashing, your working directory becomes clean, matching the latest commit. You can later reapply the saved changes when you're ready to continue.",

      "Each stash entry is stored locally in your repository and is not pushed to remote. Internally, Git creates a special commit object representing your working directory and index state at the time of stashing.",

      "By default, git stash only saves tracked files. Untracked files require the -u or --include-untracked flag, and ignored files require -a or --all.",

      "Stashing is useful when you need to quickly switch context, fix urgent bugs, review code, or pull changes without committing incomplete or messy work.",

      "You can apply a stash without removing it (git stash apply) or apply and remove it from the stash stack (git stash pop).",
    ],

    codeBlocks: [
      {
        label: "Stash current changes",
        language: "bash",
        code: "git stash",
        explanation: "Saves tracked changes and cleans working directory",
      },
      {
        label: "Stash with descriptive message",
        language: "bash",
        code: "git stash push -m 'WIP: implementing login feature'",
        explanation: "Modern syntax for stashing with a message",
      },
      {
        label: "Include untracked files",
        language: "bash",
        code: "git stash -u\n# or\ngit stash --include-untracked",
        explanation: "Stashes tracked and untracked files",
      },
      {
        label: "List stashes",
        language: "bash",
        code: "git stash list",
        explanation: "Displays all saved stashes with index references",
      },
      {
        label: "View stash details",
        language: "bash",
        code: "git stash show -p stash@{0}",
        explanation: "Shows detailed diff of a specific stash",
      },
      {
        label: "Apply a stash",
        language: "bash",
        code: "git stash apply stash@{0}",
        explanation: "Reapplies stash without removing it from the stack",
      },
      {
        label: "Pop a stash",
        language: "bash",
        code: "git stash pop",
        explanation: "Applies latest stash and removes it from the stack",
      },
      {
        label: "Drop a stash",
        language: "bash",
        code: "git stash drop stash@{0}",
        explanation: "Deletes a specific stash entry",
      },
    ],

    workflowSteps: [
      "Make changes but do not commit",
      "Need to switch branches or pull updates",
      "Run git stash to temporarily save changes",
      "Switch branch or perform other tasks",
      "Return and reapply changes using git stash pop or git stash apply",
    ],

    keyTakeaways: [
      "git stash temporarily saves uncommitted changes",
      "Stashes are stored locally and not pushed to remote",
      "Multiple stashes are stored in a stack structure",
      "By default, only tracked files are stashed",
      "Use pop to apply and remove, apply to keep stash",
    ],

    commonMistakes: [
      "Forgetting about stashed changes",
      "Not using descriptive messages for multiple stashes",
      "Expecting untracked files to be stashed automatically",
      "Using stash instead of committing properly structured work",
      "Confusing git stash apply with git stash pop",
    ],

    tips: [
      "Use descriptive messages with git stash push -m",
      "Use git stash list regularly to track saved work",
      "Clear unused stashes with git stash clear",
      "Prefer committing logical work instead of relying heavily on stash",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "apply-stash",
    category: "Stash",
    title: "Apply Stash",
    description:
      "Retrieve stashed changes and apply them back to your working directory.",

    overview:
      "Applying a stash restores previously saved changes into your current working directory. You can either keep the stash entry after applying it (apply) or remove it automatically (pop). Stashes can be applied to the same branch or a completely different branch.",

    detailedExplanation: [
      "The most commonly used command is 'git stash pop'. It applies the latest stash and removes it from the stash stack if the operation succeeds. This effectively moves the saved changes back into your working directory.",

      "'git stash apply' is a safer alternative. It applies the stash but keeps it in the stash list, allowing you to reuse it or retry in case conflicts occur.",

      "You can apply a specific stash by referencing its index (e.g., 'stash@{2}'). Git will attempt to merge the stashed changes with your current working directory. If conflicts occur, they must be resolved manually just like merge conflicts.",

      "By default, applying a stash restores file changes but not their staged/unstaged state. Use the '--index' option to restore the exact index state as it was when the stash was created.",

      "If applying a stash becomes complex due to conflicts, you can create a new branch directly from the stash using 'git stash branch <branch-name>'.",
    ],

    codeBlocks: [
      {
        label: "Pop latest stash (apply and remove)",
        language: "bash",
        code: "git stash pop",
        explanation:
          "Applies the most recent stash and removes it from the stash list",
      },
      {
        label: "Apply latest stash (keep in list)",
        language: "bash",
        code: "git stash apply",
        explanation: "Applies the most recent stash but keeps it saved",
      },
      {
        label: "Apply specific stash",
        language: "bash",
        code: "git stash apply stash@{2}",
        explanation: "Applies a specific stash by its index number",
      },
      {
        label: "Restore staged state",
        language: "bash",
        code: "git stash apply --index",
        explanation: "Restores files along with their staged/unstaged state",
      },
      {
        label: "Create branch from stash",
        language: "bash",
        code: "git stash branch new-feature stash@{0}",
        explanation:
          "Creates a new branch and applies the selected stash to it",
      },
    ],

    keyTakeaways: [
      "pop = apply + drop (removes stash after applying)",
      "apply keeps the stash entry (safer option)",
      "Stashes can be applied to any branch",
      "Conflicts may occur during stash application",
      "Use --index to restore original staged state",
    ],

    commonMistakes: [
      "Using pop and losing the stash reference during complex conflict resolution",
      "Applying stash to the wrong branch",
      "Forgetting that stash indices change after pop or drop",
      "Not checking stash contents before applying",
    ],

    tips: [
      "Use 'git stash apply' if you may need the stash again",
      "Run 'git stash list' before applying to confirm the correct stash",
      "Use 'git stash show -p stash@{n}' to inspect changes before applying",
      "Use 'git stash branch' if conflicts are difficult to resolve manually",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "manage-stash",
    category: "Stash",
    title: "Manage Stash",
    description:
      "Organize, inspect, and clean up your stack of stashed changes effectively.",

    overview:
      "As you work, you may accumulate multiple stashes. Git provides commands to list, inspect, drop, or clear stashes. Proper stash management prevents confusion and helps maintain a clean and organized workflow.",

    detailedExplanation: [
      "Git stores stashes in a stack (Last-In, First-Out). The most recent stash is always 'stash@{0}'. When new stashes are created or old ones are removed, the index numbers shift automatically.",

      "You can view all stashes using 'git stash list'. Each entry shows its index, branch reference, and message. Using descriptive messages when stashing makes identification much easier later.",

      "To inspect stash content without applying it, use 'git stash show -p stash@{n}'. This displays the full diff, allowing you to confirm what changes are stored.",

      "You can delete a specific stash using 'git stash drop stash@{n}'. To remove all stashes permanently, use 'git stash clear'. This action cannot be undone, so it should be used carefully.",

      "If you want to resume work cleanly from a stash, use 'git stash branch <branch-name> stash@{n}'. This creates a new branch from the commit where the stash was created and applies the stash automatically.",
    ],

    codeBlocks: [
      {
        label: "List all stashes",
        language: "bash",
        code: "git stash list",
        explanation: "Displays all stash entries with their indices",
      },
      {
        label: "Show stash diff",
        language: "bash",
        code: "git stash show -p stash@{0}",
        explanation: "Inspect stash content without applying it",
      },
      {
        label: "Drop specific stash",
        language: "bash",
        code: "git stash drop stash@{1}",
        explanation: "Permanently deletes the specified stash",
      },
      {
        label: "Clear all stashes",
        language: "bash",
        code: "git stash clear",
        explanation: "Permanently deletes ALL stashes (irreversible)",
      },
      {
        label: "Create branch from stash",
        language: "bash",
        code: "git stash branch fix/login-page stash@{0}",
        explanation: "Creates a new branch and applies the selected stash",
      },
    ],

    keyTakeaways: [
      "Stashes are stored in a LIFO stack structure",
      "stash@{0} always refers to the most recent stash",
      "Indices shift when stashes are added or removed",
      "git stash clear permanently removes all stashes",
      "git stash branch is useful for isolating complex stashes",
    ],

    commonMistakes: [
      "Accumulating too many unnamed stashes",
      "Dropping the wrong stash without checking contents",
      "Using git stash clear accidentally",
      "Not inspecting stash content before applying",
    ],

    tips: [
      "Use descriptive messages when creating stashes",
      "Run git stash list regularly to stay organized",
      "Inspect with git stash show -p before applying",
      "Prefer creating a branch from stash for large or complex changes",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "stash-interview-questions",
    category: "Stash",
    title: "Interview Questions",
    description:
      "Common interview questions covering Git stash concepts, usage scenarios, conflict handling, and best practices.",

    overview:
      "This section contains frequently asked interview questions about Git stash. It covers how stash works internally, when to use it, how to apply or manage stashes, and practical decision-making scenarios in real-world development workflows.",

    detailedExplanation: [
      "Interviewers often test your understanding of what git stash does and when it should be used instead of committing changes.",

      "You should understand that stash temporarily saves uncommitted tracked changes locally and restores the working directory to match the latest commit.",

      "You may be asked about the difference between 'git stash apply' and 'git stash pop', how to include untracked files, and how stash indices work.",

      "Practical questions often involve resolving conflicts during stash application, creating branches from stashes, or managing multiple stashes effectively.",
    ],

    keyTakeaways: [
      "git stash temporarily saves uncommitted changes",
      "Stashes are stored locally and are not pushed to remote",
      "pop applies and removes the stash, apply keeps it",
      "By default, only tracked files are stashed",
      "Stash is useful for quick context switching",
    ],

    commonMistakes: [
      "Using stash instead of making proper commits",
      "Forgetting about saved stashes",
      "Not understanding the difference between apply and pop",
      "Expecting untracked files to be stashed automatically",
      "Applying stash to the wrong branch without checking",
    ],

    interviewQuestions: [
      "What is git stash and why is it used?",
      "What does git stash do internally?",
      "What is the difference between git stash apply and git stash pop?",
      "How do you stash untracked files?",
      "How can you view the contents of a stash?",
      "How do you apply a specific stash?",
      "What happens if conflicts occur during stash pop?",
      "How do you delete a specific stash?",
      "What does git stash clear do?",
      "How do stash indices (stash@{0}, stash@{1}) work?",
      "Can you apply a stash to a different branch?",
      "What is git stash branch and when would you use it?",
      "Is stash shared with remote repositories?",
      "When should you commit instead of using stash?",
      "What are common risks of overusing stash?",
    ],

    lastUpdated: "2026-02-14",
  },

  // ===== TAGGING =====
  {
    id: "lightweight-tags",
    category: "Tagging",
    title: "Lightweight Tags",
    description:
      "Create simple bookmarks that point to specific commits in history.",

    overview:
      "Lightweight tags are the simplest type of Git tag. They act as a static pointer to a specific commit, similar to a branch that does not move. They are commonly used for temporary markers, quick references, or private bookmarks in development history.",

    detailedExplanation: [
      "A lightweight tag is simply a reference that points directly to a commit SHA. It does not store additional metadata such as the tagger’s name, email, date, or a tagging message.",

      "Because they contain no extra information, lightweight tags are fast to create and take up virtually no additional space. They are essentially just named pointers inside the .git/refs/tags directory.",

      "Lightweight tags are typically used for local or temporary milestones. For official releases or versioning, annotated tags are preferred because they include metadata and can be signed.",

      "Tags do not move automatically like branches. Once created, a tag always points to the same commit unless explicitly deleted and recreated.",
    ],

    codeBlocks: [
      {
        label: "Create lightweight tag",
        language: "bash",
        code: "git tag v1.0-beta",
        explanation: "Creates a lightweight tag for the current commit",
      },
      {
        label: "Tag specific commit",
        language: "bash",
        code: "git tag quick-fix abc1234",
        explanation: "Creates a tag pointing to a specific commit SHA",
      },
      {
        label: "List all tags",
        language: "bash",
        code: "git tag",
        explanation: "Displays all tags in the repository",
      },
      {
        label: "Delete local tag",
        language: "bash",
        code: "git tag -d v1.0-beta",
        explanation: "Removes the specified tag locally",
      },
      {
        label: "Push specific tag",
        language: "bash",
        code: "git push origin v1.0-beta",
        explanation: "Pushes a tag to the remote repository",
      },
    ],

    keyTakeaways: [
      "Lightweight tags are simple pointers to commits",
      "They do not store metadata (author, date, message)",
      "They behave like branches that do not move",
      "Best for temporary or local markers",
      "Tags must be pushed explicitly to remote",
    ],

    commonMistakes: [
      "Using lightweight tags for official releases instead of annotated tags",
      "Assuming tags move like branches",
      "Forgetting that tags are not pushed automatically",
      "Confusing lightweight tags with annotated tags",
    ],

    tips: [
      "Use lightweight tags for quick local references",
      "Use annotated tags for releases and versioning",
      "Push tags explicitly using git push origin <tag-name>",
      "Use descriptive naming conventions like v1.0.0-beta",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "annotated-tags",
    category: "Tagging",
    title: "Annotated Tags",
    description:
      "Create full-featured tags with metadata for official releases and milestones.",

    overview:
      "Annotated tags are stored as full objects in the Git database. They include the tagger's name, email, date, and a tagging message. They can also be GPG signed for verification. Annotated tags are the recommended choice for public releases and permanent version markers.",

    detailedExplanation: [
      "When you create an annotated tag using the -a flag, Git creates a separate tag object that contains metadata and a message. You can provide the message inline with -m or allow Git to open your editor.",

      "Annotated tags record who created the tag and when, which is different from the original commit author. This makes them ideal for release tracking and auditing.",

      "You can sign annotated tags using GPG with the -s flag. Signed tags allow others to verify the authenticity and integrity of a release.",

      "Because annotated tags are full objects, they are more suitable for production releases, versioning, and long-term milestones compared to lightweight tags.",
    ],

    codeBlocks: [
      {
        label: "Create annotated tag",
        language: "bash",
        code: "git tag -a v1.0.0 -m 'Official Release 1.0.0'",
        explanation: "Creates annotated tag with message and metadata",
      },
      {
        label: "Create signed tag",
        language: "bash",
        code: "git tag -s v1.0.0 -m 'Signed release'",
        explanation: "Creates GPG-signed annotated tag",
      },
      {
        label: "View tag details",
        language: "bash",
        code: "git show v1.0.0",
        explanation: "Displays tag metadata, message, and referenced commit",
      },
      {
        label: "Push tags",
        language: "bash",
        code: "git push origin v1.0.0\n# or push all tags\ngit push origin --tags",
        explanation: "Pushes tags to remote repository",
      },
    ],

    keyTakeaways: [
      "Annotated tags store metadata (who, when, message)",
      "Recommended for official releases",
      "Can be GPG signed for security",
      "Stored as full objects in Git database",
      "Must be pushed explicitly to remote",
    ],

    commonMistakes: [
      "Forgetting -a or -m and accidentally creating lightweight tag",
      "Not pushing tags to remote",
      "Rewriting or deleting release tags after publishing",
    ],

    tips: [
      "Always use annotated tags for production releases",
      "Follow consistent naming like v1.0.0",
      "Write meaningful release messages",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "versioning-strategy",
    category: "Tagging",
    title: "Versioning Strategy",
    description:
      "Use Semantic Versioning (SemVer) to communicate the impact of changes clearly.",

    overview:
      "A versioning strategy such as Semantic Versioning (SemVer) helps users understand the significance of updates. SemVer uses the format MAJOR.MINOR.PATCH (e.g., 2.1.4) to indicate breaking changes, new features, and bug fixes in a predictable way.",

    detailedExplanation: [
      "MAJOR version increments (1.0.0 → 2.0.0) indicate breaking changes that are not backward-compatible.",

      "MINOR version increments (1.1.0 → 1.2.0) indicate backward-compatible new features.",

      "PATCH version increments (1.1.1 → 1.1.2) indicate backward-compatible bug fixes.",

      "Using Git tags to represent these versions creates a clear and traceable history of releases.",

      "Dependency managers and automation tools rely heavily on consistent versioning to determine upgrade safety.",
    ],

    codeBlocks: [
      {
        label: "Semantic Versioning format",
        language: "text",
        code: "v<Major>.<Minor>.<Patch>\n\nv1.0.0  -> Initial Release\nv1.0.1  -> Bug fix\nv1.1.0  -> New feature\nv2.0.0  -> Breaking change",
        explanation: "Standard SemVer format",
      },
      {
        label: "Search tags by pattern",
        language: "bash",
        code: "git tag -l 'v1.1.*'",
        explanation: "Lists all patch releases for version 1.1",
      },
      {
        label: "Sort tags by version",
        language: "bash",
        code: "git tag --sort=-v:refname",
        explanation: "Sorts tags by version number descending",
      },
    ],

    keyTakeaways: [
      "SemVer format is MAJOR.MINOR.PATCH",
      "Breaking changes require MAJOR version bump",
      "New backward-compatible features require MINOR bump",
      "Bug fixes require PATCH bump",
      "Consistent versioning builds trust and predictability",
    ],

    commonMistakes: [
      "Introducing breaking changes in minor or patch versions",
      "Inconsistent tag naming conventions",
      "Reusing or modifying version tags after release",
    ],

    tips: [
      "Use consistent prefix like v1.0.0",
      "Automate tagging via CI/CD pipelines",
      "Maintain a CHANGELOG.md aligned with tags",
    ],

    lastUpdated: "2026-02-14",
  },
  {
    id: "tagging-interview-questions",
    category: "Tagging",
    title: "Interview Questions",
    description:
      "Common interview questions covering Git tagging, releases, and versioning strategies.",

    overview:
      "This section contains frequently asked interview questions about Git tagging. It covers lightweight vs annotated tags, release workflows, versioning strategies, and practical usage scenarios in collaborative environments.",

    detailedExplanation: [
      "Interviewers often test your understanding of the difference between lightweight and annotated tags and when to use each.",

      "You should understand how tags differ from branches and how they are used for marking releases.",

      "Questions may include pushing tags, deleting tags, signing tags, and implementing Semantic Versioning in real-world projects.",

      "Advanced questions may involve release management strategies and tag immutability best practices.",
    ],

    keyTakeaways: [
      "Tags mark specific commits permanently",
      "Annotated tags store metadata and are preferred for releases",
      "Tags do not move like branches",
      "Tags must be pushed explicitly",
      "Versioning strategy is critical for release management",
    ],

    commonMistakes: [
      "Confusing tags with branches",
      "Using lightweight tags for official releases",
      "Forgetting to push tags to remote",
      "Rewriting published version tags",
    ],

    interviewQuestions: [
      "What is a tag in Git?",
      "What is the difference between lightweight and annotated tags?",
      "How do you create an annotated tag?",
      "How do you push tags to a remote repository?",
      "Are tags pushed automatically with git push?",
      "How do you delete a tag locally and remotely?",
      "What is Semantic Versioning?",
      "When should you bump major vs minor vs patch?",
      "Can tags move like branches?",
      "What is a signed tag and why is it important?",
      "How do you list tags matching a pattern?",
      "How do you checkout a tag and what state does it create?",
      "Why should release tags not be modified after publishing?",
      "How do dependency managers use version tags?",
    ],

    lastUpdated: "2026-02-14",
  },

  // ===== RESET, REVERT & ROLLBACK =====
  {
    id: "git-reset",
    category: "Reset, Revert & Rollback",
    title: "git reset (soft, mixed, hard)",
    description:
      "Master git reset to undo commits and changes with three different modes: soft, mixed, and hard.",
    overview:
      "The git reset command moves the current branch pointer to a different commit, effectively undoing commits. It has three modes (--soft, --mixed, --hard) that determine what happens to your changes. Understanding these modes is crucial because reset can permanently delete work if used incorrectly.",
    detailedExplanation: [
      "git reset --soft moves the branch pointer but keeps all changes staged. This is great for combining multiple commits into one - you can reset back a few commits, and all those changes will be staged and ready to commit as a single commit.",
      "git reset --mixed (the default) moves the branch pointer and unstages changes, but keeps them in your working directory. This is useful when you want to redo commits or reorganize what goes into each commit. Your changes aren't lost, just unstaged.",
      "git reset --hard moves the branch pointer and discards all changes, resetting your working directory to match the target commit. This is dangerous because uncommitted work is lost permanently. Only use when you're absolutely sure you want to discard changes.",
      "Reset only affects the current branch - it doesn't delete commits from Git's database immediately. Commits become unreachable and can be recovered using reflog, but they'll eventually be garbage collected.",
    ],
    codeBlocks: [
      {
        label: "Soft reset (keep changes staged)",
        language: "bash",
        code: "git reset --soft HEAD~1\n# Undo last commit, changes stay staged",
        explanation: "Move branch back but keep all changes staged",
      },
      {
        label: "Mixed reset (default - unstage changes)",
        language: "bash",
        code: "git reset HEAD~1\n# or\ngit reset --mixed HEAD~1\n# Undo last commit, changes unstaged but in working directory",
        explanation: "Move branch back and unstage, but keep changes",
      },
      {
        label: "Hard reset (discard changes)",
        language: "bash",
        code: "git reset --hard HEAD~1\n# Undo last commit and DISCARD all changes",
        explanation: "Move branch back and delete all changes (DANGEROUS!)",
      },
      {
        label: "Reset to specific commit",
        language: "bash",
        code: "git reset --hard abc1234",
        explanation: "Reset branch to commit abc1234",
      },
      {
        label: "Reset single file",
        language: "bash",
        code: "git reset HEAD file.txt\n# Unstage file.txt",
        explanation: "Unstage a specific file without affecting branch",
      },
      {
        label: "Undo a reset (using reflog)",
        language: "bash",
        code: "git reflog\n# Find commit before reset\ngit reset --hard HEAD@{1}",
        explanation: "Recover from accidental reset using reflog",
      },
    ],
    workflowSteps: [
      "Decide which mode you need: soft, mixed, or hard",
      "Identify target commit (HEAD~1, commit SHA, etc.)",
      "Run git reset with appropriate flags",
      "Verify result with git status and git log",
      "If mistake, use git reflog to find previous state",
    ],
    keyTakeaways: [
      "--soft: keep changes staged",
      "--mixed: unstage changes but keep in working directory",
      "--hard: discard all changes (DANGEROUS)",
      "Reset moves branch pointer, can be undone with reflog",
      "Only affects current branch, not other branches",
    ],
    commonMistakes: [
      "Using --hard and losing uncommitted work",
      "Resetting public commits that others have based work on",
      "Not understanding the difference between the three modes",
      "Expecting reset to affect other branches",
      "Panicking after reset - forgetting about reflog recovery",
    ],
    tips: [
      "Use --soft to combine commits before pushing",
      "Use --mixed to reorganize what goes in commits",
      "ONLY use --hard when you're sure you want to lose changes",
      "Always check git status after reset to verify",
      "Remember: reflog can save you from reset mistakes",
    ],
    warnings: [
      "git reset --hard PERMANENTLY deletes uncommitted changes",
      "Don't reset commits that have been pushed to shared branches",
      "Always commit or stash important work before using reset",
    ],
  },
  {
    id: "git-revert",
    category: "Reset, Revert & Rollback",
    title: "git revert",
    description:
      "Safely undo changes by creating a new commit that reverses previous effects.",
    overview:
      "Unlike git reset, git revert is a non-destructive operation. It creates a new commit that does the exact opposite of an existing commit. This preserves history and is safe to use on public branches.",
    detailedExplanation: [
      "When you run 'git revert <commit>', Git calculates the inverse of the changes introduced by that commit and applies them as a new commit. If the original commit added a line, revert deletes it. If it deleted a file, revert restores it.",
      "This is the 'forward-only' way to undo mistakes. Because it adds a new commit instead of erasing history, it's perfectly safe for shared repositories where other developers might have based work on the commit you're undoing.",
      "Reverting multiple commits should be done in reverse order (newest to oldest) to avoid conflict confusion.",
    ],
    codeBlocks: [
      {
        label: "Revert latest commit",
        language: "bash",
        code: "git revert HEAD",
        explanation: "Creates new commit reversing HEAD",
      },
      {
        label: "Revert specific commit",
        language: "bash",
        code: "git revert abc1234",
        explanation: "Reverses changes from commit abc1234",
      },
      {
        label: "Revert without autocommit",
        language: "bash",
        code: "git revert -n HEAD",
        explanation:
          "Applies reverse changes to working dir but doesn't commit yet",
      },
      {
        label: "Revert a merge commit",
        language: "bash",
        code: "git revert -m 1 <merge-commit>",
        explanation: "Reverts merge, keeping changes from parent 1 (mainline)",
      },
    ],
    keyTakeaways: [
      "Safe for public/shared branches",
      "Creates a new commit (does not rewrite history)",
      "Can revert any commit in history, not just the last one",
      "Preserves the timeline of events (error -> fix)",
    ],
    commonMistakes: [
      "Using reset on public branches instead of revert",
      "Confusing revert (undo commit) with restore (undo local change)",
      "Reverting a merge without specifying parent number (-m)",
    ],
    tips: [
      "Use 'revert -n' to combine multiple reverts into one commit",
      "Write a clear message: 'Revert: caused regression in login'",
      "Always use revert for code that has been pushed",
    ],
  },
  {
    id: "reset-vs-revert",
    category: "Reset, Revert & Rollback",
    title: "Reset vs Revert",
    description:
      "Understand when to use reset (rewriting history) vs revert (adding history).",
    overview:
      "The choice between reset and revert depends on whether your changes are private (local only) or public (pushed to remote). Reset rewrites history and is clean but dangerous for collaboration. Revert adds to history and is safe for collaboration.",
    detailedExplanation: [
      "Reset is like a time machine: it moves the branch pointer back in time. It's as if the bad commits never happened. This is great for local cleanup but disastrous if others have already pulled those commits.",
      "Revert is like an apology: it acknowledges the mistake and adds a correction on top. 'I made a typo' followed by 'I fixed the typo'. This preserves the full true history.",
      "Rule of thumb: If it's pushed, Revert. If it's local only, Reset.",
    ],
    codeBlocks: [
      {
        label: "Comparison Table",
        language: "text",
        code: "Feature      | git reset         | git revert\n-------------|-------------------|------------\nAction       | Moves pointer     | Adds commit\nHistory      | Rewrites/Deletes  | Preserves\nSafe for Public? | NO            | YES\nUse case     | Local undo        | Public undo",
        explanation: "Quick reference guide",
      },
      {
        label: "Scenario: Local mistake",
        language: "bash",
        code: "git reset --hard HEAD~1",
        explanation: "Nobody saw it, just delete it",
      },
      {
        label: "Scenario: Pushed bug",
        language: "bash",
        code: "git revert HEAD\ngit push origin main",
        explanation: "Everyone has it, push a fix",
      },
    ],
    keyTakeaways: [
      "Reset is for private/local history",
      "Revert is for public/shared history",
      "Reset results in cleaner linear history",
      "Revert results in safer, audit-friendly history",
    ],
    commonMistakes: [
      "Resetting pushed commits (breaks teammates' repos)",
      "Reverting local commits (clutters history unnecessarily)",
      "Thinking revert deletes changes (it just negates them)",
    ],
  },
  {
    id: "rollback-strategy",
    category: "Reset, Revert & Rollback",
    title: "Rollback Strategy",
    description:
      "Emergency procedures for rolling back production issues effectively.",
    overview:
      "A rollback strategy is a plan for quickly reverting your codebase to a known stable state during an emergency. In Git, this usually involves reverting a merge commit or resetting a branch to a previous tag.",
    detailedExplanation: [
      "Fastest method: 'git revert' the merge commit that introduced the bug. This is safe, preserves history, and is easy to push through CI/CD pipelines.",
      "Alternative: Deploying a previous stable tag/commit directly. This is an operational rollback, not a Git history change.",
      "Never use 'git reset' for production rollbacks unless you are force-pushing to a protected branch (which should be blocked usually). It causes chaos for all other developers.",
    ],
    codeBlocks: [
      {
        label: "Revert a bad merge (Standard Rollback)",
        language: "bash",
        code: "git revert -m 1 <merge-commit-sha>\ngit push origin main",
        explanation: "Undoes the entire feature merge cleanly",
      },
      {
        label: "Checkout old version (Hotfix investigation)",
        language: "bash",
        code: "git checkout v1.2.0",
        explanation: "Go back to last stable version locally to verify",
      },
      {
        label: "Force rollback (Extreme cases only)",
        language: "bash",
        code: "git reset --hard v1.2.0\ngit push --force origin main",
        explanation: "Destructive! Requires coordination with entire team",
      },
    ],
    keyTakeaways: [
      "Plan your rollback strategy BEFORE an emergency",
      "Revert is generally preferred over force push",
      "Tags are crucial for marking stable rollback points",
      "Communicate clearly with team during rollback",
    ],
    commonMistakes: [
      "Panic usage of git reset on production branches",
      "Not knowing which commit corresponds to stable state (use tags!)",
      "Rolling back DB migrations separatel (out of scope for Git but crucial)",
    ],
  },
  {
    id: "reset-revert-rollback-interview-questions",
    category: "Reset, Revert & Rollback",
    title: "Interview Questions",
    description:
      "Common interview questions covering Git reset, revert, and rollback scenarios.",
    overview:
      "This section contains frequently asked interview questions about undoing changes in Git. It covers the differences between reset and revert, when to use each, and how to safe-guard against data loss during rollbacks.",
    detailedExplanation: [
      "Interviewers often ask about the three modes of git reset: --soft, --mixed, and --hard. You should know when to use each.",
      "Understand the key difference: git reset modifies history (dangerous for shared branches), while git revert creates a new commit (safe for shared branches).",
      "Be prepared to explain how to recover 'lost' commits using git reflog.",
      "Questions may cover strategies for rolling back production deployments, such as reverting merge commits or checking out specific tags.",
    ],
    keyTakeaways: [
      "Reset modifies history; Revert adds to history",
      "Reflog is your safety net for accidental resets",
      "Never use git reset --hard on shared branches",
      "Always use git revert for undoing pushed changes",
      "Know the difference between soft, mixed, and hard reset",
    ],
    commonMistakes: [
      "Hard resetting without checking git status",
      "Force pushing reset changes to shared branches",
      "Confusing git revert with git restore",
      "Panicking and deleting local repo instead of using reflog",
    ],
    interviewQuestions: [
      "What is the difference between git reset and git revert?",
      "Explain the three modes of git reset: soft, mixed, and hard.",
      "When would you use git reset --soft vs --mixed?",
      "Why is git reset dangerous on public shared branches?",
      "How do you recover a commit after a hard reset?",
      "What command would you use to undo a commit that has already been pushed?",
      "What does git reflog do?",
      "How do you revert a merge commit?",
      "What happens to uncommitted changes when you run git reset --hard?",
      "How do you rollback a production deployment using Git commands?",
    ],
    lastUpdated: "2026-02-14",
  },

  // ===== REFLOG & RECOVERY =====
  {
    id: "git-reflog",
    category: "Reflog & Recovery",
    title: "git reflog",
    description:
      "The safety net of Git: recover lost commits and undone changes.",
    overview:
      "Git reflog (Reference Logs) records every time the tip of a branch is updated. Even if you delete a branch or reset a commit, the reflog typically keeps a record of it for 30-90 days. It is your primary tool for recovering from 'disasters'.",
    detailedExplanation: [
      "Every time HEAD moves (commit, checkout, reset, merge), Git logs the previous position in the reflog.",
      "Unlike `git log` which shows the public commit history, `git reflog` shows your LOCAL history of movements. It is not shared with others.",
      "You can checkout any point in the reflog using `HEAD@{n}` syntax, allowing you to travel back to the state before a bad reset.",
    ],
    codeBlocks: [
      {
        label: "View reflog",
        language: "bash",
        code: "git reflog\n# a1b2c3d HEAD@{0}: commit: Fix typo\n# e4f5g6h HEAD@{1}: reset: moving to HEAD~1",
        explanation: "Shows history of HEAD movements",
      },
      {
        label: "Reset to reflog point",
        language: "bash",
        code: "git reset --hard HEAD@{1}",
        explanation: "Restores project state to how it was at step 1",
      },
    ],
    keyTakeaways: [
      "Reflog is your undo button for almost everything",
      "It is local-only and temporary (expires after ~90 days)",
      "Essential for fixing bad resets or rebase mistakes",
      "Even 'deleted' commits are often found here",
    ],
    commonMistakes: [
      "Panicking and deleting the repo instead of checking reflog",
      "Thinking reflog is shared with the team (it's not)",
      "Confusing `git log` (project history) with `git reflog` (movement history)",
    ],
    tips: [
      "If you mess up a rebase, `git reflog` is the way to fix it",
      "Use `git reflog <branch>` to see history of specific branch pointer",
      "Don't worry about experimenting; reflog has your back",
    ],
  },
  {
    id: "recover-deleted-commit",
    category: "Reflog & Recovery",
    title: "Recover Deleted Commit",
    description:
      "How to bring back a commit that was lost via reset or deletion.",
    overview:
      "Commits in Git are almost never immediately deleted. They just become 'unreachable' (dangling) when you reset away from them. You can find these reachable commits in the reflog and restore them.",
    detailedExplanation: [
      "When you run `git reset --hard HEAD~1`, the latest commit isn't deleted from disk; the branch pointer just moves away from it.",
      "To recover it, find its SHA in `git reflog` and either merge it, cherry-pick it, or reset back to it.",
    ],
    codeBlocks: [
      {
        label: "Step 1: Find the lost commit SHA",
        language: "bash",
        code: "git reflog\n# Look for: 'moving from <lost-sha> to ...'",
        explanation: "Identify the SHA of the commit you lost",
      },
      {
        label: "Step 2: Restore it",
        language: "bash",
        code: "git checkout -b recovered-branch <lost-sha>",
        explanation: "Create a new branch pointing to that commit",
      },
    ],
    keyTakeaways: [
      "Deleted commits are usually still in the .git directory",
      "You have about 30 days before garbage collection deletes them",
      "Creating a branch is the safest way to restore a lost commit",
    ],
    commonMistakes: [
      "Assumption that 'reset --hard' deletes data instantly",
      "Waiting too long (months) to try to recover",
    ],
    tips: [
      "Always create a backup branch before doing dangerous operations",
      "`git fsck --lost-found` can also find dangling commits",
    ],
  },
  {
    id: "restore-lost-branch",
    category: "Reflog & Recovery",
    title: "Restore Lost Branch",
    description: "Recover a branch that was accidentally deleted.",
    overview:
      "Deleting a branch just removes the pointer. The commits that were on that branch still exist (until garbage collected). If you know the SHA of the tip of the deleted branch (from reflog), you can recreate the branch effortlessly.",
    detailedExplanation: [
      "When you delete a branch with `git branch -D`, Git prints the SHA of the deleted branch tip. If you missed that, check `git reflog`.",
      "Look for the last checkout moving AWAY from the deleted branch, or the commit message that was at the tip.",
      "Recreate the branch using `git branch <new-name> <sha>`.",
    ],
    codeBlocks: [
      {
        label: "Find deleted branch tip",
        language: "bash",
        code: "git reflog | grep 'moving from feature-branch'",
        explanation: "Search reflog for when you left the branch",
      },
      {
        label: "Resurrect branch",
        language: "bash",
        code: "git branch feature-branch <sha-from-reflog>",
        explanation: "Recreates the branch pointer at that commit",
      },
    ],
    keyTakeaways: [
      "A branch is just a label; deleting it doesn't delete commits",
      "Reflog records the SHA of the branch tip before deletion",
      "Easy to restore if done relatively soon",
    ],
    commonMistakes: [
      "Thinking the work is gone forever",
      "Not noting the SHA Git prints when you delete a branch",
    ],
    tips: [
      "If you accidentally delete 'release', check reflog immediately",
      "Use descriptive branch names to finding them in reflog easier",
    ],
  },
  {
    id: "reflog-recovery-interview-questions",
    category: "Reflog & Recovery",
    title: "Interview Questions",
    description:
      "Common interview questions regarding data recovery, reflog usage, and handling lost commits.",
    overview:
      "This section covers essential questions about Git's safety mechanisms. Expect questions on how to recover deleted branches, find lost commits using reflog, and the difference between reflog and the standard commit log.",
    detailedExplanation: [
      "Be ready to explain that `git reflog` tracks local repository movements and is not shared with remotes.",
      "Understand that 'deleted' commits are not immediately removed from the database but become 'dangling' until garbage collected.",
      "You may be asked how to recover a branch that was deleted, which involves finding the tip SHA in the reflog and ensuring you recreate the branch pointer.",
      "Advanced questions might touch on `git fsck` or the expiration period of reflog entries (default 90 days for reachable, 30 for unreachable).",
    ],
    keyTakeaways: [
      "Reflog is specific to your local repository",
      "It records every time HEAD updates",
      "Deleted branches/commits are recoverable via reflog",
      "Data is only truly lost after garbage collection (git gc)",
    ],
    commonMistakes: [
      "Assuming reflog history is pushed to the server",
      "Waiting too long to recover lost data (garbage collection)",
      "confusing `git log` (project history) with `git reflog` (you movement history)",
    ],
    interviewQuestions: [
      "What is `git reflog` and how does it differ from `git log`?",
      "How do you recover a branch that you accidentally deleted?",
      "If you perform a hard reset and lose a commit, how can you get it back?",
      "Is the reflog pushed to the remote repository?",
      "How long does Git keep reflog entries by default?",
      "What is a 'dangling commit'?",
      "How can you restore a specific state from the reflog?",
      "What command helps you find dangling objects if reflog doesn't show them?",
      "Does `git commit --amend` destroy the previous commit forever?",
      "Why might a commit not appear in the reflog?",
    ],
    lastUpdated: "2026-02-14",
  },

  // ===== REMOTE REPOSITORIES =====
  {
    id: "git-remote",
    category: "Remote Repositories",
    title: "git remote",
    description:
      "Manage connections to remote repositories to collaborate with others and sync your work.",
    overview:
      "The git remote command manages the set of remote repositories your local repository knows about. Remotes are versions of your project hosted on the internet or network, like on GitHub or GitLab. Understanding remotes is essential for collaboration and keeping your local repository synchronized with team members.",
    detailedExplanation: [
      "A remote is a bookmark to another repository, usually hosted on a server. When you clone a repository, Git automatically creates a remote called 'origin' that points to the cloned repository. You can have multiple remotes pointing to different repositories.",
      "Remotes are just names (like 'origin') mapped to URLs (like https://github.com/user/repo.git). These names make it easier to push and pull - you can use 'git push origin main' instead of typing the full URL every time.",
      "You can add, remove, rename, and inspect remotes. Common scenarios include adding an 'upstream' remote when working with forked repositories, or adding multiple remotes when collaborating across different hosting services.",
      "Remote branches are references to the state of branches in your remote repositories. They're prefixed with the remote name (like origin/main). These are automatically updated when you fetch or pull, showing you what the remote repository looks like.",
    ],
    codeBlocks: [
      {
        label: "List all remotes",
        language: "bash",
        code: "git remote\n# or for more details:\ngit remote -v",
        explanation: "-v shows URLs for fetch and push",
      },
      {
        label: "Add a new remote",
        language: "bash",
        code: "git remote add origin https://github.com/username/repo.git",
        explanation:
          "Adds a remote named 'origin' pointing to the GitHub repository",
      },
      {
        label: "Add upstream remote (for forks)",
        language: "bash",
        code: "git remote add upstream https://github.com/original-owner/repo.git",
        explanation:
          "Adds 'upstream' to track the original repository you forked from",
      },
      {
        label: "View remote details",
        language: "bash",
        code: "git remote show origin",
        explanation: "Shows detailed information about the 'origin' remote",
      },
      {
        label: "Rename a remote",
        language: "bash",
        code: "git remote rename origin upstream",
        explanation: "Renames the 'origin' remote to 'upstream'",
      },
      {
        label: "Change remote URL",
        language: "bash",
        code: "git remote set-url origin https://github.com/new-username/repo.git",
        explanation: "Updates the URL for the 'origin' remote",
      },
      {
        label: "Remove a remote",
        language: "bash",
        code: "git remote remove upstream",
        explanation: "Removes the 'upstream' remote",
      },
    ],
    workflowSteps: [
      "Clone a repository (automatically creates 'origin' remote)",
      "Add additional remotes if needed (like upstream for forks)",
      "View remotes with git remote -v to verify URLs",
      "Fetch from remotes to update remote tracking branches",
      "Push to and pull from remotes as needed",
    ],
    keyTakeaways: [
      "Remotes are bookmarks to other repositories (usually on servers)",
      "'origin' is the default remote name created when cloning",
      "You can have multiple remotes (origin, upstream, etc.)",
      "git remote -v shows URLs for each remote",
      "Remote branches are prefixed with remote name (origin/main)",
    ],
    commonMistakes: [
      "Confusing remotes with branches",
      "Not understanding origin is just a conventional name, not special",
      "Forgetting to add upstream remote when working with forks",
      "Trying to push without having a remote configured",
      "Not updating remote URLs after repository moves",
    ],
    tips: [
      "Use git remote -v regularly to verify your remote configuration",
      "For forks, add 'upstream' to track the original repository",
      "Use SSH URLs instead of HTTPS to avoid repeated password entry",
      "Remove old remotes you no longer use to avoid confusion",
    ],
  },
  {
    id: "git-push",
    category: "Remote Repositories",
    title: "git push",
    description:
      "Upload your local commits to a remote repository to share your work with others.",
    overview:
      "The git push command uploads your local branch commits to the remote repository. This is how you share your work with teammates, deploy code to servers, and back up your commits to a central location like GitHub. Pushing makes your local changes available to everyone who has access to the remote repository.",
    detailedExplanation: [
      "When you push, Git transfers all commits from your local branch that don't exist on the remote branch yet. The remote repository is updated to match your local branch. This is a one-way operation - it only sends commits from local to remote, not the other way.",
      "Before you can push, you need to have commits in your local repository and a remote repository configured (usually named 'origin'). The first time you push a new branch, you need to set up tracking with the -u flag, which tells Git which remote branch corresponds to your local branch.",
      "Git will reject your push if the remote branch has commits that you don't have locally. This prevents you from accidentally overwriting someone else's work. In this case, you need to pull the remote changes first, merge them with your local changes, then push again.",
      "Force pushing (git push --force) overwrites the remote branch with your local branch, discarding remote commits. This is dangerous in shared branches but sometimes necessary when you've rewritten history (like after a rebase). Use --force-with-lease as a safer alternative.",
    ],
    codeBlocks: [
      {
        label: "Push to remote branch",
        language: "bash",
        code: "git push origin main",
        explanation: "Pushes the 'main' branch to the 'origin' remote",
      },
      {
        label: "Push and set upstream tracking",
        language: "bash",
        code: "git push -u origin feature-login\n# or\ngit push --set-upstream origin feature-login",
        explanation:
          "Pushes 'feature-login' and sets it to track the remote branch",
      },
      {
        label: "Push current branch (shorthand)",
        language: "bash",
        code: "git push",
        explanation:
          "Pushes current branch to its configured upstream (must be set first with -u)",
      },
      {
        label: "Push all branches",
        language: "bash",
        code: "git push --all origin",
        explanation: "Pushes all local branches to the remote repository",
      },
      {
        label: "Push tags",
        language: "bash",
        code: "git push origin --tags",
        explanation: "Pushes all tags to the remote repository",
      },
      {
        label: "Force push (use with caution!)",
        language: "bash",
        code: "git push --force origin main\n# Safer alternative:\ngit push --force-with-lease origin main",
        explanation:
          "Overwrites remote branch with local. --force-with-lease ensures no one else pushed in between",
      },
      {
        label: "Delete remote branch",
        language: "bash",
        code: "git push origin --delete feature-old",
        explanation:
          "Deletes the 'feature-old' branch from the remote repository",
      },
    ],
    workflowSteps: [
      "Make commits on your local branch",
      "Ensure you're on the correct branch (git status)",
      "Pull latest changes if working with others (git pull)",
      "Push your commits with git push (or git push -u origin <branch> for first push)",
      "Verify the push succeeded (check remote repository or git log)",
    ],
    keyTakeaways: [
      "git push sends your local commits to the remote repository",
      "Use -u flag the first time to set up branch tracking",
      "Git rejects pushes if remote has commits you don't have locally",
      "Never force push to shared branches without team coordination",
      "After setting upstream with -u, you can just use 'git push' without arguments",
    ],
    commonMistakes: [
      "Forgetting to set upstream (-u) on first push and getting confused when git push alone doesn't work",
      "Force pushing to a shared branch and overwriting teammates' work",
      "Not pulling before pushing, leading to rejected pushes",
      "Pushing sensitive data like passwords or API keys",
      "Pushing to the wrong branch or wrong remote",
    ],
    tips: [
      "Set up SSH keys to avoid entering passwords repeatedly",
      "Use git push -u origin HEAD to push current branch without typing its name",
      "Check what you're about to push with git log origin/main..main before pushing",
      "Use --force-with-lease instead of --force for safer force pushes",
    ],
    warnings: [
      "NEVER force push to shared branches like main/master without team agreement",
      "Always review what you're pushing - once pushed, it's hard to completely remove",
      "Never push secrets, API keys, passwords, or sensitive data",
    ],
  },
  {
    id: "git-pull",
    category: "Remote Repositories",
    title: "git pull",
    description:
      "Download and integrate remote changes into your current branch to stay synchronized with the team.",
    overview:
      "The git pull command fetches changes from the remote repository and immediately merges them into your current local branch. It's essentially a combination of 'git fetch' followed by 'git merge'. This is how you get the latest updates from your teammates and keep your local repository in sync with the remote.",
    detailedExplanation: [
      "Git pull performs two operations in sequence: first it fetches the latest commits from the remote repository, then it merges those commits into your current branch. This two-step process updates your local repository with remote changes and integrates them with your work.",
      "If you have local commits that aren't on the remote, git pull creates a merge commit that combines your local changes with the remote changes. This can sometimes result in merge conflicts that you'll need to resolve manually.",
      "By default, git pull uses merge strategy. You can configure it to use rebase instead (git pull --rebase), which replays your local commits on top of the fetched commits. This creates a cleaner, linear history but rewrites commit history.",
      "It's best to pull frequently to minimize conflicts. The longer you wait between pulls, the more likely you are to encounter conflicts when you finally do pull. Many teams make it a habit to pull before starting work and before pushing.",
    ],
    codeBlocks: [
      {
        label: "Pull from default remote",
        language: "bash",
        code: "git pull",
        explanation:
          "Fetches and merges changes from the tracked remote branch",
      },
      {
        label: "Pull from specific remote and branch",
        language: "bash",
        code: "git pull origin main",
        explanation: "Pulls changes from 'main' branch on 'origin' remote",
      },
      {
        label: "Pull with rebase",
        language: "bash",
        code: "git pull --rebase\n# or\ngit pull --rebase origin main",
        explanation:
          "Fetches changes and rebases your local commits on top instead of merging",
      },
      {
        label: "Pull all remotes",
        language: "bash",
        code: "git pull --all",
        explanation: "Pulls changes from all configured remotes",
      },
      {
        label: "Pull and show detailed output",
        language: "bash",
        code: "git pull --verbose",
        explanation: "Shows detailed information about what's being pulled",
      },
      {
        label: "Configure rebase as default for pull",
        language: "bash",
        code: "git config --global pull.rebase true",
        explanation: "Makes git pull use rebase instead of merge by default",
      },
    ],
    workflowSteps: [
      "Commit or stash your local changes first",
      "Ensure you're on the correct branch",
      "Run git pull to fetch and merge remote changes",
      "Resolve any merge conflicts if they occur",
      "Review the changes that were pulled",
      "Continue working with the updated code",
    ],
    keyTakeaways: [
      "git pull = git fetch + git merge combined",
      "Always commit or stash local changes before pulling",
      "Pull frequently to minimize merge conflicts",
      "Use --rebase for cleaner history (if you understand rebasing)",
      "Conflicts must be resolved manually when they occur",
    ],
    commonMistakes: [
      "Pulling with uncommitted changes and creating a messy merge",
      "Not pulling before starting work, leading to more conflicts later",
      "Using git pull --rebase without understanding it can rewrite history",
      "Forgetting to push after resolving merge conflicts from a pull",
      "Not reviewing what was pulled before continuing work",
    ],
    tips: [
      "Make it a habit: pull before starting work, pull before pushing",
      "Use git pull --rebase to keep a linear history",
      "If pull creates conflicts, you can abort with git merge --abort",
      "Use git fetch first to see what changes exist before merging them",
    ],
  },
  {
    id: "git-fetch",
    category: "Remote Repositories",
    title: "git fetch",
    description:
      "Download commits, files, and refs from a remote repository without merging them into your local branches.",
    overview:
      "The git fetch command downloads commits and files from a remote repository into your local repository, but unlike git pull, it doesn't merge these changes into your current branch. This lets you review remote changes before integrating them, giving you more control over when and how you incorporate others' work.",
    detailedExplanation: [
      "When you fetch, Git downloads all new commits, branches, and tags from the remote repository and stores them in your local repository. However, your working directory and current branch remain untouched. The fetched commits are stored in remote tracking branches (like origin/main) which you can inspect before merging.",
      "Fetching is a safe operation - it never changes your local branches or working directory. This makes it perfect for checking what others have been working on without affecting your own work. You can fetch as often as you like with no risk.",
      "After fetching, you can use git log or git diff to compare the remote changes with your local branch before deciding to merge. This preview capability is why many experienced Git users prefer fetch over pull - it gives them control over when to integrate changes.",
      "The fetch operation updates your remote tracking branches (refs/remotes/origin/branch-name). These are local copies of remote branches that let you see the state of the remote repository. You can view them with 'git branch -r'.",
    ],
    codeBlocks: [
      {
        label: "Fetch from default remote",
        language: "bash",
        code: "git fetch",
        explanation:
          "Downloads changes from the default remote (usually origin)",
      },
      {
        label: "Fetch from specific remote",
        language: "bash",
        code: "git fetch origin",
        explanation: "Fetches all branches from the 'origin' remote",
      },
      {
        label: "Fetch specific branch",
        language: "bash",
        code: "git fetch origin main",
        explanation: "Fetches only the 'main' branch from origin",
      },
      {
        label: "Fetch all remotes",
        language: "bash",
        code: "git fetch --all",
        explanation: "Fetches from all configured remote repositories",
      },
      {
        label: "Fetch and prune deleted branches",
        language: "bash",
        code: "git fetch --prune\n# or\ngit fetch -p",
        explanation:
          "Fetches changes and removes local references to deleted remote branches",
      },
      {
        label: "View fetched changes before merging",
        language: "bash",
        code: "git fetch origin\ngit log HEAD..origin/main\n# or\ngit diff HEAD origin/main",
        explanation:
          "Fetch then review what changes exist on remote before merging",
      },
      {
        label: "Merge after fetch",
        language: "bash",
        code: "git fetch origin\ngit merge origin/main",
        explanation: "Manually perform what git pull does: fetch then merge",
      },
    ],
    workflowSteps: [
      "Run git fetch to download remote changes",
      "Review the fetched changes with git log or git diff",
      "Decide whether to merge the changes",
      "If merging, use git merge origin/<branch-name>",
      "Alternatively, use git rebase origin/<branch-name> for rebase workflow",
    ],
    keyTakeaways: [
      "git fetch downloads remote changes but doesn't merge them",
      "Fetching is completely safe - it never changes your working directory",
      "Use fetch to preview remote changes before integrating them",
      "git pull = git fetch + git merge in one command",
      "Fetched changes are stored in remote tracking branches (origin/main, etc.)",
    ],
    commonMistakes: [
      "Thinking fetch will update their local branch (it only updates remote tracking branches)",
      "Forgetting to merge or rebase after fetching",
      "Not using --prune and accumulating old remote branch references",
      "Confusing origin/main (remote tracking branch) with main (local branch)",
    ],
    tips: [
      "Use fetch instead of pull when you want to review changes first",
      "Fetch frequently to stay aware of team activity without affecting your work",
      "Set up git config fetch.prune true to automatically prune on fetch",
      "Use git branch -r to see all remote tracking branches after fetch",
    ],
  },
  {
    id: "upstream-tracking",
    category: "Remote Repositories",
    title: "Upstream Tracking",
    description:
      "Link your local branch to a remote branch to simplify push and pull operations.",
    overview:
      "Tracking relationships (or 'upstream' branches) tell Git which remote branch corresponds to your local branch. When tracking is set, you can use `git push` and `git pull` without specifying the remote or branch name.",
    detailedExplanation: [
      "When you clone a repo, your local `main` automatically tracks `origin/main`.",
      "For new branches, you must explicitly set the upstream branch the first time you push: `git push -u origin <branch>`.",
      "You can see which remote branch your local branch is tracking with `git branch -vv`.",
      "If you don't set an upstream, Git will ask you to specify the remote and branch every time you push.",
    ],
    codeBlocks: [
      {
        label: "Set upstream while pushing",
        language: "bash",
        code: "git push -u origin feature-login",
        explanation: "Pushes and sets tracking (standard method)",
      },
      {
        label: "Set upstream for existing branch",
        language: "bash",
        code: "git branch --set-upstream-to=origin/main main",
        explanation: "Links local main to origin/main manually",
      },
      {
        label: "Check tracking",
        language: "bash",
        code: "git branch -vv",
        explanation: "Shows local branches and their remote counterparts",
      },
    ],
    keyTakeaways: [
      "Upstream tracking makes `git pull` and `git push` work without arguments",
      "Use `-u` (short for `--set-upstream`) on your first push",
      "Tracking is essential for keeping local and remote branches in sync",
    ],
    commonMistakes: [
      "Typing the full `git push origin branchname` every time instead of setting upstream",
      "Getting 'no upstream branch' error and not knowing what it means",
      "Thinking tracking happens automatically for new local branches (it doesn't)",
    ],
  },
  {
    id: "remote-repositories-interview-questions",
    category: "Remote Repositories",
    title: "Interview Questions",
    description:
      "Common interview questions regarding remotes, fetching, and pushing.",
    overview:
      "This section covers the mechanics of interacting with remote repositories. Expect questions on the difference between fetch and pull, how to manage remote URLs, and how to handle rejected pushes.",
    detailedExplanation: [
      "The most common question is 'fetch vs pull'. Fetch updates remote-tracking branches; Pull does fetch + merge.",
      "Understand what `origin` is (just a default alias/name).",
      "Be able to explain what a 'fast-forward' merge is in the context of pulling.",
    ],
    keyTakeaways: [
      "Fetch is safe; Pull can cause conflicts",
      "Origin is a convention, not a keyword",
      "Force with lease is safer than force",
    ],
    commonMistakes: [
      "Saying `git pull` is safer than `git fetch` (it's the opposite)",
      "Not knowing how to change a remote URL (e.g., HTTPS to SSH)",
    ],
    interviewQuestions: [
      "What is the difference between `git fetch` and `git pull`?",
      "What does `git push --force` do and why is it dangerous?",
      "How do you change the URI (URL) for a remote?",
      "What is 'origin' in Git?",
      "How do you see which remote branch your local branch is tracking?",
      "What does `git push -u` do?",
      "How do you delete a remote branch?",
      "What is a 'bare' repository?",
      "How do you prune deleted remote branches from your local list?",
    ],
    lastUpdated: "2026-02-14",
  },

  // ===== WORKFLOWS & BEST PRACTICES =====
  {
    id: "feature-branch-workflow",
    category: "Workflows & Best Practices",
    title: "Feature Branch Workflow",
    description:
      "The standard workflow: create a branch for every new feature or fix.",
    overview:
      "The Feature Branch Workflow allows developers to work on new features in dedicated branches instead of the main code base. This ensures the main branch always contains production-quality code and allows multiple developers to work in parallel without blocking each other.",
    detailedExplanation: [
      "1. Pull latest main: Start with a fresh codebase.",
      "2. Create branch: `git checkout -b feature/my-feature`.",
      "3. Work & Commit: precise, logical commits.",
      "4. Push: `git push -u origin feature/my-feature`.",
      "5. Open Pull Request: Review and discuss.",
      "6. Merge: Integrate into main and delete the feature branch.",
    ],
    codeBlocks: [
      {
        label: "Start feature",
        language: "bash",
        code: "git checkout main\ngit pull\ngit checkout -b feature/new-login-screen",
        explanation: "Always start from updated main",
      },
      {
        label: "Finish feature",
        language: "bash",
        code: "git push origin feature/new-login-screen\n# Go to GitHub to open PR",
        explanation: "Push execution to remote",
      },
    ],
    keyTakeaways: [
      "Isolates work in progress from stable code",
      "Enables code review via Pull Requests",
      "Standard for most professional teams",
    ],
    commonMistakes: [
      "Working directly on main",
      "Forgetting to pull main before creating feature branch",
      "Long-lived feature branches that become hard to merge",
    ],
    tips: [
      "Keep feature branches short-lived (days, not months)",
      "Sync with main regularly if the feature takes time",
    ],
  },
  {
    id: "git-flow",
    category: "Workflows & Best Practices",
    title: "Git Flow",
    description:
      "A strict branching model designed for scheduled project releases.",
    overview:
      "Git Flow is a robust framework for managing large projects. It assigns specific roles to branches: `main` (production), `develop` (integration), `feature/*` (new work), `release/*` (prep for production), and `hotfix/*` (urgent fixes).",
    detailedExplanation: [
      "Development happens on `develop`.",
      "Features branch off `develop` and merge back to `develop`.",
      "When ready to release, a `release` branch is created off `develop`.",
      "Once tested, `release` merges into `main` (with a tag) AND `develop`.",
      "Hotfixes branch off `main` and merge into both `main` and `develop`.",
    ],
    codeBlocks: [
      {
        label: "Initialize Git Flow",
        language: "bash",
        code: "git flow init",
        explanation:
          "Sets up the branch structure (requires git-flow extension)",
      },
    ],
    keyTakeaways: [
      "Strict structure good for versioned software products",
      "Keeps development separate from shipping code",
      "Can be complex for simple web apps (overkill)",
    ],
    commonMistakes: [
      "Using Git Flow for simple CD (Continuous Deployment) projects",
      "Forgetting to back-merge hotfixes to develop",
    ],
    tips: [
      "Consider 'GitHub Flow' or 'Trunk Based' if Git Flow feels too heavy",
      "Use CLI tools like git-flow-avh to automate the branching",
    ],
  },
  {
    id: "trunk-based-development",
    category: "Workflows & Best Practices",
    title: "Trunk Based Development",
    description:
      "A modern, high-speed workflow where everyone commits to main frequently.",
    overview:
      "In Trunk Based Development, developers merge small, frequent updates to the main branch ('trunk') multiple times a day. It avoids 'merge hell' by keeping branches extremely short-lived. It relies heavily on automated testing and Feature Flags to keep the main branch shippable.",
    detailedExplanation: [
      "Instead of long feature branches, you commit small chunks.",
      "If a feature isn't ready, you hide it behind a Feature Flag so it doesn't affect users.",
      "This enables Continuous Integration (CI) and Continuous Deployment (CD).",
    ],
    codeBlocks: [
      {
        label: "Workflow",
        language: "text",
        code: "Code -> Test -> Commit to Main -> Auto-Deploy",
        explanation: "Fast feedback loop",
      },
    ],
    keyTakeaways: [
      "Requires strong automated tests",
      "Eliminates long merge conflicts",
      "The 'modern' way for SaaS and web apps",
      "You typically fix forward instead of rolling back",
    ],
    commonMistakes: [
      "Pushing broken code to trunk (breaks it for everyone)",
      "Not using Feature Flags for incomplete work",
    ],
    tips: [
      "Pair programming helps ensure quality without slow PR reviews",
      "Run tests locally before every push",
    ],
  },
  {
    id: "commit-message-convention",
    category: "Workflows & Best Practices",
    title: "Commit Message Convention",
    description:
      "Write clear, structured commit messages (Conventional Commits).",
    overview:
      "Standardizing commit messages makes history readable and allows for automated changelog generation. The 'Conventional Commits' specification is the most popular standard.",
    detailedExplanation: [
      "Format: `<type>(<scope>): <subject>`",
      "Types: `feat` (new feature), `fix` (bug fix), `docs` (documentation), `style` (formatting), `refactor` (code change no feature/fix), `test` (tests), `chore` (build tasks).",
      "Example: `feat(auth): add google login support`",
    ],
    codeBlocks: [
      {
        label: "Good Commit Message",
        language: "text",
        code: "feat(ui): add dark mode switch\n\n- Added toggle in navbar\n- Persists preference to localStorage\n- Updated Tailwind config for dark mode",
        explanation: "Clear type, scope, summary, and details",
      },
    ],
    keyTakeaways: [
      "Follows a standard format",
      "Makes `git log` readable",
      "Enables automated versioning (Semantic Release)",
    ],
    commonMistakes: [
      "Vague messages: 'fix', 'update', 'wip'",
      "Mixing multiple changes in one commit",
    ],
    tips: [
      "Use `commitlint` to enforce style in CI",
      "Think: 'If applied, this commit will... <subject>'",
    ],
  },
  {
    id: "branch-naming-convention",
    category: "Workflows & Best Practices",
    title: "Branch Naming Convention",
    description: "Naming strategies to keep your repository organized.",
    overview:
      "Consistent branch names tell you exactly what a branch is for and who owns it. Common prefixes help categorize work.",
    detailedExplanation: [
      "Structure: `category/reference/description`",
      "Categories: `feature/`, `bugfix/`, `hotfix/`, `release/`, `test/`.",
      "Examples: `feature/user-profile`, `bugfix/login-error-404`, `hotfix/prod-crash`.",
    ],
    codeBlocks: [
      {
        label: "Examples",
        language: "bash",
        code: "git branch feature/shopping-cart\ngit branch bugfix/header-alignment\ngit branch users/nikhil/experiment-1",
        explanation: "Clear hierarchy and purpose",
      },
    ],
    keyTakeaways: [
      "Use slashes `/` to group branches (folders in some GUI tools)",
      "Keep it lowercase and kebab-case",
      "Include issue ID if using Jira/Linear (e.g., `feature/JIRA-123-login`)",
    ],
    commonMistakes: [
      "Random names: 'nikhil-test', 'final-final-v2'",
      "Using spaces or special characters",
    ],
    tips: [
      "Configure your ticketing system to copy-paste branch names",
      "Stick to one convention as a team",
    ],
  },
  {
    id: "workflows-best-practices-interview-questions",
    category: "Workflows & Best Practices",
    title: "Interview Questions",
    description:
      "Common interview questions regarding Git workflows, branching strategies, and commit conventions.",
    overview:
      "This section contains interview questions focused on collaboration workflows. Expect questions comparing Git Flow and Trunk Based Development, best practices for commit messages, and how to handle large teams working on a single repository.",
    detailedExplanation: [
      "Understand the pros and cons of Git Flow (structured, good for releases) vs Trunk Based Development (fast, good for CI/CD).",
      "Be prepared to explain why 'Conventional Commits' are useful for automation (changelogs, semantic versioning).",
      "Questions may ask about how to handle long-running feature branches (hint: don't have them, or rebase frequently).",
    ],
    keyTakeaways: [
      "Trunk Based Development avoids 'merge hell'",
      "Git Flow is better for versioned software releases",
      "Consistent commit messages enable automation",
      "Short-lived branches decrease merge conflicts",
    ],
    commonMistakes: [
      "Thinking Git Flow is the 'best' way for every project",
      "Writing vague commit messages like 'fix bug'",
      "Not rebasing feature branches against main regularly",
    ],
    interviewQuestions: [
      "What is the difference between Git Flow and Trunk Based Development?",
      "Why is a 'long-lived' feature branch considered a bad practice?",
      "What is a 'Conventional Commit' and why should you use it?",
      "How do you handle a situation where your feature branch is 100 commits behind main?",
      "What are the benefits of using a naming convention for branches?",
      "When would you use `git merge --squash`?",
      "What is a Pull Request and how does it fit into the workflow?",
      "How do you ensure code quality in a team workflow?",
    ],
    lastUpdated: "2026-02-14",
  },

   // ===== DEBUGGING & MAINTENANCE =====
  {
    id: "git-bisect",
    category: "Debugging & Maintenance",
    title: "git bisect",
    description: "Use binary search to find the commit that introduced a bug.",
    overview:
      "Git bisect is a debugging tool that helps you find which specific commit introduced a bug. You tell it a 'good' commit (where it worked) and a 'bad' commit (where it's broken), and it automatically checks out the middle commit for you to test, repeating until it pinpoints the culprit.",
    detailedExplanation: [
      "This turns a search through 100 commits into ~7 steps (2^7 = 128).",
      "Process: `git bisect start` -> `git bisect bad` (current) -> `git bisect good <sha>` (old working version).",
      "Git checks out a commit. You test. If broken, run `git bisect bad`. If working, run `git bisect good`. Repeat.",
    ],
    codeBlocks: [
      {
        label: "Start bisecting",
        language: "bash",
        code: "git bisect start\ngit bisect bad HEAD\ngit bisect good v1.0.0",
        explanation: "Begin the definition of the search range",
      },
      {
        label: "Mark current commit",
        language: "bash",
        code: "git bisect good\n# or\ngit bisect bad",
        explanation: "Tell Git the status of the current checked-out commit",
      },
      {
        label: "Finish",
        language: "bash",
        code: "git bisect reset",
        explanation: "Return to original branch when done",
      },
    ],
    keyTakeaways: [
      "Fastest way to find a regression in history",
      "Can be automated with `git bisect run <script>`",
      "Requires code to be buildable/testable at each step",
    ],
    commonMistakes: [
      "Forgetting to `git bisect reset` at the end",
      "Testing the wrong thing (false positives)",
    ],
    tips: [
      "Write a script that returns 0 (good) or 1 (bad) to fully automate it",
      "Use `git bisect skip` if a commit is untestable (build broken)",
    ],
  },
  {
    id: "git-blame",
    category: "Debugging & Maintenance",
    title: "git blame",
    description: "See who wrote each line of a file and in which commit.",
    overview:
      "Git blame annotates each line of a file with the revision, author, and time. It's useful for understanding the context of why a line was written, not just primarily for 'blaming' someone.",
    detailedExplanation: [
      "Shows the commit SHA, author, and timestamp for every line.",
      "Great for finding out: 'Why was this condition added?' -> Find commit -> Read commit message/PR.",
    ],
    codeBlocks: [
      {
        label: "Blame a file",
        language: "bash",
        code: "git blame index.js",
        explanation: "Show annotations for whole file",
      },
      {
        label: "Blame specific lines",
        language: "bash",
        code: "git blame -L 10,20 index.js",
        explanation: "Show lines 10 through 20 only",
      },
    ],
    keyTakeaways: [
      "Used to find CONTEXT, not just culprits",
      "Shows the last person to touch the line",
      "Use with GUI (VS Code GitLens) for best experience",
    ],
    commonMistakes: [
      "Blaming code that was just moved (use `-w` to ignore whitespace)",
      "Judging code without reading the commit message",
    ],
    tips: [
      "Use `git log -S <string>` to search for when code was added/removed if blame is confusing",
      "In GitHub UI, click 'Blame' button on any file",
    ],
  },
  {
    id: "debugging-maintenance-interview-questions",
    category: "Debugging & Maintenance",
    title: "Interview Questions",
    description:
      "Common interview questions covering Git binary search, blame, and repository maintenance.",
    overview:
      "This section tests your ability to troubleshoot problems in a repository. Questions focus on identifying when a bug was introduced using `git bisect`, understanding file history with `git blame`, and general maintenance best practices.",
    detailedExplanation: [
      "Know how `git bisect` works (binary search) and when to use it (finding regressions).",
      "`git blame` is for context, not just pointing fingers. It helps understand *why* a change was made.",
      "Understand basic housekeeping like `git gc` (garbage collection) and managing large files.",
    ],
    keyTakeaways: [
      "git bisect finds bugs in O(log n) time",
      "git blame shows the last revision for each line",
      "git fsck checks database integrity",
      "Large files should be handled with Git LFS",
    ],
    commonMistakes: [
      "Manually checking out commits one by one to find a bug instead of using bisect",
      "Blaming code without checking if it was just moved (formatting changes)",
    ],
    interviewQuestions: [
      "How do you find which commit introduced a bug?",
      "Explain how `git bisect` works.",
      "What command shows who last modified a specific line of a file?",
      "How can you ignore whitespace changes when running `git blame`?",
      "What does `git gc` do?",
      "How do you handle large binary files in Git?",
      "What is the difference between `git blame` and `git log -p`?",
      "How do you verify the integrity of a Git repository?",
    ],
    lastUpdated: "2026-02-14",
  },

   // ===== GITHUB FUNDAMENTALS =====
  {
    id: "what-is-github",
    category: "GitHub Fundamentals",
    title: "What is GitHub",
    description:
      "Learn about GitHub, the world's leading platform for hosting Git repositories and collaborating on code.",
    overview:
      "GitHub is a cloud-based hosting service for Git repositories. It provides a web interface for Git's version control functionality plus several collaboration features like pull requests, issues, project boards, and code review tools. GitHub has become the de facto standard for open source development and team collaboration.",
    detailedExplanation: [
      "GitHub is not Git - it's a platform built on top of Git. While Git is the version control system that tracks changes to your code locally, GitHub is a hosting service that stores your repositories online and adds collaboration features. You can use Git without GitHub, but GitHub requires Git.",
      "GitHub provides a graphical interface for many Git operations, making Git more accessible to those who prefer not to use the command line. However, understanding Git fundamentals is still essential because GitHub's features are built on Git concepts.",
      "Beyond basic repository hosting, GitHub offers pull requests (propose and review changes), issues (track bugs and features), actions (CI/CD automation), projects (project management), discussions, wikis, and GitHub Pages for hosting websites directly from repositories.",
      "GitHub revolutionized open source development by making it easy to fork projects, contribute changes via pull requests, and collaborate with developers worldwide. The social coding aspect - following developers, starring repositories, contributing to projects - created a vibrant ecosystem.",
    ],
    codeBlocks: [
      {
        label: "Clone from GitHub",
        language: "bash",
        code: "git clone https://github.com/username/repository.git",
        explanation: "Download a repository from GitHub to your local machine",
      },
      {
        label: "Push to GitHub",
        language: "bash",
        code: "git push origin main",
        explanation: "Upload your local commits to GitHub",
      },
      {
        label: "Pull from GitHub",
        language: "bash",
        code: "git pull origin main",
        explanation: "Download and merge changes from GitHub",
      },
    ],
    keyTakeaways: [
      "GitHub is a hosting platform for Git repositories, not Git itself",
      "Adds collaboration features: pull requests, issues, code review",
      "Industry standard for open source and team collaboration",
      "Provides web interface for Git operations",
      "Offers CI/CD, project management, and hosting features",
    ],
    commonMistakes: [
      "Confusing Git with GitHub - they're different things",
      "Thinking you need GitHub to use Git (you don't)",
      "Not understanding that GitHub just hosts your Git repos",
      "Expecting Git commands to work on GitHub's web interface",
    ],
    tips: [
      "Learn Git fundamentals before focusing on GitHub features",
      "Explore GitHub's features beyond just hosting: Actions, Projects, Issues",
      "Use GitHub for portfolio - recruiters look at GitHub profiles",
    ],
  },
  {
    id: "git-vs-github",
    category: "GitHub Fundamentals",
    title: "Git vs GitHub",
    description:
      "Understand the crucial difference between Git (the version control system) and GitHub (the hosting platform).",
    overview:
      "Git and GitHub are often confused, but they serve different purposes. Git is the distributed version control system that runs locally on your computer and tracks changes to your code. GitHub is a cloud-based hosting service that stores Git repositories online and adds collaboration features. You can use Git without GitHub, but you can't use GitHub without Git.",
    detailedExplanation: [
      "Git is software you install on your computer created by Linus Torvalds in 2005. It works entirely offline, tracking your changes, creating commits, managing branches, all locally. You don't need an internet connection or any external service to use Git - it's a standalone tool.",
      "GitHub is a company and web-based platform launched in 2008 that hosts Git repositories. It's one of several Git hosting services (others include GitLab, Bitbucket, Gitea). GitHub adds a web interface, collaboration tools like pull requests and code review, and social features like following developers and starring projects.",
      "The relationship: Git is the foundation, GitHub is built on top of it. When you push to GitHub, you're using Git to send your local commits to GitHub's servers. When you create a pull request on GitHub, you're using GitHub's interface to propose merging Git branches.",
      "Alternatives to GitHub exist because Git is open source and standardized. If you learn Git, you can work with any Git hosting service. The Git commands remain the same whether you're using GitHub, GitLab, Bitbucket, or self-hosted solutions.",
    ],
    codeBlocks: [
      {
        label: "Git (local operations)",
        language: "bash",
        code: "git init\ngit add .\ngit commit -m 'Local commit'\ngit branch feature\ngit merge feature",
        explanation: "Git works entirely on your local machine",
      },
      {
        label: "GitHub (remote operations)",
        language: "bash",
        code: "git remote add origin https://github.com/user/repo.git\ngit push origin main\ngit pull origin main",
        explanation: "GitHub commands involve remote repository",
      },
    ],
    keyTakeaways: [
      "Git = version control system (software on your computer)",
      "GitHub = hosting service for Git repositories (website/platform)",
      "Git works offline, GitHub requires internet",
      "GitHub is one of many Git hosting services",
      "You can use Git without GitHub, but not GitHub without Git",
    ],
    commonMistakes: [
      "Using 'Git' and 'GitHub' interchangeably",
      "Thinking GitHub invented Git (Git came first)",
      "Believing you must use GitHub to use Git",
      "Not understanding Git is the foundation, GitHub is just hosting",
    ],
    tips: [
      "Master Git fundamentals first, then learn GitHub features",
      "Remember: Git is the tool, GitHub is the service",
      "Your Git skills transfer to any hosting platform",
    ],
  },
  {
    id: "public-vs-private",
    category: "GitHub Fundamentals",
    title: "Public vs Private",
    description: "Understanding repository visibility and access controls.",
    overview:
      "GitHub repositories can be either Public or Private. Public repositories are visible to the entire internet and are the foundation of open source. Private repositories are only accessible to you and specific collaborators you invite.",
    detailedExplanation: [
      "Public: Anyone can see the code, clone it, and fork it. You choose who can commit (push) to it. Use this for open source projects, portfolios, and knowledge sharing.",
      "Private: Only you and invited collaborators can see the code. Use this for proprietary software, client work, or projects you aren't ready to share yet.",
      "Cost: Both are free on GitHub's personal plan. However, private repositories on free accounts historically had limits on the number of collaborators (now mostly lifted but with feature restrictions like branch protection rules).",
    ],
    keyTakeaways: [
      "Public = Open Source (everyone can see)",
      "Private = Proprietary/Secret (invite only)",
      "You can change visibility in Settings -> Danger Zone",
      "Be careful not to commit secrets (API keys) to Public repos!",
    ],
    commonMistakes: [
      "Accidentally publishing private company code as Public",
      "Committing personal passwords to a Public repo",
      "Thinking 'Public' means anyone can edit your code (they can only fork/PR, not push directly)",
    ],
  },
  {
    id: "github-fundamentals-interview-questions",
    category: "GitHub Fundamentals",
    title: "Interview Questions",
    description:
      "Common interview questions about GitHub, visibility, and repo management.",
    overview:
      "This section covers interview questions related to the GitHub platform itself, distinct from Git commands. Expect questions about the difference between Public/Private repos, how to secure them, and the role of READMEs/Licenses.",
    detailedExplanation: [
      "Understand the implications of making a repo Public.",
      "Know what a LICENSE file does and why it's important for Public repos.",
      "Be prepared to explain forks vs clones in the context of GitHub.",
    ],
    keyTakeaways: [
      "Public repos need licenses to be truly open source",
      ".gitignore is crucial for keeping repos clean",
      "GitHub handles remote storage and access control",
    ],
    commonMistakes: [
      "Failing to explain the security risks of Public repos (secrets)",
      "Not knowing the difference between a fork (GitHub concept) and a branch (Git concept)",
    ],
    interviewQuestions: [
      "What is the difference between a Public and Private repository?",
      "Can you change a repository from Public to Private later?",
      "What happens to forks when a Private repository is deleted?",
      "Why is it important to include a LICENSE file in a public repository?",
      "What is the purpose of a README.md file?",
      "How do you prevent creating a repository with the same name as an existing one?",
      "What is the 'Danger Zone' in GitHub repository settings?",
      "Does GitHub own your code if you host it publicly?",
      "What is a GitHub Gist and how does it differ from a repository?",
    ],
    lastUpdated: "2026-02-14",
  },

  // ===== GITHUB COLLABORATION =====
  {
    id: "creating-repository",
    category: "Github Collaboration",
    title: "Creating a Repository",
    description: "Initialize a new project and publish it to GitHub.",
    overview:
      "Creating a repository is the first step in any Git project. You can start a local repository with `git init` or create one on GitHub and clone it. PUBLISHING a local repository to GitHub links your local work to a remote server, allowing for backup and collaboration.",
    detailedExplanation: [
      "To start a new project locally, run `git init`. This creates a hidden `.git` folder that tracks changes. To share this, you create an empty repository on GitHub (without a README, license, or .gitignore to avoid conflicts) and then push your local repo to it.",
      "Alternatively, you can create a repository on GitHub with initial files (README, .gitignore) and then `git clone` it to your machine. This is often easier for beginners as it sets up the remote connection automatically.",
      "Connecting a local repo to GitHub involves adding a remote: `git remote add origin <url>`. 'origin' is just the standard name for the main remote server.",
      "The first push requires setting the upstream branch: `git push -u origin main`. This links your local 'main' branch to the remote 'main' branch, so future pushes can just be `git push`.",
    ],
    codeBlocks: [
      {
        label: "Option 1: Push existing local repo",
        language: "bash",
        code: "git remote add origin https://github.com/user/repo.git\ngit branch -M main\ngit push -u origin main",
        explanation: "Connects local repo to GitHub and pushes code",
      },
      {
        label: "Option 2: Clone new repo",
        language: "bash",
        code: "git clone https://github.com/user/repo.git\ncd repo",
        explanation: "Downloads remote repo (already connected)",
      },
      {
        label: "Verify remote connection",
        language: "bash",
        code: "git remote -v",
        explanation: "Lists linked remote repositories (fetch/push URLs)",
      },
    ],
    keyTakeaways: [
      "Two ways to start: init locally then push, OR create remotely then clone",
      "origin is the default alias for the remote repository URL",
      "-u flag links local branch to remote branch (upstream)",
      "Always rename master to main for modern defaults (git branch -M main)",
    ],
    commonMistakes: [
      "Initializing a repo inside another repo (nested .git folders)",
      "Creating a repo on GitHub with a README and trying to push an existing local repo (causes fatal: refusing to merge unrelated histories)",
      "Forgetting to add the remote before trying to push",
    ],
    tips: [
      "Use `git clone` for the easiest start",
      "Use GitHub CLI (`gh repo create`) to do everything from terminal",
      "Check `git remote -v` if push fails to ensure correct URL",
    ],
  },
  {
    id: "forking",
    category: "Github Collaboration",
    title: "Forking",
    description:
      "Create a personal copy of someone else's repository to contribute changes.",
    overview:
      "Forking is a GitHub feature (not a Git command) that allows you to create a personal copy of another user's repository. It bridges the gap between reading code and contributing to it. You clone your fork, make changes, and then propose them back to the original project via a Pull Request.",
    detailedExplanation: [
      "When you fork a repo, you get a full copy under your GitHub account. You have full write access to this copy, unlike the original repo which you might only have read access to.",
      "The standard open-source workflow: Fork the repo -> Clone your fork -> Create a branch -> Make changes -> Push to YOUR fork -> Open Pull Request to original repo.",
      "A fork is not automatically synced with the original repository. You must manually fetch updates from the original (often called 'upstream') to keep your fork up to date.",
    ],
    codeBlocks: [
      {
        label: "Clone your fork",
        language: "bash",
        code: "git clone https://github.com/YOUR-USERNAME/repo.git",
        explanation: "Downloads your personal copy of the project",
      },
      {
        label: "See remotes",
        language: "bash",
        code: "git remote -v\n# origin  https://github.com/YOUR-USERNAME/repo.git (fetch)\n# origin  https://github.com/YOUR-USERNAME/repo.git (push)",
        explanation: "Shows only your fork initially",
      },
    ],
    keyTakeaways: [
      "Forking makes a server-side copy on GitHub",
      "Allows you to modify ANY open-source project freely",
      "First step in the 'Fork & Pull' workflow",
      "You need to manually sync your fork with original repo",
    ],
    commonMistakes: [
      "Cloning the original repo instead of your fork (you won't be able to push!)",
      "Forgetting to keep the fork updated (diverging too far)",
      "Thinking forking affects the original repository (it doesn't)",
    ],
    tips: [
      "Always clone YOUR fork, not the original",
      "Use descriptive branch names even on forks",
      "GitHub now provides a 'Sync Fork' button in the UI for ease",
    ],
  },
  {
    id: "syncing-fork",
    category: "Github Collaboration",
    title: "Syncing a Fork",
    description: "Keep your fork up-to-date with the original repository.",
    overview:
      "Since a fork is a static copy, it doesn't automatically receive updates from the original repository (upstream). Syncing ensures your code is based on the latest version, minimizing conflicts when you eventually submit a Pull Request.",
    detailedExplanation: [
      "To sync locally, you typically add a second remote called 'upstream' pointing to the original repository. You then fetch from upstream and merge (or rebase) it into your local main branch.",
      "The workflow: `git fetch upstream` (downloads updates) -> `git checkout main` -> `git merge upstream/main` (integrates updates). Then you `git push origin main` to update your fork on GitHub.",
      "Keeping your fork synced prevents 'merge hell' where your feature branch is months behind the main project.",
    ],
    codeBlocks: [
      {
        label: "Add upstream remote",
        language: "bash",
        code: "git remote add upstream https://github.com/ORIGINAL-OWNER/repo.git",
        explanation: "Links to the original repository",
      },
      {
        label: "Sync main branch",
        language: "bash",
        code: "git fetch upstream\ngit checkout main\ngit merge upstream/main",
        explanation: "Updates local main with original repo's changes",
      },
      {
        label: "Push updates to your fork",
        language: "bash",
        code: "git push origin main",
        explanation: "Updates your GitHub fork properties",
      },
      {
        label: "One-liner sync (if on main)",
        language: "bash",
        code: "git pull upstream main",
        explanation: "Fetch and merge in one step",
      },
    ],
    keyTakeaways: [
      "upstream = original repo, origin = your fork",
      "Sync regularly to avoid massive conflicts",
      "Never commit directly to main in a fork (keep it clean for syncing)",
      "Feature branches should be rebased onto updated main",
    ],
    commonMistakes: [
      "Forgetting to add the upstream remote",
      "Merging upstream changes into a feature branch instead of main",
      "Never syncing and sending a PR with 1000+ conflict lines",
    ],
    tips: [
      "Check `git remote -v` to confirm upstream is set",
      "Use GitHub's 'Sync Fork' button if you don't want to use CLI",
      "Always sync before starting a new feature branch",
    ],
  },
  {
    id: "remote-url-management",
    category: "Github Collaboration",
    title: "Remote URL Management",
    description: "View, change, and manage remote repository connections.",
    overview:
      "Git remotes are just aliases for URLs. You might need to change a remote URL if you switch from HTTPS to SSH, move a repository to a new organization, or rename a repository. Managing these URLs correctly is key to connectivity.",
    detailedExplanation: [
      "The `git remote` command manages the set of tracked repositories. `origin` is the default, but you can have many. For example, a deployment remote (heroku) or a colleague's fork (jane).",
      "Changing a URL is common when switching authentication methods (HTTPS vs SSH). SSH is generally preferred for security and convenience (no typing passwords).",
      "`git remote set-url origin <new-url>` updates an existing remote. `git remote rename` and `git remote remove` help organize your connections.",
    ],
    codeBlocks: [
      {
        label: "View remote URLs",
        language: "bash",
        code: "git remote -v",
        explanation: "Shows fetch and push URLs for each remote",
      },
      {
        label: "Change remote URL",
        language: "bash",
        code: "git remote set-url origin git@github.com:user/repo.git",
        explanation: "Updates 'origin' to use SSH URL",
      },
      {
        label: "Rename a remote",
        language: "bash",
        code: "git remote rename origin old-origin",
        explanation: "Changes alias from 'origin' to 'old-origin'",
      },
      {
        label: "Remove a remote",
        language: "bash",
        code: "git remote remove upstream",
        explanation: "Deletes the connection to 'upstream'",
      },
    ],
    keyTakeaways: [
      "Remotes are just named bookmarks for URLs",
      "You can change URLs without losing history",
      "HTTPS URLs require credential helper or tokens",
      "SSH URLs require SSH keys set up with GitHub",
    ],
    commonMistakes: [
      "Typing the wrong URL and getting 'Repository not found'",
      "Trying to push to a read-only HTTP URL",
      "Confusing `remote set-url` with `remote add`",
    ],
    tips: [
      "Use SSH (git@github.com...) for easier pushing without passwords",
      "Run `git remote -v` whenever connection fails",
      "Clean up old remotes from deleted forks",
    ],
  },
  {
    id: "upstream-remote",
    category: "Github Collaboration",
    title: "Upstream Remote",
    description:
      "Understand the concept of upstream vs origin in forking workflows.",
    overview:
      "In a Fork & Pull workflow, you interact with two remotes: 'origin' (your fork) and 'upstream' (the original project). Understanding the flow of data between these three points (local, origin, upstream) is crucial for contributing to open source.",
    detailedExplanation: [
      "Data Flow: Upstream -> Local -> Origin -> Upstream (via PR).",
      "1. You PULL from Upstream to get latest community changes.",
      "2. You PUSH to Origin to back up your work and prepare for PR.",
      "3. You never push to Upstream (usually forbidden).",
      "4. You open a Pull Request from Origin to Upstream on GitHub website.",
    ],
    codeBlocks: [
      {
        label: "Standard Fork Setup",
        language: "bash",
        code: "git remote add origin <your-fork-url>\ngit remote add upstream <original-repo-url>",
        explanation: "The standard two-remote configuration",
      },
      {
        label: "Verify setup",
        language: "bash",
        code: "git remote -v",
        explanation:
          "Should show 4 lines: origin (fetch/push) and upstream (fetch/push)",
      },
    ],
    keyTakeaways: [
      "Origin = Your Copy (Read/Write)",
      "Upstream = Original Project (Read Only usually)",
      "Pull from Upstream, Push to Origin",
      "Don't confuse the two or you'll get permission errors",
    ],
    commonMistakes: [
      "Trying to push to upstream without permission",
      "Pulling from origin instead of upstream to update main",
      "Naming the upstream remote something random like 'source'",
    ],
    tips: [
      "Configuration is per-local-repository",
      "You can have remotes for teammates too (e.g., 'git remote add susan ...')",
      "Use 'git fetch --all' to update all remotes at once",
    ],
  },
  {
    id: "pull-request",
    category: "Github Collaboration",
    title: "Pull Request (PR)",
    description: "Propose changes to a repository and initiate code review.",
    overview:
      "A Pull Request (PR) is a platform feature (GitHub/GitLab) that lets you tell others about changes you've pushed to a branch. It's a dedicated forum for discussing the proposed changes, reviewing code, and ensuring quality before merging into the main codebase.",
    detailedExplanation: [
      "A PR compares your feature branch with the target branch (usually 'main'). It shows the diff, commits, and allows for line-by-line comments.",
      "PRs are the heart of collaboration. They run CI/CD tests automatically, require approvals from team members, and prevent broken code from reaching production.",
      "You don't need to close a PR to update it. Just push new commits to the same branch, and the PR updates automatically. This is key for addressing feedback.",
    ],
    codeBlocks: [
      {
        label: "Workflow",
        language: "text",
        code: "1. Create Branch -> 2. Commit Changes -> 3. Push to Origin\n4. Open PR on GitHub -> 5. Review & Discuss -> 6. Merge",
        explanation: "The lifecycle of a code change",
      },
      {
        label: "Update an existing PR",
        language: "bash",
        code: "git add .\ngit commit -m 'Address review comments'\ngit push origin feature-branch",
        explanation: "Just push to the same branch to update the PR",
      },
    ],
    keyTakeaways: [
      "PRs are for discussion and review BEFORE merging",
      "Pushing to the branch updates the PR automatically",
      "PRs can trigger automated tests (CI)",
      "You can draft a PR to show work-in-progress",
    ],
    commonMistakes: [
      "Closing a PR and opening a new one just to update code",
      "Merging your own PR without review (unless allowed)",
      "Including unrelated changes in a single PR (keep it focused)",
    ],
    tips: [
      "Write a clear PR description with screenshots/videos",
      "Link issues using 'Fixes #123' in the description",
      "Review your own code/diff before creating the PR",
    ],
  },
  {
    id: "code-review",
    category: "Github Collaboration",
    title: "Code Review",
    description:
      "Best practices for reviewing code and responding to feedback.",
    overview:
      "Code review is a quality assurance process where developers examine each other's code. It's not just about finding bugs; it's about knowledge sharing, maintaining consistency, and improving design.",
    detailedExplanation: [
      "As a Reviewer: Be kind and constructive. commenting 'This is bad' is unhelpful. Explain WHY and suggest alternatives. Focus on logic, security, and readability, not just style (use linters for that).",
      "As an Author: Don't take feedback personally. The goal is better code, not criticizing you. If you disagree, explain your reasoning politely.",
      "GitHub allows 'Suggestions', where reviewers can write code snippets that authors can commit directly from the UI.",
    ],
    codeBlocks: [
      {
        label: "Review Checklist",
        language: "text",
        code: "- Does it solve the problem?\n- Is it readable and maintainable?\n- Are there tests?\n- Does it follow security best practices?\n- Is documentation updated?",
        explanation: "What to look for",
      },
    ],
    keyTakeaways: [
      "Code review improves quality and team knowledge",
      "Be constructive and specific",
      "Automate style checks to focus review on logic",
      "Small PRs are easier to review than massive ones",
    ],
    commonMistakes: [
      "Rubber-stamping (approving without reading)",
      "Nitpicking styling issues that tools should catch",
      "Being defensive about feedback",
      "Reviewing too much code at once (fatigue)",
    ],
    tips: [
      "Review code locally if it's complex",
      "Use 'Draft PR' status until ready for review",
      "Batch your comments instead of sending one by one",
    ],
  },
  {
    id: "squash-merge",
    category: "Github Collaboration",
    title: "Squash & Merge",
    description: "Combine all PR commits into a single commit upon merging.",
    overview:
      "Squash & Merge is a GitHub option that takes all the commits from a Pull Request and combines them into one single commit on the target branch. This creates a very clean, linear history on the main branch, hiding the messy 'work in progress' commits.",
    detailedExplanation: [
      "Instead of seeing 'Typo', 'WIP', 'Fix bug', 'Fix bug again' in the main history, you just see one commit: 'Add Feature X (#123)'.",
      "This is excellent for the main branch history but destroys the individual commit history of the feature branch. Use this when the individual steps aren't important, just the final result.",
      "It makes 'git revert' easier because the entire feature is one commit.",
    ],
    codeBlocks: [
      {
        label: "Visual Comparison",
        language: "text",
        code: "Normal Merge:  o---o---o---M  (All commits preserved)\nSquash Merge:  o------------S  (One single commit)",
        explanation: "Squash compresses history",
      },
    ],
    keyTakeaways: [
      "Keeps main branch history clean and linear",
      "Combines messy WIP commits into one",
      "Perfect for features that don't need granular history",
      "Changes the Author to the person clicking merge (usually)",
    ],
    commonMistakes: [
      "Squashing when individual commit history IS important",
      "writing a vague commit message for the squashed commit",
      "Confusing squash merge (GitHub) with git merge --squash (Local)",
    ],
    tips: [
      "Most open source projects prefer Squash & Merge",
      "Ensure the final commit message is descriptive",
      "Use it for small to medium features",
    ],
  },
  {
    id: "rebase-merge",
    category: "Github Collaboration",
    title: "Rebase & Merge",
    description:
      "Replay PR commits onto the target branch for a linear history.",
    overview:
      "Rebase & Merge replays the commits from the PR one by one onto the base branch. Unlike a regular merge, it doesn't create a merge commit. Unlike squash, it preserves individual commits. It forces a linear history.",
    detailedExplanation: [
      "This is like running `git rebase main` locally and then doing a fast-forward merge.",
      "It's great if you want to keep the commit history but avoid the 'diamond shape' of merge bubbles in the graph.",
      "However, if the commits are messy ('fix', 'fix again'), they will all pollute the main history. It works best when the PR author has already cleaned up their commits.",
    ],
    codeBlocks: [
      {
        label: "Visual Comparison",
        language: "text",
        code: "Normal Merge:  o---o-M\nRebase Merge:  o---o---o  (Linear, no merge commit)",
        explanation: "Commits are reapplied on top of main",
      },
    ],
    keyTakeaways: [
      "Creates a linear history without merge commits",
      "Preserves individual commits (unlike squash)",
      "Requires clean commit history from the author",
      "Can't easily revert the whole feature (must revert multiple commits)",
    ],
    commonMistakes: [
      "Using this with messy PRs (pollutes history)",
      " expecting a merge commit to mark the integration point",
      "Not testing that the reordered commits still work individually",
    ],
    tips: [
      "Enforce 'Linear history' in GitHub branch protection",
      "Ask contributors to squash their own commits before merging",
      "Use for projects that demand a strictly linear timeline",
    ],
  },

  // ===== FORKING & OPEN SOURCE =====
  {
    id: "what-is-fork",
    category: "Forking & Open Source",
    title: "What is a Fork?",
    description:
      "A server-side copy of a repository that allows you to freely experiment without affecting the original project.",
    overview:
      "A fork is a personal copy of another user's repository that lives on your account. Forking allows you to freely make changes to a project without affecting the original repository. It is the fundamental mechanism for contributing to open source projects where you do not have write access.",
    detailedExplanation: [
      "Forking is not a Git command; it is a feature provided by Git hosting services like GitHub.",
      "When you fork a repository, you get a full copy of the code, history, and branches under your own username.",
      "You have full read/write access to your fork, allowing you to push changes, create branches, and delete it if needed.",
      "The connection between your fork and the original repository allows you to easily submit Pull Requests to propose your changes back to the original project.",
    ],
    codeBlocks: [
      {
        label: "Visual Workflow",
        language: "text",
        code: "Original Repo (upstream)  ->  Fork (origin)  ->  Local Clone",
        explanation: "The three copies of code involved in forking",
      },
    ],
    keyTakeaways: [
      "Forking copies a repo to your account",
      "Enables contribution without write access to original",
      "Bridge between reading code and writing code",
      "Distinct from cloning (which copies to your local machine)",
    ],
    commonMistakes: [
      "Confusing Fork (GitHub copy) with Clone (Local copy)",
      "Thinking forking notifies the original author (it usually does)",
      "Expecting the fork to automatically stay updated with the original (it doesn't)",
    ],
  },
  {
    id: "fork-workflow",
    category: "Forking & Open Source",
    title: "The Forking Workflow",
    description:
      "The standard process for contributing to open source projects.",
    overview:
      "The 'Fork and Pull' workflow is the standard way to contribute to open source. It involves forking the repo, cloning it locally, creating a branch, making changes, pushing to your fork, and finally opening a Pull Request.",
    detailedExplanation: [
      "1. Fork the repository on GitHub.",
      "2. Clone your fork to your local machine (`git clone <your-fork-url>`).",
      "3. Create a new branch for your feature or fix (`git checkout -b fix/typo`).",
      "4. Make changes and commit them.",
      "5. Push the branch to YOUR fork (`git push origin fix/typo`).",
      "6. Open a Pull Request on GitHub from your fork to the original repository.",
    ],
    codeBlocks: [
      {
        label: "Step-by-step commands",
        language: "bash",
        code: "git clone https://github.com/YOUR-USERNAME/repo.git\ncd repo\ngit checkout -b feature/awesome-idea\n# ... make changes ...\ngit commit -am 'Add awesome idea'\ngit push origin feature/awesome-idea",
        explanation: "Standard contribution loop",
      },
    ],
    keyTakeaways: [
      "Always work on a branch, never on main",
      "Push to 'origin' (your fork), not 'upstream' (original repo)",
      "Pull Request compares your fork's branch to original's main",
    ],
    commonMistakes: [
      "Trying to push directly to the original repository (permission denied)",
      "Committing to main branch (makes syncing hard)",
      " forgetting to add the upstream remote for syncing",
    ],
  },
  {
    id: "sync-fork",
    category: "Forking & Open Source",
    title: "Syncing a Fork (Open Source)",
    description:
      "Keeping your contribution branch up to date with the rapidly changing original project.",
    overview:
      "Open source projects move fast. While you are working on your feature, the original repository (upstream) might have accepted other PRs. Syncing ensures your code is based on the latest version, preventing merge conflicts when you submit your PR.",
    detailedExplanation: [
      "To sync, you need to fetch changes from the 'upstream' remote and merge them into your local branch.",
      "If you are working on a feature branch, it is often better to `rebase` your branch onto `upstream/main` to keep a clean history.",
      "GitHub also provides a 'Sync Fork' button in the web UI which updates your fork's main branch, which you can then pull.",
    ],
    codeBlocks: [
      {
        label: "Sync via CLI (Rebase method)",
        language: "bash",
        code: "git fetch upstream\ngit checkout feature-branch\ngit rebase upstream/main",
        explanation: "Replays your work on top of latest upstream changes",
      },
      {
        label: "Sync via CLI (Merge method)",
        language: "bash",
        code: "git fetch upstream\ngit merge upstream/main",
        explanation: "Standard merge update",
      },
    ],
    keyTakeaways: [
      "Keeping synced reduces 'merge hell'",
      "Rebasing is preferred for feature branches in open source",
      "'Sync Fork' button is a convenient shortcut for updating main",
    ],
    commonMistakes: [
      "Never syncing and discovering months of conflicts later",
      "Force pushing after rebase without communicating (if shared)",
    ],
  },
  {
    id: "forking-open-source-interview-questions",
    category: "Forking & Open Source",
    title: "Interview Questions",
    description:
      "Common interview questions about open source contributions and forking models.",
    overview:
      "This section covers the soft skills and technical details of open source. Expect questions about licensing, the difference between forking and branching, and how to handle rejected Pull Requests.",
    detailedExplanation: [
      "Understand why projects use Forks instead of just giving everyone write access (security, code review enforcement).",
      "Be able to explain what a CLA (Contributor License Agreement) is.",
      "Know how to update a Pull Request after you've already opened it (just push more commits to the branch).",
    ],
    keyTakeaways: [
      "Forking = Decentralized collaboration",
      "PRs are distinct from the code itself",
      "Licensing dictates how you can use the fork",
    ],
    commonMistakes: [
      "Thinking a PR is a one-time 'package' (it updates dynamically with the branch)",
      "Not checking the license before forking",
    ],
    interviewQuestions: [
      "What is the difference between forking a repository and cloning it?",
      "Why can't you just push to an open source repository directly?",
      "How do you update a Pull Request that is already open?",
      "What happens to your fork if the original repository is deleted?",
      "What is an 'upstream' remote?",
      "Can you make a private fork of a public repository?",
      "What is a CLA and why do some projects require it?",
      "How do you resolve conflicts between your fork and the upstream repo?",
      "What is the difference between merging and rebasing when syncing a fork?",
    ],
    lastUpdated: "2026-02-14",
  },

  // ===== PULL REQUEST / MERGE REQUEST =====
  {
    id: "what-is-pull-request",
    category: "Pull Request / Merge Request",
    title: "What is a Pull Request?",
    description:
      "The core collaboration mechanism for reviewing and merging code.",
    overview:
      "A Pull Request (PR) - called a Merge Request (MR) in GitLab - is a method of submitting contributions to a project. It asks the maintainers to pull your changes into their repository. It provides a dedicated forum for discussing the proposed changes before they are merged.",
    detailedExplanation: [
      "A PR is not a Git command; it's a platform feature (GitHub, GitLab, Bitbucket).",
      "It shows the diff between your branch and the target branch (usually main).",
      "It allows for line-by-line code review, comments, and automated testing (CI) to run before the code is accepted.",
    ],
    keyTakeaways: [
      "PRs are about communication and review",
      "They act as a quality gate before code enters production",
      "You can continue pushing commits to a PR branch to update it",
    ],
    commonMistakes: [
      "Thinking a PR merges code automatically (it just proposes it)",
      "Opening a PR for a branch that has no changes",
    ],
  },
  {
    id: "create-pull-request",
    category: "Pull Request / Merge Request",
    title: "Creating a Pull Request",
    description: "How to open a PR to propose changes.",
    overview:
      "After pushing your branch to GitHub, you can open a PR. You select the 'base' branch (where you want your code to go) and the 'compare' branch (your new code).",
    detailedExplanation: [
      "GitHub usually detects your recently pushed branch and shows a 'Compare & pull request' button.",
      "If not, go to the 'Pull requests' tab and click 'New pull request'.",
      "Draft PRs are a useful feature for showing work-in-progress code that isn't ready for review yet.",
    ],
    codeBlocks: [
      {
        label: "Process",
        language: "text",
        code: "1. git push origin feature-branch\n2. Go to GitHub repo\n3. Click 'Compare & pull request'\n4. Write description filling out the template\n5. Click 'Create pull request'",
        explanation: "Standard workflow",
      },
    ],
    keyTakeaways: [
      "Write a clear title and description",
      "Link related issues (e.g., 'Closes #123')",
      "Use screenshots for UI changes",
      "Assign reviewers to get attention",
    ],
    commonMistakes: [
      "Leaving the description blank",
      "Creating a PR against the wrong base branch (e.g., merging to master instead of develop)",
    ],
  },
  {
    id: "review-pull-request",
    category: "Pull Request / Merge Request",
    title: "Reviewing a Pull Request",
    description: "Best practices for providing and receiving code feedback.",
    overview:
      "Code review is a critical skill. It's not just about finding bugs, but about knowledge sharing, consistency, and maintaining code quality. GitHub allows reviewers to comment on specific lines, request changes, or approve the PR.",
    detailedExplanation: [
      "As a reviewer: Be kind but rigorous. Explain *why* you are requesting a change. Use 'Suggestion' feature to offer code fixes directly.",
      "As an author: Don't take feedback personally. Respond to every comment. If you disagree, explain your reasoning respectfully.",
    ],
    keyTakeaways: [
      "Review logic, style, and tests",
      "Check out the branch locally if you need to verify functionality",
      "Approve only when you are confident the code is safe to merge",
    ],
    commonMistakes: [
      "Rubber-stamping (approving without reading)",
      "Nitpicking styling issues that a linter should catch",
      "Reviewing your own PR (bad practice, often blocked)",
    ],
  },
  {
    id: "merge-pull-request",
    category: "Pull Request / Merge Request",
    title: "Merging a Pull Request",
    description: "Strategies for integrating approved changes.",
    overview:
      "Once a PR is approved and checks pass, it can be merged. GitHub offers three main merge strategies: Create a merge commit (standard), Squash and merge (combines all commits into one), and Rebase and merge (linear history).",
    detailedExplanation: [
      "Merge commit: Preserves all history and branch structure. Good for visualizing feature branches.",
      "Squash and merge: Takes all commits from the PR and squashes them into a single commit on main. Keeps main history clean but loses individual commit detail.",
      "Rebase and merge: Replays commits on top of main. Linear history, but can be tricky with conflicts.",
    ],
    keyTakeaways: [
      "Squash and merge is popular for keeping the main branch clean",
      "Always delete the branch after merging to avoid clutter",
      "Ensure all CI checks (tests, linting) persist before merging",
    ],
    commonMistakes: [
      "Merging without waiting for CI checks to pass",
      "Squashing a feature that really should have been multiple atomic commits",
    ],
  },
  {
    id: "close-pull-request",
    category: "Pull Request / Merge Request",
    title: "Closing a Pull Request",
    description: "What to do when a PR is rejected or abandoned.",
    overview:
      "Sometimes code shouldn't be merged. Maybe the feature is no longer needed, or the approach was wrong. In these cases, you 'close' the PR without merging it.",
    detailedExplanation: [
      "Closing a PR does not delete the branch; it just marks the discussion as finished.",
      "You can always reopen a closed PR if you change your mind.",
      "It is polite to leave a comment explaining *why* you are closing it (e.g., 'Superceded by PR #456').",
    ],
    keyTakeaways: [
      "Don't be afraid to close stale PRs",
      "Closing is non-destructive",
      "Provide context for future reference",
    ],
    commonMistakes: [
      "Leaving dead PRs open for months (confuses the team)",
      "Deleting the branch without closing the PR (leaves a 'ghost' PR)",
    ],
  },
  {
    id: "pull-request-interview-questions",
    category: "Pull Request / Merge Request",
    title: "Interview Questions",
    description:
      "Common interview questions about Code Review and Merge strategies.",
    overview:
      "This section covers the soft skills of code review and the technical details of merge strategies. Expect questions on how to handle disagreements, what 'CI' means in the context of a PR, and the difference between squashing and merging.",
    detailedExplanation: [
      "Be prepared to discuss your favorite merge strategy (Squash vs Merge Commit) and why.",
      "Know how to resolve a merge conflict in a PR UI (or locally).",
      "Understand the concept of 'Branch Protection Rules' (e.g., requiring 1 approval before merge).",
    ],
    keyTakeaways: [
      "Code review is about quality assurance",
      "Merge conflicts are normal",
      "CI/CD pipelines usually run on PRs",
    ],
    commonMistakes: [
      "Not knowing the difference between 'Squash' and 'Merge'",
      "Saying you approve PRs without reading them",
    ],
    interviewQuestions: [
      "What is the difference between 'Squash and Merge' and 'Create a Merge Commit'?",
      "How do you handle a code review where you strongly disagree with the feedback?",
      "What is CI (Continuous Integration) and why is it important for PRs?",
      "What are Branch Protection Rules?",
      "Can you merge a PR with conflicts?",
      "What is the purpose of a 'Draft' Pull Request?",
      "How do you reference a GitHub issue in a PR so it closes automatically?",
      "Why should you delete the branch after merging?",
      "What is 'CODEOWNERS' file in GitHub?",
    ],
    lastUpdated: "2026-02-14",
  },

  // ===== GITHUB DESKTOP =====
  {
    id: "install-github-desktop",
    category: "GitHub Desktop",
    title: "Install GitHub Desktop",
    description: "Setting up the official GUI for GitHub.",
    overview:
      "GitHub Desktop is an open-source Electron-based application that allows you to interact with GitHub using a graphical user interface (GUI) instead of the command line. It wraps core Git commands in a visual layer, making it easier to visualize diffs, manage branches, and resolve conflicts.",
    detailedExplanation: [
      "Download the installer from desktop.github.com.",
      "Install and sign in with your GitHub account.",
      "It automatically configures your Git name and email, saving you the `git config` steps.",
    ],
    keyTakeaways: [
      "Great for beginners who are intimidated by the terminal",
      "Visualizes changes and history much better than the CLI",
      "Available for macOS and Windows (Linux is community-supported)",
    ],
    commonMistakes: [
      "Assuming you can't use the CLI if you install Desktop (you can use both interchangeably)",
      "Not signing in, which limits functionality",
    ],
  },
  {
    id: "clone-via-desktop",
    category: "GitHub Desktop",
    title: "Clone via Desktop",
    description: "Downloading a repository without touching the terminal.",
    overview:
      "You can clone repositories directly from the GitHub website into GitHub Desktop. This sets up the local folder and remote connection automatically.",
    detailedExplanation: [
      "On GitHub.com repo page: Click 'Code' -> 'Open with GitHub Desktop'.",
      "In Desktop app: File -> Clone Repository -> Select from your list or paste URL.",
    ],
    codeBlocks: [
      {
        label: "Visual Step",
        language: "text",
        code: "Green 'Code' Button -> Local -> Open with GitHub Desktop",
        explanation: "The easiest way to clone",
      },
    ],
    keyTakeaways: [
      "Eliminates the need to copy-paste URLs manually",
      "Automatically maps the folder to your default project directory",
    ],
    commonMistakes: [
      "Cloning into a nested folder by accident",
      "Forgetting where you saved the repo (check Preferences for default path)",
    ],
  },
  {
    id: "commit-via-desktop",
    category: "GitHub Desktop",
    title: "Commit via Desktop",
    description: "Staging and committing changes visually.",
    overview:
      "GitHub Desktop shows changed files in the left sidebar. You can check/uncheck specific files (or even specific lines!) to stage them, type a summary, and click 'Commit'.",
    detailedExplanation: [
      "The checkbox system replaces `git add`. Checked files are staged.",
      "You can partial-commit a file by clicking the gutter to select specific lines.",
      "The 'Summary' field is the commit title; 'Description' is the body.",
    ],
    keyTakeaways: [
      "Partial staging is much easier in Desktop than CLI",
      "Visual diff helps you review code before committing",
      "Warns you if you try to commit to a protected branch",
    ],
    commonMistakes: [
      "Committing all files without reviewing them",
      "Writing one-word commit messages just because the UI makes it easy",
    ],
  },
  {
    id: "branch-via-desktop",
    category: "GitHub Desktop",
    title: "Branching via Desktop",
    description: "Creating and switching branches via the UI.",
    overview:
      "The 'Current Branch' dropdown allows you to switch branches (checkout) or create new ones. It also handles stashing automatically if you have uncommitted changes when you switch.",
    detailedExplanation: [
      "Click 'Current Branch' -> 'New Branch'.",
      "Type name -> Click 'Create Branch'.",
      "To publish, simply click 'Publish branch' (which runs `git push -u`).",
    ],
    keyTakeaways: [
      "Prevents 'detached HEAD' states commonly hit in CLI",
      "Auto-stashing feature is very helpful for multitasking",
    ],
    commonMistakes: [
      "Forgetting to publish the branch after creating it locally",
      "Branching off the wrong base branch (always check what you are currently on)",
    ],
  },
  {
    id: "push-pull-via-desktop",
    category: "GitHub Desktop",
    title: "Push & Pull via Desktop",
    description: "Syncing changes with a single button.",
    overview:
      "GitHub Desktop simplifies the Fetch/Pull/Push cycle into a single 'Sync' button (or separate buttons if there are specific actions needed). It tells you exactly how many commits you are ahead or behind.",
    detailedExplanation: [
      "Click 'Fetch origin' to check for updates.",
      "If there are updates, it changes to 'Pull origin' with a count (e.g., 'Pull 3 commits').",
      "If you have local commits, it shows 'Push origin'.",
    ],
    keyTakeaways: [
      "No need to remember git fetch vs git pull",
      "Visually indicates incoming vs outgoing commits",
    ],
    commonMistakes: [
      "Forgetting to Sync before starting work (leading to conflicts)",
      "Ignoring the 'Pull' number and pushing anyway (which might fail)",
    ],
  },
  {
    id: "pull-request-via-desktop",
    category: "GitHub Desktop",
    title: "Pull Request via Desktop",
    description: "Previewing and opening PRs from the app.",
    overview:
      "While you can't *review* PRs fully in Desktop, you can initiate them. Detailed review happens on GitHub.com.",
    detailedExplanation: [
      "After pushing a branch, a 'Create Pull Request' button appears.",
      "Clicking it opens your default browser to the GitHub 'Open a Pull Request' page with the branch pre-selected.",
    ],
    keyTakeaways: [
      "Desktop acts as a bridge to the web interface for PRs",
      "You can see which PR is associated with your current branch",
    ],
    commonMistakes: [
      "Looking for a full code review interface inside the Desktop app (it's web-based)",
    ],
  },
  {
    id: "github-desktop-interview-questions",
    category: "GitHub Desktop",
    title: "Interview Questions",
    description: "Common questions about using GUIs vs CLI.",
    overview:
      "Interviewers might ask about the pros and cons of using a GUI like GitHub Desktop. The key is to show you understand what's happening *under the hood*, even if you use a tool.",
    detailedExplanation: [
      "Be honest if you use a GUI, but explain that you know the underlying Git commands.",
      "Explain how Desktop handles authentication (OAuth) vs CLI (SSH/PAT).",
    ],
    keyTakeaways: [
      "GUIs are great for diffs and staging",
      "CLI is better for scripting and advanced operations",
      "Both are valid professional tools",
    ],
    commonMistakes: [
      "Saying 'I only use Desktop because CLI is too hard' (implies lack of deep understanding)",
      "Thinking Desktop can do *everything* CLI can (it cannot, e.g., bisect)",
    ],
    interviewQuestions: [
      "What are the advantages of using a filtered GUI for staging files?",
      "Does GitHub Desktop replace the need to know Git commands?",
      "How does GitHub Desktop handle credentials?",
      "Can you use GitHub Desktop with non-GitHub repositories (e.g., GitLab)?",
      "What happens when you click 'Sync' in GitHub Desktop?",
      "How do you resolve merge conflicts in GitHub Desktop?",
    ],
    lastUpdated: "2026-02-14",
  },

  // ===== COMMON ERRORS =====
  {
    id: "detached-head",
    category: "Common Errors",
    title: "Detached HEAD State",
    description: "You are not on any branch.",
    overview:
      "This scary-sounding error just means you have checked out a specific commit hash instead of a branch name. Any commits you make here will be 'lost' (garbage collected) if you switch away without creating a branch.",
    detailedExplanation: [
      "Happens when you run `git checkout <commit-hash>`.",
      "To fix: Create a branch right where you are: `git checkout -b new-branch-name`.",
      "To escape (and lose changes): `git checkout main`.",
    ],
    codeBlocks: [
      {
        label: "Fixing Detached HEAD",
        language: "bash",
        code: "git checkout -b my-recovery-branch",
        explanation: "Saves your current state into a new branch",
      },
    ],
    keyTakeaways: [
      "Don't panic; your commits are safe as long as you don't switch away",
      "Always create a branch if you intend to make changes",
    ],
    commonMistakes: [
      "Making a bunch of commits in detached HEAD, switching to main, and losing them all",
    ],
  },
  {
    id: "non-fast-forward-error",
    category: "Common Errors",
    title: "Non-Fast-Forward Error",
    description:
      "Git cannot merge your changes cleanly without a merge commit.",
    overview:
      "A fast-forward merge is when Git just moves the pointer forward. If branches have diverged (both have new unique commits), Git refuses to 'fast-forward'.",
    detailedExplanation: [
      "This often happens during `git pull` if you have local commits and the remote also has new commits.",
      "Fix: `git pull --rebase` (replays your work on top) or `git pull` (creates a merge commit).",
    ],
    keyTakeaways: [
      "Diverged branches require a merge or rebase",
      "Fast-forwarding is the cleanest way to update, but not always possible",
    ],
    commonMistakes: ["Panicking when `git status` says 'diverged'"],
  },
  {
    id: "rejected-push",
    category: "Common Errors",
    title: "Rejected Push (Fetch First)",
    description: "The remote contains work that you do not have locally.",
    overview:
      "Git protects you from overwriting others' work. If you try to push, but the remote branch has moved on (someone else pushed), Git rejects your push.",
    detailedExplanation: [
      "Error message: 'Updates were rejected because the remote contains work that you do not have locally.'",
      "Solution: You must `git pull` (fetch + merge) or `git pull --rebase` to integrate their changes before you can push yours.",
    ],
    keyTakeaways: [
      "Never use `--force` unless you explicitly want to delete their work",
      "Pull before you Push",
    ],
    commonMistakes: [
      "Immediately trying `git push --force` to make the error go away (dangerous!)",
    ],
  },
  {
    id: "merge-conflict-error",
    category: "Common Errors",
    title: "Merge Conflict",
    description:
      "Git cannot automatically resolve differences between two branches.",
    overview:
      "A merge conflict happens when two branches have changed the *same line* of a file in different ways, or if one branch deleted a file that the other modified. Git pauses the merge and asks you to choose which version to keep.",
    detailedExplanation: [
      "Git inserts conflict markers `<<<<<<< HEAD` (your changes), `=======` (separator), and `>>>>>>> branch-name` (their changes).",
      "You must open the file, delete the markers, and keep the code you want.",
      "After resolving, you must `git add <file>` and then `git commit` to finish the merge.",
    ],
    codeBlocks: [
      {
        label: "Conflict Markers",
        language: "text",
        code: "<<<<<<< HEAD\nconsole.log('My Code');\n=======\nconsole.log('Their Code');\n>>>>>>> feature-branch",
        explanation: "Delete markers and choose one (or combine both)",
      },
    ],
    keyTakeaways: [
      "Conflicts are normal in collaborative work",
      "Don't commit the conflict markers!",
      "Tools like VS Code make resolving conflicts much easier",
    ],
    commonMistakes: [
      "Panicking and deleting the repository",
      "Resolving the conflict but forgetting to `git add` the file",
    ],
  },
  {
    id: "force-push-warning",
    category: "Common Errors",
    title: "Force Push Warning",
    description: "Overwriting remote history is dangerous.",
    overview:
      "Unlike a regular push, `git push --force` destroys commits on the remote that you don't have locally. This can cause your teammates to lose work.",
    detailedExplanation: [
      "Only force push if you are the ONLY person working on that branch (e.g., after a rebase).",
      "Use `git push --force-with-lease` instead. It checks if anyone else has pushed in the meantime and stops you if they have.",
    ],
    keyTakeaways: [
      "Force push is destructive",
      "Always prefer `--force-with-lease`",
      "Never force push to shared branches like main or develop",
    ],
    commonMistakes: [
      "Force pushing to main to 'fix' a mess, making it worse for everyone else",
    ],
  },
  {
    id: "common-errors-interview-questions",
    category: "Common Errors",
    title: "Interview Questions",
    description: "Testing your troubleshooting skills.",
    overview:
      "Interviewers ask these questions to see if you can get yourself out of trouble. They want to know if you understand *why* errors happen, not just how to copy-paste fixes.",
    detailedExplanation: [
      "Be able to explain what a 'Detached HEAD' is in technical terms (HEAD pointing to a commit, not a ref).",
      "Know the standard procedure for a merge conflict (Edit -> Add -> Commit).",
    ],
    keyTakeaways: [
      "Understanding > Memorizing",
      "Knowing how to recover (reflog) is a superpower",
    ],
    commonMistakes: [
      "Saying 'I just delete the folder and clone again' (shows lack of confidence)",
    ],
    interviewQuestions: [
      "What causes a 'Detached HEAD' state?",
      "How do you resolve a merge conflict?",
      "What is the difference between `git push --force` and `git push --force-with-lease`?",
      "Why does Git sometimes reject your push?",
      "What is a 'fast-forward' merge?",
      "How can you undo a `git reset --hard` if you realized you made a mistake?",
      "What does 'diverged branches' mean?",
      "Why is editing history (rebase) dangerous on shared branches?",
    ],
    lastUpdated: "2026-02-14",
  },

  // ===== PRODUCTION STRATEGY =====
  {
    id: "team-collaboration-model",
    category: "Production Strategy",
    title: "Team Collaboration Model",
    description: "Structuring how teams work together.",
    overview:
      "A successful production strategy often involves a mix of Trunk Based Development for speed and Pull Requests for quality. The 'Golden Path' is to have short-lived feature branches that merge into a protected main branch.",
    detailedExplanation: [
      "Define who has write access to which repositories.",
      "Use 'CODEOWNERS' files to automatically assign reviewers based on which files were touched.",
      "Establish a 'Definition of Done' (e.g., Code Review + Unit Tests + Integration Tests).",
    ],
    keyTakeaways: [
      "Robots (CI) should enforce style; Humans should enforce logic",
      "Smaller PRs get reviewed faster",
      "Don't let the main branch break (it blocks everyone)",
    ],
    commonMistakes: [
      "Having no clear ownership of code modules",
      "Allowing everyone to push directly to main",
    ],
  },
  {
    id: "protected-branches",
    category: "Production Strategy",
    title: "Protected Branches",
    description: "Enforcing rules on key branches.",
    overview:
      "Branch protection rules prevent force pushes, accidental deletions, and unreviewed code from entering critical branches (like main or release).",
    detailedExplanation: [
      "Require pull request reviews before merging (usually 1 or 2 approvals).",
      "Require status checks to pass (CI tests must turn green).",
      "Include administrators: Ensures even the boss can't break the build by skipping rules.",
    ],
    keyTakeaways: [
      "Branch protection is the first line of defense for production code",
      "It disables 'Force Push' by default",
      "It ensures no code enters production without passing CI",
    ],
    commonMistakes: [
      "Protecting too many branches (hinders velocity)",
      "Not requiring status checks (allows broken code to be merged if a human misses it)",
    ],
  },
  {
    id: "code-review-process",
    category: "Production Strategy",
    title: "Code Review Process",
    description: "Standardizing how code is reviewed.",
    overview:
      "A good process balances speed and quality. It shouldn't take days to get a review. Teams often use 'async' reviews but jump on calls for complex architecture changes.",
    detailedExplanation: [
      "Use templates for PR descriptions to ensure context is provided.",
      "Set expectations for turnaround time (e.g., 'Reviews should be done within 24 hours').",
      "Distinguish between 'Blockers' (must fix) and 'Nits' (nice to fix).",
    ],
    keyTakeaways: [
      "Context is king: Explain *why* you made the change",
      "Be respectful and constructive",
      "Automate what can be automated (linting)",
    ],
    commonMistakes: [
      "Using code review to discuss big design changes (too late; do that in planning)",
      "bikeshedding (arguing over minor details)",
    ],
  },
  {
    id: "ci-cd-overview",
    category: "Production Strategy",
    title: "CI/CD Overview",
    description: "Automating the path to production.",
    overview:
      "Continuous Integration (CI) and Continuous Deployment (CD) are the backbone of modern software engineering. CI ensures that every commit is tested. CD ensures that every valid commit is deployed (or at least ready to be).",
    detailedExplanation: [
      "CI: Runs on every push. Checks formatting (Prettier), linting (ESLint), and tests (Jest/Vitest).",
      "CD: Runs on merge to main. Builds the production assets and pushes them to the server (e.g., Vercel, AWS).",
      "GitHub Actions is the integrated tool for this, defined in `.github/workflows` YAML files.",
    ],
    keyTakeaways: [
      "A broken build is an emergency; fix it immediately",
      "Tests give you confidence to refactor",
      "Deployment should be a boring, automated event",
    ],
    commonMistakes: [
      "Treating CI as 'optional' and ignoring red X marks",
      "Deploying from your local machine instead of the CI server (it works on my machine!)",
    ],
  },
  {
    id: "production-strategy-interview-questions",
    category: "Production Strategy",
    title: "Interview Questions",
    description: "High-level questions about software delivery.",
    overview:
      "For senior roles, interviewers care less about `git add` and more about how you manage complexity and risk. These questions test your understanding of the software development lifecycle (SDLC).",
    detailedExplanation: [
      "Be prepared to design a workflow for a team of 50 developers.",
      "Understand the trade-offs between 'deploying fast' and 'deploying safely'.",
      "Know what 'Blue/Green Deployment' or 'Canary Release' means (releasing to a small % of users first).",
    ],
    keyTakeaways: [
      "Process exists to scale the team, not to slow it down",
      "Automation reduces human error",
      "You should know how your code gets to the user",
    ],
    commonMistakes: [
      "Thinking your job ends when you merge the PR",
      "Not knowing if the project uses Semantic Versioning",
    ],
    interviewQuestions: [
      "How do you handle a broken build in the main branch?",
      "What is the difference between specific Continuous Integration and Continuous Deployment?",
      "Why are 'long-lived feature branches' bad for CI/CD?",
      "How would you design a branching strategy for a team with daily releases?",
      "What is the role of a 'staging' environment?",
      "Explain the concept of 'Feature Flags' and how they relate to Git branches.",
      "How do you secure secrets (API keys) in a CI/CD pipeline?",
      "What is 'Semantic Versioning' (SemVer)?",
      "Why is it important to use immutable build artifacts?",
    ],
    lastUpdated: "2026-02-14",
  },
];

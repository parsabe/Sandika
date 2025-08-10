document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ List all the section IDs
  const SECTIONS = [
    "none",
    "profile",
    "family",
    "rules",
    "user-info-section",
    "nigma",
    "arkham",
    "story",
    "tool",
    "lang",
    "git",
    "songs",
    "HounaarAIChat"
  ];

  // 2️⃣ Helper to hide every one of them
  function hideAll() {
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });
  }

  // 3️⃣ Define your button ↔ section mappings
  const MAPPINGS = [
    { buttons: ["profiler", "profiler2"],          section: "profile" },
    { buttons: ["familier", "familier2"],          section: "family" },
    { buttons: ["rules_section", "rules_section2"],section: "rules" },
    { buttons: ["nigma_btn", "nigma_btn2"],        section: "nigma" },
    { buttons: ["arkham_btn", "arkham_btn2"],      section: "arkham" },
    { buttons: ["story_btn", "story_btn2"],        section: "story" },
    { buttons: ["tool_btn", "tool_btn2"],          section: "tool" },
    { buttons: ["lang_btn", "lang_btn2"],          section: "lang" },
    { buttons: ["git_btn", "git_btn2"],            section: "git" },
    { buttons: ["songs_btn", "songs_btn2"],        section: "songs" },
    { buttons: ["HounaarAI"],                      section: "HounaarAIChat", toggle: true }
  ];

  // 4️⃣ Wire up each mapping
  MAPPINGS.forEach(({ buttons, section, toggle }) => {
    buttons.forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (!btn) return;
      btn.addEventListener("click", () => {
        if (toggle) {
          // Chat panel toggles itself
          const panel = document.getElementById(section);
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            hideAll();
            panel.style.display = "block";
            if (typeof loadHistory === "function") {
              loadHistory();
            }
          }
        } else {
          // Normal section show
          hideAll();
          const sec = document.getElementById(section);
          if (sec) sec.style.display = "block";
        }
      });
    });
  });

  // 5️⃣ (Optional) Expose loadHistory/sendMessage for your chat client
  // function loadHistory() { /* ... */ }
  // function sendMessage(text) { /* ... */ }
});
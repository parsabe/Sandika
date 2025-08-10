
/**
 * HounaarAIChatClient
 *
 * Encapsulates all the server communication:
 *  - loadHistory(): fetches past messages
 *  - sendMessage(text): sends a new prompt, receives a reply
 *  - startPolling(ms): (optional) polls for new replies
 */
class HounaarAIChatClient {
  /**
   * @param {Object} opts
   * @param {string} opts.endpoint   URL of your PHP endpoint
   * @param {Function} opts.onMessage Called with {sender, text} whenever a message arrives
   * @param {Function} [opts.onError] Called on any network/error
   */
  constructor({ endpoint, onMessage, onError }) {
    this.endpoint     = endpoint;
    this.onMessage    = onMessage;
    this.onError      = onError || (err => console.error(err));
    this._pollTimer   = null;
    this._lastTimestamp = null;
  }

  /**
   * Fetches full chat history and emits each message via onMessage.
   */
  async loadHistory() {
    try {
      const res  = await fetch(this.endpoint, {
        method:   "POST",
        headers:  { "Content-Type": "application/json" },
        body:     JSON.stringify({ action: "history" })
      });
      const data = await res.json();
      this._lastTimestamp = null;
      data.messages.forEach(msg => {
        this._lastTimestamp = msg.timestamp;
        this.onMessage({ sender: msg.sender, text: msg.text });
      });
    } catch (err) {
      this.onError(err);
    }
  }

  /**
   * Sends a user prompt; emits both the user message and the AI reply.
   */
  async sendMessage(text) {
    try {
      // immediately show user message
      this.onMessage({ sender: "You", text });

      const res  = await fetch(this.endpoint, {
        method:   "POST",
        headers:  { "Content-Type": "application/json" },
        body:     JSON.stringify({ action: "send", message: text, since: this._lastTimestamp })
      });
      const data = await res.json();
      this._lastTimestamp = data.reply.timestamp;
      this.onMessage({ sender: "HounaarAI", text: data.reply.text });
    } catch (err) {
      this.onError(err);
    }
  }

  /**
   * (Optional) Polls for new messages every `ms` milliseconds.
   */
  startPolling(ms = 3000) {
    if (this._pollTimer) return;
    this._pollTimer = setInterval(async () => {
      try {
        const res  = await fetch(this.endpoint, {
          method:   "POST",
          headers:  { "Content-Type": "application/json" },
          body:     JSON.stringify({ action: "poll", since: this._lastTimestamp })
        });
        const data = await res.json();
        data.messages.forEach(msg => {
          this._lastTimestamp = msg.timestamp;
          this.onMessage({ sender: msg.sender, text: msg.text });
        });
      } catch (err) {
        this.onError(err);
      }
    }, ms);
  }

  stopPolling() {
    if (this._pollTimer) clearInterval(this._pollTimer);
    this._pollTimer = null;
  }
}

// ————————————————————————————————————————————————————————
// DOM integration: grab elements, render bubbles, wire events
// ————————————————————————————————————————————————————————
;(function(){
  const ENDPOINT    = "/hounaarai.php";
  const menuItem    = document.getElementById("HounaarAI");
  const messageArea = document.getElementById("hounaarai-messages");
  const form        = document.getElementById("hounaarai-form");
  const input       = document.getElementById("hounaarai-input");

  // helper to append a chat bubble
  function appendMessage({ sender, text }) {
    const wrap = document.createElement("div");
    wrap.className = "mb-2";
    wrap.innerHTML = `
      <div class="small text-muted">${sender}</div>
      <div class="p-2 ${sender==="You"?"bg-primary text-white":"bg-light"} rounded">
        ${text}
      </div>
    `;
    messageArea.appendChild(wrap);
    messageArea.scrollTop = messageArea.scrollHeight;
  }

  // instantiate the chat client
  const chatClient = new HounaarAIChatClient({
    endpoint:  ENDPOINT,
    onMessage: appendMessage,
    onError:   err => appendMessage({ sender: "HounaarAI", text: "Network error." })
  });

  // when user clicks the menu item, load history
  menuItem.addEventListener("click", () => {
    // clear any existing messages
    messageArea.innerHTML = "";
    chatClient.loadHistory();
    // optionally start polling for delayed replies:
    // chatClient.startPolling(2000);
  });

  // wire up form submit
  form.addEventListener("submit", e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    chatClient.sendMessage(text);
  });

  // clear input on Escape
  input.addEventListener("keydown", e => {
    if (e.key === "Escape") input.value = "";
  });
})();


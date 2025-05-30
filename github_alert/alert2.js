class GitHubStarReminder {
  constructor(options = {}) {
    this.options = {
      repoUrl: 'https://github.com/rko0211/jgec-previous-year-question-paper',
      title: 'Enjoying this project?',
      message: 'Give it a <b>⭐</b> on <b>GitHub</b> to support our work!',
      showDelay: 1000,
      localStorageKey: 'githubAlertDismissed2',
      ...options
    };

    this.injectCSS();
    this.init();
  }

  injectCSS() {
    if (document.getElementById('github-alert-styles')) return;

    const css = `
      .github-alert-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          display: none;
      }
      .github-alert-box {
          background-color: white;
          padding: 25px;
          border-radius: 10px;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          position: relative;
          animation: githubAlertFadeIn 0.3s ease-out;
          text-align: center;
      }
      .github-alert-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 15px;
          color: #24292e;
      }
      .github-alert-message {
          margin-bottom: 20px;
          line-height: 1.5;
          color: #333;
          text-align: center;
      }
      .github-alert-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 15px;
      }
      .github-alert-button {
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          text-align: center;
          transition: all 0.2s ease;
          min-width: 120px;
      }
      .github-alert-button-primary {
          background-color: #2da44e;
          color: white;
          border: 1px solid #2da44e;
      }
      .github-alert-button-primary:hover {
          background-color: #2c974b;
          border-color: #2c974b;
      }
      .github-alert-button-secondary {
          background-color: white;
          color: #24292e;
          border: 1px solid #d0d7de;
      }
      .github-alert-button-secondary:hover {
          background-color: #f6f8fa;
          border-color: #d0d7de;
      }
      .github-alert-icon {
          width: 50px;
          height: 50px;
          margin: 0 auto 20px;
          display: block;
      }
      @keyframes githubAlertFadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
      }
      .github-alert-dont-show {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 0.9rem;
          color: #586069;
      }
      .github-alert-dont-show input {
          margin-right: 8px;
      }
    `;

    const style = document.createElement('style');
    style.id = 'github-alert-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  init() {
    if (!localStorage.getItem(this.options.localStorageKey)) {
      this.createAlert();
      setTimeout(() => this.showAlert(), this.options.showDelay);
    }
  }

  createAlert() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'github-alert-overlay';
    this.overlay.id = 'githubStarReminder';

    const alertBox = document.createElement('div');
    alertBox.className = 'github-alert-box';

    alertBox.innerHTML = `
      <svg class="github-alert-icon" viewBox="0 0 24 24" fill="#24292e">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
      <div class="github-alert-title">${this.options.title}</div>
      <div class="github-alert-message">${this.options.message}</div>
      <div class="github-alert-buttons">
          <a href="${this.options.repoUrl}" target="_blank" class="github-alert-button github-alert-button-primary">
              🌟 Star on GitHub
          </a>
          <button class="github-alert-button github-alert-button-secondary" id="githubAlertClose">
              Maybe Later
          </button>
      </div>
      <div class="github-alert-dont-show">
          <input type="checkbox" id="githubAlertDontShow">
          <label for="githubAlertDontShow">Don't show this again</label>
      </div>
    `;

    this.overlay.appendChild(alertBox);
    document.body.appendChild(this.overlay);
    document.getElementById('githubAlertClose').addEventListener('click', () => this.closeAlert());
  }

  showAlert() {
    this.overlay.style.display = 'flex';
  }

  closeAlert() {
    const dontShowAgain = document.getElementById('githubAlertDontShow').checked;
    if (dontShowAgain) {
      localStorage.setItem(this.options.localStorageKey, 'true');
    }
    this.overlay.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  new GitHubStarReminder({
    repoUrl: 'https://github.com/rko0211/jgec-previous-year-question-paper'
  });
});
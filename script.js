/**
 * ============================================================
 *  script.js — 365 Reasons Why I Love You
 * ============================================================
 *
 *  Handles:
 *  - Password / lock screen
 *  - Day calculation from start date
 *  - Daily reason + photo + special content loading
 *  - Progress bar
 *  - Reunion countdown
 *  - Memory timeline
 *  - Background music player
 *  - Floating gold particles (canvas)
 *  - Scroll-triggered fade-in animations
 *  - Day 365 final experience
 *  - Easter egg / secret note
 *
 *  CONFIG and all content live in data.js — edit that file,
 *  not this one, unless you want to change behaviour.
 * ============================================================
 */

'use strict';

/* ── Grab DOM elements ──────────────────────────────────────── */
const $  = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

const lockScreen       = $('lock-screen');
const mainContent      = $('main-content');
const passwordInput    = $('password-input');
const unlockBtn        = $('unlock-btn');
const passwordError    = $('password-error');

const herNameDisplay   = $('her-name-display');
const dayNumber        = $('day-number');
const dayPhoto         = $('day-photo');
const reasonText       = $('reason-text');

const specialSection   = $('special-section');
const specialLabel     = $('special-label');
const specialAudioWrap = $('special-audio-wrap');
const specialAudioSrc  = $('special-audio-src');
const specialAudio     = $('special-audio');
const specialVideoWrap = $('special-video-wrap');
const specialVideoSrc  = $('special-video-src');
const specialVideo     = $('special-video');
const specialLetterWrap = $('special-letter-wrap');
const letterTitle      = $('letter-title');
const letterBody       = $('letter-body');

const statCompleted    = $('stat-completed');
const statPercent      = $('stat-percent');
const statRemaining    = $('stat-remaining');
const progressFill     = $('progress-fill');
const progressGlow     = $('progress-glow');
const progressWrap     = progressFill ? progressFill.closest('[role="progressbar"]') : null;

const reunionDays      = $('reunion-days');
const reunionMessage   = $('reunion-message');
const reunionFill      = $('reunion-fill');
const reunionDateLabel = $('reunion-date-label');

const timelineContainer = $('timeline-container');
const footerName       = $('footer-name');

const bgMusic          = $('bg-music');
const musicToggle      = $('music-toggle');
const volumeControl    = $('volume-control');
const iconPlay         = musicToggle ? musicToggle.querySelector('.icon-play')  : null;
const iconPause        = musicToggle ? musicToggle.querySelector('.icon-pause') : null;

const finalOverlay     = $('final-overlay');
const finalMessage     = $('final-message');
const finalSignature   = $('final-signature');
const finalCloseBtn    = $('final-close-btn');
const finalConfetti    = $('final-confetti');

const easterOverlay    = $('easter-overlay');
const easterClose      = $('easter-close');

const particleCanvas   = $('particle-canvas');


/* ════════════════════════════════════════════════════════════
   DATE HELPERS
   ════════════════════════════════════════════════════════════ */

/**
 * Returns today as a YYYY-MM-DD string in LOCAL time.
 * Avoids the UTC-offset trap of using toISOString().
 */
function todayString() {
  const d    = new Date();
  const yyyy = d.getFullYear();
  const mm   = String(d.getMonth() + 1).padStart(2, '0');
  const dd   = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Parse a "YYYY-MM-DD" string as a LOCAL midnight Date object.
 * Using "T00:00:00" prevents the browser treating it as UTC midnight,
 * which would shift the date backwards in negative-UTC-offset timezones.
 */
function parseLocalDate(str) {
  return new Date(`${str}T00:00:00`);
}

/**
 * Absolute difference in whole calendar days between two Date objects.
 */
function daysBetween(a, b) {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  return Math.floor(Math.abs(b - a) / MS_PER_DAY);
}

/**
 * Returns which "day of the journey" today is, clamped to 1–365.
 * Day 1 = the START_DATE itself.
 */
function getCurrentDay() {
  const start   = parseLocalDate(CONFIG.START_DATE);
  const today   = parseLocalDate(todayString());
  const elapsed = daysBetween(start, today); // 0 on Day 1
  const day     = elapsed + 1;
  return Math.max(1, Math.min(365, day));
}


/* ════════════════════════════════════════════════════════════
   LOCK SCREEN & PASSWORD
   ════════════════════════════════════════════════════════════ */

// Inject the shake keyframe once into <head> — avoids needing it in CSS
(function injectShakeKeyframe() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-7px); }
      40%       { transform: translateX(7px); }
      60%       { transform: translateX(-4px); }
      80%       { transform: translateX(4px); }
    }
    .shake { animation: shake 0.45s ease both; }
  `;
  document.head.appendChild(style);
})();

function showError(msg) {
  if (!passwordError) return;
  passwordError.textContent = msg;
  if (passwordInput) {
    passwordInput.classList.remove('shake'); // reset before re-adding
    // Force reflow so the animation restarts even if already shaking
    void passwordInput.offsetWidth;
    passwordInput.classList.add('shake');
    passwordInput.addEventListener(
      'animationend',
      () => passwordInput.classList.remove('shake'),
      { once: true }
    );
  }
}

function unlock() {
  const entered = (passwordInput ? passwordInput.value.trim() : '');

  if (!entered) {
    showError('Please enter the password.');
    return;
  }

  if (entered !== String(CONFIG.PASSWORD)) {
    showError('Not quite — try again, my love.');
    if (passwordInput) {
      passwordInput.value = '';
      passwordInput.focus();
    }
    return;
  }

  // ✅ Correct password — transition to main content
  if (passwordError) passwordError.textContent = '';

  if (lockScreen) {
    lockScreen.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    lockScreen.style.opacity    = '0';
    lockScreen.style.transform  = 'scale(1.03)';
  }

  setTimeout(() => {
    if (lockScreen) {
      lockScreen.classList.remove('active');
      lockScreen.setAttribute('aria-hidden', 'true');
    }
    if (mainContent) {
      mainContent.classList.add('active');
      mainContent.removeAttribute('aria-hidden');
      mainContent.style.animation = 'fadeInUp 0.9s ease both';
    }
    initMain();
  }, 780);
}

// Allow pressing Enter inside the password field
if (passwordInput) {
  passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') unlock();
  });
}

if (unlockBtn) {
  unlockBtn.addEventListener('click', unlock);
}


/* ════════════════════════════════════════════════════════════
   MAIN INITIALISATION (runs after unlock)
   ════════════════════════════════════════════════════════════ */

function initMain() {
  const day = getCurrentDay();

  applyHerName();
  renderHeroDay(day);
  renderPhoto(day);
  renderReason(day);
  renderSpecialContent(day);
  renderProgress(day);
  renderReunionCountdown();
  renderTimeline();
  renderFooter();
  initMusic();
  initScrollAnimations();
  initEasterEgg();
  initParticles();
  initFloatingHearts();  // hearts rising from the bottom

  // Day 365: show the grand finale overlay after a dramatic pause
  if (day === 365) {
    setTimeout(showFinalOverlay, 3000);
  }
}


/* ════════════════════════════════════════════════════════════
   HER NAME
   ════════════════════════════════════════════════════════════ */

function applyHerName() {
  if (herNameDisplay) herNameDisplay.textContent = CONFIG.HER_NAME;
}


/* ════════════════════════════════════════════════════════════
   HERO DAY NUMBER
   ════════════════════════════════════════════════════════════ */

function renderHeroDay(day) {
  if (dayNumber) dayNumber.textContent = day;
}


/* ════════════════════════════════════════════════════════════
   DAILY PHOTO
   ════════════════════════════════════════════════════════════ */

function renderPhoto(day) {
  if (!dayPhoto) return;

  const src = `images/day${day}.jpg`;
  dayPhoto.alt = `A photo for Day ${day}`;

  // Test whether the image file actually exists before setting src.
  // If it doesn't, fall back to a graceful inline-SVG placeholder.
  const testImg   = new Image();
  testImg.onload  = () => { dayPhoto.src = src; };
  testImg.onerror = () => { dayPhoto.src = buildPlaceholderSVG(day); };
  testImg.src     = src;
}

/**
 * Generates a tasteful SVG placeholder as a data-URI.
 * Shows the day number in champagne gold — no broken-image icon.
 *
 * !! HOW TO ADD PHOTOS:
 *    1. Name your photo  images/day1.jpg, images/day2.jpg, etc.
 *    2. Put it inside the "images/" folder in the project root.
 *    3. The placeholder disappears automatically once the file exists.
 */
function buildPlaceholderSVG(day) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="#F5EDE0"/>
      <stop offset="100%" stop-color="#FAF0F0"/>
    </linearGradient>
  </defs>
  <rect width="600" height="800" fill="url(#bg)"/>
  <rect x="20" y="20" width="560" height="760" fill="none"
        stroke="#C9A96E" stroke-width="1" opacity="0.3"/>
  <text x="300" y="355" text-anchor="middle"
        font-family="Georgia,serif" font-size="60" font-weight="300"
        fill="#C9A96E" opacity="0.3">Day</text>
  <text x="300" y="470" text-anchor="middle"
        font-family="Georgia,serif" font-size="130" font-weight="300"
        fill="#C9A96E" opacity="0.3">${day}</text>
  <text x="300" y="540" text-anchor="middle"
        font-family="Georgia,serif" font-size="18" font-style="italic"
        fill="#8C7060" opacity="0.45">add images/day${day}.jpg</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
}


/* ════════════════════════════════════════════════════════════
   DAILY REASON
   ════════════════════════════════════════════════════════════ */

function renderReason(day) {
  if (!reasonText) return;

  const entry = REASONS.find((r) => r.day === day);
  const text  = entry
    ? `"${entry.reason}"`
    : `"Every single day I love you is reason enough."`;

  reasonText.textContent = text;

  // Trigger the shimmer-reveal CSS animation on the next paint
  requestAnimationFrame(() => {
    reasonText.classList.add('revealed');
  });
}


/* ════════════════════════════════════════════════════════════
   SPECIAL CONTENT (audio / video / letter / final)
   ════════════════════════════════════════════════════════════ */

/**
 * !! HOW TO ADD SPECIAL CONTENT:
 *    Open data.js and edit the SPECIAL_DAYS object.
 *    For audio: add   audio/day15.mp3   to the "audio/" folder.
 *    For video: add   videos/day30.mp4  to the "videos/" folder.
 *    For a letter: paste the letter text directly in data.js.
 */
function renderSpecialContent(day) {
  const special = SPECIAL_DAYS[day];
  if (!special || !specialSection) return;

  specialSection.style.display = 'flex';

  // Update the label if the special day provides one
  if (special.label && specialLabel) {
    specialLabel.textContent = special.label;
  }

  switch (special.type) {

    case 'audio':
      if (specialAudioWrap && specialAudioSrc && specialAudio) {
        specialAudioWrap.style.display = 'block';
        specialAudioSrc.src = special.file;
        specialAudio.load();
      }
      break;

    case 'video':
      if (specialVideoWrap && specialVideoSrc && specialVideo) {
        specialVideoWrap.style.display = 'block';
        specialVideoSrc.src = special.file;
        specialVideo.load();
      }
      break;

    case 'letter':
      if (specialLetterWrap && letterTitle && letterBody) {
        specialLetterWrap.style.display = 'block';
        if (letterTitle) letterTitle.textContent  = special.title || '';
        if (letterBody)  letterBody.textContent   = special.body  || '';
      }
      if (specialLabel) specialLabel.textContent = 'A letter for you ✉️';
      break;

    case 'final':
      // Day 365 — handled by showFinalOverlay(), triggered from initMain()
      break;

    default:
      break;
  }
}


/* ════════════════════════════════════════════════════════════
   PROGRESS BAR
   ════════════════════════════════════════════════════════════ */

function renderProgress(day) {
  const total     = 365;
  const pct       = Math.round((day / total) * 100);
  const remaining = total - day;

  if (statCompleted) statCompleted.textContent = day;
  if (statPercent)   statPercent.textContent   = `${pct}%`;
  if (statRemaining) statRemaining.textContent  = remaining;

  // Delay the animation slightly so it's visible after page appears
  setTimeout(() => {
    if (progressFill) progressFill.style.width = `${pct}%`;
    if (progressGlow) progressGlow.style.left  = `${pct}%`;
    if (progressWrap) progressWrap.setAttribute('aria-valuenow', pct);
  }, 700);
}


/* ════════════════════════════════════════════════════════════
   REUNION COUNTDOWN
   ════════════════════════════════════════════════════════════ */

/**
 * !! HOW TO CHANGE THE MEETING DATES:
 *    Open data.js and edit CONFIG.MEET_START_DATE and CONFIG.MEET_END_DATE.
 *    Format: "YYYY-MM-DD"
 */
function renderReunionCountdown() {
  if (!reunionDays) return;

  const today     = parseLocalDate(todayString());
  const start     = parseLocalDate(CONFIG.MEET_START_DATE);
  const end       = parseLocalDate(CONFIG.MEET_END_DATE);

  const daysLeft  = Math.max(0, daysBetween(today, end));
  const totalSpan = Math.max(1, daysBetween(start, end));
  const elapsed   = Math.max(0, daysBetween(start, today));
  const pct       = Math.min(100, Math.round((elapsed / totalSpan) * 100));

  // Human-readable end date
  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  if (daysLeft === 0) {
    reunionDays.textContent = 'Today ❤️';
    if (reunionMessage) reunionMessage.textContent = 'This is the day. We made it.';
  } else {
    reunionDays.textContent = `${daysLeft} day${daysLeft === 1 ? '' : 's'}`;
    if (reunionMessage) reunionMessage.textContent = 'until we\'re in the same room again ❤️';
  }

  if (reunionDateLabel) {
    reunionDateLabel.textContent = `Reunion: ${formatter.format(end)}`;
  }

  setTimeout(() => {
    if (reunionFill) reunionFill.style.width = `${pct}%`;
  }, 900);
}


/* ════════════════════════════════════════════════════════════
   MEMORY TIMELINE
   ════════════════════════════════════════════════════════════ */

/**
 * !! HOW TO ADD MEMORIES:
 *    Open data.js and add items to the MEMORIES array.
 */
function renderTimeline() {
  if (!timelineContainer || !Array.isArray(MEMORIES) || !MEMORIES.length) return;

  MEMORIES.forEach((mem) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.setAttribute('role', 'listitem');
    item.innerHTML = `
      <span class="timeline-emoji" aria-hidden="true">${mem.emoji || '✨'}</span>
      <span class="timeline-date">${mem.date  || ''}</span>
      <span class="timeline-title">${mem.title || ''}</span>
      <span class="timeline-desc">${mem.description || ''}</span>
    `;
    timelineContainer.appendChild(item);
  });
}


/* ════════════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════════════ */

function renderFooter() {
  if (footerName) footerName.textContent = CONFIG.YOUR_NAME;
}


/* ════════════════════════════════════════════════════════════
   BACKGROUND MUSIC
   ════════════════════════════════════════════════════════════ */

/**
 * !! HOW TO ADD BACKGROUND MUSIC:
 *    1. Put your MP3 file at   audio/background.mp3
 *    2. Or change the <source src="..."> in index.html
 *    3. Also update CONFIG.BACKGROUND_MUSIC in data.js (for reference)
 *
 *  Music only plays after the user taps the play button —
 *  browsers block autoplay until user interaction.
 */
function initMusic() {
  if (!bgMusic || !musicToggle) return;

  // Set initial volume from slider
  if (volumeControl) {
    bgMusic.volume = parseFloat(volumeControl.value);

    volumeControl.addEventListener('input', () => {
      bgMusic.volume = parseFloat(volumeControl.value);
    });
  }

  musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {
        // Autoplay was blocked — the user needs to interact first.
        // The button tap counts, so this shouldn't fire, but
        // some browsers on iOS need a second tap on first load.
      });
      if (iconPlay)  iconPlay.style.display  = 'none';
      if (iconPause) iconPause.style.display = '';
      musicToggle.setAttribute('aria-label', 'Pause background music');
    } else {
      bgMusic.pause();
      if (iconPlay)  iconPlay.style.display  = '';
      if (iconPause) iconPause.style.display = 'none';
      musicToggle.setAttribute('aria-label', 'Play background music');
    }
  });

  // Reset play icon if the browser stops the audio for any reason
  bgMusic.addEventListener('pause', () => {
    if (iconPlay)  iconPlay.style.display  = '';
    if (iconPause) iconPause.style.display = 'none';
  });

  bgMusic.addEventListener('play', () => {
    if (iconPlay)  iconPlay.style.display  = 'none';
    if (iconPause) iconPause.style.display = '';
  });
}


/* ════════════════════════════════════════════════════════════
   SCROLL-TRIGGERED FADE-IN
   ════════════════════════════════════════════════════════════ */

function initScrollAnimations() {
  const sections = $$('.fade-in-section');
  if (!sections.length) return;

  // Pass 1 — immediately reveal anything already in the viewport.
  // We can't rely on the IntersectionObserver for this because its
  // callbacks fire asynchronously (next microtask), which causes a
  // flash of blank cream background for the hero and first sections.
  requestAnimationFrame(() => {
    sections.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  });

  // Pass 2 — use IntersectionObserver for sections below the fold.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((el) => observer.observe(el));
}


/* ════════════════════════════════════════════════════════════
   DAY 365 — FINAL EXPERIENCE OVERLAY
   ════════════════════════════════════════════════════════════ */

function showFinalOverlay() {
  if (!finalOverlay) return;

  if (finalSignature) finalSignature.textContent = `— ${CONFIG.YOUR_NAME}`;

  finalOverlay.removeAttribute('aria-hidden');
  finalOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';

  launchConfetti();

  if (finalCloseBtn) {
    finalCloseBtn.addEventListener('click', () => {
      finalOverlay.classList.remove('visible');
      finalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  // Also allow Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && finalOverlay.classList.contains('visible')) {
      finalOverlay.classList.remove('visible');
      finalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Creates gold/rose/champagne confetti that falls from the top.
 * Uses CSS animation defined in styles.css (.confetti-piece).
 */
function launchConfetti() {
  if (!finalConfetti) return;

  const colors  = ['#C9A96E', '#E8D5A3', '#B5747A', '#F0D6D6', '#9A7B4F', '#FAF5EC'];
  const shapes  = ['50%', '0', '2px'];  // circle, square, rounded
  const count   = 90;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const size = (Math.random() * 7 + 4).toFixed(1);
    piece.style.cssText = [
      `left: ${(Math.random() * 100).toFixed(1)}%`,
      `top: ${(-(Math.random() * 15 + 2)).toFixed(1)}%`,
      `background: ${colors[Math.floor(Math.random() * colors.length)]}`,
      `width: ${size}px`,
      `height: ${size}px`,
      `border-radius: ${shapes[Math.floor(Math.random() * shapes.length)]}`,
      `animation-duration: ${(Math.random() * 3.5 + 3).toFixed(2)}s`,
      `animation-delay: ${(Math.random() * 2).toFixed(2)}s`,
    ].join(';');
    finalConfetti.appendChild(piece);
  }
}


/* ════════════════════════════════════════════════════════════
   EASTER EGG — SECRET LOVE NOTE
   ════════════════════════════════════════════════════════════ */

/**
 * When the user types CONFIG.EASTER_EGG_CODE anywhere on the page
 * (default: "forever"), the secret note overlay appears.
 *
 * !! HOW TO CHANGE THE CODE:
 *    Open data.js and edit CONFIG.EASTER_EGG_CODE
 */
function initEasterEgg() {
  if (!easterOverlay) return;

  // Close button inside the overlay
  if (easterClose) {
    easterClose.addEventListener('click', closeEasterEgg);
  }

  // Clicking the dark backdrop also closes it
  easterOverlay.addEventListener('click', (e) => {
    if (e.target === easterOverlay) closeEasterEgg();
  });

  // Escape key closes it
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && easterOverlay.classList.contains('visible')) {
      closeEasterEgg();
    }
  });

  // ── Keyboard sequence detector ───────────────────────────
  let typed  = '';
  const code = String(CONFIG.EASTER_EGG_CODE || 'forever').toLowerCase();

  document.addEventListener('keydown', (e) => {
    // Ignore modifier keys, special keys, etc.
    if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1) {
      typed = '';
      return;
    }

    typed += e.key.toLowerCase();

    // Keep only the last N characters needed to match the code
    if (typed.length > code.length) {
      typed = typed.slice(typed.length - code.length);
    }

    if (typed === code) {
      typed = '';
      openEasterEgg();
    }
  });
}

function openEasterEgg() {
  if (!easterOverlay) return;
  easterOverlay.removeAttribute('aria-hidden');
  easterOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeEasterEgg() {
  if (!easterOverlay) return;
  easterOverlay.classList.remove('visible');
  easterOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}


/* ════════════════════════════════════════════════════════════
   GOLD PARTICLE CANVAS
   ════════════════════════════════════════════════════════════ */

/**
 * Draws softly drifting gold dust particles on a fixed canvas.
 * No hearts, no kitsch — just warm atmosphere.
 * Respects prefers-reduced-motion automatically (canvas stays static).
 */
function initParticles() {
  if (!particleCanvas) return;

  const ctx = particleCanvas.getContext('2d');
  if (!ctx) return;

  // Respect user's motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  let W, H, particles;
  const COUNT = 50;

  // Palette: gold, champagne, rose-gold, blush-pink, dusty-rose, soft-lavender
  const PALETTE = [
    '201,169,110',   // champagne gold
    '232,213,163',   // light gold
    '181,116,122',   // rose gold
    '220,155,165',   // blush pink
    '196,140,175',   // dusty rose / lavender
    '209,175,190',   // soft mauve
  ];

  function randomParticle(overrideY) {
    return {
      x:     Math.random() * W,
      y:     overrideY !== undefined ? overrideY : Math.random() * H,
      r:     Math.random() * 1.5 + 0.4,
      vx:    (Math.random() - 0.5) * 0.22,
      vy:    -(Math.random() * 0.3 + 0.08),
      alpha: Math.random() * 0.4 + 0.08,
      da:    (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    };
  }

  function resize() {
    W = particleCanvas.width  = window.innerWidth;
    H = particleCanvas.height = window.innerHeight;
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, () => randomParticle());
  }

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach((p) => {
      // Twinkle: oscillate alpha
      p.alpha += p.da;
      if (p.alpha > 0.52 || p.alpha < 0.04) p.da *= -1;

      // Float upward with slight horizontal drift
      p.x += p.vx;
      p.y += p.vy;

      // Wrap: when particle exits top, re-enter from bottom
      if (p.y < -p.r * 2) {
        Object.assign(p, randomParticle(H + p.r));
      }
      if (p.x < -p.r * 2)  p.x = W + p.r;
      if (p.x > W + p.r)   p.x = -p.r;

      // Draw a soft circle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha.toFixed(3)})`;
      ctx.fill();
    });

    requestAnimationFrame(drawFrame);
  }

  window.addEventListener('resize', () => {
    resize();
    // Clamp any escaped particles
    if (particles) {
      particles.forEach((p) => {
        if (p.x > W || p.y > H) {
          Object.assign(p, randomParticle());
        }
      });
    }
  });

  init();

  if (!prefersReducedMotion) {
    drawFrame();
  }
}


/* ════════════════════════════════════════════════════════════
   FLYING HEARTS
   ════════════════════════════════════════════════════════════ */

/**
 * Spawns heart glyphs that rise from the bottom of the screen,
 * sway side to side along a 4-point path, and fade out near the top.
 *
 * Each heart gets randomised:
 *   • size          (0.65 – 1.8 rem)
 *   • colour        (gold, rose, blush, mauve)
 *   • opacity       (0.35 – 0.70)
 *   • rise duration (7 – 14 s)
 *   • sway path     (4 random horizontal waypoints)
 *   • starting tilt (−20° … +20°)
 *   • horizontal start position (5 % – 95 %)
 *
 * The animation itself lives entirely in CSS (riseHeart keyframes)
 * driven by custom properties set here.
 */
function initFloatingHearts() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Heart characters — plain ♥ so CSS colour applies cleanly
  const GLYPHS = ['♥', '♥', '♥', '✦', '♥'];

  // Colours as rgba strings (alpha applied via --opacity custom prop)
  const COLORS = [
    'rgba(181,116,122,',   // rose gold
    'rgba(201,140,150,',   // blush rose
    'rgba(201,169,110,',   // champagne gold
    'rgba(170,110,120,',   // deep rose
    'rgba(210,160,175,',   // soft mauve
    'rgba(220,175,155,',   // warm peach
  ];

  function spawnHeart() {
    const heart      = document.createElement('span');
    heart.className  = 'floating-heart';
    heart.setAttribute('aria-hidden', 'true');
    heart.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

    const size      = (0.65 + Math.random() * 1.15).toFixed(2);           // rem
    const duration  = (7  + Math.random() * 7).toFixed(2);                // s
    const delay     = (Math.random() * 1.5).toFixed(2);                   // s
    const left      = (5  + Math.random() * 90).toFixed(1);               // %
    const tilt      = ((Math.random() - 0.5) * 40).toFixed(1);            // deg
    const opacity   = (0.35 + Math.random() * 0.35).toFixed(2);
    const color     = COLORS[Math.floor(Math.random() * COLORS.length)];

    // Four sway waypoints — alternating direction gives an organic S-curve
    const sign  = Math.random() < 0.5 ? 1 : -1;
    const x1    =  sign  * (10 + Math.random() * 25);
    const x2    = -sign  * (15 + Math.random() * 30);
    const x3    =  sign  * (8  + Math.random() * 28);
    const x4    = -sign  * (5  + Math.random() * 20);

    heart.style.cssText = `
      left: ${left}%;
      --size:        ${size}rem;
      --heart-color: ${color}${opacity});
      --opacity:     ${opacity};
      --duration:    ${duration}s;
      --delay:       ${delay}s;
      --tilt:        ${tilt}deg;
      --x1:          ${x1.toFixed(1)}px;
      --x2:          ${x2.toFixed(1)}px;
      --x3:          ${x3.toFixed(1)}px;
      --x4:          ${x4.toFixed(1)}px;
    `;

    document.body.appendChild(heart);

    // Remove from DOM after animation finishes (keeps DOM clean)
    const lifetime = (parseFloat(duration) + parseFloat(delay) + 0.5) * 1000;
    setTimeout(() => heart.remove(), lifetime);
  }

  // Stagger 4 hearts on first load so the screen isn't empty
  [0, 900, 2000, 3200].forEach(t => setTimeout(spawnHeart, t));

  // Then spawn 1 heart every ~2.2 s, with occasional double bursts
  setInterval(() => {
    spawnHeart();
    if (Math.random() < 0.25) {
      setTimeout(spawnHeart, 400 + Math.random() * 400);
    }
  }, 2200);
}


/* ════════════════════════════════════════════════════════════
   BOOT — Auto-focus the password field on page load
   ════════════════════════════════════════════════════════════ */

window.addEventListener('DOMContentLoaded', () => {
  if (passwordInput) passwordInput.focus();

  // Start background animations immediately so the lock screen feels alive,
  // not just a static page waiting for a password.
  initParticles();
  initFloatingHearts();
});
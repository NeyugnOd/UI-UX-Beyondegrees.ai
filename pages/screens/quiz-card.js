/* ============================================================
   quiz-card.js — BeyonDegrees Aurora Quiz System
   Drag Spring Physics + Spectrum Tap + Aurora BGEngine
   ============================================================ */

'use strict';

/* ─────────────────────────────────────────
   1. DISCIPLINE COLOR MAP
   ───────────────────────────────────────── */
const DISC_EMOJIS = {
  kt: '💻', nv: '📖', yt: '🩺', xh: '🌐', nn: '🌾', tn: '🧬',
};

const DISC_COLORS = {
  kt: { primary: '#7c3aed', dark: '#2d1267', glow: 'rgba(124,58,237,0.5)',  label: '⚡ Kỹ thuật & CN',  next: 'nv' },
  nv: { primary: '#3b82f6', dark: '#1e3a8a', glow: 'rgba(59,130,246,0.5)',  label: '📚 Nhân văn',        next: 'yt' },
  yt: { primary: '#06d6a0', dark: '#064e3b', glow: 'rgba(6,214,160,0.5)',   label: '⚕️ Y & Sức khoẻ',   next: 'xh' },
  xh: { primary: '#a855f7', dark: '#3b0764', glow: 'rgba(168,85,247,0.5)',  label: '🌐 Xã hội học',      next: 'nn' },
  nn: { primary: '#f59e0b', dark: '#451a03', glow: 'rgba(245,158,11,0.5)',  label: '🌿 Nông nghiệp',     next: 'tn' },
  tn: { primary: '#f43f5e', dark: '#4c0519', glow: 'rgba(244,63,94,0.5)',   label: '🔬 Khoa học TN',     next: 'kt' },
};

/* ─────────────────────────────────────────
   2. QUESTIONS BANK
   ───────────────────────────────────────── */
const QUESTIONS = [
  { id:  1, disc: 'kt', text: 'Tôi thích giải quyết vấn đề bằng cách phân tích dữ liệu.' },
  { id:  2, disc: 'nv', text: 'Đọc văn học và thơ ca mang lại cho tôi nhiều cảm xúc sâu sắc.' },
  { id:  3, disc: 'yt', text: 'Tôi quan tâm đến sức khoẻ cộng đồng và cách phòng ngừa bệnh tật.' },
  { id:  4, disc: 'kt', text: 'Lập trình hoặc xây dựng phần mềm là điều tôi muốn làm mỗi ngày.' },
  { id:  5, disc: 'xh', text: 'Tôi tò mò về hành vi con người và cấu trúc xã hội.' },
  { id:  6, disc: 'nn', text: 'Bảo vệ môi trường và phát triển bền vững là ưu tiên của tôi.' },
  { id:  7, disc: 'tn', text: 'Tôi yêu thích thí nghiệm và khám phá quy luật tự nhiên.' },
  { id:  8, disc: 'nv', text: 'Nghiên cứu lịch sử giúp tôi hiểu thế giới hiện tại tốt hơn.' },
  { id:  9, disc: 'yt', text: 'Chăm sóc và giúp đỡ người bệnh là việc ý nghĩa nhất với tôi.' },
  { id: 10, disc: 'kt', text: 'Tôi thích thiết kế hệ thống và tối ưu hoá quy trình.' },
  { id: 11, disc: 'xh', text: 'Làm việc nhóm và thúc đẩy cộng đồng phát triển là thế mạnh của tôi.' },
  { id: 12, disc: 'nn', text: 'Công nghệ sinh học trong nông nghiệp hấp dẫn tôi rất nhiều.' },
  { id: 13, disc: 'tn', text: 'Toán học và vật lý là những môn học tôi luôn tìm thấy niềm vui.' },
  { id: 14, disc: 'nv', text: 'Dạy học và truyền đạt kiến thức cho người khác là đam mê của tôi.' },
  { id: 15, disc: 'kt', text: 'Trí tuệ nhân tạo và tự động hoá đang định hình tương lai theo cách tôi muốn.' },
  { id: 16, disc: 'xh', text: 'Tôi muốn tham gia vào việc xây dựng chính sách công.' },
  { id: 17, disc: 'yt', text: 'Nghiên cứu dược phẩm và bào chế thuốc thu hút tôi.' },
  { id: 18, disc: 'nn', text: 'Tôi thích làm việc ngoài trời và gần thiên nhiên hơn văn phòng.' },
  { id: 19, disc: 'tn', text: 'Hoá học và sinh học phân tử là lĩnh vực tôi muốn đào sâu.' },
  { id: 20, disc: 'nv', text: 'Sáng tác, viết lách và kể chuyện là cách tôi thể hiện bản thân.' },
  { id: 21, disc: 'kt', text: 'An toàn thông tin và bảo mật mạng là thứ tôi muốn chuyên sâu.' },
  { id: 22, disc: 'xh', text: 'Kinh tế học giúp tôi hiểu vì sao các quốc gia thịnh vượng hoặc thất bại.' },
  { id: 23, disc: 'nn', text: 'Tôi quan tâm đến cách sản xuất thực phẩm an toàn cho hàng triệu người.' },
  { id: 24, disc: 'yt', text: 'Phục hồi chức năng và y học thể thao là lĩnh vực tôi hướng tới.' },
  { id: 25, disc: 'tn', text: 'Tôi muốn khám phá vũ trụ và nghiên cứu thiên văn học.' },
  { id: 26, disc: 'nv', text: 'Luật pháp và bảo vệ quyền con người là giá trị cốt lõi của tôi.' },
  { id: 27, disc: 'kt', text: 'Điện tử, vi mạch và hardware cuốn hút tôi không kém software.' },
  { id: 28, disc: 'xh', text: 'Tâm lý học và hiểu hành vi con người là thứ tôi đam mê.' },
  { id: 29, disc: 'nn', text: 'Rừng, biển và hệ sinh thái cần được bảo tồn — tôi muốn là người làm điều đó.' },
  { id: 30, disc: 'tn', text: 'Vật liệu mới và công nghệ nano sẽ thay đổi cuộc sống — tôi muốn góp phần vào đó.' },
];

/* ─────────────────────────────────────────
   3. STATE
   ───────────────────────────────────────── */
const state = {
  currentIndex: 0,
  answers: [],
  scores: { agree: 0, strong: 0, neutral: 0, disagree: 0 },
  dna: { kt: 0, nv: 0, yt: 0, xh: 0, nn: 0, tn: 0 },
  isDragging: false,
  isSpectrumMode: false,
  holdTimer: null,
  hasMoved: false,
  startX: 0, startY: 0,
  currentX: 0, currentY: 0,
  spectrumVal: 0,
  spectrumDragging: false,
  isFlinging: false,
};

/* ─────────────────────────────────────────
   4. AURORA BACKGROUND ENGINE
   ───────────────────────────────────────── */
const BGEngine = (() => {
  let _cur = 'kt';
  let _nxt = 'nv';
  let _el, _discLabel, _auroraPreview, _auroraDiscName, _auroraNextName;

  function _hexToRgba(hex, a) {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }

  function _buildBg(cur, nxt, ox, oy) {
    ox = ox || 0; oy = oy || 0;
    const c = DISC_COLORS[cur];
    const n = DISC_COLORS[nxt];
    const px = Math.round(22 + ox * 28);
    const py = Math.round(28 + oy * 18);
    const sx = Math.round(78 - ox * 18);
    const sy = Math.round(72 - oy * 14);
    return [
      `radial-gradient(ellipse 85% 65% at ${px}% ${py}%, ${c.glow} 0%, transparent 68%)`,
      `radial-gradient(ellipse 55% 65% at ${sx}% ${sy}%, ${_hexToRgba(n.primary, 0.22)} 0%, transparent 62%)`,
      c.dark,
    ].join(', ');
  }

  function _set(bg, cls) {
    if (!_el) return;
    _el.className = 'aurora-bg' + (cls ? ' ' + cls : '');
    _el.style.background = bg;
  }

  function _updatePanel() {
    if (_auroraPreview) {
      _auroraPreview.style.background = [
        `radial-gradient(ellipse 90% 80% at 30% 35%, ${DISC_COLORS[_cur].glow} 0%, transparent 70%)`,
        DISC_COLORS[_cur].dark,
      ].join(', ');
    }
    if (_auroraDiscName) _auroraDiscName.textContent = DISC_COLORS[_cur].label;
    if (_auroraNextName) _auroraNextName.textContent = '→ ' + DISC_COLORS[_nxt].label;
  }

  function _updateGlow() {
    const frame = document.getElementById('deviceFrame');
    if (frame) frame.style.boxShadow =
      `0 0 0 1px rgba(255,255,255,0.07), 0 30px 80px ${DISC_COLORS[_cur].glow}`;
  }

  function _updateLegend() {
    document.querySelectorAll('.legend-item').forEach(el => {
      el.classList.toggle('active', el.dataset.disc === _cur);
    });
  }

  /* Update blob colors via CSS custom properties on aurora-bg */
  function _updateBlobs(isInit) {
    if (!_el) return;
    const c = DISC_COLORS[_cur];
    const n = DISC_COLORS[_nxt];
    // Primary blobs use current discipline
    _el.style.setProperty('--blob-p1', _hexToRgba(c.primary, 0.72));
    _el.style.setProperty('--blob-p2', _hexToRgba(c.primary, 0.45));
    _el.style.setProperty('--blob-p3', _hexToRgba(n.primary, 0.40));
    _el.style.setProperty('--blob-p4', _hexToRgba(n.primary, 0.30));
    // Tab bar active color follows discipline
    const tabBar = document.getElementById('floatTabBar');
    if (tabBar) tabBar.style.setProperty('--tab-active-color', c.primary);

    // ── Discipline ambient layers ──
    const screen    = document.getElementById('mobileScreen');
    const watermark = document.getElementById('discWatermark');
    const pattern   = document.getElementById('discPattern');

    // Swap disc-XX class on mobile-screen (drives CSS patterns)
    if (screen) {
      screen.className = screen.className.replace(/\bdisc-\w+\b/g, '').trim();
      screen.classList.add('disc-' + _cur);
    }

    if (isInit) {
      // On init: set immediately, no fade
      if (watermark) watermark.textContent = DISC_EMOJIS[_cur] || '✨';
    } else {
      // On discipline change: fade out → swap → fade in
      if (watermark) watermark.classList.add('fading');
      if (pattern)   pattern.classList.add('fading');
      setTimeout(() => {
        if (watermark) {
          watermark.textContent = DISC_EMOJIS[_cur] || '✨';
          watermark.classList.remove('fading');
        }
        if (pattern) pattern.classList.remove('fading');
      }, 320);
    }
  }

  return {
    init(disc) {
      _cur = disc || 'kt';
      _nxt = DISC_COLORS[_cur].next;
      _el           = document.getElementById('auroraBg');
      _discLabel    = document.getElementById('discLabel');
      _auroraPreview   = document.getElementById('auroraPreview');
      _auroraDiscName  = document.getElementById('auroraDiscName');
      _auroraNextName  = document.getElementById('auroraNextName');

      _set(_buildBg(_cur, _nxt), 'instant');
      _updatePanel();
      _updateGlow();
      _updateLegend();
      _updateBlobs(true); // init — no fade
    },

    setDisc(disc) {
      _cur = disc || _cur;
      _nxt = DISC_COLORS[_cur].next;
      _set(_buildBg(_cur, _nxt), 'card-in');
      _updatePanel();
      _updateGlow();
      _updateLegend();
      _updateBlobs();
    },

    onDrag(dx, dy) {
      const W = document.getElementById('mobileScreen')?.offsetWidth  || 390;
      const H = document.getElementById('mobileScreen')?.offsetHeight || 780;
      const ox = Math.max(-1, Math.min(1, dx / (W * 0.42)));
      const oy = Math.max(-1, Math.min(1, dy / (H * 0.32)));
      _set(_buildBg(_cur, _nxt, ox, oy), 'instant');

      // Disc label fades in with drag strength
      if (_discLabel) {
        const strength = Math.min(1, Math.sqrt(ox*ox + oy*oy) / 0.4);
        if (strength > 0.1) {
          _discLabel.textContent = DISC_COLORS[_cur].label;
          _discLabel.style.opacity = String(Math.min(1, (strength - 0.1) * 1.4));
        } else {
          _discLabel.style.opacity = '0';
        }
      }
    },

    onFling() {
      _set(_buildBg(_cur, _nxt, 0, 0), 'fling-out');
      if (_discLabel) _discLabel.style.opacity = '0';

      setTimeout(() => {
        _cur = _nxt;
        _nxt = DISC_COLORS[_cur].next;
        _set(_buildBg(_cur, _nxt), 'card-in');
        _updatePanel();
        _updateGlow();
        _updateLegend();
        _updateBlobs();
      }, 440);
    },

    onSpringBack() {
      _set(_buildBg(_cur, _nxt, 0, 0), 'card-in');
      if (_discLabel) _discLabel.style.opacity = '0';
    },

    getCur() { return _cur; },
    getNxt() { return _nxt; },
  };
})();

/* ─────────────────────────────────────────
   5. DOM REFS
   ───────────────────────────────────────── */
let $activeCard, $dragOverlay, $qText, $disciplineTag, $qNumber;
let $spectrumWrap, $spectrumThumb, $spectrumValueLabel, $spectrumConfirmBtn, $spectrumTrack;
let $swipeHint, $hintRight, $hintLeft, $hintUp, $hintDown;
let $counterCurrent, $agreeCount, $strongCount, $neutralCount, $disagreeCount;
let $milestoneOverlay, $milestoneEmoji, $milestoneText, $milestoneSub;
let $storyBar, $modeIndicator, $modeLabel, $undoBtn;

/* ─────────────────────────────────────────
   6. INIT
   ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  $activeCard          = document.getElementById('activeCard');
  $dragOverlay         = document.getElementById('dragOverlay');
  $qText               = document.getElementById('qText');
  $disciplineTag       = document.getElementById('disciplineTag');
  $qNumber             = document.getElementById('qNumber');
  $spectrumWrap        = document.getElementById('spectrumWrap');
  $spectrumThumb       = document.getElementById('spectrumThumb');
  $spectrumValueLabel  = document.getElementById('spectrumValueLabel');
  $spectrumConfirmBtn  = document.getElementById('spectrumConfirmBtn');
  $spectrumTrack       = document.getElementById('spectrumTrack');
  $swipeHint           = document.getElementById('swipeHint');
  $hintRight           = document.getElementById('hintRight');
  $hintLeft            = document.getElementById('hintLeft');
  $hintUp              = document.getElementById('hintUp');
  $hintDown            = document.getElementById('hintDown');
  $counterCurrent      = document.getElementById('counterCurrent');
  $agreeCount          = document.getElementById('agreeCount');
  $strongCount         = document.getElementById('strongCount');
  $neutralCount        = document.getElementById('neutralCount');
  $disagreeCount       = document.getElementById('disagreeCount');
  $milestoneOverlay    = document.getElementById('milestoneOverlay');
  $milestoneEmoji      = document.getElementById('milestoneEmoji');
  $milestoneText       = document.getElementById('milestoneText');
  $milestoneSub        = document.getElementById('milestoneSub');
  $storyBar            = document.getElementById('storyBar');
  $modeIndicator       = document.getElementById('modeIndicator');
  $modeLabel           = $modeIndicator ? $modeIndicator.querySelector('.mode-label') : null;
  $undoBtn             = document.getElementById('undoBtn');

  BGEngine.init(QUESTIONS[0].disc);
  buildStoryBar();
  loadCard(0);
  bindPointerEvents();
  bindSpectrumEvents();
  bindKeyboard();
  if ($undoBtn) $undoBtn.addEventListener('click', undoLast);
  if ($spectrumConfirmBtn) $spectrumConfirmBtn.addEventListener('click', confirmSpectrum);
});

/* ─────────────────────────────────────────
   7. CARD LOADING
   ───────────────────────────────────────── */
function loadCard(index) {
  if (index >= QUESTIONS.length) { showFinished(); return; }
  const q    = QUESTIONS[index];
  const disc = DISC_COLORS[q.disc];

  if ($qText)          $qText.textContent        = q.text;
  if ($qNumber)        $qNumber.textContent       = String(q.id).padStart(2, '0');
  if ($disciplineTag) {
    $disciplineTag.textContent = disc.label;
    $disciplineTag.style.color = disc.primary;
  }
  if ($counterCurrent) $counterCurrent.textContent = String(index + 1);

  setCardTransform(0, 0, 0);
  $activeCard && ($activeCard.style.transition = '');
  resetHints();
  exitSpectrumMode(true);

  // First-card hint fades after 3s
  if (index === 0 && $swipeHint) {
    $swipeHint.style.opacity = '1';
    setTimeout(() => { if ($swipeHint) $swipeHint.style.opacity = '0'; }, 3000);
  }

  BGEngine.setDisc(q.disc);
  updateStoryBar(index);
  updateDNA();

  // Entrance animation
  $activeCard && $activeCard.classList.remove('card-enter');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      $activeCard && $activeCard.classList.add('card-enter');
      setTimeout(() => $activeCard && $activeCard.classList.remove('card-enter'), 650);
    });
  });
}

/* ─────────────────────────────────────────
   8. STORY BAR
   ───────────────────────────────────────── */
function buildStoryBar() {
  if (!$storyBar) return;
  $storyBar.innerHTML = '';
  QUESTIONS.forEach((_, i) => {
    const s = document.createElement('div');
    s.className = 'story-seg';
    s.dataset.i = i;
    $storyBar.appendChild(s);
  });
}

function updateStoryBar(current) {
  document.querySelectorAll('.story-seg').forEach((s, i) => {
    s.classList.toggle('done',   i < current);
    s.classList.toggle('active', i === current);
  });
}

/* ─────────────────────────────────────────
   9. POINTER / DRAG EVENTS
   ───────────────────────────────────────── */
const THRESHOLD_X = 80;
const THRESHOLD_Y = 60;
const HOLD_MS     = 300;
const ROT_COEF    = 0.065;
const FLING_PX    = 540;

function bindPointerEvents() {
  if (!$dragOverlay) return;
  $dragOverlay.addEventListener('pointerdown',   onDown,   { passive: false });
  $dragOverlay.addEventListener('pointermove',   onMove,   { passive: false });
  $dragOverlay.addEventListener('pointerup',     onUp);
  $dragOverlay.addEventListener('pointercancel', onUp);
}

function onDown(e) {
  if (state.isSpectrumMode || state.isFlinging) return;
  e.preventDefault();
  $dragOverlay.setPointerCapture(e.pointerId);

  state.isDragging = true;
  state.hasMoved   = false;
  state.startX     = e.clientX;
  state.startY     = e.clientY;
  state.currentX   = 0;
  state.currentY   = 0;

  state.holdTimer = setTimeout(() => {
    if (!state.hasMoved) enterSpectrumMode();
  }, HOLD_MS);

  if ($swipeHint) $swipeHint.style.opacity = '0';
}

function onMove(e) {
  if (!state.isDragging || state.isSpectrumMode || state.isFlinging) return;
  e.preventDefault();

  const dx = e.clientX - state.startX;
  const dy = e.clientY - state.startY;

  if (!state.hasMoved && Math.hypot(dx, dy) > 8) {
    state.hasMoved = true;
    clearTimeout(state.holdTimer);
  }
  if (!state.hasMoved) return;

  state.currentX = dx;
  state.currentY = dy;

  setCardTransform(dx, dy, dx * ROT_COEF);
  showDirectionHints(dx, dy);
  BGEngine.onDrag(dx, dy);
}

function onUp(e) {
  if (!state.isDragging) return;
  clearTimeout(state.holdTimer);
  state.isDragging = false;
  if (state.isSpectrumMode || state.isFlinging) return;

  const dx = state.currentX;
  const dy = state.currentY;
  const adx = Math.abs(dx);
  const ady = Math.abs(dy);

  if (adx > ady && adx >= THRESHOLD_X) {
    flingCard(dx > 0 ? 'right' : 'left');
  } else if (ady > adx && ady >= THRESHOLD_Y) {
    flingCard(dy < 0 ? 'up' : 'down');
  } else {
    springBack();
  }
}

/* ─────────────────────────────────────────
   10. CARD TRANSFORM & VISUAL HINTS
   ───────────────────────────────────────── */
function setCardTransform(dx, dy, rot) {
  if (!$activeCard) return;
  $activeCard.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
}

const OVERLAY_COLORS = {
  agree:    (s) => `rgba(6,214,160,${(s*0.4).toFixed(2)})`,
  disagree: (s) => `rgba(255,71,87,${(s*0.4).toFixed(2)})`,
  strong:   (s) => `rgba(124,58,237,${(s*0.4).toFixed(2)})`,
  neutral:  (s) => `rgba(107,107,154,${(s*0.35).toFixed(2)})`,
};

function showDirectionHints(dx, dy) {
  const adx = Math.abs(dx), ady = Math.abs(dy);
  const dominant = adx > ady ? (dx > 0 ? 'right' : 'left') : (dy < 0 ? 'up' : 'down');
  const dist = Math.max(adx, ady);
  const strength = Math.min(1, Math.max(0, (dist - 20) / 80));

  const map = { right: $hintRight, left: $hintLeft, up: $hintUp, down: $hintDown };
  const ansMap = { right: 'agree', left: 'disagree', up: 'strong', down: 'neutral' };

  Object.entries(map).forEach(([dir, el]) => {
    if (el) el.style.opacity = (dir === dominant && strength > 0) ? strength.toFixed(2) : '0';
  });

  if ($dragOverlay) {
    if (strength > 0) {
      const ans = ansMap[dominant];
      $dragOverlay.style.background = OVERLAY_COLORS[ans](strength);
    } else {
      $dragOverlay.style.background = 'transparent';
    }
  }
}

function resetHints() {
  [$hintRight, $hintLeft, $hintUp, $hintDown].forEach(h => h && (h.style.opacity = '0'));
  if ($dragOverlay) $dragOverlay.style.background = 'transparent';
}

/* ─────────────────────────────────────────
   11. FLING + SPRING BACK
   ───────────────────────────────────────── */
function flingCard(direction) {
  if (state.isFlinging) return;
  state.isFlinging = true;

  const targets = {
    right: { dx:  FLING_PX, dy: -50, rot:  20 },
    left:  { dx: -FLING_PX, dy: -50, rot: -20 },
    up:    { dx:  20,       dy: -FLING_PX, rot: 3 },
    down:  { dx: -20,       dy:  FLING_PX, rot: -3 },
  };
  const { dx, dy, rot } = targets[direction];
  const answerMap = { right: 'agree', left: 'disagree', up: 'strong', down: 'neutral' };

  $activeCard.style.transition = 'transform 0.42s cubic-bezier(0.4,0,1,1)';
  setCardTransform(dx, dy, rot);
  resetHints();

  BGEngine.onFling();
  recordAnswer(direction, answerMap[direction]);

  setTimeout(() => {
    $activeCard.style.transition = '';
    setCardTransform(0, 0, 0);
    state.isFlinging = false;
    advanceCard();
  }, 430);
}

function springBack() {
  if (!$activeCard) return;
  $activeCard.style.transition = 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)';
  setCardTransform(0, 0, 0);
  resetHints();
  BGEngine.onSpringBack();
  setTimeout(() => { $activeCard.style.transition = ''; }, 560);
}

/* ─────────────────────────────────────────
   12. SPECTRUM MODE
   ───────────────────────────────────────── */
function enterSpectrumMode() {
  state.isSpectrumMode = true;
  state.spectrumVal = 0;
  // Disable drag-overlay so spectrum slider underneath is clickable
  if ($dragOverlay) $dragOverlay.style.pointerEvents = 'none';
  if ($spectrumWrap)  $spectrumWrap.classList.add('visible');
  if ($swipeHint)     $swipeHint.style.opacity = '0';
  if ($modeLabel)     $modeLabel.textContent = 'Spectrum';
  if ($modeIndicator) $modeIndicator.classList.add('spectrum');
  updateSpectrumUI(0);
  if (typeof BD !== 'undefined' && BD.Toast) BD.Toast.show('Kéo để chọn mức độ chính xác 🎯', 2000);
}

function exitSpectrumMode(silent) {
  state.isSpectrumMode = false;
  state.spectrumDragging = false;
  // Re-enable drag-overlay for swipe interactions
  if ($dragOverlay) $dragOverlay.style.pointerEvents = 'all';
  if ($spectrumWrap)  $spectrumWrap.classList.remove('visible');
  if ($modeLabel)     $modeLabel.textContent = 'Swipe';
  if ($modeIndicator) $modeIndicator.classList.remove('spectrum');
  if (!silent) updateSpectrumUI(0);
}

function updateSpectrumUI(val) {
  const pct = ((val + 1) / 2) * 100;
  if ($spectrumThumb) $spectrumThumb.style.left = pct + '%';

  const levels = [
    { max: -0.55, label: 'Không đồng ý',      color: '#ff4757' },
    { max: -0.15, label: 'Hơi không đồng ý',  color: '#ff6b81' },
    { max:  0.15, label: 'Trung lập',          color: '#9d9dbf' },
    { max:  0.55, label: 'Đồng ý',             color: '#06d6a0' },
    { max:  1.01, label: 'Rất đồng ý',         color: '#7c3aed' },
  ];
  const lvl = levels.find(l => val <= l.max) || levels[levels.length - 1];
  if ($spectrumValueLabel) {
    $spectrumValueLabel.textContent = lvl.label;
    $spectrumValueLabel.style.color = lvl.color;
  }
  state.spectrumVal = val;
}

function bindSpectrumEvents() {
  if (!$spectrumTrack) return;

  const readPos = (e) => {
    const rect = $spectrumTrack.getBoundingClientRect();
    return Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
  };

  $spectrumTrack.addEventListener('pointerdown', (e) => {
    if (!state.isSpectrumMode) return;
    e.stopPropagation();
    $spectrumTrack.setPointerCapture(e.pointerId);
    state.spectrumDragging = true;
    updateSpectrumUI(readPos(e));
  });
  $spectrumTrack.addEventListener('pointermove', (e) => {
    if (!state.spectrumDragging) return;
    updateSpectrumUI(readPos(e));
  });
  $spectrumTrack.addEventListener('pointerup', () => { state.spectrumDragging = false; });
}

function confirmSpectrum() {
  const v = state.spectrumVal;
  let dir;
  if      (v <= -0.5)  dir = 'left';
  else if (v <= -0.15) dir = 'left';
  else if (v <=  0.15) dir = 'down';
  else if (v <=  0.55) dir = 'right';
  else                  dir = 'up';

  exitSpectrumMode();
  flingCard(dir);
}

/* ─────────────────────────────────────────
   13. ANSWER RECORDING
   ───────────────────────────────────────── */
const DNA_WEIGHTS = { agree: 1, strong: 2, neutral: 0, disagree: -1 };

function recordAnswer(direction, answer) {
  const q = QUESTIONS[state.currentIndex];
  state.answers.push({ qIndex: state.currentIndex, direction, answer, disc: q.disc });

  state.scores[answer] = (state.scores[answer] || 0) + 1;
  updateScoreboard();

  // DNA: base +1 for participation, bonus by answer strength
  const weight = DNA_WEIGHTS[answer] ?? 0;
  state.dna[q.disc] = Math.max(0, (state.dna[q.disc] || 0) + 1 + weight);
}

function updateScoreboard() {
  if ($agreeCount)    $agreeCount.textContent    = state.scores.agree    || 0;
  if ($strongCount)   $strongCount.textContent   = state.scores.strong   || 0;
  if ($neutralCount)  $neutralCount.textContent  = state.scores.neutral  || 0;
  if ($disagreeCount) $disagreeCount.textContent = state.scores.disagree || 0;
}

function updateDNA() {
  const total = Object.values(state.dna).reduce((s, v) => s + v, 0) || 1;
  ['kt','nv','yt','xh','nn','tn'].forEach(k => {
    const pct  = Math.round((state.dna[k] / total) * 100);
    const fill = document.getElementById('fill-' + k);
    const lbl  = document.getElementById('dna-' + k);
    if (fill) fill.style.width = pct + '%';
    if (lbl)  lbl.textContent  = pct + '%';
  });
}

/* ─────────────────────────────────────────
   14. ADVANCE + MILESTONES
   ───────────────────────────────────────── */
function advanceCard() {
  state.currentIndex++;
  updateDNA();

  const done  = state.currentIndex;
  const total = QUESTIONS.length;
  const MILESTONES = [
    { at: Math.floor(total / 3),   emoji: '🔥', text: '1/3 xong rồi!', sub: 'Tiếp tục nhe 💪' },
    { at: Math.floor(total / 2),   emoji: '⚡', text: 'Nửa đường rồi!', sub: 'Đang rất tốt đấy!' },
    { at: Math.floor(total * 2/3), emoji: '🚀', text: '2/3 hoàn thành!', sub: 'Sắp xong rồi!' },
  ];

  const hit = MILESTONES.find(m => m.at === done);
  if (hit) {
    showMilestone(hit.emoji, hit.text, hit.sub, () => loadCard(state.currentIndex));
  } else {
    loadCard(state.currentIndex);
  }
}

function showMilestone(emoji, text, sub, cb) {
  if (!$milestoneOverlay) { cb && cb(); return; }
  if ($milestoneEmoji) $milestoneEmoji.textContent = emoji;
  if ($milestoneText)  $milestoneText.textContent  = text;
  if ($milestoneSub)   $milestoneSub.textContent   = sub;
  $milestoneOverlay.classList.add('visible');
  setTimeout(() => {
    $milestoneOverlay.classList.remove('visible');
    cb && cb();
  }, 1900);
}

/* ─────────────────────────────────────────
   15. UNDO
   ───────────────────────────────────────── */
function undoLast() {
  if (!state.answers.length) {
    if (typeof BD !== 'undefined' && BD.Toast) BD.Toast.show('Không có gì để hoàn tác!', 1500);
    return;
  }
  const last = state.answers.pop();
  state.scores[last.answer] = Math.max(0, (state.scores[last.answer] || 0) - 1);
  const w = DNA_WEIGHTS[last.answer] ?? 0;
  state.dna[last.disc] = Math.max(0, (state.dna[last.disc] || 0) - 1 - w);
  state.currentIndex = last.qIndex;
  updateScoreboard();
  loadCard(state.currentIndex);
  if (typeof BD !== 'undefined' && BD.Toast) BD.Toast.show('↩ Đã hoàn tác câu trước', 1500);
}

/* ─────────────────────────────────────────
   16. KEYBOARD SHORTCUTS
   ───────────────────────────────────────── */
function bindKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (state.isSpectrumMode) {
      if (e.key === 'Enter')  { e.preventDefault(); confirmSpectrum(); }
      if (e.key === 'Escape') { e.preventDefault(); exitSpectrumMode(); }
      return;
    }
    const DIR_MAP = {
      ArrowRight: 'right', ArrowLeft: 'left',
      ArrowUp: 'up',       ArrowDown: 'down',
      d: 'right', a: 'left', w: 'up', s: 'down',
    };
    if (DIR_MAP[e.key]) { e.preventDefault(); flingCard(DIR_MAP[e.key]); return; }
    if (e.key === 'z' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); undoLast(); }
  });
}

/* ─────────────────────────────────────────
   17. FINISH SCREEN
   ───────────────────────────────────────── */
function showFinished() {
  const top = Object.entries(state.dna).sort((a, b) => b[1] - a[1])[0];
  const disc = DISC_COLORS[top ? top[0] : 'kt'];

  if ($activeCard) {
    $activeCard.style.transform = '';
    $activeCard.innerHTML = `
      <div class="card-inner" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;padding:32px 24px;">
        <div style="font-size:52px;line-height:1;">🎉</div>
        <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin:0;">Hoàn thành quiz!</h2>
        <p style="font-size:14px;color:var(--text-secondary);margin:0;">DNA học thuật của bạn đang thiên về</p>
        <div style="padding:10px 20px;border-radius:var(--radius-full);border:1.5px solid ${disc.primary}30;background:${disc.primary}18;font-size:15px;font-weight:700;color:${disc.primary};">
          ${disc.label}
        </div>
        <p style="font-size:13px;color:var(--text-muted);margin:0;">AI đang phân tích profile của bạn…</p>
        <button onclick="location.reload()" style="margin-top:8px;padding:10px 24px;background:var(--violet-600);color:#fff;border:none;border-radius:var(--radius-full);font-size:14px;font-weight:700;cursor:pointer;">
          Làm lại từ đầu
        </button>
      </div>
    `;
  }

  BGEngine.onFling();
  if (typeof BD !== 'undefined' && BD.Toast) BD.Toast.show('🎊 Tuyệt vời! Kết quả đang xử lý.', 3000);
}

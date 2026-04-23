// Home Screen Interactions

document.addEventListener('DOMContentLoaded', () => {
  const disciplineCards = document.querySelectorAll('.discipline-card');
  const ctaButton = document.querySelector('.cta-section .btn-primary');

  // Toggle discipline selection
  disciplineCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
      card.style.borderColor = card.classList.contains('selected')
        ? 'var(--violet-600)'
        : 'var(--neutral-700)';
      card.style.background = card.classList.contains('selected')
        ? 'rgba(124, 58, 237, 0.1)'
        : 'var(--bg-surface)';
    });
  });

  // CTA button click
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      const selected = document.querySelectorAll('.discipline-card.selected');
      if (selected.length === 0) {
        BD.Toast.warning('Vui lòng chọn ít nhất 1 chuyên ngành');
      } else {
        BD.Toast.success(`Bắt đầu quiz với ${selected.length} chuyên ngành!`);
      }
    });
  }

  // ── Orange Pill Tab Bar interaction ──
  const tabBar = document.getElementById('floatTabBar');
  if (tabBar) {
    const tabs = tabBar.querySelectorAll('.tab-item:not(.tab-disabled)');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        // If it's a real navigation link, let it navigate
        if (tab.href && tab.href !== '#' && !tab.href.endsWith('#')) return;
        e.preventDefault();
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  }
});

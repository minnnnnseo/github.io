const problemCards = document.querySelectorAll('.problem-card');

problemCards.forEach(card => {
  const button = card.querySelector('.problem-title');
  const content = card.querySelector('.solution-content');

  button.addEventListener('click', () => {
    // 열려있는 다른 카드 닫기
    problemCards.forEach(otherCard => {
      if (otherCard !== card) {
        const otherContent = otherCard.querySelector('.solution-content');
        otherCard.classList.remove('active');
        otherContent.style.height = 0;
      }
    });

    // 현재 카드 열기/닫기 toggle
    if (card.classList.contains('active')) {
      card.classList.remove('active');
      content.style.height = 0;
    } else {
      card.classList.add('active');
      content.style.height = content.scrollHeight + 'px';
    }
  });
});

// 부드러운 떠오르기 애니메이션
const floatUps = document.querySelectorAll('.float-up');

const floatObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

floatUps.forEach(el => floatObserver.observe(el));
  


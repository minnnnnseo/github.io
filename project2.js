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
  
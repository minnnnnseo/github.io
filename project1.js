// 부드러운 스크롤
document.documentElement.style.scrollBehavior = "smooth";

// 스크롤 시 섹션 등장 애니메이션
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

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
  
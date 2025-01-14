document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    menuBtn?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const spans = menuBtn.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : '';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navMenu.classList.remove('active');
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function highlightNavigation() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
});

const setupGrowthChart = () => {
    const ctx = document.getElementById('growthChart')?.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2021', '2022', '2023', '2024', '2025'],
            datasets: [{
                label: 'Market Growth',
                data: [30, 45, 65, 85, 100],
                borderColor: '#0066cc',
                backgroundColor: 'rgba(0, 102, 204, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Sports Integrity Education Market Growth'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Market Size (Million USD)'
                    }
                }
            }
        }
    });
};

const setupProblemChart = () => {
    const ctx = document.getElementById('problemChart')?.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Lack of Engagement', 'Poor Retention', 'Limited Access', 'Cost Barriers'],
            datasets: [{
                label: 'Current Challenges in Sports Education',
                data: [85, 75, 65, 55],
                backgroundColor: [
                    'rgba(0, 102, 204, 0.8)',
                    'rgba(0, 51, 102, 0.8)',
                    'rgba(77, 148, 255, 0.8)',
                    'rgba(153, 204, 255, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Key Challenges in Traditional Sports Education'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Impact Score (%)'
                    }
                }
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    setupGrowthChart();
    setupProblemChart();
});

const setupAIDemo = () => {
    const demoContainer = document.getElementById('ai-demo');
    if (!demoContainer) return;

    const messages = [
        "Welcome to the AI Tutor Demo!",
        "I can help you understand sports integrity concepts.",
        "Try asking me a question about anti-doping regulations.",
        "Or learn about match-fixing prevention."
    ];

    let currentMessage = 0;
    
    const updateMessage = () => {
        if (demoContainer) {
            demoContainer.textContent = messages[currentMessage];
            currentMessage = (currentMessage + 1) % messages.length;
        }
    };

    updateMessage();
    setInterval(updateMessage, 3000);
};

const setupScrollAnimation = () => {
    const elements = document.querySelectorAll('.solution-card, .case-study-card, .partner-logo');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
};

document.addEventListener('DOMContentLoaded', function() {
    setupAIDemo();
    setupScrollAnimation();
});

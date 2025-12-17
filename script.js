// Создание снежинок
function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowflakeCount = 60;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        
        const size = Math.random() * 20 + 10;
        const startPosition = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 10;
        const opacity = Math.random() * 0.7 + 0.3;
        const delay = Math.random() * 10;
        
        snowflake.style.cssText = `
            position: absolute;
            top: -20px;
            left: ${startPosition}%;
            font-size: ${size}px;
            color: white;
            opacity: ${opacity};
            animation: fall ${animationDuration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 1;
        `;
        
        snowflakesContainer.appendChild(snowflake);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.8;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Эффект метели
function createBlizzard() {
    const blizzardContainer = document.querySelector('.blizzard-effect');
    const particleCount = 100;
    
    // Очищаем предыдущие частицы
    const existingParticles = document.querySelectorAll('.blizzard-particle');
    existingParticles.forEach(p => p.remove());
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('blizzard-particle');
        
        const size = Math.random() * 6 + 2;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = Math.random() * 2 + 1;
        const delay = Math.random() * 2;
        const windStrength = Math.random() * 100 - 50;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${startX}%;
            top: ${startY}%;
            background: white;
            border-radius: 50%;
            opacity: ${Math.random() * 0.7 + 0.3};
            box-shadow: 0 0 10px white;
            animation: blizzardParticle ${duration}s linear infinite;
            animation-delay: ${delay}s;
            z-index: 1;
        `;
        
        blizzardContainer.appendChild(particle);
    }
    
    // Добавляем стили для частиц метели
    if (!document.querySelector('#blizzardStyle')) {
        const style = document.createElement('style');
        style.id = 'blizzardStyle';
        style.textContent = `
            @keyframes blizzardParticle {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 0.8;
                }
                25% {
                    transform: translate(${Math.random() * 50 - 25}px, 25vh) rotate(90deg);
                }
                50% {
                    transform: translate(${Math.random() * 50 - 25}px, 50vh) rotate(180deg);
                    opacity: 0.6;
                }
                75% {
                    transform: translate(${Math.random() * 50 - 25}px, 75vh) rotate(270deg);
                }
                100% {
                    transform: translate(${Math.random() * 50 - 25}px, 100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Включение/выключение метели
function toggleBlizzard() {
    const blizzardEffect = document.querySelector('.blizzard-effect');
    const blizzardBtn = document.getElementById('blizzardBtn');
    
    if (blizzardEffect.classList.contains('active')) {
        blizzardEffect.classList.remove('active');
        blizzardBtn.innerHTML = '<i class="fas fa-wind"></i> Сильная метель';
        // Убираем частицы метели
        const particles = document.querySelectorAll('.blizzard-particle');
        particles.forEach(p => p.remove());
    } else {
        blizzardEffect.classList.add('active');
        blizzardBtn.innerHTML = '<i class="fas fa-wind"></i> Выключить метель';
        createBlizzard();
    }
}

// Сильная метель
function createHeavyBlizzard() {
    const blizzardContainer = document.querySelector('.blizzard-effect');
    const particleCount = 200;
    
    // Очищаем предыдущие частицы
    const existingParticles = document.querySelectorAll('.blizzard-particle');
    existingParticles.forEach(p => p.remove());
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('blizzard-particle');
        
        const size = Math.random() * 8 + 3;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = Math.random() * 1 + 0.5;
        const delay = Math.random();
        const horizontalMove = Math.random() * 200 - 100;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${startX}%;
            top: ${startY}%;
            background: linear-gradient(45deg, white, #e3f2fd);
            border-radius: 50%;
            opacity: ${Math.random() * 0.8 + 0.2};
            box-shadow: 0 0 15px white;
            animation: heavyBlizzard ${duration}s linear infinite;
            animation-delay: ${delay}s;
            z-index: 1;
        `;
        
        blizzardContainer.appendChild(particle);
    }
    
    // Добавляем стили для сильной метели
    if (!document.querySelector('#heavyBlizzardStyle')) {
        const style = document.createElement('style');
        style.id = 'heavyBlizzardStyle';
        style.textContent = `
            @keyframes heavyBlizzard {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 0.9;
                }
                25% {
                    transform: translate(${Math.random() * 100 - 50}px, 25vh) rotate(90deg);
                }
                50% {
                    transform: translate(${Math.random() * 100 - 50}px, 50vh) rotate(180deg);
                    opacity: 0.7;
                }
                75% {
                    transform: translate(${Math.random() * 100 - 50}px, 75vh) rotate(270deg);
                }
                100% {
                    transform: translate(${Math.random() * 100 - 50}px, 100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Мерцание звёзд
function toggleChristmasLights() {
    const letterBorder = document.querySelector('.letter-border');
    const lightsBtn = document.getElementById('lightsBtn');
    
    if (letterBorder.classList.contains('lights-on')) {
        letterBorder.classList.remove('lights-on');
        letterBorder.style.animation = 'borderGlow 4s infinite alternate';
        lightsBtn.innerHTML = '<i class="fas fa-tree"></i> Мерцание звёзд';
    } else {
        letterBorder.classList.add('lights-on');
        letterBorder.style.animation = 'starLights 2s infinite alternate';
        lightsBtn.innerHTML = '<i class="fas fa-tree"></i> Выключить мерцание';
        
        if (!document.querySelector('#lightsStyle')) {
            const style = document.createElement('style');
            style.id = 'lightsStyle';
            style.textContent = `
                @keyframes starLights {
                    0%, 100% {
                        box-shadow: 0 0 30px #4dabf7, 0 0 60px #4dabf7;
                        border-color: #4dabf7;
                    }
                    25% {
                        box-shadow: 0 0 30px #ffd43b, 0 0 60px #ffd43b;
                        border-color: #ffd43b;
                    }
                    50% {
                        box-shadow: 0 0 30px #74c0fc, 0 0 60px #74c0fc;
                        border-color: #74c0fc;
                    }
                    75% {
                        box-shadow: 0 0 30px #ffa94d, 0 0 60px #ffa94d;
                        border-color: #ffa94d;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Управление музыкой
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    
    if (music.paused) {
        music.play().then(() => {
            musicBtn.innerHTML = '<i class="fas fa-volume-up"></i> Выключить музыку';
        }).catch(error => {
            console.log('Ошибка воспроизведения музыки:', error);
            musicBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Нажмите ещё раз';
        });
    } else {
        music.pause();
        musicBtn.innerHTML = '<i class="fas fa-music"></i> Включить музыку';
    }
}

// Добавление снега
function addMoreSnow() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const extraCount = 40;
    
    for (let i = 0; i < extraCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('extra-snowflake');
        snowflake.innerHTML = '❅';
        
        const size = Math.random() * 25 + 15;
        const startPosition = Math.random() * 100;
        const animationDuration = Math.random() * 6 + 6;
        const opacity = Math.random() * 0.8 + 0.2;
        const delay = Math.random() * 3;
        
        snowflake.style.cssText = `
            position: absolute;
            top: -20px;
            left: ${startPosition}%;
            font-size: ${size}px;
            color: #e3f2fd;
            opacity: ${opacity};
            animation: fallFast ${animationDuration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 1;
            text-shadow: 0 0 8px white;
        `;
        
        snowflakesContainer.appendChild(snowflake);
    }
    
    if (!document.querySelector('#fastSnowStyle')) {
        const style = document.createElement('style');
        style.id = 'fastSnowStyle';
        style.textContent = `
            @keyframes fallFast {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createSnowflakes();
    
    // Назначаем обработчики кнопок
    document.getElementById('musicBtn').addEventListener('click', toggleMusic);
    document.getElementById('snowBtn').addEventListener('click', addMoreSnow);
    document.getElementById('lightsBtn').addEventListener('click', toggleChristmasLights);
    document.getElementById('blizzardBtn').addEventListener('click', createHeavyBlizzard);
    
    // Интерактивность письма
    const letterContent = document.querySelector('.letter-content');
    letterContent.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.01)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    letterContent.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Анимация кнопок
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Подготовка музыки
    const music = document.getElementById('bgMusic');
    music.volume = 0.3;
    music.preload = 'auto';
    
    // Автоматическое включение фоновой анимации метели
    setTimeout(() => {
        const blizzardEffect = document.querySelector('.blizzard-effect');
        blizzardEffect.classList.add('active');
    }, 1000);
});

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
};

const gmailInput = document.getElementById('gmail_input');
const gmailResult = document.getElementById('gmail_result');

document.getElementById('gmail_button').addEventListener('click', () => {
    const email = gmailInput.value.trim();
    if (validateEmail(email)) {
        gmailResult.textContent = 'Valid Gmail';
    } else {
        gmailResult.textContent = 'Invalid Gmail';
    }
});



const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

// Функция для движения маленького блока вправо внутри родительского блока
const moveRight = (distance) => {
    childBlock.style.left = `${distance}px`;
    if (distance < parentBlock.offsetWidth - childBlock.offsetWidth) {
        setTimeout(() => moveRight(distance + 1), 10); // Рекурсивный вызов с увеличением расстояния
    }
};

moveRight(0); // Начать движение с 0
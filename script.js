const navButtons = document.querySelectorAll('.nav-btn');
const screens = document.querySelectorAll('.screen');

// Функция переключения экранов
function switchScreen(targetId) {
    screens.forEach(screen => screen.classList.remove('active'));
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
    document.querySelector(`[data-target="${targetId}"]`).classList.add('active');
}

// Клики по меню
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetScreen = button.getAttribute('data-target');
        switchScreen(targetScreen);
    });
});

// Обработка кнопки "Добавить"
document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const taskName = document.getElementById('task-input').value;
    if (taskName.trim() !== "") {
        alert(`Задача "${taskName}" успешно добавлена в каркас!`);
        document.getElementById('task-input').value = '';
        switchScreen('screen-tasks');
    }
});
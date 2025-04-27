let switchFrm = document.querySelector('#switch-frm') // Получает элемент переключателя форм по ID
let switchF1 = document.querySelector('#switch-f1') // Получает элемент формы входа по ID
let switchF2 = document.querySelector('#switch-f2') // Получает элемент формы регистрации по ID
let switchCircle = document.querySelectorAll('.switch-circle') // Получает все элементы переключателя по классу
let switchBtn = document.querySelectorAll('.switch-btn') // Получает все кнопки переключения форм по классу
let regFrm = document.querySelector('#register-form') // Получает элемент формы регистрации по ID
let logFrm = document.querySelector('#login-form') // Получает элемент формы входа по ID
let allButtons = document.querySelectorAll('.submit') // Получает все кнопки отправки форм по классу

let getButtons = (e) => e.preventDefault() // Функция для предотвращения стандартного поведения кнопок (например, отправки формы)

let changeForm = (e) => { // Функция для переключения между формами
    switchFrm.classList.add('is-gx') // Добавляет класс для анимации переключения
    setTimeout(function () { // Устанавливает таймер для удаления класса анимации
        switchFrm.classList.remove('is-gx') // Удаляет класс анимации после 1500 мс
    }, 1500)

    switchFrm.classList.toggle('is-txr') // Переключает класс для анимации переключения форм
    switchCircle[0].classList.toggle('is-txr') // Переключает класс для первого круга переключателя
    switchCircle[1].classList.toggle('is-txr') // Переключает класс для второго круга переключателя

    switchF1.classList.toggle('is-hidden') // Переключает видимость формы входа
    switchF2.classList.toggle('is-hidden') // Переключает видимость формы регистрации
    regFrm.classList.toggle('is-txl') // Переключает класс для анимации выхода формы регистрации
    logFrm.classList.toggle('is-txl') // Переключает класс для анимации выхода формы входа
    logFrm.classList.toggle('is-z200') // Переключает класс для изменения z-индекса формы входа
}

let mainF = (e) => { // Основная функция для инициализации событий
    for (var i = 0; i < allButtons.length; i++) // Цикл по всем кнопкам отправки форм
        allButtons[i].addEventListener('click', getButtons) // Добавляет обработчик события для предотвращения отправки формы
    for (var i = 0; i < switchBtn.length; i++) // Цикл по всем кнопкам переключения форм
        switchBtn[i].addEventListener('click', changeForm) // Добавляет обработчик события для переключения форм
}

window.addEventListener('load', mainF) // Добавляет обработчик события загрузки окна для вызова основной функции
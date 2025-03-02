document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const day = params.get("day") || 1;

    const data = {
        1: { 
            title: "День 1: Приветствие и знакомство", 
            vocabulary: ["Hallo - Привет", "Guten Tag - Добрый день", "Wie geht es Ihnen? - Как у вас дела?", "Ich heiße... - Меня зовут..."], 
            grammar: "Простые фразы для знакомства: Ich heiße ..., Ich komme aus ..., Ich bin Student.",
            audio: "audio/day1.mp3",
            exercise: "Повтори вслух фразы и попробуй представить себя."
        },
        8: { 
            title: "День 8: Тест на лексику", 
            vocabulary: ["die Universität - университет", "der Student - студент", "das Studium - учеба"], 
            grammar: "Как задать вопрос: Wo studierst du?",
            audio: "audio/day8.mp3",
            exercise: "Прочитай и запомни лексику.",
            test: {
                question: "Как по-немецки 'университет'?",
                answers: ["die Schule", "die Universität", "das Büro"],
                correct: 1
            }
        },
        15: {
            title: "День 15: Глагол 'haben' (иметь)",
            vocabulary: ["ich habe - у меня есть", "du hast - у тебя есть", "er/sie/es hat - у него/неё есть"],
            grammar: "Глагол 'haben' спрягается так: ich habe, du hast, er/sie/es hat...",
            audio: "audio/day15.mp3",
            exercise: "Прослушай примеры и попробуй повторить.",
            fillGap: {
                sentence: "Ich ___ ein Buch.",
                correct: "habe"
            }
        },
        20: { 
            title: "День 20: Разговор в университете", 
            vocabulary: ["die Vorlesung - лекция", "die Prüfung - экзамен", "die Bibliothek - библиотека"], 
            grammar: "Структура диалога: Вопрос-Ответ.",
            audio: "audio/day20.mp3",
            exercise: "Составь 5 предложений о своём учебном процессе.",
            fillGap: {
                sentence: "Die ___ beginnt um 10 Uhr.",
                correct: "Vorlesung"
            }
        },
        25: {
            title: "День 25: Подготовка к экзамену",
            vocabulary: ["die Hausaufgabe - домашнее задание", "die Vorbereitung - подготовка", "die Wiederholung - повторение"],
            grammar: "Как выражать будущее время: 'Ich werde ... machen.'",
            audio: "audio/day25.mp3",
            exercise: "Напиши 3 вещи, которые ты сделаешь перед экзаменом.",
            longAnswer: "Опиши свою стратегию подготовки к экзамену (100-150 слов)."
        },
        30: {
            title: "День 30: Завершающее задание",
            vocabulary: ["die Bewerbung - заявление", "das Gespräch - собеседование", "die Einschreibung - зачисление"],
            grammar: "Структура диалога при поступлении в вуз.",
            audio: "audio/day30.mp3",
            exercise: "Прочитай пример диалога и попробуй разыграть его с другом.",
            longAnswer: "Напиши небольшой рассказ (150 слов) о своём поступлении в вуз."
        }
    };

    const dayData = data[day];

    if (dayData) {
        document.getElementById("day-title").textContent = dayData.title;
        document.getElementById("vocabulary").innerHTML = dayData.vocabulary.map(word => `<li>${word}</li>`).join("");
        document.getElementById("grammar").textContent = dayData.grammar;
        document.getElementById("audio").src = dayData.audio;
        document.getElementById("exercise").textContent = dayData.exercise;

        if (dayData.test) showTest(dayData.test);
        if (dayData.fillGap) showFillGap(dayData.fillGap);
        if (dayData.longAnswer) showLongAnswer(dayData.longAnswer);
    }
});

// **Функция отображения тестов**
function showTest(testData) {
    document.getElementById("test-section").style.display = "block";
    document.getElementById("test-question").textContent = testData.question;
    const answersContainer = document.getElementById("test-answers");
    answersContainer.innerHTML = "";

    testData.answers.forEach((answer, index) => {
        answersContainer.innerHTML += `
            <li>
                <input type="radio" name="test" value="${index}" id="answer-${index}">
                <label for="answer-${index}">${answer}</label>
            </li>
        `;
    });

    window.correctAnswer = testData.correct;
}

// **Функция проверки теста**
function checkAnswer() {
    const selected = document.querySelector('input[name="test"]:checked');
    if (!selected) {
        document.getElementById("test-result").textContent = "❌ Выберите ответ!";
        return;
    }

    const answer = parseInt(selected.value);
    if (answer === window.correctAnswer) {
        document.getElementById("test-result").textContent = "✅ Правильно!";
        document.getElementById("test-result").style.color = "green";
    } else {
        document.getElementById("test-result").textContent = "❌ Неправильно. Попробуй ещё раз.";
        document.getElementById("test-result").style.color = "red";
    }
}

// **Функция проверки пропусков**
function showFillGap(gapData) {
    document.getElementById("fill-gap-section").style.display = "block";
    document.getElementById("gap-sentence").textContent = gapData.sentence;
    window.correctGapAnswer = gapData.correct.toLowerCase();
}

function checkGapAnswer() {
    const userInput = document.getElementById("user-answer").value.trim().toLowerCase();
    if (userInput === window.correctGapAnswer) {
        document.getElementById("gap-result").textContent = "✅ Верно!";
        document.getElementById("gap-result").style.color = "green";
    } else {
        document.getElementById("gap-result").textContent = "❌ Ошибка. Попробуй ещё раз.";
        document.getElementById("gap-result").style.color = "red";
    }
}

// **Функция для развернутых заданий**
function showLongAnswer(longText) {
    document.getElementById("long-answer-section").style.display = "block";
    document.getElementById("long-question").textContent = longText;
}

function saveLongAnswer() {
    const answer = document.getElementById("long-answer").value.trim();
    if (answer.length > 50) {
        document.getElementById("long-result").textContent = "✅ Ответ сохранён!";
    } else {
        document.getElementById("long-result").textContent = "❌ Напишите развернутый ответ.";
    }
}

// **Функция сохранения выполненного дня**
function markCompleted() {
    alert("✅ День успешно завершён!");
    localStorage.setItem(`day-${new URLSearchParams(window.location.search).get("day")}`, "completed");
    window.location.href = "calendar.html";
}

// **Обновление календаря – отмечаем выполненные дни**
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 30; i++) {
        if (localStorage.getItem(`day-${i}`) === "completed") {
            const dayCard = document.getElementById(`day-${i}`);
            if (dayCard) {
                dayCard.style.backgroundColor = "#28a745";
                dayCard.style.color = "white";
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const day = params.get("day") || 1;
    const page = window.location.pathname.includes("tasks") ? "tasks" : "theory";

    const data = {
        1: {
            title: "День 1: Приветствие",
            vocabulary: ["Hallo - Привет", "Tschüss - Пока", "Guten Tag - Добрый день"],
            grammar: "Глагол 'sein': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Universität'?", answers: ["der", "die", "das"], correct: 1 }
            ]
        },
        2: {
            title: "День 2: Приветствие",
            vocabulary: ["scheiße - дерьмо"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        3: {
            title: "День 2: Приветствие",
            vocabulary: ["scheiße - дерьмо"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        4: {
            title: "День 2: Приветствие",
            vocabulary: ["scheiße - дерьмо"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        5: {
            title: "День 2: Приветствие",
            vocabulary: ["scheiße - дерьмо"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        6: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        7: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        8: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        9: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        10: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        11: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        12: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        13: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        14: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        15: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        16: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        17: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        18: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        19: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        20: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        21: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        21: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        23: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        24: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        25: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        26: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        25: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        26: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        27: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        28: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        29: {
            title: "День 6: Приветствие",
            vocabulary: ["привет"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        30: {
            title: "День 30: Приветствие",
            vocabulary: ["слова"],
            grammar: "грамматика",
            audio: "audio/day30.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        }
    };

    const dayData = data[day];

    if (dayData) {
        if (page === "theory") {
            document.getElementById("day-title").textContent = dayData.title;
            document.getElementById("vocabulary").innerHTML = dayData.vocabulary?.map(word => `<li>${word}</li>`).join("") || "";
            document.getElementById("grammar").textContent = dayData.grammar || "";
            document.getElementById("audio").src = dayData.audio || "";
            document.getElementById("task-link").href = `tasks.html?day=${day}`;
        } else if (page === "tasks") {
            document.getElementById("task-title").textContent = dayData.title;
            if (dayData.tests) showTests(dayData.tests);
        }
    }
});

// **Функция отображения тестов**
function showTests(testArray) {
    document.getElementById("test-section").style.display = "block";
    const testContainer = document.getElementById("test-answers");
    testContainer.innerHTML = "";

    testArray.forEach((test, index) => {
        const testBlock = document.createElement("div");
        testBlock.innerHTML = `
            <p>${test.question}</p>
            <ul>
                ${test.answers.map((answer, i) => `
                    <li>
                        <input type="radio" name="test-${index}" value="${i}" id="answer-${index}-${i}">
                        <label for="answer-${index}-${i}">${answer}</label>
                    </li>
                `).join("")}
            </ul>
        `;
        testContainer.appendChild(testBlock);
    });

    // Добавляем кнопку "Проверить" после загрузки тестов
    const checkButton = document.createElement("button");
    checkButton.textContent = "Проверить";
    checkButton.classList.add("check-btn");
    checkButton.onclick = () => checkAnswers(testArray);
    document.getElementById("test-section").appendChild(checkButton);
}

// **Функция проверки тестов**
function checkAnswers(testArray) {
    let correctCount = 0;
    testArray.forEach((test, index) => {
        const selected = document.querySelector(`input[name="test-${index}"]:checked`);
        if (selected && parseInt(selected.value) === test.correct) {
            correctCount++;
        }
    });

    const resultElement = document.getElementById("test-result");
    resultElement.textContent = `✅ Вы правильно ответили на ${correctCount} из ${testArray.length} вопросов!`;
}

    function markCompleted() {  // ❌ Функция внутри функции! 
        const params = new URLSearchParams(window.location.search);
        const day = params.get("day");
        if (!day) {
            alert("❌ Ошибка: День не определён!");
            return;
        }
        localStorage.setItem(`day-${day}`, "completed");
        alert(`✅ День ${day} завершен!`);
        window.location.href = "calendar.html";
}
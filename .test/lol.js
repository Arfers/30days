document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const day = params.get("day") || 1;
    const page = window.location.pathname.includes("tasks") ? "tasks" : "theory";

    const data = {
        1: {
            title: "День 1: Приветствие и знакомство",
            vocabulary: ["ich/du - я/ты", "er/sie/es - он/она/оно", "Sie/Ihnen - Вы/Вас", "Wer/was/wo? - Кто/что/где?", "Hallo - Привет", "Guten Tag - Добрый день!", "Ich heiße.. - Меня зовут..", "Woher kommst du? - Откуда ты?", "Ich komme aus.. - Я родом из..."],
            grammar: "Глагол sein - являться: ich bin, du bist, er/sie/es ist...",
            audio: "audio/day1.mp3",
            tests: [
                { question: "Какой артикль у слова 'Universiфtät'?", answers: ["der", "die", "das"], correct: 1 },
                { question: "Какой артикль у слова 'Uniвversität'?", answers: ["der", "die", "das"], correct: 1 },
                { question: "Какой артикль у слова 'Univпersität'?", answers: ["der", "die", "das"], correct: 1 }
            ]
        },
        2: {
            title: "День 2: Гучи",
            vocabulary: ["выеб города и заработал много денег"],
            grammar: "ныне мою жопу возит новый мерин",
            audio: "audio/day2.mp3",
            tests: [
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 },
                { question: "Какой артикль у слова 'Hund'?", answers: ["der", "die", "das"], correct: 0 },
                { question: "лол'?", answers: ["der", "die", "das"], correct: 2 }
            ]
        },
        3: {
            title: "День 2: Приветствие",
            vocabulary: ["scheiße - дерьмо"],
            grammar: "Глагол '12312321': ich bin, du bist, er/sie/es ist...",
            audio: "audio/day2.mp3",
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
            fillGap: {
                sentence: "Ich ___ ein Buch.",
                correct: "habe"
            },     
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
            longAnswer: "Напишите мотивационное письмо в вуз на немецком языке. Объем 300 слов."
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
            if (dayData.fillGap) showFillGap(dayData.fillGap);
            if (dayData.longAnswer) showLongAnswer(dayData.longAnswer);
        }
    }
});

// функция отображения тестов
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

    // кнопка "проверить"
    if (!document.querySelector(".check-btn")) {
        if (!document.querySelector(".check-btn")) {
            const checkButton = document.createElement("button");
            checkButton.textContent = "Проверить";
            checkButton.classList.add("check-btn");
            checkButton.onclick = () => checkAnswers(testArray, day);  // ✅ Передаём testArray и day
            document.getElementById("test-section").appendChild(checkButton);
        }
        
    }
    
}

// проверка тестов
function checkAnswers(testArray) {
    let correctCount = 0;
    testArray.forEach((test, index) => {
        const selected = document.querySelector(`input[name="test-${index}"]:checked`);
        if (selected && parseInt(selected.value) === test.correct) {
            correctCount++;
        }
    });

    document.getElementById("test-result").textContent = `✅ Вы правильно ответили на ${correctCount} из ${testArray.length} вопросов!`;
}


function markCompleted() {
    const params = new URLSearchParams(window.location.search);
    const day = params.get("day");

    if (!day) {
        alert("❌ Ошибка: День не определён!");
        return;
    }

    localStorage.setItem(`day-${day}`, "completed");
    alert(`✅ День ${day} завершен!`);
    
    updateCalendar();  // ✅ Вызываем обновление календаря
    window.location.href = "calendar.html";
}

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
            document.addEventListener("DOMContentLoaded", () => {
                if (window.location.pathname.includes("calendar.html")) {
                    updateCalendar();
                }
            });
            
            function updateCalendar() {
                console.log("🔄 Обновление календаря...");
                for (let i = 1; i <= 30; i++) {
                    if (localStorage.getItem(`day-${i}`) === "completed") {
                        const dayCard = document.getElementById(`day-${i}`);
                        if (dayCard) {
                            dayCard.style.backgroundColor = "#28a745";
                            dayCard.style.color = "white";
                            console.log(`✅ День ${i} отмечен как выполненный`);
                        } else {
                            console.log(`⚠️ Элемент day-${i} не найден в DOM`);
                        }
                    }
                }
            }
            
            // проверка пред дней
            function checkDay(day) {
                if (day > 1) {
                    const prevDayCompleted = localStorage.getItem(`day-${day - 1}`) === "completed";
            
                    if (!prevDayCompleted) {
                        const proceed = confirm(`⚠️ Рекомендуем сначала завершить все предыдущие день. Хотите проигнорировать предупреждение и перейти к ${day}-ому дню?`);
                        if (!proceed) {
                            return; // возврат в календарь
                        }
                    }
                }
                // переход ко дню
                window.location.href = `day.html?day=${day}`;
            }
            
            function markCompleted() {
                const params = new URLSearchParams(window.location.search);
                const day = params.get("day");
            
                if (!day) {
                    alert("❌ Ошибка: День не определён!");
                    return;
                }
            
                localStorage.setItem(`day-${day}`, "completed");
                alert(`✅ День ${day} завершен!`);
                
                window.location.href = "calendar.html";
                setTimeout(updateCalendar, 1000);
            }
            document.addEventListener("DOMContentLoaded", () => {
                const params = new URLSearchParams(window.location.search);
                const day = params.get("day") || 1;
                const page = window.location.pathname.includes("tasks") ? "tasks" : "theory";
            
                const data = {
                };
            
                const dayData = data[day];
            
                if (dayData) {
                    if (page === "tasks") {
                        document.getElementById("task-title").textContent = dayData.title;
                        if (dayData.tests && document.getElementById("test-section")) showTests(dayData.tests);
                        if (dayData.fillGap && document.getElementById("fill-gap-section")) showFillGap(dayData.fillGap);
                        if (dayData.longAnswer && document.getElementById("long-answer-section")) showLongAnswer(dayData.longAnswer);                        
                    }
                }
            });
            
            // **Функция проверки выполнения всех заданий**
            function checkCompletion() {
                let allCorrect = true;
            
                // Проверяем тесты
                const selectedAnswers = document.querySelectorAll('[id^="test-answers"] input[type="radio"]:checked');
                const totalQuestions = document.querySelectorAll('[id^="test-answers"] input[type="radio"]').length / 3;  // Проверяем, выбраны ли ВСЕ ответы
            
                if (selectedAnswers.length !== totalQuestions) {
                    allCorrect = false;  // ❌ Если что-то не выбрано, кнопка остаётся заблокированной
                }
            
                selectedAnswers.forEach((selected, index) => {
                    const day = new URLSearchParams(window.location.search).get("day");
                    if (parseInt(selected.value) !== data[day].tests[index].correct) {
                        allCorrect = false;
                    }
                });
            
                // Проверяем задания fill-gap
                const gapAnswer = document.getElementById("user-answer")?.value.trim().toLowerCase();
                if (gapAnswer && gapAnswer !== window.correctGapAnswer) {
                    allCorrect = false;
                }
            
                // Проверяем развернутый ответ (long-answer)
                const longAnswer = document.getElementById("long-answer")?.value.trim();
                if (longAnswer && longAnswer.length < 50) {
                    allCorrect = false;
                }
            
                // Разблокируем кнопку "Выполнено", если ВСЁ выполнено
                document.getElementById("complete-btn").disabled = !allCorrect;
            }
            
            
            
            // **Функция проверки тестов + обновление кнопки**
            function checkAnswers(testArray, day) {
                let correctCount = 0;
                testArray.forEach((test, index) => {
                    const selected = document.querySelector(`input[name="test-${index}"]:checked`);
                    if (selected && parseInt(selected.value) === data[day].tests[index].correct) {
                        correctCount++;
                    }
                });
            
                document.getElementById("test-result").textContent = `✅ Вы правильно ответили на ${correctCount} из ${testArray.length} вопросов!`;
                checkCompletion(); // Проверяем, можно ли разблокировать кнопку "Выполнено"
            }
            
            // **Функция проверки вводного задания + обновление кнопки**
            function checkGapAnswer() {
                const userInput = document.getElementById("user-answer").value.trim().toLowerCase();
                if (userInput === window.correctGapAnswer) {
                    document.getElementById("gap-result").textContent = "✅ Верно!";
                    document.getElementById("gap-result").style.color = "green";
                } else {
                    document.getElementById("gap-result").textContent = "❌ Ошибка. Попробуй ещё раз.";
                    document.getElementById("gap-result").style.color = "red";
                }
                checkCompletion(); // Проверяем, можно ли разблокировать кнопку "Выполнено"
            }
            
            // **Функция сохранения развернутого ответа + обновление кнопки**
            function saveLongAnswer() {
                const answer = document.getElementById("long-answer").value.trim();
                if (answer.length > 50) {
                    document.getElementById("long-result").textContent = "✅ Ответ сохранён!";
                } else {
                    document.getElementById("long-result").textContent = "❌ Напишите развернутый ответ.";
                }
                checkCompletion(); // Проверяем, можно ли разблокировать кнопку "Выполнено"
            }
            
            // **Функция отметки дня как выполненного**
            function markCompleted() {
                const params = new URLSearchParams(window.location.search);
                const day = params.get("day");
            
                if (!day) {
                    alert("❌ Ошибка: День не определён!");
                    return;
                }
            
                if (document.getElementById("complete-btn").disabled) {
                    alert("⚠️ Сначала выполните все задания!");
                    return;
                }
            
                localStorage.setItem(`day-${day}`, "completed");
                alert(`✅ День ${day} завершен!`);
                
                window.location.href = "calendar.html";
                setTimeout(updateCalendar, 1000);
            }
            
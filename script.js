document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const day = params.get("day") || 1;
    const page = window.location.pathname.includes("tasks") ? "tasks" : "theory";
    const globalParams = new URLSearchParams(window.location.search);
    const lang = globalParams.get("lang") || "de";
    const taskLink = document.getElementById("task-link");
    if (taskLink) {
      taskLink.href = `tasks.html?day=${day}&lang=${lang}`;
    }
    const backLink = document.getElementById("back-link");
if (backLink) {
    backLink.href = `calendar.html?lang=${lang}`;
}

const data = {
    de: {
        1: {
          title: "День 1. Знакомство с вузом",
          vocabulary: ["Universität", "Bewerbung"],
          grammar: "Глагол sein",
          audio: "audio/day1_de.mp3",
          tests: [
                { question: "Какой артикль у слова 'Universiфtät'?", answers: ["der", "die", "das"], correct: 1 },
                { question: "Какой артикль у слова 'Uniвversität'?", answers: ["der", "die", "das"], correct: 1 },
                { question: "Какой артикль у слова 'Univпersität'?", answers: ["der", "die", "das"], correct: 1 }
          ]
        }
      },
    en: {
      1: {
        vocabulary: "Vocabulary: university, application\nGrammar: verb to be",
        tests: [
          {
            question: "Choose the correct word: ___ university",
            options: ["a", "an", "the"],
            answer: "a"
          }
        ]
      }
    },
    fr: {
      1: {
        vocabulary: "Lexique : université, candidature\nGrammaire : le verbe être",
        tests: [
          {
            question: "Choisissez l’article correct : ___ université",
            options: ["le", "la", "les"],
            answer: "l’"
          }
        ]
      }
    }
  };
  

  const dayData = data[lang]?.[day];

    if (dayData) {
        if (page === "theory") {
            document.getElementById("day-title").textContent = dayData.title;
            document.getElementById("vocabulary").innerHTML = dayData.vocabulary?.map(word => `<li>${word}</li>`).join("") || "";
            document.getElementById("grammar").textContent = dayData.grammar || "";
            document.getElementById("audio").src = dayData.audio || "";
            document.getElementById("task-link").href = `tasks.html?day=${day}&lang=${lang}`;
        } else if (page === "tasks") {
            document.getElementById("task-title").textContent = dayData.title;

            if (dayData.tests) showTests(dayData.tests);
            else document.getElementById("test-section").style.display = "none";

            if (dayData.fillGap) showFillGap(dayData.fillGap);
            else document.getElementById("fill-gap-section").style.display = "none";

            if (dayData.longAnswer) showLongAnswer(dayData.longAnswer);
            else document.getElementById("long-answer-section").style.display = "none";
        }
    }
});


// функция отображения тестов
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("calendar.html")) {
        updateCalendar();
    }
});

function updateCalendar() {
    console.log("🔄 Обновление календаря...");
    for (let i = 1; i <= 30; i++) {
        if (localStorage.getItem(`day-${lang}-${i}`) === "completed") {
            const dayCard = document.getElementById(`day-${i}`);
            if (dayCard) {
                dayCard.style.backgroundColor = "#28a745";
                dayCard.style.color = "white";
            }
        }
    }
}
    

function showTests(testArray, day) {
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

    if (!document.querySelector(".check-btn")) {
        const checkButton = document.createElement("button");
        checkButton.textContent = "Проверить";
        checkButton.classList.add("check-btn");
        checkButton.onclick = () => checkAnswers(testArray, day);
        document.getElementById("test-section").appendChild(checkButton);
    }
}

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


    const lang = params.get("lang") || "de";
    localStorage.setItem(`day-${lang}-${day}`, "completed");
    alert(`✅ День ${day} завершен!`);

    updateCalendar();  // ✅ Вызываем обновление календаря
    window.location.href = "calendar.html";
}

function showFillGap(gapData) {
    const gapSection = document.getElementById("fill-gap-section");
    if (gapSection) {
        gapSection.style.display = "block";
        document.getElementById("gap-sentence").textContent = gapData.sentence;
        window.correctGapAnswer = gapData.correct.toLowerCase();
    }
}

function showLongAnswer(longText) {
    const longSection = document.getElementById("long-answer-section");
    if (longSection) {
        longSection.style.display = "block";
        document.getElementById("long-question").textContent = longText;
    }
}

if (dayData.fillGap) {
    showFillGap(dayData.fillGap);
} else {
    document.getElementById("fill-gap-section").style.display = "none";
}

if (dayData.longAnswer) {
    showLongAnswer(dayData.longAnswer);
} else {
    document.getElementById("long-answer-section").style.display = "none";
}
document.getElementById("theme-toggle").addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark-theme");
    localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
});
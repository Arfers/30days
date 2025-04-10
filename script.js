document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const day = params.get("day") || 1;
    const lang = params.get("lang") || "de";
    const page = window.location.pathname.includes("tasks") ? "tasks" : "theory";
    const backToCalendarDay = document.getElementById("back-to-calendar-day");
    if (backToCalendarDay) {
        backToCalendarDay.href = `calendar.html?lang=${lang}`;
    }
    const backToCalendar = document.getElementById("back-to-calendar");
    if (backToCalendar) {
        backToCalendar.href = `day.html?day=${day}&lang=${lang}`;
    }
    const completeBtn = document.getElementById("completeBtn");
    if (completeBtn) {
        completeBtn.addEventListener("click", markCompleted);
    }

    const taskLink = document.getElementById("task-link");
    if (taskLink) {
        taskLink.href = `tasks.html?day=${day}&lang=${lang}`;
    }

    const backLink = document.getElementById("back-link");
    if (backLink) {
        backLink.href = `calendar.html?lang=${lang}`;
    }
    
    const data =  {
    de: { //дойч
        1: {
          title: "День 1. Приветствие и базовая учебная лексика",
          vocabulary: ["Hallo — привет", "Guten Morgen — доброе утро", "Guten Tag — добрый день", "Guten Abend — добрый вечер", "Tschüss — пока", "Danke — спасибо", "Bitte — пожалуйста", "Das Buch — книга", "Die Lehrerin — преподавательница", "Der Lehrer — преподаватель"],
          audio: "audio/day1_de.mp3",
          example: ["„Das ist mein Buch.“ — Это моя книга", "„Der Lehrer schreibt an die Tafel.“ — Учитель пишет на доске"],   
          grammar: ["der — мужской род", "die — женский род", "das — средний род"],    
          tests: [
                { question: "Das Buch bedeutet (означает)..", answers: ["Тетрадь", "Книга", "Спасибо"], correct: 1 },
                { question: "Учитель (м.р.) это..", answers: ["der Lehrer", "die Lehrerin", "das Buch"], correct: 0 },
                { question: "Артикль среднего рода", answers: ["der", "die", "das"], correct: 2 },
          ]
        },
        2: {
            title: "День 2. Дело было в университете",
            vocabulary: ["Die Universität — университет", "Das Heft — тетрадь", "Der Stift — ручка", "Der Tisch — стол", "Der Student — студент", "Die Studentin — студентка", "Der Hörsaal — лекционный зал", "Der Kurs — курс", "Das Klassenzimmer — аудитория", "Die Vorlesung — лекция"],
            audio: "audio/day2_de.mp3",
            example: ["der Student — die Studenten"],   
            grammar: ["Множественное число существительных:", "Артикль die", "Обрати внимание на типичные окончания: -en, -n, -e и т.д."],    
            tests: [
                  { question: "Укажите множественное число: Der Kurs - ..", answers: ["Der Kursen", "Das Kurse", "Die Kurse"], correct: 2 },
                  { question: "Какого рода существительное Heft?", answers: ["der", "die", "das"], correct: 2 },
                  { question: "Подставьте подходящее слово: Der Stift liegt auf dem (лежит на)..", answers: ["Heft", "Tisch", "Kurs"], correct: 1 },
            ]
          },
          3: {
            title: "День 3. Предметы и действия в аудитории",
            vocabulary: [
              "Lesen — читать",
              "Schreiben — писать",
              "Hören — слушать",
              "Sprechen — говорить",
              "Lernen — учиться",
              "Das Wörterbuch — словарь",
              "Der Computer — компьютер",
              "Die Aufgabe — задание",
              "Die Tafel — доска",
              "Der Bleistift — карандаш"
            ],
            audio: "audio/day3_de.mp3",
            example: [
              "„Ich lese ein Buch.“ — Я читаю книгу",
              "„Die Aufgabe ist schwer.“ — Задание сложное"
            ],
            grammar: [
              "Инфинитив глаголов — начальная форма: lesen, schreiben, hören...",
              "Глагол стоит в конце предложения с модальными глаголами: Ich will lernen."
            ],
            tests: [
              { question: "Что делают с Bleistift?", answers: ["Hören", "Schreiben", "Lesen"], correct: 1 },
              { question: "Wörterbuch ist...", answers: ["der", "die", "das"], correct: 2 },
              { question: "Was bedeutet (что значит) 'Sprechen'?", answers: ["Говорить", "Слушать", "Писать"], correct: 0 }
            ]
          },          
        4: {
            title: "День 4. Люди в университете",
            vocabulary: [
              "Der Professor — профессор",
              "Die Dozentin — доцент",
              "Der Assistent — ассистент",
              "Die Sekretärin — секретарь",
              "Der Kommilitone — одногруппник",
              "Die Gruppe — группа",
              "Der Direktor — директор",
              "Die Bibliothekarin — библиотекарь",
              "Das Sekretariat — приёмная",
              "Die Verwaltung — администрация"
            ],
            audio: "audio/day4_de.mp3",
            example: [
              "„Der Assistent hilft dem Professor.“ — Ассистент помогает профессору",
              "„Die Gruppe lernt zusammen.“ — Группа учится вместе"
            ],
            grammar: [
              "Существительные — профессии и роли. Определённый артикль: der, die, das",
              "Повторение рода: der Professor, die Sekretärin, das Sekretariat"
            ],
            tests: [
              { question: "Wer arbeitet im Sekretariat?", answers: ["Die Dozentin", "Die Sekretärin", "Der Direktor"], correct: 1 },
              { question: "Das Wort 'Kommilitone' ist...", answers: ["feminin", "maskulin", "neutral"], correct: 1 },
              { question: "Wer arbeitet in der Bibliothek?", answers: ["Die Bibliothekarin", "Die Gruppe", "Der Kurs"], correct: 0 }
            ]
          },          
        5: {
            title: "День 5. Принадлежность и вопросы в университете",
            vocabulary: [
              "Der Rucksack — рюкзак",
              "Die Tasche — сумка",
              "Das Handy — телефон",
              "Die Frage — вопрос",
              "Die Antwort — ответ",
              "Der Schlüssel — ключ",
              "Der Freund — друг",
              "Die Freundin — подруга",
              "Das Blatt — лист бумаги",
              "Der Stuhl — стул"
            ],
            audio: "audio/day5_de.mp3",
            example: [
              "„Wem gehört der Rucksack?“ — Кому принадлежит рюкзак?",
              "„Das ist mein Handy.“ — Это мой телефон"
            ],
            grammar: [
              "Притяжательные местоимения: mein, dein, sein, ihr",
              "Вопросы с 'Wem?', 'Was?', 'Wer?' — основа диалогов в университете"
            ],
            tests: [
              { question: "Was bedeutet 'Die Antwort'?", answers: ["Ответ", "Вопрос", "Сумка"], correct: 0 },
              { question: "Welcher Artikel passt zu 'Blatt'?", answers: ["der", "die", "das"], correct: 2 },
              { question: "'Mein Freund' ist...", answers: ["мужской род", "женский род", "средний род"], correct: 0 },
              { question: "Wie fragt man: 'Чей это телефон?'", answers: ["Was ist das?", "Wem gehört das Handy?", "Wer ist das?"], correct: 1 },
              { question: "Wähle das richtige Wort: '___ Tasche ist neu.'", answers: ["Meine", "Meiner", "Meines"], correct: 0 }
            ]
          },          
        6: {
            title: "День 6. Расписание, дни недели и время",
            vocabulary: [
              "Der Montag — понедельник",
              "Der Dienstag — вторник",
              "Der Mittwoch — среда",
              "Der Donnerstag — четверг",
              "Der Freitag — пятница",
              "Das Wochenende — выходные",
              "Der Stundenplan — расписание",
              "Die Uhr — часы",
              "Die Stunde — час",
              "Die Pause — перемена"
            ],
            audio: "audio/day6_de.mp3",
            example: [
              "„Am Montag haben wir Deutsch.“ — В понедельник у нас немецкий",
              "„Die Pause dauert zehn Minuten.“ — Перемена длится десять минут"
            ],
            grammar: [
              "Предлог am + день недели: am Montag, am Freitag",
              "Существительные с временем: die Uhr, die Stunde, die Minute"
            ],
            tests: [
              { question: "Was bedeutet 'Der Stundenplan'?", answers: ["Урок", "Расписание", "Перемена"], correct: 1 },
              { question: "Wie sagt man 'в понедельник'?", answers: ["in Montag", "am Montag", "auf Montag"], correct: 1 },
              { question: "Welcher Artikel passt zu 'Pause'?", answers: ["der", "die", "das"], correct: 1 },
              { question: "Wie viele Tage hat das Wochenende?", answers: ["zwei", "drei", "eins"], correct: 0 },
              { question: "Welche Form ist richtig: '___ Uhr zeigt 8:00.'", answers: ["Der", "Die", "Das"], correct: 1 }
            ]
          },          
        7: {
            title: "День 7. Чтение расписания и мини-диалоги",
            vocabulary: [
              "Der Kursplan — план занятий",
              "Die Prüfung — экзамен",
              "Die Hausaufgabe — домашнее задание",
              "Das Fach — предмет",
              "Der Raum — аудитория",
              "Die Zahl — число",
              "Der Tag — день",
              "Der Unterricht — занятие",
              "Das Datum — дата",
              "Die Zeit — время"
            ],
            audio: "audio/day7_de.mp3",
            example: [
              "„Wann ist die Prüfung?“ — Когда экзамен?",
              "„Der Unterricht beginnt um acht Uhr.“ — Занятие начинается в восемь"
            ],
            grammar: [
              "Сложные существительные: Kurs + Plan = Kursplan. Артикль всегда такой же, как у слова, стоящего в конце",
              "Порядок слов в вопросах с 'Wann?', 'Was?', 'Wo?'"
            ],
            tests: [
              { question: "Was ist 'Hausaufgabe'?", answers: ["Экзамен", "Домашнее задание", "Аудитория"], correct: 1 },
              { question: "Was passt zu 'Der Unterricht ___ um 10 Uhr.'?", answers: ["beginnt", "beginnen", "beginntet"], correct: 0 },
              { question: "Wähle das richtige Wort: '___ Datum ist heute?'", answers: ["Wann", "Was", "Welches"], correct: 2 },
              { question: "Was bedeutet 'Das Fach'?", answers: ["Факультет", "Предмет", "Число"], correct: 1 },
              { question: "Wie fragt man: 'Во сколько экзамен?'", answers: ["Wo ist die Prüfung?", "Wann ist die Prüfung?", "Wie ist die Prüfung?"], correct: 1 }
            ]
          },        
        8: {
            title: "День 8. Числа, даты и расписание занятий",
            vocabulary: [
              "Eins — один",
              "Zwei — два",
              "Drei — три",
              "Vier — четыре",
              "Fünf — пять",
              "Der Kalender — календарь",
              "Der Termin — встреча",
              "Das Semester — семестр",
              "Der Stundenblock — пара",
              "Der Feiertag — выходной/праздник"
            ],
            audio: "audio/day8_de.mp3",
            example: [
              "„Das Semester beginnt am ersten Oktober.“ — Семестр начинается первого октября",
              "„Ich habe fünf Stunden heute.“ — У меня сегодня пять занятий"
            ],
            grammar: [
              "Кардинальные числительные: eins, zwei, drei...",
              "Порядковые числительные: der erste, der zweite, der dritte...",
              "Даты с предлогом am: am ersten Mai, am dritten Oktober"
            ],
            tests: [
              { question: "Was bedeutet 'Fünf'?", answers: ["3", "5", "7"], correct: 1 },
              { question: "Wie sagt man '1-е октября'?", answers: ["am eins Oktober", "am erste Oktober", "am ersten Oktober"], correct: 2 },
              { question: "Welcher Artikel passt zu 'Semester'?", answers: ["der", "die", "das"], correct: 2 },
              { question: "Was ist ein 'Feiertag'?", answers: ["Выходной/праздник", "Рабочий день", "Урок"], correct: 0 },
              { question: "Was passt: 'Ich habe ___ Stunden heute.'", answers: ["zwei", "zweiten", "zweite"], correct: 0 },
              { question: "Wie heißt '4' auf Deutsch?", answers: ["Fünf", "Vier", "Drei"], correct: 1 }
            ]
          },
        9: {
            title: "День 9. Простые действия в университете",
            vocabulary: [
              "Aufstehen — вставать",
              "Frühstücken — завтракать",
              "Gehen — идти",
              "Kommen — приходить",
              "Beginnen — начинать",
              "Enden — заканчивать",
              "Verstehen — понимать",
              "Wiederholen — повторять",
              "Erklären — объяснять",
              "Antworten — отвечать"
            ],
            audio: "audio/day9_de.mp3",
            example: [
              "„Die Vorlesung beginnt um neun Uhr.“ — Лекция начинается в девять",
              "„Ich wiederhole die Grammatik.“ — Я повторяю грамматику"
            ],
            grammar: [
              "Глаголы с отделяемыми приставками: aufstehen, anfangen",
              "Порядок слов в простом утвердительном предложении: Subjekt + Verb + Ergänzung"
            ],
            tests: [
              { question: "Was bedeutet 'Wiederholen'?", answers: ["Начинать", "Повторять", "Приходить"], correct: 1 },
              { question: "Was passt: 'Die Stunde ___ um 10 Uhr.'", answers: ["beginnt", "anfängt", "kommt"], correct: 0 },
              { question: "Welcher Satz ist korrekt?", answers: ["Ich aufstehe um 7 Uhr.", "Ich stehe um 7 Uhr auf.", "Ich auf um 7 Uhr stehe."], correct: 1 },
              { question: "Was macht man mit einer Frage?", answers: ["Antworten", "Frühstücken", "Verstehen"], correct: 0 },
              { question: "Wähle das passende Wort: 'Er ___ gut Deutsch.'", answers: ["versteht", "antwortet", "erklärt"], correct: 0 },
              { question: "Was bedeutet 'Erklären'?", answers: ["Слушать", "Объяснять", "Задавать"], correct: 1 }
            ]
          },
        10: {
            title: "День 10. Простая речь и понимание текста",
            vocabulary: [
              "Der Text — текст",
              "Die Übung — упражнение",
              "Das Beispiel — пример",
              "Der Fehler — ошибка",
              "Die Lösung — решение",
              "Das Gespräch — разговор",
              "Die Erklärung — объяснение",
              "Der Satz — предложение",
              "Die Frage — вопрос",
              "Die Antwort — ответ"
            ],
            audio: "audio/day10_de.mp3",
            example: [
              "„Ich verstehe den Text gut.“ — Я хорошо понимаю текст",
              "„Die Lehrerin erklärt die Übung.“ — Преподавательница объясняет упражнение"
            ],
            grammar: [
              "Винительный падеж (Akkusativ): Ich lese den Text.",
              "Порядок слов в простых фразах: Подлежащее + сказуемое + дополнение"
            ],
            tests: [
              { question: "Was bedeutet 'Der Fehler'?", answers: ["Пример", "Ошибка", "Вопрос"], correct: 1 },
              { question: "Was passt: 'Die Lehrerin ___ die Übung.'", answers: ["erklärt", "antwortet", "kommt"], correct: 0 },
              { question: "Welcher Satz ist korrekt?", answers: ["Ich lesen den Satz.", "Ich lese den Satz.", "Ich lesen Satz."], correct: 1 },
              { question: "Was ist ein Beispiel?", answers: ["Решение", "Пример", "Ответ"], correct: 1 },
              { question: "Welche Form ist richtig: 'Ich ___ die Antwort.'", answers: ["verstehen", "versteht", "verstehe"], correct: 2 },
              { question: "Was passt: '___ Satz ist schwierig.'", answers: ["Der", "Die", "Das"], correct: 0 }
            ],
            fillGap: [
              { sentence: "Ich ___ (понимаю) den Text gut.", answer: "verstehe" },
              { sentence: "Die ___ (учительница) erklärt die Aufgabe.", answer: "Lehrerin" }
            ]
          },
        11: {
          title: "День 11. Модальные глаголы и отрицание",
          vocabulary: [
            "Können — мочь",
            "Müssen — должен",
            "Dürfen — иметь разрешение",
            "Nicht — не",
            "Nie — никогда",
            "Immer — всегда",
            "Oft — часто",
            "Manchmal — иногда",
            "Selten — редко",
            "Die Pflicht — обязанность"
          ],
          audio: "audio/day11_de.mp3",
          example: [
            "„Ich kann gut Deutsch sprechen.“ — Я могу хорошо говорить по-немецки",
            "„Wir dürfen im Unterricht nicht essen.“ — Нам нельзя есть на занятии"
          ],
          grammar: [
            "Модальные глаголы: können, müssen, dürfen",
            "Порядок слов с модальными глаголами: Ich muss lernen.",
            "Отрицание с 'nicht' (ставится после сказуемого или перед тем, что отрицается)"
          ],
          tests: [
            { question: "Was bedeutet 'dürfen'?", answers: ["быть должным", "мочь", "иметь разрешение"], correct: 2 },
            { question: "Was passt: 'Ich ___ jetzt lernen.'", answers: ["muss", "kannst", "dürft"], correct: 0 },
            { question: "Welche Form ist richtig: 'Wir ___ nicht essen.'", answers: ["dürfen", "müssen", "könnt"], correct: 0 },
            { question: "Was bedeutet 'nie'?", answers: ["всегда", "никогда", "иногда"], correct: 1 },
            { question: "Was passt: 'Er ___ gut sprechen.'", answers: ["kann", "muss", "darfst"], correct: 0 },
            { question: "Was bedeutet 'Pflicht'?", answers: ["ошибка", "обязанность", "возможность"], correct: 1 }
          ],
          fillGap: [
            { sentence: "Ich ___ (не могу) heute nicht zur Uni gehen.", answer: "kann" },
            { sentence: "Wir ___ (должны) leise im Unterricht sein.", answer: "müssen" },
            { sentence: "Ich habe ___ (отриц.) Zeit.", answer: "keine" }
          ]
        },
        12: {
          title: "День 12. Сложные слова и понимание контекста",
          vocabulary: [
            "Die Hausaufgabenbetreuung — помощь с домашним заданием",
            "Das Studierendensekretariat — студенческий секретариат",
            "Die Prüfungsvorbereitung — подготовка к экзамену",
            "Die Lerngruppe — учебная группа",
            "Der Studienplan — учебный план",
            "Die Sprechstunde — приёмные часы",
            "Der Lernstoff — учебный материал",
            "Das Studienfach — учебная дисциплина",
            "Die Anmeldung — регистрация",
            "Der Ansprechpartner — контактное лицо"
          ],
          audio: "audio/day12_de.mp3",
          example: [
            "„Ich habe morgen eine Lerngruppe.“ — Завтра у меня учебная группа",
            "„Das Studierendensekretariat ist im ersten Stock.“ — Студенческий секретариат находится на втором этаже"
          ],
          grammar: [
            "Сложные существительные: одно длинное слово = два понятия",
            "Чтение и перевод составных слов: Studien + fach = Studienfach",
            "Определение рода по последнему слову (окончание сложного слова)"
          ],
          tests: [
            { question: "Was bedeutet 'Sprechstunde'?", answers: ["Час занятий", "Приёмные часы", "Экзамен"], correct: 1 },
            { question: "Was passt: 'Ich gehe zur ___ für meine Anmeldung.'", answers: ["Lerngruppe", "Hausaufgabenbetreuung", "Anmeldung"], correct: 2 },
            { question: "Was ist ein 'Studienplan'?", answers: ["Учебный план", "График дежурств", "Деканат"], correct: 0 },
            { question: "Welcher Artikel passt zu 'Prüfungsvorbereitung'?", answers: ["der", "die", "das"], correct: 1 },
            { question: "Was bedeutet 'Ansprechpartner'?", answers: ["Контактное лицо", "Преподаватель", "Завуч"], correct: 0 },
            { question: "Wie sagt man 'учебная группа' auf Deutsch?", answers: ["Lernstoff", "Lerngruppe", "Studiengruppe"], correct: 1 }
          ],
          fillGap: [
            { sentence: "Ich brauche Hilfe bei der ___ (подготовка к экзамену).", answer: "Prüfungsvorbereitung" },
            { sentence: "Unsere ___ (учебная группа) trifft sich um 17 Uhr.", answer: "Lerngruppe" },
            { sentence: "Der ___ (собеседник) ist im Erdgeschoss.", answer: "Ansprechpartner" }
          ]
        },        
        13: {
          title: "День 13. Библиотека, техника и медиатека",
          vocabulary: [
            "Die Bibliothek — библиотека",
            "Der Computerraum — компьютерный класс",
            "Das Buch — книга",
            "Die Medien — медиа",
            "Die Datei — файл",
            "Der Drucker — принтер",
            "Die Recherche — поиск информации",
            "Das Internet — интернет",
            "Der Zugang — доступ",
            "Die Anmeldung — регистрация"
          ],
          audio: "audio/day13_de.mp3",
          example: [
            "„Ich mache eine Recherche in der Bibliothek.“ — Я ищу информацию в библиотеке",
            "„Wir drucken die Datei mit dem Drucker.“ — Мы печатаем файл на принтере"
          ],
          grammar: [
            "Предлоги места с Dativ: in der Bibliothek, im Computerraum",
            "Артикли с техническими словами (das Internet, der Drucker)"
          ],
          tests: [
            { question: "Was bedeutet 'Recherche'?", answers: ["поиск информации", "регистрация", "печать"], correct: 0 },
            { question: "Was passt: 'Ich arbeite ___ Computerraum.'", answers: ["in dem", "im", "an dem"], correct: 1 },
            { question: "Welche Artikel-Kombination ist richtig?", answers: ["der Bibliothek", "die Bibliothek", "in der Bibliothek"], correct: 2 },
            { question: "Was bedeutet 'Datei'?", answers: ["устройство", "файл", "книга"], correct: 1 },
            { question: "Was passt: 'Wir haben keinen ___.'", answers: ["Internet", "Internets", "Internetzugang"], correct: 2 },
            { question: "Wie heißt 'доступ' auf Deutsch?", answers: ["die Anmeldung", "der Zugang", "das Medien"], correct: 1 },
            { question: "Was ist ein Drucker?", answers: ["Программа", "Принтер", "Монитор"], correct: 1 }
          ],
          fillGap: [
            { sentence: "Ich mache eine ___ (поиск информации) im Internet.", answer: "Recherche" },
            { sentence: "Die ___ (регистрация) ist kostenlos für Studenten.", answer: "Anmeldung" },
            { sentence: "Wir speichern die ___ (файл) auf dem USB-Stick.", answer: "Datei" },
            { sentence: "Der Drucker steht im ___ (компьютерном классе).", answer: "Computerraum" }
          ]
        },        
        14: {
          title: "День 14. Личные мнения и вводные фразы",
          vocabulary: [
            "Ich denke — я думаю",
            "Ich glaube — я полагаю",
            "Ich finde — я считаю",
            "Das ist wichtig — это важно",
            "Das ist interessant — это интересно",
            "Die Meinung — мнение",
            "Die Erfahrung — опыт",
            "Ich bin sicher — я уверен",
            "Das gefällt mir — мне это нравится",
            "Das ist schwer — это сложно"
          ],
          audio: "audio/day14_de.mp3",
          example: [
            "„Ich finde Deutsch interessant.“ — Я считаю, что немецкий интересный",
            "„Das ist schwer, aber ich lerne.“ — Это сложно, но я учусь"
          ],
          grammar: [
            "Фразы-маркеры личного мнения: Ich denke, Ich finde, Ich glaube",
            "Конструкция с dass: Ich denke, dass das wichtig ist (вводится, но не отрабатывается активно)"
          ],
          tests: [
            { question: "Was bedeutet 'Ich finde'?", answers: ["я нахожу", "я думаю", "я считаю"], correct: 2 },
            { question: "Was passt: '___ ist nicht einfach.'", answers: ["Das", "Es", "Der"], correct: 0 },
            { question: "Was heißt 'Das gefällt mir'?", answers: ["Это нравится мне", "Это моё", "Это не важно"], correct: 0 },
            { question: "Was ist 'Erfahrung'?", answers: ["Уверенность", "Опыт", "Интерес"], correct: 1 },
            { question: "Was passt: 'Ich ___ sicher.'", answers: ["bin", "bist", "sind"], correct: 0 },
            { question: "Wie sagt man 'мнение' auf Deutsch?", answers: ["das Wissen", "die Meinung", "der Gedanke"], correct: 1 }
          ],
          fillGap: [
            { sentence: "Ich ___ (мне кажется) Deutsch interessant.", answer: "finde" },
            { sentence: "Das ___ (нравится) mir.", answer: "gefällt" },
            { sentence: "Ich ___ (думаю), das ist wichtig.", answer: "denke" },
            { sentence: "Das ist ___ (сложно), aber ich verstehe es.", answer: "schwer" }
          ]
        },        
        15: {
          title: "День 15. Аудирование: студенты в университете",
          vocabulary: [
            "Der Student — студент",
            "Das Studium — учёба",
            "Der Stundenplan — расписание",
            "Die Bibliothek — библиотека",
            "Die Pause — перерыв",
            "Der Kaffee — кофе",
            "Das Gespräch — разговор",
            "Der Lehrer — преподаватель",
            "Die Aufgabe — задание",
            "Die Gruppe — группа"
          ],
          audio: "audio/day15_de.mp3",
          example: [
            "„Der Student hat viele Aufgaben.“ — У студента много заданий",
            "„Wir lernen zusammen in der Bibliothek.“ — Мы учимся вместе в библиотеке"
          ],
          grammar: [
            "Настоящее время, 3-е лицо ед. и мн. числа",
            "Слово порядок: Подлежащее — Сказуемое — Остальное",
            "Объекты с определённым артиклем в Akkusativ"
          ],
          listening: {
            audio: "audio/day15_de_audiotest.mp3",
            tests: [
              { question: "Was macht Tom um zehn Uhr?", options: ["Er schläft", "Er macht eine Pause", "Er geht nach Hause"], answer: "Er macht eine Pause" },
              { question: "Wo trinken sie Kaffee?", options: ["Im Hörsaal", "In der Bibliothek", "In der Cafeteria"], answer: "In der Cafeteria" },
              { question: "Worüber sprechen sie?", options: ["Über die Aufgaben", "Über das Wochenende", "Über die Bücher"], answer: "Über die Aufgaben" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'Aufgabe'?", answers: ["Проблема", "Задание", "Курс"], correct: 1 },
            { question: "Was passt: 'Der Lehrer ___ die Aufgabe.'", answers: ["erklären", "erklärt", "erklärst"], correct: 1 },
            { question: "Was ist ein 'Stundenplan'?", answers: ["Блокнот", "Расписание", "Документ"], correct: 1 },
            { question: "Was passt: 'Die Studenten ___ in der Bibliothek.'", answers: ["lernt", "lernst", "lernen"], correct: 2 },
            { question: "Was heißt 'Pause'?", answers: ["Учёба", "Перерыв", "Письмо"], correct: 1 },
            { question: "Welche Artikel-Kombination ist richtig: ___ Bibliothek", answers: ["Der", "Das", "Die"], correct: 2 }
          ],
          fillGap: [
            { sentence: "Tom ist ___ (ученик университета).", answer: "Student" },
            { sentence: "Er macht eine ___ (перерыв) um zehn Uhr.", answer: "Pause" },
            { sentence: "Sie trinken ___ (кофе) in der Cafeteria.", answer: "Kaffee" },
            { sentence: "Sie sprechen über die ___ (заданиях).", answer: "Aufgaben" }
          ]
        },        
        16: {
          title: "День 16. Аудирование: учебный день и подготовка",
          vocabulary: [
            "Die Vorlesung — лекция",
            "Das Referat — доклад",
            "Die Vorbereitung — подготовка",
            "Die Gruppe — группа",
            "Das Thema — тема",
            "Der Plan — план",
            "Die Präsentation — презентация",
            "Der Laptop — ноутбук",
            "Der Bildschirm — экран",
            "Das Projekt — проект"
          ],
          audio: "audio/day16_de.mp3",
          example: [
            "„Wir bereiten ein Referat vor.“ — Мы готовим доклад",
            "„Die Präsentation ist morgen.“ — Презентация завтра"
          ],
          grammar: [
            "Глаголы с приставками: vorbereiten, vorstellen",
            "Слова женского рода на -ung, -ion (die Vorbereitung, die Präsentation)"
          ],
          listening: {
            audio: "audio/day16_de_audiotest.mp3",
            tests: [
            { question: "Was macht Anna nach der Uni?", options: ["Sie geht nach Hause", "Sie trifft ihre Gruppe", "Sie macht Sport"], answer: "Sie trifft ihre Gruppe" },
            { question: "Was macht ihr Freund?", options: ["Er bereitet die Präsentation vor", "Er schreibt das Referat", "Er liest ein Buch"], answer: "Er schreibt das Referat" },
            { question: "Wann ist die Präsentation?", options: ["Heute", "Morgen", "Am Freitag"], answer: "Morgen" }
          ]},
          tests: [
            { question: "Was bedeutet 'Referat'?", answers: ["Письмо", "Доклад", "Задание"], correct: 1 },
            { question: "Was passt: 'Wir ___ das Thema morgen vor.'", answers: ["stellen", "stellen vor", "vorstellen"], correct: 1 },
            { question: "Was ist eine 'Vorlesung'?", answers: ["Лекция", "Группа", "Домашка"], correct: 0 },
            { question: "Was passt: 'Die ___ ist sehr lang.'", answers: ["Laptop", "Thema", "Präsentation"], correct: 2 },
            { question: "Was bedeutet 'vorbereiten'?", answers: ["отдыхать", "готовить", "записывать"], correct: 1 },
            { question: "Welcher Artikel passt zu 'Projekt'?", answers: ["der", "das", "die"], correct: 1 }
          ],
          fillGap: [
            { sentence: "Anna hat viele ___ (лекций).", answer: "Vorlesungen" },
            { sentence: "Sie bereitet eine ___ (презентацию) vor.", answer: "Präsentation" },
            { sentence: "Das ___ (тема) ist morgen im Unterricht.", answer: "Thema" },
            { sentence: "Ihr Freund schreibt ein ___ (реферат).", answer: "Referat" }
          ]
        },        
        17: {
          title: "День 17. Аудирование: экзамен и оценки",
          vocabulary: [
            "Die Prüfung — экзамен",
            "Die Note — оценка",
            "Die Vorbereitung — подготовка",
            "Das Ergebnis — результат",
            "Die Angst — страх",
            "Die Konzentration — концентрация",
            "Die Leistung — успех, результат",
            "Bestehen — сдать (экзамен)",
            "Durchfallen — провалить",
            "Schaffen — справиться"
          ],
          audio: "audio/day17_de.mp3",
          example: [
            "„Ich habe die Prüfung bestanden.“ — Я сдал экзамен",
            "„Sie hatte Angst vor dem Ergebnis.“ — Она боялась результата"
          ],
          grammar: [
            "Прошедшее время Perfekt с haben/sein: Ich habe gelernt. Ich bin durchgefallen.",
            "Глаголы с отрицательной окраской: durchfallen, Angst haben"
          ],
          listening: {
            audio: "audio/day17_de_audiotest.mp3",
            tests: [
              { question: "Was macht Max am Abend vor der Prüfung?", options: ["Er schläft", "Er lernt viel", "Er feiert"], answer: "Er lernt viel" },
              { question: "Wie fühlt sich Max?", options: ["glücklich", "ruhig", "nervös"], answer: "nervös" },
              { question: "Was ist das Ergebnis?", options: ["Er besteht die Prüfung", "Er fällt durch", "Er schreibt nichts"], answer: "Er besteht die Prüfung" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'bestehen'?", answers: ["сдать", "провалить", "учить"], correct: 0 },
            { question: "Was passt: 'Ich habe die Prüfung ___.'", answers: ["durchgefallen", "geschafft", "besteht"], correct: 1 },
            { question: "Was ist eine 'Note'?", answers: ["заметка", "оценка", "предмет"], correct: 1 },
            { question: "Was bedeutet 'Angst'?", answers: ["радость", "уверенность", "страх"], correct: 2 },
            { question: "Was passt: 'Sie ___ durch die Prüfung.'", answers: ["fallen", "fällt", "fällt durch"], correct: 2 },
            { question: "Was heißt 'Vorbereitung' auf Russisch?", answers: ["предупреждение", "подготовка", "результат"], correct: 1 }
          ],
          fillGap: [
            { sentence: "Ich habe die Prüfung ___ (сдал).", answer: "bestanden" },
            { sentence: "Max war sehr ___ (нервным).", answer: "nervös" },
            { sentence: "Das ___ war gut (результат).", answer: "Ergebnis" },
            { sentence: "Sie hat große ___ (страх) vor Mathe.", answer: "Angst" }
          ]
        },
        18: {
          title: "День 18. Аудирование: разговор с преподавателем",
          vocabulary: [
            "Der Termin — встреча, приём",
            "Die Rückmeldung — обратная связь",
            "Die Besprechung — обсуждение",
            "Die Frage — вопрос",
            "Die Erklärung — объяснение",
            "Das Verständnis — понимание",
            "Der Zweifel — сомнение",
            "Die Verbesserung — улучшение",
            "Der Fehler — ошибка",
            "Die Lösung — решение"
          ],
          audio: "audio/day18_de.mp3",
          example: [
            "„Ich habe einen Termin beim Lehrer.“ — У меня встреча с преподавателем",
            "„Wir sprechen über meine Fehler in der Prüfung.“ — Мы обсуждаем мои ошибки на экзамене"
          ],
          grammar: [
            "Глаголы с управлением: sprechen über, fragen nach, erklären etwas",
            "Существительные с приставкой Rück- (Rückmeldung = обратная связь)"
          ],
          listening: {
            audio: "audio/day18_de_audiotest.mp3",
            tests: [
              { question: "Warum spricht Lisa mit dem Lehrer?", options: ["Sie hat eine gute Note", "Sie versteht etwas nicht", "Sie will ein Buch ausleihen"], answer: "Sie versteht etwas nicht" },
              { question: "Was erklärt der Lehrer?", options: ["Die Hausaufgabe", "Die Lösung der Aufgabe", "Das Thema der nächsten Stunde"], answer: "Die Lösung der Aufgabe" },
              { question: "Wie fühlt sich Lisa nach dem Gespräch?", options: ["unsicher", "zufrieden", "verwirrt"], answer: "zufrieden" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'Rückmeldung'?", answers: ["задача", "ответ", "обратная связь"], correct: 2 },
            { question: "Was passt: 'Ich habe viele ___ zur Aufgabe.'", answers: ["Zweifel", "Fragen", "Besprechungen"], correct: 0 },
            { question: "Was ist eine 'Lösung'?", answers: ["ошибка", "решение", "пример"], correct: 1 },
            { question: "Was passt: 'Der Lehrer ___ die Aufgabe.'", answers: ["antwortet", "erklärt", "spricht"], correct: 1 },
            { question: "Was bedeutet 'Verbesserung'?", answers: ["испытание", "улучшение", "обсуждение"], correct: 1 },
            { question: "Was passt: 'Wir sprechen ___ das Ergebnis.'", answers: ["mit", "über", "nach"], correct: 1 }
          ],
          fillGap: [
            { sentence: "Ich habe einen ___ (запись) beim Lehrer.", answer: "Termin" },
            { sentence: "Wir sprechen über die ___ (ошибки).", answer: "Fehler" },
            { sentence: "Der Lehrer gibt mir eine ___ (обратная связь).", answer: "Rückmeldung" },
            { sentence: "Jetzt habe ich kein ___ (сомнений).", answer: "Zweifel" }
          ]
        },     
        19: {
          title: "День 19. Аудирование: групповая работа и проект",
          vocabulary: [
            "Die Gruppenarbeit — групповая работа",
            "Der Beitrag — вклад",
            "Die Verantwortung — ответственность",
            "Die Diskussion — обсуждение",
            "Das Ziel — цель",
            "Die Idee — идея",
            "Die Meinung — мнение",
            "Die Präsentation — презентация",
            "Der Zeitplan — график",
            "Die Zusammenarbeit — сотрудничество"
          ],
          audio: "audio/day19_de.mp3",
          example: [
            "„Wir machen ein Projekt in Gruppenarbeit.“ — Мы делаем проект в групповой работе",
            "„Jeder hat eine Verantwortung.“ — У каждого есть ответственность"
          ],
          grammar: [
            "Модальные глаголы в сочетании с обязанностями: müssen, sollen",
            "Сложные существительные: Gruppen + arbeit = Gruppenarbeit, Zeit + plan = Zeitplan. Артикль от последнего существительного"
          ],
          listening: {
            audio: "audio/day19_de_audiotest.mp3",
            tests: [
              { question: "Was machen die Schüler?", options: ["Sie schreiben eine Prüfung", "Sie arbeiten an einem Projekt", "Sie haben Pause"], answer: "Sie arbeiten an einem Projekt" },
              { question: "Was bringt Lara in die Gruppe?", options: ["Sie bringt Ideen", "Sie spricht nicht", "Sie macht alles allein"], answer: "Sie bringt Ideen" },
              { question: "Was sagen sie über die Zusammenarbeit?", options: ["Sie ist schwierig", "Sie funktioniert gut", "Sie ist langsam"], answer: "Sie funktioniert gut" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'Verantwortung'?", answers: ["ответственность", "идея", "отчёт"], correct: 0 },
            { question: "Was passt: 'Wir ___ zusammen an dem Projekt.'", answers: ["arbeitet", "arbeiten", "arbeite"], correct: 1 },
            { question: "Was bedeutet 'Zeitplan'?", answers: ["цель", "график", "задание"], correct: 1 },
            { question: "Was ist eine 'Diskussion'?", answers: ["отчёт", "встреча", "обсуждение"], correct: 2 },
            { question: "Was passt: 'Jeder ___ eine Meinung.'", answers: ["haben", "hat", "hast"], correct: 1 },
            { question: "Was bedeutet 'Zusammenarbeit'?", answers: ["работа по выходным", "групповая работа", "сотрудничество"], correct: 2 }
          ],
          fillGap: [
            { sentence: "Wir machen das Projekt in ___ (групповой работе).", answer: "Gruppenarbeit" },
            { sentence: "Lara hat viele gute ___ (идей).", answer: "Ideen" },
            { sentence: "Unser ___ ist sehr klar (цель).", answer: "Ziel" },
            { sentence: "Die ___ im Team ist wichtig (совместная работа).", answer: "Zusammenarbeit" }
          ]
        },         
        20: {
          title: "День 20. Построение простых предложений о себе и учёбе",
          vocabulary: [
            "Ich heiße... — Меня зовут...",
            "Ich bin Student — Я студент",
            "Ich studiere... — Я изучаю...",
            "Die Universität — университет",
            "Das Fach — предмет",
            "Die Sprache — язык",
            "Der Kurs — курс",
            "Der Lehrer — преподаватель",
            "Der Hörsaal — лекционная аудитория",
            "Der Stundenplan — расписание"
          ],
          audio: "audio/day20_de.mp3",
          example: [
            "„Ich heiße Anna und ich bin Studentin.“ — Меня зовут Анна, я студентка",
            "„Ich studiere Deutsch an der Universität.“ — Я изучаю немецкий в университете"
          ],
          grammar: [
            "Структура простого повествовательного предложения: Ich + глагол + дополнение",
            "Формы глаголов: heiße, bin, studiere"
          ],
          listening: {
            audio: "audio/day20_de_audiotest.mp3",
            tests: [
              { question: "Wie heißt der Student?", options: ["Tom", "Felix", "Paul"], answer: "Felix" },
              { question: "Was studiert er?", options: ["Biologie", "Deutsch", "Mathematik"], answer: "Deutsch" },
              { question: "Wann beginnt sein Kurs?", options: ["um 8 Uhr", "um 10 Uhr", "um 9 Uhr"], answer: "um 9 Uhr" }
            ]
          },
          tests: [
            { question: "Was passt: 'Ich ___ Felix.'", answers: ["heißen", "heißt", "heiße"], correct: 2 },
            { question: "Was ist ein 'Hörsaal'?", answers: ["аудитория", "семестр", "кафедра"], correct: 0 },
            { question: "Was bedeutet 'Sprache'?", answers: ["навык", "язык", "тема"], correct: 1 },
            { question: "Was passt: 'Ich ___ an der Universität.'", answers: ["studiere", "studierst", "studieren"], correct: 0 },
            { question: "Was heißt 'Fach' auf Russisch?", answers: ["расписание", "предмет", "группа"], correct: 1 },
            { question: "Was passt: 'Der Kurs ___ um 10 Uhr.'", answers: ["beginnt", "beginnst", "beginnen"], correct: 0 }
          ],
          fillGap: [
            { sentence: "Ich ___ (я -) .. Student.", answer: "bin" },
            { sentence: "Ich studiere ___ (немецкий) an der Universität.", answer: "Deutsch" },
            { sentence: "Mein ___ (учебный план) ist sehr voll.", answer: "Stundenplan" },
            { sentence: "Ich habe einen Kurs im ___ (лекционная аудитория).", answer: "Hörsaal" }
          ],
          longAnswer: "Составь предложение о том, какой предмет ты учишь в университете:"
        },        
        21: {
          title: "День 21. Отрицание и описание университета",
          vocabulary: [
            "nicht — не",
            "kein — никакой",
            "interessant — интересный",
            "langweilig — скучный",
            "groß — большой",
            "modern — современный",
            "der Campus — кампус",
            "die Mensa — столовая",
            "das Gebäude — здание",
            "die Bibliothek — библиотека"
          ],
          audio: "audio/day21_de.mp3",
          example: [
            "„Die Bibliothek ist modern, aber nicht groß.“",
            "„Ich habe keinen Unterricht heute.“"
          ],
          grammar: [
            "Отрицание с nicht и kein",
            "Слово порядок: nicht ставится в конце, kein перед существительным"
          ],
          listening: {
            audio: "audio/day21_de_audiotest.mp3",
            tests: [
              { question: "Was ist groß und modern?", options: ["die Mensa", "der Campus", "die Bibliothek"], answer: "der Campus" },
              { question: "Was findet Max langweilig?", options: ["die Vorlesung", "das Gebäude", "die Pause"], answer: "die Vorlesung" },
              { question: "Was hat er heute nicht?", options: ["Unterricht", "Pause", "Kaffee"], answer: "Unterricht" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'langweilig'?", answers: ["весёлый", "скучный", "тяжёлый"], correct: 1 },
            { question: "Was passt: 'Ich habe ___ Kurs heute.'", answers: ["kein", "nicht", "keine"], correct: 0 },
            { question: "Was passt: 'Die Mensa ist ___ modern.'", answers: ["kein", "nicht", "nicht der"], correct: 1 },
            { question: "Was bedeutet 'Gebäude'?", answers: ["здание", "кафе", "комната"], correct: 0 },
            { question: "Was passt: 'Der Campus ist ___ und groß.'", answers: ["interessant", "langweilig", "klein"], correct: 0 },
            { question: "Was passt: 'Ich finde Deutsch ___ langweilig.'", answers: ["nicht", "kein", "nicht ist"], correct: 0 }
          ],
          fillGap: [
            { sentence: "Ich habe heute ___ (нет) Unterricht.", answer: "keinen" },
            { sentence: "Die Bibliothek ist modern, aber ___ (не) groß.", answer: "nicht" },
            { sentence: "Der ___ (кампус) ist sehr groß.", answer: "Campus" },
            { sentence: "Ich gehe in die ___ (столовая) zum Essen.", answer: "Mensa" }
          ],
          longAnswer: "Кратко расскажи о своем университете (до 3-х предложений)"
        },       
        22: {
          title: "День 22. Вопросы и ответы",
          vocabulary: [
            "wer — кто",
            "was — что",
            "wo — где",
            "wann — когда",
            "warum — почему",
            "wie — как",
            "die Antwort — ответ",
            "die Frage — вопрос",
            "die Information — информация",
            "die Hilfe — помощь"
          ],
          audio: "audio/day22_de.mp3",
          example: [
            "„Wer ist der Lehrer?“ — Кто преподаватель?",
            "„Warum lernst du Deutsch?“ — Почему ты учишь немецкий?"
          ],
          grammar: [
            "Вопросительные слова и порядок слов",
            "Глагол на втором месте: 'Warum lernst du…?'"
          ],
          listening: {
            audio: "audio/day22_de_audiotest.mp3",
            tests: [
              { question: "Was fragt Anna?", options: ["Was", "Wie", "Warum"], answer: "Warum" },
              { question: "Worüber spricht der Lehrer?", options: ["über die Hilfe", "über das Buch", "über die Prüfung"], answer: "über die Hilfe" },
              { question: "Wann hat Anna Unterricht?", options: ["um 8 Uhr", "um 10 Uhr", "um 12 Uhr"], answer: "um 10 Uhr" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'Antwort'?", answers: ["вопрос", "ответ", "знание"], correct: 1 },
            { question: "Was passt: '___ ist dein Lehrer?'", answers: ["Wo", "Wer", "Wie"], correct: 1 },
            { question: "Was bedeutet 'Hilfe'?", answers: ["ответ", "внимание", "помощь"], correct: 2 },
            { question: "Was passt: '___ lernst du Deutsch? – Weil es wichtig ist.'", answers: ["Wer", "Was", "Warum"], correct: 2 },
            { question: "Was passt: 'Ich habe eine ___ zur Aufgabe.'", answers: ["Frage", "Antwort", "Information"], correct: 0 },
            { question: "Was bedeutet 'Wo'?", answers: ["почему", "где", "кто"], correct: 1 }
          ],
          fillGap: [
            { sentence: "___ ist der Kurs? – Um zehn Uhr.", answer: "Wann" },
            { sentence: "Ich habe eine ___ zur Übung.", answer: "Frage" },
            { sentence: "___ lernst du Deutsch?", answer: "Warum" },
            { sentence: "Ich brauche deine ___.", answer: "Hilfe" }
          ],
          longAnswer: "Как бы ты спросил своего друга о том, кто ваш учитель?"
        },        
        23: {
          title: "День 23. Причины, цели и союз 'weil'",
          vocabulary: [
            "weil — потому что",
            "deshalb — поэтому",
            "wichtig — важно",
            "nützlich — полезно",
            "schwierig — сложно",
            "interessieren — интересовать",
            "die Sprache — язык",
            "das Ziel — цель",
            "der Grund — причина",
            "die Motivation — мотивация"
          ],
          audio: "audio/day23_de.mp3",
          example: [
            "„Ich lerne Deutsch, weil es nützlich ist.“",
            "„Die Sprache ist schwierig, aber interessant.“"
          ],
          grammar: [
            "Придаточные с weil: глагол в конец",
            "Deshalb как вводное слово: Deshalb lerne ich…"
          ],
          listening: {
            audio: "audio/day23_de_audiotest.mp3",
            tests: [
              { question: "Warum lernt Sarah Deutsch?", options: ["weil sie will reisen", "weil es schwierig ist", "weil es wichtig ist"], answer: "weil es wichtig ist" },
              { question: "Was ist das Ziel?", options: ["ein Job", "eine Reise", "eine Prüfung"], answer: "ein Job" },
              { question: "Wie findet Sarah Deutsch?", options: ["langweilig", "interessant", "unnötig"], answer: "interessant" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'Ziel'?", answers: ["причина", "цель", "преподаватель"], correct: 1 },
            { question: "Was passt: 'Ich lerne, ___ ich motiviert bin.'", answers: ["weil", "aber", "wenn"], correct: 0 },
            { question: "Was bedeutet 'nützlich'?", answers: ["трудный", "полезный", "нудный"], correct: 1 },
            { question: "Was passt: 'Die Sprache ist ___, aber schön.'", answers: ["schwierig", "langsam", "falsch"], correct: 0 },
            { question: "Was bedeutet 'Grund'?", answers: ["результат", "причина", "ошибка"], correct: 1 },
            { question: "Was passt: '___ bin ich motiviert.'", answers: ["Deshalb", "Weil", "Dann"], correct: 0 }
          ],
          fillGap: [
            { sentence: "Ich lerne Deutsch, ___ es nützlich ist.", answer: "weil" },
            { sentence: "___ lerne ich jeden Tag.", answer: "Deshalb" },
            { sentence: "Die ___ ist: Ich brauche es für den Beruf.", answer: "Motivation" },
            { sentence: "Mein ___ ist: ein Studium in Deutschland.", answer: "Ziel" }
          ],
          longAnswer: "Закончи предложение: ich bin müde (уставший),..(почему?)"
        },        
        24: {
          title: "День 24. Ежедневные учебные действия и привычки",
          vocabulary: [
            "jeden Tag — каждый день",
            "morgens — по утрам",
            "nachmittags — днём",
            "abends — вечером",
            "lernen — учить",
            "wiederholen — повторять",
            "verstehen — понимать",
            "sich konzentrieren — концентрироваться",
            "regelmäßig — регулярно",
            "selbstständig — самостоятельно"
          ],
          audio: "audio/day24_de.mp3",
          example: [
            "„Ich lerne jeden Tag.“",
            "„Abends wiederhole ich die Grammatik.“"
          ],
          grammar: [
            "Наречия времени: morgens, abends, jeden Tag",
            "Место наречий в предложении: Anfang или Ende"
          ],
          listening: {
            audio: "audio/day24_de_audiotest.mp3",
            tests: [
              { question: "Wann lernt Julia am liebsten?", options: ["morgens", "nachmittags", "abends"], answer: "abends" },
              { question: "Was wiederholt sie?", options: ["Vokabeln", "Grammatik", "Texte"], answer: "Grammatik" },
              { question: "Wie lernt sie?", options: ["selbstständig", "in der Gruppe", "gar nicht"], answer: "selbstständig" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'regelmäßig'?", answers: ["иногда", "регулярно", "редко"], correct: 1 },
            { question: "Was passt: 'Ich lerne ___ jeden Abend.'", answers: ["regelmäßig", "langsam", "schwierig"], correct: 0 },
            { question: "Was bedeutet 'wiederholen'?", answers: ["повторять", "сдавать", "изучать"], correct: 0 },
            { question: "Was passt: '___ lerne ich am besten.'", answers: ["Morgens", "Sonntags", "Montags"], correct: 0 },
            { question: "Was bedeutet 'selbstständig'?", answers: ["вместе", "самостоятельно", "с преподавателем"], correct: 1 },
            { question: "Was passt: 'Ich ___ mich auf die Aufgabe.'", answers: ["konzentriere", "konzentriert", "konzentrierst"], correct: 0 }
          ],
          fill: [
            { sentence: "Ich lerne ___ jeden Tag.", answer: "regelmäßig" },
            { sentence: "___ wiederhole ich Grammatik.", answer: "Abends" },
            { sentence: "Ich arbeite gern ___.", answer: "selbstständig" },
            { sentence: "Ich ___ mich gut im Unterricht.", answer: "konzentriere" }
          ],
          longAnswer: "Расскажи, на чем ты регулярно концентрируешься по вечерам?"
        },        
        25: {
          title: "День 25. Описание себя и своей учёбы",
          vocabulary: [
            "sich vorstellen — представляться",
            "studieren — изучать",
            "interessieren sich für — интересоваться чем-либо",
            "die Universität — университет",
            "der Studiengang — учебная программа",
            "das Studium — учёба",
            "die Zukunft — будущее",
            "der Beruf — профессия",
            "motiviert — мотивированный",
            "fleißig — старательный"
          ],
          audio: "audio/day25_de.mp3",
          example: [
            "„Ich heiße Julia und studiere Medizin.“",
            "„Ich interessiere mich für Wissenschaft.“"
          ],
          grammar: [
            "Reflexive Verben: sich vorstellen, sich interessieren für",
            "Формулировка целей: Ich möchte…, Mein Ziel ist…"
          ],
          listening: {
            audio: "audio/day25_de_audiotest.mp3",
            tests: [
              { question: "Was studiert Tim?", options: ["Biologie", "Medizin", "Sprachen"], answer: "Biologie" },
              { question: "Wie beschreibt er sich?", options: ["faul", "fleißig", "ängstlich"], answer: "fleißig" },
              { question: "Was ist sein Ziel?", options: ["eine Reise", "ein Beruf", "eine Note"], answer: "ein Beruf" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'sich vorstellen'?", answers: ["представляться", "планировать", "переезжать"], correct: 0 },
            { question: "Was passt: 'Ich interessiere mich ___ Technik.'", answers: ["für", "an", "mit"], correct: 0 },
            { question: "Was bedeutet 'fleißig'?", answers: ["уставший", "старательный", "скучный"], correct: 1 },
            { question: "Was ist ein 'Studiengang'?", answers: ["факультет", "учебная программа", "аудитория"], correct: 1 },
            { question: "Was passt: 'Mein ___ ist Lehrer.'", answers: ["Beruf", "Bericht", "Bereich"], correct: 0 },
            { question: "Was bedeutet 'motiviert'?", answers: ["замотивированный", "уставший", "отвлечённый"], correct: 0 }
          ],
          fillGap: [
            { sentence: "Ich interessiere mich für das ___.", answer: "Studium" },
            { sentence: "Mein ___ ist: Ärztin werden.", answer: "Ziel" },
            { sentence: "Ich bin sehr ___ und lerne täglich.", answer: "fleißig" },
            { sentence: "Ich ___ mich kurz: Ich heiße Tim.", answer: "stelle" }
          ],
          longAnswer: "Кратко расскажи о себе, как об ученике: имя, что ты изучаешь, и почему (4-6 предложений)"
        },        
        26: {
          title: "День 26. Распорядок учебного дня",
          vocabulary: [
            "aufstehen — вставать",
            "frühstücken — завтракать",
            "zur Uni gehen — идти в университет",
            "die Vorlesung — лекция",
            "die Pause — перерыв",
            "Hausaufgaben machen — делать домашнее задание",
            "lernen — учить",
            "entspannen — отдыхать",
            "sich vorbereiten — готовиться",
            "nach Hause kommen — приходить домой"
          ],
          audio: "audio/day26_de.mp3",
          example: [
            "„Ich stehe um 7 Uhr auf und frühstücke.“",
            "„Nach dem Kurs mache ich Hausaufgaben.“"
          ],
          grammar: [
            "Распорядок дня: Präsens, правильный порядок слов",
            "Сложные глаголы с отделяемыми приставками: aufstehen, vorbereiten"
          ],
          listening: {
            audio: "audio/day26_de_audiotest.mp3",
            tests: [
              { question: "Wann steht Nina auf?", options: ["um 6 Uhr", "um 7 Uhr", "um 8 Uhr"], answer: "um 7 Uhr" },
              { question: "Was macht sie nach der Uni?", options: ["Hausaufgaben", "schlafen", "essen"], answer: "Hausaufgaben" },
              { question: "Wie endet ihr Tag?", options: ["mit Lernen", "mit Fernsehen", "mit Entspannen"], answer: "mit Entspannen" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'aufstehen'?", answers: ["ложиться", "вставать", "убегать"], correct: 1 },
            { question: "Was passt: 'Ich ___ mich auf die Prüfung vor.'", answers: ["bereite", "vorbereite", "vor"], correct: 0 },
            { question: "Was bedeutet 'Pause'?", answers: ["сон", "перерыв", "завтрак"], correct: 1 },
            { question: "Was passt: 'Nach dem Kurs ___ ich Hausaufgaben.'", answers: ["macht", "machen", "mache"], correct: 2 },
            { question: "Was bedeutet 'nach Hause kommen'?", answers: ["идти на работу", "приходить домой", "идти в магазин"], correct: 1 },
            { question: "Was passt: 'Ich ___ um 7 Uhr auf.'", answers: ["stehe", "steh", "steht"], correct: 0 }
          ],
          fillGap: [
            { sentence: "Ich ___ um 7 Uhr auf.", answer: "stehe" },
            { sentence: "Ich mache eine ___ um 12 Uhr.", answer: "Pause" },
            { sentence: "Ich komme ___ Hause.", answer: "nach" },
            { sentence: "Ich ___ mich auf den Kurs vor.", answer: "bereite" }
          ],
          longAnswer: "Опиши свой учебный день: когда встаёшь, что делаешь, как учишься (4-6 предложений)"
        },     
        27: {
          title: "День 27. Учёба и отдых",
          vocabulary: [
            "sich entspannen — расслабляться",
            "spazieren gehen — гулять",
            "ein Buch lesen — читать книгу",
            "Musik hören — слушать музыку",
            "Freunde treffen — встречаться с друзьями",
            "Freizeit — свободное время",
            "lernen — учить",
            "sich konzentrieren — концентрироваться",
            "prüfen — проверять",
            "die Erholung — восстановление"
          ],
          audio: "audio/day27_de.mp3",
          example: [
            "„Nach dem Lernen entspanne ich mich.“",
            "„Ich gehe gern spazieren oder höre Musik.“"
          ],
          grammar: [
            "Reflexive Verben: sich entspannen, sich konzentrieren",
            "Двойные глаголы: hören + Musik, treffen + Freunde"
          ],
          listening: {
            audio: "audio/day27_de_audiotest.mp3",
            tests: [
              { question: "Was macht Jonas nach dem Lernen?", options: ["Sport", "Pause", "Entspannung"], answer: "Entspannung" },
              { question: "Wie entspannt er sich?", options: ["mit Musik", "mit Hausaufgaben", "mit Lesen"], answer: "mit Musik" },
              { question: "Mit wem trifft er sich?", options: ["mit seinen Eltern", "mit Freunden", "mit dem Lehrer"], answer: "mit Freunden" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'sich entspannen'?", answers: ["расслабляться", "сосредотачиваться", "сравнивать"], correct: 0 },
            { question: "Was passt: 'Ich ___ gern Musik.'", answers: ["höre", "sehe", "mache"], correct: 0 },
            { question: "Was bedeutet 'Freizeit'?", answers: ["выходной", "свободное время", "учёба"], correct: 1 },
            { question: "Was passt: 'Nach der Uni ___ ich meine Freunde.'", answers: ["treffe", "sehen", "spiele"], correct: 0 },
            { question: "Was bedeutet 'Erholung'?", answers: ["экзамен", "восстановление", "запоминание"], correct: 1 },
            { question: "Was passt: 'Ich ___ mich nach dem Lernen.'", answers: ["entspanne", "lerne", "verstehe"], correct: 0 }
          ],
          fillGap: [
            { sentence: "Ich ___ gern Musik zur Entspannung.", answer: "höre" },
            { sentence: "In meiner ___ lese ich ein Buch.", answer: "Freizeit" },
            { sentence: "Ich treffe mich mit ___.", answer: "Freunden" },
            { sentence: "Ich ___ mich nach der Prüfung.", answer: "entspanne" }
          ],
          longAnswer: "Опиши свой отдых после учебы (4-6 предложений)"
        },             
        28: {
          title: "День 28. Учёба за границей и самостоятельность",
          vocabulary: [
            "das Auslandsstudium — учёба за границей",
            "die Herausforderung — вызов",
            "die Selbstständigkeit — самостоятельность",
            "die Unterkunft — жильё",
            "das Heimweh — тоска по дому",
            "sich anpassen — адаптироваться",
            "die Kultur — культура",
            "fremd — чужой, незнакомый",
            "der Vorteil — преимущество",
            "die Erfahrung — опыт"
          ],
          audio: "audio/day28_de.mp3",
          example: [
            "„Ein Auslandsstudium ist eine große Herausforderung.“",
            "„Man lernt, selbstständig zu leben.“"
          ],
          grammar: [
            "Сложные существительные (Auslandsstudium, Selbstständigkeit)",
            "Глаголы с sich: sich anpassen",
            "Konjunktionen: obwohl, trotzdem (в пассивном виде через тексты и задания)"
          ],
          listening: {
            audio: "audio/day28_de_audiotest.mp3",
            tests: [
              { question: "Was macht Anna im Ausland?", options: ["Sie arbeitet", "Sie studiert", "Sie reist"], answer: "Sie studiert" },
              { question: "Welche Probleme hat sie am Anfang?", options: ["Geld", "Heimweh", "Prüfungen"], answer: "Heimweh" },
              { question: "Was findet sie besonders gut?", options: ["die Unterkunft", "die Freiheit", "die Sprache"], answer: "die Freiheit" },
              { question: "Wie fühlt sie sich am Ende?", options: ["unsicher", "stolz", "traurig"], answer: "stolz" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'Auslandsstudium'?", answers: ["языковой курс", "учёба за границей", "летняя школа"], correct: 1 },
            { question: "Was passt: 'Ich habe ___ Heimweh.'", answers: ["kein", "viel", "oft"], correct: 0 },
            { question: "Was bedeutet 'sich anpassen'?", answers: ["приспособиться", "устроиться", "отдохнуть"], correct: 0 },
            { question: "Was passt: 'Das war eine große ___.'", answers: ["Erfahrung", "Herausforderung", "Unterkunft"], correct: 1 },
            { question: "Was bedeutet 'Selbstständigkeit'?", answers: ["гибкость", "ответственность", "самостоятельность"], correct: 2 },
            { question: "Was passt: 'Ich finde die neue Kultur sehr ___.", answers: ["fremd", "langweilig", "traurig"], correct: 0 },
            { question: "Was bedeutet 'Vorteil'?", answers: ["вывод", "преимущество", "результат"], correct: 1 },
            { question: "Was passt: 'Trotz Heimweh ist sie ___ geblieben.'", answers: ["mutig", "laut", "schwer"], correct: 0 }
          ],
          fillGap: [
            { sentence: "Ein ___ ist ein Vorteil für den Beruf.", answer: "Auslandsstudium" },
            { sentence: "Ich musste mich an die neue ___ anpassen.", answer: "Kultur" },
            { sentence: "Meine ___ war klein, aber gemütlich.", answer: "Unterkunft" },
            { sentence: "Am Anfang hatte ich ___.", answer: "Heimweh" },
            { sentence: "Jetzt bin ich viel ___.", answer: "selbstständiger" },
            { sentence: "Diese ___ hat mich verändert.", answer: "Erfahrung" }
          ],
          longAnswer: "Напиши текст из 8 предложений: ты уехал(а) учиться за границу. Расскажи о трудностях, о новых впечатлениях и чему ты научился(ась)"
        },        
        29: {
          title: "День 29. Работа в группе и участие в проекте",
          vocabulary: [
            "die Gruppenarbeit — групповая работа",
            "das Projekt — проект",
            "die Verantwortung — ответственность",
            "die Aufgabe — задание",
            "der Beitrag — вклад",
            "das Ziel erreichen — достигать цели",
            "sich engagieren — участвовать активно",
            "die Kommunikation — общение",
            "die Zusammenarbeit — сотрудничество",
            "die Präsentation — презентация"
          ],
          audio: "audio/day29_de.mp3",
          example: [
            "„Wir haben in der Gruppenarbeit gut zusammengearbeitet.“",
            "„Jeder hatte eine Aufgabe und trug etwas zum Projekt bei.“"
          ],
          grammar: [
            "Perfekt с haben: Ich habe gearbeitet, ich habe geholfen",
            "Глаголы с sich: sich engagieren"
          ],
          listening: {
            audio: "audio/day29_de_audiotest.mp3",
            tests: [
              { question: "Woran haben die Schüler gearbeitet?", options: ["an einem Text", "an einem Projekt", "an einem Test"], answer: "an einem Projekt" },
              { question: "Wie war die Zusammenarbeit?", options: ["schwierig", "gut", "chaotisch"], answer: "gut" },
              { question: "Was war das Ziel?", options: ["eine Prüfung", "eine Präsentation", "ein Gespräch"], answer: "eine Präsentation" },
              { question: "Was sagt Tom über seinen Beitrag?", options: ["Er war klein", "Er war wichtig", "Er war unwichtig"], answer: "Er war wichtig" }
            ]
          },
          tests: [
            { question: "Was bedeutet 'Gruppenarbeit'?", answers: ["групповая работа", "экзамен", "встреча"], correct: 0 },
            { question: "Was passt: 'Ich habe viel zum Projekt ___.'", answers: ["beigetragen", "gearbeitet", "genommen"], correct: 0 },
            { question: "Was bedeutet 'Verantwortung'?", answers: ["вклад", "ответственность", "задача"], correct: 1 },
            { question: "Was passt: 'Wir ___ das Ziel erreicht.'", answers: ["haben", "sind", "habt"], correct: 0 },
            { question: "Was bedeutet 'sich engagieren'?", answers: ["вовлекаться", "переезжать", "расслабляться"], correct: 0 },
            { question: "Was passt: 'Die ___ war sehr wichtig.'", answers: ["Kommunikation", "Arbeit", "Antwort"], correct: 0 },
            { question: "Was bedeutet 'Zusammenarbeit'?", answers: ["сотрудничество", "результат", "решение"], correct: 0 },
            { question: "Was passt: 'Wir haben alles ___ vorbereitet.'", answers: ["gemeinsam", "einzeln", "ruhig"], correct: 0 }
          ],
          fillGap: [
            { sentence: "Wir haben in der ___ gut gearbeitet.", answer: "Gruppenarbeit" },
            { sentence: "Jeder hatte eine ___.", answer: "Aufgabe" },
            { sentence: "Ich habe viel zum ___ beigetragen.", answer: "Projekt" },
            { sentence: "Unsere ___ war erfolgreich.", answer: "Präsentation" },
            { sentence: "Wir haben das ___ gemeinsam erreicht.", answer: "Ziel" },
            { sentence: "Gute ___ ist sehr wichtig.", answer: "Kommunikation" }
          ],
          longAnswer: "Напиши текст из 8 предложений о своём участии в учебном проекте: с кем ты работал(а), что делал(а), что было сложно и что получилось"
        },        
        30: {
          title: "День 30. Финал. Мотивационное письмо",
          vocabulary: [
            "das Ziel — цель",
            "die Zukunft — будущее",
            "die Motivation — мотивация",
            "studieren — учиться в вузе",
            "sich bewerben — подавать заявку",
            "der Studienplatz — место в вузе",
            "interessiert sein an — интересоваться чем-то",
            "lernen — учить",
            "die Sprache — язык",
            "die Universität — университет"
          ],
          audio: "audio/day30_de.mp3",
          example: [
            "„Ich möchte in Deutschland studieren.“",
            "„Ich bin motiviert und lerne jeden Tag.“"
          ],
          grammar: [
            "Глагол 'möchten' для выражения желания",
            "Sich bewerben um + Akk"
          ],
          longAnswer: "Напиши упрощённое мотивационное письмо (10-15 предложений): кто ты, почему учишь немецкий, где хочешь учиться и зачем"
        }

      },
    en: { // англ
      1: {
        title: "День 1. Приветствия и базовая лексика",
        vocabulary: [
          "Hello — привет",
          "Hi — привет (неформально)",
          "Good morning — доброе утро",
          "Good afternoon — добрый день",
          "Good evening — добрый вечер",
          "Goodbye — до свидания",
          "Please — пожалуйста",
          "Thank you — спасибо",
          "The book — книга",
          "The teacher — преподаватель"
        ],
        audio: "audio/day1_en.mp3",
        example: [
          "“Good morning, I am a student.” — Доброе утро, я студент.",
          "“The teacher has a book.” — У преподавателя есть книга."
        ],
        grammar: [
          "Артикль the — универсальный определённый артикль",
          "Глагол to be: I am, you are, he/she is"
        ],
        tests: [
          { question: "What does 'Thank you' mean?", answers: ["Пожалуйста", "Спасибо", "Привет"], correct: 1 },
          { question: "Complete: I ___ a student.", answers: ["is", "are", "am"], correct: 2 },
          { question: "Which one is a greeting?", answers: ["Please", "Goodbye", "Hi"], correct: 2 }
        ]
      },
      2: {
        title: "День 2. В университете",
        vocabulary: [
          "The university — университет",
          "The notebook — тетрадь",
          "The pen — ручка",
          "The table — стол",
          "The student — студент",
          "The classroom — аудитория",
          "The course — курс",
          "The chair — стул",
          "The lesson — урок",
          "The professor — профессор"
        ],
        audio: "audio/day2_en.mp3",
        example: [
          "“I have a notebook and a pen.” — У меня есть тетрадь и ручка.",
          "“The student is in the classroom.” — Студент находится в аудитории."
        ],
        grammar: [
          "Глагол to have: I have, he/she has",
          "Единственное и множественное число: a student — students"
        ],
        tests: [
          { question: "What does 'notebook' mean?", answers: ["Ручка", "Книга", "Тетрадь"], correct: 2 },
          { question: "Complete: She ___ a course today.", answers: ["have", "has", "is"], correct: 1 },
          { question: "What is the plural of 'student'?", answers: ["students", "studentes", "studants"], correct: 0 }
        ]
      },
      3: {
        title: "День 3. Действия на занятии",
        vocabulary: [
          "To read — читать",
          "To write — писать",
          "To listen — слушать",
          "To speak — говорить",
          "To study — учиться",
          "The sentence — предложение",
          "The question — вопрос",
          "The answer — ответ",
          "The board — доска",
          "The group — группа"
        ],
        audio: "audio/day3_en.mp3",
        example: [
          "“We write sentences on the board.” — Мы пишем предложения на доске.",
          "“The students listen to the teacher.” — Студенты слушают преподавателя."
        ],
        grammar: [
          "Глаголы в настоящем времени: I read, he reads",
          "Добавление -s в 3 лице: he reads, she writes"
        ],
        tests: [
          { question: "What does 'to study' mean?", answers: ["писать", "учиться", "говорить"], correct: 1 },
          { question: "Complete: He ___ to the teacher.", answers: ["listen", "listens", "listened"], correct: 1 },
          { question: "Which word means 'предложение'?", answers: ["sentence", "question", "group"], correct: 0 }
        ]
      }, 
      4: {
        title: "День 4. Люди в университете",
        vocabulary: [
          "The teacher — преподаватель",
          "The student — студент",
          "The classmate — одногруппник",
          "The assistant — ассистент",
          "The director — директор",
          "The secretary — секретарь",
          "The librarian — библиотекарь",
          "The group — группа",
          "The class — класс / занятие",
          "The department — факультет / отдел"
        ],
        audio: "audio/day4_en.mp3",
        example: [
          "“The teacher talks to the assistant.” — Преподаватель говорит с ассистентом.",
          "“The librarian works in the library.” — Библиотекарь работает в библиотеке."
        ],
        grammar: [
          "Артикль the для всех существительных",
          "Употребление глаголов work, talk в настоящем времени"
        ],
        tests: [
          { question: "Who works in the library?", answers: ["The teacher", "The secretary", "The librarian"], correct: 2 },
          { question: "What does 'classmate' mean?", answers: ["Преподаватель", "Одногруппник", "Ассистент"], correct: 1 },
          { question: "Complete: The director ___ in the department.", answers: ["work", "works", "working"], correct: 1 }
        ]
      },      
      5: {
        title: "День 5. Расписание и дни недели",
        vocabulary: [
          "Monday — понедельник",
          "Tuesday — вторник",
          "Wednesday — среда",
          "Thursday — четверг",
          "Friday — пятница",
          "Lesson — урок",
          "Class — занятие",
          "Schedule — расписание",
          "Morning — утро",
          "Afternoon — день"
        ],
        audio: "audio/day5_en.mp3",
        example: [
          "“I have a lesson on Monday morning.” — У меня урок в понедельник утром.",
          "“The class starts at nine o’clock.” — Занятие начинается в девять."
        ],
        grammar: [
          "Предлоги времени: on Monday, at nine o’clock",
          "Порядок слов в предложениях с временем"
        ],
        tests: [
          { question: "What does 'schedule' mean?", answers: ["расписание", "урок", "время"], correct: 0 },
          { question: "Complete: The class starts ___ nine o’clock.", answers: ["in", "at", "on"], correct: 1 },
          { question: "Which day comes after Tuesday?", answers: ["Monday", "Wednesday", "Friday"], correct: 1 }
        ]
      },
      6: {
        title: "День 6. Учебные предметы и расписание",
        vocabulary: [
          "Math — математика",
          "History — история",
          "Biology — биология",
          "English — английский",
          "Art — искусство",
          "Music — музыка",
          "Lesson — урок",
          "Subject — предмет",
          "Timetable — расписание",
          "Break — перемена"
        ],
        audio: "audio/day6_en.mp3",
        example: [
          "“My favorite subject is English.” — Мой любимый предмет — английский.",
          "“We have a short break after two lessons.” — У нас короткая перемена после двух уроков."
        ],
        grammar: [
          "Present Simple: he/she/it + -s",
          "Вопрос с do/does: Do you like…? / Does she like…?"
        ],
        tests: [
          { question: "What does 'subject' mean?", answers: ["предмет", "учитель", "оценка"], correct: 0 },
          { question: "Complete: He ___ History on Monday.", answers: ["have", "has", "is"], correct: 1 },
          { question: "What does 'timetable' mean?", answers: ["перемена", "расписание", "класс"], correct: 1 },
          { question: "What subject is about numbers?", answers: ["Art", "Math", "English"], correct: 1 },
          { question: "What does 'break' mean?", answers: ["экзамен", "пауза", "урок"], correct: 1 },
          { question: "Complete: Do you ___ Biology?", answers: ["likes", "like", "liking"], correct: 1 }
        ],
        fillGap: [
          { sentence: "My favorite ___ (предмет) is English.", answer: "subject" },
          { sentence: "We have Music on ___ (пн).", answer: "Monday" },
          { sentence: "There is a ___ (перемена) after class.", answer: "break" },
          { sentence: "She ___ (глагол: иметь) two lessons today.", answer: "has" }
        ]
      },       
      7: {
        title: "День 7. Оценки и экзамены",
        vocabulary: [
          "Grade — оценка",
          "Exam — экзамен",
          "Test — тест",
          "Mark — отметка",
          "Pass — сдать",
          "Fail — провалить",
          "Difficult — сложный",
          "Easy — лёгкий",
          "Prepare — готовиться",
          "Result — результат"
        ],
        audio: "audio/day7_en.mp3",
        example: [
          "“She passed the exam with a good grade.” — Она сдала экзамен на хорошую оценку.",
          "“The test was very difficult.” — Тест был очень сложным."
        ],
        grammar: [
          "Past Simple: pass → passed, fail → failed",
          "Regular verb endings: -ed"
        ],
        tests: [
          { question: "What does 'fail' mean?", answers: ["сдать", "провалить", "проверить"], correct: 1 },
          { question: "Complete: I ___ the test yesterday.", answers: ["pass", "passed", "passes"], correct: 1 },
          { question: "What is a 'grade'?", answers: ["учебник", "оценка", "задание"], correct: 1 },
          { question: "What does 'prepare' mean?", answers: ["завалить", "готовиться", "проверять"], correct: 1 },
          { question: "Complete: The exam was ___ (прилагательное: сложный).", answers: ["difficult", "fail", "easy"], correct: 0 },
          { question: "Complete: He ___ the exam last week.", answers: ["pass", "passed", "passer"], correct: 1 }
        ],
        fillGap: [
          { sentence: "I got a good ___ (оценка) for the test.", answer: "grade" },
          { sentence: "She ___ (глагол в прош. времени: провалить) the exam.", answer: "failed" },
          { sentence: "We need to ___ (глагол: готовиться) for the exam.", answer: "prepare" },
          { sentence: "The ___ (результат) was bad.", answer: "result" }
        ]
      },       
      8: {
        title: "День 8. Время и распорядок дня",
        vocabulary: [
          "Get up — вставать",
          "Have breakfast — завтракать",
          "Go to school — идти в школу",
          "Come home — возвращаться домой",
          "Do homework — делать домашку",
          "Go to bed — ложиться спать",
          "In the morning — утром",
          "At night — ночью",
          "Every day — каждый день",
          "Always — всегда"
        ],
        audio: "audio/day8_en.mp3",
        example: [
          "“I get up at 7 o’clock.” — Я встаю в 7 часов.",
          "“He always does his homework.” — Он всегда делает домашку."
        ],
        grammar: [
          "Наречия частотности: always, sometimes, never",
          "3-е лицо Present Simple: He gets up, She goes"
        ],
        tests: [
          { question: "What does 'get up' mean?", answers: ["ложиться", "вставать", "готовиться"], correct: 1 },
          { question: "Complete: He ___ to bed at 10 p.m.", answers: ["go", "goes", "went"], correct: 1 },
          { question: "What does 'do homework' mean?", answers: ["готовить еду", "делать домашку", "читать книгу"], correct: 1 },
          { question: "Complete: She ___ her homework in the evening.", answers: ["does", "do", "doing"], correct: 0 },
          { question: "What does 'always' mean?", answers: ["всегда", "никогда", "иногда"], correct: 0 },
          { question: "Complete: I ___ (глагол: возвращаться) home at 4.", answers: ["come", "coming", "comes"], correct: 0 }
        ],
        fillGap: [
          { sentence: "I ___ (глагол: вставать) at 7 o’clock.", answer: "get up" },
          { sentence: "We ___ (глагол: завтракать) in the morning.", answer: "have breakfast" },
          { sentence: "He always ___ (глагол: делать) his homework.", answer: "does" },
          { sentence: "They ___ (глагол: ложиться спать) at 11.", answer: "go to bed" }
        ]
      },      
      9: {
        title: "День 9. Принадлежности",
        vocabulary: [
          "Pen — ручка",
          "Pencil — карандаш",
          "Notebook — тетрадь",
          "Bag — сумка",
          "Eraser — ластик",
          "Ruler — линейка",
          "Book — книга",
          "Desk — партa",
          "Chair — стул",
          "Board — доска"
        ],
        audio: "audio/day9_en.mp3",
        example: [
          "“I have a notebook and a pen in my bag.” — У меня в сумке тетрадь и ручка.",
          "“The teacher writes on the board.” — Учитель пишет на доске."
        ],
        grammar: [
          "Артикли a / an",
          "This / That / These / Those (введение через примеры)"
        ],
        tests: [
          { question: "What does 'eraser' mean?", answers: ["линейка", "ластик", "ручка"], correct: 1 },
          { question: "Complete: I have ___ pencil.", answers: ["a", "an", "the"], correct: 1 },
          { question: "What is a 'board'?", answers: ["книга", "парта", "доска"], correct: 2 },
          { question: "Complete: She puts the book on the ___.", answers: ["desk", "bag", "board"], correct: 0 },
          { question: "What does 'ruler' mean?", answers: ["книга", "линейка", "стул"], correct: 1 },
          { question: "Complete: ___ is my notebook.", answers: ["This", "These", "That"], correct: 0 }
        ],
        fillGap: [
          { sentence: "This is ___ (предмет: книга).", answer: "a book" },
          { sentence: "He writes with a ___ (предмет: ручка).", answer: "pen" },
          { sentence: "We sit on a ___ (предмет: мебель).", answer: "chair" },
          { sentence: "I use a ___ (предмет: чтобы стереть) when I make a mistake.", answer: "eraser" }
        ]
      },   
      10: {
        title: "День 10. Вопросы и ответы на занятии",
        vocabulary: [
          "Question — вопрос",
          "Answer — ответ",
          "Ask — спрашивать",
          "Explain — объяснять",
          "Understand — понимать",
          "Repeat — повторять",
          "Know — знать",
          "Raise your hand — поднимать руку",
          "Say — говорить",
          "Help — помогать"
        ],
        audio: "audio/day10_en.mp3",
        example: [
          "“I have a question for the teacher.” — У меня вопрос к учителю.",
          "“Can you repeat the answer?” — Можешь повторить ответ?"
        ],
        grammar: [
          "Модальные глаголы: can / can’t",
          "Порядок слов в вопросах: Can you…?"
        ],
        tests: [
          { question: "What does 'question' mean?", answers: ["ответ", "вопрос", "тема"], correct: 1 },
          { question: "Complete: Can you ___ that, please?", answers: ["repeat", "repeats", "repeating"], correct: 0 },
          { question: "What does 'understand' mean?", answers: ["учить", "объяснять", "понимать"], correct: 2 },
          { question: "Complete: I don't ___ the answer.", answers: ["know", "knows", "knew"], correct: 0 },
          { question: "What does 'help' mean?", answers: ["помогать", "сидеть", "писать"], correct: 0 },
          { question: "Complete: Please ___ your hand.", answers: ["raise", "rise", "put"], correct: 0 }
        ],
        fillGap: [
          { sentence: "I have a ___ (вопрос) about the task.", answer: "question" },
          { sentence: "Can you ___ (глагол: повторить) the answer?", answer: "repeat" },
          { sentence: "We ___ (глагол: понимать) this topic.", answer: "understand" },
          { sentence: "He ___ (глагол: знать) the correct answer.", answer: "knows" }
        ]
      },
      11: {
        title: "День 11. Простые действия в классе",
        vocabulary: [
          "Write — писать",
          "Read — читать",
          "Listen — слушать",
          "Speak — говорить",
          "Open — открывать",
          "Close — закрывать",
          "Look — смотреть",
          "Take — брать",
          "Give — давать",
          "Show — показывать"
        ],
        audio: "audio/day11_en.mp3",
        example: [
          "“Please open your books.” — Пожалуйста, откройте свои книги.",
          "“She takes the pencil from her bag.” — Она достаёт карандаш из сумки."
        ],
        grammar: [
          "Повелительное наклонение (Imperative): Open…, Don’t open…",
          "Правильные глаголы Present Simple: he/she + -s"
        ],
        tests: [
          { question: "What does 'take' mean?", answers: ["отдавать", "брать", "писать"], correct: 1 },
          { question: "Complete: Please ___ the window.", answers: ["close", "closed", "closing"], correct: 0 },
          { question: "What does 'show' mean?", answers: ["показать", "сказать", "открыть"], correct: 0 },
          { question: "Complete: He ___ his book to the teacher.", answers: ["shows", "show", "is"], correct: 0 },
          { question: "What does 'read' mean?", answers: ["читать", "прыгать", "стоять"], correct: 0 },
          { question: "Complete: Don’t ___ your notebook.", answers: ["open", "opens", "opening"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Please ___ (глагол: закрыть) your books.", answer: "close" },
          { sentence: "She ___ (глагол: даёт) me a pencil.", answer: "gives" },
          { sentence: "We ___ (глагол: слушать) carefully.", answer: "listen" },
          { sentence: "He ___ (глагол: показывает) the answer.", answer: "shows" }
        ]
      },       
      12: {
        title: "День 12. Части тела и здоровье",
        vocabulary: [
          "Head — голова",
          "Arm — рука",
          "Leg — нога",
          "Hand — кисть руки",
          "Foot — ступня",
          "Eye — глаз",
          "Ear — ухо",
          "Sick — больной",
          "Tired — уставший",
          "Doctor — врач"
        ],
        audio: "audio/day12_en.mp3",
        example: [
          "“I have a headache.” — У меня болит голова.",
          "“He is tired after school.” — Он устал после школы."
        ],
        grammar: [
          "To be + прилагательное: I am tired / She is sick",
          "Множественное число: foot → feet"
        ],
        tests: [
          { question: "What does 'tired' mean?", answers: ["голодный", "уставший", "больной"], correct: 1 },
          { question: "Complete: My ___ hurts.", answers: ["head", "leg", "eye"], correct: 0 },
          { question: "What does 'doctor' mean?", answers: ["учитель", "врач", "пациент"], correct: 1 },
          { question: "Complete: He is ___ today.", answers: ["sick", "sickly", "sickness"], correct: 0 },
          { question: "What is the plural of 'foot'?", answers: ["foots", "feet", "footses"], correct: 1 },
          { question: "Complete: She has blue ___ (глаза).", answers: ["eyes", "ears", "legs"], correct: 0 }
        ],
        fillGap: [
          { sentence: "My ___ (часть тела: рука) hurts.", answer: "arm" },
          { sentence: "He is very ___ (прилагательное: уставший).", answer: "tired" },
          { sentence: "She goes to the ___ (профессия: врач).", answer: "doctor" },
          { sentence: "Her ___ (часть тела: глаза) are green.", answer: "eyes" }
        ]
      },     
      13: {
        title: "День 13. Еда и напитки",
        vocabulary: [
          "Bread — хлеб",
          "Butter — масло",
          "Cheese — сыр",
          "Egg — яйцо",
          "Fruit — фрукты",
          "Vegetable — овощ",
          "Water — вода",
          "Juice — сок",
          "Milk — молоко",
          "Tea — чай"
        ],
        audio: "audio/day13_en.mp3",
        example: [
          "“I usually eat bread and eggs for breakfast.” — Я обычно ем хлеб и яйца на завтрак.",
          "“She drinks milk or tea.” — Она пьёт молоко или чай."
        ],
        grammar: [
          "Much / many / a lot of",
          "Some / any — введение"
        ],
        tests: [
          { question: "What does 'fruit' mean?", answers: ["овощ", "фрукт", "напиток"], correct: 1 },
          { question: "Complete: I eat ___ vegetables.", answers: ["some", "any", "much"], correct: 0 },
          { question: "What does 'cheese' mean?", answers: ["молоко", "масло", "сыр"], correct: 2 },
          { question: "Complete: She doesn’t drink ___ milk.", answers: ["some", "any", "a"], correct: 1 },
          { question: "What is 'tea'?", answers: ["чай", "кофе", "сок"], correct: 0 },
          { question: "Complete: We have ___ water.", answers: ["a lot of", "many", "few"], correct: 0 }
        ],
        fillGap: [
          { sentence: "I eat ___ (едa: хлеб) every day.", answer: "bread" },
          { sentence: "Do you want some ___ (напиток: сок)?", answer: "juice" },
          { sentence: "She drinks ___ (напиток: чай) in the evening.", answer: "tea" },
          { sentence: "I don’t have ___ (молоко) today.", answer: "any milk" }
        ]
      },       
      14: {
        title: "День 14. В магазине",
        vocabulary: [
          "Shop — магазин",
          "Buy — покупать",
          "Sell — продавать",
          "Money — деньги",
          "Price — цена",
          "Cheap — дешёвый",
          "Expensive — дорогой",
          "Cash — наличные",
          "Pay — платить",
          "Change — сдача"
        ],
        audio: "audio/day14_en.mp3",
        example: [
          "“How much does it cost?” — Сколько это стоит?",
          "“I want to buy a new bag.” — Я хочу купить новую сумку."
        ],
        grammar: [
          "Present Simple + вопросы с How much",
          "Want to + verb"
        ],
        tests: [
          { question: "What does 'cheap' mean?", answers: ["дорогой", "дешёвый", "большой"], correct: 1 },
          { question: "Complete: I want to ___ a pen.", answers: ["buy", "bought", "buys"], correct: 0 },
          { question: "What does 'change' mean?", answers: ["сдача", "покупка", "цена"], correct: 0 },
          { question: "Complete: He ___ a lot of money.", answers: ["has", "have", "haves"], correct: 0 },
          { question: "What is the opposite of 'expensive'?", answers: ["cheap", "rich", "free"], correct: 0 },
          { question: "Complete: I ___ with cash.", answers: ["pay", "pays", "paid"], correct: 0 }
        ],
        fillGap: [
          { sentence: "I want to ___ (глагол: купить) a book.", answer: "buy" },
          { sentence: "How much does it ___ (стоить)?", answer: "cost" },
          { sentence: "This bag is very ___ (прилагательное: дорогой).", answer: "expensive" },
          { sentence: "We pay ___ (способ оплаты: наличными).", answer: "with cash" }
        ]
      },
      15: {
        title: "День 15. Повседневная жизнь студента",
        vocabulary: [
          "Wake up — просыпаться",
          "Get dressed — одеваться",
          "Have lunch — обедать",
          "Study — учиться",
          "Go home — идти домой",
          "Dinner — ужин",
          "Library — библиотека",
          "Every morning — каждое утро",
          "Usually — обычно",
          "Sometimes — иногда"
        ],
        audio: "audio/day15_en.mp3",
        example: [
          "“I usually wake up at 7 and get dressed quickly.”",
          "“After lunch, I go to the library to study.”"
        ],
        grammar: [
          "Present Simple с наречиями частотности: always, usually, sometimes",
          "Порядок слов: наречие + глагол"
        ],
        listening: {
          audio: "audio/day15_en_listening.mp3",
          tests: [
            {
              question: "What time does Sam usually wake up?",
              options: ["At 6", "At 7", "At 8"],
              answer: "At 7"
            },
            {
              question: "Where does he go after lunch?",
              options: ["Home", "The library", "The gym"],
              answer: "The library"
            },
            {
              question: "What does he do in the evening?",
              options: ["Studies", "Watches TV", "Has dinner"],
              answer: "Has dinner"
            }
          ]
        },
        tests: [
          { question: "What does 'library' mean?", answers: ["библиотека", "столовая", "школа"], correct: 0 },
          { question: "Complete: I ___ up at 7.", answers: ["wake", "wakes", "waking"], correct: 0 },
          { question: "What does 'get dressed' mean?", answers: ["одеваться", "просыпаться", "есть"], correct: 0 },
          { question: "Complete: He ___ lunch at school.", answers: ["have", "has", "is"], correct: 1 },
          { question: "What does 'sometimes' mean?", answers: ["всегда", "иногда", "никогда"], correct: 1 },
          { question: "Complete: They ___ to the library.", answers: ["go", "goes", "going"], correct: 0 }
        ],
        fillGap: [
          { sentence: "I ___ (глагол: просыпаться) at 7 every day.", answer: "wake up" },
          { sentence: "She ___ (глагол: обедать) at home.", answer: "has lunch" },
          { sentence: "We go to the ___ (место: учёба) to study.", answer: "library" },
          { sentence: "They ___ (глагол: идут) home at 5.", answer: "go" }
        ]
      },
      16: {
        title: "День 16. Учебные привычки",
        vocabulary: [
          "Read books — читать книги",
          "Watch videos — смотреть видео",
          "Write notes — писать конспекты",
          "Learn new words — учить новые слова",
          "Use apps — использовать приложения",
          "Focus — сосредотачиваться",
          "Take breaks — делать перерывы",
          "Improve — улучшать",
          "Practice — практиковать",
          "Remember — запоминать"
        ],
        audio: "audio/day16_en.mp3",
        example: [
          "“I read books and take notes while studying.”",
          "“Good habits help me remember new words.”"
        ],
        grammar: [
          "Gerund after verbs: like doing, enjoy reading",
          "Present Simple для описания привычек"
        ],
        listening: {
          audio: "audio/day16_en_listening.mp3",
          tests: [
            {
              question: "What helps Lisa remember words?",
              options: ["Watching TV", "Practicing", "Sleeping"],
              answer: "Practicing"
            },
            {
              question: "What does she use to study?",
              options: ["Apps", "Books", "Friends"],
              answer: "Apps"
            },
            {
              question: "When does she take breaks?",
              options: ["After school", "Every 30 minutes", "At night"],
              answer: "Every 30 minutes"
            }
          ]
        },
        tests: [
          { question: "What does 'practice' mean?", answers: ["забывать", "практиковать", "переводить"], correct: 1 },
          { question: "Complete: I ___ new words every day.", answers: ["learn", "learns", "learning"], correct: 0 },
          { question: "What does 'focus' mean?", answers: ["прыгать", "сосредотачиваться", "спрашивать"], correct: 1 },
          { question: "Complete: She ___ notes in class.", answers: ["writes", "write", "writing"], correct: 0 },
          { question: "What does 'take breaks' mean?", answers: ["делать перерывы", "брать книги", "записывать"], correct: 0 },
          { question: "Complete: I use apps to ___ English.", answers: ["improve", "improves", "improved"], correct: 0 }
        ],
        fillGap: [
          { sentence: "He likes to ___ (действие: смотреть) videos.", answer: "watch" },
          { sentence: "We ___ (глагол: читаем) books every day.", answer: "read" },
          { sentence: "I ___ (глагол: записывать) notes in class.", answer: "write" },
          { sentence: "They ___ (глагол: используют) apps for learning.", answer: "use" }
        ]
      },          
      17: {
        title: "День 17. Учебная группа и преподаватели",
        vocabulary: [
          "Group — группа",
          "Teacher — учитель",
          "Classmate — одноклассник",
          "Talk — разговаривать",
          "Ask questions — задавать вопросы",
          "Answer — отвечать",
          "Friendly — дружелюбный",
          "Smart — умный",
          "Explain — объяснять",
          "Lesson — урок"
        ],
        audio: "audio/day17_en.mp3",
        example: [
          "“Our teacher is smart and friendly.”",
          "“I always ask questions if I don’t understand.”"
        ],
        grammar: [
          "Present Simple + he/she",
          "Множественное число: classmates, teachers"
        ],
        listening: {
          audio: "audio/day17_en_listening.mp3",
          tests: [
            {
              question: "How is Max’s teacher?",
              options: ["Funny", "Friendly", "Strict"],
              answer: "Friendly"
            },
            {
              question: "What does Max often do in class?",
              options: ["Sleep", "Talk", "Ask questions"],
              answer: "Ask questions"
            },
            {
              question: "Who helps Max with homework?",
              options: ["His teacher", "His classmate", "His brother"],
              answer: "His classmate"
            }
          ]
        },
        tests: [
          { question: "What does 'classmate' mean?", answers: ["одногруппник", "учебник", "преподаватель"], correct: 0 },
          { question: "Complete: She ___ every question.", answers: ["answers", "answer", "is answering"], correct: 0 },
          { question: "What does 'friendly' mean?", answers: ["строгий", "дружелюбный", "занятой"], correct: 1 },
          { question: "Complete: I like our ___ (преподаватель).", answers: ["teacher", "group", "book"], correct: 0 },
          { question: "What does 'smart' mean?", answers: ["умный", "громкий", "медленный"], correct: 0 },
          { question: "Complete: He ___ questions in class.", answers: ["asks", "ask", "asking"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Our ___ (учитель) is kind and smart.", answer: "teacher" },
          { sentence: "I often ___ (глагол: спрашивать) questions.", answer: "ask" },
          { sentence: "My ___ (одногруппник) helps me with tasks.", answer: "classmate" },
          { sentence: "We are a good ___ (группа).", answer: "group" }
        ]
      },     
      18: {
        title: "День 18. Учёба онлайн",
        vocabulary: [
          "Online — онлайн",
          "Computer — компьютер",
          "Screen — экран",
          "Headphones — наушники",
          "Internet — интернет",
          "Connect — подключаться",
          "Link — ссылка",
          "Click — нажимать",
          "Lesson — урок",
          "Technical problems — технические проблемы"
        ],
        audio: "audio/day18_en.mp3",
        example: [
          "“I study online three times a week.”",
          "“Sometimes I have technical problems with my computer.”"
        ],
        grammar: [
          "There is / There are",
          "Some / any / no + nouns"
        ],
        listening: {
          audio: "audio/day18_en_listening.mp3",
          tests: [
            {
              question: "Where does Emily study?",
              options: ["At home", "At school", "In the library"],
              answer: "At home"
            },
            {
              question: "What does she use for online lessons?",
              options: ["A tablet", "A phone", "A computer"],
              answer: "A computer"
            },
            {
              question: "What sometimes happens during class?",
              options: ["She forgets her book", "She loses internet", "She goes offline"],
              answer: "She loses internet"
            }
          ]
        },
        tests: [
          { question: "What does 'connect' mean?", answers: ["нажимать", "подключаться", "загружать"], correct: 1 },
          { question: "Complete: I study ___ three days a week.", answers: ["online", "home", "school"], correct: 0 },
          { question: "What does 'link' mean?", answers: ["компьютер", "ссылка", "урок"], correct: 1 },
          { question: "Complete: She uses ___ to hear better.", answers: ["headphones", "keyboard", "mouse"], correct: 0 },
          { question: "What does 'screen' mean?", answers: ["экран", "страница", "файл"], correct: 0 },
          { question: "Complete: There ___ some problems with the connection.", answers: ["are", "is", "be"], correct: 0 }
        ],
        fillGap: [
          { sentence: "He uses a ___ (устройство: компьютер) for classes.", answer: "computer" },
          { sentence: "Click the ___ (слово: ссылка) to join.", answer: "link" },
          { sentence: "Sometimes I have ___ (проблемы) with the internet.", answer: "technical problems" },
          { sentence: "I put on my ___ (наушники) to hear better.", answer: "headphones" }
        ]
      },       
      19: {
        title: "День 19. Подготовка к экзамену",
        vocabulary: [
          "Study hard — учиться усердно",
          "Review — повторять",
          "Revise — готовиться (повторять)",
          "Memorize — заучивать",
          "Take notes — делать заметки",
          "Plan — планировать",
          "Schedule — расписание",
          "Test — тест",
          "Be ready — быть готовым",
          "Stay calm — сохранять спокойствие"
        ],
        audio: "audio/day19_en.mp3",
        example: [
          "“I review every day to get ready for the exam.”",
          "“It’s important to stay calm and focused.”"
        ],
        grammar: [
          "Infinitive after adjectives: It’s important to review…",
          "Have to / don’t have to"
        ],
        listening: {
          audio: "audio/day19_en_listening.mp3",
          tests: [
            {
              question: "What does Tom do to prepare?",
              options: ["Watches videos", "Reads books", "Reviews notes"],
              answer: "Reviews notes"
            },
            {
              question: "What helps him stay calm?",
              options: ["Playing games", "Taking breaks", "Listening to music"],
              answer: "Taking breaks"
            },
            {
              question: "When is his exam?",
              options: ["Tomorrow", "Next week", "Today"],
              answer: "Tomorrow"
            }
          ]
        },
        tests: [
          { question: "What does 'review' mean?", answers: ["читать", "повторять", "отдыхать"], correct: 1 },
          { question: "Complete: I ___ hard for the exam.", answers: ["study", "studies", "studying"], correct: 0 },
          { question: "What does 'schedule' mean?", answers: ["расписание", "задание", "результат"], correct: 0 },
          { question: "Complete: He ___ to revise today.", answers: ["has", "have", "had"], correct: 0 },
          { question: "What does 'stay calm' mean?", answers: ["нервничать", "расслабляться", "сохранять спокойствие"], correct: 2 },
          { question: "Complete: It’s important ___ (глагол: учить) every day.", answers: ["to study", "study", "studies"], correct: 0 }
        ],
        fillGap: [
          { sentence: "I ___ (глагол: повторять) all topics before the test.", answer: "review" },
          { sentence: "He ___ (глагол: планирует) his study time.", answer: "plans" },
          { sentence: "We take ___ (заметки) in class.", answer: "notes" },
          { sentence: "It’s important to ___ (глагол: сохранять спокойствие) before an exam.", answer: "stay calm" }
        ]
      },   
      20: {
        title: "День 20. Моя учёба",
        vocabulary: [
          "Learn — учить",
          "Subject — предмет",
          "Lesson — урок",
          "Teacher — учитель",
          "Homework — домашнее задание",
          "Difficult — сложный",
          "Interesting — интересный",
          "Important — важный",
          "Try — стараться",
          "Understand — понимать"
        ],
        audio: "audio/day20_en.mp3",
        example: [
          "“English is my favorite subject.”",
          "“I try to understand everything in class.”"
        ],
        grammar: [
          "to be + прилагательное: is interesting, is difficult",
          "try to + verb"
        ],
        listening: {
          audio: "audio/day20_en_listening.mp3",
          tests: [
            {
              question: "What is Emma’s favorite subject?",
              options: ["History", "English", "Math"],
              answer: "English"
            },
            {
              question: "What does she find difficult?",
              options: ["Math", "English", "Homework"],
              answer: "Math"
            },
            {
              question: "What does she try to do?",
              options: ["Sleep", "Understand everything", "Skip lessons"],
              answer: "Understand everything"
            }
          ]
        },
        tests: [
          { question: "What does 'try' mean?", answers: ["играть", "стараться", "повторять"], correct: 1 },
          { question: "Complete: This subject ___ interesting.", answers: ["is", "are", "be"], correct: 0 },
          { question: "What does 'understand' mean?", answers: ["объяснять", "понимать", "спрашивать"], correct: 1 },
          { question: "Complete: He ___ to do all homework.", answers: ["tries", "try", "trying"], correct: 0 },
          { question: "What does 'important' mean?", answers: ["важный", "длинный", "скучный"], correct: 0 },
          { question: "Complete: I like this ___ (учеба).", answers: ["subject", "lesson", "group"], correct: 0 }
        ],
        fillGap: [
          { sentence: "This ___ (предмет) is difficult.", answer: "subject" },
          { sentence: "He ___ (глагол: старается) to learn fast.", answer: "tries" },
          { sentence: "We always do our ___ (домашнее задание).", answer: "homework" },
          { sentence: "The ___ (прилагательное: важный) lesson is today.", answer: "important" }
        ],
        longAnswer: "Составь простое предложение о своём любимом предмете и почему он тебе нравится."
      },            
      21: {
        title: "День 21. Распорядок учёбы",
        vocabulary: [
          "Wake up — просыпаться",
          "Have breakfast — завтракать",
          "Go to school — идти в школу",
          "Study — учиться",
          "Have lunch — обедать",
          "Do homework — делать домашку",
          "Rest — отдыхать",
          "In the evening — вечером",
          "Usually — обычно",
          "Then — потом"
        ],
        audio: "audio/day21_en.mp3",
        example: [
          "“I wake up at 7 and go to school at 8.”",
          "“In the evening, I do homework and rest.”"
        ],
        grammar: [
          "Sequence words: first, then, after that",
          "Present Simple в описании дня"
        ],
        listening: {
          audio: "audio/day21_en_listening.mp3",
          tests: [
            {
              question: "When does Jake wake up?",
              options: ["At 6", "At 7", "At 8"],
              answer: "At 7"
            },
            {
              question: "What does he do in the evening?",
              options: ["Plays games", "Does homework", "Goes to school"],
              answer: "Does homework"
            },
            {
              question: "What does he do after school?",
              options: ["Eats lunch", "Rests", "Studies more"],
              answer: "Eats lunch"
            }
          ]
        },
        tests: [
          { question: "What does 'rest' mean?", answers: ["играть", "отдыхать", "работать"], correct: 1 },
          { question: "Complete: I ___ up at 7.", answers: ["wake", "wakes", "waking"], correct: 0 },
          { question: "What does 'usually' mean?", answers: ["всегда", "обычно", "никогда"], correct: 1 },
          { question: "Complete: She ___ homework at 5.", answers: ["does", "do", "doing"], correct: 0 },
          { question: "What is 'then' used for?", answers: ["вопрос", "сравнение", "последовательность"], correct: 2 },
          { question: "Complete: He ___ breakfast at 8.", answers: ["has", "have", "haves"], correct: 0 }
        ],
        fillGap: [
          { sentence: "I ___ (глагол: просыпаться) early on weekdays.", answer: "wake up" },
          { sentence: "We ___ (глагол: завтракать) before class.", answer: "have breakfast" },
          { sentence: "After school, I ___ (глагол: делать) homework.", answer: "do" },
          { sentence: "In the evening, I ___ (глагол: отдыхать).", answer: "rest" }
        ],
        longAnswer: "Составь предложение о том, как обычно проходит твой учебный день (включи хотя бы 2 действия)."
      },
      22: {
        title: "День 22. Учебная мотивация",
        vocabulary: [
          "Motivation — мотивация",
          "Goal — цель",
          "Future — будущее",
          "Study — учиться",
          "Work hard — усердно работать",
          "Success — успех",
          "Dream — мечта",
          "Want — хотеть",
          "Learn — учить",
          "Improve — улучшать"
        ],
        audio: "audio/day22_en.mp3",
        example: [
          "“I want to study in another country.”",
          "“Motivation helps me reach my goals.”"
        ],
        grammar: [
          "want to + verb",
          "Present Simple: work hard, learn fast"
        ],
        listening: {
          audio: "audio/day22_en_listening.mp3",
          tests: [
            {
              question: "What is Laura’s goal?",
              options: ["Travel", "Study abroad", "Get a job"],
              answer: "Study abroad"
            },
            {
              question: "What does she do to succeed?",
              options: ["Sleeps a lot", "Works hard", "Reads novels"],
              answer: "Works hard"
            },
            {
              question: "What helps her stay focused?",
              options: ["Motivation", "Luck", "Games"],
              answer: "Motivation"
            }
          ]
        },
        tests: [
          { question: "What does 'goal' mean?", answers: ["мечта", "цель", "работа"], correct: 1 },
          { question: "Complete: I ___ to learn more.", answers: ["want", "wants", "wanting"], correct: 0 },
          { question: "What does 'success' mean?", answers: ["ошибка", "успех", "стресс"], correct: 1 },
          { question: "Complete: He ___ hard every day.", answers: ["works", "work", "working"], correct: 0 },
          { question: "What does 'motivation' help with?", answers: ["еда", "погода", "учёба"], correct: 2 },
          { question: "Complete: I dream ___ being a doctor.", answers: ["of", "to", "for"], correct: 0 }
        ],
        fillGap: [
          { sentence: "My ___ (цель) is to speak English well.", answer: "goal" },
          { sentence: "I ___ (глагол: учиться) every day to improve.", answer: "study" },
          { sentence: "We need ___ (существительное: мотивация) to keep going.", answer: "motivation" },
          { sentence: "She ___ (глагол: хочет) to work abroad.", answer: "wants" }
        ],
        longAnswer: "Составь предложение о том, зачем ты учишь английский и какая у тебя цель."
      },      
      23: {
        title: "День 23. Учебные трудности",
        vocabulary: [
          "Problem — проблема",
          "Hard — трудно",
          "Forget — забывать",
          "Mistake — ошибка",
          "Confused — растерянный",
          "Busy — занятый",
          "Stress — стресс",
          "Solve — решать",
          "Ask for help — просить помощи",
          "Stay positive — сохранять позитив"
        ],
        audio: "audio/day23_en.mp3",
        example: [
          "“Sometimes I feel confused when I don't understand.”",
          "“I ask for help and try to stay positive.”"
        ],
        grammar: [
          "Sometimes / often / always + Present Simple",
          "ask for help, stay + adjective"
        ],
        listening: {
          audio: "audio/day23_en_listening.mp3",
          tests: [
            {
              question: "Why is Alex sometimes stressed?",
              options: ["He has too many lessons", "He forgets his homework", "He doesn't sleep"],
              answer: "He has too many lessons"
            },
            {
              question: "What does he do when he makes mistakes?",
              options: ["Gives up", "Tries again", "Leaves class"],
              answer: "Tries again"
            },
            {
              question: "Who helps him with difficult topics?",
              options: ["His teacher", "His dog", "His phone"],
              answer: "His teacher"
            }
          ]
        },
        tests: [
          { question: "What does 'problem' mean?", answers: ["решение", "проблема", "идея"], correct: 1 },
          { question: "Complete: I often ___ homework.", answers: ["forget", "forgets", "forgot"], correct: 0 },
          { question: "What does 'mistake' mean?", answers: ["успех", "ошибка", "задача"], correct: 1 },
          { question: "Complete: She is ___ because of stress.", answers: ["confused", "positive", "calm"], correct: 0 },
          { question: "What does 'stay positive' mean?", answers: ["грустить", "оставаться позитивным", "спать"], correct: 1 },
          { question: "Complete: We ___ for help when needed.", answers: ["ask", "asks", "asking"], correct: 0 }
        ],
        fillGap: [
          { sentence: "This ___ (существительное: проблема) is difficult to solve.", answer: "problem" },
          { sentence: "He makes a ___ (существительное: ошибка) sometimes.", answer: "mistake" },
          { sentence: "I feel ___ (прилагательное: растерянный) during the test.", answer: "confused" },
          { sentence: "She always ___ (глагол: просит) for help when needed.", answer: "asks" }
        ],
        longAnswer: "Составь предложение о том, с чем тебе трудно в учёбе и как ты с этим справляешься."
      },      
      24: {
        title: "День 24. Поддержка в обучении",
        vocabulary: [
          "Support — поддержка",
          "Friend — друг",
          "Class — урок, занятие",
          "Group work — работа в группе",
          "Team — команда",
          "Help — помощь",
          "Together — вместе",
          "Explain — объяснять",
          "Ask — спрашивать",
          "Learn better — учиться лучше"
        ],
        audio: "audio/day24_en.mp3",
        example: [
          "“I like working in a team because we help each other.”",
          "“Group work helps me understand the material better.”"
        ],
        grammar: [
          "because + причина: I learn better because my friends help me",
          "Present Simple в групповых действиях"
        ],
        listening: {
          audio: "audio/day24_en_listening.mp3",
          tests: [
            {
              question: "What helps Mia learn better?",
              options: ["Books", "Group work", "Music"],
              answer: "Group work"
            },
            {
              question: "Who explains the topic to her?",
              options: ["Her teacher", "Her friend", "Her brother"],
              answer: "Her friend"
            },
            {
              question: "How does she feel in the team?",
              options: ["Alone", "Supported", "Confused"],
              answer: "Supported"
            }
          ]
        },
        tests: [
          { question: "What does 'support' mean?", answers: ["помощь", "работа", "книга"], correct: 0 },
          { question: "Complete: We ___ in a team during class.", answers: ["work", "works", "working"], correct: 0 },
          { question: "What does 'together' mean?", answers: ["отдельно", "вместе", "долго"], correct: 1 },
          { question: "Complete: She always ___ her friends.", answers: ["helps", "help", "helping"], correct: 0 },
          { question: "What does 'group work' help with?", answers: ["понимание", "еда", "экзамен"], correct: 0 },
          { question: "Complete: I learn better ___ we help each other.", answers: ["because", "and", "so"], correct: 0 }
        ],
        fillGap: [
          { sentence: "I get ___ (поддержка) from my classmates.", answer: "support" },
          { sentence: "We ___ (глагол: работаем) together on projects.", answer: "work" },
          { sentence: "She ___ (глагол: объясняет) the rules to me.", answer: "explains" },
          { sentence: "Group work helps us ___ (глагол: учиться лучше).", answer: "learn better" }
        ],
        longAnswer: "Составь предложение о том, как тебе помогают в учёбе — кто, когда и чем именно."
      },   
      25:    {
        title: "День 25. Языковые курсы",
        vocabulary: [
          "Language course — языковой курс",
          "Level — уровень",
          "Learn fast — учиться быстро",
          "Classmates — однокурсники",
          "Native speaker — носитель языка",
          "Practice — практика",
          "Improve — улучшать",
          "Vocabulary — словарный запас",
          "Speaking — говорение",
          "Grammar — грамматика"
        ],
        audio: "audio/day25_en.mp3",
        example: [
          "“I go to a language course every week.”",
          "“Speaking with native speakers helps me improve.”"
        ],
        grammar: [
          "Present Simple + frequency: every week, often, always",
          "learn / improve / practice + noun"
        ],
        listening: {
          audio: "audio/day25_en_listening.mp3",
          tests: [
            {
              question: "What level is Dan's course?",
              options: ["A1", "A2", "B1"],
              answer: "A2"
            },
            {
              question: "What helps him improve speaking?",
              options: ["Grammar", "Vocabulary", "Practice"],
              answer: "Practice"
            },
            {
              question: "How often does he go to class?",
              options: ["Every day", "Every week", "Twice a week"],
              answer: "Every week"
            }
          ]
        },
        tests: [
          { question: "What does 'native speaker' mean?", answers: ["учитель", "носитель языка", "друг"], correct: 1 },
          { question: "Complete: I go to a ___ course.", answers: ["language", "school", "class"], correct: 0 },
          { question: "What does 'vocabulary' mean?", answers: ["запоминание", "лексика", "разговор"], correct: 1 },
          { question: "Complete: We ___ grammar in every lesson.", answers: ["practice", "practices", "practiced"], correct: 0 },
          { question: "What does 'speaking' mean?", answers: ["слушание", "чтение", "говорение"], correct: 2 },
          { question: "Complete: He wants to ___ fast.", answers: ["learn", "learning", "learns"], correct: 0 }
        ],
        fillGap: [
          { sentence: "This ___ (курс) is great for beginners.", answer: "language course" },
          { sentence: "We talk to a ___ (человек: носитель языка).", answer: "native speaker" },
          { sentence: "I want to ___ (глагол: улучшать) my speaking.", answer: "improve" },
          { sentence: "She learns ___ (лексика) every day.", answer: "vocabulary" }
        ],
        longAnswer: "Напиши короткий текст (2–3 предложения): ты ходишь на языковые курсы. Расскажи, что ты изучаешь и что тебе больше всего помогает."
      }, 
      26: {
        title: "День 26. Учёба в университете",
        vocabulary: [
          "University — университет",
          "Student — студент",
          "Major — специальность",
          "Lecture — лекция",
          "Exam — экзамен",
          "Library — библиотека",
          "Assignment — задание",
          "Research — исследование",
          "Campus — кампус",
          "Pass — сдать (экзамен)"
        ],
        audio: "audio/day26_en.mp3",
        example: [
          "“I study at the university and my major is biology.”",
          "“I often go to the library to prepare for exams.”"
        ],
        grammar: [
          "Present Simple в академическом контексте",
          "make / do / write + assignment / exam"
        ],
        listening: {
          audio: "audio/day26_en_listening.mp3",
          tests: [
            {
              question: "What is Maria’s major?",
              options: ["Biology", "History", "Law"],
              answer: "History"
            },
            {
              question: "Where does she do research?",
              options: ["At home", "In the library", "Online"],
              answer: "In the library"
            },
            {
              question: "What does she want to pass?",
              options: ["Her test", "Her project", "Her exam"],
              answer: "Her exam"
            }
          ]
        },
        tests: [
          { question: "What does 'major' mean?", answers: ["группа", "специальность", "уровень"], correct: 1 },
          { question: "Complete: I ___ at the university.", answers: ["study", "studies", "am study"], correct: 0 },
          { question: "What does 'assignment' mean?", answers: ["отдых", "задание", "лекция"], correct: 1 },
          { question: "Complete: She wants to ___ the exam.", answers: ["pass", "passes", "passed"], correct: 0 },
          { question: "What is 'campus'?", answers: ["здание", "кампус", "лекция"], correct: 1 },
          { question: "Complete: We ___ research in groups.", answers: ["do", "makes", "doing"], correct: 0 }
        ],
        fillGap: [
          { sentence: "My ___ (университет) is in Berlin.", answer: "university" },
          { sentence: "Her ___ (специальность) is chemistry.", answer: "major" },
          { sentence: "I write an ___ (задание) every week.", answer: "assignment" },
          { sentence: "We often go to the ___ (место: библиотека).", answer: "library" }
        ],
        longAnswer: "Напиши короткий текст (2–3 предложения): ты учишься в университете. Расскажи, на кого ты учишься и как проходят твои занятия."
      }, 
      27: {
        title: "День 27. Онлайн-проекты",
        vocabulary: [
          "Project — проект",
          "Topic — тема",
          "Presentation — презентация",
          "Teamwork — командная работа",
          "Deadline — срок сдачи",
          "Share ideas — делиться идеями",
          "Create — создавать",
          "Organize — организовывать",
          "Slide — слайд",
          "Prepare — готовить"
        ],
        audio: "audio/day27_en.mp3",
        example: [
          "“We are working on a project about climate change.”",
          "“Each student prepares a part of the presentation.”"
        ],
        grammar: [
          "Present Continuous для текущих действий",
          "make / give / prepare a presentation"
        ],
        listening: {
          audio: "audio/day27_en_listening.mp3",
          tests: [
            {
              question: "What is the project topic?",
              options: ["Technology", "Climate change", "History"],
              answer: "Climate change"
            },
            {
              question: "What does the team need to meet?",
              options: ["Teacher", "Deadline", "Library"],
              answer: "Deadline"
            },
            {
              question: "What does every student do?",
              options: ["Presents everything", "Prepares one part", "Works alone"],
              answer: "Prepares one part"
            }
          ]
        },
        tests: [
          { question: "What does 'teamwork' mean?", answers: ["презентация", "группа", "командная работа"], correct: 2 },
          { question: "Complete: We are ___ on a project.", answers: ["working", "work", "works"], correct: 0 },
          { question: "What does 'slide' mean?", answers: ["слайд", "текст", "картинка"], correct: 0 },
          { question: "Complete: He ___ ideas with classmates.", answers: ["shares", "share", "shared"], correct: 0 },
          { question: "What does 'deadline' mean?", answers: ["встреча", "конец", "срок сдачи"], correct: 2 },
          { question: "Complete: I ___ a presentation now.", answers: ["am preparing", "prepare", "prepares"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Our ___ (проект) is about animals.", answer: "project" },
          { sentence: "Each student ___ (глагол: готовить) a slide.", answer: "prepares" },
          { sentence: "We must meet the ___ (срок сдачи).", answer: "deadline" },
          { sentence: "They ___ (глагол: делиться) ideas online.", answer: "share" }
        ],
        longAnswer: "Напиши короткий текст (2–3 предложения): вы делаете онлайн-проект в команде. Расскажи, какая тема, кто чем занимается и как вы работаете вместе."
      },       
      28: {
        title: "День 28. Учёба за границей",
        vocabulary: [
          "Study abroad — учиться за границей",
          "Country — страна",
          "Experience — опыт",
          "Culture — культура",
          "Language — язык",
          "Meet new people — знакомиться с новыми людьми",
          "Live alone — жить одному",
          "Challenge — трудность",
          "Grow — расти (развиваться)",
          "Independent — независимый"
        ],
        audio: "audio/day28_en.mp3",
        example: [
          "“Studying abroad is a big challenge but also a great experience.”",
          "“I want to grow and become more independent.”"
        ],
        grammar: [
          "want to + verb",
          "Present Simple + Present Continuous mix"
        ],
        listening: {
          audio: "audio/day28_en_listening.mp3",
          tests: [
            {
              question: "Where does Anna want to study?",
              options: ["Germany", "France", "Canada"],
              answer: "Germany"
            },
            {
              question: "What is difficult for her?",
              options: ["Language", "Food", "Transport"],
              answer: "Language"
            },
            {
              question: "What does she enjoy?",
              options: ["Living alone", "Meeting new people", "Writing essays"],
              answer: "Meeting new people"
            }
          ]
        },
        tests: [
          { question: "What does 'independent' mean?", answers: ["независимый", "популярный", "пунктуальный"], correct: 0 },
          { question: "Complete: I want to ___ abroad.", answers: ["study", "studies", "studying"], correct: 0 },
          { question: "What does 'challenge' mean?", answers: ["цель", "трудность", "возможность"], correct: 1 },
          { question: "Complete: She ___ many new people.", answers: ["meets", "meet", "meeting"], correct: 0 },
          { question: "What does 'grow' mean in learning?", answers: ["расти", "терять", "прыгать"], correct: 0 },
          { question: "Complete: Studying abroad is a great ___.", answers: ["experience", "advice", "rule"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Many students want to ___ (глагол: учиться) abroad.", answer: "study" },
          { sentence: "Living in another ___ (страна) is interesting.", answer: "country" },
          { sentence: "We ___ (глагол: знакомиться) new people every day.", answer: "meet" },
          { sentence: "It’s a ___ (существительное: вызов), but we grow.", answer: "challenge" }
        ],
        longAnswer: "Напиши текст из 5 предложений: ты учишься за границей. Расскажи, где ты живёшь, что тебе сложно, что интересно и чему ты научился(ась)."
      },      
      29: {
        title: "День 29. Работа над проектами",
        vocabulary: [
          "Work on a project — работать над проектом",
          "Research — исследование",
          "Team — команда",
          "Share — делиться",
          "Responsibility — ответственность",
          "Presentation — презентация",
          "Deadline — срок сдачи",
          "Discuss — обсуждать",
          "Prepare — готовить",
          "Be proud — гордиться"
        ],
        audio: "audio/day29_en.mp3",
        example: [
          "“We are working on a project together in a team.”",
          "“I’m proud of what we have created.”"
        ],
        grammar: [
          "Present Continuous + teamwork",
          "to be proud of"
        ],
        listening: {
          audio: "audio/day29_en_listening.mp3",
          tests: [
            {
              question: "What is the topic of Tom’s project?",
              options: ["Sports", "History", "Environment"],
              answer: "Environment"
            },
            {
              question: "What does his team do every week?",
              options: ["Presents", "Discusses ideas", "Takes tests"],
              answer: "Discusses ideas"
            },
            {
              question: "Why is Tom proud?",
              options: ["He got an A", "He finished early", "They worked together"],
              answer: "They worked together"
            }
          ]
        },
        tests: [
          { question: "What does 'responsibility' mean?", answers: ["обязанность", "встреча", "результат"], correct: 0 },
          { question: "Complete: We ___ working on our project now.", answers: ["are", "is", "am"], correct: 0 },
          { question: "What does 'be proud of' mean?", answers: ["бояться", "гордиться", "злиться"], correct: 1 },
          { question: "Complete: I ___ the presentation slides.", answers: ["prepare", "prepares", "preparing"], correct: 0 },
          { question: "What does 'discuss' mean?", answers: ["сдавать", "печатать", "обсуждать"], correct: 2 },
          { question: "Complete: They ___ ideas and plan together.", answers: ["share", "shares", "shared"], correct: 0 }
        ],
        fillGap: [
          { sentence: "We ___ (глагол: работать) on a project together.", answer: "work" },
          { sentence: "She ___ (глагол: обсуждать) the topic with us.", answer: "discusses" },
          { sentence: "This is our ___ (существительное: презентация).", answer: "presentation" },
          { sentence: "I feel ___ (прилагательное: гордый) of my team.", answer: "proud" }
        ],
        longAnswer: "Напиши текст из 5 предложений: вы работали над проектом. Расскажи, какая была тема, кто был в команде, как вы работали и чем ты гордишься."
      },     
      30: {
        title: "День 30. Мотивационное письмо",
        vocabulary: [
          "Motivation — мотивация",
          "University — университет",
          "Apply — подавать заявку",
          "Degree — степень (диплом)",
          "Study — учиться",
          "Future — будущее",
          "Goal — цель",
          "Language skills — языковые навыки",
          "Achieve — достигать",
          "Opportunity — возможность"
        ],
        audio: "audio/day30_en.mp3",
        example: [
          "“I want to study at university abroad and get a degree.”",
          "“This is a great opportunity to grow and achieve my goals.”"
        ],
        grammar: [
          "want to + verb",
          "to be interested in + noun / verb-ing"
        ],
        longAnswer: "Напиши мотивационное письмо из 10-12 предложений: кто ты, почему учишь английский, где хочешь учиться, чего хочешь достичь и как тебе поможет английский."
      }       
    },
    fr: { //франц
      1: {
        title: "День 1. Приветствия и базовые слова",
        vocabulary: [
          "Bonjour — здравствуйте / добрый день",
          "Bonsoir — добрый вечер",
          "Salut — привет",
          "Merci — спасибо",
          "S’il vous plaît — пожалуйста",
          "Au revoir — до свидания",
          "Le livre — книга",
          "Le professeur — преподаватель",
          "L’étudiant — студент",
          "La salle — аудитория / класс"
        ],
        audio: "audio/day1_fr.mp3",
        example: [
          "« Bonjour, je suis étudiant. » — Здравствуйте, я студент.",
          "« Le professeur est dans la salle. » — Преподаватель в аудитории."
        ],
        grammar: [
          "Артикли: le (муж. род), la (жен. род), l’ (перед гласной), les (множественное число)",
          "Глагол être (быть) в 1 лице ед. числа: je suis"
        ],
        tests: [
          { question: "Que veut dire « Bonjour » ?", answers: ["До свидания", "Добрый день", "Пожалуйста"], correct: 1 },
          { question: "Quel article convient : ___ professeur", answers: ["La", "L’", "Le"], correct: 2 },
          { question: "Complétez : Je ___ étudiant.", answers: ["es", "suis", "est"], correct: 1 }
        ],
        fill: [
          { sentence: "Le ___ est sur la table.", answer: "livre" },
          { sentence: "Je suis dans la ___.", answer: "salle" }
        ]
      },
      2: {
        title: "День 2. В университете",
        vocabulary: [
          "L’université — университет",
          "Le cahier — тетрадь",
          "Le stylo — ручка",
          "La table — стол",
          "L’étudiant — студент",
          "L’étudiante — студентка",
          "La classe — класс, аудитория",
          "Le cours — курс",
          "La chaise — стул",
          "Le professeur — преподаватель"
        ],
        audio: "audio/day2_fr.mp3",
        example: [
          "« J’ai un cours de français aujourd’hui. » — У меня сегодня урок французского.",
          "« L’étudiante a un cahier et un stylo. » — У студентки есть тетрадь и ручка."
        ],
        grammar: [
          "Глагол avoir (иметь), 1 и 3 лицо ед. числа: j’ai, il/elle a",
          "Простое множественное число: le cahier — les cahiers"
        ],
        tests: [
          { question: "Que veut dire « Le stylo » ?", answers: ["Карандаш", "Ручка", "Книга"], correct: 1 },
          { question: "Complétez : J’___ un cahier.", answers: ["ai", "es", "suis"], correct: 0 },
          { question: "Quel mot est au pluriel ?", answers: ["la chaise", "le cahier", "les étudiants"], correct: 2 }
        ]
      },    
      3:  {
        title: "День 3. Действия в аудитории",
        vocabulary: [
          "Lire — читать",
          "Écrire — писать",
          "Écouter — слушать",
          "Parler — говорить",
          "Étudier — учиться",
          "Le livre — книга",
          "La phrase — фраза",
          "La question — вопрос",
          "La réponse — ответ",
          "Le tableau — доска"
        ],
        audio: "audio/day3_fr.mp3",
        example: [
          "« J’écris une phrase au tableau. » — Я пишу фразу на доске.",
          "« Les étudiants écoutent le professeur. » — Студенты слушают преподавателя."
        ],
        grammar: [
          "Глаголы 1-й группы в настоящем времени: j’écoute, tu écoutes, il/elle écoute",
          "Порядок слов: подлежащее + глагол + дополнение"
        ],
        tests: [
          { question: "Que veut dire « Écrire » ?", answers: ["Говорить", "Писать", "Слушать"], correct: 1 },
          { question: "Complétez : Nous ___ une question.", answers: ["écoute", "écoutons", "écoutez"], correct: 1 },
          { question: "Quel mot est féminin ?", answers: ["le livre", "le tableau", "la phrase"], correct: 2 }
        ]
      },      
      4: {
        title: "День 4. Люди в университете",
        vocabulary: [
          "Le professeur — преподаватель",
          "L’étudiant — студент",
          "L’étudiante — студентка",
          "Le directeur — директор",
          "La secrétaire — секретарь",
          "Le camarade de classe — однокурсник",
          "Le bibliothécaire — библиотекарь (м.)",
          "La bibliothécaire — библиотекарь (ж.)",
          "L’assistant — ассистент",
          "La classe — класс, группа"
        ],
        audio: "audio/day4_fr.mp3",
        example: [
          "« Le directeur parle avec la secrétaire. » — Директор разговаривает с секретарём.",
          "« L’assistant aide le professeur. » — Ассистент помогает преподавателю."
        ],
        grammar: [
          "Род имён существительных и соответствующие артикли",
          "Согласование прилагательного с существительным (вводное, без тренировки)"
        ],
        tests: [
          { question: "Quel mot est féminin ?", answers: ["le professeur", "la secrétaire", "l’étudiant"], correct: 1 },
          { question: "Que fait l’assistant ?", answers: ["Aide", "Écrit", "Écoute"], correct: 0 },
          { question: "Complétez : Le professeur est dans la ___.", answers: ["classe", "secrétaire", "bibliothécaire"], correct: 0 }
        ]
      },
      5: {
        title: "День 5. Расписание, дни недели и время",
        vocabulary: [
          "Lundi — понедельник",
          "Mardi — вторник",
          "Mercredi — среда",
          "Jeudi — четверг",
          "Vendredi — пятница",
          "Le cours — курс",
          "L’heure — час",
          "Le jour — день",
          "Le matin — утро",
          "L’après-midi — день (после полудня)"
        ],
        audio: "audio/day5_fr.mp3",
        example: [
          "« Le cours commence à neuf heures. » — Курс начинается в девять часов.",
          "« J’ai cours le lundi matin. » — У меня занятия по понедельникам утром."
        ],
        grammar: [
          "Выражение времени: à + heure (à neuf heures)",
          "Определённые дни недели: le lundi = каждый понедельник"
        ],
        tests: [
          { question: "Que veut dire « Lundi » ?", answers: ["Среда", "Понедельник", "Четверг"], correct: 1 },
          { question: "Complétez : Le cours commence ___ neuf heures.", answers: ["à", "de", "le"], correct: 0 },
          { question: "Quel mot désigne la période après 12h ?", answers: ["le matin", "l’après-midi", "le soir"], correct: 1 }
        ]
      },
      6: {
        title: "День 6. Школьные предметы",
        vocabulary: [
          "les mathématiques — математика",
          "l'histoire — история",
          "la biologie — биология",
          "le français — французский язык",
          "l'anglais — английский язык",
          "l'art — искусство",
          "la musique — музыка",
          "le professeur — преподаватель",
          "la matière — предмет",
          "l'emploi du temps — расписание"
        ],
        audio: "audio/day6_fr.mp3",
        example: [
          "“Ma matière préférée est la biologie.” — Мой любимый предмет — биология.",
          "“L'emploi du temps est très chargé.” — Расписание очень плотное."
        ],
        grammar: [
          "Определённые артикли: le / la / l’ / les",
          "Спряжение глагола *être* в настоящем времени"
        ],
        tests: [
          { question: "Que signifie 'l'emploi du temps' ?", answers: ["расписание", "учебник", "парта"], correct: 0 },
          { question: "Complétez : La matière ___ est difficile.", answers: ["est", "suis", "êtes"], correct: 0 },
          { question: "Que signifie 'la matière' ?", answers: ["учитель", "предмет", "задание"], correct: 1 },
          { question: "Complétez : Mon professeur ___ gentil.", answers: ["est", "sont", "es"], correct: 0 },
          { question: "Que signifie 'les mathématiques' ?", answers: ["наука", "математика", "язык"], correct: 1 },
          { question: "Complétez : J’aime ___ musique.", answers: ["la", "le", "les"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Mon ___ (предмет) préféré est l’histoire.", answer: "sujet" },
          { sentence: "Le ___ (учитель) est très sympa.", answer: "professeur" },
          { sentence: "Voici mon ___ (расписание).", answer: "emploi du temps" },
          { sentence: "Nous avons ___ (урок) de biologie aujourd’hui.", answer: "cours" }
        ]
      },      
      7: {
        title: "День 7. Оценки и экзамены",
        vocabulary: [
          "la note — оценка",
          "l'examen — экзамен",
          "le test — тест",
          "réussir — сдать (экзамен)",
          "échouer — провалить",
          "difficile — сложный",
          "facile — лёгкий",
          "étudier — учиться",
          "préparer — готовиться",
          "le résultat — результат"
        ],
        audio: "audio/day7_fr.mp3",
        example: [
          "“J’ai réussi l’examen de français.” — Я сдал экзамен по французскому.",
          "“Ce test est très difficile.” — Этот тест очень сложный."
        ],
        grammar: [
          "Глаголы 1-й группы в настоящем времени: -er",
          "*réussir* и *échouer* во втором спряжении"
        ],
        tests: [
          { question: "Que signifie 'réussir' ?", answers: ["сдать", "провалить", "забыть"], correct: 0 },
          { question: "Complétez : L’examen est très ___", answers: ["difficile", "rapide", "fort"], correct: 0 },
          { question: "Que signifie 'la note' ?", answers: ["экзамен", "оценка", "запись"], correct: 1 },
          { question: "Complétez : Il ___ son test.", answers: ["prépare", "prépares", "préparons"], correct: 0 },
          { question: "Que signifie 'échouer' ?", answers: ["сдать", "провалить", "проверить"], correct: 1 },
          { question: "Complétez : Le résultat ___ bon.", answers: ["est", "sont", "être"], correct: 0 }
        ],
        fillGap: [
          { sentence: "J’ai une bonne ___ (оценка).", answer: "note" },
          { sentence: "Nous ___ (глагол: готовиться) pour l’examen.", answer: "préparons" },
          { sentence: "Il ___ (глагол: сдать) le test avec succès.", answer: "réussit" },
          { sentence: "C’était un ___ (существительное: тест) difficile.", answer: "test" }
        ]
      },      
      8: {
        title: "День 8. Распорядок дня",
        vocabulary: [
          "se réveiller — просыпаться",
          "se lever — вставать",
          "prendre le petit-déjeuner — завтракать",
          "aller à l’école — идти в школу",
          "rentrer — возвращаться",
          "faire les devoirs — делать домашку",
          "se coucher — ложиться спать",
          "le matin — утро",
          "le soir — вечер",
          "chaque jour — каждый день"
        ],
        audio: "audio/day8_fr.mp3",
        example: [
          "“Je me réveille à 7 heures.” — Я просыпаюсь в 7 часов.",
          "“Le soir, je fais mes devoirs.” — Вечером я делаю домашние задания."
        ],
        grammar: [
          "Возвратные глаголы в настоящем времени",
          "Порядок действий в дне"
        ],
        tests: [
          { question: "Que signifie 'faire les devoirs' ?", answers: ["плавать", "делать домашку", "разговаривать"], correct: 1 },
          { question: "Complétez : Je me ___ à 7h.", answers: ["réveille", "lève", "mange"], correct: 0 },
          { question: "Que signifie 'rentrer' ?", answers: ["возвращаться", "отдыхать", "звонить"], correct: 0 },
          { question: "Complétez : Le matin, je ___ le petit-déjeuner.", answers: ["prends", "mange", "bois"], correct: 0 },
          { question: "Que signifie 'se coucher' ?", answers: ["идти в школу", "ложиться спать", "одеваться"], correct: 1 },
          { question: "Complétez : Je vais à l’école ___", answers: ["chaque jour", "tard", "seul"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je ___ (глагол: просыпаться) à 6h30.", answer: "me réveille" },
          { sentence: "Il ___ (глагол: возвращаться) à la maison à midi.", answer: "rentre" },
          { sentence: "Nous ___ (глагол: делаем) les devoirs ensemble.", answer: "faisons" },
          { sentence: "Elle ___ (глагол: ложиться спать) à 22h.", answer: "se couche" }
        ]
      },    
      9: {
        title: "День 9. Канцелярские принадлежности",
        vocabulary: [
          "le stylo — ручка",
          "le crayon — карандаш",
          "le cahier — тетрадь",
          "le sac — сумка",
          "la gomme — ластик",
          "la règle — линейка",
          "le livre — книга",
          "la table — стол",
          "la chaise — стул",
          "le tableau — доска"
        ],
        audio: "audio/day9_fr.mp3",
        example: [
          "“J’ai un stylo et un cahier dans mon sac.”",
          "“Le professeur écrit sur le tableau.”"
        ],
        grammar: [
          "Артикли un / une / le / la / mon / ma",
          "Il y a + предмет"
        ],
        tests: [
          { question: "Que signifie 'la gomme' ?", answers: ["линейка", "ластик", "карандаш"], correct: 1 },
          { question: "Complétez : J’ai un ___ dans ma trousse.", answers: ["crayon", "livre", "table"], correct: 0 },
          { question: "Que signifie 'le tableau' ?", answers: ["доска", "парта", "тест"], correct: 0 },
          { question: "Complétez : Il ___ un livre sur la table.", answers: ["y a", "est", "as"], correct: 0 },
          { question: "Que signifie 'le sac' ?", answers: ["стул", "сумка", "тетрадь"], correct: 1 },
          { question: "Complétez : La règle est ___ ma trousse.", answers: ["dans", "sur", "avec"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Voici mon ___ (вещь: тетрадь).", answer: "cahier" },
          { sentence: "Il écrit avec un ___ (вещь: ручка).", answer: "stylo" },
          { sentence: "J’ai une ___ (вещь: сумка) noire.", answer: "sac" },
          { sentence: "Le professeur écrit sur le ___ (объект: доска).", answer: "tableau" }
        ]
      },          
      10: {
        title: "День 10. Вопросы и ответы на уроке",
        vocabulary: [
          "la question — вопрос",
          "la réponse — ответ",
          "demander — спрашивать",
          "répondre — отвечать",
          "comprendre — понимать",
          "répéter — повторять",
          "expliquer — объяснять",
          "écouter — слушать",
          "dire — говорить",
          "aider — помогать"
        ],
        audio: "audio/day10_fr.mp3",
        example: [
          "“Je pose une question au professeur.” — Я задаю вопрос учителю.",
          "“Peux-tu répéter la réponse ?” — Можешь повторить ответ?"
        ],
        grammar: [
          "Глаголы 2-й и 3-й группы: comprendre, répondre, dire",
          "Вопросительные конструкции: Qu’est-ce que..., Est-ce que..."
        ],
        tests: [
          { question: "Que signifie 'expliquer' ?", answers: ["объяснять", "спрашивать", "читать"], correct: 0 },
          { question: "Complétez : Il ___ une réponse claire.", answers: ["donne", "fait", "mange"], correct: 0 },
          { question: "Que signifie 'écouter' ?", answers: ["слушать", "отвечать", "учить"], correct: 0 },
          { question: "Complétez : Tu peux ___ la phrase ?", answers: ["répéter", "écrire", "comprendre"], correct: 0 },
          { question: "Que signifie 'aider' ?", answers: ["помогать", "спать", "учить"], correct: 0 },
          { question: "Complétez : Il ne ___ pas la question.", answers: ["comprend", "comprends", "comprenne"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je pose une ___ (вопрос) au professeur.", answer: "question" },
          { sentence: "Peux-tu ___ (глагол: повторить) la réponse ?", answer: "répéter" },
          { sentence: "Nous ___ (глагол: слушать) attentivement.", answer: "écoutons" },
          { sentence: "Il ___ (глагол: помогает) ses camarades.", answer: "aide" }
        ]
      },      
      11: {
        title: "День 11. Учебные действия",
        vocabulary: [
          "écrire — писать",
          "lire — читать",
          "écouter — слушать",
          "parler — говорить",
          "ouvrir — открывать",
          "fermer — закрывать",
          "regarder — смотреть",
          "prendre — брать",
          "donner — давать",
          "montrer — показывать"
        ],
        audio: "audio/day11_fr.mp3",
        example: [
          "“Je lis un livre à la bibliothèque.”",
          "“Peux-tu me montrer ton cahier ?”"
        ],
        grammar: [
          "Спряжение глаголов 1-й и 3-й группы в настоящем времени",
          "Императив: Ouvre ton livre !"
        ],
        tests: [
          { question: "Que signifie 'montrer' ?", answers: ["показать", "закрыть", "открыть"], correct: 0 },
          { question: "Complétez : Nous ___ nos livres.", answers: ["ouvrons", "ouvre", "ouvrent"], correct: 0 },
          { question: "Que signifie 'écrire' ?", answers: ["читать", "писать", "рисовать"], correct: 1 },
          { question: "Complétez : Il ___ un texte long.", answers: ["écrit", "lit", "ouvre"], correct: 0 },
          { question: "Que signifie 'donner' ?", answers: ["брать", "давать", "спрашивать"], correct: 1 },
          { question: "Complétez : Je ___ la réponse au professeur.", answers: ["donne", "demande", "parle"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je ___ (глагол: читаю) un livre en français.", answer: "lis" },
          { sentence: "Elle ___ (глагол: показывает) son cahier au prof.", answer: "montre" },
          { sentence: "Tu ___ (глагол: закрыть) la porte, s’il te plaît ?", answer: "fermes" },
          { sentence: "Nous ___ (глагол: пишем) une dictée.", answer: "écrivons" }
        ]
      },       
      12: {
        title: "День 12. Части тела и здоровье",
        vocabulary: [
          "la tête — голова",
          "le bras — рука",
          "la jambe — нога",
          "la main — кисть",
          "le pied — стопа",
          "l’œil — глаз",
          "l’oreille — ухо",
          "malade — больной",
          "fatigué — уставший",
          "le docteur — доктор"
        ],
        audio: "audio/day12_fr.mp3",
        example: [
          "“J’ai mal à la tête.”",
          "“Tu dois voir un docteur.”"
        ],
        grammar: [
          "Оборот avoir mal à + часть тела",
          "Согласование прилагательных с родом"
        ],
        tests: [
          { question: "Que signifie 'le pied' ?", answers: ["нога", "голова", "стопа"], correct: 2 },
          { question: "Complétez : J’ai mal ___ tête.", answers: ["à la", "au", "à le"], correct: 0 },
          { question: "Que signifie 'malade' ?", answers: ["усталый", "больной", "грустный"], correct: 1 },
          { question: "Complétez : Elle est très ___ aujourd’hui.", answers: ["fatiguée", "fatigué", "fatigués"], correct: 0 },
          { question: "Que signifie 'le docteur' ?", answers: ["учитель", "больница", "врач"], correct: 2 },
          { question: "Complétez : Il a mal ___ jambe.", answers: ["à la", "au", "aux"], correct: 0 }
        ],
        fillGap: [
          { sentence: "J’ai mal à l’___ (часть тела: глаз).", answer: "œil" },
          { sentence: "Elle est ___ (прилагательное: усталая) aujourd’hui.", answer: "fatiguée" },
          { sentence: "Tu dois voir un ___ (врач).", answer: "docteur" },
          { sentence: "Il a mal au ___ (часть тела: стопа).", answer: "pied" }
        ]
      },    
      13: {
        title: "День 13. Продукты и напитки",
        vocabulary: [
          "le pain — хлеб",
          "le beurre — масло",
          "le fromage — сыр",
          "l’œuf — яйцо",
          "le fruit — фрукт",
          "le légume — овощ",
          "l’eau — вода",
          "le jus — сок",
          "le lait — молоко",
          "le thé — чай"
        ],
        audio: "audio/day13_fr.mp3",
        example: [
          "“Je bois du thé avec du lait.”",
          "“J’aime les fruits et les légumes.”"
        ],
        grammar: [
          "Partitifs: du / de la / de l’ / des",
          "Глаголы aimer, boire, manger"
        ],
        tests: [
          { question: "Que signifie 'le beurre' ?", answers: ["сыр", "масло", "хлеб"], correct: 1 },
          { question: "Complétez : Elle boit ___ jus d’orange.", answers: ["du", "le", "des"], correct: 0 },
          { question: "Que signifie 'le thé' ?", answers: ["сок", "молоко", "чай"], correct: 2 },
          { question: "Complétez : Nous mangeons ___ légumes.", answers: ["des", "de", "du"], correct: 0 },
          { question: "Que signifie 'l’œuf' ?", answers: ["вода", "яйцо", "овощ"], correct: 1 },
          { question: "Complétez : Tu bois ___ eau ?", answers: ["de l’", "du", "des"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je mange du ___ (еда: хлеб) le matin.", answer: "pain" },
          { sentence: "Il boit du ___ (напиток: сок).", answer: "jus" },
          { sentence: "Nous mangeons un ___ (еда: яйцо) dur.", answer: "œuf" },
          { sentence: "Elle aime le ___ (еда: сыр).", answer: "fromage" }
        ]
      },        
      14: {
        title: "День 14. Покупки и цены",
        vocabulary: [
          "le magasin — магазин",
          "acheter — покупать",
          "vendre — продавать",
          "l’argent — деньги",
          "le prix — цена",
          "bon marché — дешёвый",
          "cher — дорогой",
          "en espèces — наличными",
          "payer — платить",
          "la monnaie — сдача"
        ],
        audio: "audio/day14_fr.mp3",
        example: [
          "“Combien ça coûte ?”",
          "“Je paie en espèces.”"
        ],
        grammar: [
          "Глаголы acheter, payer, coûter",
          "Вопросы с combien / combien ça coûte ?"
        ],
        tests: [
          { question: "Que signifie 'cher' ?", answers: ["дешёвый", "дорогой", "бесплатный"], correct: 1 },
          { question: "Complétez : Je ___ une baguette.", answers: ["achète", "vends", "mange"], correct: 0 },
          { question: "Que signifie 'la monnaie' ?", answers: ["монета", "сдача", "бумага"], correct: 1 },
          { question: "Complétez : Tu ___ en espèces ?", answers: ["paies", "donnes", "portes"], correct: 0 },
          { question: "Que signifie 'le prix' ?", answers: ["сумма", "цена", "стоимость"], correct: 1 },
          { question: "Complétez : Combien ___ ce livre ?", answers: ["coûte", "coûtent", "payer"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Ce livre est très ___ (прилагательное: дорогой).", answer: "cher" },
          { sentence: "Elle ___ (глагол: покупает) une robe rouge.", answer: "achète" },
          { sentence: "Tu ___ (глагол: платишь) par carte ?", answer: "paies" },
          { sentence: "Quel est le ___ (цена) de cette chemise ?", answer: "prix" }
        ]
      },     
      15: {
        title: "День 15. Повседневная жизнь",
        vocabulary: [
          "le matin — утро",
          "se réveiller — просыпаться",
          "se lever — вставать",
          "prendre le petit-déjeuner — завтракать",
          "aller en cours — идти на занятия",
          "déjeuner — обедать",
          "étudier — учиться",
          "rentrer à la maison — возвращаться домой",
          "le soir — вечер",
          "se coucher — ложиться спать"
        ],
        audio: "audio/day15_fr.mp3",
        example: [
          "“Je me lève à 7 heures et je vais en cours à 8 heures.”",
          "“Le soir, j’étudie un peu et je me couche à 23 heures.”"
        ],
        grammar: [
          "Возвратные глаголы в настоящем времени",
          "Хронология действий (le matin / l’après-midi / le soir)"
        ],
        listening: {
          audio: "audio/day15_fr_listening.mp3",
          tests: [
            {
              question: "À quelle heure Paul se réveille-t-il ?",
              options: ["À 6h", "À 7h", "À 8h"],
              answer: "À 7h"
            },
            {
              question: "Que fait-il après le déjeuner ?",
              options: ["Il dort", "Il étudie", "Il regarde la télé"],
              answer: "Il étudie"
            },
            {
              question: "À quelle heure se couche-t-il ?",
              options: ["À 21h", "À 22h", "À 23h"],
              answer: "À 23h"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'déjeuner' ?", answers: ["завтракать", "обедать", "ужинать"], correct: 1 },
          { question: "Complétez : Je me ___ à 7 heures.", answers: ["réveille", "réveilles", "réveillent"], correct: 0 },
          { question: "Que signifie 'se coucher' ?", answers: ["ложиться спать", "просыпаться", "учиться"], correct: 0 },
          { question: "Complétez : Nous ___ à la maison à 17h.", answers: ["rentrons", "retournons", "restons"], correct: 0 },
          { question: "Que signifie 'le soir' ?", answers: ["утро", "день", "вечер"], correct: 2 },
          { question: "Complétez : Il ___ le petit-déjeuner à 8h.", answers: ["prend", "mange", "boit"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je me ___ (глагол: просыпаться) à 7h.", answer: "réveille" },
          { sentence: "Il ___ (глагол: учиться) l’après-midi.", answer: "étudie" },
          { sentence: "Nous ___ (глагол: возвращаться) à la maison le soir.", answer: "rentrons" },
          { sentence: "Elle ___ (глагол: ложиться спать) à 22h.", answer: "se couche" }
        ]
      },
      16: {
        title: "День 16. Учёба в университете",
        vocabulary: [
          "l’université — университет",
          "le cours — занятие",
          "le professeur — преподаватель",
          "la salle — аудитория",
          "étudier — учиться",
          "faire des recherches — делать исследования",
          "écrire un devoir — писать работу",
          "passer un examen — сдавать экзамен",
          "le semestre — семестр",
          "la pause — перерыв"
        ],
        audio: "audio/day16_fr.mp3",
        example: [
          "“J’étudie à l’université de Lyon.”",
          "“Nous avons un examen à la fin du semestre.”"
        ],
        grammar: [
          "Глаголы с существительными: faire des recherches, passer un examen",
          "Le / la / les с университетскими словами"
        ],
        listening: {
          audio: "audio/day16_fr_listening.mp3",
          tests: [
            {
              question: "Où étudie Clara ?",
              options: ["À Lyon", "À Marseille", "À Paris"],
              answer: "À Paris"
            },
            {
              question: "Que fait-elle pendant le semestre ?",
              options: ["Elle voyage", "Elle écrit des devoirs", "Elle dort"],
              answer: "Elle écrit des devoirs"
            },
            {
              question: "Quand a-t-elle un examen ?",
              options: ["Au début", "À la pause", "À la fin"],
              answer: "À la fin"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'le semestre' ?", answers: ["семестр", "занятие", "предмет"], correct: 0 },
          { question: "Complétez : Il ___ à l’université.", answers: ["étudie", "études", "étudiant"], correct: 0 },
          { question: "Que signifie 'faire des recherches' ?", answers: ["делать домашку", "делать исследования", "гулять"], correct: 1 },
          { question: "Complétez : Nous ___ un devoir en groupe.", answers: ["écrivons", "lisons", "prenons"], correct: 0 },
          { question: "Que signifie 'passer un examen' ?", answers: ["провалить тест", "сдавать экзамен", "готовить еду"], correct: 1 },
          { question: "Complétez : La ___ est à 11h.", answers: ["pause", "classe", "réunion"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Il ___ (глагол: учиться) à l’université de Toulouse.", answer: "étudie" },
          { sentence: "Elle ___ (глагол: сдаёт) un examen demain.", answer: "passe" },
          { sentence: "Nous faisons ___ (исследования) sur l’histoire.", answer: "des recherches" },
          { sentence: "Je ___ (глагол: пишу) un devoir important.", answer: "écris" }
        ]
      },    
      17: {
        title: "День 17. Учебная группа",
        vocabulary: [
          "le groupe — группа",
          "les camarades — одногруппники",
          "travailler ensemble — работать вместе",
          "aider — помогать",
          "poser une question — задавать вопрос",
          "répondre — отвечать",
          "expliquer — объяснять",
          "partager — делиться",
          "écouter — слушать",
          "coopérer — сотрудничать"
        ],
        audio: "audio/day17_fr.mp3",
        example: [
          "“Nous travaillons ensemble pour le projet.”",
          "“Je pose une question à mes camarades.”"
        ],
        grammar: [
          "Nous + глагол в настоящем времени",
          "Сложные глагольные конструкции: poser une question, travailler ensemble"
        ],
        listening: {
          audio: "audio/day17_fr_listening.mp3",
          tests: [
            {
              question: "Combien d’étudiants sont dans le groupe de Léa ?",
              options: ["3", "5", "6"],
              answer: "5"
            },
            {
              question: "Que font-ils ensemble ?",
              options: ["Ils mangent", "Ils travaillent", "Ils dorment"],
              answer: "Ils travaillent"
            },
            {
              question: "Pourquoi Léa aime son groupe ?",
              options: ["Ils sont drôles", "Ils sont utiles", "Ils sont silencieux"],
              answer: "Ils sont utiles"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'travailler ensemble' ?", answers: ["работать вместе", "отдыхать", "учить"], correct: 0 },
          { question: "Complétez : Nous ___ en équipe.", answers: ["travaillons", "travaillez", "travailler"], correct: 0 },
          { question: "Que signifie 'poser une question' ?", answers: ["отвечать", "задавать вопрос", "слушать"], correct: 1 },
          { question: "Complétez : Elle ___ une question au prof.", answers: ["pose", "donne", "fait"], correct: 0 },
          { question: "Que signifie 'partager' ?", answers: ["брать", "делиться", "спрашивать"], correct: 1 },
          { question: "Complétez : Ils ___ les réponses.", answers: ["partagent", "parlent", "disent"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Nous ___ (глагол: работаем) ensemble sur le projet.", answer: "travaillons" },
          { sentence: "Elle ___ (глагол: задаёт) une question difficile.", answer: "pose" },
          { sentence: "Tu ___ (глагол: делишься) tes idées ?", answer: "partages" },
          { sentence: "Ils ___ (глагол: помогают) les autres élèves.", answer: "aident" }
        ]
      },       
      18: {
        title: "День 18. Онлайн-занятия",
        vocabulary: [
          "en ligne — онлайн",
          "la visioconférence — видеозвонок",
          "le lien — ссылка",
          "le micro — микрофон",
          "la caméra — камера",
          "se connecter — подключаться",
          "partager l’écran — делиться экраном",
          "problème technique — техническая проблема",
          "le cours virtuel — виртуальное занятие",
          "discuter — обсуждать"
        ],
        audio: "audio/day18_fr.mp3",
        example: [
          "“Le cours est en ligne aujourd’hui.”",
          "“Je me connecte avec un lien Zoom.”"
        ],
        grammar: [
          "Les articles définis avec la technologie",
          "Verbes pronominaux: se connecter"
        ],
        listening: {
          audio: "audio/day18_fr_listening.mp3",
          tests: [
            {
              question: "Quel outil utilisent-ils pour le cours ?",
              options: ["Skype", "Zoom", "Teams"],
              answer: "Zoom"
            },
            {
              question: "Quel est le problème de Marc ?",
              options: ["Son micro", "Sa caméra", "Sa connexion"],
              answer: "Son micro"
            },
            {
              question: "Qui partage l’écran ?",
              options: ["Le professeur", "Marc", "Un étudiant"],
              answer: "Le professeur"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'se connecter' ?", answers: ["отключиться", "подключиться", "разговаривать"], correct: 1 },
          { question: "Complétez : Je ___ à la visioconférence.", answers: ["me connecte", "connecte", "connectes"], correct: 0 },
          { question: "Que signifie 'problème technique' ?", answers: ["расписание", "ошибка", "техническая проблема"], correct: 2 },
          { question: "Complétez : Il partage ___ écran.", answers: ["son", "le", "un"], correct: 0 },
          { question: "Que signifie 'en ligne' ?", answers: ["онлайн", "в классе", "в комнате"], correct: 0 },
          { question: "Complétez : Le micro ___ cassé.", answers: ["est", "a", "fait"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Le cours est ___ (слово: онлайн).", answer: "en ligne" },
          { sentence: "Je me ___ (глагол: подключаться) à 10h.", answer: "connecte" },
          { sentence: "Le prof ___ (глагол: делиться) son écran.", answer: "partage" },
          { sentence: "Marc a un ___ (проблема) avec son micro.", answer: "problème" }
        ]
      },               
      19: {
        title: "День 19. Повторение перед экзаменом",
        vocabulary: [
          "réviser — повторять",
          "relire — перечитывать",
          "noter — записывать",
          "la fiche — карточка",
          "le résumé — конспект",
          "le point important — важный пункт",
          "se concentrer — концентрироваться",
          "être prêt — быть готовым",
          "avoir peur — бояться",
          "réussir — сдать"
        ],
        audio: "audio/day19_fr.mp3",
        example: [
          "“Je révise mes fiches tous les soirs.”",
          "“Je veux réussir mon examen.”"
        ],
        grammar: [
          "Verbes pronominaux: se concentrer",
          "Avoir + nom : avoir peur, avoir envie"
        ],
        listening: {
          audio: "audio/day19_fr_listening.mp3",
          tests: [
            {
              question: "Qu’est-ce que Julie utilise pour réviser ?",
              options: ["Des vidéos", "Des fiches", "Un livre"],
              answer: "Des fiches"
            },
            {
              question: "Quand est son examen ?",
              options: ["Demain", "Aujourd’hui", "La semaine prochaine"],
              answer: "Demain"
            },
            {
              question: "Comment se sent-elle ?",
              options: ["Stressée", "Fatiguée", "Prête"],
              answer: "Stressée"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'réviser' ?", answers: ["отдыхать", "повторять", "слушать"], correct: 1 },
          { question: "Complétez : Elle ___ ses fiches chaque soir.", answers: ["révise", "révises", "révisent"], correct: 0 },
          { question: "Que signifie 'avoir peur' ?", answers: ["бояться", "смеяться", "плакать"], correct: 0 },
          { question: "Complétez : Je ___ prêt pour l’examen.", answers: ["suis", "est", "être"], correct: 0 },
          { question: "Que signifie 'le résumé' ?", answers: ["тест", "конспект", "вопрос"], correct: 1 },
          { question: "Complétez : Elle se ___ avant le test.", answers: ["concentre", "concentrent", "concentrer"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je ___ (глагол: повторяю) chaque jour.", answer: "révise" },
          { sentence: "Tu ___ (глагол: боишься) un peu ?", answer: "as peur" },
          { sentence: "Nous faisons un ___ (существительное: конспект).", answer: "résumé" },
          { sentence: "Elle se ___ (глагол: концентрируется) bien.", answer: "concentre" }
        ]
      }, 
      20: {
        title: "День 20. Учёба в библиотеке",
        vocabulary: [
          "la bibliothèque — библиотека",
          "le silence — тишина",
          "chercher un livre — искать книгу",
          "lire — читать",
          "écrire — писать",
          "réviser — повторять",
          "les documents — документы",
          "travailler seul — работать в одиночку",
          "être concentré — быть сосредоточенным",
          "faire une pause — делать перерыв"
        ],
        audio: "audio/day20_fr.mp3",
        example: [
          "“Je travaille seul à la bibliothèque.”",
          "“Je fais une pause après une heure.”"
        ],
        grammar: [
          "être concentré / travailler seul",
          "les verbes: lire, chercher, réviser"
        ],
        listening: {
          audio: "audio/day20_fr_listening.mp3",
          tests: [
            {
              question: "Où travaille Marc ?",
              options: ["À la maison", "À la bibliothèque", "Au café"],
              answer: "À la bibliothèque"
            },
            {
              question: "Qu’est-ce qu’il fait après une heure ?",
              options: ["Il mange", "Il fait une pause", "Il dort"],
              answer: "Il fait une pause"
            },
            {
              question: "Pourquoi il aime cet endroit ?",
              options: ["C’est silencieux", "C’est lumineux", "C’est moderne"],
              answer: "C’est silencieux"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'réviser' ?", answers: ["писать", "повторять", "отдыхать"], correct: 1 },
          { question: "Complétez : Je ___ un livre important.", answers: ["cherche", "cherchez", "cherchons"], correct: 0 },
          { question: "Que signifie 'faire une pause' ?", answers: ["продолжать", "делать перерыв", "играть"], correct: 1 },
          { question: "Complétez : Il ___ concentré.", answers: ["est", "sont", "êtes"], correct: 0 },
          { question: "Que signifie 'les documents' ?", answers: ["книги", "документы", "тетради"], correct: 1 },
          { question: "Complétez : Elle ___ seule.", answers: ["travaille", "travail", "travailles"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je vais à la ___ (место: библиотека) le matin.", answer: "bibliothèque" },
          { sentence: "Nous ___ (глагол: повторять) pour l’examen.", answer: "révisons" },
          { sentence: "Il ___ (глагол: читает) un article.", answer: "lit" },
          { sentence: "Tu ___ (глагол: пишешь) une fiche ? ", answer: "écris" }
        ],
        longAnswer: "Составь простое предложение: как ты учишься в библиотеке и что ты там делаешь."
      },            
      21: {
        title: "День 21. Подготовка к контрольной",
        vocabulary: [
          "la révision — повторение",
          "le test — контрольная",
          "noter — записывать",
          "relire — перечитывать",
          "se préparer — готовиться",
          "connaître — знать",
          "mémoriser — запоминать",
          "le sujet — тема",
          "le corrigé — правильные ответы",
          "réussir — сдать"
        ],
        audio: "audio/day21_fr.mp3",
        example: [
          "“Je me prépare pour le test de français.”",
          "“Je relis tous les sujets importants.”"
        ],
        grammar: [
          "Verbes réfléchis: se préparer",
          "Révision de futur proche"
        ],
        listening: {
          audio: "audio/day21_fr_listening.mp3",
          tests: [
            {
              question: "À quelle matière se prépare Emma ?",
              options: ["L’anglais", "L’histoire", "Le français"],
              answer: "Le français"
            },
            {
              question: "Que fait-elle pour mémoriser ?",
              options: ["Elle lit", "Elle relit", "Elle écrit"],
              answer: "Elle relit"
            },
            {
              question: "Quel est son objectif ?",
              options: ["Réviser vite", "Réussir", "Dormir tôt"],
              answer: "Réussir"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'réussir' ?", answers: ["сдать", "провалить", "прогулять"], correct: 0 },
          { question: "Complétez : Il ___ tous les corrigés.", answers: ["lit", "relit", "répète"], correct: 1 },
          { question: "Que signifie 'sujet' ?", answers: ["тема", "вопрос", "ответ"], correct: 0 },
          { question: "Complétez : Je me ___ pour demain.", answers: ["prépare", "prépares", "préparé"], correct: 0 },
          { question: "Que signifie 'mémoriser' ?", answers: ["забывать", "учить", "запоминать"], correct: 2 },
          { question: "Complétez : Tu ___ tout le texte ?", answers: ["connais", "sais", "lis"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je me ___ (глагол: готовиться) pour le test.", answer: "prépare" },
          { sentence: "Il ___ (глагол: перечитывать) ses notes.", answer: "relit" },
          { sentence: "Nous ___ (глагол: записывать) les sujets clés.", answer: "notons" },
          { sentence: "Elle veut ___ (глагол: сдать) l’examen.", answer: "réussir" }
        ],
        longAnswer: "Составь предложение: как ты готовишься к контрольной и что тебе помогает."
      },          
      22: {
        title: "День 22. Помощь и объяснение",
        vocabulary: [
          "demander de l’aide — просить помощь",
          "expliquer — объяснять",
          "répondre — отвечать",
          "répéter — повторять",
          "comprendre — понимать",
          "poser une question — задать вопрос",
          "le camarade — одноклассник",
          "la réponse — ответ",
          "clair — ясный",
          "difficile — трудный"
        ],
        audio: "audio/day22_fr.mp3",
        example: [
          "“Je demande de l’aide au professeur.”",
          "“Le camarade explique bien la réponse.”"
        ],
        grammar: [
          "demander à + personne, répondre à",
          "Adjectifs: clair, difficile"
        ],
        listening: {
          audio: "audio/day22_fr_listening.mp3",
          tests: [
            {
              question: "Qui aide Thomas ?",
              options: ["Son professeur", "Son camarade", "Sa sœur"],
              answer: "Son camarade"
            },
            {
              question: "Pourquoi il pose une question ?",
              options: ["C’est difficile", "Il est fatigué", "Il veut participer"],
              answer: "C’est difficile"
            },
            {
              question: "Comment est la réponse ?",
              options: ["Longue", "Claire", "Rapide"],
              answer: "Claire"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'clair' ?", answers: ["ясный", "медленный", "короткий"], correct: 0 },
          { question: "Complétez : Je ___ une question au prof.", answers: ["pose", "donne", "dis"], correct: 0 },
          { question: "Que signifie 'répéter' ?", answers: ["писать", "повторять", "рисовать"], correct: 1 },
          { question: "Complétez : Elle ___ bien la règle.", answers: ["explique", "répond", "comprend"], correct: 0 },
          { question: "Que signifie 'difficile' ?", answers: ["простой", "трудный", "новый"], correct: 1 },
          { question: "Complétez : Je ne ___ pas cette phrase.", answers: ["comprends", "sais", "lis"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Il ___ (глагол: просит) de l’aide.", answer: "demande" },
          { sentence: "Elle ___ (глагол: объяснять) très bien.", answer: "explique" },
          { sentence: "Tu ___ (глагол: понимаешь) cet exercice ?", answer: "comprends" },
          { sentence: "Je ___ (глагол: повторяю) la question.", answer: "répète" }
        ],
        longAnswer: "Составь предложение: когда ты просишь помощь и кто тебе объясняет материал."
      },       
      23: {
        title: "День 23. Учитель и обратная связь",
        vocabulary: [
          "le professeur — преподаватель",
          "donner un conseil — давать совет",
          "corriger — исправлять",
          "indiquer une erreur — указывать ошибку",
          "encourager — поощрять",
          "faire un commentaire — делать замечание",
          "proposer une solution — предложить решение",
          "évaluer — оценивать",
          "le progrès — прогресс",
          "améliorer — улучшать"
        ],
        audio: "audio/day23_fr.mp3",
        example: [
          "“Le professeur corrige mes erreurs.”",
          "“Il m’encourage à continuer.”"
        ],
        grammar: [
          "donner un conseil / faire un commentaire",
          "le / la / les + nom abstrait (le progrès)"
        ],
        listening: {
          audio: "audio/day23_fr_listening.mp3",
          tests: [
            {
              question: "Que fait le professeur ?",
              options: ["Il note", "Il encourage", "Il corrige"],
              answer: "Il corrige"
            },
            {
              question: "Pourquoi il fait un commentaire ?",
              options: ["Pour évaluer", "Pour corriger", "Pour aider"],
              answer: "Pour aider"
            },
            {
              question: "Qu’est-ce que Sophie veut ?",
              options: ["Améliorer", "Arrêter", "Changer de classe"],
              answer: "Améliorer"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'corriger' ?", answers: ["исправлять", "комментировать", "записывать"], correct: 0 },
          { question: "Complétez : Le prof ___ mes progrès.", answers: ["évalue", "fait", "prend"], correct: 0 },
          { question: "Que signifie 'encourager' ?", answers: ["останавливать", "поощрять", "отвечать"], correct: 1 },
          { question: "Complétez : Elle ___ une solution.", answers: ["propose", "explique", "donne"], correct: 0 },
          { question: "Que signifie 'améliorer' ?", answers: ["запоминать", "улучшать", "повторять"], correct: 1 },
          { question: "Complétez : Il ___ une erreur importante.", answers: ["indique", "ouvre", "note"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Le prof ___ (глагол: исправляет) mes erreurs.", answer: "corrige" },
          { sentence: "Il ___ (глагол: поощряет) les efforts.", answer: "encourage" },
          { sentence: "Nous ___ (глагол: предлагаем) une solution.", answer: "proposons" },
          { sentence: "Tu ___ (глагол: улучшаешь) ton niveau.", answer: "améliores" }
        ],
        longAnswer: "Составь предложение: что делает твой преподаватель, чтобы помочь тебе учиться лучше."
      },     
      24: {
        title: "День 24. Учёба с друзьями",
        vocabulary: [
          "l’ami(e) — друг (подруга)",
          "étudier ensemble — учиться вместе",
          "se motiver — мотивировать друг друга",
          "se corriger — исправлять друг друга",
          "partager les idées — делиться идеями",
          "comprendre mieux — понимать лучше",
          "poser des questions — задавать вопросы",
          "répondre ensemble — отвечать вместе",
          "s’encourager — поддерживать друг друга",
          "aider à progresser — помогать прогрессировать"
        ],
        audio: "audio/day24_fr.mp3",
        example: [
          "“Nous étudions ensemble et nous partageons nos idées.”",
          "“Mes amis m’aident à progresser.”"
        ],
        grammar: [
          "Les verbes pronominaux pluriels (se motiver, s’encourager)",
          "Nous + глагол"
        ],
        listening: {
          audio: "audio/day24_fr_listening.mp3",
          tests: [
            {
              question: "Avec qui étudie Julie ?",
              options: ["Avec sa sœur", "Avec ses amis", "Seule"],
              answer: "Avec ses amis"
            },
            {
              question: "Pourquoi elle aime travailler en groupe ?",
              options: ["Pour parler", "Pour se motiver", "Pour jouer"],
              answer: "Pour se motiver"
            },
            {
              question: "Qu’est-ce qu’ils font ensemble ?",
              options: ["Ils jouent", "Ils écoutent", "Ils partagent des idées"],
              answer: "Ils partagent des idées"
            }
          ]
        },
        tests: [
          { question: "Que signifie 's’encourager' ?", answers: ["играть", "поощрять друг друга", "отдыхать"], correct: 1 },
          { question: "Complétez : Nous ___ ensemble tous les soirs.", answers: ["étudions", "étudiez", "étudier"], correct: 0 },
          { question: "Que signifie 'partager les idées' ?", answers: ["делиться идеями", "писать идеи", "задавать вопросы"], correct: 0 },
          { question: "Complétez : Ils ___ les réponses ensemble.", answers: ["répondent", "réponds", "répondez"], correct: 0 },
          { question: "Que signifie 'se corriger' ?", answers: ["исправлять себя", "сравнивать", "повторять"], correct: 0 },
          { question: "Complétez : Mes amis m’___ à progresser.", answers: ["aident", "encouragent", "expliquent"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Nous ___ (глагол: учимся) ensemble chaque semaine.", answer: "étudions" },
          { sentence: "Ils ___ (глагол: делятся) leurs idées.", answer: "partagent" },
          { sentence: "Je ___ (глагол: получаю помощь) de mes amis.", answer: "reçois" },
          { sentence: "On ___ (глагол: мотивируем) mutuellement.", answer: "se motive" }
        ],
        longAnswer: "Составь предложение: как ты учишься с друзьями и чем полезна такая учёба."
      },  
      25: {
        title: "День 25. Моя любимая matière",
        vocabulary: [
          "préféré — любимый",
          "la matière — предмет",
          "intéressant — интересный",
          "utile — полезный",
          "aimer — любить",
          "facile — лёгкий",
          "difficile — трудный",
          "apprendre — учить",
          "comprendre — понимать",
          "le professeur — преподаватель"
        ],
        audio: "audio/day25_fr.mp3",
        example: [
          "“Ma matière préférée est l’histoire, c’est très intéressant.”",
          "“J’aime le professeur aussi.”"
        ],
        grammar: [
          "Ma matière préférée est...",
          "Pourquoi tu aimes ce cours ?"
        ],
        listening: {
          audio: "audio/day25_fr_listening.mp3",
          tests: [
            {
              question: "Quelle est la matière préférée de Hugo ?",
              options: ["La biologie", "L’histoire", "Le français"],
              answer: "L’histoire"
            },
            {
              question: "Pourquoi il aime ce cours ?",
              options: ["C’est utile", "C’est facile", "C’est intéressant"],
              answer: "C’est intéressant"
            },
            {
              question: "Qu’est-ce qu’il pense du professeur ?",
              options: ["Il est drôle", "Il est sympa", "Il est strict"],
              answer: "Il est sympa"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'matière' ?", answers: ["учебник", "предмет", "домашка"], correct: 1 },
          { question: "Complétez : Ma matière ___ est le français.", answers: ["préférée", "préféré", "préférés"], correct: 0 },
          { question: "Que signifie 'comprendre' ?", answers: ["запоминать", "повторять", "понимать"], correct: 2 },
          { question: "Complétez : Le cours est très ___", answers: ["intéressant", "intéressé", "intéresse"], correct: 0 },
          { question: "Que signifie 'le professeur' ?", answers: ["ученик", "учитель", "родитель"], correct: 1 },
          { question: "Complétez : J’___ bien cette matière.", answers: ["aime", "aimes", "aimer"], correct: 0 }
        ],
        fillGap: [
          { sentence: "C’est mon ___ (любимый) cours.", answer: "préféré" },
          { sentence: "Nous ___ (глагол: учим) l’histoire.", answer: "apprenons" },
          { sentence: "Je ___ (глагол: понимаю) bien cette leçon.", answer: "comprends" },
          { sentence: "Le ___ (учитель) est très gentil.", answer: "professeur" }
        ],
        longAnswer: "Напиши 2–3 предложения: какой твой любимый предмет и почему он тебе нравится."
      },      
      26:   {
        title: "День 26. Как я готовлюсь к занятиям",
        vocabulary: [
          "se réveiller tôt — просыпаться рано",
          "réviser les notes — повторять записи",
          "organiser son temps — организовывать время",
          "faire un planning — составлять план",
          "relire — перечитывать",
          "faire les devoirs — делать домашку",
          "être prêt — быть готовым",
          "commencer — начинать",
          "finir — заканчивать",
          "le matin — утро"
        ],
        audio: "audio/day26_fr.mp3",
        example: [
          "“Je me réveille tôt pour réviser mes notes.”",
          "“Je fais un planning chaque matin.”"
        ],
        grammar: [
          "Je me réveille... / Je commence à...",
          "Faire les devoirs / Être prêt"
        ],
        listening: {
          audio: "audio/day26_fr_listening.mp3",
          tests: [
            {
              question: "Quand Alex commence-t-il à réviser ?",
              options: ["Le matin", "Le soir", "À midi"],
              answer: "Le matin"
            },
            {
              question: "Qu’est-ce qu’il utilise ?",
              options: ["Un résumé", "Un livre", "Un planning"],
              answer: "Un planning"
            },
            {
              question: "Pourquoi il se réveille tôt ?",
              options: ["Pour manger", "Pour jouer", "Pour étudier"],
              answer: "Pour étudier"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'faire les devoirs' ?", answers: ["делать уроки", "гулять", "читать"], correct: 0 },
          { question: "Complétez : Il ___ un planning chaque jour.", answers: ["fait", "fais", "fera"], correct: 0 },
          { question: "Que signifie 'relire' ?", answers: ["переписывать", "перечитывать", "решать"], correct: 1 },
          { question: "Complétez : Tu ___ prêt pour le cours ?", answers: ["es", "est", "êtes"], correct: 0 },
          { question: "Que signifie 'organiser son temps' ?", answers: ["терять время", "организовать время", "тратить"], correct: 1 },
          { question: "Complétez : Je ___ tôt le matin.", answers: ["me réveille", "me lève", "me couche"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je ___ (глагол: делаю) mes devoirs le soir.", answer: "fais" },
          { sentence: "Nous ___ (глагол: повторяем) nos notes ensemble.", answer: "révisons" },
          { sentence: "Tu ___ (глагол: перечитываешь) ton texte ?", answer: "relis" },
          { sentence: "Je suis ___ (прилагательное: готов) pour le test.", answer: "prêt" }
        ],
        longAnswer: "Напиши 2–3 предложения: как ты обычно готовишься к урокам."
      },             
      27: {
        title: "День 27. Мой день на парах",
        vocabulary: [
          "la salle de classe — аудитория",
          "le cours — занятие",
          "écouter — слушать",
          "noter — записывать",
          "poser une question — задать вопрос",
          "répondre — отвечать",
          "participer — участвовать",
          "être attentif — быть внимательным",
          "lever la main — поднимать руку",
          "comprendre — понимать"
        ],
        audio: "audio/day27_fr.mp3",
        example: [
          "“Je participe beaucoup pendant les cours.”",
          "“Je lève la main pour poser une question.”"
        ],
        grammar: [
          "Je participe à... / Je suis attentif",
          "Les actions pendant le cours"
        ],
        listening: {
          audio: "audio/day27_fr_listening.mp3",
          tests: [
            {
              question: "Où se passe le cours de Zoé ?",
              options: ["Dans une salle", "Dans un parc", "À la maison"],
              answer: "Dans une salle"
            },
            {
              question: "Que fait-elle pendant le cours ?",
              options: ["Elle écoute", "Elle dort", "Elle mange"],
              answer: "Elle écoute"
            },
            {
              question: "Pourquoi elle lève la main ?",
              options: ["Pour répondre", "Pour dormir", "Pour sortir"],
              answer: "Pour répondre"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'noter' ?", answers: ["слушать", "записывать", "читать"], correct: 1 },
          { question: "Complétez : Elle ___ la main souvent.", answers: ["lève", "pose", "tire"], correct: 0 },
          { question: "Que signifie 'être attentif' ?", answers: ["быть внимательным", "быть усталым", "быть весёлым"], correct: 0 },
          { question: "Complétez : Il ___ à toutes les questions.", answers: ["répond", "réponse", "répondre"], correct: 0 },
          { question: "Que signifie 'participer' ?", answers: ["спать", "участвовать", "молчать"], correct: 1 },
          { question: "Complétez : Je ___ à toutes les leçons.", answers: ["participe", "participes", "participer"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je ___ (глагол: поднимаю) la main pour répondre.", answer: "lève" },
          { sentence: "Nous ___ (глагол: участвовать) à la discussion.", answer: "participons" },
          { sentence: "Il ___ (глагол: записывает) les réponses.", answer: "note" },
          { sentence: "Tu ___ (глагол: понимаешь) le professeur ?", answer: "comprends" }
        ],
        longAnswer: "Напиши 2–3 предложения: как проходит твой обычный день на занятиях."
      },    
      28: {
        title: "День 27. Мой день на парах",
        vocabulary: [
          "la salle de classe — аудитория",
          "le cours — занятие",
          "écouter — слушать",
          "noter — записывать",
          "poser une question — задать вопрос",
          "répondre — отвечать",
          "participer — участвовать",
          "être attentif — быть внимательным",
          "lever la main — поднимать руку",
          "comprendre — понимать"
        ],
        audio: "audio/day27_fr.mp3",
        example: [
          "“Je participe beaucoup pendant les cours.”",
          "“Je lève la main pour poser une question.”"
        ],
        grammar: [
          "Je participe à... / Je suis attentif",
          "Les actions pendant le cours"
        ],
        listening: {
          audio: "audio/day27_fr_listening.mp3",
          tests: [
            {
              question: "Où se passe le cours de Zoé ?",
              options: ["Dans une salle", "Dans un parc", "À la maison"],
              answer: "Dans une salle"
            },
            {
              question: "Que fait-elle pendant le cours ?",
              options: ["Elle écoute", "Elle dort", "Elle mange"],
              answer: "Elle écoute"
            },
            {
              question: "Pourquoi elle lève la main ?",
              options: ["Pour répondre", "Pour dormir", "Pour sortir"],
              answer: "Pour répondre"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'noter' ?", answers: ["слушать", "записывать", "читать"], correct: 1 },
          { question: "Complétez : Elle ___ la main souvent.", answers: ["lève", "pose", "tire"], correct: 0 },
          { question: "Que signifie 'être attentif' ?", answers: ["быть внимательным", "быть усталым", "быть весёлым"], correct: 0 },
          { question: "Complétez : Il ___ à toutes les questions.", answers: ["répond", "réponse", "répondre"], correct: 0 },
          { question: "Que signifie 'participer' ?", answers: ["спать", "участвовать", "молчать"], correct: 1 },
          { question: "Complétez : Je ___ à toutes les leçons.", answers: ["participe", "participes", "participer"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je ___ (глагол: поднимаю) la main pour répondre.", answer: "lève" },
          { sentence: "Nous ___ (глагол: участвовать) à la discussion.", answer: "participons" },
          { sentence: "Il ___ (глагол: записывает) les réponses.", answer: "note" },
          { sentence: "Tu ___ (глагол: понимаешь) le professeur ?", answer: "comprends" }
        ],
        longAnswer: "Напиши 2–3 предложения: как проходит твой обычный день на занятиях."
      },          
      29: {
        title: "День 29. Мой учебный проект",
        vocabulary: [
          "préparer un projet — готовить проект",
          "le sujet — тема",
          "faire des recherches — делать исследования",
          "écrire un texte — писать текст",
          "travailler en groupe — работать в группе",
          "présenter — представлять",
          "être prêt — быть готовым",
          "parler devant la classe — выступать перед классом",
          "avoir confiance — быть уверенным",
          "réussir — добиться успеха"
        ],
        audio: "audio/day29_fr.mp3",
        example: [
          "“Je prépare un projet sur l’environnement.”",
          "“Je travaille avec deux camarades.”"
        ],
        grammar: [
          "Parler de ses projets au présent",
          "Verbes d’action + être prêt / avoir confiance"
        ],
        listening: {
          audio: "audio/day29_fr_listening.mp3",
          tests: [
            {
              question: "Quel est le sujet du projet de Camille ?",
              options: ["L’histoire", "L’environnement", "Le sport"],
              answer: "L’environnement"
            },
            {
              question: "Combien de personnes travaillent avec elle ?",
              options: ["1", "2", "3"],
              answer: "2"
            },
            {
              question: "Comment elle se sent ?",
              options: ["Stressée", "Fatiguée", "Confiance"],
              answer: "Confiance"
            }
          ]
        },
        tests: [
          { question: "Que signifie 'présenter' ?", answers: ["представлять", "прятать", "отправлять"], correct: 0 },
          { question: "Complétez : Je ___ un texte.", answers: ["écris", "parle", "dis"], correct: 0 },
          { question: "Que signifie 'avoir confiance' ?", answers: ["быть уставшим", "быть уверенным", "быть голодным"], correct: 1 },
          { question: "Complétez : Nous ___ un projet de groupe.", answers: ["préparons", "présentons", "lisons"], correct: 0 },
          { question: "Que signifie 'réussir' ?", answers: ["успеть", "потеряться", "найти"], correct: 0 },
          { question: "Complétez : Tu ___ devant la classe ?", answers: ["parles", "poses", "dises"], correct: 0 }
        ],
        fillGap: [
          { sentence: "Je ___ (глагол: готовлю) un projet.", answer: "prépare" },
          { sentence: "Nous ___ (глагол: представляем) demain.", answer: "présentons" },
          { sentence: "Tu ___ (глагол: имеешь) confiance en toi ?", answer: "as" },
          { sentence: "Ils ___ (глагол: работают) en groupe.", answer: "travaillent" }
        ],
        longAnswer: "Напиши 5 предложений о проекте, который ты готовил (или хотел бы сделать)."
      },       
      30: {
        title: "День 30. Мотивационное письмо",
        vocabulary: [
          "lettre de motivation — мотивационное письмо",
          "je m’appelle — меня зовут",
          "je suis étudiant(e) — я студент(ка)",
          "je veux — я хочу",
          "apprendre — учить",
          "étudier — учиться",
          "l’université — университет",
          "parce que — потому что",
          "je suis motivé(e) — я мотивирован(а)",
          "merci — спасибо"
        ],
        audio: "audio/day30_fr.mp3",
        example: [
          "“Je suis motivé pour apprendre le français.”",
          "“Je veux entrer à l’université.”"
        ],
        grammar: [
          "Écrire une lettre simple",
          "1-е лицо, связные фразы"
        ],
        longAnswer: "Напиши мотивационное письмо из 10-12 предложений: кто ты, зачем хочешь учиться и почему ты мотивирован."
      }      
    }
  };
  

  

    const dayData = data[lang]?.[day];

    if (dayData) {
        if (page === "theory") {
            document.getElementById("day-title").textContent = dayData.title || "";

            const vocab = document.getElementById("vocabulary");
            if (dayData.vocabulary) {
                vocab.innerHTML = dayData.vocabulary.map(v => `<li>${v}</li>`).join("");
            } else {
                vocab.parentElement.style.display = "none";
            }

            const grammar = document.getElementById("grammar");
            if (dayData.grammar) {
                grammar.innerHTML = dayData.grammar.map(g => `<li>${g}</li>`).join("");
            } else {
                grammar.parentElement.style.display = "none";
            }

            const example = document.getElementById("example");
            if (example) {
                if (dayData.example) {
                    example.innerHTML = dayData.example.map(e => `<li>${e}</li>`).join("");
                } else {
                    example.parentElement.style.display = "none";
                }
            }

            const audio = document.getElementById("audio");
            if (audio && dayData.audio) {
                audio.src = dayData.audio;
            }
          } else if (page === "tasks") {
            document.getElementById("task-title").textContent = dayData.title || "";
        
            if (dayData.tests) {
                showTests(dayData.tests);
            } else {
                document.getElementById("test-section").style.display = "none";
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
        
            if (dayData.listening) {
                showListening(dayData.listening);
            } else {
                document.getElementById("listening-section").style.display = "none";
            }
        
            // Нейросеть — обработчик кнопки "Проверить развернутый ответ"
            const saveBtn = document.getElementById("save-long-answer");
            if (saveBtn) {
                saveBtn.onclick = async () => {
                    const textarea = document.getElementById("long-answer");
                    const resultBlock = document.getElementById("long-result");
                    const answer = textarea.value.trim();
        
                    if (!answer) {
                        resultBlock.textContent = "Сначала введите ответ.";
                        resultBlock.style.color = "red";
                        return;
                    }
                    if (answer.length > 1000) {
                      resultBlock.textContent = "Ответ слишком длинный. Максимум 1000 символов.";
                      resultBlock.style.color = "red";
                      return;
                    }
        
                    resultBlock.textContent = "Проверка ответа... Пожалуйста, не обновляйте страницу";
                    resultBlock.style.color = "black";
        
                    try {
                        const response = await fetch("https://debilingo-ai.onrender.com/check", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ answer })
                        });
        
                        const data = await response.json();
                        resultBlock.innerHTML = data.result || "ChatGPT-4o mini не отвечает. Попробуйте позже";
                        resultBlock.style.color = "green";
                    } catch (error) {
                        console.error("Ошибка при обращении к нейросети:", error);
                        resultBlock.textContent = "Ошибка при проверке ответа.";
                        resultBlock.style.color = "red";
                    }
                };
            }
        }
        


    if (window.location.pathname.includes("calendar.html")) {
        updateCalendar(lang);
    }

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }

    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
        });
    }
  }});


function updateCalendar(lang) {
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

    if (!document.querySelector(".check-btn")) {
        const checkButton = document.createElement("button");
        checkButton.textContent = "Проверить";
        checkButton.classList.add("check-btn");
        checkButton.onclick = () => checkAnswers(testArray);
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
    const lang = params.get("lang") || "de";

    if (!day) {
        alert("❌ Ошибка: День не определён!");
        return;
    }

    localStorage.setItem(`day-${lang}-${day}`, "completed");
    alert(`✅ День ${day} завершен!`);
    updateCalendar(lang);
    window.location.href = `calendar.html?lang=${lang}`;
}

function showFillGap(gapArray) {
    const section = document.getElementById("fill-gap-section");
    section.style.display = "block";
    const container = document.getElementById("gap-container");
    container.innerHTML = "";

    gapArray.forEach((item, index) => {
        const block = document.createElement("div");
        block.classList.add("fill-gap-block");
        block.innerHTML = `
            <p>${item.sentence}</p>
            <input type="text" id="gap-input-${index}" placeholder="Введите ответ">
        `;
        container.appendChild(block);
    });

    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Проверить";
    checkBtn.classList.add("check-btn");
    checkBtn.onclick = () => {
        let correct = 0;
        gapArray.forEach((item, index) => {
            const userInput = document.getElementById(`gap-input-${index}`).value.trim().toLowerCase();
            if (userInput === item.answer.toLowerCase()) {
                correct++;
            }
        });
        document.getElementById("gap-result").textContent = `✅ Верно вставлено слов: ${correct} из ${gapArray.length}`;
    };

    container.appendChild(checkBtn);
}



function showLongAnswer(longText) {
    const longSection = document.getElementById("long-answer-section");
    if (longSection) {
        longSection.style.display = "block";
        document.getElementById("long-question").textContent = longText;
    }
}
function showListening(data) {
  const section = document.getElementById("listening-section");
  section.style.display = "block";

  const audio = document.getElementById("listening-audio");
  audio.src = data.audio;

  const container = document.getElementById("listening-tests");
  container.innerHTML = "";

  data.tests.forEach((test, index) => {
      const block = document.createElement("div");
      block.classList.add("listening-test-block");
      block.innerHTML = `
          <p>${test.question}</p>
          ${test.options.map((opt, i) => `
              <label>
                  <input type="radio" name="listening-${index}" value="${opt}"> ${opt}
              </label><br>
          `).join("")}
      `;
      container.appendChild(block);
  });

  const btn = document.createElement("button");
  btn.textContent = "Проверить аудирование";
  btn.onclick = () => {
      let correct = 0;
      data.tests.forEach((test, index) => {
          const checked = document.querySelector(`input[name="listening-${index}"]:checked`);
          if (checked && checked.value === test.answer) correct++;
      });
      document.getElementById("listening-result").textContent = `✅ Верно услышано: ${correct} из ${data.tests.length}`;
  };
  container.appendChild(btn);
}
const saveLongAnswer = async () => {
  const textarea = document.getElementById("long-answer");
  const resultBlock = document.getElementById("long-result");
  const answer = textarea.value.trim();

  if (!answer) {
    resultBlock.textContent = "Пожалуйста, введите ответ.";
    resultBlock.style.color = "red";
    return;
  }

  resultBlock.textContent = "Проверка ответа...";
  resultBlock.style.color = "black";

  try {
    const response = await fetch("https://debilingo-ai.onrender.com/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ answer })
    });

    const data = await response.json();
    resultBlock.textContent = data.result || "Нет ответа от нейросети.";
    resultBlock.style.color = "green";
  } catch (error) {
    console.error("Ошибка при проверке:", error);
    resultBlock.textContent = "Ошибка при проверке.";
    resultBlock.style.color = "red";
  }
};

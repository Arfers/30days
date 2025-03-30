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
            { sentence: "Ich ___ Student.", answer: "bin" },
            { sentence: "Ich studiere ___ an der Universität.", answer: "Deutsch" },
            { sentence: "Mein ___ ist sehr voll.", answer: "Stundenplan" },
            { sentence: "Ich habe einen Kurs im ___.", answer: "Hörsaal" }
          ],
          longAnswer: "Составь правильное предложение: 'университете / studiere / ich / an / der / Deutsch'",
          longAnswer: "Составь предложение: 'bin / ich / Student / und / heiße / Paul'"
        },        
        30: {
            title: "День 30. Знакомство с вузом",
            vocabulary: ["Universität", "Bewerbung"],
            grammar: ["Universität", "Bewerbung"],
            audio: "audio/day1_de.mp3",
            listening: {
              audio: "audio/day3_listening.mp3",
              tests: [
                {
                  question: "Что делает студент?",
                  options: ["читает", "пишет", "спит"],
                  answer: "читает"
                },
                {
                  question: "Где происходит действие?",
                  options: ["в библиотеке", "в кафе", "в поезде"],
                  answer: "в библиотеке"
                }
              ]
            },            
            longAnswer: "как"
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

            if (dayData.tests) showTests(dayData.tests);
            else document.getElementById("test-section").style.display = "none";

            if (dayData.fillGap) showFillGap(dayData.fillGap);
            else document.getElementById("fill-gap-section").style.display = "none";

            if (dayData.longAnswer) showLongAnswer(dayData.longAnswer);
            else document.getElementById("long-answer-section").style.display = "none";

            if (dayData.listening) showListening(dayData.listening);
            else document.getElementById("listening-section").style.display = "none";
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
});

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

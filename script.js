const questions = {
        mechanics: [
                { question: "Как называется закон, согласно которому сила действия равна силе противодействия?", answers: ["Закон Архимеда", "Третий закон Ньютона", "Первый закон термодинамики"], correct: 1 },
                        { question: "Что измеряется в джоулях?", answers: ["Масса", "Энергия", "Скорость"], correct: 1 }
                            ],
                                thermodynamics: [
                                        { question: "Как называется процесс передачи тепла без переноса вещества?", answers: ["Конвекция", "Излучение", "Теплопроводность"], correct: 2 },
                                                { question: "Какой газ имеет наибольшую теплоемкость?", answers: ["Кислород", "Водород", "Азот"], correct: 1 }
                                                    ],
                                                        optics: [
                                                                { question: "Как называется явление изменения направления света при переходе через границу сред?", answers: ["Интерференция", "Дифракция", "Преломление"], correct: 2 },
                                                                        { question: "Какая линза собирает лучи в одной точке?", answers: ["Выпуклая", "Вогнутая", "Плоская"], correct: 0 }
                                                                            ],
                                                                                electricity: [
                                                                                        { question: "Какая единица измерения силы тока?", answers: ["Ом", "Ампер", "Вольт"], correct: 1 },
                                                                                                { question: "Как называется закон, согласно которому сила тока прямо пропорциональна напряжению?", answers: ["Закон Ома", "Закон Фарадея", "Закон Кирхгофа"], correct: 0 }
                                                                                                    ]
                                                                                                    };

                                                                                                    let score = 0;
                                                                                                    let currentTopic = [];
                                                                                                    let currentQuestionIndex = 0;

                                                                                                    function startQuiz(topic) {
                                                                                                        currentTopic = questions[topic];
                                                                                                            currentQuestionIndex = 0;
                                                                                                                score = 0;

                                                                                                                    document.getElementById("topic-selection").classList.add("hidden");
                                                                                                                        document.getElementById("quiz").classList.remove("hidden");
                                                                                                                            
                                                                                                                                showQuestion();
                                                                                                                                }

                                                                                                                                function showQuestion() {
                                                                                                                                    if (currentQuestionIndex >= currentTopic.length) {
                                                                                                                                            alert(`Вы прошли все вопросы! Ваши очки: ${score}`);
                                                                                                                                                    changeTopic();
                                                                                                                                                            return;
                                                                                                                                                                }

                                                                                                                                                                    const q = currentTopic[currentQuestionIndex];
                                                                                                                                                                        document.getElementById("question").innerText = q.question;
                                                                                                                                                                            
                                                                                                                                                                                const answersDiv = document.getElementById("answers");
                                                                                                                                                                                    answersDiv.innerHTML = "";

                                                                                                                                                                                        q.answers.forEach((answer, index) => {
                                                                                                                                                                                                const button = document.createElement("button");
                                                                                                                                                                                                        button.innerText = answer;
                                                                                                                                                                                                                button.onclick = () => checkAnswer(index);
                                                                                                                                                                                                                        answersDiv.appendChild(button);
                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                document.getElementById("score").innerText = `Очки: ${score}`;
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                function checkAnswer(index) {
                                                                                                                                                                                                                                    if (index === currentTopic[currentQuestionIndex].correct) {
                                                                                                                                                                                                                                            score += 10;
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                    currentQuestionIndex++;
                                                                                                                                                                                                                                                        showQuestion();
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        function changeTopic() {
                                                                                                                                                                                                                                                            document.getElementById("quiz").classList.add("hidden");
                                                                                                                                                                                                                                                                document.getElementById("topic-selection").classList.remove("hidden");
                                                                                                                                                                                                                                                                }

//Проверка на число одного значения
function isNumber1Dig(x) {
    if(isNaN(x) || (x === "") || (x === " ")) {
        return true;
    } else {
        return false;
    }
}

//1. Создайте веб-приложение, в котором пользователь вводит 10 оценок. Вывести на экран 3 самых больших оценки в порядке убывания и порядковые номера этих элементов
function best3Result() {
    let obj = {
        DOMInputs: document.querySelectorAll(".mark"),
        arrMarks: [],
        myCase: true,
        result: document.querySelector(".resultChamp")
    };

    for(let i = 0; i < obj.DOMInputs.length; i++) {
        if(isNumber1Dig(obj.DOMInputs[i].value) || obj.DOMInputs[i].value < 1 || obj.DOMInputs[i].value > 100) {
            return obj.result.innerHTML = `ОШИБКА! Введите число от 1 до 100! Поле: ${i + 1}.`;
        } else {
            obj.arrMarks.push(obj.DOMInputs[i].value);
        }    
    }

    for(let i = 0; i < 3; i++) {
        let maxMark = Math.max.apply(null, obj.arrMarks),
            indexMark = obj.arrMarks.indexOf("" + maxMark);

        obj.result.innerHTML += `${i + 1}. Оценка: ${maxMark}. Индекс: ${indexMark}.<br>`;

        obj.arrMarks.splice(indexMark, 1);
    }

    
    // Вариант 2:
    // 1. Сортируем массив по возростанию:
    // obj.arrMarks.sort(function(a, b) {
    //     return b - a;
    // });
    // 2. Выводим 3 первых элемента массива.
}

//2. Создайте веб-приложение, в котором есть двумерный массив карт 13 на 4(4 масти карт от 2 до туза). Выведите в консоль случайную карту из массива используя Math.random()
function randomCard() {
    let obj = {
        arr: [2, 3, 4, 5, 6, 7, 8, 9, 10, "В", "Д", "K", "T"],
        lear:   function(a) {
                    switch(a) {
                        case 1:
                            return "&spades;"; //piki
                        case 2:
                            return "&clubs;"; //trefi
                        case 3:
                            return "&hearts;"; //chervi
                        case 4:
                            return "&diams;"; //buba
                        default:
                            return "Error";    
                    }
                },
        colorCard: function(b) {
            if(b == 1) {
                return " - Red.";
            } else {
                return " - Black.";
            }
        },
        result: document.querySelector(".resultCards") 
    };

    obj.result.innerHTML = obj.lear((Math.floor(Math.random() * 4) + 1)) + obj.arr[Math.floor(Math.random() * 13)] + obj.colorCard((Math.floor(Math.random() * 2) + 1));
}

// 3. Саймон написал код. Саймон уверен, что код в порядке. Но код не работает. Исправь ошибки, допущенные Саймоном.
function againSimon() {
    let obj = {
        DOMInput: document.querySelector("#codeSimon"),
        namePlayer: "",
        letters:["ш", "щ", "ч", "ж"],
		nameLen: 0,
		isBadName: false,
		replics: ['Подозрительное у тебя имя, странник. Дам-ка я тебе задание на убийство крыс в канализации.', 
                  'Отличное имя, странник. Вот тебе квест на убийство дракона.'],
        result: document.querySelector(".resultSimon")
    };

    obj.namePlayer = obj.DOMInput.value;
    obj.nameLen = obj.namePlayer.length;

    for(let i = 0; i < obj.nameLen; i++){
        if(obj.letters.indexOf(obj.namePlayer[i].toLowerCase()) > -1){
            obj.isBadName = true;
            break;
        }
    }
    
    if(obj.isBadName) {
        obj.result.innerHTML = obj.replics[0];
    } else {
        obj.result.innerHTML = obj.replics[1];
    }
}

let btnChampion = document.querySelector("#btnChampion"),
    btnCards = document.querySelector("#btnCards"),
    btnCodeSimon = document.querySelector("#btnCodeSimon");

btnChampion.addEventListener("click", best3Result);
btnCards.addEventListener("click", randomCard);
btnCodeSimon.addEventListener("click", againSimon);

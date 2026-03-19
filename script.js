/* eslint-disable no-alert */
(() => {
  const STORAGE_KEY = "historyQuizState.v1";

  function deepClone(obj) {
    // Works for our plain data (no functions/Date/Map etc.)
    return JSON.parse(JSON.stringify(obj));
  }

  /** Question shape: { q, a, correct, level: 'A'|'B'|'C' } */
  const QUIZZES = {
    q1907_1945: {
      name: "1907–1945 г",
      topics: {
        vov: {
          name: "Великая Отечественная война",
          bank: {
            A: [
              { q: "Как называется план нападения на СССР, начатый 22 июня 1941 года?", a: ["«Тайфун»", "«Барбаросса»", "«Цитадель»", "«Уран»"], correct: 1, level: "A" },
              { q: "Какое сражение 1941 года остановило продвижение немцев к столице СССР?", a: ["Сталинградская битва", "Битва за Москву", "Курская битва", "Битва за Кавказ"], correct: 1, level: "A" },
              { q: "Сколько дней длилась блокада Ленинграда (официально)?", a: ["872 дня", "500 дней", "1000 дней", "365 дней"], correct: 0, level: "A" },
              { q: "Как называлась главная трасса снабжения блокадного Ленинграда зимой по льду?", a: ["Дорога Победы", "Дорога жизни", "Ладожский тракт", "Северный путь"], correct: 1, level: "A" },
              { q: "Какая битва 1942–1943 годов стала переломным моментом Великой Отечественной войны?", a: ["Сталинградская битва", "Смоленское сражение", "Оборона Одессы", "Тульская оборонительная операция"], correct: 0, level: "A" },
              { q: "Как называлась советская операция по окружению войск противника под Сталинградом?", a: ["«Уран»", "«Кольцо»", "«Багратион»", "«Искра»"], correct: 0, level: "A" },
              { q: "Какое крупнейшее танковое сражение 1943 года связано с Прохоровкой?", a: ["Курская битва", "Сталинградская битва", "Оборона Севастополя", "Битва за Москву"], correct: 0, level: "A" },
              { q: "Как называлась операция по прорыву блокады Ленинграда в январе 1943 года?", a: ["«Искра»", "«Уран»", "«Цитадель»", "«Кутузов»"], correct: 0, level: "A" },
              { q: "Какая операция летом 1944 года привела к разгрому группы армий «Центр»?", a: ["«Багратион»", "«Кольцо»", "«Тайфун»", "«Марс»"], correct: 0, level: "A" },
              { q: "Где 9 мая 1945 года был подписан Акт о капитуляции Германии для СССР?", a: ["В Париже", "В Берлине (Карлсхорст)", "В Реймсе", "В Лондоне"], correct: 1, level: "A" },
              { q: "Как называлась кампания 1943 года по форсированию Днепра и освобождению Левобережья Украины?", a: ["Битва за Днепр", "Битва за Кавказ", "Битва за Москву", "Смоленское сражение"], correct: 0, level: "A" },
              { q: "Какое звание являлось высшей степенью отличия в СССР в годы войны?", a: ["Маршал СССР", "Герой Советского Союза", "Герой труда", "Комиссар"], correct: 1, level: "A" },
              { q: "Как называлась наступательная операция Красной армии в Восточной Пруссии (1945)?", a: ["Висло-Одерская", "Восточно-Прусская", "Берлинская", "Ясско-Кишинёвская"], correct: 1, level: "A" },
              { q: "Какое важное сражение шло летом–осенью 1942 года за юг СССР и нефть?", a: ["Битва за Кавказ", "Курская битва", "Битва за Днепр", "Оборона Киева"], correct: 0, level: "A" },
              { q: "Как называется праздник 9 мая?", a: ["День России", "День Победы", "День Единства", "День Армии"], correct: 1, level: "A" },
              { q: "Как называлась операция по освобождению Правобережной Украины и Молдавии весной 1944 года (обобщённо)?", a: ["Днепровско-Карпатская", "Крымская", "Львовско-Сандомирская", "Висло-Одерская"], correct: 0, level: "A" },
              { q: "Какая битва завершилась окружением 6-й армии Паулюса?", a: ["Сталинградская", "Курская", "Московская", "Кавказская"], correct: 0, level: "A" },
              { q: "Как называлась операция по освобождению Крыма весной 1944 года?", a: ["Крымская операция", "«Уран»", "«Искра»", "«Кольцо»"], correct: 0, level: "A" },
              { q: "Какое сражение 1943 года завершилось освобождением Орла и Белгорода после обороны на Курской дуге?", a: ["Операции «Кутузов» и «Румянцев»", "Операция «Тайфун»", "Операция «Марс»", "Операция «Искра»"], correct: 0, level: "A" },
              { q: "Как называлась финальная стратегическая операция весной 1945 года по взятию столицы Германии?", a: ["Берлинская операция", "Висло-Одерская", "Ясско-Кишинёвская", "Корсунь-Шевченковская"], correct: 0, level: "A" },
            ],
            B: [
              { q: "Какая операция 1944 года привела к выходу Красной армии к Висле и созданию Сандомирского плацдарма?", a: ["Львовско-Сандомирская", "Крымская", "Белорусская", "Восточно-Прусская"], correct: 0, level: "B" },
              { q: "Как называлась операция по ликвидации окружённой группировки под Сталинградом в 1943 году?", a: ["«Кольцо»", "«Искра»", "«Цитадель»", "«Марс»"], correct: 0, level: "B" },
              { q: "Какой приказ 1942 года известен фразой «Ни шагу назад!»?", a: ["Приказ №227", "Приказ №1", "Приказ №270", "Приказ №100"], correct: 0, level: "B" },
              { q: "Как называлась операция по освобождению правобережной Украины с окружением под Корсунем (1944)?", a: ["Корсунь-Шевченковская", "Одерская", "Смоленская", "Таманская"], correct: 0, level: "B" },
              { q: "Как называлась операция 1944 года по освобождению Прибалтики (обобщённо)?", a: ["Прибалтийская операция", "Карельская операция", "Дунайская операция", "Крымская операция"], correct: 0, level: "B" },
              { q: "Какой город-герой связан с обороной 1941–1942 годов на Чёрном море и Сапун-горой?", a: ["Севастополь", "Одесса", "Керчь", "Новороссийск"], correct: 0, level: "B" },
              { q: "Как называлась операция по освобождению Ленинграда и снятию блокады в январе 1944 года (обобщённо)?", a: ["Ленинградско-Новгородская", "«Искра»", "«Уран»", "«Кутузов»"], correct: 0, level: "B" },
              { q: "Какой советский фронт участвовал в штурме Берлина и водружении Знамени Победы (один из основных)?", a: ["1-й Белорусский", "Северо-Западный", "Закавказский", "Дальневосточный"], correct: 0, level: "B" },
              { q: "Как называлась крупнейшая наступательная операция 1945 года, обеспечившая стремительный выход к Одеру?", a: ["Висло-Одерская", "Берлинская", "Крымская", "Прибалтийская"], correct: 0, level: "B" },
              { q: "Как называется система массового производства танков Т-34 на Урале и в Сибири в годы войны (обобщённо)?", a: ["Эвакуация и военная экономика тыла", "План Маршалла", "НЭП", "Коллективизация"], correct: 0, level: "B" },
            ],
            C: [
              { q: "Какой город стал местом крупнейшей конференции союзников в СССР в 1943 году?", a: ["Москва", "Тегеран", "Куйбышев", "Ялта"], correct: 1, level: "C" },
              { q: "Какая конференция 1945 года в СССР определяла послевоенное устройство Европы?", a: ["Ялтинская", "Потсдамская", "Тегеранская", "Версальская"], correct: 0, level: "C" },
              { q: "Как называлась операция 1942 года под Ржевом, известная как «Марс»?", a: ["Ржевско-Вяземская (операция «Марс»)", "«Цитадель»", "«Уран»", "«Искра»"], correct: 0, level: "C" },
              { q: "Какой порт на Чёрном море стал символом десанта «Малая земля» (1943)?", a: ["Новороссийск", "Сочи", "Туапсе", "Батуми"], correct: 0, level: "C" },
              { q: "Какая операция 1944 года завершилась освобождением Одессы и выходом к Днестру?", a: ["Одесская операция", "Керченская операция", "Курская операция", "Операция «Цитадель»"], correct: 0, level: "C" },
              { q: "Какая операция 1944 года привела к освобождению Белграда при участии советских войск?", a: ["Белградская операция", "Пражская операция", "Венская операция", "Будапештская операция"], correct: 0, level: "C" },
              { q: "Как называлась крупная операция 1944 года по освобождению Карелии и Мурманского направления (обобщённо)?", a: ["Карельская операция", "Прибалтийская операция", "Крымская операция", "Висло-Одерская операция"], correct: 0, level: "C" },
              { q: "Как называлась операция по освобождению Белоруссии и части Литвы/Польши летом 1944 года?", a: ["«Багратион»", "«Кутузов»", "«Искра»", "«Тайфун»"], correct: 0, level: "C" },
              { q: "Как называется советская медаль за оборону Ленинграда (одна из массовых наград войны)?", a: ["«За оборону Ленинграда»", "«За взятие Берлина»", "«За освобождение Праги»", "«За победу над Японией»"], correct: 0, level: "C" },
              { q: "Как называлась крупнейшая операция 1944 года на Балканах, приведшая к окружению войск противника в Румынии?", a: ["Ясско-Кишинёвская", "Белградская", "Венская", "Пражская"], correct: 0, level: "C" },
            ],
          },
        },

        ww1: {
          name: "Первая мировая война",
          bank: {
            A: [
              { q: "В каком году Российская империя вступила в Первую мировую войну?", a: ["1912", "1914", "1916", "1918"], correct: 1, level: "A" },
              { q: "Как назывался союз государств, в который входила Россия в Первой мировой войне?", a: ["Тройственный союз", "Антанта", "Ось", "Лига наций"], correct: 1, level: "A" },
              { q: "Как называется крупная операция 1916 года на Юго-Западном фронте под командованием Брусилова?", a: ["Галицийская битва", "Брусиловский прорыв", "Сарыкамышская операция", "Лодзинская операция"], correct: 1, level: "A" },
              { q: "Какая крепость в 1915 году героически оборонялась на западных рубежах Российской империи?", a: ["Осовец", "Кронштадт", "Севастополь", "Петропавловск"], correct: 0, level: "A" },
              { q: "Какой город в годы войны назывался Петроград?", a: ["Москва", "Санкт-Петербург", "Киев", "Минск"], correct: 1, level: "A" },
              { q: "Как назывался договор, по которому Россия вышла из Первой мировой войны (1918)?", a: ["Версальский", "Брест-Литовский", "Парижский", "Тильзитский"], correct: 1, level: "A" },
              { q: "Какое событие 1917 года серьёзно подорвало управление армией и страной в России?", a: ["Февральская революция", "Крымская война", "Отечественная война 1812", "Смута"], correct: 0, level: "A" },
              { q: "Кто был последним императором России в годы Первой мировой войны?", a: ["Александр III", "Николай II", "Пётр I", "Николай I"], correct: 1, level: "A" },
              { q: "Как назывался один из известных русских военных лётчиков-новаторов Первой мировой?", a: ["Александр Покрышкин", "Пётр Нестеров", "Иван Кожедуб", "Георгий Жуков"], correct: 1, level: "A" },
              { q: "Какой театр военных действий был ключевым для России против Османской империи?", a: ["Балканский", "Кавказский", "Западный", "Итальянский"], correct: 1, level: "A" },
              { q: "Как называлось сражение 1914 года в Восточной Пруссии, завершившееся поражением русских армий?", a: ["Танненберг", "Верден", "Марна", "Сомма"], correct: 0, level: "A" },
              { q: "Как назывался высший командный орган русской армии в Первой мировой (ставка)?", a: ["Ставка Верховного Главнокомандующего", "Генеральные штаты", "Военный кабинет", "Совет фронтов"], correct: 0, level: "A" },
              { q: "Какая страна была союзником России в Антанте (одна из основных)?", a: ["Франция", "Болгария", "Османская империя", "Австро-Венгрия"], correct: 0, level: "A" },
              { q: "Какой год считается последним годом участия России в войне до фактического выхода?", a: ["1915", "1916", "1917", "1920"], correct: 2, level: "A" },
              { q: "Как называлось массовое перемещение промышленности и населения из прифронтовых районов в глубь страны (в годы войны)?", a: ["Эвакуация", "Демобилизация", "Коллективизация", "Интервенция"], correct: 0, level: "A" },
              { q: "Как называлась кампания 1914 года на территории Галиции (Юго-Западный фронт)?", a: ["Галицийская битва", "Брусиловский прорыв", "Сарыкамыш", "Лодзь"], correct: 0, level: "A" },
              { q: "Как называлась операция русских армий в 1914 году против Австро-Венгрии на юге фронта (обобщённо)?", a: ["Галицийская", "Варшавско-Ивангородская", "Нарочская", "Ржевская"], correct: 0, level: "A" },
              { q: "Какая столица Российской империи в 1914–1918 гг. носила название Петроград?", a: ["Санкт-Петербург/Петроград", "Москва", "Нижний Новгород", "Казань"], correct: 0, level: "A" },
              { q: "Какая война предшествовала мировой и повлияла на реформы армии России (1904–1905)?", a: ["Русско-японская", "Крымская", "Северная", "Балканская"], correct: 0, level: "A" },
              { q: "Какой морской театр был важен для России в войну (сражения флота, минная война)?", a: ["Балтийское море", "Красное море", "Индийский океан", "Карибское море"], correct: 0, level: "A" },
            ],
            B: [
              { q: "Как называлась операция 1915 года, связанная с «Великим отступлением» русской армии?", a: ["Великое отступление", "Сомма", "Верден", "Галлиполийская"], correct: 0, level: "B" },
              { q: "Как называлась наступательная операция русской армии 1916 года на Северном фронте у озера Нарочь?", a: ["Нарочская операция", "Брусиловский прорыв", "Галицийская", "Сарыкамыш"], correct: 0, level: "B" },
              { q: "Какая война велась Россией на Кавказе против Османской империи в 1914–1916 гг. (сражение у Сарыкамыша)?", a: ["Кавказская кампания", "Балканская кампания", "Итальянская кампания", "Фландрия"], correct: 0, level: "B" },
              { q: "Как называлась форма власти после Февральской революции 1917 года до Октября?", a: ["Временное правительство", "Земский собор", "Сенат", "Коминтерн"], correct: 0, level: "B" },
              { q: "Как назывался документ 1917 года, обещавший «мир без аннексий и контрибуций» (лозунг)?", a: ["Декрет о мире", "Манифест 1905", "Судебная реформа", "Акт капитуляции"], correct: 0, level: "B" },
              { q: "Как называлось явление одновременного существования двух центров власти в 1917 году?", a: ["Двоевластие", "Интервенция", "НЭП", "Коллективизация"], correct: 0, level: "B" },
              { q: "Как назывался главный штаб русской армии в годы войны (место руководства, ставка)?", a: ["Ставка", "Сенат", "Синод", "Комиссариат"], correct: 0, level: "B" },
              { q: "Как назывался союз России, Британии и Франции в международной политике?", a: ["Антанта", "Тройственный союз", "Ось", "Священный союз"], correct: 0, level: "B" },
              { q: "Какая фигура руководила реформами тыла/промышленности в войну, опираясь на комитеты (военно-промышленные)?", a: ["Военно-промышленные комитеты", "Народные комиссариаты", "Опричнина", "Думские дружины"], correct: 0, level: "B" },
              { q: "Какая территория была потеряна Россией по Брестскому миру (в общих чертах)?", a: ["Часть западных губерний", "Сибирь", "Крым навсегда", "Урал"], correct: 0, level: "B" },
            ],
            C: [
              { q: "Как называлась Варшавско-Ивангородская операция 1914 года (театр боевых действий)?", a: ["Польский театр", "Кавказский", "Балканский", "Итальянский"], correct: 0, level: "C" },
              { q: "Как называлась Лодзинская операция 1914 года (где проходила)?", a: ["В Польше", "Во Франции", "В Италии", "В Египте"], correct: 0, level: "C" },
              { q: "Кто был Верховным главнокомандующим русской армии с 1915 года (формально)?", a: ["Николай II", "А. А. Брусилов", "П. Н. Милюков", "А. Ф. Керенский"], correct: 0, level: "C" },
              { q: "Как называлась дата подписания Брестского мира (месяц и год)?", a: ["Март 1918", "Июнь 1917", "Ноябрь 1918", "Январь 1916"], correct: 0, level: "C" },
              { q: "Как назывался фронт, на котором Россия воевала против Германии и Австро-Венгрии в Европе (обобщённо)?", a: ["Восточный фронт", "Западный фронт", "Африканский фронт", "Тихоокеанский фронт"], correct: 0, level: "C" },
              { q: "Какая операция 1917 года на Юго-Западном фронте известна как «наступление Керенского»?", a: ["Июньское наступление 1917", "Брусиловский прорыв", "Нарочская операция", "Галицийская битва"], correct: 0, level: "C" },
              { q: "Как назывался массовый кризис снабжения и транспорта в тылу России в 1916–1917 гг.?", a: ["Транспортный кризис", "Оттепель", "Пятилетки", "НЭП"], correct: 0, level: "C" },
              { q: "Как называлась форма представительного органа в Российской империи начала XX века?", a: ["Государственная дума", "Политбюро", "Конституционный суд", "Сейм"], correct: 0, level: "C" },
              { q: "Как называлась столица России до переименования в 1914 году?", a: ["Санкт-Петербург", "Петроград", "Ленинград", "Москва"], correct: 0, level: "C" },
              { q: "Какая организация союзников формировала поставки в Россию через северные порты (в общих чертах)?", a: ["Союзные поставки (Антанта)", "Ось", "Коминтерн", "СЭВ"], correct: 0, level: "C" },
            ],
          },
        },

        civil: {
          name: "Гражданская война (Россия)",
          bank: {
            A: [
              { q: "В каком году началась Гражданская война в России (в широком понимании)?", a: ["1905", "1917", "1925", "1941"], correct: 1, level: "A" },
              { q: "Как назывались основные противоборствующие стороны, часто обозначаемые цветами?", a: ["Красные и Белые", "Синие и Зелёные", "Черные и Серые", "Красные и Синие"], correct: 0, level: "A" },
              { q: "Как назывался орган власти, пришедший к власти в октябре 1917 года?", a: ["Временное правительство", "Совет народных комиссаров", "Государственная дума", "Сенат"], correct: 1, level: "A" },
              { q: "Кто был одним из лидеров Белого движения на Юге России (ВСЮР)?", a: ["А. И. Деникин", "М. Н. Тухачевский", "В. И. Ленин", "И. В. Сталин"], correct: 0, level: "A" },
              { q: "Кто возглавлял Белое движение в Сибири и носил титул «Верховный правитель России»?", a: ["П. Н. Врангель", "А. В. Колчак", "С. М. Будённый", "Л. Д. Троцкий"], correct: 1, level: "A" },
              { q: "Как называлась политика большевиков в годы войны, связанная с жестким контролем экономики?", a: ["НЭП", "Военный коммунизм", "Коллективизация", "Оттепель"], correct: 1, level: "A" },
              { q: "Как называлась новая экономическая политика, начатая в 1921 году?", a: ["НЭП", "Перестройка", "Индустриализация", "Пятилетки"], correct: 0, level: "A" },
              { q: "Как назывался антибольшевистский мятеж моряков 1921 года рядом с Петроградом?", a: ["Кронштадтское восстание", "Восстание декабристов", "Восстание в Тамбове", "Соляной бунт"], correct: 0, level: "A" },
              { q: "Какое крупное крестьянское восстание 1920–1921 годов известно как «Антоновщина»?", a: ["Пугачёвское", "Тамбовское", "Разинское", "Башкирское"], correct: 1, level: "A" },
              { q: "Как назывались иностранные военные вмешательства в годы войны (общее название)?", a: ["Интервенция", "Оккупация", "Контрибуция", "Революция"], correct: 0, level: "A" },
              { q: "Какой город был одним из центров Белого движения на Юге России в 1918–1919 гг.?", a: ["Екатеринодар", "Самара", "Тула", "Ярославль"], correct: 0, level: "A" },
              { q: "Кто организовал «Русскую армию» в Крыму в 1920 году?", a: ["А. И. Деникин", "П. Н. Врангель", "Н. Н. Юденич", "С. Л. Франк"], correct: 1, level: "A" },
              { q: "Как называлась попытка наступления Белых на Петроград в 1919 году?", a: ["Поход Юденича на Петроград", "Ледяной поход", "Поход на Москву", "Поход на Варшаву"], correct: 0, level: "A" },
              { q: "Как называется государство, созданное в 1922 году после окончания основных боёв?", a: ["СССР", "Российская империя", "Лига наций", "Евросоюз"], correct: 0, level: "A" },
              { q: "Как назывался марш добровольческой армии Белых на Кубани в 1918 году?", a: ["Ледяной поход", "Соляной поход", "Сибирский поход", "Балтийский поход"], correct: 0, level: "A" },
              { q: "Как назывался первый орган власти после Февральской революции 1917 года (до Октября)?", a: ["Временное правительство", "Политбюро", "СНК", "Ставка"], correct: 0, level: "A" },
              { q: "Какая железнодорожная линия/регион имел стратегическое значение в Сибири во время войны?", a: ["Транссибирская магистраль", "БАМ", "Кольцевая Москва", "Сортавала—Петрозаводск"], correct: 0, level: "A" },
              { q: "Как называлась армия, созданная большевиками в 1918 году?", a: ["Красная армия", "Русская армия", "Белая армия", "Стрелецкое войско"], correct: 0, level: "A" },
              { q: "Как назывался мирный договор 1918 года, усиливший кризис и радикализацию в стране?", a: ["Брестский мир", "Версальский мир", "Тильзитский мир", "Парижский мир"], correct: 0, level: "A" },
              { q: "Как называлась власть советов на местах (обобщённо)?", a: ["Советы", "Земства", "Сенат", "Сейм"], correct: 0, level: "A" },
            ],
            B: [
              { q: "Как называлась антибольшевистская власть в Самаре, созданная летом 1918 года?", a: ["Комуч", "СНК", "Ставка", "ВЦИК"], correct: 0, level: "B" },
              { q: "Как называлось государственное образование на Волге в 1918 году, опиравшееся на Чехословацкий корпус (в общих чертах)?", a: ["Антибольшевистские правительства Поволжья", "Союз Антанты", "Белорусская рада", "Ось"], correct: 0, level: "B" },
              { q: "Как называлась крупная операция Красной армии против войск Врангеля в 1920 году?", a: ["Перекопско-Чонгарская", "Крымская 1944", "Таманская", "Курская"], correct: 0, level: "B" },
              { q: "Как назывался политический террор и репрессии в годы Гражданской войны со стороны большевиков (общее название)?", a: ["Красный террор", "Оттепель", "НЭП", "Интервенция"], correct: 0, level: "B" },
              { q: "Как называлось крупное восстание на Украине 1919–1921 годов под руководством Махно (обобщённо)?", a: ["Махновщина", "Декабристы", "Смута", "Пугачёвщина"], correct: 0, level: "B" },
              { q: "Как назывался корпус, восстание которого в 1918 году стало важным фактором эскалации войны?", a: ["Чехословацкий корпус", "Польский корпус", "Французский легион", "Японский корпус"], correct: 0, level: "B" },
              { q: "Как называлась политика изъятия хлеба у крестьян в годы военного коммунизма?", a: ["Продразвёрстка", "Откуп", "Барщина", "Денежная реформа"], correct: 0, level: "B" },
              { q: "Как назывался высший орган советской власти в первые годы после революции (между съездами)?", a: ["ВЦИК", "Госдума", "Сенат", "Синод"], correct: 0, level: "B" },
              { q: "Как называлась попытка Белых наступать на Москву в 1919 году (кампания Деникина)?", a: ["«Поход на Москву»", "Ледяной поход", "Поход на Варшаву", "Поход на Петроград"], correct: 0, level: "B" },
              { q: "Как назывался союз республик, образованный в 1922 году?", a: ["СССР", "РСФСР", "СНГ", "Российская империя"], correct: 0, level: "B" },
            ],
            C: [
              { q: "Как называлась «зелёная» сила, часто действовавшая независимо от Красных и Белых (обобщённо)?", a: ["Крестьянские повстанцы («зелёные»)", "Антанта", "Ось", "Партия кадетов"], correct: 0, level: "C" },
              { q: "Какая политика 1921 года заменила продразвёрстку продналогом?", a: ["НЭП", "Военный коммунизм", "Коллективизация", "Индустриализация"], correct: 0, level: "C" },
              { q: "Как назывался высший партийный орган большевиков в 1919–1920-е годы (в дальнейшем ключевой)?", a: ["Политбюро", "Сенат", "Госдума", "Ставка"], correct: 0, level: "C" },
              { q: "Какая дальневосточная интервенция была наиболее заметна по длительности и масштабу (страна)?", a: ["Японская", "Итальянская", "Испанская", "Шведская"], correct: 0, level: "C" },
              { q: "Как называлась советская республика на Дальнем Востоке 1920–1922 гг., существовавшая как буфер?", a: ["Дальневосточная республика", "Крымская республика", "Уральская республика", "Балтийская республика"], correct: 0, level: "C" },
              { q: "Как назывался орган, отвечавший за безопасность и борьбу с контрреволюцией в первые годы советской власти?", a: ["ВЧК", "НКВД (1930-е)", "МГБ", "Охранка"], correct: 0, level: "C" },
              { q: "Как называлась политика национализации промышленности в годы военного коммунизма (обобщённо)?", a: ["Национализация", "Приватизация", "Кооперация", "Концессии"], correct: 0, level: "C" },
              { q: "Как называлась столица РСФСР, перенесённая из Петрограда в 1918 году?", a: ["Москва", "Петроград", "Казань", "Самара"], correct: 0, level: "C" },
              { q: "Как назывался мятеж в Кронштадте в 1921 году по социальному составу участников (в основном)?", a: ["Моряки", "Казаки", "Дворяне", "Иностранные солдаты"], correct: 0, level: "C" },
              { q: "Как называлась политика привлечения иностранного капитала в СССР в ранний НЭП (форма)?", a: ["Концессии", "Крепостное право", "Интервенция", "Продразвёрстка"], correct: 0, level: "C" },
            ],
          },
        },
      },
    },
  };

  const QUIZ_IDS = Object.keys(QUIZZES);

  const DEFAULT_STATE = {
    scores: { red: 0, blue: 0 },
    currentTeam: "red",
    autoTurn: true,
    quizId: "q1907_1945",
    topicId: "vov",
    settings: {
      difficulty: 1, // 1 базовый, 2 средний, 3 сложный
      count: 15, // 15 или 30
    },
    started: { q1907_1945: false }, // true после первого ответа в викторине
    progress: {
      q1907_1945: { vov: 0, ww1: 0, civil: 0 }, // index of current question (0..count)
    },
  };

  /** @returns {typeof DEFAULT_STATE} */
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return deepClone(DEFAULT_STATE);
      const parsed = JSON.parse(raw);
      const safe = deepClone(DEFAULT_STATE);

      if (parsed && typeof parsed === "object") {
        if (parsed.scores && typeof parsed.scores === "object") {
          safe.scores.red = Number.isFinite(parsed.scores.red) ? parsed.scores.red : 0;
          safe.scores.blue = Number.isFinite(parsed.scores.blue) ? parsed.scores.blue : 0;
        }
        if (parsed.currentTeam === "red" || parsed.currentTeam === "blue") {
          safe.currentTeam = parsed.currentTeam;
        }
        if (typeof parsed.autoTurn === "boolean") safe.autoTurn = parsed.autoTurn;

        if (parsed.quizId && QUIZZES[parsed.quizId]) safe.quizId = parsed.quizId;

        const quiz = QUIZZES[safe.quizId];
        const topicKeys = Object.keys(quiz.topics);

        if (parsed.topicId && quiz.topics[parsed.topicId]) safe.topicId = parsed.topicId;

        if (parsed.settings && typeof parsed.settings === "object") {
          const d = parsed.settings.difficulty;
          const c = parsed.settings.count;
          safe.settings.difficulty = d === 1 || d === 2 || d === 3 ? d : 1;
          safe.settings.count = c === 15 || c === 30 ? c : 15;
        }

        if (parsed.started && typeof parsed.started === "object") {
          for (const qid of Object.keys(safe.started)) {
            if (typeof parsed.started[qid] === "boolean") safe.started[qid] = parsed.started[qid];
          }
        }

        // New shape
        if (parsed.progress && typeof parsed.progress === "object") {
          for (const qid of Object.keys(safe.progress)) {
            if (!parsed.progress[qid] || typeof parsed.progress[qid] !== "object") continue;
            for (const tid of Object.keys(safe.progress[qid])) {
              const v = parsed.progress[qid][tid];
              safe.progress[qid][tid] = Number.isFinite(v) ? clampInt(v, 0, 30) : 0;
            }
          }
        }

        // Migration from old v1 shape
        if (parsed.progressByTopic && typeof parsed.progressByTopic === "object") {
          safe.quizId = "q1907_1945";
          safe.progress.q1907_1945 = safe.progress.q1907_1945 || { vov: 0, ww1: 0, civil: 0 };
          for (const tid of topicKeys) {
            const v = parsed.progressByTopic[tid];
            safe.progress.q1907_1945[tid] = Number.isFinite(v) ? clampInt(v, 0, 30) : 0;
          }
        }
      }
      return safe;
    } catch {
      return deepClone(DEFAULT_STATE);
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function resetState() {
    state = deepClone(DEFAULT_STATE);
    saveState();
    renderAll();
  }

  function clampInt(n, min, max) {
    const x = Math.trunc(Number(n));
    if (!Number.isFinite(x)) return min;
    return Math.min(max, Math.max(min, x));
  }

  function el(id) {
    const node = document.getElementById(id);
    if (!node) throw new Error(`Missing element #${id}`);
    return node;
  }

  const ui = {
    scoreRed: el("scoreRed"),
    scoreBlue: el("scoreBlue"),
    resetBtn: el("resetBtn"),

    teamRedBtn: el("teamRedBtn"),
    teamBlueBtn: el("teamBlueBtn"),
    autoTurn: el("autoTurn"),

    solvedText: el("solvedText"),
    topicName: el("topicName"),
    progressFill: el("progressFill"),

    quizTabs: el("quizTabs"),
    topicTabs: el("topicTabs"),

    difficultySelect: el("difficultySelect"),
    countSelect: el("countSelect"),
    settingsHint: el("settingsHint"),

    questionNum: el("questionNum"),
    questionText: el("questionText"),
    answers: el("answers"),
    feedback: el("feedback"),
    nextBtn: el("nextBtn"),
  };

  let state = loadState();

  let answeredThisQuestion = false;
  let lastWasCorrect = false;

  function getCurrentQuiz() {
    return QUIZZES[state.quizId];
  }

  function getCurrentTopic() {
    return getCurrentQuiz().topics[state.topicId];
  }

  function getTopicKeysForCurrentQuiz() {
    return Object.keys(getCurrentQuiz().topics);
  }

  function getQuestionListForTopic(topicId) {
    const topic = getCurrentQuiz().topics[topicId];
    const { difficulty, count } = state.settings;
    const bank = topic.bank;

    if (count === 15) {
      return bank.A.slice(0, 15);
    }

    if (difficulty === 2) {
      return [...bank.A.slice(0, 20), ...bank.C.slice(0, 10)];
    }
    if (difficulty === 3) {
      return [...bank.A.slice(0, 10), ...bank.B.slice(0, 10), ...bank.C.slice(0, 10)];
    }
    // Fallback
    return bank.A.slice(0, 15);
  }

  function getCurrentQuestions() {
    return getQuestionListForTopic(state.topicId);
  }

  function getCurrentIndex() {
    const perQuiz = state.progress[state.quizId] || {};
    return perQuiz[state.topicId] ?? 0;
  }

  function getCurrentQuestion() {
    const list = getCurrentQuestions();
    const idx = getCurrentIndex();
    return list[idx] ?? null;
  }

  function clampProgress(idx) {
    return clampInt(idx, 0, state.settings.count);
  }

  function hasAnyProgressInCurrentQuiz() {
    const perQuiz = state.progress[state.quizId];
    if (!perQuiz) return false;
    if (state.started && state.started[state.quizId]) return true;
    return Object.values(perQuiz).some((v) => Number(v) > 0);
  }

  function setTeam(team) {
    state.currentTeam = team;
    saveState();
    renderTeam();
  }

  function toggleTeam() {
    setTeam(state.currentTeam === "red" ? "blue" : "red");
  }

  function setTopic(topicId) {
    const quiz = getCurrentQuiz();
    if (!quiz.topics[topicId]) return;
    state.topicId = topicId;
    answeredThisQuestion = false;
    lastWasCorrect = false;
    saveState();
    renderAll();
  }

  function setQuiz(quizId) {
    if (!QUIZZES[quizId]) return;
    state.quizId = quizId;
    const quiz = QUIZZES[quizId];
    const firstTopic = Object.keys(quiz.topics)[0];
    if (!quiz.topics[state.topicId]) state.topicId = firstTopic;

    // ensure progress object exists
    if (!state.progress[quizId]) {
      state.progress[quizId] = {};
      for (const tid of Object.keys(quiz.topics)) state.progress[quizId][tid] = 0;
    }
    if (!state.started) state.started = {};
    if (typeof state.started[quizId] !== "boolean") state.started[quizId] = false;
    answeredThisQuestion = false;
    lastWasCorrect = false;
    saveState();
    renderAll();
  }

  function setProgress(topicId, newIndex) {
    if (!state.progress[state.quizId]) state.progress[state.quizId] = {};
    state.progress[state.quizId][topicId] = clampProgress(newIndex);
    saveState();
  }

  function setAutoTurn(v) {
    state.autoTurn = Boolean(v);
    saveState();
    renderAutoTurn();
  }

  function setDifficulty(d) {
    if (hasAnyProgressInCurrentQuiz()) return;
    state.settings.difficulty = d === 1 || d === 2 || d === 3 ? d : 1;
    if (state.settings.difficulty === 1) state.settings.count = 15;
    if (state.settings.difficulty === 2 || state.settings.difficulty === 3) state.settings.count = 30;
    saveState();
    renderAll();
  }

  function setCount(c) {
    if (hasAnyProgressInCurrentQuiz()) return;
    state.settings.count = c === 15 || c === 30 ? c : 15;
    if (state.settings.count === 15) state.settings.difficulty = 1;
    if (state.settings.count === 30 && state.settings.difficulty === 1) state.settings.difficulty = 2;
    saveState();
    renderAll();
  }

  function addPoint(team) {
    if (team === "red") state.scores.red += 1;
    if (team === "blue") state.scores.blue += 1;
    saveState();
    renderScores();
  }

  function renderScores() {
    ui.scoreRed.textContent = String(state.scores.red);
    ui.scoreBlue.textContent = String(state.scores.blue);
  }

  function renderTeam() {
    const redActive = state.currentTeam === "red";
    ui.teamRedBtn.dataset.active = String(redActive);
    ui.teamBlueBtn.dataset.active = String(!redActive);
    ui.teamRedBtn.setAttribute("aria-pressed", String(redActive));
    ui.teamBlueBtn.setAttribute("aria-pressed", String(!redActive));
  }

  function renderAutoTurn() {
    ui.autoTurn.checked = Boolean(state.autoTurn);
  }

  function renderQuizTabs() {
    const buttons = ui.quizTabs.querySelectorAll("button[data-quiz]");
    buttons.forEach((btn) => {
      const qid = btn.getAttribute("data-quiz");
      btn.dataset.active = String(qid === state.quizId);
    });
  }

  function renderTopicTabs() {
    const buttons = ui.topicTabs.querySelectorAll("button[data-topic]");
    buttons.forEach((btn) => {
      const tid = btn.getAttribute("data-topic");
      btn.dataset.active = String(tid === state.topicId);
    });
  }

  function renderSettings() {
    const locked = hasAnyProgressInCurrentQuiz();
    const dBtns = ui.difficultySelect.querySelectorAll("button[data-diff]");
    dBtns.forEach((btn) => {
      const d = Number(btn.getAttribute("data-diff"));
      btn.dataset.active = String(d === state.settings.difficulty);
      btn.disabled = locked;
    });
    const cBtns = ui.countSelect.querySelectorAll("button[data-count]");
    cBtns.forEach((btn) => {
      const c = Number(btn.getAttribute("data-count"));
      btn.dataset.active = String(c === state.settings.count);
      btn.disabled = locked;
    });
    ui.settingsHint.textContent = locked ? "Недоступно после первого ответа" : "Доступно до первого ответа";
  }

  function renderProgress() {
    const topic = getCurrentTopic();
    const idx = getCurrentIndex();
    const max = state.settings.count;
    ui.topicName.textContent = topic.name;
    ui.solvedText.textContent = `${Math.min(idx, max)}/${max}`;
    const percent = (Math.min(idx, max) / max) * 100;
    ui.progressFill.style.width = `${percent}%`;
    ui.progressFill.parentElement?.setAttribute("aria-valuenow", String(Math.min(idx, max)));
    ui.progressFill.parentElement?.setAttribute("aria-valuemax", String(max));
  }

  function clearFeedback() {
    ui.feedback.hidden = true;
    ui.feedback.textContent = "";
    ui.feedback.removeAttribute("data-kind");
  }

  function showFeedback(kind, text) {
    ui.feedback.hidden = false;
    ui.feedback.dataset.kind = kind;
    ui.feedback.textContent = text;
  }

  function renderQuestion() {
    const topic = getCurrentTopic();
    const idx = getCurrentIndex();
    const q = getCurrentQuestion();
    const max = state.settings.count;

    answeredThisQuestion = false;
    lastWasCorrect = false;
    ui.nextBtn.disabled = true;
    clearFeedback();
    ui.answers.innerHTML = "";

    if (!q) {
      ui.questionNum.textContent = `Готово`;
      ui.questionText.textContent = `Вы дошли до конца темы «${topic.name}» (${max} вопросов). Можно переключиться на другую тему или нажать «Сбросить».`;
      ui.nextBtn.disabled = true;
      return;
    }

    ui.questionNum.textContent = `Вопрос ${idx + 1}`;
    ui.questionText.textContent = q.q;

    q.a.forEach((text, optionIndex) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answerBtn";
      btn.textContent = text;
      btn.addEventListener("click", () => onAnswer(optionIndex));
      ui.answers.appendChild(btn);
    });
  }

  function lockAnswers(correctIndex, chosenIndex) {
    const children = Array.from(ui.answers.querySelectorAll("button.answerBtn"));
    children.forEach((btn, i) => {
      btn.disabled = true;
      if (i === correctIndex) btn.dataset.state = "correct";
      if (i === chosenIndex && chosenIndex !== correctIndex) btn.dataset.state = "wrong";
    });
  }

  function onAnswer(chosenIndex) {
    if (answeredThisQuestion) return;
    const q = getCurrentQuestion();
    if (!q) return;

    answeredThisQuestion = true;
    lastWasCorrect = chosenIndex === q.correct;

    lockAnswers(q.correct, chosenIndex);

    if (lastWasCorrect) {
      addPoint(state.currentTeam);
      showFeedback("ok", `Верно! +1 очко команде «${state.currentTeam === "red" ? "Красные" : "Синие"}».`);
    } else {
      showFeedback("bad", `Неверно. Правильный ответ подсвечен зелёным.`);
    }

    if (!state.started) state.started = {};
    state.started[state.quizId] = true;
    saveState();
    renderSettings();

    if (state.autoTurn) toggleTeam();
    ui.nextBtn.disabled = false;
  }

  function goNext() {
    const idx = getCurrentIndex();
    if (idx >= state.settings.count) return;
    setProgress(state.topicId, idx + 1);
    renderAll();
  }

  function renderAll() {
    renderScores();
    renderTeam();
    renderAutoTurn();
    renderQuizTabs();
    renderSettings();
    renderTopicTabs();
    renderProgress();
    renderQuestion();
  }

  ui.teamRedBtn.addEventListener("click", () => setTeam("red"));
  ui.teamBlueBtn.addEventListener("click", () => setTeam("blue"));
  ui.autoTurn.addEventListener("change", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLInputElement)) return;
    setAutoTurn(t.checked);
  });

  ui.quizTabs.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const btn = target.closest("button[data-quiz]");
    if (!btn) return;
    const qid = btn.getAttribute("data-quiz");
    if (!qid) return;
    setQuiz(qid);
  });

  ui.difficultySelect.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const btn = target.closest("button[data-diff]");
    if (!btn) return;
    setDifficulty(Number(btn.getAttribute("data-diff")));
  });

  ui.countSelect.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const btn = target.closest("button[data-count]");
    if (!btn) return;
    setCount(Number(btn.getAttribute("data-count")));
  });

  ui.topicTabs.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const btn = target.closest("button[data-topic]");
    if (!btn) return;
    const tid = btn.getAttribute("data-topic");
    if (!tid) return;
    setTopic(tid);
  });

  ui.nextBtn.addEventListener("click", () => {
    if (!answeredThisQuestion) return;
    goNext();
  });

  ui.resetBtn.addEventListener("click", () => {
    const ok = confirm("Сбросить очки обеих команд и прогресс по всем темам?");
    if (!ok) return;
    localStorage.removeItem(STORAGE_KEY);
    resetState();
  });

  renderAll();
})();


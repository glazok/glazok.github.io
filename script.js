const sections = [
	{
		name: 'Основы HTML/JS',
		events: [{
			date: '2019-03-05',
			name: 'Введение в CSS',
			topics: [
				'Отрисовка блоков по умолчанию, блочные/inline-block/инлайновые блоки',
				'Селекторы',
				'Каскадирование, приоритетность стилей, веса селекторов',
				'Величины и единицы измерения',
				'Оформление текста',
				'Блочная модель, display, width, height и компания',
			]
		},
		{
			date: '2019-03-07',
			name: 'CSS, часть 2',
			topics: [
				'Позиционирование',
				'Флоаты',
				'Флексы',
				'Типовые задачи - центрирование, верстка колонок, карточек, пунктов меню',
				'Псевдоклассы',
				'Псевдоэлементы',
				'Семантическая разметка',
			]
		},
		{
			date: '2019-03-12',
			name: 'Практический семинар',
			topics: []
		},
		{
			date: '2019-03-14',
			name: 'Введение в JS',
			topics: [
				'(возможно) Разбор ДЗ по верстке',
				'Для чего? отличия разработки - реакция на события vs непрерывного выполнения',
				'Доставка в браузер - тег script',
				'Основы синтаксиса - обработка кода построчно интерпретатором, точки с запятой',
				'Типы данных: примитивные, массив, объект, оператор typeof',
				'Простые операторы: математика, склейка строк, булевские',
				'Переменные',
				'Alert/confirm/prompt/console.log',
			]
		},
		{
			date: '2019-03-19',
			name: 'Базовые конструкции языка',
			topics: [
				'Условные операторы if/switch/тернарник',
				'Циклы for/while/do..while',
				'Бесконечный цикл',
				'break/continue',
				'Функции, аргументы, аргументы по умолчанию',
				'Основы замыканий (оч лайтово про доступность внешнего)',
			]
		},
		{
			date: '2019-03-21',
			name: 'Массивы',
			topics: [
				'Создание, обход элементов массива, добавление/удаление элементов',
				'Методы .map/.reduce/.forEach/.some/.every и так далее',
				'Алгоритмы/задачки про массивы',
			]
		},
		{
			date: '2019-03-26',
			name: 'Объекты',
			topics: [
				'Объектный литерал, поля, методы',
				'this',
				'Функции-конструкторы',
				'JSON',
				'(возможно) es6 классы',
				'Объекты-обертки',
			]
		}]
	}, {
		name: 'JS в браузере',
		events: [{
			date: '2019-03-28',
			name: 'События',
			topics: [
				'click, contextmenu, mouseenter/mouseleave, mouseover/mouseout',
				'keypress/keyup/keydown',
				'input/submit/change',
				'load/error/DOMContentLoaded',
				'addEventListener',
				'Всплытие',
				'Примеры компонентов/виджетов на все события',
			]
		},
		{
			date: '2019-04-02',
			name: 'Работа с формами',
			topics: [
				'input text/checkbox/radio',
				'(возможно) html5 inputы',
				'select',
				'textarea',
				'Валидация формы',
				'Обработка формы на клиенте',
				'Неэлементы форм',
			]
		},
		{
			date: '2019-04-04',
			name: 'BOM и основы DOM',
			topics: [
				'location',
				'history',
				'navigator (navigator.geolocation)',
				'document.getElementById',
				'объект-узел',
				'innerHTML/innerText',
				'Работа с атрибутами',
				'style',
			]
		},
		{
			date: '2019-04-09',
			name: 'Продвинутая работа с DOM',
			topics: [
				'document.getElementsByClassName, HtmlCollection',
				'querySelector/querySelectorAll, NodeList',
				'document.body',
				'Перемещение по DOM - children, siblings, parent',
				'getComputedStyle',
				'className/classList',
			]
		},
		{
			date: '2019-04-11',
			name: 'Шаблонизация',
			topics: [
				'Склейка строк + innerHTML',
				'createElement, appendChild, insertAfter',
				'createDocumentFragment',
				'Ванильное создание верстки',
				'Двупроходная шаблонизация - пишем несложный шаблонизатор средствами браузера',
			]
		},
		{
			date: '2019-04-16',
			name: 'AJAX',
			topics: [
				'XMLHttpRequest',
				'Примеры - постраничность, обновление результатов матча, регистрация',
				'(возможно) WebSocket',
				'Работа с API чего-нибудь',
			]
		},
		{
			date: '2019-04-18',
			name: 'JQuery',
			topics: [
				'jquery',
			]
		},
		{
			date: '2019-04-23',
			name: 'Работа со сторонними библиотеками',
			topics: [
				'В древние времена находили модули абы где, скачивали, пытались как-то вкрутить, все грустно',
				'Теперь есть гитхаб, на котором есть все, куча документации и обновлений, йохохо',
				'Как отличить классный модуль от так себе модуля',
				'Как пользоваться документаций, как в общих чертах заставить модуль работать',
				'Всякие классные модули по направленностям',
			]
		},],
	},
	{
		name: 'Node JS и продвинутый JS',
		events: [{
			date: '2019-04-25',
			name: 'Введение в node.js',
			topics: [
				'Откуда взялся',
				'Установка',
				'Запуск скриптов',
				'Обзорно про es6 let-const-стрелки',
			]
		},
		{
			date: '2019-04-30',
			name: 'Асинхронный код в JS',
			topics: [
				'Откуда берется асинхронность в однопоточном JS',
				'Коллбеки',
				'Промисы',
			]
		},
		{
			date: '2019-05-02',
			name: 'NPM & Express',
			topics: [
				'npm модули - поиск и использование',
				'Как написать и опубликовать свой модуль',
				'Простое HTTP приложение',
				'Миддлвары',
				'Статика',
			]
		},
		{
			date: '2019-05-07',
			name: 'Базы данных',
			topics: [
				'Зачем вообще',
				'MongoDB',
				'Подключаем в приложеньку',
			]
		},
		{
			date: '2019-05-09',
			name: 'Практика. Написание приложения',
			topics: []
		},]
	},
	{
		name: 'Инструменты и библиотеки',
		events: [{
			date: '2019-05-14',
			name: 'Git',
			topics: [
				'Системы контроля версий - от папочек с кодом к умным программам',
				'git',
				'Что такое репозиторий что валяется в папочке .git',
				'git init',
				'git add ., git commit, что такое коммит',
				'что такое ветки, git branch',
				'git merge, git rebase, как гит вычисляет коммиты',
				'Конфликты, git status',
				'Общение с удаленным репозиторием (git push/git pull/git fetch)',
				'Консоль или клиенты?',
			]
		},
		{
			date: '2019-05-16',
			name: 'Тестирование - инфра',
			topics: [
				'unit',
				'Ручное тестирование интерфейсов, ямлы',
				'hermione',
				'Стабы',
				'Скриншоты',
			]
		},
		{
			date: '2019-05-21',
			name: 'Инфраструктурные инструменты - инфра',
			topics: [
				'Гит-хуки',
				'Линтеры',
				'csscomb',
				'Что-то еще',
			]
		},
		{
			date: '2019-05-23',
			name: 'CI - инфра',
			topics: [
				'Деплой на продакшн руками по фтп/гит клон на продакшн сервере/силами роботов',
				'github хуки - узнают что пора',
				'Настройка выкладки на примере travis',
			]
		},
		{
			date: '2019-05-28',
			name: 'BEM',
			topics: []
		},
		{
			date: '2019-05-30',
			name: 'Сборка',
			topics: [
				'Для чего? Примеры задач, где сборка помогает',
				'Пример настройки webpack',
				'???',
			]
		},
		{
			date: '2019-05-25',
			name: 'Хакатоны',
			topics: []
		},
		{
			date: '2019-06-01',
			name: 'Хакатоны',
			topics: []
		},
		{
			date: '2019-06-08',
			name: 'Хакатоны',
			topics: [
				'Финально демо'
			]
		},
		],
	}
];
function addSection(section){
	const container = document.getElementById('container');
	const roundBig = document.createElement('div');
	roundBig.className ='round-big';
	container.appendChild(roundBig);

	const card = document.createElement('section');
	card.className='card';
	
	const cardTitle = document.createElement('h1');
	cardTitle.innerText = section.name;
	cardTitle.className='card_title';
	card.appendChild(cardTitle);
	container.appendChild(card);

}
function addEvent(event){
	const container = document.getElementById('container');
	const roundSmall = document.createElement('div');
	if(moment(event.date) > moment()){
		roundSmall.className = 'round-small round-small-actual';
	}else if(moment(event.date).format('LL') === moment().format('LL')){
		roundSmall.className = 'round-small round-small-current';
	}else{
		roundSmall.className = 'round-small round-small-old';
	}
	
	container.appendChild(roundSmall);


	const card = document.createElement('section');
	card.className='card';
	const cardDate = document.createElement('div');
	cardDate.className='card_date';
	
	const date = document.createElement('date');
	date.innerText = moment(event.date).format('D MMM');
	cardDate.appendChild(date);
	card.appendChild(cardDate);
	
	const cardContent = document.createElement('div');
	if(moment(event.date) > moment()){
		cardContent.className='card_content';
	}else if(moment(event.date).format('LL') === moment().format('LL')){
		cardContent.className='card_content';
	}else{
		cardContent.className='card_content card_content_old';
	}
	
	

	const cardContentTitle = document.createElement('h3');
	cardContentTitle.innerText = event.name;
	cardContent.appendChild(cardContentTitle);

	const ul = document.createElement('ul');

	for(const topic of event.topics){
		const li = document.createElement('li');
		li.innerText=topic;
		ul.appendChild(li);

	}
	cardContent.appendChild(ul);

	card.appendChild(cardContent);


	container.appendChild(card);


}

for(const section of sections){
	addSection(section);
	for(const event of section.events){
		addEvent(event);
	}
}

const elem = document.getElementById('new_date');
elem.innerText = moment().format('LL');   
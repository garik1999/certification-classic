# Аттестационное задание. "Классика". 27.10.2020

Содержание:

1. [Репозиторий](#репозиторий)
1. [Запуск и работа с проектом](#запуск-и-работа-с-проектом)
1. [Задание](#задание)
    1. [Написать обработчик фильтра](#1-написать-обработчик-фильтра)
    1. [Добавить недостающие элементы разметки](#2-добавить-недостающие-элементы-разметки)
    1. [Составить GET-параметры для адресной строки](#3-составить-get-параметры-для-адресной-строки)
    1. [Добавить динамический рендер карточек на основе фильтра](#4-добавить-динамический-рендер-карточек-на-основе-фильтра)
1. [Завершение работы](#завершение-работы)

## Репозиторий

Текущий репозиторий будет доступен до завершения срока задания.

Сделайте форк текущего репозитория в свой GitHub аккаунт.  
_Если у вас нет аккаунта - настало время его создать))_

---

## Запуск и работа с проектом

**Устанавливаем зависимости**

```bash
npm i --save-exact
```

**Запускаем сборку**

```bash
npm run dev
```

**Рабочая директория**

Все исходные ресурсы, включая разметку, находятся в директории `src/`.  
Работаем только в этой директории.

**Стили**

В проекте используется пакет `microbe-ui`.  
Здесь вы можете вытащить привычные миксины и функции для Sass.  
Все они начинаются с `microbe-*`.  
Нужно больше - делаем сами, копируем с других проектов и тд.

**Скрипты**

В проекте подключена библиотека jQuery.  
Рекомендуем всю реализацию писать с ее использованием.
Также есть пример рекомендуемой организации кода.

**Разметка**

Работаем с чистым HTML.  
Без шаблонизаторов!  
Да, хардкор)  
Но для объема текущего задания - вполне подходящий

---

## Задание

> Необходимо закончить работы по верстке условной страницы "списка товаров".

### 1. Написать обработчик фильтра

При каждой смене контрола необходимо собрать данные формы и подготовить для отправки.  
Структура данных должна быть следующей

```
{
  params: {
    brand: [string, string, ...],
    manufacturer: string,
    model: string,
    year: number,
    price: [number, number]
  },
  pagination: {
    sort: string
    perPage: number
    page: number
  }
}
```

Сама "отправка данных" выполняться не будет.
Полученную структуру вам нужно просто вывести через `console.log(data)`

### 2. Добавить недостающие элементы разметки, фичи.

1. В фильтре добавить выбор года.
    - значения от 1973 по 2021 год
    - каждую декаду сгруппировать, по примеру 70-ые, 80-ые, 90-ые, 2k, 2k10 и 2k20
2. После списка товаров добавить разметку пагинации под программирование
    - схема разметки << | < | 1 | 2 | 3 | 4 | 5 | > | >>
    - адреса в ссылках просто `#`
    - в разметке нужно продемонстрировать активную страницу: стилизация и отсутствие атрибута `href`
3. Карточки товаров - сделать высоту карточек по максимальной карточке в ряду, цену выровнять относительно других карточек в ряду.
4. Сделать корректную адаптацию страницы.
5. Исправить чтобы тень при наведении на карточку, не наслаивалась на соседние карточки и на фильтр/сортировку.
6. Исправить чтобы декорный элемент в виде машины не перекрывал карточку товара и текстовый блок.

### 3. Составить GET-параметры для адресной строки

1. Данные с формы нужно перевести в форматированную строку.
    - если параметр имеет несколько значений он должен дублироваться в строке
    - пустые параметры не используются в строке
2. Параметры должны быть в отсортированном порядке
    1. `page`
    2. `year`
    3. `price`
    4. `model`
    5. `manufacturer`
    6. `brand`
    7. `sort`
    8. `per-page`
3. После получения строки - необходимо вставить GET-параметры в адресную строку
    - без перезагрузки страницы
    - с сохранением браузерной истории, должна быть возможность вернуться назад
    
### 4. Добавить динамический рендер карточек на основе фильтра

> Задание со звездочкой *

После выполнения предыдущих пунктов вы должны получить готовую кодовую базу для выполнения этого задания.
Необходимо заменить статический вывод 6 демо карточек на динамический рендер:

1. Данные по карточкам импортируем из `src/js/data/goods.json`:
    - импортируем в js как обычный модуль, никаких аяксовых загрузок не нужно
    - сам процесс получения данных нас не интересует
2. Механизм рендера карточек, также, максимально простой:
    - Не нужно подключать сторонние библиотеки: lodash.template, ejs и тд
    - используйте элемент `<template>` в качестве шаблона карточки 
3. Полученные данные с формы фильтра нужно применить к списку товаров:
    1. отфильтровать на основе выбранных параметров
    2. отсортировать на основе выбранной сортировки
    3. разбить на отрезки пагинации с учетом выбранного параметра
    4. динамически изменить доступные элементы пагинации внизу
    5. вывести коллекцию полученных товаров, соответствующих текущей пагинации
4. При смене любого контрола формы - выполняем пункт 3 по новой
5. При клике на пагинацию - сменить коллекцию в соответствии с выбранной пагинацией

---

## Завершение работы

1. Выполните финальную сборку
    - `npm run test`
    - `npm run build`
1. Должны получить файлы сборки внутри новой директории `docs/`
    - да, `docs`, все норм))
    - коммитим файлы сборки и отправляем на мастер
1. В настройках своего репозитория включаем публикацию GitHub pages
    - Ветка `master`
    - Директория `docs`, _вот оно зачем))_
    - Тема - не выбираем
1. Через пару минут, ваша ссылка будет доступна, например `https://user-name.github.com/repo-name/index.html`
    - обратите внимание, в конце должен быть `index.html`
1. Проверить в настройках проекта чтобы был включен баг-трекер
    - `Settings/Features/Issues`
1. Отправляем ссылки в соответствующую задачу Worksection
    - ссылка на репозиторий
    - ссылка на GitHub pages

// Створення класів за допомогою бібліотеки Tailwind
const addClassContent = document.getElementById('content').classList.add('w-80', 'border', 'border-black', 'ml-4', 'mb-4');
const addClassElementBtn = document.getElementById("addElementBtn").classList.add('m-2', 'bg-blue-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
const addToggleClassBtn = document.getElementById("toggleClassBtn").classList.add('bg-blue-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'mr-2');
const addReplaceClassBtn = document.getElementById("replaceElementBtn").classList.add('bg-blue-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
const addClassInsertFragmentBtn = document.getElementById("insertFragmentBtn").classList.add('bg-blue-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'ml-2');


const contentDiv = document.getElementById('content');

// Створення та додавання нового елемента
const addButton = document.getElementById("addElementBtn");
addButton.addEventListener("click", function () {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is new paragraph.';
    contentDiv.appendChild(newParagraph).classList.add('p-2', 'text-lg', 'font-mono');
});

// Перемикання класу на елементі
const toggleClassBtn = document.getElementById("toggleClassBtn");
let isHighlighted = false;
toggleClassBtn.addEventListener("click", function () {
    const paragraphs = contentDiv.querySelectorAll("p");
    paragraphs.forEach(function (paragraph) {
        if (isHighlighted) {
            paragraph.classList.remove('highlight');
        } else {
            paragraph.classList.toggle('highlight');
        }
    });
    isHighlighted = !isHighlighted;
});

// Заміна елемента
const replaceElementBtn = document.getElementById("replaceElementBtn");
replaceElementBtn.addEventListener("click", function () {
    const firstParagraph = contentDiv.querySelector('p');
    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = 'This is a new paragraph that replaced the first one.';
    secondParagraph.classList.add('text-m', 'font-mono', 'p-2');
    contentDiv.replaceChild(secondParagraph, firstParagraph);
});

// Вставка DocumentFragment
const insertFragmentBtn = document.getElementById("insertFragmentBtn");
insertFragmentBtn.addEventListener("click", function () {
    const fragment = document.createDocumentFragment();
    const newParagraph1 = document.createElement('p');
    newParagraph1.textContent = 'This is a new paragraph 1 added using DocumentFragment.';
    fragment.appendChild(newParagraph1);
    newParagraph1.classList.add('text-m', 'font-mono', 'p-2')

    const newParagraph2 = document.createElement('p');
    newParagraph2.textContent = 'This is a new paragraph 2 added using DocumentFragment.';
    fragment.appendChild(newParagraph2);
    newParagraph2.classList.add('text-m', 'font-mono', 'p-2')

    const firstParagraph = contentDiv.querySelector('p');
    contentDiv.insertBefore(fragment, firstParagraph);
});


// Обробка подій за допомогою Keyboard Events
// Обробник подій для події keydown
document.addEventListener('keydown', function (event) {
    console.log(`keydown - Key: ${event.key}, Code: ${event.code}`);
});

// Обробник подій для події keyup
document.addEventListener('keyup', function (event) {
    console.log(`keyup - Key: ${event.key}, Code: ${event.code}`);
});


function solve() {
    const inputTask = document.querySelector('#task');
    const inputDesc = document.querySelector('#description');
    const inputDate = document.querySelector('#date');

    const [inputSection, openSection, progressSection, completeSection] = document.querySelectorAll('section');

    const addBtn = document.querySelector("#add");
    addBtn.addEventListener('click', addToDo);

    function addToDo(event) {
        event.preventDefault();

        if (inputTask.value.trim() === '' || inputDesc.value.trim() === '' || inputDate.value.trim() === '') {
            return;
        }

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = inputTask.value;
        const pDesc = document.createElement('p');
        pDesc.textContent = `Description: ${inputDesc.value}`;
        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${inputDate.value}`;
        const divBtn = document.createElement('div');
        divBtn.classList.add('flex');
        const startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.classList.add('green');
        startBtn.addEventListener('click', startArticle)
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('red');
        deleteBtn.addEventListener('click', deleteArticle);
        divBtn.appendChild(startBtn);
        divBtn.appendChild(deleteBtn);

        article.appendChild(h3);
        article.appendChild(pDesc);
        article.appendChild(pDate);
        article.appendChild(divBtn);

        openSection.lastElementChild.appendChild(article);

        inputTask.value = '';
        inputDesc.value = '';
        inputDate.value = '';

        function deleteArticle() {
            article.remove();
        }

        function startArticle() {
            startBtn.remove()
            const finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';

            finishBtn.addEventListener('click', finishArticle);
            divBtn.appendChild(finishBtn);
            progressSection.lastElementChild.appendChild(article);
        }

        function finishArticle() {
            divBtn.remove();
            completeSection.lastElementChild.appendChild(article);
        }
    }
}
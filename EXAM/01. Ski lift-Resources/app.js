window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCountInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysInput = document.getElementById('days-count');

    const infoTicketList = document.querySelector('.ticket-info-list')
    const confirmElementList = document.querySelector('.confirm-ticket')
    const body = document.getElementById('body')

    const nextStepBtn = document.getElementById('next-btn');

    nextStepBtn.addEventListener('click', nextStep)
    function nextStep(e) {
        e.preventDefault();

        if (firstNameInput.value == ''
            || lastNameInput.value == ''
            || peopleCountInput.value == ''
            || fromDateInput.value == ''
            || daysInput.value == '') {
            return;
        }

        const infoElement = document.createElement('li');
        infoElement.setAttribute('class', 'ticket');

        const articleElementInfo = document.createElement('article')

        const fullName = document.createElement('h3');
        fullName.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        const fromDate = document.createElement('p');
        fromDate.textContent = `From date: ${fromDateInput.value}`;

        const forDays = document.createElement('p');
        forDays.textContent = `For ${daysInput.value} days`;

        const forPeople = document.createElement('p');
        forPeople.textContent = `For ${peopleCountInput.value} people`;

        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue'

        articleElementInfo.appendChild(fullName)
        articleElementInfo.appendChild(fromDate)
        articleElementInfo.appendChild(forDays)
        articleElementInfo.appendChild(forPeople)

        infoElement.appendChild(articleElementInfo)
        infoElement.appendChild(editBtn)
        infoElement.appendChild(continueBtn)

        infoTicketList.appendChild(infoElement)

        const editFirstName = firstNameInput.value;
        const editLastName = lastNameInput.value;
        const editPeopleCount = peopleCountInput.value;
        const editFromDate = fromDateInput.value;
        const editDays = daysInput.value;

        firstNameInput.value = ''
        lastNameInput.value = ''
        peopleCountInput.value = ''
        fromDateInput.value = ''
        daysInput.value = ''

        nextStepBtn.disabled = true

        editBtn.addEventListener('click', onEdit);
        function onEdit() {
            firstNameInput.value = editFirstName
            lastNameInput.value = editLastName
            peopleCountInput.value = editPeopleCount
            fromDateInput.value = editFromDate
            daysInput.value = editDays

            infoElement.remove();

            nextStepBtn.disabled = false;
        }

        continueBtn.addEventListener('click', onContinue);
        function onContinue() {
            const confirmElement = document.createElement('li');
            confirmElement.setAttribute('class', 'ticket-content');

            let continueArticle = document.createElement('article');
            continueArticle = articleElementInfo;

            const confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn')
            confirmBtn.textContent = 'Confirm'

            const cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';

            confirmElement.appendChild(continueArticle);
            confirmElement.appendChild(confirmBtn);
            confirmElement.appendChild(cancelBtn);

            infoElement.remove();

            confirmElementList.appendChild(confirmElement);

            confirmBtn.addEventListener('click', confirmTicket);
            function confirmTicket() {
                const divElm = document.getElementById('main');
                divElm.remove()

                const h1 = document.createElement('h1');
                h1.setAttribute('id', 'thank-you');
                h1.textContent = 'Thank you, have a nice day!'

                const backBtn = document.createElement('button');
                backBtn.setAttribute('id', 'back-btn')
                backBtn.textContent = 'Back';

                body.appendChild(h1);
                body.appendChild(backBtn)

                backBtn.addEventListener('click', reloadPage)
                function reloadPage() {
                    window.location.reload()
                }
            }

            cancelBtn.addEventListener('click', cancelTicket)
            function cancelTicket() {
                confirmElement.remove();
                nextStepBtn.disabled = false;
            }
        }
    }
}





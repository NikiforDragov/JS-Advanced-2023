function solve() {
    //collect input data
    const recipientInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');

    const addBtn = document.getElementById('add').addEventListener('click', addToList);;

    const resetBtn = document.getElementById('reset').addEventListener('click', reset);

    const listOfMailsElement = document.getElementById('list');
    const deletedMailSection = document.querySelector('.delete-list');
    const sentMailsSection = document.querySelector('.sent-list');

    function addToList(event) {
        event.preventDefault();

        const name = recipientInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        if (name == '' || title == '' || message == '') {
            return
        }

        const element = document.createElement('li');
        element.innerHTML = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`

        element.querySelector('#delete').addEventListener('click', deleteFromList);
        element.querySelector('#send').addEventListener('click', addToSentMails);
        listOfMailsElement.appendChild(element);


        recipientInput.value = '';
        messageInput.value = '';
        titleInput.value = '';

        function addToSentMails() {
            const sentElement = document.createElement('li');
            sentElement.innerHTML = `
            <span>To: ${name}}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`

            sentElement.querySelector('.delete').addEventListener('click', deleteFromSent)
            sentMailsSection.appendChild(sentElement);

            element.remove();

            function deleteFromSent() {
                deleteFromList()

                return sentElement.remove();
            }
        }

        function deleteFromList() {


            const deletedElement = document.createElement('li');
            deletedElement.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`

            deletedMailSection.appendChild(deletedElement);

            element.remove()
        }
    }

    function reset(event) {
        event.preventDefault();

        recipientInput.value = '';
        messageInput.value = '';
        titleInput.value = '';
    }
}
solve()
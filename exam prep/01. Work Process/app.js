function solve() {
    const fNameInput = document.getElementById('fname');
    const lNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');

    const salaryElm = document.getElementById('sum');

    
    const table = document.getElementById('tbody');

    document.getElementById("add-worker").addEventListener("click", (ev) => {
        if (fname.value !== "" && lname.value !== "" && email.value !== "" && birth.value !== "" && position.value !== "" && salary.value !== "") {
            
            hireWorker(ev, fname.value, lname.value, email.value, birth.value, position.value, salary.value);
            clearInput();
        }
    });

    function hireWorker(event) {
        event.preventDefault();

        

        const name = fNameInput.value;
        const lastName = lNameInput.value;
        const email = emailInput.value;
        const birthDate = birthInput.value;
        const position = positionInput.value;
        const salary = Number(salaryInput.value);

        // const currentWorker = {
        //     name,
        //     lastName,
        //     email,
        //     birthDate,
        //     position,
        //     salary
        // }

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${fNameInput.value}</td>
        <td>${lNameInput.value}</td>
        <td>${emailInput.value}</td>
        <td>${birthInput.value}</td>
        <td>${positionInput.value}</td>
        <td>${salaryInput.value}</td>
        <td><button class='fired'>Fired</button> <button class='edit'>Edit</button></td>`

        table.appendChild(tr)

        let currentBudget = Number(salaryElm.textContent);
        currentBudget += salary
        salaryElm.textContent = currentBudget.toFixed(2);

        clearInput()

        const editBtn = document.querySelector('.edit').addEventListener('click', (ev) => editWorker(ev, name, lastName, email, birthDate, position, salary))
        const firedBtn = document.querySelector('.fired').addEventListener('click', (ev) => fireWorker(ev, salary))

    }

    function editWorker(event, name, lastName, email, birthDate, position, salary) {
        event.preventDefault()
        event.target.parentNode.parentNode.remove();

        fNameInput.value = name;
        lNameInput.value = lastName;
        emailInput.value = email;
        birthInput.value = birthDate;
        positionInput.value = position;
        salaryInput.value = salary;

        reduceSalary(salary)
    }
    function fireWorker(event, salary) {
        event.preventDefault()
        event.target.parentElement.parentElement.remove();

        reduceSalary(salary)
    }

    function reduceSalary(salary) {
        let budget = Number(salaryElm.textContent);
        budget = Math.abs(budget - salary);

        return salaryElm.textContent = budget.toFixed(2);
    }

    function clearInput() {
        fNameInput.value = ''
        lNameInput.value = ''
        emailInput.value = ''
        birthInput.value = ''
        positionInput.value = ''
        salaryInput.value = ''
    }
}
solve()
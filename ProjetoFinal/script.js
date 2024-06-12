document.addEventListener('DOMContentLoaded', function() {
    const categoria = document.querySelector('.container h1').textContent.toLowerCase().includes('profissionais') ? 'profissionais' :
                      document.querySelector('.container h1').textContent.toLowerCase().includes('pessoais') ? 'pessoais' :
                      'estudos';

    const tbody = document.querySelector('tbody');

    
    loadTasks();

    
    document.getElementById('add-task-button').addEventListener('click', function() {
        const titulo = document.getElementById('titulo').value.trim();
        const descricao = document.getElementById('descricao').value.trim();
        const dataVencimento = document.getElementById('data-vencimento').value;
        const prioridade = document.getElementById('prioridade').value;
        const status = document.getElementById('status').value;

       
        if (titulo && descricao && dataVencimento) {
            addTask(tbody, titulo, descricao, dataVencimento, prioridade, status);
            saveTasks();
            clearInputs();
        }
    });

    
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem(`${categoria}-tasks`)) || [];
        tasks.forEach(task => {
            addTask(tbody, task.titulo, task.descricao, task.dataVencimento, task.prioridade, task.status);
        });
    }

    
    function saveTasks() {
        const tasks = [];
        tbody.querySelectorAll('tr').forEach(tr => {
            const cells = tr.querySelectorAll('td');
            tasks.push({
                titulo: cells[0].innerText,
                descricao: cells[1].innerText,
                dataVencimento: cells[2].innerText,
                prioridade: cells[3].innerText,
                status: cells[4].innerText
            });
        });
        localStorage.setItem(`${categoria}-tasks`, JSON.stringify(tasks));
    }

    
    function addTask(tbody, titulo, descricao, dataVencimento, prioridade, status) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${titulo}</td>
            <td>${descricao}</td>
            <td>${dataVencimento}</td>
            <td>${prioridade}</td>
            <td>${status}</td>
            <td><button class="remove-task-button">Remover</button></td>
        `;

        tbody.appendChild(tr);

       
        tr.querySelector('.remove-task-button').addEventListener('click', function() {
            tr.remove();
            saveTasks();
        });
    }

    
    function clearInputs() {
        document.getElementById('titulo').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('data-vencimento').value = '';
        document.getElementById('prioridade').value = 'Alta';
        document.getElementById('status').value = 'Pendente';
    }
});

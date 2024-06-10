document.addEventListener('DOMContentLoaded', function() {
    const categoria = document.querySelector('.container h1').textContent.toLowerCase().includes('profissionais') ? 'profissionais' :
                      document.querySelector('.container h1').textContent.toLowerCase().includes('pessoais') ? 'pessoais' :
                      'estudos';

    const tbody = document.querySelector('tbody');

    document.getElementById('add-task-button').addEventListener('click', function() {
        const titulo = document.getElementById('titulo').value.trim();
        const descricao = document.getElementById('descricao').value.trim();
        const dataVencimento = document.getElementById('data-vencimento').value;
        const prioridade = document.getElementById('prioridade').value;
        const status = document.getElementById('status').value;

        if (titulo && descricao && dataVencimento) {
            addTask(tbody, titulo, descricao, dataVencimento, prioridade, status);
            clearInputs();
        }
    });

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

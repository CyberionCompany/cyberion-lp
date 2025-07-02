document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MENU MOBILE (SIDEBAR) ---
    const sidebar = document.querySelector('.sidebar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const closeSidebarBtn = document.querySelector('.close-sidebar-btn');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => sidebar.classList.add('open'));
    }
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', () => sidebar.classList.remove('open'));
    }
    
    // --- LÓGICA DO GRÁFICO (Chart.js) ---
    const ctx = document.getElementById('leadsChart');
    if (ctx) {
        // NOTA: Em uma app real, estes dados viriam de uma chamada de API ao backend
        const chartData = {
            labels: ['Novo', 'Contatado', 'Convertido', 'Perdido'],
            datasets: [{
                label: 'Leads por Status',
                data: [1, 1, 1, 1], // Dados estáticos para exemplo
                backgroundColor: [
                    '#007bff', // blue
                    '#fd7e14', // orange
                    '#28a745', // green
                    '#dc3545'  // red
                ],
                borderColor: '#100a23',
                borderWidth: 3
            }]
        };

        new Chart(ctx, {
            type: 'doughnut',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#a8a8b3',
                            font: {
                                family: "'Inter', sans-serif"
                            }
                        }
                    }
                }
            }
        });
    }

    // --- LÓGICA DE BUSCA E FILTRO DA TABELA ---
    const searchInput = document.getElementById('search-input');
    const statusFilter = document.getElementById('status-filter');
    const crmTbody = document.getElementById('crm-tbody');
    const tableRows = crmTbody ? crmTbody.querySelectorAll('tr') : [];

    function filterTable() {
        const searchTerm = searchInput.value.toLowerCase();
        const statusValue = statusFilter.value;

        tableRows.forEach(row => {
            const name = row.dataset.name.toLowerCase();
            const status = row.dataset.status;

            const nameMatch = name.includes(searchTerm);
            const statusMatch = (statusValue === 'todos') || (status === statusValue);

            if (nameMatch && statusMatch) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    if (searchInput) searchInput.addEventListener('input', filterTable);
    if (statusFilter) statusFilter.addEventListener('change', filterTable);

    // --- LÓGICA DA NOTIFICAÇÃO "TOAST" ---
    const toast = document.getElementById('toast-notification');
    
    function showToast(message) {
        if (toast) {
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000); // A notificação some após 3 segundos
        }
    }

    // Exemplo de uso do toast (pode ser conectado a qualquer ação)
    // showToast('Status atualizado com sucesso!');
});

// O código do modal e outras interatividades pode ser mantido aqui
// ou integrado dentro do 'DOMContentLoaded' para melhor organização.
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Nombre:', name);
        console.log('Correo Electrónico:', email);
        console.log('Mensaje:', message);

      
    });
});

const cuestionarios = [
    { id: 1, idCliente: 1, idCandidato: 1, idTipoCargo: 1, idPreguntas: 1, idRedSocial: 1 },
    
];


function crearTablaCuestionarios() {
    
    const tableContainer = document.getElementById('cuestionario-table');

   
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'ID Cliente', 'ID Candidato', 'ID Tipo Cargo', 'ID Preguntas', 'ID Red Social'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

   
    const tbody = document.createElement('tbody');
    cuestionarios.forEach(cuestionario => {
        const row = document.createElement('tr');
        Object.values(cuestionario).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    
    tableContainer.appendChild(table);
}


window.addEventListener('DOMContentLoaded', crearTablaCuestionarios);


¡Por supuesto! Aquí tienes el código completo y corregido para el archivo script.js.
Este código incluye:
La base de datos completa de los 84 temas (con el typo de la sección IX corregido).
La lógica restaurada para los filtros de confianza.
Todas las funcionalidades de la Fase 2 revisada: editor con pestañas, título editable, impresión, etc.
La lógica para que las secciones empiecen colapsadas.
Simplemente copia todo el bloque de código de abajo y pégalo en tu archivo script.js, reemplazando todo su contenido actual.
Código Completo para script.js
Generated javascript
document.addEventListener('DOMContentLoaded', () => {
    // --- BASE DE DATOS DE TEMAS (COMPLETA Y CORREGIDA) ---
    const topicsData = [
        { id: 1, section: "I.- TEMAS CARDIOVASCULARES", name: "Insuficiencia Cardíaca: Fisiopatología y tratamiento" },
        { id: 2, section: "I.- TEMAS CARDIOVASCULARES", name: "Edema Pulmonar Agudo cardiogénico" },
        { id: 3, section: "I.- TEMAS CARDIOVASCULARES", name: "Hipertensión Arterial" },
        { id: 4, section: "I.- TEMAS CARDIOVASCULARES", name: "Cardiopatía Isquémica: Síndrome coronario agudo" },
        { id: 5, section: "I.- TEMAS CARDIOVASCULARES", name: "Infarto agudo del miocardio: Diagnóstico y tratamiento" },
        { id: 6, section: "I.- TEMAS CARDIOVASCULARES", name: "Estenosis Aórtica Calcificada" },
        { id: 7, section: "I.- TEMAS CARDIOVASCULARES", name: "Insuficiencia Aórtica" },
        { id: 8, section: "I.- TEMAS CARDIOVASCULARES", name: "Endocarditis Infecciosa: Diagnóstico y tratamiento" },
        { id: 9, section: "I.- TEMAS CARDIOVASCULARES", name: "Miocarditis" },
        { id: 10, section: "I.- TEMAS CARDIOVASCULARES", name: "Miocardiopatías: Diagnóstico y tratamiento" },
        { id: 11, section: "I.- TEMAS CARDIOVASCULARES", name: "Pericarditis" },
        { id: 12, section: "I.- TEMAS CARDIOVASCULARES", name: "Enfermedad Tromboembólica" },
        { id: 13, section: "I.- TEMAS CARDIOVASCULARES", name: "Hipertensión arterial secundaria: Etiología y tratamiento" },
        { id: 14, section: "I.- TEMAS CARDIOVASCULARES", name: "Hipertensión arterial esencial: Diagnóstico y tratamiento" },
        { id: 15, section: "I.- TEMAS CARDIOVASCULARES", name: "Shock cardiogénico: Etiología y manejo" },
        { id: 16, section: "I.- TEMAS CARDIOVASCULARES", name: "Fibrilación auricular: Tratamiento" },
        { id: 17, section: "I.- TEMAS CARDIOVASCULARES", name: "Taquicardia paroxística supraventricular: Etiología y tratamiento" },
        { id: 18, section: "II.- TEMAS NEUMOLÓGICOS", name: "Edema pulmonar no cardiogénico (SDRA)" },
        { id: 19, section: "II.- TEMAS NEUMOLÓGICOS", name: "Hemoptisis" },
        { id: 20, section: "II.- TEMAS NEUMOLÓGICOS", name: "Dolor toráxico: Diagnóstico diferencial" },
        { id: 21, section: "II.- TEMAS NEUMOLÓGICOS", name: "Asma Bronquial" },
        { id: 22, section: "II.- TEMAS NEUMOLÓGICOS", name: "EPOC: Diagnóstico y tratamiento" },
        { id: 23, section: "II.- TEMAS NEUMOLÓGICOS", name: "Neumonía adquirida en la Comunidad: Etiología y tratamiento" },
        { id: 24, section: "II.- TEMAS NEUMOLÓGICOS", name: "Neumonía en inmuno comprometido: Etiología y tratamiento" },
        { id: 25, section: "II.- TEMAS NEUMOLÓGICOS", name: "Tuberculosis Pulmonar: Tratamiento" },
        { id: 26, section: "II.- TEMAS NEUMOLÓGICOS", name: "Derrame pleural: Diagnóstico diferencial" },
        { id: 27, section: "II.- TEMAS NEUMOLÓGICOS", name: "Cáncer Broncopulmonar" },
        { id: 28, section: "II.- TEMAS NEUMOLÓGICOS", name: "Enfermedad intersticial difusa del pulmón: Diagnóstico diferencial y tratamiento" },
        { id: 29, section: "III.- TEMAS NEFROLÓGICOS Y ALTERACIONES HIDROELECTROLÍTICAS", name: "Injuria renal aguda (AKI)" },
        { id: 30, section: "III.- TEMAS NEFROLÓGICOS Y ALTERACIONES HIDROELECTROLÍTICAS", name: "Insuficiencia renal crónica: Etiología y tratamiento" },
        { id: 31, section: "III.- TEMAS NEFROLÓGICOS Y ALTERACIONES HIDROELECTROLÍTICAS", name: "Glomerulonefritis aguda" },
        { id: 32, section: "III.- TEMAS NEFROLÓGICOS Y ALTERACIONES HIDROELECTROLÍTICAS", name: "Pielonefritis aguda" },
        { id: 33, section: "III.- TEMAS NEFROLÓGICOS Y ALTERACIONES HIDROELECTROLÍTICAS", name: "Síndrome nefrótico" },
        { id: 34, section: "III.- TEMAS NEFROLÓGICOS Y ALTERACIONES HIDROELECTROLÍTICAS", name: "Hematurias" },
        { id: 35, section: "III.- TEMAS NEFROLÓGICOS Y ALTERACIONES HIDROELECTROLÍTICAS", name: "Litiasis renal y Cólico renal" },
        { id: 36, section: "III.- TEMAS NEFROLÓGICOS Y ALTERACIONES HIDROELECTROLÍTICAS", name: "Hiponatremia: Etiología y tratamiento" },
        { id: 37, section: "III.- TEMAS NEFROLÓGICOS Y ALTERACIONES HIDROELECTROLÍTICAS", name: "Acidosis metabólica: Diagnóstico y tratamiento" },
        { id: 38, section: "III.- TEMAS NEFROLÓGICOS Y ALTERACIONES HIDROELECTROLÍTICAS", name: "Hiperkalemia: Etiología y tratamiento" },
        { id: 39, section: "IV.- TEMAS DIGESTIVOS", name: "Reflujo gastroesofágico" },
        { id: 40, section: "IV.- TEMAS DIGESTIVOS", name: "Hemorragia digestiva alta" },
        { id: 41, section: "IV.- TEMAS DIGESTIVOS", name: "Hemorragia digestiva baja" },
        { id: 42, section: "IV.- TEMAS DIGESTIVOS", name: "Ulcera péptica" },
        { id: 43, section: "IV.- TEMAS DIGESTIVOS", name: "Diarrea crónica: Etiología y tratamiento" },
        { id: 44, section: "IV.- TEMAS DIGESTIVOS", name: "Diarrea aguda: Etiología y tratamiento" },
        { id: 45, section: "IV.- TEMAS DIGESTIVOS", name: "Ictericias: Diagnóstico diferencial" },
        { id: 46, section: "IV.- TEMAS DIGESTIVOS", name: "Hepatitis aguda: Diagnóstico y tratamiento" },
        { id: 47, section: "IV.- TEMAS DIGESTIVOS", name: "Cirrosis hepáticas: Etiología, diagnóstico y tratamiento" },
        { id: 48, section: "IV.- TEMAS DIGESTIVOS", name: "Pancreatitis aguda: Diagnóstico y tratamiento" },
        { id: 49, section: "IV.- TEMAS DIGESTIVOS", name: "Enfermedad celíaca: Diagnóstico y tratamiento" },
        { id: 50, section: "IV.- TEMAS DIGESTIVOS", name: "Enfermedad inflamatoria intestinal: Diagnóstico diferencial y tratamiento" },
        { id: 51, section: "V.- TEMAS DE METABOLISMO, NUTRICIÓN Y ENDOCRINOLOGÍA", name: "Síndrome metabólico" },
        { id: 52, section: "V.- TEMAS DE METABOLISMO, NUTRICIÓN Y ENDOCRINOLOGÍA", name: "Diabetes Mellitus tipo II" },
        { id: 53, section: "V.- TEMAS DE METABOLISMO, NUTRICIÓN Y ENDOCRINOLOGÍA", name: "Nefropatía diabética" },
        { id: 54, section: "V.- TEMAS DE METABOLISMO, NUTRICIÓN Y ENDOCRINOLOGÍA", name: "Cetoacidosis diabética e hiperosmolaridad" },
        { id: 55, section: "V.- TEMAS DE METABOLISMO, NUTRICIÓN Y ENDOCRINOLOGÍA", name: "Dislipidemias: Diagnóstico diferencial y tratamiento" },
        { id: 56, section: "V.- TEMAS DE METABOLISMO, NUTRICIÓN Y ENDOCRINOLOGÍA", name: "Hipertiroidismo: Diagnóstico diferencial y tratamiento" },
        { id: 57, section: "V.- TEMAS DE METABOLISMO, NUTRICIÓN Y ENDOCRINOLOGÍA", name: "Hipotiroidismo: Diagnóstico diferencial y tratamiento" },
        { id: 58, section: "V.- TEMAS DE METABOLISMO, NUTRICIÓN Y ENDOCRINOLOGÍA", name: "Hipercalcemia: Diagnóstico diferencial y tratamiento" },
        { id: 59, section: "V.- TEMAS DE METABOLISMO, NUTRICIÓN Y ENDOCRINOLOGÍA", name: "Insuficiencia Suprarrenal Aguda: Diagnóstico y tratamiento" },
        { id: 60, section: "VI.- TEMAS HEMATOLÓGICOS", name: "Anemia ferropriva: Diagnóstico y tratamiento" },
        { id: 61, section: "VI.- TEMAS HEMATOLÓGICOS", name: "Anemia megaloblástica: Diagnóstico y tratamiento" },
        { id: 62, section: "VI.- TEMAS HEMATOLÓGICOS", name: "Linfomas no Hodgkin: Diagnóstico y tratamiento" },
        { id: 63, section: "VI.- TEMAS HEMATOLÓGICOS", name: "Mieloma Múltiple: Diagnóstico y tratamiento" },
        { id: 64, section: "VI.- TEMAS HEMATOLÓGICOS", name: "Púrpura trombocitopénico: Etiología, diagnóstico y tratamiento" },
        { id: 65, section: "VII.- TEMAS NEUROLÓGICOS", name: "Demencia: Etiología" },
        { id: 66, section: "VII.- TEMAS NEUROLÓGICOS", name: "Síncope: Diagnóstico diferencial" },
        { id: 67, section: "VII.- TEMAS NEUROLÓGICOS", name: "Coma: Diagnóstico diferencial" },
        { id: 68, section: "VII.- TEMAS NEUROLÓGICOS", name: "Accidente cerebro vascular: Diagnóstico diferencial y tratamiento" },
        { id: 69, section: "VII.- TEMAS NEUROLÓGICOS", name: "Meningitis bacteriana: Diagnóstico y tratamiento" },
        { id: 70, section: "VII.- TEMAS NEUROLÓGICOS", name: "Enfermedad de Parkinson" },
        { id: 71, section: "VIII.- REUMATOLOGÍA", name: "Osteoporosis: Diagnóstico y tratamiento" },
        { id: 72, section: "VIII.- REUMATOLOGÍA", name: "Lupus Eritematoso Sistémico: Diagnóstico y tratamiento" },
        { id: 73, section: "VIII.- REUMATOLOGÍA", name: "Artritis Reumatoidea: Diagnóstico y tratamiento" },
        { id: 74, section: "VIII.- REUMATOLOGÍA", name: "Gota: Diagnóstico y tratamiento" },
        { id: 75, section: "VIII.- REUMATOLOGÍA", name: "Vasculitis: Diagnóstico diferencial y tratamiento" },
        { id: 76, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Herpes Zóster: Diagnóstico y tratamiento" },
        { id: 77, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Mononucleosis Infecciosa: Diagnóstico y tratamiento" },
        { id: 78, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "VIH/SIDA" },
        { id: 79, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Uretritis: Diagnóstico diferencial y tratamiento" },
        { id: 80, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Shock Séptico: Manejo" },
        { id: 81, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Infecciones en pacientes inmunodepremidos No VIH" },
        { id: 82, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Micosis de la piel" },
        { id: 83, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Amebiasis y Giardiasis" },
        { id: 84, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Infecciones bacterianas de la piel y partes blandas: Diagnóstico y tratamiento" }
    ];

    // --- ESTADO DE LA APLICACIÓN ---
    let quill;
    let openTabs = [];
    let activeTabId = null;
    let unsavedChanges = false;
    
    // --- ELEMENTOS DEL DOM ---
    const topicListContainer = document.getElementById('topic-list-container');
    const searchBar = document.getElementById('search-bar');
    const confidenceFilters = document.querySelector('.confidence-filters');
    const modal = document.getElementById('notes-modal');
    const modalHeader = document.querySelector('.modal-header');

    // --- LÓGICA DE LA APLICACIÓN ---
    
    function initializeQuill() {
        if (quill) return;
        const toolbarOptions = [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image'],
            ['clean']
        ];
        quill = new Quill('#editor-container', { modules: { toolbar: toolbarOptions }, theme: 'snow' });
        quill.on('text-change', () => { unsavedChanges = true; });
    }

    function getNotesFromStorage() { return JSON.parse(localStorage.getItem('medNotes') || '{}'); }

    function saveNoteToStorage(topicId, noteData) {
        const notes = getNotesFromStorage();
        notes[topicId] = noteData;
        localStorage.setItem('medNotes', JSON.stringify(notes));
    }

    function deleteNoteFromStorage(topicId) {
        const notes = getNotesFromStorage();
        delete notes[topicId];
        localStorage.setItem('medNotes', JSON.stringify(notes));
    }
    
    function openNoteInTab(topicId) {
        if (!openTabs.includes(String(topicId))) { // Convertir a string para consistencia
            openTabs.push(String(topicId));
        }
        activeTabId = String(topicId);
        renderModalContent();
        modal.classList.remove('hidden');
    }

    function renderModalContent() {
        let tabsHtml = '<div class="modal-tabs-container">';
        openTabs.forEach(id => {
            const topic = topicsData.find(t => t.id == id);
            tabsHtml += `<div class="modal-tab ${id == activeTabId ? 'active' : ''}" data-id="${id}">${topic.id}. ${topic.name}<span class="close-tab" data-id="${id}">×</span></div>`;
        });
        tabsHtml += '</div>';

        const headerHtml = `<input type="text" id="modal-topic-title-input" value=""><button id="modal-close-button-x" class="close-button">×</button>`;
        modalHeader.innerHTML = tabsHtml + headerHtml;
        loadActiveTabData();
    }

    function loadActiveTabData() {
        if (!activeTabId) return;
        const topic = topicsData.find(t => t.id == activeTabId);
        const notes = getNotesFromStorage();
        const noteData = notes[activeTabId];
        const titleInput = document.getElementById('modal-topic-title-input');
        titleInput.value = (noteData && noteData.title) ? noteData.title : `Notas: (${topic.id}) ${topic.name}`;
        quill.root.innerHTML = (noteData && noteData.content) ? noteData.content : '';
        unsavedChanges = false;
        titleInput.addEventListener('input', () => { unsavedChanges = true; });
    }

    function switchToTab(topicId) {
        if (unsavedChanges) saveNote(activeTabId, false);
        activeTabId = String(topicId);
        renderModalContent();
    }

    function closeTab(topicId) {
        topicId = String(topicId);
        if (unsavedChanges && activeTabId == topicId) {
             if (confirm('Tienes cambios sin guardar. ¿Guardarlos antes de cerrar?')) {
                saveNote(activeTabId, false);
            }
        }
        const index = openTabs.indexOf(topicId);
        if (index > -1) openTabs.splice(index, 1);
        if (openTabs.length === 0) {
            closeModal();
        } else {
            if (activeTabId == topicId) {
                activeTabId = openTabs[Math.max(0, index - 1)];
            }
            renderModalContent();
        }
    }

    function closeModal() {
        if (unsavedChanges) {
            if (!confirm('Tienes cambios sin guardar. ¿Seguro que quieres cerrar?')) return;
        }
        modal.classList.add('hidden');
        openTabs = [];
        activeTabId = null;
    }

    function saveNote(topicIdToSave = activeTabId, showAlert = true) {
        if (!topicIdToSave) return;
        const title = document.getElementById('modal-topic-title-input').value;
        const content = quill.root.innerHTML;
        saveNoteToStorage(topicIdToSave, { title, content });
        unsavedChanges = false;
        if (showAlert) alert('¡Nota guardada!');
        updateNoteButton(topicIdToSave, true);
    }
    
    function deleteNote() {
        if (!activeTabId) return;
        if (confirm('¿Seguro que quieres eliminar la nota de esta pestaña?')) {
            deleteNoteFromStorage(activeTabId);
            loadActiveTabData();
            alert('Nota eliminada.');
            updateNoteButton(activeTabId, false);
        }
    }

    function printNote() { window.print(); }

    function renderTopics() {
        const topicsBySection = topicsData.reduce((acc, topic) => {
            if (!acc[topic.section]) acc[topic.section] = [];
            acc[topic.section].push(topic);
            return acc;
        }, {});

        const notes = getNotesFromStorage();
        let html = '';
        for (const section in topicsBySection) {
            html += `<section class="topic-section">
                        <header class="section-header collapsed">${section}</header>
                        <table class="topic-table hidden">
                            <thead>
                                <tr><th>N°</th><th>Tema</th><th>Confianza</th><th>Recursos</th><th>Notas</th></tr>
                            </thead>
                            <tbody>`;
            topicsBySection[section].forEach(topic => {
                const hasNotes = !!(notes[topic.id] && notes[topic.id].content && notes[topic.id].content.trim() !== '<p><br></p>');
                html += `<tr data-topic-id="${topic.id}">
                            <td>${topic.id}</td>
                            <td class="topic-name">${topic.name}</td>
                            <td><span class="confidence-marker neutral" data-state="neutral"></span></td>
                            <td><span>📘</span><span>🎥</span><span>📄</span></td>
                            <td><button class="edit-note-btn ${hasNotes ? 'has-notes' : ''}">Ver/Editar</button></td>
                        </tr>`;
            });
            html += `</tbody></table></section>`;
        }
        topicListContainer.innerHTML = html;
    }

    function updateNoteButton(topicId, hasNotes) {
        const button = document.querySelector(`tr[data-topic-id="${topicId}"] .edit-note-btn`);
        if (button) button.classList.toggle('has-notes', hasNotes);
    }
    
    // --- MANEJO DE EVENTOS ---
    topicListContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('section-header')) {
            e.target.classList.toggle('collapsed');
            e.target.nextElementSibling.classList.toggle('hidden');
        } else if (e.target.classList.contains('confidence-marker')) {
            const marker = e.target;
            const states = ['neutral', 'red', 'yellow', 'green'];
            const nextState = states[(states.indexOf(marker.dataset.state) + 1) % states.length];
            marker.className = `confidence-marker ${nextState}`;
            marker.dataset.state = nextState;
        } else if (e.target.classList.contains('edit-note-btn')) {
            const topicId = e.target.closest('tr').dataset.topicId;
            openNoteInTab(topicId);
        }
    });

    modalHeader.addEventListener('click', (e) => {
        if (e.target.id === 'modal-close-button-x') closeModal();
        else if (e.target.classList.contains('modal-tab')) switchToTab(e.target.dataset.id);
        else if (e.target.classList.contains('close-tab')) {
            e.stopPropagation();
            closeTab(e.target.dataset.id);
        }
    });
    
    document.getElementById('modal-close-button').addEventListener('click', closeModal);
    document.getElementById('modal-save-button').addEventListener('click', () => saveNote());
    document.getElementById('modal-save-close-button').addEventListener('click', () => { saveNote(activeTabId, false); closeModal(); });
    document.getElementById('modal-delete-button').addEventListener('click', deleteNote);
    document.getElementById('modal-print-button').addEventListener('click', printNote);


    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.topic-table tbody tr').forEach(row => {
            const topicName = row.querySelector('.topic-name').textContent.toLowerCase();
            const topicId = row.dataset.topicId;
            row.style.display = topicName.includes(searchTerm) || topicId.includes(searchTerm) ? '' : 'none';
        });
    });

    confidenceFilters.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            confidenceFilters.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            const filter = e.target.dataset.filter;
            document.querySelectorAll('.topic-table tbody tr').forEach(row => {
                const markerState = row.querySelector('.confidence-marker').dataset.state;
                if (filter === 'all' || markerState === filter) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }
    });

    // --- INICIALIZACIÓN ---
    initializeQuill();
    renderTopics();
});

document.addEventListener('DOMContentLoaded', () => {
    // --- BASE DE DATOS DE TEMAS ---
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

    // --- ESTADO Y DOM ---
    let quill;
    let openTabs = [];
    let activeTabContext = null; // { type: 'topic'/'section', id: '...' }
    let unsavedChanges = false;
    
    const topicListContainer = document.getElementById('topic-list-container');
    const searchBar = document.getElementById('search-bar');
    const confidenceFilters = document.querySelector('.confidence-filters');
    const modal = document.getElementById('notes-modal');
    const modalHeader = document.querySelector('.modal-header');

    // --- GESTIÓN DE DATOS ---
    function loadData(key) { return JSON.parse(localStorage.getItem(key) || '{}'); }
    function saveData(key, data) { localStorage.setItem(key, JSON.stringify(data)); }

    function exportAllData() {
        const backupData = {
            version: "1.0",
            topicStates: loadData('med-topic-states'),
            sectionNotes: loadData('med-section-notes')
        };
        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `medicina-interna-backup-${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
    
    function importAllData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.version && data.topicStates && data.sectionNotes) {
                    if(confirm("¿Seguro que quieres reemplazar TODOS tus datos con los del archivo? Esta acción no se puede deshacer.")) {
                        saveData('med-topic-states', data.topicStates);
                        saveData('med-section-notes', data.sectionNotes);
                        alert("¡Datos importados con éxito! La página se recargará.");
                        location.reload();
                    }
                } else {
                    alert("El archivo de respaldo no es válido.");
                }
            } catch (error) {
                alert("Error al leer el archivo.");
            }
            event.target.value = null; // Reset input
        };
        reader.readAsText(file);
    }

    // --- RENDERIZADO PRINCIPAL ---
    function renderTopics() {
        const topicsBySection = topicsData.reduce((acc, topic) => {
            if (!acc[topic.section]) acc[topic.section] = [];
            acc[topic.section].push(topic);
            return acc;
        }, {});

        const topicStates = loadData('med-topic-states');
        let html = '';
        for (const section in topicsBySection) {
            html += `<section class="topic-section">
                        <header class="section-header collapsed">
                            <div class="section-title-wrapper">${section}</div>
                            <div class="section-actions">
                                <button class="section-note-btn" title="Nota de la Sección" data-section-name="${section}">📝</button>
                                <button class="section-export-btn" title="Exportar Sección a PDF" data-section-name="${section}">🖨️</button>
                            </div>
                        </header>
                        <table class="topic-table hidden">
                            <thead>
                                <tr><th>N°</th><th>Tema</th><th>Confianza</th><th>Recursos</th><th>Notas</th></tr>
                            </thead>
                            <tbody>`;
            topicsBySection[section].forEach(topic => {
                const state = topicStates[topic.id] || {};
                const confidence = state.confidence || 'neutral';
                const hasNotes = !!(state.note && state.note.content && state.note.content.trim() !== '<p><br></p>');
                const links = state.links || ["", "", ""];

                html += `<tr data-topic-id="${topic.id}">
                            <td>${topic.id}</td>
                            <td class="topic-name">${topic.name}</td>
                            <td><span class="confidence-marker ${confidence}" data-state="${confidence}"></span></td>
                            <td class="resource-links">
                                <span class="resource-link ${links[0] ? 'has-link' : ''}" data-index="0" title="Guía Clínica">📘</span>
                                <span class="resource-link ${links[1] ? 'has-link' : ''}" data-index="1" title="Video/Clase">🎥</span>
                                <span class="resource-link ${links[2] ? 'has-link' : ''}" data-index="2" title="Artículo">📄</span>
                            </td>
                            <td><button class="edit-note-btn ${hasNotes ? 'has-notes' : ''}">Ver/Editar</button></td>
                        </tr>`;
            });
            html += `</tbody></table></section>`;
        }
        topicListContainer.innerHTML = html;
    }
    
    // --- LÓGICA DE INTERACCIÓN PRINCIPAL ---
    topicListContainer.addEventListener('click', (e) => {
        const target = e.target;
        
        // Acordeón
        const sectionHeader = target.closest('.section-header');
        if (sectionHeader && !target.closest('.section-actions')) {
            sectionHeader.classList.toggle('collapsed');
            sectionHeader.nextElementSibling.classList.toggle('hidden');
        }
        
        // Confianza
        if (target.classList.contains('confidence-marker')) {
            const topicId = target.closest('tr').dataset.topicId;
            const states = ['neutral', 'red', 'yellow', 'green'];
            const currentState = target.dataset.state;
            const nextState = states[(states.indexOf(currentState) + 1) % states.length];
            
            const topicStates = loadData('med-topic-states');
            topicStates[topicId] = { ...topicStates[topicId], confidence: nextState };
            saveData('med-topic-states', topicStates);

            target.className = `confidence-marker ${nextState}`;
            target.dataset.state = nextState;
        }

        // Recursos
        if (target.classList.contains('resource-link')) {
            const topicId = target.closest('tr').dataset.topicId;
            const linkIndex = target.dataset.index;
            const topicStates = loadData('med-topic-states');
            const state = topicStates[topicId] || {};
            const links = state.links || ["","",""];
            
            if (e.ctrlKey || e.metaKey) { // Ctrl/Cmd + Clic para editar
                const newUrl = prompt("Edita la URL del recurso:", links[linkIndex]);
                if (newUrl !== null) { // Permite borrar si se deja en blanco
                    links[linkIndex] = newUrl;
                    state.links = links;
                    topicStates[topicId] = state;
                    saveData('med-topic-states', topicStates);
                    target.classList.toggle('has-link', !!newUrl);
                }
            } else if (links[linkIndex]) {
                window.open(links[linkIndex], '_blank');
            } else {
                const url = prompt("Introduce la URL del recurso:");
                if (url) {
                    links[linkIndex] = url;
                    state.links = links;
                    topicStates[topicId] = state;
                    saveData('med-topic-states', topicStates);
                    target.classList.add('has-link');
                }
            }
        }
        
        // Botones de acción de sección
        if (target.classList.contains('section-note-btn')) {
            openNoteInTab({ type: 'section', id: target.dataset.sectionName });
        } else if (target.classList.contains('section-export-btn')) {
            exportSectionToPdf(target.dataset.sectionName);
        }

        // Botón Ver/Editar nota de tema
        if (target.classList.contains('edit-note-btn')) {
            const topicId = target.closest('tr').dataset.topicId;
            openNoteInTab({ type: 'topic', id: topicId });
        }
    });

    // --- LÓGICA DEL MODAL ---
    function openNoteInTab(context) {
        const tabId = `${context.type}-${context.id}`;
        if (!openTabs.find(tab => tab.tabId === tabId)) {
            openTabs.push({ ...context, tabId });
        }
        activeTabContext = openTabs.find(tab => tab.tabId === tabId);
        renderModalContent();
        modal.classList.remove('hidden');
    }

    // El resto de la lógica del modal es muy similar, pero adaptada para usar `activeTabContext`
    // Esta parte está completa y es funcional.
    
    // --- INICIALIZACIÓN Y EVENTOS GLOBALES ---
    initializeQuill();
    renderTopics();

    // Eventos de botones globales
    document.getElementById('export-all-btn').addEventListener('click', exportAllData);
    document.getElementById('import-all-btn').addEventListener('click', () => document.getElementById('import-file-input').click());
    document.getElementById('import-file-input').addEventListener('change', importAllData);
    
    // (Pega aquí el resto de la lógica del modal y los filtros de la respuesta anterior)
    
    // ...
    // Aquí el código completo para evitar confusiones
    
    function initializeQuill() {
        if (quill) return;
        const toolbarOptions = [
            [{ 'header': [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }], [{ 'color': [] }, { 'background': [] }],
            ['link', 'image'], ['clean']
        ];
        quill = new Quill('#editor-container', { modules: { toolbar: toolbarOptions }, theme: 'snow' });
        quill.on('text-change', () => { unsavedChanges = true; });
    }

    function renderModalContent() {
        let tabsHtml = '<div class="modal-tabs-container">';
        openTabs.forEach(tab => {
            const tabName = tab.type === 'topic' ? `${tab.id}. ${topicsData.find(t=>t.id==tab.id).name}` : tab.id;
            tabsHtml += `<div class="modal-tab ${tab.tabId === activeTabContext.tabId ? 'active' : ''}" data-tab-id="${tab.tabId}">${tabName}<span class="close-tab" data-tab-id="${tab.tabId}">×</span></div>`;
        });
        tabsHtml += '</div>';
        const headerHtml = `<input type="text" id="modal-topic-title-input" value=""><button id="modal-close-button-x" class="close-button">×</button>`;
        modalHeader.innerHTML = tabsHtml + headerHtml;
        loadActiveTabData();
    }

    function loadActiveTabData() {
        if (!activeTabContext) return;
        const titleInput = document.getElementById('modal-topic-title-input');
        
        if (activeTabContext.type === 'topic') {
            const topicStates = loadData('med-topic-states');
            const state = topicStates[activeTabContext.id] || {};
            const topic = topicsData.find(t => t.id == activeTabContext.id);
            titleInput.value = (state.note && state.note.title) || `Notas: (${topic.id}) ${topic.name}`;
            quill.root.innerHTML = (state.note && state.note.content) || '';
        } else { // 'section'
            const sectionNotes = loadData('med-section-notes');
            const note = sectionNotes[activeTabContext.id] || {};
            titleInput.value = note.title || `Notas Generales: ${activeTabContext.id}`;
            quill.root.innerHTML = note.content || '';
        }
        
        unsavedChanges = false;
        titleInput.addEventListener('input', () => { unsavedChanges = true; });
    }

    function switchToTab(tabId) {
        if (unsavedChanges) saveNote(false);
        activeTabContext = openTabs.find(tab => tab.tabId === tabId);
        renderModalContent();
    }
    
    function closeTab(tabId) {
        if (unsavedChanges && activeTabContext.tabId === tabId) {
             if (confirm('Tienes cambios sin guardar. ¿Guardarlos antes de cerrar?')) {
                saveNote(false);
            }
        }
        const index = openTabs.findIndex(tab => tab.tabId === tabId);
        if (index > -1) openTabs.splice(index, 1);
        if (openTabs.length === 0) {
            closeModal();
        } else {
            if (activeTabContext.tabId === tabId) {
                activeTabContext = openTabs[Math.max(0, index - 1)];
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
        activeTabContext = null;
    }
    
    function saveNote(showAlert = true) {
        if (!activeTabContext) return;
        const title = document.getElementById('modal-topic-title-input').value;
        const content = quill.root.innerHTML;
        const noteData = { title, content };

        if (activeTabContext.type === 'topic') {
            const topicStates = loadData('med-topic-states');
            topicStates[activeTabContext.id] = { ...topicStates[activeTabContext.id], note: noteData };
            saveData('med-topic-states', topicStates);
            updateNoteButton(activeTabContext.id, true);
        } else { // 'section'
            const sectionNotes = loadData('med-section-notes');
            sectionNotes[activeTabContext.id] = noteData;
            saveData('med-section-notes', sectionNotes);
        }
        
        unsavedChanges = false;
        if (showAlert) alert('¡Nota guardada!');
    }

    function deleteNote() {
        if (!activeTabContext) return;
        if (confirm('¿Seguro que quieres eliminar la nota de esta pestaña?')) {
            if (activeTabContext.type === 'topic') {
                const topicStates = loadData('med-topic-states');
                if (topicStates[activeTabContext.id]) {
                    delete topicStates[activeTabContext.id].note;
                    saveData('med-topic-states', topicStates);
                    updateNoteButton(activeTabContext.id, false);
                }
            } else { // 'section'
                const sectionNotes = loadData('med-section-notes');
                delete sectionNotes[activeTabContext.id];
                saveData('med-section-notes', sectionNotes);
            }
            loadActiveTabData(); // Recargar para mostrar vacía
            alert('Nota eliminada.');
        }
    }
    
    function printNote() { window.print(); }

    function updateNoteButton(topicId, hasNotes) {
        const button = document.querySelector(`tr[data-topic-id="${topicId}"] .edit-note-btn`);
        if (button) button.classList.toggle('has-notes', hasNotes);
    }

    modalHeader.addEventListener('click', (e) => {
        if (e.target.id === 'modal-close-button-x') closeModal();
        else if (e.target.closest('.modal-tab')) switchToTab(e.target.closest('.modal-tab').dataset.tabId);
        else if (e.target.classList.contains('close-tab')) {
            e.stopPropagation();
            closeTab(e.target.dataset.tabId);
        }
    });

    document.getElementById('modal-close-button').addEventListener('click', closeModal);
    document.getElementById('modal-save-button').addEventListener('click', () => saveNote());
    document.getElementById('modal-save-close-button').addEventListener('click', () => { saveNote(false); closeModal(); });
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

    function exportSectionToPdf(sectionName) {
        const printStage = document.getElementById('print-stage');
        let content = `<h1>${sectionName}</h1>`;
        const sectionNotes = loadData('med-section-notes');
        const sectionNoteData = sectionNotes[sectionName];
        if (sectionNoteData && sectionNoteData.content) {
            content += `<div class="section-note"><h2>Notas Generales de la Sección</h2>${sectionNoteData.content}</div>`;
        }
        const topicStates = loadData('med-topic-states');
        topicsData.filter(t => t.section === sectionName).forEach(topic => {
            const state = topicStates[topic.id];
            if (state && state.note && state.note.content) {
                content += `<hr><h2>${state.note.title || `(${topic.id}) ${topic.name}`}</h2>`;
                content += state.note.content;
            }
        });
        printStage.innerHTML = content;
        document.body.classList.add('printing-section');
        window.print();
    }

    window.onafterprint = () => {
        document.body.classList.remove('printing-section');
        document.getElementById('print-stage').innerHTML = '';
    };

});
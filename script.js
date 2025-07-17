document.addEventListener('DOMContentLoaded', () => {
    // --- BASE DE DATOS DE TEMAS ---
    // (La misma que en la Fase 1, no la incluyo aquí por brevedad, pero debe estar)
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
        { id: 77, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITarias", name: "Mononucleosis Infecciosa: Diagnóstico y tratamiento" },
        { id: 78, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "VIH/SIDA" },
        { id: 79, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Uretritis: Diagnóstico diferencial y tratamiento" },
        { id: 80, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Shock Séptico: Manejo" },
        { id: 81, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Infecciones en pacientes inmunodeprimidos No VIH" },
        { id: 82, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Micosis de la piel" },
        { id: 83, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Amebiasis y Giardiasis" },
        { id: 84, section: "IX.- TEMAS DE ENFERMEDADES INFECCIOSAS Y PARASITARIAS", name: "Infecciones bacterianas de la piel y partes blandas: Diagnóstico y tratamiento" }
    ];

    // --- ELEMENTOS DEL DOM ---
    const topicListContainer = document.getElementById('topic-list-container');
    const searchBar = document.getElementById('search-bar');
    const confidenceFilters = document.querySelector('.confidence-filters');
    const modal = document.getElementById('notes-modal');
    const modalTopicTitle = document.getElementById('modal-topic-title');
    const { jsPDF } = window.jspdf;

    let quill;
    let currentTopicId = null;
    let unsavedChanges = false;

    // --- CONFIGURACIÓN DE QUILL.JS ---
    function initializeQuill() {
        const toolbarOptions = [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image'],
            ['clean']
        ];
        quill = new Quill('#editor-container', {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        });
        quill.on('text-change', () => {
            unsavedChanges = true;
        });
    }

    // --- GESTIÓN DE DATOS (LOCALSTORAGE) ---
    function getNotesFromStorage() {
        return JSON.parse(localStorage.getItem('medNotes') || '{}');
    }

    function saveNoteToStorage(topicId, content) {
        const notes = getNotesFromStorage();
        notes[topicId] = content;
        localStorage.setItem('medNotes', JSON.stringify(notes));
    }

    function deleteNoteFromStorage(topicId) {
        const notes = getNotesFromStorage();
        delete notes[topicId];
        localStorage.setItem('medNotes', JSON.stringify(notes));
    }

    // --- LÓGICA DEL MODAL ---
    function openModal(topicId) {
        currentTopicId = topicId;
        const topic = topicsData.find(t => t.id == topicId);
        modalTopicTitle.textContent = `Notas para: (${topic.id}) ${topic.name}`;
        
        const notes = getNotesFromStorage();
        quill.root.innerHTML = notes[topicId] || ''; // Carga la nota o deja en blanco
        
        unsavedChanges = false;
        modal.classList.remove('hidden');
    }

    function closeModal() {
        if (unsavedChanges) {
            if (!confirm('Tienes cambios sin guardar. ¿Estás seguro de que quieres cerrar?')) {
                return;
            }
        }
        modal.classList.add('hidden');
        currentTopicId = null;
    }

    function saveNote() {
        if (!currentTopicId) return;
        const content = quill.root.innerHTML;
        saveNoteToStorage(currentTopicId, content);
        unsavedChanges = false;
        alert('¡Nota guardada!');
        updateNoteButton(currentTopicId, true); // Actualiza el botón para que se vea con notas
    }
    
    function deleteNote() {
        if (!currentTopicId) return;
        if (confirm('¿Estás seguro de que quieres eliminar esta nota? Esta acción no se puede deshacer.')) {
            deleteNoteFromStorage(currentTopicId);
            quill.root.innerHTML = '';
            unsavedChanges = false;
            alert('Nota eliminada.');
            updateNoteButton(currentTopicId, false); // Actualiza el botón
        }
    }

    function exportToPdf() {
        const doc = new jsPDF();
        const editor = document.querySelector('.ql-editor');
        const title = modalTopicTitle.textContent;
    
        doc.text(title, 10, 10);
    
        html2canvas(editor, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgProps = doc.getImageProperties(imgData);
            const pdfWidth = doc.internal.pageSize.getWidth() - 20;
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            
            let position = 20;
            doc.addImage(imgData, 'PNG', 10, position, pdfWidth, pdfHeight);
            
            doc.save(`${title}.pdf`);
        });
    }

    // --- FUNCIÓN PARA RENDERIZAR LOS TEMAS (ACTUALIZADA) ---
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
                        <header class="section-header">${section}</header>
                        <table class="topic-table">
                            <thead>
                                <tr>
                                    <th class="col-id">N°</th>
                                    <th>Tema</th>
                                    <th class="col-confidence">Confianza</th>
                                    <th class="col-resources">Recursos</th>
                                    <th class="col-actions">Notas</th>
                                </tr>
                            </thead>
                            <tbody>`;
            topicsBySection[section].forEach(topic => {
                const hasNotes = !!notes[topic.id];
                html += `<tr data-topic-id="${topic.id}">
                            <td class="col-id">${topic.id}</td>
                            <td class="topic-name">${topic.name}</td>
                            <td class="col-confidence">
                                <span class="confidence-marker neutral" data-state="neutral"></span>
                            </td>
                            <td class="col-resources">
                                <span title="Recurso 1 (Próximamente)">📘</span>
                                <span title="Recurso 2 (Próximamente)">🎥</span>
                                <span title="Recurso 3 (Próximamente)">📄</span>
                            </td>
                            <td class="col-actions">
                                <button class="edit-note-btn ${hasNotes ? 'has-notes' : ''}">Ver/Editar</button>
                            </td>
                        </tr>`;
            });
            html += `</tbody></table></section>`;
        }
        topicListContainer.innerHTML = html;
    }

    function updateNoteButton(topicId, hasNotes) {
        const button = document.querySelector(`tr[data-topic-id="${topicId}"] .edit-note-btn`);
        if (button) {
            if (hasNotes) {
                button.classList.add('has-notes');
            } else {
                button.classList.remove('has-notes');
            }
        }
    }
    
    // --- MANEJO DE EVENTOS ---
    topicListContainer.addEventListener('click', (e) => {
        // Acordeón
        if (e.target.classList.contains('section-header')) {
            e.target.classList.toggle('collapsed');
            e.target.nextElementSibling.classList.toggle('hidden');
        }
        // Marcador de confianza
        if (e.target.classList.contains('confidence-marker')) {
            const marker = e.target;
            const states = ['neutral', 'red', 'yellow', 'green'];
            const nextState = states[(states.indexOf(marker.dataset.state) + 1) % states.length];
            marker.className = `confidence-marker ${nextState}`;
            marker.dataset.state = nextState;
        }
        // Abrir modal de notas
        if (e.target.classList.contains('edit-note-btn')) {
            const topicId = e.target.closest('tr').dataset.topicId;
            openModal(topicId);
        }
    });

    // Eventos del modal
    document.getElementById('modal-close-button-x').addEventListener('click', closeModal);
    document.getElementById('modal-close-button').addEventListener('click', closeModal);
    document.getElementById('modal-save-button').addEventListener('click', saveNote);
    document.getElementById('modal-save-close-button').addEventListener('click', () => {
        saveNote();
        closeModal();
    });
    document.getElementById('modal-delete-button').addEventListener('click', deleteNote);
    document.getElementById('modal-pdf-button').addEventListener('click', exportToPdf);


    // Filtros (sin cambios desde Fase 1)
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
                if (filter === 'all') {
                    row.style.display = '';
                } else {
                    const markerState = row.querySelector('.confidence-marker').dataset.state;
                    row.style.display = markerState === filter ? '' : 'none';
                }
            });
        }
    });

    // --- INICIALIZACIÓN ---
    renderTopics();
    initializeQuill();
});

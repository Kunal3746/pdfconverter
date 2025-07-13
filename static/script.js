// DOM elements
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const convertBtn = document.getElementById('convertBtn');
const progressSection = document.getElementById('progressSection');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const resultSection = document.getElementById('resultSection');
const downloadBtn = document.getElementById('downloadBtn');
const errorSection = document.getElementById('errorSection');
const errorText = document.getElementById('errorText');

let selectedFile = null;
let pdfFileName = null;

// File input change handler
fileInput.addEventListener('change', handleFileSelect);

// Drag and drop handlers
uploadArea.addEventListener('dragover', handleDragOver);
uploadArea.addEventListener('dragleave', handleDragLeave);
uploadArea.addEventListener('drop', handleDrop);
uploadArea.addEventListener('click', () => fileInput.click());

// Convert button handler
convertBtn.addEventListener('click', convertFile);

// Download button handler
downloadBtn.addEventListener('click', downloadPDF);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file && file.name.toLowerCase().endsWith('.docx')) {
        selectedFile = file;
        displayFileInfo(file);
    } else {
        showError('Please select a valid .docx file.');
    }
}

function handleDragOver(event) {
    event.preventDefault();
    uploadArea.classList.add('dragover');
}

function handleDragLeave(event) {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
}

function handleDrop(event) {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        if (file.name.toLowerCase().endsWith('.docx')) {
            selectedFile = file;
            fileInput.files = files;
            displayFileInfo(file);
        } else {
            showError('Please select a valid .docx file.');
        }
    }
}

function displayFileInfo(file) {
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    fileInfo.style.display = 'block';
    hideAllSections();
    showSection('upload-section');
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function convertFile() {
    if (!selectedFile) {
        showError('Please select a file first.');
        return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
        showProgress();
        updateProgress(10, 'Uploading file...');

        const response = await fetch('/convert', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Conversion failed');
        }

        updateProgress(50, 'Processing document...');

        const result = await response.json();
        pdfFileName = result.filename;

        updateProgress(100, 'Conversion complete!');
        
        setTimeout(() => {
            showResult();
        }, 1000);

    } catch (error) {
        console.error('Conversion error:', error);
        showError(error.message || 'An error occurred during conversion.');
    }
}

function downloadPDF() {
    if (pdfFileName) {
        const link = document.createElement('a');
        link.href = `/download/${pdfFileName}`;
        link.download = pdfFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function showProgress() {
    hideAllSections();
    progressSection.style.display = 'block';
    progressFill.style.width = '0%';
}

function updateProgress(percentage, text) {
    progressFill.style.width = percentage + '%';
    progressText.textContent = text;
}

function showResult() {
    hideAllSections();
    resultSection.style.display = 'block';
}

function showError(message) {
    hideAllSections();
    errorText.textContent = message;
    errorSection.style.display = 'block';
}

function hideAllSections() {
    progressSection.style.display = 'none';
    resultSection.style.display = 'none';
    errorSection.style.display = 'none';
}

function showSection(sectionClass) {
    const sections = document.querySelectorAll('.upload-section, .progress-section, .result-section, .error-section');
    sections.forEach(section => {
        if (section.classList.contains(sectionClass)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function resetForm() {
    selectedFile = null;
    pdfFileName = null;
    fileInput.value = '';
    fileInfo.style.display = 'none';
    hideAllSections();
    showSection('upload-section');
    progressFill.style.width = '0%';
} 
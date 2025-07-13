# DOCX to PDF Converter with Hindi Support

A modern Python Flask web application that converts DOCX files to PDF format with comprehensive Hindi language support, including Kruti Dev 110 fonts.

## Features

### 🎯 Core Functionality
- **DOCX to PDF Conversion**: Convert Word documents to clean PDF format
- **Hindi Language Support**: Full support for Hindi text with proper Unicode rendering
- **Kruti Dev 110 Support**: Handles Kruti Dev 110 fonts and converts to proper Unicode
- **Drag & Drop Interface**: Modern, responsive web interface with drag-and-drop support
- **File Validation**: Only accepts .docx files up to 10MB
- **Secure Processing**: Files are automatically deleted after processing

### 🌐 Hindi Language Features
- **Kruti Dev 110 Support**: Handles Kruti Dev 110 fonts properly
- **Hindi Font Support**: Proper rendering of Hindi text in PDF
- **Text Extraction**: Uses python-docx for reliable text extraction
- **PDF Generation**: Uses ReportLab for professional PDF creation
- **Unicode Support**: Proper handling of Hindi Unicode characters

### 🛡️ Security & Privacy
- **Automatic Cleanup**: Uploaded and generated files are deleted after processing
- **File Type Validation**: Only accepts valid DOCX files
- **Size Limits**: 10MB maximum file size
- **No Data Storage**: No files are permanently stored on the server

## Technology Stack

### Backend
- **Python 3.8+**: Modern Python runtime
- **Flask**: Lightweight web framework
- **python-docx**: DOCX file processing
- **ReportLab**: PDF generation
- **Flask-CORS**: Cross-origin resource sharing
- **Gunicorn**: Production WSGI server

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons

## Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)

### Setup
1. **Clone or download** the project files
2. **Create virtual environment** (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Start the server**:
   ```bash
   python app.py
   ```
5. **Access the application** at `http://localhost:5000`

## Usage

### Converting DOCX to PDF

1. **Upload File**: Drag and drop a .docx file or click "Browse Files"
2. **File Validation**: The system validates the file type and size
3. **Conversion**: Click "Convert to PDF (Hindi Support)" to start processing
4. **Hindi Processing**: The system extracts Hindi text and handles Kruti Dev fonts
5. **PDF Generation**: A clean PDF with proper Hindi rendering is created
6. **Download**: Click "Download PDF" to save the converted file

### Supported File Types
- **Input**: .docx files only
- **Output**: .pdf files
- **Maximum Size**: 10MB per file

## Hindi Language Support

The application provides comprehensive support for Hindi text:

### Kruti Dev 110 Support
- Handles Kruti Dev 110 fonts properly
- Converts to Unicode for better compatibility
- Maintains text formatting and structure

### Text Processing
- **python-docx**: Reliable text extraction from DOCX files
- **Unicode Normalization**: Proper handling of Hindi characters
- **Text Cleaning**: Removes invalid characters and normalizes text

### PDF Generation
- **ReportLab**: Professional PDF generation
- **Hindi Font Support**: Proper rendering of Hindi text
- **Clean Layout**: Professional document formatting

## Deployment

### Render.com (Recommended)
1. Create a Render account
2. Connect your repository
3. Configure as a Web Service
4. Set build command: `pip install -r requirements.txt`
5. Set start command: `gunicorn app:app`

### Heroku
1. Create a Heroku account
2. Install Heroku CLI
3. Deploy using Heroku CLI or GitHub integration

### Railway.app
1. Go to Railway.app
2. Connect your repository
3. Deploy with similar settings as Render

### Local Development
```bash
# Install dependencies
pip install -r requirements.txt

# Run development server
python app.py

# Or use gunicorn for production-like environment
gunicorn app:app
```

## File Structure

```
wordtopdf/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── Procfile              # Deployment configuration
├── templates/
│   └── index.html        # Main web interface
├── static/
│   ├── style.css         # Styling and animations
│   └── script.js         # Frontend JavaScript
├── uploads/              # Temporary upload directory
├── output/               # Temporary PDF output directory
└── README.md             # This file
```

## API Endpoints

### POST /convert
Converts uploaded DOCX file to PDF with Hindi support.

**Request**: Multipart form data with 'file' field
**Response**: JSON with success status and filename

### GET /download/:filename
Downloads the generated PDF file.

**Parameters**: filename - the name of the PDF file
**Response**: PDF file stream

### GET /health
Health check endpoint.

**Response**: JSON with status information

## Error Handling

The application includes comprehensive error handling for:
- Invalid file types
- File size limits
- Conversion failures
- Network errors
- Server errors

## Browser Support

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile browsers**: Responsive design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues or questions:
1. Check the error messages in the browser console
2. Verify file format and size
3. Ensure Hindi text is properly encoded in the DOCX file
4. Check Python version compatibility

## Changelog

### v2.0.0 (Python Version)
- Switched to Python Flask framework
- Added python-docx for better DOCX processing
- Added ReportLab for professional PDF generation
- Improved Hindi text handling
- Better error handling and logging
- Production-ready deployment configuration

### v1.0.0 (Node.js Version)
- Initial Node.js version
- Basic DOCX to PDF conversion
- Hindi language support
- Modern web interface 
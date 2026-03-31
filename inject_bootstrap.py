import glob
import os

html_files = glob.glob('*.html')
for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Add Bootstrap CSS
    if 'bootstrap.min.css' not in content:
        content = content.replace('<link rel="stylesheet" href="style.css">', '<!-- Bootstrap CSS -->\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">\n    <link rel="stylesheet" href="style.css">')
    
    # Add Bootstrap JS
    if 'bootstrap.bundle.min.js' not in content:
        content = content.replace('<script src="script.js"></script>', '<!-- Bootstrap JS -->\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>\n    <script src="script.js"></script>')
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("Updated HTML files with Bootstrap CDNs.")

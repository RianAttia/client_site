#!/usr/bin/env python3
"""
Performance-optimized HTTP server with proper cache headers
"""
import http.server
import socketserver
import os
from pathlib import Path
import mimetypes

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CacheControlHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        """Add cache control headers based on file type"""
        path = self.translate_path(self.path)
        
        # Determine cache control based on file extension
        if self.path.endswith('.html'):
            # No cache for HTML - always revalidate
            self.send_header('Cache-Control', 'public, max-age=0, must-revalidate')
        elif self.path.endswith(('.css', '.js')):
            # Cache CSS and JS for 1 year (assumes content-hash in filename)
            self.send_header('Cache-Control', 'public, max-age=31536000, immutable')
        elif self.path.endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico')):
            # Cache images for 1 year
            self.send_header('Cache-Control', 'public, max-age=31536000, immutable')
        else:
            # Default: cache for 1 month
            self.send_header('Cache-Control', 'public, max-age=2592000')
        
        # Add other performance headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        self.send_header('X-XSS-Protection', '1; mode=block')
        
        http.server.SimpleHTTPRequestHandler.end_headers(self)
    
    def translate_path(self, path):
        """Translate a /-separated PATH to the local filename syntax"""
        path = http.server.SimpleHTTPRequestHandler.translate_path(self, path)
        relpath = os.path.relpath(path, os.getcwd())
        return os.path.join(DIRECTORY, relpath)
    
    def do_GET(self):
        """Handle GET requests"""
        if self.path == '/':
            self.path = '/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), CacheControlHTTPRequestHandler) as httpd:
        print(f"Server running at http://localhost:{PORT}/")
        print(f"Serving from: {DIRECTORY}")
        print("Press Ctrl+C to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

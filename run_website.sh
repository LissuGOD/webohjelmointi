#!/bin/bash
# Script to run the website using Python's built-in HTTP server
echo "Starting website server on http://localhost:8000"
python3 -m http.server 8000
#terminaaliin ./run_website.sh niin sivu aukeaa 
#Ctrl + C pysäyttää palvelimen
```mermaid
sequenceDiagram

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Note over browser, server: Sending form data to server
server->>browser: 302 REDIRECT /exampleapp/notes
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server->>browser: HTML document
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->>browser: CSS file
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server->>browser: JavaScript file
Note over browser, server: JS file runs code that fetches data.json file
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->>browser: JSON file with note data
Note over browser, server: Browser renders fetched note data
```

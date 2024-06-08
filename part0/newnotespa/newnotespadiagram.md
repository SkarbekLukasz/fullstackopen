```mermaid
sequenceDiagram

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Note over browser, server: Posting JSON file
server->>browser: JSON file with note creation confirmation
```
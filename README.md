# Assistant Instructions MCP Server

Model Context Protocol server for Claude instruction file access.

## Overview

Provides `get-instructions-file` tool returning Claude's instruction file path.

## Features

- MCP Protocol compliant (@modelcontextprotocol/sdk)
- ES6 modules with stdio transport
- Extensible for additional tools

## Usage

```bash
npm install
npm start      # Start server
npm test       # Run tests
```

## Available Tools

### `get-instructions-file`
Returns instruction file path. No parameters required.

## Architecture

Client → MCP Server → Tool Handler → Response

## Structure
```
├── package.json    # Dependencies
├── server.js       # Main server
├── test.js         # Tests  
├── memory-bank/    # Documentation
└── README.md
```

See `memory-bank/` for detailed documentation.

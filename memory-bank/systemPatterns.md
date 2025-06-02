# System Patterns

## Architecture
- Node.js MCP server using ES modules
- Single file server implementation
- Stdio transport communication

## Key Patterns
- Standard MCP request handling flow
- Tool definition with schema validation
- Error handling for unknown tools

## Current Implementation
```
Server Setup -> Tool Registration -> Request Handling -> Response
```

## Components
- **Server**: Main MCP server instance
- **Transport**: StdioServerTransport for communication
- **Tools**: Single get-instructions-file tool
- **Handlers**: ListTools and CallTool request handlers

# Assistant Instructions Project Brief

## Project Purpose
MCP (Model Context Protocol) server that provides assistant instructions functionality. Currently implements a single tool `get-instructions-file` that returns the path to Claude's general instructions file.

## Core Requirements
- MCP server using @modelcontextprotocol/sdk
- Expose tools for assistant instruction management
- Integrate with Claude Desktop environment

## Current State
- Basic MCP server structure in place
- Single tool: `get-instructions-file`
- Returns hardcoded path: `C:\claude-desktop\claude-general-instructions.md`

## Goals
- Understand current implementation
- Identify expansion opportunities
- Maintain MCP protocol compliance

# Product Context

## Problem Solved
Provides programmatic access to Claude's instruction files through MCP protocol, enabling external applications to retrieve assistant configuration.

## User Experience
External tools can query for instruction file locations through standardized MCP interface.

## Current Functionality
- Single tool endpoint for instruction file path retrieval
- Hardcoded response pointing to general instructions file
- Standard MCP server implementation

## Potential Evolution
- Dynamic instruction file discovery
- Multiple instruction file types
- Content retrieval beyond just paths

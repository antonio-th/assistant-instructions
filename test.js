import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

async function testServer() {
  console.log('Starting Assistant Instructions MCP server test...');

  const transport = new StdioClientTransport({
    command: 'node',
    args: ['server.js'],
    cwd: 'C:\\claude-desktop\\apps\\assistant-instructions'
  });

  const client = new Client(
    {
      name: 'test-client',
      version: '1.0.0'
    },
    {
      capabilities: {}
    }
  );

  try {
    await client.connect(transport);
    console.log('Connected to server');

    // Test listing tools
    const tools = await client.listTools();
    console.log('Available tools:', JSON.stringify(tools, null, 2));

    // Test calling the tool
    const result = await client.callTool({
      name: 'follow-your-instructions'
    });
    console.log('Tool result:', JSON.stringify(result, null, 2));

  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await client.close();
    console.log('Test completed');
  }
}

testServer().catch(console.error);

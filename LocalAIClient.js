const { Agent } = require('undici');

module.exports = class LocalAIClient {
    constructor({ 
        baseUrl = 'http://localhost:3002', 
        model = 'thebloke__codellama-7b-gguf__codellama-7b.q5_k_m.gguf',
        timeout = 3000e3,
    }) {
        this.baseUrl = baseUrl;
        this.model = model;
        this.timeout = timeout;
    }

    async createChatCompletion({ messages }) {
        const response = await fetch(`${this.baseUrl}/v1/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ model: this.model, messages }),
            dispatcher: new Agent({ timeout: this.timeout })
        });

        if (!response.ok) {
            throw new Error(`Failed to create chat completion: ${response.statusText}`);
        }

        return response.json();
    }
}

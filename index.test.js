const assert = require('node:assert');
const { describe, it, mock } = require('node:test');

const localAIPlugin = require('.');

describe('eleventy-plugin-local-ai', () => {
    it('should register a transformer', async () => {
        const eleventyConfig = {
            addPassthroughCopy: mock.fn(),
            addWatchTarget: mock.fn(),
            addTransform: mock.fn(),
        };

        localAIPlugin(eleventyConfig);

        assert.strictEqual(eleventyConfig.addTransform.mock.calls.length, 1);
        assert.deepStrictEqual(eleventyConfig.addTransform.mock.calls[0].arguments[0], 'local-ai-prompt');
    });
});

require('dotenv').config({ path: 'C:/Users/PC?Desktop/Code Projects/dev-umbler-nestjs/.env' });
const OpenAI = require('openai');
console.log('API Key:', process.env.OPENAI_API_KEY);
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
async function generateSummary(text) {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'Resuma o documento PDF que o usuário mandar' },
                { role: 'user', content: `Aqui está o conteúdo de um documento PDF:\n\n${text}\n\n Forneça um resumo deste conteúdo.` },
            ],
        });
        return response.choices[0].message.content;
    }
    catch (error) {
        console.error('Error generating summary:', error);
        throw error;
    }
}
module.exports = { generateSummary };
//# sourceMappingURL=openaiclient.js.map
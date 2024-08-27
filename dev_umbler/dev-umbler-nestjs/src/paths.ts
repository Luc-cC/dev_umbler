
require('dotenv').config()
const pdf = require('pdf-parse');
const fs = require('fs/promises');
const path = require('path');
const prompts = require ('prompts');
const generate = require('./openaiclient.ts');

async function processPDF(){


const allFiles = await fs.readdir('./files');
let pdfs = allFiles.filter(file => path.extname(file).
toLowerCase() == '.pdf');

let choices = pdfs.map(pdf => {
    return {
        title: pdf,
        value: pdf,
    }
})

const pdfSelected = await prompts([
    {
        type: 'select',
        name: 'pdf',
        message: 'Qual PDF gostaria de usar?',
        choices: choices,
    }
]);

const dataBuffer = await fs.readFile(`./files/${pdfSelected.pdf}`);

   const text = await pdf(dataBuffer).then(data => {
    return data.text;
   })

   console.log('Texto extraído do PDF:',text);

  try {
    const summary = await generate.generateSummary(text)
    console.log('Resumo gerado pelo ChatGPT:', summary);
  } catch (error) {
    console.error('Erro ao gerar resumo:', error);
  }
}


//chamar função quando rodar script
processPDF();
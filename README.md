# Descrição do Projeto
Este projeto envolve a criação de um chatbot utilizando NextJS e NestJS, integrado ao modelo GPT-3.5. O projeto está dividido em duas partes principais:

Chatbot: Um chatbot que utiliza o modelo GPT-3.5 para responder perguntas dos usuários através de uma interface web desenvolvida em NextJS.

Leitura de PDFs: Um módulo separado, desenvolvido em NestJS, que permite a leitura e por default fazer um resumo de documentos PDF. Este módulo não interage diretamente com os usuários e é acessível apenas via terminal.

# Estrutura do Projeto
O projeto foi organizado em duas pastas:
dev-umbler-nestjs: Contém o ambiente e a configuração da IA, além de parte da estrutura necessária para a leitura dos documentos PDF.
dev-umbler-nextjs: Contém as configurações da interface do chatbot e scripts para transferência de dados para a IA.

#Funcionalidades
Chatbot (NextJS + NestJS)
Descrição: O chatbot utiliza o modelo GPT-3.5 para responder perguntas dos usuários.
>Insira sua chave API em .env

#Instruções:
Inicie o servidor NestJS:
>npm start dev
Inicie o servidor NextJS:

>npm run dev

>O chatbot será acessível em http://localhost:3001, mas essa porta pode ser configurada no arquivo .env.local dentro da pasta dev-umbler-nextjs.

# Leitura de PDFs (NestJS)
Descrição: Um módulo separado que lê qualquer arquivo PDF e gera um resumo utilizando o modelo GPT-3.5. Este módulo é acessado via terminal.

# Instruções:
>Insira sua chave API em .env
Acesse a pasta dev-umbler-nestjs\src.
Os arquivos relevantes para a leitura de PDFs são:

openaiclient.ts: Cliente da IA onde você pode personalizar os "roles" do modelo. Por padrão, ele gera um resumo do PDF lido.
>Talvez seja necessário indicar um caminho absoluto na config da dependência dotenv para seu arquivo .env

paths.ts: Script principal que indica as ações a serem realizadas no terminal e exibe o resultado da leitura do PDF.

Coloque os PDFs que deseja ler na pasta /src/files.
Execute o script paths.ts para processar o PDF:
>node paths.ts

>Você será questionado sobre qual PDF deseja ler, e a resposta da IA será exibida no console.

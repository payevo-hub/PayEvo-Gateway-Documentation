# 📘 Documentação da API (Docusaurus)
Este projeto gerencia a documentação técnica da nossa API utilizando Docusaurus e o plugin OpenAPI Docs. Ele inclui uma camada de proteção por senha para endpoints sensíveis e geração automática a partir de arquivos Swagger/OpenAPI.

---

## 🚀 Atalhos Rápidos

| Comando | Descrição |
| :--- | :--- |
| `npm run api:refresh` | **O mais importante.** Limpa o cache e regera os arquivos da API. |
| `npm run dev` | Sobe o ambiente local (Português). |
| `npm run dev-en` | Sobe o ambiente local (Inglês). |
| `npm run build` | Gera os arquivos estáticos para produção. |
| `npm run start` | Inicia a aplicação a partir do build. |
| `npm run clear` | Limpa o cache do Docusaurus. |

---

## 🛠️ Configuração de Variáveis de Ambiente

Adicione arquivo `openapi.yaml` na raíz desse repositório para gerar os arquivos de documentação.

O projeto utiliza proteção por senha em componentes específicos (ex: `PasswordGate`). Para que a senha funcione corretamente, você deve configurar o ambiente:

1. Na raiz do projeto, crie um arquivo chamado `.env` copiando `.env.example`.
2. Adicione a seguinte chave:

```env
CASHOUT_PASSWORD=sua_senha_aqui
```

> Se você alterar a senha no .env, é necessário reiniciar o servidor (npm run dev) para que as mudanças sejam aplicadas, pois o Docusaurus lê as configurações apenas no início do processo.

---

## 🏗️ Fluxo de Trabalho (Workflow)

Sempre que houver uma alteração no arquivo de especificação da API (Swagger/OpenAPI), siga estes passos:

1. Atualizar Documentação
Não edite os arquivos Markdown dentro das pastas de saída da API manualmente, pois eles são sobrescritos. Use o comando:

```env
npm run api:refresh
```

2. Desenvolvimento Local
Para visualizar as alterações em tempo real e testar componentes:

```env
npm run dev
```

3. Build de Produção
Para gerar a versão final que será publicada:

```env
npm run build
```

---

## 🔒 Componentes de Segurança

`PasswordGate`
Este componente é usado para bloquear a visualização de conteúdos sensíveis diretamente no navegador.

- Funcionamento: Ele valida o input do usuário contra a variável de ambiente `CASHOUT_PASSWORD`.

- Injeção: A variável é passada ao componente através do `customFields` no arquivo `docusaurus.config.js`.

---

## 📁 Estrutura do Projeto

- `/docs`: Contém a documentação manual e os arquivos gerados pelo plugin OpenAPI.

- `/src/components`: Componentes React customizados.

- `docusaurus.config.js`: Configuração central, plugins e injeção de variáveis de ambiente.
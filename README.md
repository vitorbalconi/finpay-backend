# FinPay Backend

API REST em NestJS para a POC FinPay. Os pagamentos são simulados e mantidos em memória, sem banco de dados ou serviços externos.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação

```bash
npm install
```

Opcionalmente, copie `.env.example` para `.env` e ajuste as variáveis. O projeto não carrega arquivos `.env` automaticamente; as variáveis devem ser fornecidas pelo ambiente de execução.

## Execução

```bash
# Desenvolvimento com recarga automática
npm run start:dev

# Execução comum
npm start

# Build e execução da saída compilada
npm run build
npm run start:prod
```

A API fica disponível por padrão em `http://localhost:3000/api`. CORS está habilitado para o frontend local em `http://localhost:4200`.

## Endpoints

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/api/health` | Status, timestamp e versão da aplicação |
| GET | `/api/version` | Nome e versão da aplicação |
| GET | `/api/transactions` | Lista de transações simuladas |
| GET | `/api/metrics` | Totais e taxa de aprovação |

`APP_VERSION` define a versão exposta pela API e usa `1.0.0` como fallback. `PORT` define a porta HTTP e usa `3000` como padrão.

## Testes

```bash
npm test
npm run test:cov
```

## CI e imagem no GHCR

O workflow `.github/workflows/ci.yml` executa `npm ci`, testes e build em pushes para `main`, pull requests para `main` e tags no formato `vX.Y.Z`. A imagem Docker só é publicada quando uma tag de release válida (`v` seguida por três números inteiros separados por pontos) passa pelo CI.

No GitHub, mantenha **Settings > Actions > General > Workflow permissions** com permissão de leitura; o job de publicação solicita somente `contents: read` e `packages: write`. Para repositórios de organização, confirme também que a política da organização permite publicar pacotes com `GITHUB_TOKEN`. Não é necessário criar PAT.

Para criar uma release após integrar e validar a `main`:

```bash
git checkout main
git pull --ff-only
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

O pacote ficará em **GitHub > perfil ou organização > Packages**, com o nome do repositório em minúsculas e as tags `1.0.0` e `sha-<commit-curto>`. O digest `sha256:...` aparece no resumo do job **Publish release image**, nos detalhes da versão no GHCR e em `docker buildx imagetools inspect ghcr.io/<owner>/<repository>:1.0.0`.

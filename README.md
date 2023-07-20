# reddit's posts

App em React que exibe posts usando api do reddit de acordo com os filtros Hot, news and rising.

## Features

- Temas claro e escuro
- Paginação (ver mais)

## Tech Stack

**Client:** React, TypeScript, Styled Components

## Installation

```bash
  yarn or npm i
  yarn dev or npm run dev
```

## API Reference

- www.reddit.com/prefs/apps (fazer login ou criar a conta e criar um aplicativo para pegar personal user script e secret)
- github.com/reddit-archive/reddit/wiki/OAuth2-Quick-Start-Example (curl para gerar token)
- reddit.com/dev/api#GET_api_v1_me (documentação reddit api)

#### Get all items

```http
  GET https://oauth.reddit.com/r/react/${sort}
```

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| `sort`    | `string` | hot, new ou rising |

## Deploy vercel

https://reddit-gilt.vercel.app/

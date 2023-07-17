
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

#### Get all items

```http
  GET https://gateway.reddit.com/desktopapi/v1/subreddits/reactjs?rtj=only&redditWebClient=web2x&app=web2x-client-production&include=identity&sort=${sort}&layout=card
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `sort` | `string` |  hot, new ou rising |







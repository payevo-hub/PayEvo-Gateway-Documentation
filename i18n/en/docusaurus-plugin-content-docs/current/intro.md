---
id: intro
title: Start Here
slug: /
sidebar_position: 1
---

#### Welcome to our API documentation center!

---

Our API is designed based on the REST architecture, ensuring that all responses are returned in JSON format for easy integration and data interpretation.

To access the API resources, you must authenticate using the **Basic Authentication** method by providing your secret key as the credential.

Your authentication keys can be found in the dashboard by navigating to **Settings → API Credentials**.

Once you have obtained your key, include it in the request header within the `Authorization` field, as shown in the structure below:

Examples

```javascript
const options = {
    method: "POST",
    url: "https://apiv2.payevo.com.br/functions/v1/transactions",
    headers: {
        authorization: 'Basic ' + new Buffer("{SECRET_KEY}").toString('base64')
    }
}
```

---
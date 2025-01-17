# Library NodeJS API

<h1 id="livraria-api">Livraria API</h1>

API para gerenciar uma livraria.

Base URLs:

- <a href="http://localhost:3000">http://localhost:3000</a>

<h1 id="livraria-api-books">Books</h1>

Operações relacionadas a livros

## get\_\_books

> Code samples

```shell

curl -X GET http://localhost:3000/books \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/books HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/books", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/books',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/books', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/books', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/books");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/books", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /books`

_Obter todos os livros_

Retorna uma lista de todos os livros disponíveis

<h3 id="get__books-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description                    |
| ----- | ----- | ------- | -------- | ------------------------------ |
| page  | query | integer | false    | Número da página               |
| limit | query | integer | false    | Quantidade de itens por página |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "price": 0,
      "stock": 0,
      "categories": ["string"],
      "authors": ["string"]
    }
  ],
  "pagination": {
    "currentPage": 0,
    "totalPages": 0,
    "totalItems": 0
  }
}
```

<h3 id="get__books-responses">Responses</h3>

| Status | Meaning                                                 | Description              | Schema |
| ------ | ------------------------------------------------------- | ------------------------ | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Lista paginada de livros | Inline |

<h3 id="get__books-responseschema">Response Schema</h3>

Status Code **200**

| Name           | Type                  | Required | Restrictions | Description |
| -------------- | --------------------- | -------- | ------------ | ----------- |
| » data         | [[Book](#schemabook)] | false    | none         | none        |
| »» id          | string                | false    | none         | none        |
| »» title       | string                | false    | none         | none        |
| »» price       | number                | false    | none         | none        |
| »» stock       | number                | false    | none         | none        |
| »» categories  | [string]              | false    | none         | none        |
| »» authors     | [string]              | false    | none         | none        |
| » pagination   | object                | false    | none         | none        |
| »» currentPage | integer               | false    | none         | none        |
| »» totalPages  | integer               | false    | none         | none        |
| »» totalItems  | integer               | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## post\_\_books

> Code samples

```shell

curl -X POST http://localhost:3000/books \
  -H 'Content-Type: application/json'

```

```http
POST http://localhost:3000/books HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "title": "string",
  "price": 0,
  "stock": 0,
  "categories": [
    "string"
  ],
  "authors": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/books',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/books',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://localhost:3000/books', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/books', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/books");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/books", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /books`

_Criar um livro_

Adiciona um novo livro à livraria

> Body parameter

```json
{
  "id": "string",
  "title": "string",
  "price": 0,
  "stock": 0,
  "categories": ["string"],
  "authors": ["string"]
}
```

<h3 id="post__books-parameters">Parameters</h3>

| Name | In   | Type                | Required | Description |
| ---- | ---- | ------------------- | -------- | ----------- |
| body | body | [Book](#schemabook) | true     | none        |

<h3 id="post__books-responses">Responses</h3>

| Status | Meaning                                                      | Description  | Schema |
| ------ | ------------------------------------------------------------ | ------------ | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Livro criado | None   |

<aside class="success">
This operation does not require authentication
</aside>

## get\__books_{id}

> Code samples

```shell

curl -X GET http://localhost:3000/books/{id} \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/books/{id} HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/books/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/books/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/books/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/books/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/books/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/books/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /books/{id}`

_Obter um livro por ID_

Retorna os detalhes de um livro específico pelo ID

<h3 id="get__books_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | ID do livro |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "title": "string",
  "price": 0,
  "stock": 0,
  "categories": ["string"],
  "authors": ["string"]
}
```

<h3 id="get__books_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description          | Schema              |
| ------ | -------------------------------------------------------------- | -------------------- | ------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Detalhes do livro    | [Book](#schemabook) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Livro não encontrado | None                |

<aside class="success">
This operation does not require authentication
</aside>

## put\__books_{id}

> Code samples

```shell

curl -X PUT http://localhost:3000/books/{id} \
  -H 'Content-Type: application/json'

```

```http
PUT http://localhost:3000/books/{id} HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "title": "string",
  "price": 0,
  "stock": 0,
  "categories": [
    "string"
  ],
  "authors": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/books/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put 'http://localhost:3000/books/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('http://localhost:3000/books/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://localhost:3000/books/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/books/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:3000/books/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /books/{id}`

_Atualizar um livro_

Atualiza os detalhes de um livro específico pelo ID

> Body parameter

```json
{
  "id": "string",
  "title": "string",
  "price": 0,
  "stock": 0,
  "categories": ["string"],
  "authors": ["string"]
}
```

<h3 id="put__books_{id}-parameters">Parameters</h3>

| Name | In   | Type                | Required | Description |
| ---- | ---- | ------------------- | -------- | ----------- |
| id   | path | string              | true     | ID do livro |
| body | body | [Book](#schemabook) | true     | none        |

<h3 id="put__books_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description          | Schema |
| ------ | -------------------------------------------------------------- | -------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Livro atualizado     | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Livro não encontrado | None   |

<aside class="success">
This operation does not require authentication
</aside>

## delete\__books_{id}

> Code samples

```shell

curl -X DELETE http://localhost:3000/books/{id}

```

```http
DELETE http://localhost:3000/books/{id} HTTP/1.1
Host: localhost:3000

```

```javascript
fetch("http://localhost:3000/books/{id}", {
  method: "DELETE",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://localhost:3000/books/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('http://localhost:3000/books/{id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost:3000/books/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/books/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/books/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /books/{id}`

_Excluir um livro_

Remove um livro específico pelo ID

<h3 id="delete__books_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | ID do livro |

<h3 id="delete__books_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description          | Schema |
| ------ | -------------------------------------------------------------- | -------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Livro excluído       | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Livro não encontrado | None   |

<aside class="success">
This operation does not require authentication
</aside>

## get\_\_books_authors

> Code samples

```shell

curl -X GET http://localhost:3000/books/authors?authorIds=auth1%2Cauth2 \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/books/authors?authorIds=auth1%2Cauth2 HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/books/authors?authorIds=auth1%2Cauth2", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/books/authors',
  params: {
  'authorIds' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/books/authors', params={
  'authorIds': 'auth1,auth2'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/books/authors', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/books/authors?authorIds=auth1%2Cauth2");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/books/authors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /books/authors`

_Obter todos os livros por múltiplos autores com paginação_

Retorna uma lista de livros por múltiplos autores com suporte à paginação

<h3 id="get__books_authors-parameters">Parameters</h3>

| Name      | In    | Type    | Required | Description                                   |
| --------- | ----- | ------- | -------- | --------------------------------------------- |
| authorIds | query | string  | true     | Lista de IDs de autores separados por vírgula |
| page      | query | integer | false    | Número da página                              |
| limit     | query | integer | false    | Quantidade de itens por página                |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "price": 0,
      "stock": 0,
      "categories": ["string"],
      "authors": ["string"]
    }
  ],
  "pagination": {
    "currentPage": 0,
    "totalPages": 0,
    "totalItems": 0
  }
}
```

<h3 id="get__books_authors-responses">Responses</h3>

| Status | Meaning                                                 | Description                       | Schema |
| ------ | ------------------------------------------------------- | --------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Lista paginada de livros do autor | Inline |

<h3 id="get__books_authors-responseschema">Response Schema</h3>

Status Code **200**

| Name           | Type                  | Required | Restrictions | Description |
| -------------- | --------------------- | -------- | ------------ | ----------- |
| » data         | [[Book](#schemabook)] | false    | none         | none        |
| »» id          | string                | false    | none         | none        |
| »» title       | string                | false    | none         | none        |
| »» price       | number                | false    | none         | none        |
| »» stock       | number                | false    | none         | none        |
| »» categories  | [string]              | false    | none         | none        |
| »» authors     | [string]              | false    | none         | none        |
| » pagination   | object                | false    | none         | none        |
| »» currentPage | integer               | false    | none         | none        |
| »» totalPages  | integer               | false    | none         | none        |
| »» totalItems  | integer               | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## get\_\_books_categories

> Code samples

```shell

curl -X GET http://localhost:3000/books/categories?categoryIds=cat1%2Ccat2 \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/books/categories?categoryIds=cat1%2Ccat2 HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/books/categories?categoryIds=cat1%2Ccat2", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/books/categories',
  params: {
  'categoryIds' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/books/categories', params={
  'categoryIds': 'cat1,cat2'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/books/categories', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/books/categories?categoryIds=cat1%2Ccat2");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/books/categories", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /books/categories`

_Obter todos os livros por múltiplas categorias com paginação_

Retorna uma lista de livros por múltiplas categorias com suporte à paginação

<h3 id="get__books_categories-parameters">Parameters</h3>

| Name        | In    | Type    | Required | Description                                      |
| ----------- | ----- | ------- | -------- | ------------------------------------------------ |
| categoryIds | query | string  | true     | Lista de IDs de categorias separados por vírgula |
| page        | query | integer | false    | Número da página                                 |
| limit       | query | integer | false    | Quantidade de itens por página                   |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "price": 0,
      "stock": 0,
      "categories": ["string"],
      "authors": ["string"]
    }
  ],
  "pagination": {
    "currentPage": 0,
    "totalPages": 0,
    "totalItems": 0
  }
}
```

<h3 id="get__books_categories-responses">Responses</h3>

| Status | Meaning                                                 | Description                           | Schema |
| ------ | ------------------------------------------------------- | ------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Lista paginada de livros da categoria | Inline |

<h3 id="get__books_categories-responseschema">Response Schema</h3>

Status Code **200**

| Name           | Type                  | Required | Restrictions | Description |
| -------------- | --------------------- | -------- | ------------ | ----------- |
| » data         | [[Book](#schemabook)] | false    | none         | none        |
| »» id          | string                | false    | none         | none        |
| »» title       | string                | false    | none         | none        |
| »» price       | number                | false    | none         | none        |
| »» stock       | number                | false    | none         | none        |
| »» categories  | [string]              | false    | none         | none        |
| »» authors     | [string]              | false    | none         | none        |
| » pagination   | object                | false    | none         | none        |
| »» currentPage | integer               | false    | none         | none        |
| »» totalPages  | integer               | false    | none         | none        |
| »» totalItems  | integer               | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="livraria-api-authors">Authors</h1>

Operações relacionadas a autores

## get\_\_authors

> Code samples

```shell

curl -X GET http://localhost:3000/authors \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/authors HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/authors", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/authors',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/authors', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/authors', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/authors");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/authors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /authors`

_Obter todos os autores_

Retorna uma lista de todos os autores cadastrados

<h3 id="get__authors-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description                    |
| ----- | ----- | ------- | -------- | ------------------------------ |
| page  | query | integer | false    | Número da página               |
| limit | query | integer | false    | Quantidade de itens por página |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "pagination": {
    "currentPage": 0,
    "totalPages": 0,
    "totalItems": 0
  }
}
```

<h3 id="get__authors-responses">Responses</h3>

| Status | Meaning                                                 | Description               | Schema |
| ------ | ------------------------------------------------------- | ------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Lista paginada de autores | Inline |

<h3 id="get__authors-responseschema">Response Schema</h3>

Status Code **200**

| Name           | Type                      | Required | Restrictions | Description |
| -------------- | ------------------------- | -------- | ------------ | ----------- |
| » data         | [[Author](#schemaauthor)] | false    | none         | none        |
| »» id          | string                    | false    | none         | none        |
| »» name        | string                    | false    | none         | none        |
| » pagination   | object                    | false    | none         | none        |
| »» currentPage | integer                   | false    | none         | none        |
| »» totalPages  | integer                   | false    | none         | none        |
| »» totalItems  | integer                   | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## post\_\_authors

> Code samples

```shell

curl -X POST http://localhost:3000/authors \
  -H 'Content-Type: application/json'

```

```http
POST http://localhost:3000/authors HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/authors',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/authors',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://localhost:3000/authors', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/authors', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/authors");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/authors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /authors`

_Criar um autor_

Adiciona um novo autor ao sistema

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="post__authors-parameters">Parameters</h3>

| Name | In   | Type                    | Required | Description |
| ---- | ---- | ----------------------- | -------- | ----------- |
| body | body | [Author](#schemaauthor) | true     | none        |

<h3 id="post__authors-responses">Responses</h3>

| Status | Meaning                                                      | Description  | Schema |
| ------ | ------------------------------------------------------------ | ------------ | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Autor criado | None   |

<aside class="success">
This operation does not require authentication
</aside>

## get\__authors_{id}

> Code samples

```shell

curl -X GET http://localhost:3000/authors/{id} \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/authors/{id} HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/authors/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/authors/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/authors/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/authors/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/authors/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/authors/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /authors/{id}`

_Obter um autor por ID_

Retorna os detalhes de um autor específico pelo ID

<h3 id="get__authors_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | ID do autor |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="get__authors_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description          | Schema                  |
| ------ | -------------------------------------------------------------- | -------------------- | ----------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Detalhes do autor    | [Author](#schemaauthor) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Autor não encontrado | None                    |

<aside class="success">
This operation does not require authentication
</aside>

## put\__authors_{id}

> Code samples

```shell

curl -X PUT http://localhost:3000/authors/{id} \
  -H 'Content-Type: application/json'

```

```http
PUT http://localhost:3000/authors/{id} HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/authors/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put 'http://localhost:3000/authors/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('http://localhost:3000/authors/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://localhost:3000/authors/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/authors/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:3000/authors/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /authors/{id}`

_Atualizar um autor_

Atualiza os detalhes de um autor específico pelo ID

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="put__authors_{id}-parameters">Parameters</h3>

| Name | In   | Type                    | Required | Description |
| ---- | ---- | ----------------------- | -------- | ----------- |
| id   | path | string                  | true     | ID do autor |
| body | body | [Author](#schemaauthor) | true     | none        |

<h3 id="put__authors_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description          | Schema |
| ------ | -------------------------------------------------------------- | -------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Autor atualizado     | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Autor não encontrado | None   |

<aside class="success">
This operation does not require authentication
</aside>

## delete\__authors_{id}

> Code samples

```shell

curl -X DELETE http://localhost:3000/authors/{id}

```

```http
DELETE http://localhost:3000/authors/{id} HTTP/1.1
Host: localhost:3000

```

```javascript
fetch("http://localhost:3000/authors/{id}", {
  method: "DELETE",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://localhost:3000/authors/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('http://localhost:3000/authors/{id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost:3000/authors/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/authors/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/authors/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /authors/{id}`

_Excluir um autor_

Remove um autor específico pelo ID

<h3 id="delete__authors_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | ID do autor |

<h3 id="delete__authors_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description          | Schema |
| ------ | -------------------------------------------------------------- | -------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Autor excluído       | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Autor não encontrado | None   |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="livraria-api-categories">Categories</h1>

Operações relacionadas a categorias

## get\_\_categories

> Code samples

```shell

curl -X GET http://localhost:3000/categories \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/categories HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/categories", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/categories',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/categories', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/categories', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/categories");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/categories", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /categories`

_Obter todas as categorias_

Retorna uma lista de todas as categorias cadastradas

<h3 id="get__categories-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description                    |
| ----- | ----- | ------- | -------- | ------------------------------ |
| page  | query | integer | false    | Número da página               |
| limit | query | integer | false    | Quantidade de itens por página |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "description": "string"
    }
  ],
  "pagination": {
    "currentPage": 0,
    "totalPages": 0,
    "totalItems": 0
  }
}
```

<h3 id="get__categories-responses">Responses</h3>

| Status | Meaning                                                 | Description                  | Schema |
| ------ | ------------------------------------------------------- | ---------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Lista paginada de categorias | Inline |

<h3 id="get__categories-responseschema">Response Schema</h3>

Status Code **200**

| Name           | Type                          | Required | Restrictions | Description |
| -------------- | ----------------------------- | -------- | ------------ | ----------- |
| » data         | [[Category](#schemacategory)] | false    | none         | none        |
| »» id          | string                        | false    | none         | none        |
| »» description | string                        | false    | none         | none        |
| » pagination   | object                        | false    | none         | none        |
| »» currentPage | integer                       | false    | none         | none        |
| »» totalPages  | integer                       | false    | none         | none        |
| »» totalItems  | integer                       | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## post\_\_categories

> Code samples

```shell

curl -X POST http://localhost:3000/categories \
  -H 'Content-Type: application/json'

```

```http
POST http://localhost:3000/categories HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "description": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/categories',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/categories',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://localhost:3000/categories', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/categories', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/categories");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/categories", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /categories`

_Criar uma categoria_

Adiciona uma nova categoria ao sistema

> Body parameter

```json
{
  "id": "string",
  "description": "string"
}
```

<h3 id="post__categories-parameters">Parameters</h3>

| Name | In   | Type                        | Required | Description |
| ---- | ---- | --------------------------- | -------- | ----------- |
| body | body | [Category](#schemacategory) | true     | none        |

<h3 id="post__categories-responses">Responses</h3>

| Status | Meaning                                                      | Description      | Schema |
| ------ | ------------------------------------------------------------ | ---------------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Categoria criada | None   |

<aside class="success">
This operation does not require authentication
</aside>

## get\__categories_{id}

> Code samples

```shell

curl -X GET http://localhost:3000/categories/{id} \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/categories/{id} HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/categories/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/categories/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/categories/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/categories/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/categories/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/categories/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /categories/{id}`

_Obter uma categoria por ID_

Retorna os detalhes de uma categoria específica pelo ID

<h3 id="get__categories_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| id   | path | string | true     | ID da categoria |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "description": "string"
}
```

<h3 id="get__categories_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description              | Schema                      |
| ------ | -------------------------------------------------------------- | ------------------------ | --------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Detalhes da categoria    | [Category](#schemacategory) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Categoria não encontrada | None                        |

<aside class="success">
This operation does not require authentication
</aside>

## put\__categories_{id}

> Code samples

```shell

curl -X PUT http://localhost:3000/categories/{id} \
  -H 'Content-Type: application/json'

```

```http
PUT http://localhost:3000/categories/{id} HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "description": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/categories/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put 'http://localhost:3000/categories/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('http://localhost:3000/categories/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://localhost:3000/categories/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/categories/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:3000/categories/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /categories/{id}`

_Atualizar uma categoria_

Atualiza os detalhes de uma categoria específica pelo ID

> Body parameter

```json
{
  "id": "string",
  "description": "string"
}
```

<h3 id="put__categories_{id}-parameters">Parameters</h3>

| Name | In   | Type                        | Required | Description     |
| ---- | ---- | --------------------------- | -------- | --------------- |
| id   | path | string                      | true     | ID da categoria |
| body | body | [Category](#schemacategory) | true     | none            |

<h3 id="put__categories_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description              | Schema |
| ------ | -------------------------------------------------------------- | ------------------------ | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Categoria atualizada     | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Categoria não encontrada | None   |

<aside class="success">
This operation does not require authentication
</aside>

## delete\__categories_{id}

> Code samples

```shell

curl -X DELETE http://localhost:3000/categories/{id}

```

```http
DELETE http://localhost:3000/categories/{id} HTTP/1.1
Host: localhost:3000

```

```javascript
fetch("http://localhost:3000/categories/{id}", {
  method: "DELETE",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://localhost:3000/categories/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('http://localhost:3000/categories/{id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost:3000/categories/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/categories/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/categories/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /categories/{id}`

_Excluir uma categoria_

Remove uma categoria específica pelo ID

<h3 id="delete__categories_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| id   | path | string | true     | ID da categoria |

<h3 id="delete__categories_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description              | Schema |
| ------ | -------------------------------------------------------------- | ------------------------ | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Categoria excluída       | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Categoria não encontrada | None   |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="livraria-api-customers">Customers</h1>

Operações relacionadas a clientes

## get\_\_customers

> Code samples

```shell

curl -X GET http://localhost:3000/customers \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/customers HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/customers", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/customers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/customers', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/customers', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/customers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/customers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /customers`

_Obter todos os clientes_

Retorna uma lista de todos os clientes cadastrados

<h3 id="get__customers-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description                    |
| ----- | ----- | ------- | -------- | ------------------------------ |
| page  | query | integer | false    | Número da página               |
| limit | query | integer | false    | Quantidade de itens por página |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "phone": "string"
    }
  ],
  "pagination": {
    "currentPage": 0,
    "totalPages": 0,
    "totalItems": 0
  }
}
```

<h3 id="get__customers-responses">Responses</h3>

| Status | Meaning                                                 | Description                | Schema |
| ------ | ------------------------------------------------------- | -------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Lista paginada de clientes | Inline |

<h3 id="get__customers-responseschema">Response Schema</h3>

Status Code **200**

| Name           | Type                          | Required | Restrictions | Description |
| -------------- | ----------------------------- | -------- | ------------ | ----------- |
| » data         | [[Customer](#schemacustomer)] | false    | none         | none        |
| »» id          | string                        | false    | none         | none        |
| »» name        | string                        | false    | none         | none        |
| »» email       | string                        | false    | none         | none        |
| »» phone       | string                        | false    | none         | none        |
| » pagination   | object                        | false    | none         | none        |
| »» currentPage | integer                       | false    | none         | none        |
| »» totalPages  | integer                       | false    | none         | none        |
| »» totalItems  | integer                       | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## post\_\_customers

> Code samples

```shell

curl -X POST http://localhost:3000/customers \
  -H 'Content-Type: application/json'

```

```http
POST http://localhost:3000/customers HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "email": "string",
  "phone": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/customers',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/customers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://localhost:3000/customers', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/customers', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/customers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/customers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /customers`

_Criar um cliente_

Adiciona um novo cliente ao sistema

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "phone": "string"
}
```

<h3 id="post__customers-parameters">Parameters</h3>

| Name | In   | Type                        | Required | Description |
| ---- | ---- | --------------------------- | -------- | ----------- |
| body | body | [Customer](#schemacustomer) | true     | none        |

<h3 id="post__customers-responses">Responses</h3>

| Status | Meaning                                                      | Description    | Schema |
| ------ | ------------------------------------------------------------ | -------------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Cliente criado | None   |

<aside class="success">
This operation does not require authentication
</aside>

## get\__customers_{id}

> Code samples

```shell

curl -X GET http://localhost:3000/customers/{id} \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/customers/{id} HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/customers/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/customers/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/customers/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/customers/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/customers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/customers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /customers/{id}`

_Obter um cliente por ID_

Retorna os detalhes de um cliente específico pelo ID

<h3 id="get__customers_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description   |
| ---- | ---- | ------ | -------- | ------------- |
| id   | path | string | true     | ID do cliente |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "phone": "string"
}
```

<h3 id="get__customers_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description            | Schema                      |
| ------ | -------------------------------------------------------------- | ---------------------- | --------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Detalhes do cliente    | [Customer](#schemacustomer) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Cliente não encontrado | None                        |

<aside class="success">
This operation does not require authentication
</aside>

## put\__customers_{id}

> Code samples

```shell

curl -X PUT http://localhost:3000/customers/{id} \
  -H 'Content-Type: application/json'

```

```http
PUT http://localhost:3000/customers/{id} HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "email": "string",
  "phone": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/customers/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put 'http://localhost:3000/customers/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('http://localhost:3000/customers/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://localhost:3000/customers/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/customers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:3000/customers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /customers/{id}`

_Atualizar um cliente_

Atualiza os detalhes de um cliente específico pelo ID

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "phone": "string"
}
```

<h3 id="put__customers_{id}-parameters">Parameters</h3>

| Name | In   | Type                        | Required | Description   |
| ---- | ---- | --------------------------- | -------- | ------------- |
| id   | path | string                      | true     | ID do cliente |
| body | body | [Customer](#schemacustomer) | true     | none          |

<h3 id="put__customers_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description            | Schema |
| ------ | -------------------------------------------------------------- | ---------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Cliente atualizado     | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Cliente não encontrado | None   |

<aside class="success">
This operation does not require authentication
</aside>

## delete\__customers_{id}

> Code samples

```shell

curl -X DELETE http://localhost:3000/customers/{id}

```

```http
DELETE http://localhost:3000/customers/{id} HTTP/1.1
Host: localhost:3000

```

```javascript
fetch("http://localhost:3000/customers/{id}", {
  method: "DELETE",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://localhost:3000/customers/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('http://localhost:3000/customers/{id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost:3000/customers/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/customers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/customers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /customers/{id}`

_Excluir um cliente_

Remove um cliente específico pelo ID

<h3 id="delete__customers_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description   |
| ---- | ---- | ------ | -------- | ------------- |
| id   | path | string | true     | ID do cliente |

<h3 id="delete__customers_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description            | Schema |
| ------ | -------------------------------------------------------------- | ---------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Cliente excluído       | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Cliente não encontrado | None   |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="livraria-api-sales">Sales</h1>

Operações relacionadas a vendas

## get\_\_sales

> Code samples

```shell

curl -X GET http://localhost:3000/sales \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/sales HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/sales", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/sales',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/sales', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/sales', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/sales");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/sales", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /sales`

_Obter todas as vendas_

Retorna uma lista de todas as vendas realizadas

<h3 id="get__sales-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description                    |
| ----- | ----- | ------- | -------- | ------------------------------ |
| page  | query | integer | false    | Número da página               |
| limit | query | integer | false    | Quantidade de itens por página |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "customerId": "string",
      "date": "2019-08-24T14:15:22Z",
      "total": 0
    }
  ],
  "pagination": {
    "currentPage": 0,
    "totalPages": 0,
    "totalItems": 0
  }
}
```

<h3 id="get__sales-responses">Responses</h3>

| Status | Meaning                                                 | Description              | Schema |
| ------ | ------------------------------------------------------- | ------------------------ | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Lista paginada de vendas | Inline |

<h3 id="get__sales-responseschema">Response Schema</h3>

Status Code **200**

| Name           | Type                  | Required | Restrictions | Description |
| -------------- | --------------------- | -------- | ------------ | ----------- |
| » data         | [[Sale](#schemasale)] | false    | none         | none        |
| »» id          | string                | false    | none         | none        |
| »» customerId  | string                | false    | none         | none        |
| »» date        | string(date-time)     | false    | none         | none        |
| »» total       | number                | false    | none         | none        |
| » pagination   | object                | false    | none         | none        |
| »» currentPage | integer               | false    | none         | none        |
| »» totalPages  | integer               | false    | none         | none        |
| »» totalItems  | integer               | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## post\_\_sales

> Code samples

```shell

curl -X POST http://localhost:3000/sales \
  -H 'Content-Type: application/json'

```

```http
POST http://localhost:3000/sales HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "customerId": "string",
  "date": "2019-08-24T14:15:22Z",
  "total": 0
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/sales',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/sales',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://localhost:3000/sales', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/sales', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/sales");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/sales", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /sales`

_Criar uma venda_

Registra uma nova venda

> Body parameter

```json
{
  "id": "string",
  "customerId": "string",
  "date": "2019-08-24T14:15:22Z",
  "total": 0
}
```

<h3 id="post__sales-parameters">Parameters</h3>

| Name | In   | Type                | Required | Description |
| ---- | ---- | ------------------- | -------- | ----------- |
| body | body | [Sale](#schemasale) | true     | none        |

<h3 id="post__sales-responses">Responses</h3>

| Status | Meaning                                                      | Description  | Schema |
| ------ | ------------------------------------------------------------ | ------------ | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Venda criada | None   |

<aside class="success">
This operation does not require authentication
</aside>

## get\__sales_{id}

> Code samples

```shell

curl -X GET http://localhost:3000/sales/{id} \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/sales/{id} HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/sales/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/sales/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/sales/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/sales/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/sales/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/sales/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /sales/{id}`

_Obter uma venda por ID_

Retorna os detalhes de uma venda específica pelo ID

<h3 id="get__sales_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | ID da venda |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "customerId": "string",
  "date": "2019-08-24T14:15:22Z",
  "total": 0
}
```

<h3 id="get__sales_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description          | Schema              |
| ------ | -------------------------------------------------------------- | -------------------- | ------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Detalhes da venda    | [Sale](#schemasale) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Venda não encontrada | None                |

<aside class="success">
This operation does not require authentication
</aside>

## put\__sales_{id}

> Code samples

```shell

curl -X PUT http://localhost:3000/sales/{id} \
  -H 'Content-Type: application/json'

```

```http
PUT http://localhost:3000/sales/{id} HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "customerId": "string",
  "date": "2019-08-24T14:15:22Z",
  "total": 0
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/sales/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put 'http://localhost:3000/sales/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('http://localhost:3000/sales/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://localhost:3000/sales/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/sales/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:3000/sales/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /sales/{id}`

_Atualizar uma venda_

Atualiza os detalhes de uma venda específico pelo ID

> Body parameter

```json
{
  "id": "string",
  "customerId": "string",
  "date": "2019-08-24T14:15:22Z",
  "total": 0
}
```

<h3 id="put__sales_{id}-parameters">Parameters</h3>

| Name | In   | Type                | Required | Description |
| ---- | ---- | ------------------- | -------- | ----------- |
| id   | path | string              | true     | ID da venda |
| body | body | [Sale](#schemasale) | true     | none        |

<h3 id="put__sales_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description          | Schema |
| ------ | -------------------------------------------------------------- | -------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Venda atualizado     | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Venda não encontrado | None   |

<aside class="success">
This operation does not require authentication
</aside>

## delete\__sales_{id}

> Code samples

```shell

curl -X DELETE http://localhost:3000/sales/{id}

```

```http
DELETE http://localhost:3000/sales/{id} HTTP/1.1
Host: localhost:3000

```

```javascript
fetch("http://localhost:3000/sales/{id}", {
  method: "DELETE",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://localhost:3000/sales/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('http://localhost:3000/sales/{id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost:3000/sales/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/sales/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/sales/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /sales/{id}`

_Excluir de venda_

Remove de venda específico pelo ID

<h3 id="delete__sales_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | ID de venda |

<h3 id="delete__sales_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description          | Schema |
| ------ | -------------------------------------------------------------- | -------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Venda excluído       | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Venda não encontrado | None   |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="livraria-api-itemsales">ItemSales</h1>

Operações relacionadas a itens de vendas

## get\_\_itemsales

> Code samples

```shell

curl -X GET http://localhost:3000/itemsales \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/itemsales HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/itemsales", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/itemsales',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/itemsales', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/itemsales', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/itemsales");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/itemsales", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /itemsales`

_Obter todos os itens de vendas_

Retorna uma lista de todos os itens de vendas

<h3 id="get__itemsales-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description                    |
| ----- | ----- | ------- | -------- | ------------------------------ |
| page  | query | integer | false    | Número da página               |
| limit | query | integer | false    | Quantidade de itens por página |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "saleId": "string",
      "bookId": "string",
      "quantity": 0,
      "price": 0
    }
  ],
  "pagination": {
    "currentPage": 0,
    "totalPages": 0,
    "totalItems": 0
  }
}
```

<h3 id="get__itemsales-responses">Responses</h3>

| Status | Meaning                                                 | Description                       | Schema |
| ------ | ------------------------------------------------------- | --------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Lista paginada de itens de vendas | Inline |

<h3 id="get__itemsales-responseschema">Response Schema</h3>

Status Code **200**

| Name           | Type                          | Required | Restrictions | Description |
| -------------- | ----------------------------- | -------- | ------------ | ----------- |
| » data         | [[ItemSale](#schemaitemsale)] | false    | none         | none        |
| »» id          | string                        | false    | none         | none        |
| »» saleId      | string                        | false    | none         | none        |
| »» bookId      | string                        | false    | none         | none        |
| »» quantity    | number                        | false    | none         | none        |
| »» price       | number                        | false    | none         | none        |
| » pagination   | object                        | false    | none         | none        |
| »» currentPage | integer                       | false    | none         | none        |
| »» totalPages  | integer                       | false    | none         | none        |
| »» totalItems  | integer                       | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## post\_\_itemsales

> Code samples

```shell

curl -X POST http://localhost:3000/itemsales \
  -H 'Content-Type: application/json'

```

```http
POST http://localhost:3000/itemsales HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "saleId": "string",
  "bookId": "string",
  "quantity": 0,
  "price": 0
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/itemsales',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/itemsales',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://localhost:3000/itemsales', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost:3000/itemsales', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/itemsales");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/itemsales", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /itemsales`

_Criar um item de venda_

Registra um novo item de venda

> Body parameter

```json
{
  "id": "string",
  "saleId": "string",
  "bookId": "string",
  "quantity": 0,
  "price": 0
}
```

<h3 id="post__itemsales-parameters">Parameters</h3>

| Name | In   | Type                        | Required | Description |
| ---- | ---- | --------------------------- | -------- | ----------- |
| body | body | [ItemSale](#schemaitemsale) | true     | none        |

<h3 id="post__itemsales-responses">Responses</h3>

| Status | Meaning                                                      | Description          | Schema |
| ------ | ------------------------------------------------------------ | -------------------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Item de venda criado | None   |

<aside class="success">
This operation does not require authentication
</aside>

## get\__itemsales_{id}

> Code samples

```shell

curl -X GET http://localhost:3000/itemsales/{id} \
  -H 'Accept: application/json'

```

```http
GET http://localhost:3000/itemsales/{id} HTTP/1.1
Host: localhost:3000
Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("http://localhost:3000/itemsales/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/itemsales/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/itemsales/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/itemsales/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/itemsales/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/itemsales/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /itemsales/{id}`

_Obter um item de venda por ID_

Retorna os detalhes de um item de venda específico pelo ID

<h3 id="get__itemsales_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description         |
| ---- | ---- | ------ | -------- | ------------------- |
| id   | path | string | true     | ID do item de venda |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "saleId": "string",
  "bookId": "string",
  "quantity": 0,
  "price": 0
}
```

<h3 id="get__itemsales_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description                  | Schema                      |
| ------ | -------------------------------------------------------------- | ---------------------------- | --------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Detalhes do item de venda    | [ItemSale](#schemaitemsale) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Item de venda não encontrado | None                        |

<aside class="success">
This operation does not require authentication
</aside>

## put\__itemsales_{id}

> Code samples

```shell

curl -X PUT http://localhost:3000/itemsales/{id} \
  -H 'Content-Type: application/json'

```

```http
PUT http://localhost:3000/itemsales/{id} HTTP/1.1
Host: localhost:3000
Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "saleId": "string",
  "bookId": "string",
  "quantity": 0,
  "price": 0
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:3000/itemsales/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put 'http://localhost:3000/itemsales/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('http://localhost:3000/itemsales/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://localhost:3000/itemsales/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/itemsales/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:3000/itemsales/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /itemsales/{id}`

_Atualizar um item de venda_

Atualiza os detalhes de um item de venda específico pelo ID

> Body parameter

```json
{
  "id": "string",
  "saleId": "string",
  "bookId": "string",
  "quantity": 0,
  "price": 0
}
```

<h3 id="put__itemsales_{id}-parameters">Parameters</h3>

| Name | In   | Type                        | Required | Description         |
| ---- | ---- | --------------------------- | -------- | ------------------- |
| id   | path | string                      | true     | ID do item de venda |
| body | body | [ItemSale](#schemaitemsale) | true     | none                |

<h3 id="put__itemsales_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description                  | Schema |
| ------ | -------------------------------------------------------------- | ---------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Item de venda atualizado     | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Item de venda não encontrado | None   |

<aside class="success">
This operation does not require authentication
</aside>

## delete\__itemsales_{id}

> Code samples

```shell

curl -X DELETE http://localhost:3000/itemsales/{id}

```

```http
DELETE http://localhost:3000/itemsales/{id} HTTP/1.1
Host: localhost:3000

```

```javascript
fetch("http://localhost:3000/itemsales/{id}", {
  method: "DELETE",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://localhost:3000/itemsales/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('http://localhost:3000/itemsales/{id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost:3000/itemsales/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/itemsales/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/itemsales/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /itemsales/{id}`

_Excluir um item de venda_

Remove um item de venda específico pelo ID

<h3 id="delete__itemsales_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description         |
| ---- | ---- | ------ | -------- | ------------------- |
| id   | path | string | true     | ID do item de venda |

<h3 id="delete__itemsales_{id}-responses">Responses</h3>

| Status | Meaning                                                        | Description                  | Schema |
| ------ | -------------------------------------------------------------- | ---------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Item de venda excluído       | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Item de venda não encontrado | None   |

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Book">Book</h2>
<a id="schemabook"></a>
<a id="schema_Book"></a>
<a id="tocSbook"></a>
<a id="tocsbook"></a>

```json
{
  "id": "string",
  "title": "string",
  "price": 0,
  "stock": 0,
  "categories": ["string"],
  "authors": ["string"]
}
```

### Properties

| Name       | Type     | Required | Restrictions | Description |
| ---------- | -------- | -------- | ------------ | ----------- |
| id         | string   | false    | none         | none        |
| title      | string   | false    | none         | none        |
| price      | number   | false    | none         | none        |
| stock      | number   | false    | none         | none        |
| categories | [string] | false    | none         | none        |
| authors    | [string] | false    | none         | none        |

<h2 id="tocS_Author">Author</h2>
<a id="schemaauthor"></a>
<a id="schema_Author"></a>
<a id="tocSauthor"></a>
<a id="tocsauthor"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

| Name | Type   | Required | Restrictions | Description |
| ---- | ------ | -------- | ------------ | ----------- |
| id   | string | false    | none         | none        |
| name | string | false    | none         | none        |

<h2 id="tocS_Category">Category</h2>
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": "string",
  "description": "string"
}
```

### Properties

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| id          | string | false    | none         | none        |
| description | string | false    | none         | none        |

<h2 id="tocS_Customer">Customer</h2>
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "phone": "string"
}
```

### Properties

| Name  | Type   | Required | Restrictions | Description |
| ----- | ------ | -------- | ------------ | ----------- |
| id    | string | false    | none         | none        |
| name  | string | false    | none         | none        |
| email | string | false    | none         | none        |
| phone | string | false    | none         | none        |

<h2 id="tocS_Sale">Sale</h2>
<a id="schemasale"></a>
<a id="schema_Sale"></a>
<a id="tocSsale"></a>
<a id="tocssale"></a>

```json
{
  "id": "string",
  "customerId": "string",
  "date": "2019-08-24T14:15:22Z",
  "total": 0
}
```

### Properties

| Name       | Type              | Required | Restrictions | Description |
| ---------- | ----------------- | -------- | ------------ | ----------- |
| id         | string            | false    | none         | none        |
| customerId | string            | false    | none         | none        |
| date       | string(date-time) | false    | none         | none        |
| total      | number            | false    | none         | none        |

<h2 id="tocS_ItemSale">ItemSale</h2>
<a id="schemaitemsale"></a>
<a id="schema_ItemSale"></a>
<a id="tocSitemsale"></a>
<a id="tocsitemsale"></a>

```json
{
  "id": "string",
  "saleId": "string",
  "bookId": "string",
  "quantity": 0,
  "price": 0
}
```

### Properties

| Name     | Type   | Required | Restrictions | Description |
| -------- | ------ | -------- | ------------ | ----------- |
| id       | string | false    | none         | none        |
| saleId   | string | false    | none         | none        |
| bookId   | string | false    | none         | none        |
| quantity | number | false    | none         | none        |
| price    | number | false    | none         | none        |

# Burger Beef - API

## Índice

* [1. Sobre](#1-sobre)
* [2. API](#2-api)
* [3. Considerações](#3-consideracoes)
* [4. Desenvolvedora](#3-desenvolvedora)


## 1. Sobre

A API foi desenvolvida para a aplicação front-end da [Burger Beef](https://burger-beef02.vercel.app/): um pequeno restaurante de hambúrgueres, que está crescendo e necessita uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente.

## 2. API

A API Burger Beef contém os seguintes endpoints:

### /auth
#### POST /auth

### /users
##### GET /users
##### GET /users/:uid
##### POST /users
##### PUT /users/:uid
##### DELETE /users/:uid

### /products
##### GET /products
##### GET /products/:productid
##### POST /products
##### PUT /products/:productid
##### DELETE /products/:productid

### /orders
##### GET /orders
##### GET /orders/:orderId
##### POST /orders
##### PUT /orders/:orderId
##### DELETE /orders/:orderId

## Considerações:

-> Para os endpoints de /orders e /products, realizei um tratamento no qual só é possível acessá-los se o usuário possuir um Token (este, fornecido no momento em que o usuário é criado). 

-> Os Tokens expiram em 1 dia, mas a cada autenticação do usuário no aplicativo é possível visualizar o Token correspondente à sessão.

## Desenvolvedora:

 [Thaís Alencar](https://github.com/alencartha)





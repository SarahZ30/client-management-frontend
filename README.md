# Client Management Frontend

Vue.js frontend for the Client Management System. Connects to the Client
Management API built with Laravel.

## Tech Stack

- Vue 3 (Options API)
- Vuetify 4
- Vue Router
- Axios
- Vue Toastification

## Setup

1. Clone the repository

2. Install dependencies
   npm install

3. Create a .env file in the project root
   VITE_API_ENDPOINT=http://localhost/client-management-backend/public/api

4. Start the development server
   npm run dev

5. Open http://localhost:3000

The backend must be running before starting the frontend.

## Features

| Page | Route | Description |
| --- | --- | --- |
| All Clients | /clients | Table with all nine client fields, search and actions |
| Add Client | /add_clients | Form to create a new client |
| Update Client | dialog | Edit phone, address and project budget |

Service Charge, Discount Value and Final Project Value are calculated by the
backend and displayed in the table. The user never enters them.

## Folder Structure

src/
  Api/index.js                        axios instance
  Api/Modules/client.js               all api calls for clients
  Mixins/commonmixins.js              global validation rules
  ApiConstance/toast.js               toast messages
  assets/scss/sample.scss             global styles
  components/                         header and footer
  layouts/default.vue                 page layout
  router/index.js                     routes
  views/Clients/clients.vue           all clients page
  views/Clients/Components/Create.vue add client form
  views/Clients/Components/Update.vue update client form

Validation rules are registered globally in main.ts using app.mixin, so every
form can use them without importing.

All api calls go through Api/Modules/client.js. Components never call axios
directly.

## Author

Sarah M.D.
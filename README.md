# Project - Hekto

'Hekto' is a mock-up of an online shopping store. The website offers a range of products from tech to clothes to jewelery. This project was created as a practice on using React Router for routing, Redux for state management, Tanstack Query for data fetching and testing UI elements using the React Testing Library and Vitest.

## Features

- Pages: The site is structured in different pages: home, products and product-detail, cart and wishlist pages.

  - The home page acts as a welcome to users, using attractive imagery and effects to catch users' attention while displaying some of the products and categories within the shop and offering the opportunity to explore.
  - The products page functions as the display case for all the products offered in the shop. From here, users can navigate to each of the individual products
  - The product-details page delivers more details about each of the products in the shop and lets users add them to their cart
  - The cart page displays all the products the user has added to the cart
  - The wishlist page displays all the products the user has added to their wishlist

- Card Buttons: The buttons present in different product cards allow users to add them to their cart, add them to their wishlist and zoom on the product image.

- Product Sorter: The sorter allows users to sort the products by price, alphabetically and rating as well as choosing products per page and products view type.

- Filters: The filters allow users to choose what kind of items they wish to see according to brand, discount offer, rating, categories and price.

- Pagination: In conjunction with the per page sorter, the pagination buttons allow user to navigate to different product pages.

- Cart: The cart allows users to see, add, remove and edit the quantities of the products added to the cart.

## Built using

- Vite + React
- React Router
- Redux + RTL
- Tanstack Query
- Vitest with React Testing Library
- TailwindCSS
- HTML

## Run locally

To setup and work on this project locally:

1. Clone the project

HTTP

```
$ git clone https://github.com/Roberto-Mere/hekto.git
```

SSH

```
$ git clone git@github.com:Roberto-Mere/hekto.git
```

2. Move to the cloned directory

```
cd hekto
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm run dev
```

5. Start the json server

```
npm run start-json-server
```

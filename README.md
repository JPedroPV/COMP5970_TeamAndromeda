# Andromeda
## Links for Andromeda:
Website: https://jpedropv.github.io/COMP5970_TeamAndromeda/

Code Base: https://github.com/JPedroPV/COMP5970_TeamAndromeda 
## Introduction: 
Tired of complicated book websites? Andromeda keeps it fun and simple! No endless form, no confusing menus – just books, books, and more books! 
Whether you’re a bookworm or just grabbing a quick read, Andromeda makes finding your next book a joy!
Andromeda is an online store dedicated to selling books, audio, and physical, as well as PDFs. 
The web app aims to provide an easily accessible interface offering its vast collection of books and information to all. 

## General Design and Functions:
Our web app had four main pages: Main, Catalog, (Individual) Book, and Checkout. 
#### Main Page
The main page of our app consists of an about Andromeda paragraph along with buttons to access book search,
the user’s cart, book catalog, and login. 

#### Catalog Page
For users to view all books at Andromeda, they can access the book catalog page. This page has a scroll feature with all different types
of books and genres. Each book allows the user to view the individual book page for the title selected.

#### (Individual) Book Page
Each available book for purchase has its own unique page in our app. It contains a summary, title, author, genre, publisher, ratings, 
price, type of book (i.e. audio, electronic, or hard copy), number of pages, and how many copies are in stock.

#### Checkout Page
The checkout page, as seen below, shows the books the user has added to his/her cart to purchase. The user can see the total number of 
items and the running cost for the cart in the top left corner. If the user wishes to check out the items, they will have a pop-up will appear 
asking for the address for delivery and the payment information. For the purchase to be finalized, the user must also check the box 
promising that the information given is true.

## System Overview:
#### GitHub Pages
Github pages will be the platform we will use to host our mobile web app, it will put our app on the internet and give us a URL for people 
 to use our app.
#### Angular
Angular is a framework for web development, and what the project has been built on so far; however, if it is incompatible with or conflicts with 
Bootstrap or GitHub Pages, then we will just use a vanilla JavaScript HTML app.
#### Bootstrap
Bootstrap will provide premade buttons, forms, and a grid system for adapting to different screen sizes, which will be crucial when it comes 
to make an app that works for mobile devices.

#### How to run locally
It's recommended that this is run through something like WSL and would require the use of node package manager (npm). After cloning the repo/unzipping the file, within the main directory where this README is, run 'npm i' to install all dependencies, then 'npm run start' to run it locally. If you struggle with this, you can see the most up to date version of this project on the website link given above.

## Internal Representation of Each Book:
| **Column Name** | **Data Type** | **Description** |
|-----------------|---------------|-----------------|
| `type`          | string        | Physical, Digital, or Audio |
| `title`         | string        | Title of the book |
| `author`        | string        | Author of the book |
| `id`            | int           | Internal ID |
| `description`   | string        | Description of the book |
| `price`         | int           | Price in dollars |
| `rating`        | float         | Rating out of 5 |
| `date`          | string        | Date the book was published |
| `genres`        | string[]      | Genres of the book |
| `imageURL`      | string        | Corresponding image URL |
| `pages`         | int           | Page count for the book |
| `stock`         | int           | Amount in stock |
| `publisher`     | string        | Publisher |




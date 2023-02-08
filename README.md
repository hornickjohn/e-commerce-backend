# ECommerce Back End

## Table of Contents
  
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)

## Description

This server code runs a crud-functional RESTFUL API for product information, allowing tags to be stored and attached to products and products to be stored in categories. Runs with mysql/sequelize/express.js. 

## Installation

To start a new server locally: 

<ul>
    <li>
    Clone the repository.
    </li>
    <li>
    Add a .env file with: DB_NAME, DB_USER, DB_PASSWORD to match your mysql setup and chosen database name.
    </li>
    <li>
    Run 'npm install' to get dependencies locally.
    </li>
    <li>
    Use mysql shell to run db/schema.sql.
    </li>
    <li>
    Run 'npm run seed' for initial test data if desired.
    </li>
    <li>
    Run 'npm start' to fire up the server.
    </li>
</ul>

## Usage

This API can be used with any ecommerce site to store, access, and change product data including keeping track of stock on all current products. Listed below are the available API routes and how to access them:

<ul>
    <li>/api/categories</li>
    <ul>
        <li>
            GET: fetch all categories
        </li>
        <li>
            POST: add a new category (include following fields in header)
        </li>
        <ul>
            <li>
                category_name: string
            </li>
        </ul>
    </ul>
    <li>/api/products</li>
    <ul>
        <li>
            GET: fetch all products
        </li>
        <li>
            POST: add a new product (include following fields in header)
        </li>
        <ul>
            <li>
                product_name: string
            </li>
            <li>
                price: decimal
            </li>
            <li>
                stock: integer
            </li>
            <li>
                category_id: integer (corresponding to id of category this product belongs to)
            </li>
            <li>
                tagIds: array (of integers corresponding to ids of tags this product has)
            </li>
        </ul>
    </ul>
    <li>/api/tags</li>
    <ul>
        <li>
            GET: fetch all tags
        </li>
        <li>
            POST: add a new tag (include following fields in header)
        </li>
        <ul>
            <li>
                tag_name: string
            </li>
        </ul>
    </ul>
    <li>/api/categories/id</li>
    <ul>
        <li>
            GET: fetch specific category with given id
        </li>
        <li>
            PUT: update category with given id (include following fields in header)
        </li>
        <ul>
            <li>
                category_name: string
            </li>
        </ul>
        <li>
            DELETE: remove category with given id
        </li>
    </ul>
    <li>/api/products/id</li>
    <ul>
        <li>
            GET: fetch specific product with given id
        </li>
        <li>
            PUT: update product with given id (include following fields in header)
        </li>
        <ul>
            <li>
                product_name: string
            </li>
            <li>
                price: decimal
            </li>
            <li>
                stock: integer
            </li>
            <li>
                category_id: integer (corresponding to id of category this product belongs to)
            </li>
            <li>
                tagIds: array (of integers corresponding to ids of tags this product has)
            </li>
        </ul>
        <li>
            DELETE: remove product with given id
        </li>
    </ul>
    <li>/api/tags/id</li>
    <ul>
        <li>
            GET: fetch specific tag with given id
        </li>
        <li>
            PUT: update tag with given id (include following fields in header)
        </li>
        <ul>
            <li>
                tag_name: string
            </li>
        </ul>
        <li>
            DELETE: remove tag with given id
        </li>
    </ul>
</ul>

## Resources

[Walkthrough video outlining some steps, and showing functionality of API routes.](https://drive.google.com/file/d/1QHm81JmvdwSpvObEPBsGljrp8qS81Y_c/view?usp=sharing)

## Questions

Contact with questions/comments:
* GitHub: [hornickjohn](https://github.com/hornickjohn)
* Email: jhornick@live.com
    

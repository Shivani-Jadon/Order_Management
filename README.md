# Order_Management
An application built using Handlebar template for making order management module where user can manage orders
Tech Stack - HTML, CSS, JavaScript, NodeJs, Handlebars.js, Charts.js, Bootstrap

## Basic Features.

1. Look at the orders report.
2. View individual order.
3. Edit status of individual order.
4. Filter order report based on date.
5. User can set start date and end date.
6. Data will be persistent after changes.
7. Confirm/Reject status order.

### Order Management View

<img src = "/git_static/order_management.png">

#### Date Filter
<img src = "/git_static/date_filter.png">

### Edit/View Order view

#### Before edit
<img src = "/git_static/before_edit.png">

#### After edit
<img src = "/git_static/after_edit.png">

## How To Install.

1. Clone this project
2. Start by installing npm if you don't have it already.
3. Navigate to Project Directory by :

```
cd Order_Management
```

4. run following commands :

```
npm install
npm start or node index.js
```

## Directory Structure and flow of The Code

This code follows MVC pattern and hence everything is differentiated and well managed:

`/routes` - containes all the routes. <br>
`/assets` - static js css and image files. <br>
`/views` - contains view files written in handlebars to be served. <br>
`/data` - contains dummy data. <br>

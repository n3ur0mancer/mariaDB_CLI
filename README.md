# Getting started

### Dependencies

`npm install`


### Docker Container

###### Starting the Container

`docker compose up`


###### Closing/ Ending the Container

`docker compose down --volumes`

### Book Search

You can search for a book by its book_title by using the command line interface.

The result will be the book_title and the book_library, including the corresponding metadata.

`node app.js "book_title"`

(Please note that "_book_title_" is just a placeholder. The actual name of the book should be placed between quotation marks.)
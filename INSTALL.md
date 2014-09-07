# INSTALL

## Node

Run:

    npm install

## CouchDB

In local.ini:

    [httpd]
    enable_cors = true
    
    [cors]
    origins = *

Then restart.

To create the database:
	curl -X PUT http://127.0.0.1:5984/cover_letter_manager

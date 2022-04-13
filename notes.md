## 1) backend

MODELS
- stores our internal application data, and keeps the database up to date

SERIALIZERS
- converts outgoing internal application data (model records) to a transmittable data format (JSON)
- converts incoming data (JSON) to internal application data (model records)

VIEWS
- processes requests and sends our JSON responses, using serializers

URLS
- handles the routing of requests

## 2) frontend

ROUTER
- internal routing of links to pages

PAGES
- presents visual content

COMPONENTS

API CALLS
- gets and sends data, application <--> api

STYLING

## 3) Authorization

MODELS
- add user

SERIALIZER
- add converter for user data

VIEWS
- filter data by user
- login/logout

URLS
- add support for new views
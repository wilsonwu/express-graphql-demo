# express-graphql-demo
This project is a GraphQL demo with ExpressJS full project mode all in nodejs.

### What is GraphQL?
GraphQL is a type of API, you may know REST API, they have the same meaning, you can use GraphQL way to build you server side API. 

For details (Chinese): http://graphql.cn/

For details (English): https://graphql.org/

### How to run the demo?
You can easily use below command to run a full Express project in nodejs than get a running demo of GraphQL
```
git clone git@github.com:wilsonwu/express-graphql-demo.git
cd express-graphql-demo
npm install
npm start
```
Try the GraphiQL (a tool for test GraphQL query) from: http://localhost:3000/hello

### Can I try in Postman?
```
POST /hello HTTP/1.1
Host: localhost:3000
Content-Type: application/json
query={ hello }
```
PS: Just set a the post parameter key is: ```query```, and the value is: ```{ hello }```

### Todo:
1. Add more test API for different types of query

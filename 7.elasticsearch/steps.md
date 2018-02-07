# postman

1. See folder.


# Kibana
1. Add the index pattern `awesome-app-*`
2. Go to the Dev Tools, can 
```
   GET _search
   {
     "query": {
       "match_phrase":{
         "fields.title":"Star"
       }
     }
   }
```
3. Go to Discover

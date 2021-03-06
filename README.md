# Turkish-Football-Standings
Turkish Football Standings
---
This project fetches some important data via "cheerio" from "sporx" and serves as json data in the backend.  

**Live Preview Frontend** : https://hasanmuzak.github.io/turkish-standings.github.io/ <br /><br />
**Live Preview Backend** : https://turkish-standings.herokuapp.com/ <br /><br />
![Live Preview](https://i.hizliresim.com/pbtwz5.png)

### Backend Routing || URLs
```https://turkish-standings.herokuapp.com/api/super-lig-puan-durumu/```  
```https://turkish-standings.herokuapp.com/api/birinci-lig-puan-durumu/```  
```https://turkish-standings.herokuapp.com/api/ikinci-lig-puan-durumu/```  
```https://turkish-standings.herokuapp.com/api/ucuncu-lig-puan-durumu/```  
```https://turkish-standings.herokuapp.com/api/gol-krallari/super-lig/```  
```https://turkish-standings.herokuapp.com/api/asist-krallari/super-lig/```  
```https://turkish-standings.herokuapp.com/api/kirmizi-kart/super-lig/```  

### Technologies used

**Backend :** Node.js - Express.js  
**Frontend :** Vue.js - Tailwindcss - AtUi
---
**Installation Backend**
- Fill up ".envexample" file according to your credentials and then change its extension as .env
- To install modules, type : ```npm install ```
- To run, type : ```npm run dev``` (It activates nodemon) or ```node server.js```

**Installation Frontend**
- To install modules, type : ```npm install ```
- To run, type : ```npm run serve```
---
**Kurulum Backend**
- ".envexample" dosyasındaki değişkenleri, kendinize göre değiştirin. Ardından uzantı ismini ".env" olarak düzenleyin.
- Gerekli modülleri yüklemek için : ```npm install``` komutunu çalıştırın.
- Projeyi çalıştırmak için : ```npm run dev``` komutunu girin.

**Kurulum Frontend**
- Gerekli modülleri yüklemek için : ```npm install``` komutunu çalıştırın.
- Projeyi çalıştırmak için : ```npm run serve``` komutunu girin.

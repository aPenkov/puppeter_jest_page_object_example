# puppeter_jest_page_object_example test


Пример проекта для UI тестов, с использованием puppeteer и jest, так же спроыстыми примерами в папке ``` simple-example```

Склонируйте данный репозиторий на свою машину и выполните в корне
```
npm i
```
Укажите в *BASE_URL, cookie итд* в файле ```shared/constants.js``` и в ``` simple-example/shared/constants.js``` адрес на котором будете прогонять тесты 
(*это может быть локально поднятый редактор*)


Для того, что бы видеть прогон тестов визуально, в файле ```shared/BrowserSession.js``` Замените
```
headless: true
```
На
```
headless: false
```


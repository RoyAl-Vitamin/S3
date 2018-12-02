# S3

## Шаг 1: Установить AWS SDK и зависимости

```terminal
git clone https://github.com/awslabs/aws-nodejs-sample.git
```

Находясь в директории aws-nodejs-sample, введите:

```terminal
 npm install
```

Более подробную информацию смотрите в статье «[Установка AWS SDK](https://github.com/mailru/hit-doc/blob/master/js/README.md)».
## Шаг 2: Сконфигурировать учетные данные (credentials)

Для прохождения аутентификации к сервисам Cloud Storage вам понадобятся ключи доступа известные как Access key ID  и Secret access key. Их вы можете создать в административном интерфейсе сервиса Cloud Storage в разделе «Аккаунты». Как это сделать, читайте в статье «[Работа с аккаунтами](https://mcs.mail.ru/help/sdk/feedback%3A11101)». 

1. Создайте файл учетных данных в ~/.aws /credentials Для Unix подобных систем - в директории home Для Windows - в директории C:\Users\USER_NAME\
2. Добавьте ключи доступа в файл

```terminal
[default]
aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY
```

Более подробную информацию смотрите в статье «[Конфигурирование учетных данных](https://github.com/mailru/hit-doc/blob/master/js/Credentials/README.md)».

## Шаг 3: Загрузить SDK

После установки SDK вы можете загрузить пакет AWS, используя require.

```js
 var AWS = require('aws-sdk');
```

## Шаг 4: Загрузить учетные данные (credentials) и создать клиента

```js
var AWS = require('aws-sdk');
var S3 = require('aws-sdk/clients/s3');

AWS.config.update({
  region: 'ru-msk',
  endpoint: 'http://hb.bizmrg.com',
});

var s3 = new AWS.S3();;
```

## Шаг 5: Выполнить операции

Создав клиента S3 вы можете выполнять API-запросы.
Получить тело объекта

```js
s3.getObject({Bucket: 'bucketName', Key: 'keyName'}, function(err, data){
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});
```

Положить объект

```js
s3.putObject({
  Body: ,
  Bucket: "examplebucket",
  Key: "HappyFace.jpg",
}, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data);           // successful response
}
```

## Пример работы программы

Можно запустить готовый к выполнению JS скрипт для получения тела объекта командой
```terminal
node index.js
```

Взято [из справки MCS](https://mcs.mail.ru/help/sdk/js).

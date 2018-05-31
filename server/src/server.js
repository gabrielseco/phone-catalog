import express from 'express';
import bodyParser from 'body-parser';
import { PhoneCatalogList, PhoneCatalogDetail } from './phone-catalog.controller';

const APP_PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.get('/phones', PhoneCatalogList);

app.get('/phones/:id', PhoneCatalogDetail);

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`); // eslint-disable-line no-console
});

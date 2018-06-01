import phoneCatalog from './data/phone-catalog.json';

const delay = 1000;

export const PhoneCatalogList = (req, res) => {
  setTimeout(() => {
    res.status(200).send(phoneCatalog);
  }, delay);
};

export const PhoneCatalogDetail = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const foundPhone = phoneCatalog.find(phone => phone.id === id);
  if (foundPhone === undefined) {
    setTimeout(() => {
      res.status(409).send({
        message: 'The phone has not be found',
      });
    }, delay);
  } else {
    setTimeout(() => {
      res.status(200).send(foundPhone);
    });
  }
};


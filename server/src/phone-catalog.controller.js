import phoneCatalog from './data/phone-catalog.json';

export const PhoneCatalogList = (req, res) => {
  res.status(200).send(phoneCatalog);
};

export const PhoneCatalogDetail = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const foundPhone = phoneCatalog.find(phone => phone.id === id);
  if (foundPhone === undefined) {
    res.status(409).send({
      message: 'The phone has not be found',
    });
  }
  res.status(200).send(foundPhone);
};


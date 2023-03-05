import express from 'express';
import cors from 'cors';
import faker from 'faker';

const app = express();

app.use(cors());

app.get('/users/:count', (req, res) => {
  const count = parseInt(req.params.count);

  if (isNaN(count) || count < 1 || count > 100) {
    res.status(400).send('Invalid count');
    return;
  }

  const users = [];

  for (let i = 0; i < count; i++) {
    users.push({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
    });
  }

  res.json(users);
});

app.listen(80, () => {
  console.log(`Server is running on port 80`);
});
import { faker } from '@faker-js/faker'; //Vous avez besoin d’importer la librairie
const randomName = faker.person.fullName(); //créer un nom+prénom
console.log('Name:', randomName); //peut retourner par exemple ‘Christine Dupont’

//const animal = faker.animal.bear(); //créer un animal·
//const password = faker.internet.password(); //créer un mot de passe
const email= faker.internet.email(); //créer un email
const message= faker.lorem.sentences(); //créer des phrases
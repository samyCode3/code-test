
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```
## Prisma Initiazation
##You have to init prisma to connect to the postgres database
$ Run: npx prisma init 
## Prisma will automatically creat an .env file containing a connection string
DATABASE_URL="postgresql://<username>:<password>@localhost:6000/<your database>?schema=public"
make sure if ur password contain any specail characters replace than with there hard encode string
Example: @ = %40 # = %23
##After prisma init make sure you have postgres install, Copy the model into the schema.prisma
model Wizard {
  id         Int      @id @default(autoincrement())
  first_name String
  last_name  String?
  spells     spells[]
}

model spells {
  id       Int     @id @default(autoincrement())
  title    String?
  spells   String?
  wizardId Int
  wizard   Wizard  @relation(fields: [wizardId], references: [id], onDelete: Cascade, onUpdate: Cascade)
}

model elixris {
  id         Int     @id @default(autoincrement())
  difficulty String?
  name       String
}
## To migrate the database: 
$npx prisma migrate dev --name=init
## To generate Schema
$npx prisma generate
## Once your server and prisma are connected you can go ahead To test from swagger docs
Go to the link : http://localhost:5002/api

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

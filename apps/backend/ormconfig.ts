import { DataSource } from 'typeorm';

export default new DataSource({
    type: 'sqlite',
    database: 'db.sqlite', // Deve corrispondere al nome nel tuo TypeOrmModule

    // Assicurati che il percorso sia corretto rispetto a dove esegui il comando
    entities: ['dist/**/*.entity.js'], // Percorso dove si trovano i file Entity compilati
    migrations: ['dist/migrations/*.js'], // Percorso dove TypeORM salverà le migration compilate
});
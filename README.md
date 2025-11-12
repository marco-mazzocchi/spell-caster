# Development

Lanciando dalla root del progetto questo comando partono sia backend che frontend rispettivamente sulle porte 3000 e 3001:
```bash
npm run dev
```
Quindi visitare il frontend all'indirizzo http://localhost:3001

# Migrations

Dopo aver modificato le entità (file che finiscono per entity.ts) 
accedere alla cartella backend e lanciare il comando 
```bash
typeorm --dataSource ormconfig.ts migration:generate [nome della migration]
```

All'avvio viene eseguita la migration creata.

const db = require('./_database')

async function dropTables(){
  console.log('drop tables chamada')
  await db.connect()
  await db.query(`DROP TABLE evento CASCADE`)
  await db.query(`DROP TABLE participante CASCADE`)
  await db.query(`DROP TABLE evento_participante CASCADE`)
  await db.end()

  console.log("Tabelas removidas");
}

dropTables()

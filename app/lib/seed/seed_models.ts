import {getDBConnection} from '@/app/lib/db'
import models from '@/app/lib/data/model.json'
import type { Model } from '@/app/types'


async function seedModels(){
  const db = await getDBConnection()

  //Create the models table
  await db.exec(`  
    CREATE TABLE IF NOT EXISTS models (  
      id INTEGER PRIMARY KEY,  
      name TEXT NOT NULL,  
      description TEXT NOT NULL,  
      likes INTEGER NOT NULL DEFAULT 0,  
      image TEXT NOT NULL,  
      category TEXT NOT NULL,  
      dateAdded TEXT NOT NULL  
    );  
  `)

  //Prepare INSERT query
  const insertModel = await db.prepare(`  
    INSERT OR REPLACE INTO models (  
      id,  
      name,  
      description,  
      likes,  
      image,  
      category,  
      dateAdded  
    ) VALUES (?, ?, ?, ?, ?, ?, ?)  
  `)

  //Insert each model from the JSON data file
  const modelsToSeed: Model[] = models
  for (const model of modelsToSeed) {
    await insertModel.run(
      model.id,
      model.name,
      model.description,
      model.likes,
      model.image,
      model.category,
      model.dateAdded
    )
  }

  //Finalize the prepared statement and close the connection
  await insertModel.finalize()
  await db.close()

  console.log(`Seeded ${modelsToSeed.length} models`)

}

seedModels().catch((error) => {
  console.error('Failed to seed models:', error)
  process.exit(1)
})

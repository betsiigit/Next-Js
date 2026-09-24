import { getDBConnection } from '@/app/lib/db'

async function main() {
  const db = await getDBConnection()
  console.log('tables:', await db.all("SELECT name FROM sqlite_master WHERE type = 'table'"))
  console.log('categories:', await db.all('SELECT * FROM categories LIMIT 3'))
  console.log('models count:', await db.get('SELECT COUNT(*) AS count FROM models'))
  console.log('models by category:', await db.all('SELECT id, name, category FROM models WHERE category = ? LIMIT 2', ['toys-games']))
  await db.close()
}

main().catch((error) => {
  console.error('check failed:', error)
  process.exit(1)
})

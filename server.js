const { MongoClient } = require('mongodb')

async function main() {
    const uri =
        'mongodb+srv://daddyjanno:watchano@cluster0.guoaa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

    const client = new MongoClient(uri)

    try {
        await client.connect()
        await listDatabases(client)
    } catch (error) {
        console.error(error)
    } finally {
        await client.close()
    }
}

main().catch(console.error())

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases()

    console.log('Databases:')
    databasesList.databases.forEach((db) => {
        console.log(`- ${db.name}`)
    })
}

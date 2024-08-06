import { Client } from 'pg';

// Connet to PostgreSQL database
const client = new Client({
    user: 'postgres',
    password: 'example',
    port: 2345
});

client.connect();

async function checkSheet () {
    try {
        const result = await client.query("SELECT * FROM duties");
        return result;
    } catch (error) {
        // Relation "duties" does not exist. Then create one.
        const result = await client.query('CREATE TABLE duties (id VARCHAR(255), name VARCHAR(255))');
        return result;
    }
}
checkSheet();

export default client;
const mysql = require("mysql2/promise");

class Database {
    constructor() {
        if (!Database.instance) {
            this.pool = mysql.createPool({
                host: "localhost",
                user: "root",
                password: "root@123",
                database: "task_app",
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0
            });
            Database.instance = this;
        }
        return Database.instance;
    }

    async getConnection() {
        try {
            return await this.pool.getConnection();
        } catch (error) {
            console.error("Error in establishing connection:", error);
            throw error;
        }
    }

    async closeConnection() {
        try {
            await this.pool.end();
            console.log("Connection pool closed.");
        } catch (error) {
            console.error("Error in closing the connection pool:", error);
        }
    }

    // Method to handle transactions
    async performTransaction() {
        const connection = await this.getConnection();
        try {
            await connection.beginTransaction();

            const [result1] = await connection.query('INSERT INTO users (name, age) VALUES (?, ?)', ['John', 30]);
            const [result2] = await connection.query('INSERT INTO orders (user_id, product) VALUES (?, ?)', [result1.insertId, 'Book']);

            await connection.commit();
            console.log('Transaction committed successfully!');
        } catch (err) {
            await connection.rollback();
            console.error('Transaction failed and rolled back:', err);
        } finally {
            connection.release();
        }
    }

    // Method to handle transactions with retries in case of deadlocks
    async performTransactionWithRetries(retryCount = 3) {
        let retries = retryCount;
        while (retries > 0) {
            const connection = await this.getConnection();
            try {
                await connection.beginTransaction();

                const [result1] = await connection.query('INSERT INTO users (name, age) VALUES (?, ?)', ['John', 30]);
                const [result2] = await connection.query('INSERT INTO orders (user_id, product) VALUES (?, ?)', [result1.insertId, 'Book']);

                await connection.commit();
                console.log('Transaction committed successfully!');
                break; // Exit loop if transaction is successful
            } catch (err) {
                await connection.rollback();
                if (err.code === 'ER_LOCK_DEADLOCK' && retries > 0) {
                    retries--;
                    console.warn(`Deadlock detected, retrying... (${retries} retries left)`);
                } else {
                    throw err; // Re-throw error if it's not a deadlock or retries are exhausted
                }
            } finally {
                connection.release();
            }
        }
    }
}

// Export the singleton instance
const instance = new Database();
Object.freeze(instance);  // Ensures no modifications to the singleton instance

module.exports = instance;









// const mysql = require("mysql2/promise");

// class Database {
//     constructor() {
//         if (!Database.instance) {
//             this.pool = mysql.createPool({
//                 host: "localhost",
//                 user: "root",
//                 password: "root@123",
//                 database: "task_app",
//                 waitForConnections: true,
//                 connectionLimit: 10,   // Number of maximum connections in pool
//                 queueLimit: 0          // No limit to the connection queue
//             });
//             Database.instance = this;
//         }
//         return Database.instance;
//     }

//     async getConnection() {
//         try {
//             return await this.pool.getConnection();
//         } catch (error) {
//             console.error("Error in establishing connection:", error);
//             throw error;
//         }
//     }

//     async closeConnection() {
//         try {
//             await this.pool.end();  // Close all connections in the pool
//             console.log("Connection pool closed.");
//         } catch (error) {
//             console.error("Error in closing the connection pool:", error);
//         }
//     }
// }

// // Export the singleton instance of the Database class
// const instance = new Database();
// Object.freeze(instance);  // Prevents modifications to the instance

// module.exports = instance;





// const mysql = require("mysql2/promise");

// class Database {
//     constructor() {
//         if(! Database.instance) {
//             this.pool = mysql.createPool({
//                 host: "localhost",
//                 user: "root",
//                 password: "root@123",
//                 database: "task_app"
//             });
//             Database.instance = this;
//         }
//     }
//     async getConnection() {
//         try {
//             return await this.pool.getConnection();
//         } catch (error) {
//             console.error("Error in establishing connection", error);
//             throw error
            
//         }
//     }
// }

// module.exports = new Database;
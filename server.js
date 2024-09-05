const sqlite3 = require('sqlite3').verbose()

// open the database
let db = new sqlite3.Database('./db/FishEye.db', sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message)
    }
    console.log('Connected to the FishEye database.')
})

// db.serialize(() => {
//     db.each(
//         `SELECT PlaylistId as id,
//                   Name as name
//            FROM playlists`,
//         (err, row) => {
//             if (err) {
//                 console.error(err.message)
//             }
//             console.log(row.id + '\t' + row.name)
//         }
//     )
// })

db.close((err) => {
    if (err) {
        console.error(err.message)
    }
    console.log('Close the database connection.')
})

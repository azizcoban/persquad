export const getUserByEmail = async (db, email) => db.collection('users-permissions_user').findOne({ email });

const connect = require('./connection');

const add = async (name, brand) => {
  try {
    const db = await connect();
    const result = await db
      .getTable('products')
      .insert(['name', 'brand'])
      .values(name, brand)
      .execute();
    return { id: result.getAutoIncrementValue(), name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};


const getAll = async () => {
  try {
    const db = await connect();
    const searchDb = await db.getTable('products').select().execute();
    const results = await searchDb.fetchAll();
    return results ? results.map(([id, name, brand]) => ({ id, name, brand })) : [];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (idParam) => {
  try {
    const db = await connect();
    const searchDb = await db
      .getTable('products')
      .select()
      .where('id = :id')
      .bind('id', idParam)
      .execute();
    const result = await searchDb.fetchAll();
    if(!result.length) return null;
    const [[id, name, brand]] = result;
    return result !== [] ?
     { id, name, brand } : null;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
try {
    const db = await connect();
    return db
      .getTable('products')
      .update()
      .set('name', name)
      .set('brand', brand)
      .where('id = :id')
      .bind('id', id)
      .execute();
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
    try {
    const db = await connect();
    const product = await getById(id);
    if(!product) return {};
    await db.getTable('products')
      .delete()
      .where('id = :id')
      .bind('id', id)
      .execute();
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
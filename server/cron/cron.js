const { findAll } = require('../controllers/books');
const { db } = require('../database/models/books');
const bookDB =  require('../database/models/books');
const bofWController = require('../controllers/bookofWeek');

const CronJob = require('cron').CronJob;
let job = new CronJob('0 0 * * * *', async function() {
  console.log('cron working');

  console.log('date: ', new Date());
  const books = await bookDB.find({});

  const index = Math.floor(Math.random()*books.length);
  const theBook = books[index];

  await bofWController.SetBookofWeek(theBook);

}, null, true, 'America/Los_Angeles');

module.exports = job;
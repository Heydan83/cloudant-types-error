import Cloudant from '@cloudant/cloudant';

const cloudant = Cloudant({ url: 'https://test.com'})
const cloudantDb = cloudant.db.use('reservations')

const query = { 'selector': { 
  '$and': [
    { 
      'status': {'$eq': 'd'}
    },
    {
      'startDate': { 'year': {'$gt': 2019} }
    }
  ]
}};

cloudantDb.find(query, function(err, data) {
  console.log(err);
  console.log(data);
});
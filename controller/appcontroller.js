let express = require('express');

let router = express.Router();

const axios = require('axios');

router.get('/:city/:state/:pricingInfo', function (req, res) {

   axios({
       method: 'get',
       url: `https://api.yelp.com/v3/businesses/search?location=${req.params.city}${req.params.state}&price=${req.params.pricingInfo}`,
       headers: {'Authorization': 'Bearer JLNek-3gVC2m18T8KWrYgCA2etJuI5SFDkxYjNU6hr7xMIMT3H62s2zfjTEXB3YNmRZ8mDrtq6i6YAkJvtUg_WGRXDupO8vN7lsipV5qqey6zdGk5kMXLNVOVTDkXHYx',
       'Content-Type': 'application/json'}
       }
       ).then(response => {
       res.send(response.data);
   })
   .catch(error => {
       console.log(error);
   })

});

module.exports = router;
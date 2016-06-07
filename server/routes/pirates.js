const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


router.get('/', function(req,res){
  knex('pirates').then(function(pirates){
    res.send(pirates);
  }).catch(function(err){
    console.log(err)
  });
});

router.post('/',function(req,res){
  knex('pirates').insert(req.body.pirate, "*").then(function(pirate){
      res.send(pirate)
  });

});

router.get('/:id', function(req,res){
  knex('pirates').where({id: +req.params.id}).first().then(function(pirate){
    res.send(pirate);
  }).catch(function(err){
    console.log(err)
  })
})


router.put('/:id', function(req,res){
  // console.log(req.body.pirate)
  knex('pirates').where({id: +req.params.id}).update(req.body.pirate).returning('*').then(function(pirate){
  console.log(pirate)  
    res.send(pirate);
  }).catch(function(err){
    console.log(err)
  })
})


router.delete('/:id', function(req,res){
  knex('pirates').where({id: +req.params.id}).del().then(function(){
    res.send("Pirate Deleted");
  }).catch(function(err){
    console.log(err)
  })
})
module.exports = router;
const express = require('express');
const redis = require('../redis');
const { Todo } = require('../mongo');
const router = express.Router();

/* GET todos statistics */
router.get('/', async (req, res) => {
  let addedTodos = await redis.getAsync('added_todos');

  /* Catch null or NaN values */
  if(!addedTodos || isNaN(addedTodos)) {
    await redis.setAsync('added_todos', 0);
    addedTodos = 0;
  }

  res.send({
    addedTodos
  })
})

module.exports = router;
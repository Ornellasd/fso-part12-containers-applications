const express = require('express');
const redis = require('../redis');
const { Todo } = require('../mongo');
const router = express.Router();

/* GET todos statistics */
router.get('/', async (req, res) => {
  const addedTodos = await redis.getAsync('added_todos');

  res.send({
    addedTodos
  })
})

module.exports = router;
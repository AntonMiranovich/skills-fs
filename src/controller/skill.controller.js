const express = require('express');
const { getAllSkills, createSkills, updateSkills, deleteSkills } = require('../service/skill.service');
const { isValidSkillsId, isValidSkillsData } = require('../helper/validation');
const { bildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.get('/', (req, res) => {
  try {
    bildResponse(res, 200, getAllSkills());
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post('/', isValidSkillsData, (req, res) => {
  try {
    const { title } = req.body;
    bildResponse(res, 200, createSkills(title));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.put('/:id', isValidSkillsId, isValidSkillsData, (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    bildResponse(res, 200, updateSkills(id, title));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.delete('/:id', isValidSkillsId, (req, res) => {
  try {
    const { id } = req.params;
    bildResponse(res, 200, deleteSkills(id));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = route;

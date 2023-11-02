function isValidSkillsId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('ID должен быть числом');
  if (id < 1) throw new Error('ID не может быть отрицательным');
  next();
}

function isValidSkillsData(req, res, next) {
  const { title } = req.body;
  if (!isNaN(title)) throw new Error('title ту может быть числом');
  if (!title) throw new Error('значени title пустое');
  next();
}

module.exports = { isValidSkillsId, isValidSkillsData };

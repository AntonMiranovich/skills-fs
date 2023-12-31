const fs = require('fs');
const path = './storage/storage.json';

function getAllSkills() {
  const data = JSON.parse(fs.readFileSync(path));
  return data;
}

function createSkills(title) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.title == title);
  if (filtered.length > 0) throw new Error('Такой title уже есть');
  const item = { id: data.length + 1, title };
  data.push(item);
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
}

function updateSkills(id, title) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id != id);
  if (filtered.length == data.length) throw new Error('такого ID не найдено');
  const item = { id, title };
  filtered.push(item);
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

function deleteSkills(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id != id);
  if (filtered.length == data.length) throw new Error('такого ID не найдено');
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

module.exports = { getAllSkills, createSkills, updateSkills, deleteSkills };

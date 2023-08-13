export const insertFile = (obj, file) => {
  if (!file.parent) obj.items.push({ ...file, items: [] });
  else {
    let i = 0;
    for (let subObj of obj.items) {
      if (subObj.id === file.parent) {
        obj.items[i].items.push({ ...file, items: [] });
        return obj;
      }
      subObj = insertFile(subObj, file);
      obj.items[i] = subObj;
      i++;
    }
  }
  return obj;
};

// Populate the database if it is empty
if (Items.find().count() === 0) {
  ['One', 'Two', 'Three', 'Four', 'Five'].forEach(item => Items.insert({ name: item }));
}

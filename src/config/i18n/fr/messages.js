/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      if (ord) return n == 1 ? 'one' : 'other';
      return n >= 0 && n < 2 ? 'one' : 'other';
    },
  },
  messages: {
    'home.about.title': 'About',
    'home.contact.title': 'Contact',
    'home.mission.title': 'Mission',
  },
};

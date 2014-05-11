import startApp from 'bostonember/tests/helpers/start-app';

var App;

module('Integration - About Page', {
  setup: function () {
    App = startApp();
  },

  teardown: function () {
    Ember.run(App, 'destroy');
  }
});

test('Should navigate to the About Page', function () {
  visit('/').then(function () {
    click("a:contains('About')").then(function () {
      equal(find('h3').text(), 'About');
    });
  });
});

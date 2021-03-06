import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('speakers');
  this.route('schedule');
  this.route('attend');
  this.route('home', {path: '/'});
  this.route('code-of-conduct');
  this.route('team');
});


Ember.Router.reopen({
  beforeTransition: function() {
    let $body = $('body');

    if ($body.hasClass('nav-open')) {
      $body.removeClass('nav-open');
    }
    return;
   }.on('willTransition')
});

export default Router;

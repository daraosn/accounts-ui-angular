/* global Package */

Package.describe({
  name: 'daraosn:accounts-ui-angular-unstyled',
  summary: 'AngularJS Unstyled wrapper for Meteor\'s Account-UI package',
  version: '0.0.1',
  documentation: 'README.md',
  git: 'https://github.com/daraosn/meteor-accounts-ui-angular-unstyled'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.4.1');
  api.use('ecmascript');
  api.use('angular:angular@1.6.4', 'client', { weak: true });
  api.use('blaze-html-templates@1.0.5', 'client');

  api.imply('accounts-ui-unstyled');

  api.addFiles([
    'accounts-ui-angular-unstyled.js',
    'login-buttons-directive.js'
  ], 'client');
});

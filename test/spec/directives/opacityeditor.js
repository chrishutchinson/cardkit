'use strict';

describe('Directive: opacityEditor', function () {

  // load the directive's module
  beforeEach(module('cardkitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Should render the opacity editor correctly', inject(function ($compile) {
    element = angular.element('<opacity-editor></opacity-editor>');
    element = $compile(element)(scope);
    var label = element.find('label');
    expect(label.text()).toBe('Opacity');
  }));
});

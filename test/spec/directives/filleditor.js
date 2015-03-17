'use strict';

describe('Directive: fillEditor', function () {

  // load the directive's module
  beforeEach(module('cardkitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fill-editor></fill-editor>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fillEditor directive');
  }));
});

'use strict';

describe('Directive: sizeEditor', function () {

  // load the directive's module
  beforeEach(module('cardkitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<size-editor></size-editor>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sizeEditor directive');
  }));
});

'use strict';

describe('Directive: sizeEditor', function () {

  // load the directive's module
  beforeEach(module('cardkitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Should render the size editor correctly', inject(function ($compile) {
    element = angular.element('<size-editor></size-editor>');
    element = $compile(element)(scope);
    var label = element.find('label');
    expect(label.text()).toBe('Size');
  }));
});

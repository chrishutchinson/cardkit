'use strict';

describe('Directive: fillEditor', function () {

  // load the directive's module
  beforeEach(module('cardkitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Should render the fillEditor', inject(function ($compile) {
    element = angular.element('<fill-editor></fill-editor>');
    element = $compile(element)(scope);
    var label = element.find('label');
    expect(label.text()).toBe('Fill Color');
  }));
});

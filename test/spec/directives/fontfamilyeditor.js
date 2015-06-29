'use strict';

describe('Directive: fontfamilyEditor', function () {

  // load the directive's module
  beforeEach(module('cardkitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Should render the font family editor correctly', inject(function ($compile) {
    element = angular.element('<fontfamily-editor></fontfamily-editor>');
    element = $compile(element)(scope);
    var label = element.find('label');
    expect(label.text()).toBe('Font Family');
  }));
});

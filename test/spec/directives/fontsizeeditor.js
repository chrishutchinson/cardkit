'use strict';

describe('Directive: fontsizeEditor', function () {

  // load the directive's module
  beforeEach(module('cardkitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Should render the font size editor correctly', inject(function ($compile) {
    element = angular.element('<fontsize-editor></fontsize-editor>');
    element = $compile(element)(scope);
    var label = element.find('label');
    expect(label.text()).toBe('Font Size');
  }));
});

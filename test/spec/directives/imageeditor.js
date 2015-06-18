'use strict';

describe('Directive: imageEditor', function () {

  // load the directive's module
  beforeEach(module('cardkitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Should render the image editor correctly', inject(function ($compile) {
    element = angular.element('<image-editor></image-editor>');
    element = $compile(element)(scope);
    var label = element.find('label');
    expect(label.text()).toBe('Image');
  }));
});

'use strict';

describe('Directive: textanchorEditor', function () {

  // load the directive's module
  beforeEach(module('cardkitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<textanchor-editor></textanchor-editor>');
    element = $compile(element)(scope);
    var label = element.find('label');
    expect(label.text()).toBe('Text Anchor');
  }));
});

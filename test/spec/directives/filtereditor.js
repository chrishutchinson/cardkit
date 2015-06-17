'use strict';

describe('Directive: filterEditor', function () {

  // load the directive's module
  beforeEach(module('cardkitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Should render the filterEditor correctly', inject(function ($compile) {
    element = angular.element('<filter-editor></filter-editor>');
    element = $compile(element)(scope);
    var label = element.find('label');
    expect(label.text()).toBe('Filter');
  }));
});

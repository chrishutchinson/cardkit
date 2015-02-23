'use strict';

describe('Service: themeConfigProvider', function () {

  // load the service's module
  beforeEach(module('cardkitApp'));

  // instantiate service
  var themeConfigProvider;
  beforeEach(inject(function (_themeConfigProvider_) {
    themeConfigProvider = _themeConfigProvider_;
  }));

  it('should do something', function () {
    expect(!!themeConfigProvider).toBe(true);
  });

});

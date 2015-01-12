'use strict';

describe('Service: saveSvgAsPng', function () {

  // load the service's module
  beforeEach(module('cardkitApp'));

  // instantiate service
  var saveSvgAsPng;
  beforeEach(inject(function (_saveSvgAsPng_) {
    saveSvgAsPng = _saveSvgAsPng_;
  }));

  it('should do something', function () {
    expect(!!saveSvgAsPng).toBe(true);
  });

});

'use strict';

describe('Service: snapSVG', function () {

  // load the service's module
  beforeEach(module('cardkitApp'));

  // instantiate service
  var snapSVG;
  beforeEach(inject(function (_snapSVG_) {
    snapSVG = _snapSVG_;
  }));

  it('should do something', function () {
    expect(!!snapSVG).toBe(true);
  });

});

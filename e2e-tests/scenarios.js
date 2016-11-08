'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /controles when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/controles");
  });


  describe('controles', function() {

    beforeEach(function() {
      browser.get('index.html#!/controles');
    });


    it('should render controles when user navigates to /controles', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('clientes', function() {

    beforeEach(function() {
      browser.get('index.html#!/clientes');
    });


    it('should render clientes when user navigates to /clientes', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});

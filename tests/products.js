var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

gauge.step("Create a product <table>", function(table, done) {
  driver
    .get("http://localhost:8080/admin/products/new")
      .then(function() {
        driver.findElement(By.id('product_title')).sendKeys('webdriver')
          .then(function() {
            console.log(table);
            done();
          });
      });
});

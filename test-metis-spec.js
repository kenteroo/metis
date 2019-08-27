describe('Some basic web tests for Parkside', function() {
  it('Verify Contents Heading values and URL destinations', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://en.wikipedia.org/wiki/Metis_(mythology)');

    var ch1 = element(by.xpath("//a[@href='#Family']/span[2]"));
    var ch2 = element(by.xpath("//a[@href='#Mythology']/span[2]"));
    var ch3 = element(by.xpath("//a[@href='#References']/span[2]"));
    var ch4 = element(by.xpath("//a[@href='#Further_reading']/span[2]"));

    var th1 = element(by.xpath("//span[@id='Family']"));
    var th2 = element(by.xpath("//span[@id='Mythology']"));
    var th3 = element(by.xpath("//span[@id='References']"));
    var th4 = element(by.xpath("//span[@id='Further_reading']"));

    var Pontushref      = element(by.xpath("//td/a[@title='Pontus (mythology)']"));
    var Gaiahref        = element(by.xpath("//td/a[@title='Gaia']"));
    var Eurybiashref    = element(by.xpath("//td/a[@title='Eurybia (mythology)']"));
    var Persesshref     = element(by.xpath("//td/a[@title='Perses (Titan)']"));
    var Phainonhref     = element(by.xpath("//td/a[@title='Phainon']"));
    var Stilbonhref     = element(by.xpath("//td/a[@title='Stilbon (mythology)']"));

    var pc_nike_mythology_href = element(by.xpath("(//div[@class='div-col columns column-width']/ul/li/a[@href='/wiki/Nike_(mythology)'])"));

    expect(ch1.getText()).toEqual(th1.getText());
    expect(ch2.getText()).toEqual(th2.getText());
    expect(ch3.getText()).toEqual(th3.getText());
    expect(ch4.getText()).toEqual(th4.getText());

    ch1.click(); //click the href
    expect(browser.getCurrentUrl()).toEqual("https://en.wikipedia.org/wiki/Metis_(mythology)#Family"); //verify that the browser URL has changed
    ch2.click();
    expect(browser.getCurrentUrl()).toEqual("https://en.wikipedia.org/wiki/Metis_(mythology)#Mythology");
    ch3.click();
    expect(browser.getCurrentUrl()).toEqual("https://en.wikipedia.org/wiki/Metis_(mythology)#References");
    ch4.click();
    expect(browser.getCurrentUrl()).toEqual("https://en.wikipedia.org/wiki/Metis_(mythology)#Further_reading");

    browser.actions().mouseMove(pc_nike_mythology_href.getWebElement()).perform(); //move the mouse over the "Nike" href
    browser.sleep(1000);
    expect(element(by.xpath("//a[@class='mwe-popups-extract']/p")).isPresent());
    var popuptext = element(by.xpath("//a[@class='mwe-popups-extract']/p"));
    expect(popuptext.getText()).toEqual('In ancient Greek religion, Nike was a goddess who personified victory. Her Roman equivalent was Victoria.');

    pc_nike_mythology_href.click();
    element(by.xpath("(//a[@href='#Family_tree'])")).click();
    expect(Pontushref.isDisplayed()).toBe(true);
    expect(Gaiahref.isDisplayed()).toBe(true);
    expect(Eurybiashref.isDisplayed()).toBe(true);
    expect(Persesshref.isDisplayed()).toBe(true);
    expect(Phainonhref.isDisplayed()).toBe(true);
    expect(Stilbonhref.isDisplayed()).toBe(true);
  });
});

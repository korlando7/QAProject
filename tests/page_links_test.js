const MAIN_URL = 'https://www.directspecials.com',
      SCREENSHOT_DIR = './screenshots/page_links_test/';
module.exports = {
	'Nav Link Test' : function(browser) {
		browser
    		.url(MAIN_URL)
            .windowMaximize()
    		.waitForElementVisible('body')
    		.assert.visible('ul.main_nav')
            //find all main_nav links
    		.elements('css selector', 'ul.main_nav > li > a', function(results) {
                //loop through main_nav links and click on them
    		 	for (var i=2; i<=results.value.length; i++) {
    		 		var link = 'ul.main_nav > li:nth-child(' + (i) + ') > a';
                    browser
                        .click(link)
                        //perform tests on each page
                        .getText(link, function(results) {
                             console.log(results.value);
                        })
                        .waitForElementVisible('ul.main_nav')
                        .verify.visible('div.hero > img')
                        .verify.visible('div#contact-form-top')
                        .verify.visible('div.content_main')
                        .verify.visible('div#content-cta')
                        .verify.visible('div.footer')
                        .verify.cssClassPresent('ul.main_nav > li:nth-child(' + (i) + ')','active')
                        .getAttribute(link, "href", function(results) {
                            browser.verify.urlEquals(results.value);
                        })
                        .saveScreenshot(SCREENSHOT_DIR + "nav_link" + (i) + ".png");
    		  	}
            });
	},
    'Nav Dropdown Link Test' : function(browser) {
        var dropdowns = [
            'ul.main_nav > li:nth-child(2)',
            'ul.main_nav > li:nth-child(6)',
            'ul.main_nav > li:nth-child(7)'
        ];
        
        //function to find dropdown links and test each one
        var dropDownLinkChecker = function(element) {
            browser
                .url(MAIN_URL)
                //find links in dropdown menus
                .elements('css selector', element + ' > ul > li', function(results) {
                    //loop through dropdown menus and click on each link
                    for (var i=1; i<=results.value.length; i++) {
                        dropdownLink = element + ' > ul > li:nth-child(' + i + ') > a';
                        browser
                            .waitForElementVisible('ul.main_nav')
                            .moveToElement(element, 10, 10)
                            .waitForElementVisible(element + ' > ul.dropdown')
                            .getText(dropdownLink, function(result) {
                                console.log(result.value);
                            })
                            .click(dropdownLink)
                            .verify.visible('div.hero > img')
                            .verify.visible('div#contact-form-top')
                            .verify.visible('div.content_main')
                            .verify.visible('div#content-cta')
                            .verify.visible('div.footer')
                            .verify.cssClassPresent(element + ' > ul > li:nth-child(' + i + ')', 'active')
                            .getAttribute(dropdownLink, "href", function(results) {
                                browser.verify.urlEquals(results.value);
                            })
                            .moveToElement(element, 10, 10)
                            .pause(1000)
                            //screenshot to check page and confirm dropdown link has "active" class
                            .saveScreenshot(SCREENSHOT_DIR +  element + " dropdown_link" + (i) + ".png");
                    }
                });
        }
        browser.waitForElementVisible('body')

        for (elem in dropdowns) {
            dropDownLinkChecker(dropdowns[elem]);
        }
    },
    'Feature Boxes Link Text' : function(browser) {
        var featureBoxes = 'ul.feature_boxes > li';
        browser
            .url(MAIN_URL)
            .waitForElementVisible('body')
            //find links in each feature box       
            .elements('css selector', featureBoxes, function(results) {
                //loop through each element and click on them
                for (var i=1; i<=results.value.length; i++) {
                    var link = featureBoxes + ':nth-child(' + i + ') > a';
                    browser
                        .waitForElementVisible('ul.feature_boxes')
                        .moveToElement(featureBoxes + ':nth-child(' + i + ')', 10, 10)
                        .getText(link, function(result) {
                            console.log(result.value);
                        })
                        .click(link)
                        .verify.visible('div.hero > img')
                        .verify.visible('div#contact-form-top')
                        .verify.visible('div.content_main')
                        .verify.visible('div#content-cta')
                        .verify.visible('div.footer')
                        .pause(1000)
                        .saveScreenshot(SCREENSHOT_DIR + "feature_boxes_link" + (i) + ".png")
                        .back();
                }
            });
    },
    'Footer Nav Links Test' : function(browser) {
        var footerNav = 'div.footer > ul.footer_nav',
            footerNavLi = 'ul.footer_nav > li';

        browser
            .url(MAIN_URL)
            .waitForElementVisible('body')
            .elements('css selector', footerNavLi, function(results) {
                for (var i=2; i<=(results.value.length - 1); i++) {
                    var link = footerNavLi + ':nth-child(' + i + ') > a';
                    browser
                        .waitForElementVisible(footerNav)
                        .moveToElement('div.legal', 0, 0)
                        .getAttribute(link, 'href')
                        .getText(link, function(result) {
                            console.log(result.value);
                        })
                        .click(link)
                        .verify.visible('div.content_main')
                        .verify.visible('div#content-cta')
                        .verify.visible('div.footer')
                        .getAttribute(link, "href", function(results) {
                            browser.verify.urlEquals(results.value);
                        })
                        .pause(1000)
                        .saveScreenshot(SCREENSHOT_DIR + "footer_nav_link" + (i) + ".png");
                }
            })
            .waitForElementVisible(footerNav)
            .moveToElement('div.legal', 0, 0)
            .click(footerNavLi + ':nth-child(7) > a')
            .verify.urlEquals('https://www.directspecials.com/sitemap.xml')
            .pause(1000)
            .saveScreenshot(SCREENSHOT_DIR +  "footer_nav_link7.png");
    },
    'Offer Details Link Test' : function(browser) {
        browser
            .url(MAIN_URL)
            .execute('scrollTo(0,5000)')
            .getText('p.full_legal_link > a', function(result) {
                console.log(result.value);
            })
            .click('p.full_legal_link > a')
            .verify.urlEquals('https://www.directspecials.com/directv-legal.html')
            .pause(1000)
            .saveScreenshot(SCREENSHOT_DIR + "offer_details_link.png")
            .end();

    } 
};










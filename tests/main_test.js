const MAIN_URL = 'https://www.directspecials.com',
      SCREENSHOT_DIR = './screenshots/main_test/'
module.exports = {
	'Assert Title' : function(browser) {
		browser
		    .url(MAIN_URL)
		    .waitForElementVisible('body')
		    .windowMaximize()
		    .assert.title('DIRECTV TV / Internet Package Specials and Offers | 1-844-783-8187')
		    .saveScreenshot(SCREENSHOT_DIR + "home.png");
	},
	'Check Header Contains DIRECTV Info' : function(browser) {
        browser
            .url(MAIN_URL)
            .verify.visible('div.masthead > img')
            .verify.containsText('div.cta_header > span', "1-844-783-8187")
            .verify.containsText('span.promo_code', "Use Code")
            .verify.containsText('span.h-promo', "707-113");
	},
	'Check Form Validation' : function(browser) {
		browser
		    .url(MAIN_URL)
		    .submitForm('form#contact-form')
		    .assert.elementPresent('div[class="errors parsley-errors"]'); //error that appears from incomplete form
		    //save screenshot
	},
	'Test Filled Out Form' : function(browser) {
		var phoneNumber = "704" + Math.random().toString().slice(4,11), //random number since form does not except the same information twice
	        zipCode = Math.random().toString().slice(4,9),
	        formData = [
	    	["input[name=FirstName]", "First"],
	    	["input[name=LastName]", "Last"],
	    	["input[name=Phone1]", phoneNumber],
	    	["input[name=ZipCode]", zipCode]
	    ];
	    for (var i=0; i<formData.length; i++) {
	    	browser
	    	    .clearValue(formData[i][0])
	    	    .setValue(formData[i][0], formData[i][1])
	    	    .verify.value(formData[i][0], formData[i][1])
	    	    .submitForm('form#contact-form'); //multiple times to see if the form submits without being fully completed
	    }
	    browser
	    	.saveScreenshot(SCREENSHOT_DIR + "form_filled.png")
	        .pause(2000)
	        .assert.containsText('div#main-column h1', "Thank You")
	        .assert.containsText('div.content_thanks > p', "A DIRECTV specialist will contact you shortly")
	        .saveScreenshot(SCREENSHOT_DIR + "form_success.png");
	},
	'Test Hover Links' : function(browser) {
		browser
		    .url(MAIN_URL)
		    .moveToElement('span.js-tooltipster-pricing',0,0)
		    .pause(1000)
		    .saveScreenshot(SCREENSHOT_DIR + "hover_link_left.png")
		    .moveToElement('span.js-tooltipster-pricing-bundle-att',0,0)
		    .pause(1000)
		    .saveScreenshot(SCREENSHOT_DIR + "hover_link_right.png")
	},
	'Test Scrolling Header Feature' : function(browser) {
		browser
		    .url(MAIN_URL)
		    .verify.hidden('div.footer_strap_wrapper')
		    .execute('scrollTo(0,100)')
		    .verify.visible('div.footer_strap_wrapper')
		    .pause(1000)
		    .saveScreenshot(SCREENSHOT_DIR + "fixed_footer.png")
		    .end();
	}

};
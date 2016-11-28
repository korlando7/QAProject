# QAProject

This is a test of *directspecials.com* using Nightwatch.js.

### *Instructions*

The *bin* folder includes a copy of selenium and chromedriver in order to run the tests. I wrote this on a Mac (do not have access to a PC) so a different copy of chromedriver is necesary depending on the OS you are using.

The *nightwatch.config.js* file also includes the necessary components to test the website on different browsers and devices using Saucelabs. You will need a Saucelabs user name and access key stored as envrionment variables on your computer.

The project is set up to run the tests using Saucelabs. Assuming you have Nightwatch installed locally on your computer:

*Mac Using Saucelabs:*

1. Open the QAProject directory in the terminal
2. Run all tests by typing in `$ nightwatch -e chrome,firefox,internet_explorer_10,safari,android_s4_emulator,iphone_6_simulator`
   You can omit any of the envrionments and type in `$ nightwatch -e chrome, firefox` for example
3. Tests will run on Saucelabs in your account dashboard and will show in console after completing


*Mac Using Chromedriver:*

1. Uncomment the first test_settings object and comment the second test_settings object
2. Open the QAProject directory in the terminal
3. Run all tests in chrome by typing `$ nightwatch`

### *Approach*

I attempted to do a thorough test of this site by making sure images and elements were visible when they should be, that url's directed to the correct page, and the the overall UI experiece was smooth. Some important areas covered were making sure the dropdown links were visible when hovering over the specific navbar button, making sure any hover elements became visible after moving to them, making sure the links directed to the appropriate page, making sure the form functioned properly, making sure correct css properties were active, and making sure page information was correct.

Using nightwatch I was able to locate elements on the page and perform tests on them. I attempted to take more of a DRY approach by looping through elements that would have the same tests perfomed instead of hard coding every test for every element. Being able to loop through links and confirm their URL was very helpful in testing the site. I saved screenshots in order to be able to quickly visualize the site and make sure everything that passed looks correct (screenshots included).

One of the errors I found when checking the header information was that the phone number changed often and did not correspond with the phone number in the page title. This could be a major issue if people were calling the number on a daily basis.

A possible error I found by checking the navbar links is that some of the div.hero images are switched to different pages. For example, clicking on *Direct TV On Demand* brings up a page with an image that says "Directv & Internet". Also, clicking on *Direct Packages* brings up a page with an image that says "Get The Best Directv Deals."

Testing on a mobile device would require separate test srcipts, especially for the links testing since the navbar is hidden and needs to be clicked. I did notice that the *Click Here For Offer Details* link on the bottom is not positioned correctly on the mobile site.

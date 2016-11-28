/*
Uncomment the 1st test_settings object and comment the 
2nd test settings object if you do not have saucelabs
and want to just test the website using Chrome
*/
const BINPATH = './bin/'

module.exports = {
  "src_folders": [
    "tests"
    ],
  "output_folder": "./reports",
  "selenium": {
    "start_process": true,
    "server_path": BINPATH + "selenium.jar",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": BINPATH + "chromedriver",
    }
  },
/* Uncomment Here
  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true, 
        "path": './screenshots'
      },
      "globals": {
        "waitForConditionTimeout": 5000
      },
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true
      }
    }
  }
*/

//  /* Comment Here
  "test_workers" : {"enabled" : true, "workers" : "auto"},
  "test_settings" : {
    "default" : {
      "launch_url" : "http://ondemand.saucelabs.com:80",
      "selenium_port"  : 80,
      "selenium_host"  : "ondemand.saucelabs.com",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      globals: {
        waitForConditionTimeout: 5000
      },
      "username" : "${SAUCE_USERNAME}",
      "access_key" : "${SAUCE_ACCESS_KEY}",

      "desiredCapabilities": {
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "chrome": {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "Chrome",
        "version": "latest"
      }
    },

    "firefox" : {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "Firefox",
        "version": "latest"
      }
    },

    "internet_explorer_10" : {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "internet explorer",
        "version": "10"
      }
    },

    "safari": {
      "desiredCapabilities": {
        "platform": "OS X 10.9",
        "version": "latest"
      }
    },

    "android_s4_emulator": {
      "desiredCapabilities": {
        "browserName": "android",
        "deviceOrientation": "portrait",
        "deviceName": "Samsung Galaxy S4 Emulator"
      }
    },

    "iphone_6_simulator": {
      "desiredCapabilities": {
        "browserName": "iPhone",
        "deviceOrientation": "portrait",
        "deviceName": "iPhone 6",
        "platform": "OSX 10.10",
        "version": "8.4"
      }
    }
  }
//  */
}
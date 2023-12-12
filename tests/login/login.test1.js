const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example(){
 
       var username = "Yogesh";
       var password = ""; // enter password for successful login
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        await driver.get("http://127.0.0.1:5501/login.html");

        // page title
        var title = await driver.getTitle();
        console.log('On page:',title);

        // display credentials
        console.log('Username:',username);
        console.log('Password:',password);
            
        await driver.findElement(By.id("username")).sendKeys(username);
        await driver.findElement(By.id("password")).sendKeys(password,Key.RETURN);
		
        // Capturing alert message.    
        var alertMessage = await driver.switchTo().alert().getText();
        if (alertMessage === 'Welcome to Amazon, Yogesh') {
                console.log('Login successful');
        }

        // Displaying alert message		
        console.log(alertMessage);
        // accept the alert message
        driver.switchTo().alert().accept();
 
        // Close the browser after execution
        // await driver.quit();
 
}
 
example()
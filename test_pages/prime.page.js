export default class PrimePage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;        
    }

    async openPage(path) {
        await this.page.goto(path);
    }

    async findeElements(locator) {
        return this.page.locator(locator);
    }
}

/*


class Page{
 findElement(locator){
return $(locator)
}

 clickElement(locator){
this.findElement(locator).click()
}
} 



const page = require('./page.js')
const registerButton = 'someLocator'

class registerPage{
 clickregisterButton(){
page.clickElement(registerButton )
}
} 










*/
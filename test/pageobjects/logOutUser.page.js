class LogOutUser{
get logoutButton() { return $('a[href="/logout"]'); }

    async ClickLogout() {
    await this.logoutButton.waitForDisplayed({ timeout: 10000 });
    await this.logoutButton.click();
  }
}
export default new LogOutUser();
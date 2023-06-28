pm.test("Cookie _octo has value GH1", () => {
  pm.expect(pm.cookies.get('_octo')).to.eql('GH1.1.2021586385.1682430854');
});

pm.test("Cookie logged_in has value no", () => {
  pm.expect(pm.cookies.get('logged_in')).to.eql('no');
});

pm.test("Cookie logged_in has value yes", () => {
  pm.expect(pm.cookies.get('logged_in')).to.eql('yes');
});

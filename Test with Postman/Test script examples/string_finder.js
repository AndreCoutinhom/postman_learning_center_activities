pm.test("Body is string", function () {
  pm.response.to.have.body("whole-body-text");
});

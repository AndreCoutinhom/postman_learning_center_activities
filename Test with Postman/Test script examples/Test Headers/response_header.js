pm.test("Content-Type header is present", () => {
  pm.response.to.have.header("Content-Type");
});

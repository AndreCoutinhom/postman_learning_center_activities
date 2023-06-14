pm.test("Status code name has string", () => {
  pm.response.to.have.status("Created");
});

app.get("/user/logout", async (req, res) => {
  try {
    res.clearCookie("logToken");
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
});

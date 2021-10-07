// app.post("/program/:id", async (req, res) => {
//   // try {
//   //   const result = await output(
//   //     req.body.description,
//   //     req.body["select-language"],
//   //     req.body.input
//   //   );
//   //   var isError = false;
//   //   if (result.body.memory == null && result.body.cpuTime == null) {
//   //     isError = true;
//   //   }
//   //   const program = await Program.findById(req.params.id);
//   //   res.render("index", {
//   //     description: program.description,
//   //     theme: req.body["select-theme"],
//   //     lang: program["select-language"],
//   //     stdin: program.input,
//   //     postUrl: "/program/" + "req.params.id",
//   //     // stdout: result.body.output,
//   //     // msg: "Compiled",
//   //     // time: result.body.cpuTime,
//   //     // memory: result.body.memory,
//   //     // isError,
//   //     // parentURL: parentURL,
//   //   });
//   // } catch (err) {
//   //   res.send("Server Error");
//   // }
//   res.send("got");
// });

// app.post("/save/program", async (req, res) => {
//   try {
//     const logToken = req.cookies["logToken"];
//     const decoded = jwt.verify(logToken, process.env.JWTSECRET);
//     const user = await User.findById(decoded.user.id);
//     if (!user) {
//       return res.render(signUp);
//     }
//     const newProgram = new Program({
//       description: req.body.description,
//       name: req.body.name,
//       input: req.body.input,
//       user: decoded.user.id,
//       lang: req.body["select-language"],
//     });
//     await newProgram.save();
//     res.send(newProgram);
//   } catch (err) {
//     res.redirect("/user/login");
//   }
// });

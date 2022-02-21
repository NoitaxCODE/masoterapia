const express = require("express");
const router = express.Router();
const passport = require("passport");
const userData = require("../db/userInfo");
const User = require("../models/user");
const Code = require("../models/code");
const CalendarTurn = require("../models/calendarModel");
const { renderUser } = require("../controllers/form-controllers");
const { findOne } = require("../models/user");
const { updateAdmin } = require("../db/updateAdmin");

router.get("/", (req, res, next) => {
  res.render("_login");
});

router.post(
  "/",
  (req, res, next) => {
    req.session.user_data = req.body;
    next();
  },
  passport.authenticate("local-signin", {
    failureRedirect: "/",
  }),
  async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user.admin === true) {
      res.redirect("/admin");
    } else {
      res.redirect("/user-data");
    }
  }
);

router.get("/signup", (req, res, next) => {
  res.render("_register");
});

router.post(
  "/signup",
  (req, res, next) => {
    req.session.user_data = req.body;
    next();
  },
  passport.authenticate("local-signup", {
    successRedirect: "/user-data",
    failureRedirect: "/signup",
    passReqToCallback: true,
  })
);

//Rutas protegidas

router.get("/user-data", isAuthenticated, renderUser);

router.get("/admin", isAdmin, isAuthenticated, (req, res, next) => {
  res.render("_admin");
});

router.get("/logout", isAuthenticated, (req, res, next) => {
  req.logOut();
  res.redirect("/");
});

router.post("/personal-form-data", isAuthenticated, async (req, res, next) => {
  const userSesion = req.session.user_data;
  const completed = await userData.userData(req.body, userSesion, false);

  if (completed === true) res.redirect("/user-data");

  next();
});

router.post(
  "/personal-form-data-edit",
  isAuthenticated,
  async (req, res, next) => {
    const userSesion = req.session.user_data;

    const completed = await userData.userData(req.body, userSesion, true);

    if (completed === true) res.redirect("/user-data");

    next();
  }
);

router.post("/contact-form-data", isAuthenticated, async (req, res, next) => {
  const userSesion = req.session.user_data;

  const completed = await userData.userContact(req.body, userSesion, false);

  if (completed === true) res.redirect("/user-data");

  next();
});

router.post(
  "/contact-form-data-edit",
  isAuthenticated,
  async (req, res, next) => {
    const userSesion = req.session.user_data;
    const completed = await userData.userContact(req.body, userSesion, true);

    if (completed === true) res.redirect("/user-data");

    next();
  }
);

router.post("/social-form-data", isAuthenticated, async (req, res, next) => {
  const userSesion = req.session.user_data;
  const completed = await userData.userSocial(req.body, userSesion, false);

  if (completed === true) res.redirect("/user-data");

  next();
});

router.post(
  "/social-form-data-edit",
  isAuthenticated,
  async (req, res, next) => {
    const userSesion = req.session.user_data;

    const completed = await userData.userSocial(req.body, userSesion, true);

    if (completed === true) res.redirect("/user-data");

    next();
  }
);

router.post(
  "/enfermedades-form-data",
  isAuthenticated,
  async (req, res, next) => {
    const userSesion = req.session.user_data;
    const completed = await userData.userEnfermedades(
      req.body,
      userSesion,
      false
    );

    if (completed === true) res.redirect("/user-data");

    next();
  }
);

router.post(
  "/enfermedades-form-data-edit",
  isAuthenticated,
  async (req, res, next) => {
    const userSesion = req.session.user_data;
    const completed = await userData.userEnfermedades(
      req.body,
      userSesion,
      true
    );

    if (completed === true) res.redirect("/user-data");

    next();
  }
);

router.post("/medicos-form-data", isAuthenticated, async (req, res, next) => {
  const userSesion = req.session.user_data;
  const completed = await userData.userMedicos(req.body, userSesion, false);

  if (completed === true) res.redirect("/user-data");

  next();
});

router.post(
  "/medicos-form-data-edit",
  isAuthenticated,
  async (req, res, next) => {
    const userSesion = req.session.user_data;
    const completed = await userData.userMedicos(req.body, userSesion, true);

    if (completed === true) res.redirect("/user-data");
    next();
  }
);

router.get(
  "/cargarPacientes",
  isAdmin,
  isAuthenticated,
  async (req, res, next) => {
    const pacientes = await User.find();
    res.json(pacientes);
    next();
  }
);

router.put("/saveAdmin", isAdmin, isAuthenticated, async (req, res, next) => {
  const completed = await updateAdmin(req.body);

  res.json({ completed });

  next();
});

router.delete(
  "/deleteUser/:id",
  isAdmin,
  isAuthenticated,
  async (req, res, next) => {
    try {
      const userDeleted = await User.findByIdAndDelete(req.params.id);

      if (userDeleted) res.json({ deleted: "ok" });
    } catch (error) {
      console.log(error);
    } finally {
      next();
    }
  }
);

router.put("/updateCode", isAdmin, isAuthenticated, async (req, res, next) => {
  try {
    let codigo = req.body.codigo,
      codeUpdated = await Code.updateOne({ codigo });

    if (codeUpdated) res.json({ updated: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ updated: "error" });
  } finally {
    next();
  }
});

router.get("/getCode", isAdmin, isAuthenticated, async (req, res, next) => {
  try {
    const code = await Code.find();

    res.json(code[0]);
  } catch (error) {
    console.log(error);
  }
});

router.get("/calendar", async (req, res, next) => {
  res.render("_calendar")
});
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

router.post("/day", async (req, res, next) => {
  try{

    const {year, month, day, hourFrom, hourTo} = req.body

    const calendarTurn = new CalendarTurn({
      year,
      month,
      day,
      hourFrom,
      hourTo
    })

    const turnSaved = await calendarTurn.save()

    console.log(turnSaved)

    if (turnSaved) res.json({ completed: "ok" });

    
  }catch(error){
    console.log(error)
  }finally{
    next();
  }
})

async function isAdmin(req, res, next) {
  const user = await User.findOne({ email: req.session.user_data.email });

  if (user.admin) return next();

  res.redirect("/");
}

module.exports = router;

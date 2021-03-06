module.exports = {
  getCars: (req, res, next) => {
    console.log("Getting all cars, or car ID# ", req.query.id);
    const db = req.app.get("db");
    db
      .getCars(req.query.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  getCarNotes: (req, res, next) => {
    console.log("returning car id# ", req.query.id);
    const db = req.app.get("db");
    db
      .getCarNotes(req.query.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },
  
  postUserCar: (req, res, next) => {
    console.log("adding new car for user ", req.body);
    const db = req.app.get("db");
    db
      .postUserCar(req.body.user_id, req.body.car_id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  postCarNotes: (req, res, next) => {
    console.log("adding new notes for ", req.body);
    const db = req.app.get("db");
    db
      .postCarNote(req.body.car_id, req.body.notes)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  postCars: (req, res, next) => {
    console.log("adding new car id# ", req.body.model);
    const db = req.app.get("db");
    db
      .postCars(
        req.body.usercar_id,
        req.body.parkingspacetype_id,
        req.body.make,
        req.body.model,
        req.body.licenseplate,
        req.body.valettag,
        req.body.color
      )
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  updateCarsSpace: (req, res, next) => {
    console.log(
      "returning update cars id# ",
      req.query.id,
      "and new car",
      req.body
    );
    const db = req.app.get("db");
    db
      .updateCarsSpace([
        req.query.id,
        req.body.status_id,
        req.body.employee_id,
        req.body.parkingspace_id
      ])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  deleteCars: (req, res, next) => {}
};

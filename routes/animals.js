const express = require("express");
const router = express.Router();
const {
  getHome,
  getAnimalList,
  getAnimalType,
  getSinglePet,
} = require("../controllers/animals");

router.route("/").get(getHome);

router.route("/animals").get(getAnimalList);

router.route("/animals/:pet_type").get(getAnimalType);

router.route("/animals/:pet_type/:pet_id").get(getSinglePet);

module.exports = router;

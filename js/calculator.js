(function () {
  var form = document.getElementById("macro-form");
  if (!form) return;

  function num(id) {
    return parseFloat(document.getElementById(id).value);
  }

  function mifflinStJeor(sex, weightKg, heightCm, age) {
    // weight kg, height cm
    var base = 10 * weightKg + 6.25 * heightCm - 5 * age;
    return sex === "male" ? base + 5 : base - 161;
  }

  var activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very: 1.9
  };

  // goal calorie adjust + macro splits (protein g/kg, fat %, rest carbs)
  var goals = {
    lose: { cal: -500, proteinPerKg: 2.0, fatPct: 0.25 },
    maintain: { cal: 0, proteinPerKg: 1.6, fatPct: 0.28 },
    gain: { cal: 300, proteinPerKg: 1.8, fatPct: 0.25 }
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var unit = document.getElementById("unit").value;
    var sex = document.getElementById("sex").value;
    var age = num("age");
    var weight = num("weight");
    var height = num("height");
    var activity = document.getElementById("activity").value;
    var goal = document.getElementById("goal").value;

    if (!(age > 0 && weight > 0 && height > 0)) {
      alert("Please enter positive numbers for age, weight, and height.");
      return;
    }

    var weightKg = unit === "metric" ? weight : weight * 0.45359237;
    var heightCm = unit === "metric" ? height : height * 2.54;

    var bmr = mifflinStJeor(sex, weightKg, heightCm, age);
    var tdee = bmr * activityFactors[activity];
    var g = goals[goal];
    var calories = Math.max(1200, Math.round(tdee + g.cal));

    var proteinG = Math.round(g.proteinPerKg * weightKg);
    var fatG = Math.round((calories * g.fatPct) / 9);
    var carbsG = Math.max(0, Math.round((calories - proteinG * 4 - fatG * 9) / 4));

    document.getElementById("out-cal").textContent = calories + " kcal";
    document.getElementById("out-protein").textContent = proteinG + " g";
    document.getElementById("out-carbs").textContent = carbsG + " g";
    document.getElementById("out-fat").textContent = fatG + " g";
    document.getElementById("results").hidden = false;
  });
})();

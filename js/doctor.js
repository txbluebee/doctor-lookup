var apiKey = require('./../.env').apiKey;

function Doctor(){

}

Doctor.prototype.getDoctor = function(symptom, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey)
  .then(function(response){
    console.log(response);
    displayDoctor(response);
  })
  .fail(function(error) {
    $('.result').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;

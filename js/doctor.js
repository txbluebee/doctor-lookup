var apiKey = require('./../.env').apiKey;

function Doctor(){

}

Doctor.prototype.getDoctor = function(sympton, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + sympton + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey)
  .then(function(response){
    displayDoctor(reponse);
  })
  .fail(function(error) {
    $('.result').text(error.responseJSON.message);
  });
};

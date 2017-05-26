var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(response){
  response.data.forEach(function(doctor){
    console.log(doctor);
    var image_url = doctor.profile.image_url;
    var name = doctor.profile.first_name + ' ' + doctor.profile.last_name + ' ' + doctor.profile.title;
    console.log(name);
    var specialty = doctor.specialties[0].actor;
    console.log(specialty);
    var description = doctor.specialties[0].description;
    console.log(description);

    var display =
      '<div class="col-md-4 my-5">' +
      '<div class="card">' +
        '<img class="card-img-top" src="' + image_url + '" alt="Card image cap" style="height: 250px;">' +
        '<div class="card-block">' +
          '<h4 class="card-title mb-3">' + name + '</h4>' +
          "<p><b>Specialty: </b> " + specialty + "</p>" +
          "<p><b>Description: :</b>" + description + "</p>" +
        '</div>' +
      '</div>' +
    '</div>';
    $('.result').append(display);
  });
};

$(document).ready(function(){

  var doctorObject = new Doctor();
  $('#search-doctor').submit(function(event){
    event.preventDefault();
    $('.result').text('');
    var symptom = $('#symptom').val();
    $('#symptom').val("");
    doctorObject.getDoctor(symptom, displayDoctor);
  });
});

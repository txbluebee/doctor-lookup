var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(reponse){
  
};

$(document).ready(function(){

  var doctorObject = new Doctor();
  $('.find-doctor').click(function(){
    $('.result').text('');
    var symptom = $('#symptom').val();
    console.log(symptom);
    $('#symptom').val("");

    doctorObject.getDoctor(symptom, displayDoctor);
  });
});

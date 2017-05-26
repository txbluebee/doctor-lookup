var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(reponse){
  
};

$(document).ready(function(){

  var doctorObject = new Doctor();
  $('.find-doctor').click(function(){
    $('.result').text('');
    var sympton = $('#sympton').val();
    $('#sympton').val("");

    doctorObject.getDoctor(sympton, displayDoctor);
  });

});

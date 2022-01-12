$('#resume-file-modal-error').hide();
$('#resume-file-modal').on('change', function(){
  var resumeFile        = $('#resume-file-modal');
  var resumeFileLengths = resumeFile[0].files.length;
  var resumeFileItems   = resumeFile[0].files;
  var resumeFileName = resumeFileItems[0].name;
  var resumeFileSize = resumeFileItems[0].size;
  var resumeFileType = resumeFileItems[0].type;
  // File Size
  if (resumeFileSize > 15728640) {
    $('#resume-file-modal').val("");
    $('#resume-file-modal-error')
      .show()
      .css({"color":"red","text-align":"center"})
      .html('ARQUIVO EXCEDE O TAMANHO PERMITIDO DE 15MB');
  }
  // File Type
  if (resumeFileType != 'application/pdf') {
    $('#resume-file-modal').val("");
    $('#resume-file-modal-error')
      .show()
      .css({"color":"red","text-align":"center"})
      .html('SELECIONE APENAS ARQUIVO DO TIPO PDF.');
  }
  // File Size and Type error
  if (resumeFileSize > 15728640 && resumeFileType != 'application/pdf') {
    $('#resume-file-modal').val("");
    $('#resume-file-modal-error')
      .show()
      .css({"color":"red","text-align":"center"})
      .html('ARQUIVO EXCEDE O TAMANHO PERMITIDO DE 15MB.<br>SELECIONE APENAS ARQUIVO DO TIPO PDF.');
  }
  $('#resume-file-modal-error').fadeOut(15000, function(){
    $('#resume-file-modal-error').text('');
  });
});
/* Partner */
$('#partner-file-modal-error').hide();
$('#partner-file-modal').on('change', function(){
  var resumeFile        = $('#partner-file-modal');
  var resumeFileLengths = resumeFile[0].files.length;
  var resumeFileItems   = resumeFile[0].files;
  var resumeFileName = resumeFileItems[0].name;
  var resumeFileSize = resumeFileItems[0].size;
  var resumeFileType = resumeFileItems[0].type;
  // File Size
  if (resumeFileSize > 15728640) {
    $('#partner-file-modal').val("");
    $('#partner-file-modal-error')
      .show()
      .css({"color":"red","text-align":"center"})
      .html('ARQUIVO EXCEDE O TAMANHO PERMITIDO DE 15MB');
  }
  // File Type
  if (resumeFileType != 'application/pdf') {
    $('#partner-file-modal').val("");
    $('#partner-file-modal-error')
      .show()
      .css({"color":"red","text-align":"center"})
      .html('SELECIONE APENAS ARQUIVO DO TIPO PDF.');
  }
  // File Size and Type error
  if (resumeFileSize > 15728640 && resumeFileType != 'application/pdf') {
    $('#partner-file-modal').val("");
    $('#partner-file-modal-error')
      .show()
      .css({"color":"red","text-align":"center"})
      .html('ARQUIVO EXCEDE O TAMANHO PERMITIDO DE 15MB.<br>SELECIONE APENAS ARQUIVO DO TIPO PDF.');
  }
  $('#partner-file-modal-error').fadeOut(15000, function(){
    $('#partner-file-modal-error').text('');
  });
});
$('#provider-file-modal-error').hide();
/* Provider */
$('#provider-file-modal').on('change', function(){
  var resumeFile        = $('#provider-file-modal');
  var resumeFileLengths = resumeFile[0].files.length;
  var resumeFileItems   = resumeFile[0].files;
  var resumeFileName = resumeFileItems[0].name;
  var resumeFileSize = resumeFileItems[0].size;
  var resumeFileType = resumeFileItems[0].type;
  // File Size
  if (resumeFileSize > 15728640) {
    $('#provider-file-modal').val("");
    $('#provider-file-modal-error')
      .show()
      .css({"color":"red","text-align":"center"})
      .html('ARQUIVO EXCEDE O TAMANHO PERMITIDO DE 15MB');
  }
  // File Type
  if (resumeFileType != 'application/pdf') {
    $('#provider-file-modal').val("");
    $('#provider-file-modal-error')
      .show()
      .css({"color":"red","text-align":"center"})
      .html('SELECIONE APENAS ARQUIVO DO TIPO PDF.');
  }
  // File Size and Type error
  if (resumeFileSize > 15728640 && resumeFileType != 'application/pdf') {
    $('#provider-file-modal').val("");
    $('#provider-file-modal-error')
      .show()
      .css({"color":"red","text-align":"center"})
      .html('ARQUIVO EXCEDE O TAMANHO PERMITIDO DE 15MB.<br>SELECIONE APENAS ARQUIVO DO TIPO PDF.');
  }
  $('#provider-file-modal-error').fadeOut(15000, function(){
    $('#provider-file-modal-error').text('');
  });
});
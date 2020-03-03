$('#fileconvert').click(() => {
  event.preventDefault();
  $.ajax({
    uri: 'http://127.0.0.1:3000/',
    method: 'POST',
    data: $('#form1').serialize(),
    success: (data) => {
      $('#result').html(`
      <br><hr>
      <h4>Generated CSV:</h4>
      <p>${data}</p>
      `);
    },
    error: (error) => {
      console.log(error);
    }
  })
});


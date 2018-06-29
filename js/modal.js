// Quando .modal-wide abre, ajuste a altura do conteúdo-corpo com base na altura do navegador; 200 é altura do appx do padding modal, título modal e barra de botões

$(".modal-wide").on("show.bs.modal", function() {
  var height = $(window).height() - 200;
  $(this).find(".modal-body").css("max-height", height);
});

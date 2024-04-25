$(document).ready(function() {
    $('#phone').mask('(00) 0000-0000'); // Aplica a máscara para um número de telefone brasileiro

    $('#contactForm').validate({
        rules: {
            phone: {
                required: true
            }
        },
        messages: {
            phone: {
                required: 'Por favor, informe um número de telefone.'
            }
        },
        submitHandler: function(form) {
            // Lógica para enviar o formulário se for válido
            form.submit();
        }
    });
});

/*
    Trabalho bimestral - LPW
    Autor: Vinicius S.
*/


$('input').blur(function(){
    verificar( $(this), null )
});

$('a#cadastrar-btn').click(function(){
    verificar(null, $('input'))
});


// verificar campo em branco
function verificar(e, elements) {

    

	if (e == null) {

        for (let index = 0; index < elements.length; index++) {

            if (elements.eq(index).val().trim() == "") {

                elements.eq(index)
                .removeClass('valid')
                .addClass('invalid');
            } else {
                if (elements.eq(index).attr('id') == "pass" || elements.eq(index).attr('id') == "pass-confirm") {
                    // Caso seja um campo de senha é chamada a função para virifica-la.
                    passValidation();
                }else {
    
                    // Define a classe como válida
                    elements.eq(index)
                    .removeClass('invalid')
                    .addClass('valid');
    
                    // Chama a função para exibir o erro
                    Erro(false);
                }
            }
        }

        // Caso tenho um erro é exibido uma mensagem de acordo.
        if ($('.invalid').length) {
            Erro(true, ('Os campos em vermelho devem ser preenchidos'));

        } else {
            Erro(false);

            // chama um novo redirecionamento para uma pagina de "cadastro finalizado"
            redirecionar()
        }

    } else {

        var valor = e.val().trim()
		
        if ( valor == '' || e.attr('class') == 'validate invalid') {

            // Chama a função para exibir o erro
            Erro(true, ("O campo " + e.attr("name") + " deve ser preenchido!"));

            // Define a classe como inválida
            e.addClass('invalid');

        } else {

            if (e.attr('id') == "pass" || e.attr('id') == "pass-confirm") {
                // Caso seja um campo de senha é chamada a função para virifica-la.
                passValidation();
            }else {

                // Define a classe como válida
                e
                .removeClass('invalid')
                .addClass('valid');

                // Chama a função para exibir o erro
                Erro(false);
            }
        }
    }

}

// Validação da senha
function passValidation() {

    // Estrutura para validar o comprimento.
    if($('#pass').val().length >= 8){

        // Estrutura para verificar a semelhança entre os dois campos
        if ($('#pass').val() == $('#pass-confirm').val()) {

            // Define a classe como inválida caso atinja os requisitos
            $('#pass-confirm').removeClass('invalid')
            .addClass('valid');
            
            // Remover a mensagem de erro.
            Erro(false)
        } else{
            $('#pass-confirm').removeClass('valid')
            .addClass('invalid');

            // Exibe uma mensagem de erro caso as senhas digitas não sejam iguais.
            Erro(true, ("As senhas não coincidem!"));
        }
    }else{
        // Exibe uma mensagem de erro caso a senha não tenha caracteres suficientes.
        Erro(true, ("As senhas deve conter no minimo 8 caracteres!"))

        // Define a classe como inválida
        $('#pass').removeClass('valid')
        .addClass('invalid');

        $('#pass-confirm').removeClass('valid')
        .addClass('invalid');

    }
}

// Exibição do erro
function Erro(key, msg){
    /* 
       Key = estado do erro
       Msg = Mensagem de que será exibida
    */

    // Caso seja informado que ha um erro 
    if(key){
        // Exibe tal erro.
        $("#alerta")
        .text(msg)
        .show();
    }else{
        // Caso contrário oculta o erro.
        $("#alerta")
        .text("")
        .hide();
    }
}

// Redirecionar para a pagina de destino
function redirecionar(destino) {
    console.log("Redirecionando... (Ou não)")

    $(location).attr('href', destino);
}
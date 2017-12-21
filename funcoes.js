/*

*/
$(document).ready(function () {
	
	var v1, v2, op;

	//pegando valor do botão e botando no input resultado
	$("input[name='btn']").click(function(){
		$("#result").val($ ("#result").val() + $(this).val());
	});

	//limpando o input
	$("input[name='ce']").click(function(){
		$("#result").val('');
	});

	//pegando o v1 e passa o tipo da operacao
	$("input[name='soma']").click(function(){
		if ($("#result").val() != '') {
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op  = "soma";

		}else{
			alert("Insira o valor para efetuar a operação")
		}
	});

	//pegando o v1 e passa o tipo da operacao
	$("input[name='sub']").click(function(){
		if ($("#result").val() != '') {
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op  = "sub";

		}else{
			alert("Insira o valor para efetuar a operação")
		}
	});

	//pegando o v1 e passa o tipo da operacao
	$("input[name='div']").click(function(){
		if ($("#result").val() != '') {
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op  = "div";

		}else{
			alert("Insira o valor para efetuar a operação")
		}
	});

	//pegando o v1 e passa o tipo da operacao
	$("input[name='mult']").click(function(){
		if ($("#result").val() != '') {
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op  = "mult";

		}else{
			alert("Insira o valor para efetuar a operação")
		}
	});

	//pega o o v2 e faz a operação e mostra no input
	$("input[name='igual']").click(function(){
		if ($("#result").val() != '') {
			v2 = parseFloat($("#result").val());
			
			if (op == 'soma') {
				$("#result").val(v1+v2);
			}else if (op == 'sub') {
				$("#result").val(v1-v2);
			}else if ( op == 'mult') {
				$("#result").val(v1*v2);
			}else{

				$("#result").val(v1/v2);
			}

		}else{
			alert("Insira o valor para efetuar a operação")
		}
	});

	//limpar numero por numero
	$("input[name='c']").click(function(){
		var qtd = $("#result").val().length;
		var valor = $("#result").val();

		valor = valor.replace(valor.charAt(qtd -1), '');
		$("#result").val(valor);
	});
});
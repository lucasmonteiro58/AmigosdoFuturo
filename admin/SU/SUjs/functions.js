document.getElementById("uploadBtn").onchange = function () {
  	var path = this.value;
	var filename = path.replace(/^.*\\/, "");
	document.getElementById('uploadFile').value = filename;
};

function listenerArquivo(id){
	var path = document.getElementById(id).value;
	var filename = path.replace(/^.*\\/, "");
	document.getElementById(id+'-text').value = filename;
}

var titulo_n = 1;

$('.botao-arquivo-mais').click(function() {
		var arq_anterior = titulo_n-1;
		if ($('#arquivo'+arq_anterior+'-upload').get(0).files.length == 0) {
			$('.file-alarm').show();
		} else {
		var $arq_mais = '<div class=\"arq\"><a1>Titulo: </a1><input class = \"form arquivo_titulo\" type=\"text\" name=\"titulo'+titulo_n+'\"><div class=\"fileUpload fileUpload-arquivo btn btn-primary\"><span>Escolha um arquivo</span><input name=\"arquivo'+titulo_n+'\" id=\"arquivo'+titulo_n+'-upload\" onchange=\"listenerArquivo(this.id)\" type=\"file\" class=\"upload\" /></div><input id=\"arquivo'+titulo_n+'-upload-text\" placeholder=\"Escolha um arquivo\" disabled=\"disabled\" /></div>';
		$('.arquivos').append($arq_mais);
		titulo_n++;
		}
	});

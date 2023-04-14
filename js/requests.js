// Carrega o arquivo JSON usando Ajax da biblioteca jQuery
$.ajax({
    url: 'mock/cardapio.json',
    dataType: 'json',
    success: function(data) {
      // Exibe a lista de pratos na página
      const listaPratos = $('#lista-pratos');
      $.each(data.pratos, function(i, prato) {
        const itemPrato = $('<li>').html(`<h3>${prato.nome}</h3><p>${prato.descricao}</p><p>Preço: R$ ${prato.preco.toFixed(2)}</p>`);
        listaPratos.append(itemPrato);
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error(errorThrown); // Trata erros de carregamento
    }
  });
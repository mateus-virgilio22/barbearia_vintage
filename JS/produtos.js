$(document).ready(function(){
    produtos.eventos.init();
})

var produtos = {};
var currentPage = 1;
var itemsPerPage = 8;

produtos.eventos = {

    init: () => {
        produtos.metodos.obterItensProdutos();
    }

}

produtos.metodos = {
    obterItensProdutos: (categoria = 'camisas', vermais = false) => {

        var filtro = PRODUTOS[categoria];
        console.log(filtro);

        if(!vermais) {
            $("#itensProdutos").html('');
            $("#btnVerMais").removeClass('hidden');
            currentPage = 1;
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;


        $.each(filtro.slice(startIndex, endIndex), (i, e) => {

            let temp = produtos.templates.item.replace(/\${img}/g, e.img)
            
            $("#itensProdutos").append(temp);
        });

        $(".content-produtos a").removeClass('active');

        
        $("#produtos-" + categoria).addClass('active');
    
        if (endIndex >= filtro.length) {
          $("#btnVerMais").addClass('hidden');
        } else {
          $("#btnVerMais").removeClass('hidden');
        }
      },

    // clique no botão de ver mais
    verMais: () => {
        var ativo = $(".content-produtos a.active").attr('id').split('produtos-')[1];
        currentPage++;
        produtos.metodos.obterItensProdutos(ativo, true);
      },
};

produtos.templates = {

    item: 

    `
        <div class="card" >
            <img class="img_produtos" src="\${img}" alt="">
        </div>
    `
}
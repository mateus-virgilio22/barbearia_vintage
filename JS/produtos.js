$(document).ready(function(){
    produtos.eventos.init();
})

var produtos = {};

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
        }


        $.each(filtro, (i, e) => {

            let temp = produtos.templates.item.replace(/\${img}/g, e.img)
            /* .replace(/\${dimensao}/g, e.dimensao)
            .replace(/\${comodos}/g, e.comodos)
            .replace(/\${bairro}/g, e.bairro) */

            // botão ver mais foi clicado (12 itens)
            if(vermais && i >= 8 && i < 15) {
                $("#itensProdutos").append(temp)
            }

            // paginação inicial (8 itens)
            if(!vermais && i < 8) {
                $("#itensProdutos").append(temp)
            }
            
        })

        // remove o ativo
        $(".content-produtos a").removeClass('active');

        // seta o menu para ativo
        $("#produtos-" + categoria).addClass('active');

    },

    // clique no botão de ver mais
    verMais: () => {

        var ativo = $(".content-produtos a.active").attr('id').split('produtos-')[1];
        produtos.metodos.obterItensProdutos(ativo, true);

        $("#btnVerMais").addClass('hidden');

    }
}

produtos.templates = {

    item: 

    `
        <div class="card" >
            <img class="img_produtos" src="\${img}" alt="">
        </div>
    `
}
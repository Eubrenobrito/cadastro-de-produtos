function enviarDados(){
    // debugger;
    var produtoInput = document.getElementById("produto");
    var quantidade = document.getElementById("quantidade");
    var precoCompra = document.getElementById("precoCompra");
    var precoVenda = document.getElementById("precoVenda");
    var fornecedor = document.getElementById("fornecedor");

    //verificar se o produto está vazio
   const mensagensDeErro = [];

    if (!produtoInput.value) {
        // alert("nome do produto nao informado");
        mensagensDeErro.push("nome do produto nao informado");
    //deixar o input com focus
    //     produtoInput.focus();
    // //retornar a função e nao olhar as outras linhas
    // return;
    }

    if(quantidade.length < 0 || !quantidade.value){
        alert('Adicione a quantidade do produto.');
        quantidade.focus();
        return;
    }
    
    // if(!precoCompra.value){
    //     alert('Adicione o preço da compra.');
    //     precoCompra.focus();
    //     return;
    // }
    // if(!precoVenda.value){
    //     alert('Adicione o preço que o produto será vendido.');
    //     precoVenda.focus();
    //     return;
    // }
    // if(!fornecedor.value){
    //     alert('Selecione o fornecedor do produto.');
    //     fornecedor.focus();
    //     return;
    // }
    for( i=0; i<mensagensDeErro.length;i++)[
        console.log(mensagensDeErro[i])
    ]
    // const errorMessage = '<p>'++'</p>'    


}
   





// if(codProduto.length < 3 || codProduto.length >25){
    //     alert('Código do produto invalido');
    // }
     
    // if(quantidade < 0){
    //     alert('Adicione a quantidade do produto');
    
    // }
            
//             if(precoVenda < 0)
//                 alert('Adicione o preço de venda do produto');
//                 else{
//                     if(PrecoCompra < 0)
//                         alert('Adicione o preço que foi comprado o produto');
//                         else
//                             alert('cadastraralho realizado com sucesso\nCodProduto: '+CodProduto +'\nProduto: ')
//                     }
//             }

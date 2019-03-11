<?php
    include_once 'php/model/postDAO.class.php';
    include_once 'php/model/arquivoDAO.class.php';
  
    $verificar = false;
    $postagem = false;
    $arquivos = false;

    if (isset($_POST['post'])) {
      
        $id_usuario = $_SESSION['id_usuario'];
        $id = $_POST['post'];

        $post = new PostDAO();
        $arq = new ArquivoDAO();

        $retorno = false;
        $retorno = $post->verifica_post_by_usuario($id_usuario, $id);

        if ($retorno) {
            $verificar = true;

            $postagem = $post->get_post_by_id($id);
            $titulo = $postagem->get_titulo();
            $descricao = $postagem->get_descricao();
            $capa = $postagem->get_capa();
            $conteudo = $postagem->get_conteudo();
            $tipo = $postagem->get_tipo();

            $arquivos = $arq->get_documentos_by_post($id);
        }else{
            header('location: index.php');
        }

        $post->postDAO_close();
        $arq->arquivoDAO_close();
    }

    if(!$verificar){
?>

<div class = "info">
    <div id="new-post">
        <h1>Nova Publicação</h1><br><br>
        
        <form method="post" action="php/control/savePost.php" enctype="multipart/form-data">
                <a1>Título:</a1><br>
                <div class="post">
                    <input class = "tag" type="text" name="titulo" required>
                </div><br>

                <a1>Descrição:</a1><br>
                <div class="post">
                    <input class = "tag" type="text" name="descricao" maxlength="140" required>
                </div><br>

                <a1>Capa:</a1><br>
                <div class="fileUpload btn btn-primary">
                    <span>Escolha uma Capa</span>
                    <input id="uploadBtn" class="upload" type="file" name="capa" accept="image/*"/>
                </div>
                <input id="uploadFile" placeholder="Escolha uma imagem" disabled="disabled" />
                <br>
            <div class="text">
                <textarea class="stop" rows="15" cols="100" name="conteudo"></textarea>
            </div><br>

            <a1>Arquivos anexados:</a1><br>
            <div class="post arquivos">
                <div class="arq">
                    <a1>Titulo:</a1>
                    <input class = "form arquivo_titulo" type="text" name="titulo0">
                    <div class="fileUpload fileUpload-arquivo0 btn btn-primary">
                        <span>Escolha um arquivo</span>
                        <input name="arquivo0" id="arquivo0-upload" onchange="listenerArquivo(this.id)" type="file" class="upload" />
                    </div>
                    <input id="arquivo0-upload-text" placeholder="Escolha um arquivo" disabled="disabled" />
                    <button class="botao botao-arquivo-mais" type="button">+</button>
                </div>
            </div><br>

            <a1>Tags Relacionadas:</a1><br>
            <div class="post">
                <input class = "tag" type="text" name="nome">
            </div>
            <button class="botao" type="submit" name="Salvar" value="1">Publicar</button>
            <button class="botaob" type="submit" name="Salvar" value="2">Salvar Rascunho</button> 
            <button class="botaob" type="button" onclick="location.href='index.php'">Cancelar</button> 
        </form>
    </div>
</div>

<?php
    }else{
?>


<div class = "info">
    <div id="new-post">
        <h1>Editar Publicação</h1><br><br>
        
        <form method="post" action="php/control/updatePost.php" enctype="multipart/form-data">
            
            <a1>Título:</a1><br><br>
            <div class="post">
                <input class = "form" type="text" name="titulo" value=<?= '"'.$titulo.'"' ?> required>
            </div><br>

            <a1>Descrição:</a1><br>
            <div class="post">
                <input class="tag" type="text" name="descricao" maxlength="140" value=<?= '"'.$descricao.'"' ?> required>
            </div><br>

            <a1>Capa:</a1><br>
            <div class="fileUpload btn btn-primary">
                <span>Atualize a Capa</span>
                <input name="capa" id="uploadBtn" class="upload" type="file" name="capa" accept="image/*"/>
            </div>
            <input id="uploadFile" placeholder="Escolha uma imagem" disabled="disabled" />
            <span id="ver_capa" class="botao "><span class="glyphicon glyphicon-eye-open"></span>&nbsp&nbspVer</span>
            
            <!-- Visualizar a Capa -->
            <div id="myModal" class="modal">
              <span class="close">&times;</span>
              <img class="modal-content" src="http://localhost/novoSitePET/<?= $capa?>">
            </div>

            <div class="text">
                <textarea class="stop" rows="15" cols="100" name="conteudo"><?= $conteudo ?></textarea>
            </div><br>

            <a1>Arquivos anexados:</a1><br>
            <div class="post arquivos">
                <!--Foreach dos arquivos-->
                <div class="arq">
                    <a1>Titulo:</a1>
                    <input class = "form arquivo_titulo" type="text" name="titulo0">
                    <div class="fileUpload fileUpload-arquivo0 btn btn-primary">
                        <span>Escolha um arquivo</span>
                        <input name="arquivo0" id="arquivo0-upload" onchange="listenerArquivo(this.id)" type="file" class="upload" />
                    </div>
                    <input id="arquivo0-upload-text" placeholder="Escolha um arquivo" disabled="disabled" />
                    <button class="botao botao-arquivo-mais" type="button">+</button>
                </div>
            </div><br>

            <a1>Tags Relacionadas:</a1><br>
            <div class="post">
                <input class = "tag" type="text" name="nome">
            </div>

            <input type="number" name="post" value=<?= $id ?> style="display:none;" readonly>

            <?php
                if($tipo == 'Rascunho'){    
            ?>
                <button class="botao" type="submit" name="Salvar" value="1">Publicar</button>
                <button class="botaob" type="submit" name="Salvar" value="2">Salvar</button> 
                <button class="botaob" type="button" onclick="location.href='index.php'">Cancelar</button> 
            <?php
                }else{
            ?>
                <button class="botao" type="submit" name="Salvar" value="2">Atualizar</button> 
                <button class="botaob" type="button" onclick="location.href='index.php'">Cancelar</button>
            <?php
                }
            ?>
        </form>
    </div>
</div>

<?php
    echo count($arquivos);
    }
?>
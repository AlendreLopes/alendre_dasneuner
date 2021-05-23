$('.lightgallery-dinamic').on('click', function(e) {
    e.preventDefault();
    var gallery = this.getAttribute("data-portfolio-id");
    switch(gallery) {
        case '0101':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/1_1_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/1_1_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de comércios e serviços de bairros - Fachada Vista 3D</p>'
                }, {
                    'src': 'images/portfolio/projetos/1_2_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/1_2_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de comércios e serviços de bairros - Fachada Vista 3D</p>'
                }]
            });
        break;
        case '0102':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/2_1_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/2_1_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de habitação unifamiliar - Fachada Vista 3D</p>'
                }, {
                    'src': 'images/portfolio/projetos/2_2_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/2_2_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de habitação unifamiliar - Vista 3D</p>'
                }]
            });
        break;
        case '0103':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/3_1_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/3_1_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de alteração de habitações unifamiliares em série - Fachada Vista 3D</p>'
                }, {
                    'src': 'images/portfolio/projetos/3_2_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/3_2_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de alteração de habitações unifamiliares em série - Estudo do Sol</p>'
                }]
            });
        break;
        case '0104':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/4_1_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/4_1_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de habitação unifamiliar - Fachada Vista 3D</p>'
                }]
            });
        break;
        case '0105':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/5_1_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/5_1_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de habitação unifamiliar e comércio e serviço vicinal - Vista 3D Interna</p>'
                }, {
                    'src': 'images/portfolio/projetos/5_2_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/5_2_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de habitação unifamiliar e comércio e serviço vicinal - Fachada Vista 3D</p>'
                }]
            });
        break;
        case '0106':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/6_1_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/6_1_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de habitação unifamiliar - Fachada Vista 3D</p>'
                }, {
                    'src': 'images/portfolio/projetos/6_2_projeto_arquitetonico.jpg',
                    'thumb': 'images/portfolio/projetos/6_2_projeto_arquitetonico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto arquitetônico de habitação unifamiliar - Elevação Posterior 3D (Fundos)</p>'
                }]
            });
        break;
        case '0107':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/7_2_levantamento_topografico_3d.jpg',
                    'thumb': 'images/portfolio/projetos/7_2_levantamento_topografico_3d.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Levantamento topográfico planialtimétrico em 3D</p>'
                }, {
                    'src': 'images/portfolio/projetos/7_1_levantamento_topografico_2d.jpg',
                    'thumb': 'images/portfolio/projetos/7_1_levantamento_topografico_2d.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Levantamento topográfico planialtimétrico em 2D</p>'
                }]
            });
        break;
        case '0108':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/8_1_projeto_de_unificacao_atualizado.jpg',
                    'thumb': 'images/portfolio/projetos/8_0_projeto_de_unificacao_atualizado_thumb.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto de unificação e/ou subdivisão de lotes</p>'
                }]
            });
        break;
        case '0109':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/9_1_planta_de_situacao_para_usucapiao.jpg',
                    'thumb': 'images/portfolio/projetos/9_1_planta_de_situacao_para_usucapiao.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Planta de situação para usucapião judicial</p>'
                }]
            });
        break;
        case '0110':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/10_1_projeto_de_cadastramento_de_lote.jpg',
                    'thumb': 'images/portfolio/projetos/10_1_projeto_de_cadastramento_de_lote.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto de cadastramento de lote oriundo de usucapião ou retificação</p>'
                }]
            });
        break;
        case '0111':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/11_1_levantamento_topografico.jpg',
                    'thumb': 'images/portfolio/projetos/11_1_levantamento_topografico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Levantamento topográfico planialtimétrico para definição de alinhamento predial</p>'
                }]
            });
        break;
        case '0112':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/12_1_intervencao_em_logradouro_publico.jpg',
                    'thumb': 'images/portfolio/projetos/12_1_intervencao_em_logradouro_publico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto de intervenção em logradouro público para implantação de remanso com vagas de uso específico e normais</p>'
                }]
            });
        break;
        case '0113':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/13_1_intervencao_em_logradouro_publico.jpg',
                    'thumb': 'images/portfolio/projetos/13_1_intervencao_em_logradouro_publico.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto de intervenção em logradouro público para implantação de remanso para veículos grandes</p>'
                }]
            });
        break;
        case '0114':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/projetos/14_1_projeto_de_drenagem_de_solo.jpg',
                    'thumb': 'images/portfolio/projetos/14_1_projeto_de_drenagem_de_solo.jpg',
                    'subHtml': '<h4>Projetos</h4><p>Projeto de drenagem do solo</p>'
                }]
            });
        break;
        case '0201':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/regularizacao/1_1_regularizacao_da_construcao_residencial.jpg',
                    'thumb': 'images/portfolio/regularizacao/1_1_regularizacao_da_construcao_residencial.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Regularização de construção da habitação unifamiliar - Fachada</p>'
                },{
                    'src': 'images/portfolio/regularizacao/1_2_regularizacao_da_construcao_residencial.jpg',
                    'thumb': 'images/portfolio/regularizacao/1_2_regularizacao_da_construcao_residencial.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Regularização de construção da habitação unifamiliar - Fachada Vista 3D</p>'
                }]
            });
        break;
        case '0202':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/regularizacao/2_1_regularizacao_da_construcao.jpg',
                    'thumb': 'images/portfolio/regularizacao/2_1_regularizacao_da_construcao.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Regularização de construção dos comércios e serviços vicinais, ocupando 100% do lote - Fachada</p>'
                },{
                    'src': 'images/portfolio/regularizacao/2_2_regularizacao_da_construcao.jpg',
                    'thumb': 'images/portfolio/regularizacao/2_2_regularizacao_da_construcao.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Regularização de construção dos comércios e serviços vicinais, ocupando 100% do lote - Fachada Vista 3D</p>'
                }]
            });
        break;
        case '0203':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/regularizacao/3_1_regularizacao_da_construcao.jpg',
                    'thumb': 'images/portfolio/regularizacao/3_1_regularizacao_da_construcao.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Regularização de construção da habitação unifamiliar e dos comércios e serviços vicinais - Fachada</p>'
                },{
                    'src': 'images/portfolio/regularizacao/3_2_regularizacao_da_construcao.jpg',
                    'thumb': 'images/portfolio/regularizacao/3_2_regularizacao_da_construcao.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Regularização de construção da habitação unifamiliar e dos comércios e serviços vicinais - Fachada Vista 3D</p>'
                }]
            });
        break;
        case '0204':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/regularizacao/4_1_regularizacao_das_construcoes.jpg',
                    'thumb': 'images/portfolio/regularizacao/4_1_regularizacao_das_construcoes.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Regularização das construções das habitações unifamiliares - Fachada</p>'
                },{
                    'src': 'images/portfolio/regularizacao/4_2_regularizacao_das_construcoes.jpg',
                    'thumb': 'images/portfolio/regularizacao/4_2_regularizacao_das_construcoes.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Regularização das construções das habitações unifamiliares - Fachada Vista 3D</p>'
                }]
            });
        break;
        case '0205':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/regularizacao/5_1_regularizacao_da_construcao.jpg',
                    'thumb': 'images/portfolio/regularizacao/5_1_regularizacao_da_construcao.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Regularização da construção da habitação unifamiliar - Fachada</p>'
                },{
                    'src': 'images/portfolio/regularizacao/5_2_regularizacao_da_construcao.jpg',
                    'thumb': 'images/portfolio/regularizacao/5_2_regularizacao_da_construcao.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Regularização da construção da habitação unifamiliar - Fachada Vista 3D</p>'
                }]
            });
        break;
        case '0206':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/regularizacao/6_1_certidao_de_demolicao.jpg',
                    'thumb': 'images/portfolio/regularizacao/6_1_certidao_de_demolicao.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Certidão de demolição para regularização da matrícula</p>'
                }]
            });
        break;
        case '0207':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/regularizacao/7_1_retificacao_da_matricula.jpg',
                    'thumb': 'images/portfolio/regularizacao/7_1_retificacao_da_matricula.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Projeto para retificação de perímetro e área da matrícula do lote de terreno</p>'
                }]
            });
        break;
        case '0208':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/regularizacao/8_1_recurso_ao_cmu.jpg',
                    'thumb': 'images/portfolio/regularizacao/8_1_recurso_ao_cmu.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Recuso ao Conselho Municipal de Urbanismo de Curitiba - CMU, provido por unanimidade</p>'
                }, {
                    'src': 'images/portfolio/regularizacao/8_2_recurso_ao_cmu.jpg',
                    'thumb': 'images/portfolio/regularizacao/8_2_recurso_ao_cmu.jpg',
                    'subHtml': '<h4>Regularização</h4><p>Recuso ao Conselho Municipal de Urbanismo de Curitiba - CMU, provido por unanimidade</p>'
                }]
            });
        break;
        case '0301':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/obras/1_2_construcao_comercial.jpg',
                    'thumb': 'images/portfolio/obras/1_2_construcao_comercial.jpg',
                    'subHtml': '<h4>Obras</h4>Construção comércios e serviços de bairros</p>'
                },{
                    'src': 'images/portfolio/obras/1_1_construcao_comercial.jpg',
                    'thumb': 'images/portfolio/obras/1_1_construcao_comercial.jpg',
                    'subHtml': '<h4>Obras</h4><p>Construção comércios e serviços de bairros</p>'
                }]
            });
        break;
        case '0302':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/obras/2_2_telhados.jpg',
                    'thumb': 'images/portfolio/obras/2_2_telhados.jpg',
                    'subHtml': '<h4>Obras</h4><p>Construção de telhado</p>'
                }, {
                    'src': 'images/portfolio/obras/2_1_telhados.jpg',
                    'thumb': 'images/portfolio/obras/2_1_telhados.jpg',
                    'subHtml': '<h4>Obras</h4><p>Construção de telhado</p>'
                }]
            });
        break;
        case '0303':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/obras/3_2_calcadas_padrao_de_curitiba.jpg',
                    'thumb': 'images/portfolio/obras/3_2_calcadas_padrao_de_curitiba.jpg',
                    'subHtml': '<h4>Obras</h4><p>Calçada padrão de Curitiba conforme decreto 1066/06</p>'
                }, {
                    'src': 'images/portfolio/obras/3_1_calcadas_padrao_de_curitiba.jpg',
                    'thumb': 'images/portfolio/obras/3_1_calcadas_padrao_de_curitiba.jpg',
                    'subHtml': '<h4>Obras</h4><p>Calçada padrão de Curitiba conforme decreto 1066/06</p>'
                }]
            });
        break;
        case '0304':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/obras/4_1_construcao_residencial.jpg',
                    'thumb': 'images/portfolio/obras/4_1_construcao_residencial.jpg',
                    'subHtml': '<h4>Obras</h4><p>Construção de habitação unifamiliar</p>'
                }]
            });
        break;
        case '0305':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/obras/5_2_cercas_de_palanques.jpg',
                    'thumb': 'images/portfolio/obras/5_2_cercas_de_palanques.jpg',
                    'subHtml': '<h4>Obras</h4><p>Cercas de palanques com tela galvanizada</p>'
                },{
                    'src': 'images/portfolio/obras/5_1_cercas_de_palanques.jpg',
                    'thumb': 'images/portfolio/obras/5_1_cercas_de_palanques.jpg',
                    'subHtml': '<h4>Obras</h4><p>Cercas de palanques com tela galvanizada</p>'
                }]
            });
        break;
        case '0306':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/obras/6_2_rede_de_drenagem.jpg',
                    'thumb': 'images/portfolio/obras/6_2_rede_de_drenagem.jpg',
                    'subHtml': '<h4>Obras</h4><p>Redes de drenagem pluvial</p>'
                }, {
                    'src': 'images/portfolio/obras/6_1_rede_de_drenagem.jpg',
                    'thumb': 'images/portfolio/obras/6_1_rede_de_drenagem.jpg',
                    'subHtml': '<h4>Obras</h4><p>Redes de drenagem pluvial</p>'
                }]
            });
        break;
        case '0307':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/obras/7_1_construcao_residencial.jpg',
                    'thumb': 'images/portfolio/obras/7_1_construcao_residencial.jpg',
                    'subHtml': '<h4>Obras</h4><p>Construção de habitação unifamiliar e comércio e serviço vicinal</p>'
                }]
            });
        break;
        case '0308':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/obras/8_1_impermeabilizacao.jpg',
                    'thumb': 'images/portfolio/obras/8_1_impermeabilizacao.jpg',
                    'subHtml': '<h4>Obras</h4><p>Impermeabilização</p>'
                }]
            });
        break;
        case '0401':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/diversos/1_1_cvco.jpg',
                    'thumb': 'images/portfolio/diversos/1_1_cvco.jpg',
                    'subHtml': '<h4>Diversos</h4>CVCO - Certificado de Vistoria de Conclusão de Obras - habite-se</p>'
                }]
            });
        break;
        case '0402':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/diversos/2_1_cnd_do_inss.jpg',
                    'thumb': 'images/portfolio/diversos/2_1_cnd_do_inss.jpg',
                    'subHtml': '<h4>Diversos</h4><p>Certidão Negativa De Débitos Relativos Às Contribuições Previdenciárias E Às De Terceiros – Certidão de obra</p>'
                }]
            });
        break;
        case '0403':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/diversos/3_1_laudo.jpg',
                    'thumb': 'images/portfolio/diversos/3_1_laudo.jpg',
                    'subHtml': '<h4>Diversos</h4><p>Laudo de engenharia</p>'
                }]
            });
        break;
        case '0404':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/diversos/4_1_cno.jpg',
                    'thumb': 'images/portfolio/diversos/4_1_cno.jpg',
                    'subHtml': '<h4>Diversos</h4><p>Cadastro nacional de obras</p>'
                }]
            });
        break;
        case '0405':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/diversos/5_1_cvco.jpg',
                    'thumb': 'images/portfolio/diversos/5_1_cvco.jpg',
                    'subHtml': '<h4>Diversos</h4><p>CVCO - Certificado de Vistoria de Conclusão de Obras - habite-se</p>'
                }]
            });
        break;
        case '0406':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/diversos/6_1_avaliacao.jpg',
                    'thumb': 'images/portfolio/diversos/6_1_avaliacao.jpg',
                    'subHtml': '<h4>Diversos</h4><p>Avaliação de construção</p>'
                }]
            });
        break;
        case '0407':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/diversos/7_1_assistencia_tecnica_judiciaria.jpg',
                    'thumb': 'images/portfolio/diversos/7_1_assistencia_tecnica_judiciaria.jpg',
                    'subHtml': '<h4>Diversos</h4><p>Assistência técnica judiciária</p>'
                }]
            });
        break;
        case '0408':
            $(this).lightGallery({
                share: false,
                download: false,
                preload: 2,
                showAfterLoad: true,
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false,
                mode: 'lg-fade',
                dynamic: true,
                dynamicEl: [{
                    'src': 'images/portfolio/diversos/8_1_averbacao_de_construcao.jpg',
                    'thumb': 'images/portfolio/diversos/8_1_averbacao_de_construcao.jpg',
                    'subHtml': '<h4>Diversos</h4><p>Averbação de construção na matrícula do imóvel</p>'
                }]
            });
        break;
        default:
            alert('Portifólio sem imagens vinculadas.');
        break;
    }
});

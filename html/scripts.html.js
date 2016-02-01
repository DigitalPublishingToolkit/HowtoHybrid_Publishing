  <script>
    $(document).ready(function(){

      $('body').show()

      console.log('jquery initiated')

      // resizeable stuff

      $(function() {
        $(".level1, .linkbox, .infobox, #header" ).resizable({
          handles: 'e',
          cancel: '.fullWidth',
          // grid: [ $('#header').outerWidth()/8, 0 ],
          resize: function( event, ui ) {
            $(".figure:in-viewport").removeClass('figureInside')
            $(".figure:right-of-screen").each(function(){
              $(this).addClass('figureInside')
            })

          }

        });

      });

      // generate header and chapters
      // $( "body" ).prepend('<div id="header">\
      //   <h1><a href="http://localhost/html/open/template01All/template01/clients/inc/howTo/test04/iframeGetFinal/index.html">Publishing Lab:</a></h1>\
      //   <button id="toggleWidth" type="button">⟷</button>\
      //   <button id="toggleMode" type="button">Aa</button>\
      //   <ul class="navWrap">\
      //       <li>\
      //           <a href="#" class="navFirst">Chapters</a>\
      //           <ul class="navOptions">\
      //           </ul>\
      //       </li>\
      //   </ul>\
      // </div>)';


      $('.level1').each(function(){
        parentId = $(this).attr('id')
        console.log(parentId)
      $('.navOptions').append('<li><a href="#'+parentId+'">'+$(this).find('h1').first().text()+'</a></li>')
      })

      // handle chapter click

      $(document).on('click','.navOptions a', function(e){
        e.preventDefault()
        hrefId = $(this).attr('href')
        positionId = $(hrefId).position().top-125
        window.scrollTo(0,positionId)
        hrefIdBackgroundColor = $(hrefId).css('background-color')
        console.log(hrefIdBackgroundColor)
        $(hrefId+', '+hrefId+' div').not('.ui-resizable-handle, .difficulty-level').addClass('highlightThis').removeClass('removeHighlightThis').css({'background-color':''})
        window.setTimeout(function(){
           $(hrefId+', '+hrefId+' div').not('.ui-resizable-handle, .difficulty-level').addClass('removeHighlightThis').removeClass('highlightThis').css({'background-color':''})
        },600)
      })

      i=0

      $('img').each(function(){
        i=i+1
        $(this).unwrap()
        thisSrc = $(this).attr('src')
        figureWrap = `
          <div class="figure">
            <div class="thumbnail">`+thisSrc.split('/').pop()+`</div>
            <a href="#img`+i+`">
              <img class="bigImage" src=`+thisSrc+` alt="" />
            </a> 
            <a href="#_">
              <div id="img`+i+`" class="lightbox">
                <img src=`+thisSrc+` alt="" />
              </div>
            </a>
          </div>
        `;
        $(figureWrap).insertAfter( $(this) );
        $(this).remove()
      })

      // initial check of figures right off

      $(".figure:right-of-screen").each(function(){
        $(this).addClass('figureInside')
      })

      // append title
      $('#header').find('h1').html("<h1>"+$('#header').find('h1').text()+"</br>"+$('.pagetitle').text()+"</h1>")
    

      // move 'linkbox' out
      $('.linkbox, .infobox').each(function() {
        $(this).insertAfter($(this).parents('.level1'));
      })
      $('.linkbox, .infobox').each(function() {
        $(this).insertAfter($(this).parents('.level2'));
      })

      // edit linkbox appearance

      $('.linkbox, .infobox').each(function() {
        $(this).children().not('h1, .ui-resizable-handle').wrapAll('<div class="level2"></div>');
      })

      // toggle full div width

      $(document).on('click', '#toggleWidth', function(){

        if ($('.level1').hasClass('fullWidth')) {
          $('#header, .level1, .linkbox, .infobox').removeClass('fullWidth').addClass('initWidth')
          $('#toggleWidth').text('⟷')
            
            window.setTimeout(function(){  
              $(".figure:in-viewport").removeClass('figureInside')
              $(".figure:right-of-screen").each(function(){
                $(this).addClass('figureInside')
              })

          },200)

            window.setTimeout(function(){  
          $('#header, .level1, .linkbox, .infobox').removeClass('initWidth')

          },600)


        } else {
          $('#header, .level1, .linkbox, .infobox').css({'width':''})
          $('#header, .level1, .linkbox, .infobox').addClass('fullWidth')
          $('#toggleWidth').text('⟺')
          $('.figure').addClass('figureInside')
        }

      });


// random image float

    function floatImageRandom(){

      var classes = ["figureLeft", "figureRight"];

      $(".figure").each(function(){
          $(this).addClass(classes[~~(Math.random()*classes.length)]);
      });

    }

  // toggle between stylesheets


  function initialStyle(){

      styleA = $("#a")
      styleB = $("#b")

      if (window.location.hash == '#stylea' || window.location.hash == '' ){
      $('#b').remove()
      $('body').addClass('activeStyleA')
    }else{
        $('head').append(styleB)
        $('#a').remove()
        $('body').removeClass('activeStyleA')
        $('#toggleMode').addClass('aActive')
        $('#toggleMode').removeClass('bActive')
      window.location.hash = 'styleb'
    }

  }


  initialStyle()


  function toggleStyleSheets(){

    if($('body').hasClass('activeStyleA')){
      $('head').append(styleB)
      $('#a').remove()
      $('body').removeClass('activeStyleA')
      $('#toggleMode').addClass('aActive')
      $('#toggleMode').removeClass('bActive')
      window.location.hash = 'styleb'

    }else{
      $('head').append(styleA)
      $('body').addClass('activeStyleA')
      $('#b').remove()
      $('#toggleMode').addClass('bActive')
      $('#toggleMode').removeClass('aActive')
      window.location.hash = 'stylea'

    }

  }

  // Toggle Mode

  $(document).on('click', '#toggleMode', function(){

    // our toggle functions
    toggleStyleSheets()
    // floatImageRandom()

  })


  // Make video play on click
    $("video").click(function(e){

        $(this).attr("controls","controls")

        // get click position 
        var clickY = (e.pageY - $(this).offset().top);
        var height = parseFloat( $(this).height() );

        // avoids interference with controls
        if(clickY > 0.82*height) return;

        // toggles play / pause
        this.paused ? this.play() : this.pause();
    });

    // click image
    $('.figure .bigImage').on('click', function(){
      $(this).parents('.figure').clone().prependTo('body')
      $('.figure:not(:first)').hide()
      $('body').find('.figure .lightbox').first().css({'display':'block'})
    })

    $(document).on('click','.figure .lightbox', function(){
      $('.figure:not(:first)').show()
      $('body').find('.figure').first().remove()
    })


})

  </script>

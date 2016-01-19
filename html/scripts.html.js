  <script>
  	$(document).ready(function(){
    	console.log('jquery initiated')

      // resizeable stuff

      $(function() {
        $(".level1, .links, #header" ).resizable({
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

      $( "body" ).prepend(`<div id="header">
        <h1>Publishing Lab:</h1> 
        <button id="toggleWidth" type="button">⟷</button>
        <button id="toggleTheme" type="button"> </button>
        <button id="toggleMode" type="button">Aa</button>
        <ul class="navWrap">
            <li>
                <a href="#" class="navFirst">Chapters</a>
                <ul class="navOptions">
                    
                </ul>
            </li>
        </ul>
      </div>`);

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

      // generate figure+lightbox

      $('img').each(function(){
        $(this).unwrap()
        thisSrc = $(this).attr('src')
        figureWrap = `
          <div class="figure">
            <div class="thumbnail">`+thisSrc.split('/').pop()+`</div>
            <a href="#img1">
              <img class="bigImage" src=`+thisSrc+` alt="" />
            </a> 
            <a href="#_">
              <img id="img1" class="lightbox" src=`+thisSrc+` alt="" />
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
      $('#header').find('h1').html("<h1>"+$('#header').find('h1').text()+"</br>"+$('.htmlTitle').text()+"</h1>")
    

      // move 'links' out
      $('.links').each(function() {
        $(this).insertAfter($(this).parents('.level1'));
      })
      $('.links').each(function() {
        $(this).insertAfter($(this).parents('.level2'));
      })

      // edit links appearance

      $('.links').each(function() {
        $(this).children().not('h1, .ui-resizable-handle').wrapAll('<div class="level2"></div>');
      })

      // toggle full div width

      $(document).on('click', '#toggleWidth', function(){

        if ($('.level1').hasClass('fullWidth')) {
          $('#header, .level1, .links').removeClass('fullWidth').addClass('initWidth')
          $('#toggleWidth').text('⟷')
            
            window.setTimeout(function(){  
              $(".figure:in-viewport").removeClass('figureInside')
              $(".figure:right-of-screen").each(function(){
                $(this).addClass('figureInside')
              })

          },200)

            window.setTimeout(function(){  
          $('#header, .level1, .links').removeClass('initWidth')

          },600)


        } else {
          $('#header, .level1, .links').css({'width':''})
          $('#header, .level1, .links').addClass('fullWidth')
          $('#toggleWidth').text('⟺')
          $('.figure').addClass('figureInside')
        }

      });


    var classes = ["figureLeft", "figureRight", "figureCenter"];

    $(".figure").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });


    })

  </script>

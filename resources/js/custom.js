$('body').on('click', '.navbar-toggler', function(ev){
    let sideBar = $('#side_bar');
    sideBar.toggleClass('open')
});

// Window Scroll Options
$(window).on('scroll', function(){
    $currentPos = this.parseInt($(window).scrollTop());
    $currentWidth = this.parseInt($(window).width());
    if($currentWidth >= 768){
        if($currentPos >= 210){
            $('#page_header').css({
                'background-color':'rgb(255, 2255, 255, 1)',
                'background': '-webkit-linear-gradient(top, rgba(255, 255, 255, 1),  rgba(255, 255, 255, 1))',
                'position' : 'fixed',
                'top' : '0',
                'box-shadow': '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'
            });
            // $('#indexnavimg').slideDown('fast');
            console.log('It have pass' + $currentWidth);
        }else{
            $('#page_header').css({
                'background-color':'transparent',
                'background': '-webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))',
                'position' : 'absolute',
                'top' : '0',
                'box-shadow': '0 0 0 rgba(0, 0, 0, 0.075)'
            });
            // $('#indexnavimg').slideUp('fast');
            console.log('Less' + $currentWidth);
    
        }
    }
});

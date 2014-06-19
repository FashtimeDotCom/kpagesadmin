$(function(){
   $('.pleft').on('click', '.nav-parent > a',function() {
      
      var parent = $(this).parent();
      var sub = parent.find('> ul');
      $(this).find('b').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');

      // Dropdown works only when leftpanel is not collapsed
      if(!$('body').hasClass('leftpanel-collapsed')) {
         if(sub.is(':visible')) {
            sub.slideUp(200, function(){
               parent.removeClass('nav-active');
               $('.pcontent').css({height: ''});
               
               adjustmainpanelheight();
            });
         } else {
            closeVisibleSubMenu();
            parent.addClass('nav-active');
            //$(this).find('b').toggleClass('glyphicon-chevron-up',true);
            sub.slideDown(200, function(){
               adjustmainpanelheight();
            });
         }
      }
      return false;
   });
   
   function closeVisibleSubMenu() {
      $('.pleft .nav-parent').each(function() {
         var t = $(this);
         if(t.hasClass('nav-active')) {
            t.find('> ul').slideUp(200, function(){
               t.removeClass('nav-active');
            });
         }
      });
   }
   
   function adjustmainpanelheight() {
      // Adjust mainpanel height
      var docHeight = $(document).height();
      if(docHeight > $('.pcontent').height())
         $('.pcontent').height(docHeight);
   }
   adjustmainpanelheight();
})
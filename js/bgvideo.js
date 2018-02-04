(function($) {
  $(document).ready(function(){
    $('#myModal').on('contextmenu', function(e) {
        e.preventDefault();
    });
    $('#myModal').on('hidden.bs.modal', function (e) {
      // do something...
      $("#playableVideo").get(0).pause();
    });
    $('#myModal').on('shown.bs.modal', function (e) {
      // do something...
      $("#playableVideo").get(0).play();
    });
  });
}(jQuery));

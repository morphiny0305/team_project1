$(".popupModalVideo a").click(function() {
  $(".video_modal_popup").addClass("reveal"),
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
}),
$(".video_modal_popup-closer").click(function() {
  $(".video_modal_popup .video-wrapper").remove(),
  $(".video_modal_popup").removeClass("reveal")
});
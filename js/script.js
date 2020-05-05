$(document).ready(function(){
    $(".quats .controls li").on('click',function(){
        $(this).addClass('sw-active').siblings().removeClass('sw-active');
        $('.quats .quats-content .quat').hide();
        $($(this).data('quat')).fadeIn(1000);
    });
});
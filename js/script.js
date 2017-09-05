$(function () {
    function t(t) {
        console.log(t)
    }


    $("input[name='phone']").mask("+7 (999) 999-99-99");

    /*формы*/

    $('input').change(function() {
        $('input').removeClass('incorrect correct');
    });

    var _target='';
    // $('form').ajaxForm({
    //     beforeSubmit: function(d, $e){
    //         $('input').removeClass('incorrect');
    //
    //         var emailReg = new RegExp("^[-0-9a-z\._]+\@[-0-9a-z\.]+\.[a-z]{2,4}$", "i"),
    //             phoneReg = '';
    //
    //         for (var j in d) {
    //             /*телефон*/
    //             if(d[j].name == 'phone' && d[j].value == '') {
    //                 $e.find('input[name="phone"]').addClass('incorrect');
    //                 return false;
    //             }
    //
    //             if(d[j].name == 'phone' && d[j].value != '') {
    //                 for (var i = 0; i <= 9; i++) {
    //                     phoneReg = new RegExp(i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString());
    //
    //                     if (phoneReg.test(d[j].value)) {
    //                         $e.find('input[name="phone"]').addClass('incorrect');
    //                         return false;
    //                     }
    //                 }
    //             }
    //
    //             $e.find('input[name="phone"]').addClass('correct');
    //
    //             /*имя*/
    //             if(d[j].name == 'name' && d[j].value == '') {
    //                 $e.find('input[name="name"]').addClass('incorrect');
    //                 return false;
    //             }
    //
    //             $e.find('input[name="name"]').addClass('correct');
    //
    //             /*email*/
    //             if(d[j].name == 'email' && d[j].value == '') {
    //                 $e.find('input[name="email"]').addClass('incorrect');
    //                 return false;
    //             }
    //
    //             if (d[j].name == 'email' && d[j].value != "") {
    //                 if (!emailReg.test(d[j].value)) {
    //                     $e.find('input[name="email"]').addClass('incorrect');
    //                     return false;
    //                 }
    //             }
    //
    //             $e.find('input[name="email"]').addClass('correct');
    //
    //             /*цель*/
    //             if (d[j].name == 'target') {
    //                 _target = d[j].value;
    //             }
    //         }
    //
    //         return true;
    //     },
    //
    //     success: function(data){
    //         console.info(data);
    //         $('input').removeClass('incorrect correct');
    //         $("#thnx-a").click();
    //     }
    // });

    $(function(){
        $("#phone").mask("8(999) 999-9999");
    });

    //попап
    $('.fancybox').fancybox();

    function toTwoChars(a) {
        if (a < 10) {
            return "0" + a;
        } else  {
            return a;
        }
    }

    function runMultiple () {
        var d = new Date();
        var msg = toTwoChars(23 - d.getHours()) + ":";
        msg += toTwoChars(59 - d.getMinutes()) + ":";
        msg += toTwoChars(60- d.getSeconds()) + "";
        $('#timer').text(msg);
    }
    setInterval( function () {
        runMultiple();
    }, 1000);

});
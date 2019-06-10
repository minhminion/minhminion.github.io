$(document).ready(function()
{
    $("#contribute").on("submit",function(e)
    {
        e.preventDefault();
        var flag = "alert-success";
        var alert ="Cám ơn bạn đã đóng góp ý kiến "

        var name = $('#contribute').find('input[name="name"]').val();
        var phone = $('#contribute').find('input[name="phone"]').val();
        var email = $('#contribute').find('input[name="email"]').val();
        var cmt = $('#contribute').find('textarea').val();

        var patternPhone=/(09|01[2|6|8|9])+([0-9]{8})\b/g;
        var patternEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{3})+$/;

        if(!patternPhone.test(phone))
        {
            flag = "alert-danger";
            var alert ="Số điện thoại không hợp lệ "
        }
        else if(!patternEmail.test(email))
        {
            flag = "alert-danger";
            var alert ="Email không hợp lệ "
        }
        
        var s ='<div class="alert '+flag+'" role="alert">\
                    '+alert+'\
                </div>';
        $(".contribute-alert").html(s);
             
        if(flag=="alert-success")
        {
            $("#contribute").find('input[name="name"],input[name="phone"],input[name="email"],textarea').val("");
        }
    })
})
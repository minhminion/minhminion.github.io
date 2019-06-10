
function clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    function checkTime(i) {
        if (i < 10) i = "0" + i;
        return i;
    }

    m = checkTime(m);
    s = checkTime(s);

    $("#timer").text("Let's See - Time: " + h + ":" + m + ":" + s);
}
function switch_signup_login() {
    // Delete 2 button and attached modals
    $("#nd, body #modal_info, body #modal_logout").remove();
    $(".modal-backdrop.fade.show").remove();
    // Add buttons
    var sl =
        "<ul id='st' class='nav navbar-nav navbar-right'>\
    <li><button id='go' type='button' onclick='seek()'>Go!</button></li>\
  <li>\<a id='signup' data-toggle='modal' data-target='#modal_signup' href='#'>\Sign Up</a>\</li>\
  <li>\<a id='login' data-toggle='modal' data-target='#modal_login' href='#'>\Login</a>\</li>\
</ul>";
    $("#navbarResponsive").append(sl);
    // Add Modals
    var modal_signup =
        "<div id='modal_signup' class='modal fade' role='dialog'>\
  <div class='modal-dialog'>\
      <div class='modal-content'>\
          <div class='modal-header'>\
              <h4 class='modal-title'>Đăng nhập tài khoản</h4>\
              <button type='button' class='close' data-dismiss='modal'>&times;</button>\
          </div>\
          <div class='modal-body'>\
              <form class='form' action=''>\
                  <div class='form-group'>\
                      <label for=''>Gmail</label>\
                      <input type='email' class='form-control' id='gmail'>\
                      <p id='err_email'></p>\
                  </div>\
                  <div class='form-group'>\
                      <label for=''>Password</label>\
                      <input type='password' class='form-control' id='pw'>\
                      <p id='err_pw'></p>\
                  </div>\
                  <div class='form-group'>\
                      <label for=''>Nickname</label>\
                      <input type='text' class='form-control' id='nick_name'>\
                      <p id='err_nickname'></p>\
                  </div>\
                  <div class='form-group'>\
                      <label for=''>Date of birth</label>\
                      <input type='date' class='form-control' id='dob'>\
                      <p id='err_dob'></p>\
                  </div>\
                  <div class='form-group'>\
                      <label for=''>Favorite categories</label>\<br>\
                      <input type='checkbox' name='cate' value='Khám phá'> Khám phá<br>\
                      <input type='checkbox' name='cate' value='Phim ảnh'> Phim ảnh<br>\
                      <input type='checkbox' name='cate' value='Âm nhạc'> Âm nhạc<br>\
                      <p id='err_cate'></p>\
                  </div>\
              </form>\
          </div>\
          <div class='modal-footer'>\
              <button type='button' class='btn btn-default' data-dismiss='modal'>\Đăng nhập</button>\
          </div>\
      </div>\
  </div>\
</div>";
    var modal_login =
        "<div id='modal_login' class='modal fade' role='dialog'>\
  <div class='modal-dialog'>\
      <div class='modal-content'>\
          <div class='modal-header'>\
              <h4 class='modal-title'>\Login now!</h4>\
              <button type='button' class='close' data-dismiss='modal'>&times;</button>\
          </div>\
          <div class='modal-body'>\
              <div class='form-group'>\
                  <label>Gmail</label>\
                  <input type='email' class='form-control' id='login_gmail'>\
              </div>\
              <div class='form-group'>\
                  <label>Password</label>\
                  <input type='password' class='form-control' id='login_pw'>\
              </div>\
          </div>\
          <div class='modal-footer'>\
              <button type='button' class='btn btn-default' data-dismiss='modal'>\Login</button>\
          </div>\
      </div>\
  </div>\
</div>";
    $("body").append(modal_signup);
    $("body").append(modal_login);
}
function switch_info_logout() {
    // Delete 2 button and attached modals
    $("#st, body #modal_signup, body #modal_login").remove();
    $(".modal-backdrop.fade.show").remove();
    $("body").removeClass("modal-open");
    $("body").attr("style", "");
    // Add buttons
    var il =
        "<ul id='nd' class='nav navbar-nav navbar-right'>\
    <li><button id='go' type='button' onclick='seek()'>Go!</button></li>\
  <li><a id='info' data-toggle='modal' data-target='#modal_info' href='#'>Account</a></li>\
  <li><a id='logout' href='#' data-toggle='modal' data-target='#modal_logout'>Logout</a></li>\
</ul>";
    $("#navbarResponsive").append(il);
    // Add Modals
    var modal_info =
        "<div id='modal_info' class='modal fade' role='dialog'>\
  <div class='modal-dialog'>\
      <div class='modal-content'>\
          <div class='modal-header'>\
              <h4 class='modal-title'>Your Information</h4>\
              <button type='button' class='close' data-dismiss='modal'>&times;</button>\
          </div>\
          <div class='modal-body'>\
              <form class='form'>\
                  <div class='form-group'>\
                      <label for=''>Gmail</label>\
                      <input type='email' class='form-control' id='gmail' readonly='readonly'>\
                  </div>\
                  <div class='form-group'>\
                      <label for=''>Password</label>\
                      <input type='text' class='form-control' id='pw' readonly='readonly'>\
                  </div>\
                  <div class='form-group'>\
                      <label for=''>Nickname</label>\
                      <input type='text' class='form-control' id='nick_name' readonly='readonly'>\
                  </div>\
                  <div class='form-group'>\
                      <label for=''>Date of birth</label>\
                      <input type='date' class='form-control' id='dob' readonly='readonly'>\
                  </div>\
                  <div class='form-group'>\
                      <label for=''>Favorite categories</label>\
                      <input type='text' class='form-control' id='cates' readonly='readonly'>\
                  </div>\
              </form>\
          </div>\
          <div class='modal-footer'>\
              <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>\
          </div>\
      </div>\
  </div>\
</div>";
    var modal_logout =
        "<div id='modal_logout' class='modal fade' role='dialog'>\
  <div class='modal-dialog'>\
      <div class='modal-content'>\
          <div class='modal-header'>\
              <h4 class='modal-title'>Confirm logout</h4>\
              <button type='button' class='close' data-dismiss='modal'>&times;</button>\
          </div>\
          <div class='modal-body'>\
              <p>Are you sure to logout right now?</p>\
          </div>\
          <div class='modal-footer'>\
          <button value='OK!' class='btn btn-default' onClick='window.location.reload();'>OK!</button>\
          </div>\
      </div>\
  </div>\
</div>";
    $("body").append(modal_info);
    $("body").append(modal_logout);
    // Load Data into modal
    $("#gmail").val(localStorage.getItem("gmail"));
    $("#pw").val(localStorage.getItem("pw"));
    $("#nick_name").val(localStorage.getItem("nick_name"));
    $("#dob").val(localStorage.getItem("dob"));
    $("#cates").val(localStorage.getItem("cate"));
}
function validate() {
    // Get all value
    var gmail = $("#modal_signup #gmail").val();
    var pw = $("#modal_signup #pw").val();
    var nick_name = $("#modal_signup #nick_name").val();
    var dob = $("#modal_signup #dob").val();
    var cate = [];
    $.each($("#modal_signup input[name='cate']:checked"), function () {
        cate.push($(this).val());//auto cate.join(", ")
    });
    // Validate
    var flag = true;
    if (gmail != "") {
        if (/^[\w\.]+@gmail\.com$/.test(gmail)) {
            $("#err_email").text("");
        }
        else {
            flag = false;
            $("#err_email").text("Gmail sai dinh dang!");
        }
    }
    else {
        flag = false;
        $("#err_email").text("Khong dc de trong!");
    }
    if (pw != "") {
        if (/^\S+$/.test(pw)) {
            $("#err_pw").text("");
        }
        else {
            flag = false;
            $("#err_pw").text("Password ko dc chua khoang cach!");
        }
    }
    else {
        flag = false;
        $("#err_pw").text("Khong dc de trong!");
    }
    if (nick_name != "") {
        $("#err_nickname").text("");
    }
    else {
        flag = false;
        $("#err_nickname").text("Khong dc de trong!");
    }
    if (dob != "") {
        dob = new Date(dob);
        var cur_date = new Date();
        if (cur_date.getFullYear() - dob.getFullYear() >= 10) {
            $("#err_dob").text("");
        }
        else {
            flag = false;
            $("#err_dob").text("Ban phai >= 10 tuoi!");
        }
    }
    else {
        flag = false;
        $("#err_dob").text("Khong dc de trong!");
    }
    if (cate.length != 0) {
        $("#err_cate").text("");
    }
    else {
        flag = false;
        $("#err_cate").text("Khong dc de trong!");
    }
    return flag;
}
function seek() {
    // alert("a");
    var txt = $("input[name='search']").val();
    var identifier = $(".navbar-brand img").attr("src");
    var result = "";
    if (identifier == "../img/logo.png") {
        // This is index or a page in same lv
        var dict =
            [{
                tit: "Mê mẩn ngắm một góc Huế đẹp quá đỗi dịu dàng như một nàng thơ",
                content: "<div class='single-post'>\
          <div class='post-thumbnail'>\
              <img src='../img/nangtho1.jpg'>\
          </div>\
          <div class='post-content'>\
              <a href='posts/explore/nangtho.html' class='headline'>\
                  <h5>\
                      Mê mẫn ngắm một góc Huế đẹp quá nỗi dịu dàng như một nàng thơ\
                  </h5>\
              </a>\
              <p>\
                  'Mọi người cứ bảo đến Huế buồn, tẻ nhạt, không có gì chơi nhưng...'\
              </p>\
          </div>\
          <div class='post-meta'>\
              <p>\
                  <a href='#' class='post-author'>\
                      ABC\
                  </a>\
                  lúc\
                  <a href='#' class='post-date'>\20 - 4 - 2019, 14:00 pm</a>\
              </p>\
          </div>\
      </div>"
            },
            {
                tit: "Ngắm trọn Đà Lạt thơ mộng sáng sớm của chàng trai 9X Sài Gòn",
                content: "<div class='single-post'>\
          <div class='post-thumbnail'>\
              <img src='../img/khoi1.jpg'>\
          </div>\
          <div class='post-content'>\
              <a href='posts/explore/dalat.html' class='headline'>\
                  <h5>\
                      Ngắm trọn Đà Lạt thơ mộng sáng sớm của chàng trai trẻ 9X SG\
                  </h5>\
              </a>\
              <p>\
                  Nhìn toàn cảnh Đà Lạt tại những tọa độ vàng không phải ai cũng biết...\
              </p>\
          </div>\
          <div class='post-meta'>\
              <p>\
                  <a href='#' class='post-author'>\
                      Lưu Bảo Minh\
                  </a>\
                  lúc\
                  <a href='#' class='post-date'>\
                      20 - 4 - 2019, 8:00 am\
                  </a>\
              </p>\
          </div>\
      </div>"
            },
            {
                tit: "Phát hiện thêm hệ thống hang ngầm sâu trên 90m tại Sơn Đoòng",
                content: "<div class='single-post'>\
          <div class='post-thumbnail'>\
              <img src='../img/sondoong1.jpg'>\
          </div>\
          <div class='post-content'>\
              <a href='posts/explore/sondoong.html' class='headline'>\
                  <h5>\
                      Các chuyên gia phát hiện thêm hệ thống hang ngầm sâu trên 90m tại Sơn Đoòng\
                  </h5>\
              </a>\
              <p>\
                  Các chuyên gia Hiệp hội hang động Hoàng gia Anh đã công bố qua ...\
              </p>\
          </div>\
          <div class='post-meta'>\
              <p>\
                  <a href='#' class='post-author'>\
                      Lưu Bảo Minh\
                  </a>\
                  lúc\
                  <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
              </p>\
          </div>\
      </div>"
            },
            {
                tit: "7 phim của Vũ trụ Marvel cần xem lại trước ‘Avengers: Endgame’",
                content: "<div class='single-post'>\
          <div class='post-thumbnail'>\
              <img src='../img/ironman2008.jpg'>\
          </div>\
          <div class='post-content'>\
              <a href='posts/film/marvel.html' class='headline'>\
                  <h5>7 Phim của vũ trụ Marvel cần xem lại trước khi xem 'Avenger : Endgame'\
                  </h5>\
              </a>\
              <p>\
                  MCU sắp sửa tung ra tác phẩm thứ 22 của loạt phim về siêu anh hùng...\
              </p>\
          </div>\
          <div class='post-meta'>\
              <p>\
                  <a href='#' class='post-author'>\
                      Lưu Bảo Minh\
                  </a>\
                  lúc\
                  <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
              </p>\
          </div>\
      </div>"
            },
            {
                tit: "Disney góp 5 triệu USD phục dựng Nhà thờ Đức Bà Paris",
                content: "<div class='single-post'>\
          <div class='post-thumbnail'>\
              <img src='../img/nhathoducba_03.jpg'>\
          </div>\
          <div class='post-content'>\
              <a href='posts/film/nhathoducba.html' class='headline'>\
                  <h5>\
                      Disney góp 5 triệu USD để phục dựng lại Nhà thờ Đức Bà Paris sau vụ cháy lớn.\
                  </h5>\
              </a>\
              <p>\
                  Tập đoàn giải trí lớn nhất nhì thế giới góp sức vào công cuộc phục dựng nhà thờ..\
              </p>\
          </div>\
          <div class='post-meta'>\
              <p>\
                  <a href='#' class='post-author'>\
                      Lưu Bảo Minh\
                  </a>\
                  lúc\
                  <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
              </p>\
          </div>\
      </div>"
            },
            {
                tit: "Violet Evergarden sẽ có dự án anime mới vào tháng 9 năm nay",
                content: "<div class='single-post'>\
          <div class='post-thumbnail'>\
              <img src='../img/violet.jpg'>\
          </div>\
          <div class='post-content'>\
              <a href='posts/film/violet.html' class='headline'>\
                  <h5>\
                          Violet Evergarden sẽ có dự án anime mới được ra rạp từ ngày 6 dến 19 tháng 9 năm 2019.\
                  </h5>\
              </a>\
              <p>\Violet Evergarden anime đình đám sẽ ra rạp trong thời gian tới!\
              </p>\
          </div>\
          <div class='post-meta'>\
              <p>\
                  <a href='#' class='post-author'>\
                      Lưu Bảo Minh\
                  </a>\
                  lúc\
                  <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
              </p>\
          </div>\
      </div>"
            },
            {
                tit: "Vừa mới ra mắt, MV của Mr.Siro đã lọt top trending với chuyện tình vô cùng lãng mạn",
                content: "<div class='single-post'>\
          <div class='post-thumbnail'>\
              <img src='../img/siropa_1by_1.jpg'>\
          </div>\
          <div class='post-content'>\
              <a href='posts/music/mrsiro.html' class='headline'>\
                  <h5>\
                      Vừa mới ra mắt, MV của Mr. Siro đã lọt top trending...\
                  </h5>\
              </a>\
              <p>\
                  Với ca từ và giai điệu da diết, nội dung MV là câu chuyện tình yêu cảm động..\
              </p>\
          </div>\
          <div class='post-meta'>\
              <p>\
                  <a href='#' class='post-author'>\
                      Lưu Bảo Minh\
                  </a>\
                  lúc\
                  <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
              </p>\
          </div>\
      </div>"
            },
            {
                tit: "Sơn Tùng M-TP nghệ sĩ Vpop duy nhất sở hữu cùng lúc 3 MV view khủng này!",
                content: "<div class='single-post'>\
          <div class='post-thumbnail'>\
              <img src='../img/sontung.jpg'>\
          </div>\
          <div class='post-content'>\
              <a href='posts/music/sontung.html' class='headline'>\
                  <h5>\
                      Sơn Tùng M-TP trở thành nghệ sĩ Vpop duy nhất sở hữu cùng lúc 3 MV cán mốc view khủng này!\
                  </h5>\
              </a>\
              <p>\
                  Việc MV này cán mốc 150 triệu view trên Youtube sau gần 3 năm ra mắt ...\
              </p>\
          </div>\
          <div class='post-meta'>\
              <p>\
                  <a href='#' class='post-author'>\
                      Lưu Bảo Minh\
                  </a>\
                  lúc\
                  <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
              </p>\
          </div>\
      </div>"
            },
            {
                tit: "Ưng Hoàng Phúc: “Chục triệu view trên Youtube cũng không đủ trả lại số tiền tôi làm MV”",
                content: "<div class='single-post'>\
          <div class='post-thumbnail'>\
              <img src='../img/unghoangphuc.jpg'>\
          </div>\
          <div class='post-content'>\
              <a href='posts/music/unghoangphuc.html' class='headline'>\
                  <h5>\
                      Ưng Hoàng Phúc: “Chục triệu view trên Youtube cũng không đủ trả lại số tiền tôi làm MV”\
                  </h5>\
              </a>\
              <p>\'Chưa bao giờ tôi đặt nặng phải đạt bao nhiêu view để kiếm tiền từ Youtube'\
              </p>\
          </div>\
          <div class='post-meta'>\
              <p>\
                  <a href='#' class='post-author'>\
                      Lưu Bảo Minh\
                  </a>\
                  lúc\
                  <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
              </p>\
          </div>\
      </div>"
            }]
        for (var i = 0; i < dict.length; i++) {
            if (dict[i].tit.includes(txt)) {
                result += dict[i].content;
            }
        }
    }
    else {
        // This is a post
        var dict =
            [{
                tit: "Mê mẩn ngắm một góc Huế đẹp quá đỗi dịu dàng như một nàng thơ",
                content: "<div class='single-post'>\
    <div class='post-thumbnail'>\
        <img src='../../../img/nangtho1.jpg'>\
    </div>\
    <div class='post-content'>\
        <a href='../explore/nangtho.html' class='headline'>\
            <h5>\
                Mê mẫn ngắm một góc Huế đẹp quá nỗi dịu dàng như một nàng thơ\
            </h5>\
        </a>\
        <p>\
            'Mọi người cứ bảo đến Huế buồn, tẻ nhạt, không có gì chơi nhưng...'\
        </p>\
    </div>\
    <div class='post-meta'>\
        <p>\
            <a href='#' class='post-author'>\
                ABC\
            </a>\
            lúc\
            <a href='#' class='post-date'>\20 - 4 - 2019, 14:00 pm</a>\
        </p>\
    </div>\
</div>"
            },
            {
                tit: "Ngắm trọn Đà Lạt thơ mộng sáng sớm của chàng trai 9X Sài Gòn",
                content: "<div class='single-post'>\
    <div class='post-thumbnail'>\
        <img src='../../../img/khoi1.jpg'>\
    </div>\
    <div class='post-content'>\
        <a href='../explore/dalat.html' class='headline'>\
            <h5>\
                Ngắm trọn Đà Lạt thơ mộng sáng sớm của chàng trai trẻ 9X SG\
            </h5>\
        </a>\
        <p>\
            Nhìn toàn cảnh Đà Lạt tại những tọa độ vàng không phải ai cũng biết...\
        </p>\
    </div>\
    <div class='post-meta'>\
        <p>\
            <a href='#' class='post-author'>\
                Lưu Bảo Minh\
            </a>\
            lúc\
            <a href='#' class='post-date'>\
                20 - 4 - 2019, 8:00 am\
            </a>\
        </p>\
    </div>\
</div>"
            },
            {
                tit: "Phát hiện thêm hệ thống hang ngầm sâu trên 90m tại Sơn Đoòng",
                content: "<div class='single-post'>\
    <div class='post-thumbnail'>\
        <img src='../../../img/sondoong1.jpg'>\
    </div>\
    <div class='post-content'>\
        <a href='../explore/sondoong.html' class='headline'>\
            <h5>\
                Các chuyên gia phát hiện thêm hệ thống hang ngầm sâu trên 90m tại Sơn Đoòng\
            </h5>\
        </a>\
        <p>\
            Các chuyên gia Hiệp hội hang động Hoàng gia Anh đã công bố qua ...\
        </p>\
    </div>\
    <div class='post-meta'>\
        <p>\
            <a href='#' class='post-author'>\
                Lưu Bảo Minh\
            </a>\
            lúc\
            <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
        </p>\
    </div>\
</div>"
            },
            {
                tit: "7 phim của Vũ trụ Marvel cần xem lại trước ‘Avengers: Endgame’",
                content: "<div class='single-post'>\
    <div class='post-thumbnail'>\
        <img src='../../../img/ironman2008.jpg'>\
    </div>\
    <div class='post-content'>\
        <a href='../film/marvel.html' class='headline'>\
            <h5>7 Phim của vũ trụ Marvel cần xem lại trước khi xem 'Avenger : Endgame'\
            </h5>\
        </a>\
        <p>\
            MCU sắp sửa tung ra tác phẩm thứ 22 của loạt phim về siêu anh hùng...\
        </p>\
    </div>\
    <div class='post-meta'>\
        <p>\
            <a href='#' class='post-author'>\
                Lưu Bảo Minh\
            </a>\
            lúc\
            <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
        </p>\
    </div>\
</div>"
            },
            {
                tit: "Disney góp 5 triệu USD phục dựng Nhà thờ Đức Bà Paris",
                content: "<div class='single-post'>\
    <div class='post-thumbnail'>\
        <img src='../../../img/nhathoducba_03.jpg'>\
    </div>\
    <div class='post-content'>\
        <a href='../film/nhathoducba.html' class='headline'>\
            <h5>\
                Disney góp 5 triệu USD để phục dựng lại Nhà thờ Đức Bà Paris sau vụ cháy lớn.\
            </h5>\
        </a>\
        <p>\
            Tập đoàn giải trí lớn nhất nhì thế giới góp sức vào công cuộc phục dựng nhà thờ..\
        </p>\
    </div>\
    <div class='post-meta'>\
        <p>\
            <a href='#' class='post-author'>\
                Lưu Bảo Minh\
            </a>\
            lúc\
            <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
        </p>\
    </div>\
</div>"
            },
            {
                tit: "Violet Evergarden sẽ có dự án anime mới vào tháng 9 năm nay",
                content: "<div class='single-post'>\
    <div class='post-thumbnail'>\
        <img src='../../../img/violet.jpg'>\
    </div>\
    <div class='post-content'>\
        <a href='../film/violet.html' class='headline'>\
            <h5>\
                Violet Evergarden sẽ có dự án anime mới được ra rạp từ ngày 6 dến 19 tháng 9 năm 2019.\
            </h5>\
        </a>\
        <p>\Violet Evergarden anime đình đám sẽ ra rạp trong thời gian tới!\
        </p>\
    </div>\
    <div class='post-meta'>\
        <p>\
            <a href='#' class='post-author'>\
                Lưu Bảo Minh\
            </a>\
            lúc\
            <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
        </p>\
    </div>\
</div>"
            },
            {
                tit: "Vừa mới ra mắt, MV của Mr.Siro đã lọt top trending với chuyện tình vô cùng lãng mạn",
                content: "<div class='single-post'>\
    <div class='post-thumbnail'>\
        <img src='../../../img/siropa_1by_1.jpg'>\
    </div>\
    <div class='post-content'>\
        <a href='../music/mrsiro.html' class='headline'>\
            <h5>\
                Vừa mới ra mắt, MV của Mr. Siro đã lọt top trending...\
            </h5>\
        </a>\
        <p>\
            Với ca từ và giai điệu da diết, nội dung MV là câu chuyện tình yêu cảm động..\
        </p>\
    </div>\
    <div class='post-meta'>\
        <p>\
            <a href='#' class='post-author'>\
                Lưu Bảo Minh\
            </a>\
            lúc\
            <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
        </p>\
    </div>\
</div>"
            },
            {
                tit: "Sơn Tùng M-TP nghệ sĩ Vpop duy nhất sở hữu cùng lúc 3 MV view khủng này!",
                content: "<div class='single-post'>\
    <div class='post-thumbnail'>\
        <img src='../../../img/sontung.jpg'>\
    </div>\
    <div class='post-content'>\
        <a href='../music/sontung.html' class='headline'>\
            <h5>\
                Sơn Tùng M-TP trở thành nghệ sĩ Vpop duy nhất sở hữu cùng lúc 3 MV cán mốc view khủng này!\
            </h5>\
        </a>\
        <p>\
            Việc MV này cán mốc 150 triệu view trên Youtube sau gần 3 năm ra mắt ...\
        </p>\
    </div>\
    <div class='post-meta'>\
        <p>\
            <a href='#' class='post-author'>\
                Lưu Bảo Minh\
            </a>\
            lúc\
            <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
        </p>\
    </div>\
</div>"
            },
            {
                tit: "Ưng Hoàng Phúc: “Chục triệu view trên Youtube cũng không đủ trả lại số tiền tôi làm MV”",
                content: "<div class='single-post'>\
    <div class='post-thumbnail'>\
        <img src='../../../img/unghoangphuc.jpg'>\
    </div>\
    <div class='post-content'>\
        <a href='../music/unghoangphuc.html' class='headline'>\
            <h5>\
                Ưng Hoàng Phúc: “Chục triệu view trên Youtube cũng không đủ trả lại số tiền tôi làm MV”\
            </h5>\
        </a>\
        <p>\'Chưa bao giờ tôi đặt nặng phải đạt bao nhiêu view để kiếm tiền từ Youtube'\
        </p>\
    </div>\
    <div class='post-meta'>\
        <p>\
            <a href='#' class='post-author'>\
                Lưu Bảo Minh\
            </a>\
            lúc\
            <a href='#' class='post-date'>\15 - 5 - 2019, 10:00 am</a>\
        </p>\
    </div>\
</div>"
            }]
        for (var i = 0; i < dict.length; i++) {
            if (dict[i].tit.includes(txt)) {
                result += dict[i].content;
            }
        }
    }

    $(".row.justify-content-center .col-12.col-lg-8").hide();
    $(".row.justify-content-center .col-12.col-lg-8").html(result);
    $(".row.justify-content-center .col-12.col-lg-8 div").addClass("shrink");
    $(".row.justify-content-center .col-12.col-lg-8").show(1000);
}
$(document).ready(function () {
    setInterval(clock, 1000);
    switch_signup_login();
    $("#modal_signup input").change(validate)
    $("#modal_signup .modal-footer button").click(function () {
        if (validate()) {
            // Get all input val
            var gmail = $("#modal_signup #gmail").val();
            var pw = $("#modal_signup #pw").val();
            var nick_name = $("#modal_signup #nick_name").val();
            var dob = $("#modal_signup #dob").val();
            var cate = [];
            $.each($("#modal_signup input[name='cate']:checked"), function () {
                cate.push($(this).val());//auto cate.join(", ")
            });
            // Save in local storage
            localStorage.setItem("gmail", gmail);
            localStorage.setItem("pw", pw);
            localStorage.setItem("nick_name", nick_name);
            localStorage.setItem("dob", dob);
            localStorage.setItem("cate", cate);
        }
        else {
            alert("Phai nhap form hop le!");
        }
    })
    $("#modal_login .modal-footer button").click(function () {
        // Get value
        var gmail = $("#login_gmail").val();
        var pw = $("#login_pw").val();
        //Validate
        var real_gmail = localStorage.getItem("gmail");
        var real_pw = localStorage.getItem("pw");

        if (real_gmail == gmail && real_pw == pw) {
            switch_info_logout();
        }
        else {
            alert("Dang nhap that bai!");
        }
    })
    $("#go").click(seek)
});


  var container = document.querySelector(".container");
  var text = document.querySelector(".text");

  // Kiểm tra chiều cao của phần tử con và số dòng
  var lineHeight = parseInt(getComputedStyle(text).lineHeight);
  var maxHeight = parseInt(getComputedStyle(container).height);

  if (text.clientHeight > maxHeight) {
    // Vượt quá 2 dòng, cắt văn bản
    var numLines = Math.floor(maxHeight / lineHeight);
    var textContent = text.textContent.trim();
    var splitIndex = textContent.indexOf("\n", numLines * 20); // Assuming 20 characters per line

    if (splitIndex > -1) {
      text.textContent = textContent.substring(0, splitIndex) + " ...";
    }
  }
<td>
                                                    <img src="images\Hình trang tin tức\z-fold.jpg" alt="twbs"
                                                        width="60" height="60"
                                                        class="rounded-circle flex-shrink-0 pic_tictuc">
                                                </td>
                                                <td class="td_p">
                                                    <p class="p_tintuc text-truncate" style="display: inline;">
                                                        Samsung Galaxy Fold - chiêu bài tiếp thị hay thực sự là con bài
                                                        thay đổi cuộc chơi?</p>
                                                </td>


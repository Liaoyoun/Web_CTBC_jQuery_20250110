// 當網頁載入完畢準備完成後再直行箭頭涵式
$(document).ready(() => {
    // 點擊事件：點下任一個 .slider 類別 active
    $("slider").click(function () {
        // 刪除全部的 .slider 類別 active
        $(".slider").removeClass("active");
        // 添加點下去 .slider 類別 avtive
        $(this).addClass("active");
    });
});
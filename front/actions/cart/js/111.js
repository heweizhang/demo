/**
 * Created by 阿坤 on 2017/12/10 0010.
 */
$('#J_SelectAll1 .J_CheckBoxShop').on("click", function () {
    console.log($(this).prop('checked'))
    // $('.J_SelectAll input[class=J_CheckBoxShop]').prop('checked', $(this).prop('checked') == true)
    $('.J_CheckBoxShop').prop('checked', $(this).prop('checked') == true)
    $(".J_CheckBoxItem").prop('checked', $(this).prop('checked') == true)
})
$('#J_SelectAll2 .J_CheckBoxShop').on("click", function () {
    console.log($(this).prop('checked'))
    // $('.J_SelectAll input[class=J_CheckBoxShop]').prop('checked', $(this).prop('checked') == true)
    $('.J_CheckBoxShop').prop('checked', $(this).prop('checked') == true)
    $(".J_CheckBoxItem").prop('checked', $(this).prop('checked') == true)
})
$(".shop-info .cart-checkbox .J_CheckBoxShop").on("click", function () {
    $(this).parents('.J_ItemHead').next().find('input[type=checkbox]').prop('checked', $(this).prop('checked') == true)

        $('#J_SelectAll1 .J_CheckBoxShop').prop('checked', $('.J_CheckBoxItem:checked').length == $('.J_CheckBoxItem').length)
        $('#J_SelectAll2 .J_CheckBoxShop').prop('checked', $('.J_CheckBoxItem:checked').length == $('.J_CheckBoxItem').length)

})
$('.J_CheckBoxItem').on('click',function () {
    console.log($(this).parents(".J_Order").find(".J_CheckBoxShop"));
    $(this).parents("J_Order").prop('checked',$(this).parents('.J_ItemBody').siblings().find("input[type=checkbox]").length ==$(this).parents('.J_ItemBody').siblings().find("input[checked=true]").length)
})
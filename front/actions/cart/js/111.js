/**
 * Created by 阿坤 on 2017/12/10 0010.
 *
 */
$('#J_SelectAll1 .J_CheckBoxShop,#J_SelectAll2 .J_CheckBoxShop').on("click", function () {
    console.log($(this).prop('checked'));
    // $('.J_SelectAll input[class=J_CheckBoxShop]').prop('checked', $(this).prop('checked') == true)
    $('.J_CheckBoxShop,.J_CheckBoxItem').prop('checked', $(this).prop('checked') === true);
    calc();
});
$(".shop-info .cart-checkbox .J_CheckBoxShop").on("click", function () {
    $(this).parents('.J_ItemHead').next().find('input[type=checkbox]').prop('checked', $(this).prop('checked') === true);
    checkAllItemChecked();
    calc();

});
$('.J_CheckBoxItem').on('click', function () {
    console.log($(this).parents(".J_Order").find(".J_CheckBoxShop"));
    var $container = $(this).parents('.order-content');
    $(this).parents(".J_Order").find(".J_CheckBoxShop").prop('checked', $container.find('.J_CheckBoxItem:checked').length === $container.find('.J_CheckBoxItem').length);
    checkAllItemChecked();
    calc();
});
function checkAllItemChecked() {
    $('#J_SelectAll1 .J_CheckBoxShop,#J_SelectAll2 .J_CheckBoxShop').prop('checked', $('.J_CheckBoxItem:checked').length === $('.J_CheckBoxItem').length);
}

function calc() {
    var sum = 0;
    var itemSum = 0;
    $('.J_CheckBoxItem:checked').each(function (index, item) {
        console.log($(item).parents('.item-content').find('.J_ItemSum').html().replace('￥', ''));
        sum += parseFloat($(item).parents('.item-content').find('.J_ItemSum').html().replace('￥', ''));
        itemSum += parseInt($(item).parents('.item-content').find('.J_ItemAmount').val());
    });
    $('#J_Total').html(sum.toFixed(2));
    $('#J_SelectedItemsCount').html(itemSum);

}
$('.J_Plus').on('click', function () {
    $(this).siblings('.J_Minus').removeClass('no-minus');
    var num = parseInt($(this).prev().val()) + 1;
    $(this).prev().val(num).trigger('change');
    var sum = num * parseFloat($(this).parents('.item-content').find('.J_Price').html().replace('￥', ''))
    $(this).parents('.item-content').find('.J_ItemSum').html('￥' + sum.toFixed(2));
    calc();
})
$('.J_Minus').on('click', function () {
    var num = parseInt($(this).siblings('.J_ItemAmount').val()) - 1;
    if (num == 0) {
        return;
    }
    if (num == 1) {
        $(this).addClass('no-minus');
    }
    $(this).next().val(num).trigger('change');
    var sum = num * parseFloat($(this).parents('.item-content').find('.J_Price').html().replace('￥', ''))
    $(this).parents('.item-content').find('.J_ItemSum').html('￥' + sum.toFixed(2));
    calc();

})

$('.J_ItemAmount').on('input', function () {
    console.log(123)
    var sum = $(this).val() * parseFloat($(this).parents('.item-content').find('.J_Price').html().replace('￥', ''))
    $(this).parents('.item-content').find('.J_ItemSum').html('￥' + sum.toFixed(2));
    calc();
})
$('.J_Del').on('click', function () {
    console.log($(this).parents('.order-content').find('.J_ItemSum'))
    if ($(this).parents('.order-content').find('.J_ItemSum').length == 1) {
        $(this).parents('.J_Order').parent().remove();
    } else
        $(this).parents('.J_ItemBody').remove();

    calc();
})

$('div[id*=J_SelectAll]');//1，2
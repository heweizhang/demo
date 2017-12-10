$(function () {
    var selectedItemNumbers = -1;// 已选中的标识，配合flag一起使用
    var flag = 0;// 标识，防止多次计算总价，造成不必要的遍历及性能消耗

    // 所有商品 全选/取消全选 按钮
    var $selectAllBox = $('#J_SelectAll1,#J_SelectAll2').on('click', function () {
        selectedItemNumbers = $items.length;
        var checked = $(this).find('input[type=checkbox].J_CheckBoxShop').prop('checked');
        $selectAllBox.prop('checked', checked);// 所有商品全选
        $items.prop('checked', checked).trigger('change');// 触发所有商品全选
    }).find('input[type=checkbox].J_CheckBoxShop');

    // 店铺 全选/取消全选 事件
    $('.J_CheckBoxShop').on('change', function () {
        var $this = $(this);
        var shopName = $.trim($this.parent().siblings('.J_MakePoint').text());
        if (!shopName) return;

        var $items = $this.parents('.shop').siblings('.order-content').find('.J_CheckBoxItem');
        selectedItemNumbers === -1 && (selectedItemNumbers = $items.length);

        // 设置该店铺下的所有商品都选中，并手动触发事件
        $items.prop('checked', $this.prop('checked')).trigger('change');
    });

    // 商品 选中/取消选中 事件
    var $items = $('.J_CheckBoxItem').on('change', function () {
        var $this = $(this);

        // 判断店铺的商品是否全选
        var $content = $this.parents('.order-content');
        var selectedAll = $content.find('.J_CheckBoxItem').length === $content.find('.J_CheckBoxItem:checked').length;
        $content.siblings('.shop').find('input[type=checkbox].J_CheckBoxShop').prop('checked', selectedAll);

        calcSum(selectedItemNumbers === -1);
    });

    $('.J_Plus').on('click', function () {// 商品数量修改 - 加一
        var $input = $(this).siblings('input');
        $input.val(parseInt($input.val()) + 1).siblings('.J_Minus').removeClass('no-minus');

        // 重新计算总价
        calcSum(true);
    }).siblings('.J_Minus').on('click', function () { // 商品数量修改 - 减一
        var $input = $(this).siblings('input');
        // 判断如果已经到一了，不往下继续执行
        if ($input.siblings('.no-minus').length) return;

        var number = parseInt($input.val()) - 1;
        $input.val(number);
        // 判断到一了，不显示减一的按钮
        number === 1 && $input.siblings('.J_Minus').addClass('no-minus');

        calcSum(true);// 重新计算总价
    });

    $('.J_Del').on('click', function () {// 删除商品
        var $itemBody = $(this).parents('.item-holder');// 先缓存商品元素，不缓存的换，下一行代码无法查询到店铺
        var $shop = $itemBody.parents('[id^=J_OrderHolder_s_]');// 根据商品元素查找店铺主体
        $itemBody.remove();

        // 如果店铺下没有商品了，删除店铺
        $shop.find('.item-holder').length === 0 && $shop.remove();
        calcSum(true);// 重新计算总价
    });

    $('#J_Go').on('click', function () {// 点击结算
        var result = [];
        $('.J_CheckBoxItem:checked').map(function (index, item) {
            var $content = $(item).parents('.item-holder');
            var data = {
                title: $.trim($content.find('.item-title').text()),
                price: $content.find('.J_Price').text().match(/\d+\.?[\d]+/).shift(),
                number: $content.find('.J_ItemAmount').val()
            };
            data.sum = data.number * data.price;
            result.push(data);
        });
        alert('These are data submit to server:\r\n' + JSON.stringify(result, null, 4));
    });

    // 计算总价,calc标识直接计算，不管标识
    function calcSum(calc) {
        // 标识控制，全选的时候判断，防止重复进入此方法
        if (!calc && (++flag !== selectedItemNumbers)) return;
        console.log(new Date().getTime(), 'start calculating');

        // 计算商品数量及总价
        var itemSum = 0;
        var sum = 0;
        $('.J_CheckBoxItem:checked').parents('.item-content').each(function (index, item) {
            var $item = $(item);
            var price = $item.find('em.J_Price.price-now').text().match(/\d+\.?[\d]+/).shift();
            var number = parseInt($item.find('input.J_ItemAmount').val());
            var thisSum = price * number;
            $item.find('em.J_ItemSum.number').text('￥' + thisSum.toFixed(2));

            itemSum += number;
            sum += thisSum;
        });

        // 结算按钮是否可点击
        $('#J_Go')[itemSum > 0 ? 'removeClass' : 'addClass']('submit-btn-disabled');
        // 显示商品数量
        $('#J_SelectedItemsCount').text(itemSum);
        // 显示商品总价
        $('#J_Total').text(sum.toFixed(2));

        // 重置标识到初始状态
        selectedItemNumbers = -1;
        flag = 0;
    }
});
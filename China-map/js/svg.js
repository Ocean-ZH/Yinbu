
jQuery(document).ready(function ($) {
    parent_size();
    china_province_path_event();
    //svg_province的事件
    province_company_path_event();
    //postMessage_test
    // postMessage_test();
});
//postMessage_test
/* function postMessage_test() {
    var b = "b in svg.js"
    window.parent.postMessage(b, '*');
    window.addEventListener('message', function (event) {
        console.log(event.data);
        console.log(event);
    })
} */

//向父级传递宽高
function parent_size() {
    var size = window.parent.svg_size;
    var svg = document.querySelector('svg');
    var svgW = svg.width.baseVal.value;
    var svgH = svg.height.baseVal.value;
    var mapType = svg.getAttribute('maptype');
    // console.log(document.documentElement.clientHeight)
    size(svgW, svgH, mapType);
}

//设置svg的zoom
function svg_zoom(zoom) {
    if (zoom){
        var svg = document.querySelector('svg');
        svg.setAttribute('zoom', zoom);
    }
}

//svg_china的事件
function china_province_path_event() {
    var parent = window.parent;
    if($('.map-china')){
        $('.map-china .province-g').on('mouseenter', function (event) {
            // console.log(event);
            event.data = $(this).attr('path-mark');
            parent.svg_china_province_path_event(event);
        });

        $('.map-china .province-g').on('mouseleave', function (event) {
            // console.log(event);
            event.data = $(this).attr('path-mark');
            parent.svg_china_province_path_event(event);
        });

        $('.map-china .province-g').on('mousemove', function (event) {
            // console.log(event);
            event.data = $(this).attr('path-mark');
            parent.svg_china_province_path_event(event);
        });

        $('.map-china .province-g').on('click', function (event) {
            // console.log(event);
            event.data = $(this).attr('path-mark');
            parent.svg_china_province_path_event(event);
        });
    }
}

//svg_province的事件
function province_company_path_event() {
    var parent = window.parent;
    if ($('.map-province')) {
        $('.map-province .province-company').on('mouseenter', function (event) {
            var serial = '';
            serial = $(this).attr('company-mark') ? $(this).attr('company-mark') : $(this).attr('serial');
            var json = {
                index: $(this).index(),
                name: $(this).attr('company-name'),
                serial: serial,
            };
            event.data = json;
            parent.svg_province_company_event(event);
            // console.log(event)
        });

        $('.map-province .province-company').on('mouseleave', function (event) {
            // console.log(event);
            var serial = '';
            serial = $(this).attr('company-mark') ? $(this).attr('company-mark') : $(this).attr('serial');
            var json = {
                index: $(this).index(),
                name: $(this).attr('company-name'),
                serial: serial,
            };
            event.data = json;
            parent.svg_province_company_event(event);
        });

        $('.map-province .province-company').on('click', function (event) {
            // console.log(event);
            var serial = '';
            serial = $(this).attr('company-mark') ? $(this).attr('company-mark') : $(this).attr('serial');
            var json = {
                index: $(this).index(),
                name: $(this).attr('company-name'),
                serial: serial,
            };
            event.data = json;
            parent.svg_province_company_event(event);
        });
    }
}

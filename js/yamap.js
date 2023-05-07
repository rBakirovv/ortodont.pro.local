if ($('#map').length > 0) {
    var target = true
    $(window).on('scroll', function () {
        if(target){
            target = false
            $.getScript("//api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-RU", function (data, textStatus, jqxhr) {
                var myMap;
    
                function init() {
                    myMap = new ymaps.Map("map", {
                        center: [55.73228597321402, 37.58816533729551],
                        zoom: 18,
                        controls: ['zoomControl']
                    });
                    var e = new ymaps.Placemark([55.732241088775105, 37.58878299028109], {
                        hintContent: "ул. Льва Толстого, 5/1"
                    }, {
                        iconImageHref: "/img/design/map-marker.svg",
                        iconImageSize: [75, 91],
                        iconImageOffset: [-40, -75]
                    });
                    myMap.geoObjects.add(e), $(window).resize(function () {
                        $(window).width() < 974 ? myMap.setCenter([55.73138090598603, 37.58879297420498]) : myMap.setCenter([55.73228597321402, 37.58816533729551])
                    }), $(document).ready(function () {
                        $(window).width() < 974 ? myMap.setCenter([55.73138090598603, 37.58879297420498]) : myMap.setCenter([55.73228597321402, 37.58816533729551])
                    })
                }
                ymaps.ready(init);
            });
        }
    })
}
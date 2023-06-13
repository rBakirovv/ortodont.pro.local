if ($('#map').length > 0) {
    var target = true
    $(window).on('scroll', function () {

        let mapInfo = [{
                title: "ул. Льва Толстого, 5/1",
                headTitle: "Клиника на Парке Культуры",
                underground: "Парк Культуры",
                adress: "г. Москва, Проспект Мира 53с1",
                color: "red",
                position: [55.732241088775105, 37.58878299028109],
            },
            {
                title: "ул. Льва Толстого, 6/1",
                headTitle: "Клиника на Парке Культуры",
                underground: "Парк Культуры",
                adress: "г. Москва, Хорошёвское шоссе, 48",
                color: "orange",
                position: [55.731663, 37.587898],
            }
        ]

        if (target) {
            target = false
            $.getScript("//api-maps.yandex.ru/2.1/?load=package.standard&lang=ru-RU", function (data, textStatus, jqxhr) {

                function init() {
                    const myMap = new ymaps.Map('map', {
                        center: [55.73228597321402, 37.58816533729551],
                        zoom: 18,
                        controls: ['zoomControl']
                    });

                    const mapAccordionsList = document.querySelector(".map-accordions-list");
                    const template = document.querySelector('.map-template');

                    mapInfo.map((mapItem) => {
                        const cloneAccordion = template.content.querySelector('.accordion-item').cloneNode(true);

                        const mapAddress = cloneAccordion.querySelector("#map-address");
                        const mapMetro = cloneAccordion.querySelector("#map-metro");
                        const accordionHeadTitle = cloneAccordion.querySelector(".accordion-head-address");

                        mapAddress.textContent = mapItem.adress;
                        mapMetro.textContent = mapItem.underground;
                        accordionHeadTitle.textContent = mapItem.headTitle;
                        mapMetro.classList.add(`map-panel__branch-metro_${mapItem.color}`);

                        mapAccordionsList.appendChild(cloneAccordion);
                    })

                    const accordionsHeads = mapAccordionsList.querySelectorAll(".accordion-head");

                    accordionsHeads[0].parentNode.classList.add("accordion-item_active");

                    accordionsHeads.forEach((accordionHead) => {
                        accordionHead.addEventListener("click", (e) => {
                            accordionsHeads.forEach((item) => {
                                item.parentNode.classList.remove("accordion-item_active");
                            })

                            accordionHead.parentNode.classList.toggle("accordion-item_active");

                            updateInfo([...accordionsHeads].indexOf(e.target.closest('.accordion-head')));
                            updateMarker([...accordionsHeads].indexOf(e.target.closest('.accordion-head')));
                        })
                    })

                    myMap.behaviors.disable("scrollZoom");

                    let marker = '/img/design/map-marker.svg';

                    let updateInfo = (ind) => {
                        accordionsHeads.forEach((accordionHead, index) => {
                            if (index !== ind) {
                                accordionHead.parentNode.classList.remove("accordion-item_active");
                            }
                        })

                        accordionsHeads[ind].parentNode.classList.add("accordion-item_active");
                    }

                    let updateMarker = (ind) => {
                        myMap.geoObjects.removeAll();

                        mapInfo.map((elemNew, indexNew) => {
                            if (ind == indexNew) {
                                activeMarker = `/img/design/map-marker-active.svg`;
                            } else {
                                activeMarker = marker;
                            }

                            myPlacemark = new ymaps.Placemark(elemNew.position, {}, {
                                iconLayout: 'default#image',
                                iconImageHref: activeMarker,
                                iconImageSize: [75, 91],
                                iconImageOffset: [-40, -75]
                            });
                            //myMap.geoObjects.add(myPlacemark);

                            myMap.geoObjects.add(myPlacemark), $(window).resize(function () {
                                $(window).width() < 974 ? myMap.setCenter([55.73068190598603, 37.58849297420498]) : myMap.setCenter([55.73228597321402, 37.58816533729551])
                            }), $(document).ready(function () {
                                $(window).width() < 974 ? myMap.setCenter([55.73068190598603, 37.58849297420498]) : myMap.setCenter([55.73228597321402, 37.58816533729551])
                            })

                            myPlacemark.events.add('click', function () {
                                updateInfo(indexNew);
                                updateMarker(indexNew);
                            });
                        })
                    }

                    mapInfo.map((elem, index) => {
                        if (index == 0) {
                            activeMarker = `/img/design/map-marker-active.svg`;
                            updateInfo(index);
                        } else {
                            activeMarker = marker;
                        }
                        myPlacemark = new ymaps.Placemark(elem.position, {}, {
                            iconLayout: 'default#image',
                            iconImageHref: activeMarker,
                            iconImageSize: [75, 91],
                            iconImageOffset: [-40, -75]
                        });
                        //myMap.geoObjects.add(myPlacemark);

                        myMap.geoObjects.add(myPlacemark), $(window).resize(function () {
                            $(window).width() < 974 ? myMap.setCenter([55.73068190598603, 37.58849297420498]) : myMap.setCenter([55.73228597321402, 37.58816533729551])
                        }), $(document).ready(function () {
                            $(window).width() < 974 ? myMap.setCenter([55.73068190598603, 37.58849297420498]) : myMap.setCenter([55.73228597321402, 37.58816533729551])
                        })

                        myPlacemark.events.add('click', function () {
                            updateInfo(index);
                            updateMarker(index);
                        });
                    })

                }

                ymaps.ready(init);
            });
        }
    })
}

/* 

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
                    var secondStreet = new ymaps.Placemark([55.731663, 37.587898], {
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

*/
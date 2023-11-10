ymaps.ready(init);
function init(){
 var myMap = new ymaps.Map("map",{center: [55.713527, 37.616638],zoom: 15});
 myMap.controls.add("zoomControl").add("typeSelector").add("mapTools");
 var myPlacemark = new ymaps.Placemark([55.713527, 37.616638]);
 myMap.geoObjects.add(myPlacemark);
}

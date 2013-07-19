$(document).ready(function(){
  Morris.Line({
    element: 'weathers_chart',
    data: $('#weathers_chart').data('weatherdata'),
    xkey: 'time',
    ykeys: ['temperatureMin','temperatureMax'],
    labels: ['Min Temp','Max Temp'],
    parseTime: true,
    lineColors: ['blue', 'red'],
    hideHover: true
    });
});
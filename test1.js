 
$(function () {
     var dataSet = [                                // AJAX request to server to get the feeds       
        { name: 'Male', y: 323},
        { name: 'Female', y: 126},
     ];

    var colorArray =  ['#20B2AA','white', '#A53DBF', '#B069C2', '#B68FBF', '#D0B8D6'];  // Better combination color, first 2 color is based on the test requirement

    $('#container').highcharts({
        chart: {
            backgroundColor: 'black',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Test 1 - Using Highcharts.js',
             style: {
                color: 'white',
                fontWeight: 'bold'
            }
        },
        tooltip: {                                          // Added for mouse tool tips
            pointFormat: '{point.y} ',
            percentageDecimals: 1
        },
        plotOptions: {
            pie: {
                colors: colorArray,
                allowPointSelect: true,
                innerSize: '60%',
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    connectorColor: 'white',
                    formatter: function () {
                        return '<span style="font-size: 25px; text-align:center;">' + this.point.name + 
                        '</span><br /> <span style="font-size: 25px; text-align:center;">' + this.y + ', ' + 
                        this.percentage.toFixed(0) +'%</span>';
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Gender',
            data: dataSet
        }]
    }, function (chart) {
        
        var total = 0; // get total of data
        for (var i = 0, len = this.series[0].yData.length; i < len; i++) {
            total += this.series[0].yData[i];
        }
        var textX = chart.plotLeft + (chart.plotWidth  * 0.5);
        var textY = chart.plotTop  + (chart.plotHeight * 0.5);

        var span = '<span id="pieInfo" style="position:absolute; text-align:center;">';
        span += '<span style="font-size: 52px; color: white">'+total+'</span>';
        span += '</span>';

        $("#showTotal").append(span);
        span = $('#pieInfo');
        span.css('left', textX + (span.width() * -0.5));
        span.css('top', textY + (span.height() * -0.5));
    });
});
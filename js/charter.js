google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Total Vehicles', 20],
        ['No of Active Vehicles', 60],
        ['No of Inactive Vehicles', 20]

    ]);

    var options = {
        legend: {
            position: 'right', alignment: 'center', textStyle: {
                fontSize: 12,
            }
        },

        pieSliceText: 'percentage',
        colors: ['#FFFEDD', '#FFC61E', '#66AA33'],
        hAxis: { showTextEvery: '10', textPosition: '20' },
        backgroundColor: '#FFFEFE',
        axes: {
            x: {
                10: { side: 'top' }
            }
        }

        // chartArea: { left: -20, top: 20, width: "100%", height: "60%" }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Total Vehicles", "No of Active Vehicles", "No of Inactive Vehicles"],
        datasets: [{
            backgroundColor: [
                '#c01', '#FFC61E', '#66AA33'
            ],
            data: [12, 19, 3]
        }]
    },

    options: {

        responsive: true,
        legend: {
            position: 'right',
            align: 'center',

            labels: {
                fontColor: "black",
                boxWidth: 15,
                padding: 15,
            },
        },
        // layout: {
        //     padding: {
        //         left: 0,
        //         right: 0,
        //         top: 0,
        //         bottom: 0
        //     },
        //     margin: {
        //         left: 50,
        //         right: 0,
        //         top: 0,
        //         bottom: 0
        //     }
        // }



    },


});


var ctx2 = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ["Total Vehicles", "No of Active Vehicles", "No of Inactive Vehicles"],
        datasets: [{
            backgroundColor: [
                '#c01', '#FFC61E', '#66AA33'
            ],
            data: [12, 19, 3]
        }]
    },

    options: {

        responsive: true,


        legend: {
            position: 'right',
            align: 'center',

            labels: {
                fontColor: "black",
                boxWidth: 15,
                padding: 15,


            },
            titleMarginBottom: 50,

        },
        // layout: {
        //     padding: {
        //         left: 0,
        //         right: 0,
        //         top: 0,
        //         bottom: 0
        //     },
        //     margin: {
        //         left: 50,
        //         right: 0,
        //         top: 0,
        //         bottom: 0
        //     }
        // }



    },


});
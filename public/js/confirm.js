$(document).ready(function () {
    $('#confirm_data').click(function () {
        $('#confirm_table').toggle()
        $.ajax({
            url: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv",
            dataType: "text",
            success: function (data) {
                var confirm_data = data.split(/\r?\n|\r/);
                var table_data = '<table class="table table-info">';
                for (var count = 0; count < 100; count++) {
                    var cell_data = confirm_data[count].split(",");
                    table_data += '<tr>';
                    for (var i = 1; i < 2; i++) {
                        if (count === 0) {
                            table_data += '<th class="bg-info" id="th-id">' + cell_data[1] + '</th>';
                            table_data += '<th class="bg-info" id="th-id">' + cell_data[cell_data.length - 1] + '</th>';

                        }
                        else {
                            table_data += '<td class="td-class">' + cell_data[1] + '</td>';
                            table_data += '<td class="td-class">' + cell_data[cell_data.length - 1] + '</td>';


                        }
                    }
                    table_data += '</tr>';
                }
                table_data += '</table>';
                $('#confirm_table').html(table_data);
            }
        });
    })

});





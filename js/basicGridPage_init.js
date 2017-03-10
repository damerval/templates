/**
 * Created by pdamerval on 3/3/2017.
 */

$(document).ready(function () {

  discoveriesAdapter = new $.jqx.dataAdapter(discoveriesSource);

  _basicGrid = $("#basicGrid").jqxGrid({
    source: discoveriesAdapter, columnsresize: true, columns: discoveriesColumns, theme: 'metro'
  });

  $.ajax("/require/dbStatus.php", {
    cache: false,
    success: function (data) {
      if (isJson(data)) {
        var result = JSON.parse(data); //expect single row with total tables in database
        var resultObj = result[0];
        $("#bgTestOutput").text("Database connection successful, total tables found = " + resultObj['total_tables']);
      }
    },
    error: function (jqXHR) {
      alert(jqXHR.responseText);
    }
  });
});
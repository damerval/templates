/**
 * Created by Papa on 3/13/2017.
 */

$(document).ready(function () {

  _loadButton.on('click', function () {

    discoveriesSource.url = "results.json";
    _basicGrid.jqxGrid('updatebounddata');

  });

});
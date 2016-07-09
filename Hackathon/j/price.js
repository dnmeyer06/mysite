$(document).ready(function () {
    // cache the inputs and bind the events
    var $inputs = $('input[type="checkbox"]')
    $inputs.on('change', function () {
        var sum = 0;
        $inputs.each(function() {
        // iterate and add it to sum only if checked
           if(this.checked)
               sum += parseInt(this.value);
        });
        $("#price").val(sum);
    });
});
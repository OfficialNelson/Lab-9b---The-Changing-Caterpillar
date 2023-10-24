$(function() {
    $('#restore').hide();

    $("#metamorphose").on('click', function() {
        
        if ($('#butterfly-facts').is(":hidden")) {
            // Step 3a: Change the heading to be about butterflies
            $('h1').text('The Butterfly');

            // Step 3b: Change the paragraph to be about butterflies
            $('#p1').html('This is a <strong>butterfly</strong> in its natural habitat.');

            // Step 3c: Change the image to a butterfly
            $('#caterpillar-image').attr('src', 'https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png');

            // Step 3d: Change the color of the heading and paragraph to match the butterfly
            $('h1, #p1').css('color', '#FF4500'); 

            // Step 3e: Show the butterfly-facts div 
            $('#butterfly-facts').show();

            // Step 3f: Modify the link and link text for the Caterpillar hyperlink
            $('#caterpillar-link')
                .attr('href', 'https://en.wikipedia.org/wiki/Butterfly')
                .text('Butterfly');

            // Step 3g: Add the class 'result' to the newly created paragraph
            $('#butterfly p:last-child').addClass('result');

            // Hide the caterpillar
            $('#caterpillar').hide();

            // Show the "Restore" button and hide the "Metamorphose" button
            $("#restore").show();
            $(this).hide();
        }
    });

    $("#restore").on('click', function() {
        // Reverse the transformation
        $('#caterpillar').show();
        $('#butterfly').hide();

        // Restore the original heading text
        $('h1').text('The Caterpillar');

        // Restore the original paragraph text
        $('#p1').html('This is a <strong>caterpillar</strong> in its natural habitat.');

        // Restore the original image
        $('#caterpillar-image').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Monarch_caterpillar_on_swan_plant_branchlet.jpg/640px-Monarch_caterpillar_on_swan_plant_branchlet.jpg');

        // Restore the original link and link text
        $('#caterpillar-link')
            .attr('href', 'https://en.wikipedia.org/wiki/Caterpillar')
            .text('Caterpillar');

        // Restore the original color
        $('h1, #p1').css('color', '');

        // Hide the butterfly-facts div
        $('#butterfly-facts').hide();

        // Show the "Metamorphose" button and hide the "Restore" button
        $("#metamorphose").show();
        $(this).hide();
    });
});

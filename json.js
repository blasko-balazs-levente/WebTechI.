$(document).ready(function() {
    // Gomb kattintás eseménykezelője
    $('button[name="json"]').click(function() {
        var teacherId = $(this).attr('id'); // A gomb id-je alapján kiválasztjuk a tanárt
        alert(teacherId);

        $.ajax({
            url: 'courses.json', // JSON fájl elérési útja
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Sikeres AJAX kérés esetén

                // Tanár adatainak kiválasztása az ID alapján
                var course = data['Bass lessons']['courses'].find(function(item) {
                    return item.Teacher === teacherId;
                });

                if (course) {
                    // Adatok megjelenítése
                    var teachers = course['Teacher'];
                    var days = course['Date']['Day'];
                    var times = course['Date']['Time'];
                    var location = course['Location']['Street'] + ', ' + course['Location']['City'] + ', ' + course['Location']['Postcode'];
                    var price = course['Price'];
                    var phoneNumber = course['PhoneNumber'];

                    // HTML létrehozása az adatokkal
                    var html = '<div class="course">';
                    html += '<h3>Teacher: ' + teachers + '</h3>';
                    html += '<p>Day: ' + days + '</p>';
                    html += '<p>Time: ' + times + '</p>';
                    html += '<p>Location: ' + location + '</p>';
                    html += '<p>Price: ' + price + '</p>';
                    html += '<p>Contact: ' + phoneNumber + '</p>';
                    html += '</div>';

                    // A tartalom beillesztése a containerbe
                    $('#courses-container').html(html);
                } else {
                    $('#courses-container').html('<p>Course not found.</p>');
                }
            },
            error: function(xhr, status, error) {
                // Hiba kezelése
                console.log('Hiba történt az AJAX kérés során: ' + error);
            }
        });
    });
});
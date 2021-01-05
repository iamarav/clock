const timeInterval = 1000;
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
let dateInstance, month, date, year,
    hours, minutes, seconds;
const getDigitalDate = ( dateObj ) => {
    month   = monthNames[dateObj.getMonth()];
    date    = String(dateObj.getDate()).padStart(2, '0');
    year    = dateObj.getFullYear();
    return month  + '\n'+ date  + ',' + year;
}
const getDigitalTime = ( timeObj ) => {
    hours   = String(timeObj.getHours()).padStart( 2, '0');
    minutes = String(timeObj.getMinutes()).padStart( 2, '0');
    seconds = String(timeObj.getSeconds()).padStart( 2, '0');
    return hours + " : " + minutes + " : " + seconds;
}
$( document ).ready(()=>{
    setInterval(()=>{
        dateInstance = new Date();
        // Digital Clock
        $( '#d-date' ).html(
            getDigitalDate( dateInstance )
        );
        $( '#d-time' ).html(
            getDigitalTime( dateInstance )
        );
        // Analogue Clock
        $( '#hour' ).css( 'transform', 'rotate('+dateInstance.getHours()*30+'deg)' )
        $( '#minute' ).css( 'transform', 'rotate('+dateInstance.getMinutes()*6+'deg)' )
        $( '#second' ).css( 'transform', 'rotate('+dateInstance.getSeconds()*6+'deg)' )
    }, timeInterval);
})

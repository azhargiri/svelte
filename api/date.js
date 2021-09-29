module.exports = (req, res) => {
  const date = new Date();
  const timezones = [
		'UTC',
		'Asia/Jakarta',
		'Asia/Makassar',
		'Asia/Jayapura',
		'Asia/Kuala_Lumpur',
		'Asia/Singapore',
		'Asia/Tokyo',
		'Asia/Riyadh',
		'Asia/Jerusalem',
  ];

	var dates = timezones.map((tz) => {
		return { 
			timezone: tz,
			date: changeTimezone(date, tz).toString() 
		}	
	});

	console.log(dates);

  res.status(200).send(JSON.stringify(dates));
};

// https://stackoverflow.com/questions/15141762/how-to-initialize-a-javascript-date-to-a-particular-time-zone
function changeTimezone(date, ianatz) {

  // suppose the date is 12:00 UTC
  var invdate = new Date(date.toLocaleString('en-US', {
    timeZone: ianatz
  }));

  // then invdate will be 07:00 in Toronto
  // and the diff is 5 hours
  var diff = date.getTime() - invdate.getTime();

  // so 12:00 in Toronto is 17:00 UTC
  return new Date(date.getTime() - diff); // needs to substract
}

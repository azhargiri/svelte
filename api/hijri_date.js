module.exports = (req, res) => {
	var date = req.date
	var locale = req.locale ?: 'en';
	var moment = require('moment-hijri')
	var m = moment(date)

	m.locale(local);

	var output = {
		year: m.iYear(),
		month: m.iMonth(),
		day: m.iDate(),
		day_of_year: m.iDayOfYear(),
		week: m.iWeek(),
		day_name: m.format('dddd')
	}

	res.status(200).send(JSON.stringify(output));
};

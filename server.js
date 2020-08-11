const path = require('path');
const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build')));

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build/index.html')));
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>
    console.log('Express server is running on localhost:', PORT)
);

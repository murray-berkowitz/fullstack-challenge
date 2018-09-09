const mongoose = require('mongoose')
const Schema = mongoose.Schema

//generated from json to mongoose schema package (I know can be defined more specifically :D )

const gameSchema = new Schema({
	deleted: {
		type: 'Boolean'
	},
	status: {
		type: 'String'
	},
	awayTeamFinal: {
		type: 'Number'
	},
	awayTeamDetails: {
		type: [
			'Mixed'
		]
	},
	homeTeamFinal: {
		type: 'Number'
	},
	homeTeamDetails: {
		type: [
			'Mixed'
		]
	},
	isPeriodOver: {
		type: 'String'
	},
	currentPeriod: {
		type: 'Number'
	},
	currentPeriodHalf: {
		type: 'String'
	},
	oddsAvailable: {
		type: 'Boolean'
	},
	createdAt: {
		type: 'Date'
	},
	modifiedAt: {
		type: 'Date'
	},
	feedId: {
		type: 'String'
	},
	awayTeam: {
		deleted: {
			type: 'Boolean'
		},
		teamColor: {
			type: 'String'
		},
		textColor: {
			type: 'String'
		},
		createdAt: {
			type: 'Date'
		},
		modifiedAt: {
			type: 'Date'
		},
		feedId: {
			type: 'String'
		},
		abbr: {
			type: 'String'
		},
		league: {
			type: 'String'
		},
		market: {
			type: 'String'
		},
		name: {
			type: 'String'
		},
		id: {
			type: 'String'
		}
	},
	dateTime: {
		type: 'Number'
	},
	homeTeam: {
		deleted: {
			type: 'Boolean'
		},
		teamColor: {
			type: 'String'
		},
		textColor: {
			type: 'String'
		},
		createdAt: {
			type: 'Date'
		},
		modifiedAt: {
			type: 'Date'
		},
		feedId: {
			type: 'String'
		},
		abbr: {
			type: 'String'
		},
		league: {
			type: 'String'
		},
		market: {
			type: 'String'
		},
		name: {
			type: 'String'
		},
		id: {
			type: 'String'
		}
	},
	league: {
		deleted: {
			type: 'Boolean'
		},
		createdAt: {
			type: 'Date'
		},
		modifiedAt: {
			type: 'Date'
		},
		feedId: {
			type: 'String'
		},
		alias: {
			type: 'String'
		},
		name: {
			type: 'String'
		},
		id: {
			type: 'String'
		}
	},
	id: {
		type: 'String'
    }
})


module.exports = gameSchema
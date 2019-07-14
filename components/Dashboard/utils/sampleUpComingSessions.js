const moment = require('moment');
const uuidv4 = require('uuid/v4');
const faker = require('faker');

export default {
    sessions: [
        {
            key: uuidv4(),
            datetime: moment().format('M/D/YYYY'),
            // datetime: "2/6/2019",
            sessions: [
                {
                    uuid: uuidv4(),
                    sessionStats: {
                        complete: Math.floor(Math.random() * 100),
                        overdue: Math.floor(Math.random() * 10),
                        practiceTests: Math.floor(Math.random() * 10),
                        sessions: Math.floor(Math.random() * 100),
                        numberOfSessions: 12,
                        sessionNumber: 10,
                        numberOfFlags: 3,
                        datetime: moment().format('M/D/YYYY @ 4:30 PM')
                    },
                    testStats: {
                        currentScore: Math.floor(Math.random() * (1510-1040)) + 1040,
                        initial: 1040,
                        target: 1510,
                    },
                    user: {
                        name: faker.name.firstName() + " " + faker.name.lastName(),
                        initials: 'JS',
                        email: faker.internet.email(),
                    }
                },
            ],
        },
        {
            key: uuidv4(),
            datetime: moment().add(1, 'd').format('M/D/YYYY'),
            sessions: [
            ],
        },
    ],

}
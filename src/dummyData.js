const dummyUsers = [
    {
        id: 1,
        name: "James",
        email: "james@test.com",
        password: "dummypassword",
        goal_distance: 10,
        goal_pace: 570,
        best_distance: 5,
        best_pace: 720
    },
    {
        id: 2,
        name: "Amy",
        email: "amy@test.com",
        password: "dummypassword",
        goal_distance: 6,
        goal_pace: 600,
        best_distance: 3.5,
        best_pace: 700
    },
    {
        id: 3,
        name: "Winston",
        email: "winston@test.com",
        password: "dummypassword",
        goal_distance: 4,
        goal_pace: 700,
        best_distance: 2.2,
        best_pace: 900
    }
]

const dummyRuns = [
    {
        id: 1,
        user_id: 1,
        distance: 3,
        date: '03/03/2021',
        time: 1800,
        note: 'Great run!'
    },
    {
        id: 2,
        user_id: 1,
        distance: 2,
        date: '03/05/2021',
        time: 1100,
        note: 'Great run, felt fast'
    },
    {
        id: 3,
        user_id: 2,
        distance: 2,
        date: '03/03/2021',
        time: 1200,
        note: 'Great run!'
    },
    {
        id: 4,
        user_id: 2,
        distance: 3,
        date: '03/05/2021',
        time: 1800,
        note: 'Great run!'
    },
    {
        id: 5,
        user_id: 3,
        distance: 3,
        date: '03/03/2021',
        time: 1800,
        note: 'Great run!'
    },
    {
        id: 6,
        user_id: 3,
        distance: 2,
        date: '03/05/2021',
        time: 1400,
        note: 'Great run!'
    },
]

export default { dummyUsers, dummyRuns };

import './style.css';
import { Calendar } from '@bryntum/calendar';

const calendar = new Calendar({

    appendTo : 'app',
    date : '2025-10-05',

    resources : [
        {
            id         : 1,
            name       : 'Default Calendar',
            eventColor : 'green'
        }
    ],
    events : [
        {
            id         : 1,
            name       : 'Meeting',
            startDate  : '2025-10-05T10:00:00',
            endDate    : '2025-10-05T11:00:00',
            resourceId : 1
        }
    ]
});

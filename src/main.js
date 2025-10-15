import { Calendar } from '@bryntum/calendar';
import './style.css';

const calendar = new Calendar({

  appendTo: 'app',
  date: '2026-07-01',

  resources: [
    {
      id: 1,
      name: 'Default Calendar',
      eventColor: 'green'
    }
  ],
  events: [
    {
      id: 1,
      name: 'Meeting',
      startDate: '2026-07-01T10:00:00',
      endDate: '2026-07-01T11:00:00',
      resourceId: 1
    }
  ]
});
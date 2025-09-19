import './style.css';
import { Calendar } from '@bryntum/calendar';

const calendar = new Calendar({

    appendTo : 'app',
    date : '2026-07-01',

    crudManager : {
        autoLoad : true,
        loadUrl  : '/api/load',
        syncUrl  : '/api/sync',
        autoSync : true,
    }
});

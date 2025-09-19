import './style.css';
import { Calendar } from '@bryntum/calendar';

const calendar = new Calendar({

    appendTo : 'app',
    date     : '2026-07-01',

    crudManager : {
        autoLoad : true,
        loadUrl  : '/api/load',
        syncUrl  : '/api/sync',
        autoSync : true,
    },

    sidebar : {
        items : {
            datePicker : {
                highlightSelectedWeek : true
            },
            eventFilter : false
        }
    },

        features : {
        eventEdit : {
            items : {
                location : {
                    type    : 'textfield',
                    name    : 'location',
                    label   : 'Location',
                    dataset : { eventType : 'Meeting' }
                }
            }
        }
    },

    tbar : {
        items : {
            // Description between the prev and next buttons
            viewDescription : {
                weight : 350
            },
            filterByName : {
                type                 : 'textfield',
                weight               : 650,
                icon                 : 'fa fa-filter',
                placeholder          : 'Find tasks by name',
                clearable            : true,
                keyStrokeChangeDelay : 100,
                triggers             : {
                    filter : {
                        align : 'start',
                        cls   : 'fa fa-filter'
                    }
                },

                // "up." means look in ownership tree. Will be found on the Calendar
                onChange : 'up.onNameFilterChange'
            },
            highlight : {
                type                 : 'textfield',
                weight               : 660,
                placeholder          : 'Highlight tasks',
                clearable            : true,
                keyStrokeChangeDelay : 100,
                triggers             : {
                    filter : {
                        align : 'start',
                        cls   : 'fa fa-search'
                    }
                },

                // "up." means look in ownership tree. Will be found on the Calendar
                onChange : 'up.onNameSearchChange'
            }
        }
    },

    onNameFilterChange({ value }) {
        // We filter using a RegExp, so quote significant characters
        value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // A filter with an id replaces any previous filter with that id.
        // Leave any other filters which may be in use in place.
        calendar.eventStore.filter({
            id       : 'eventNameFilter',
            filterBy : event => event.name.match(new RegExp(value, 'i'))
        });
    },

    onNameSearchChange({ value }) {
        value = value.toLowerCase();

        // Loop through all events in the store
        calendar.eventStore.forEach(task => {

            // The cls field is a DomClassList with add and remove methods
            if (value !== '' && task.name.toLowerCase().includes(value)) {
                task.cls.add('b-match');
            }
            else {
                task.cls.remove('b-match');
            }
        });

        // Schedule a refresh of the UI now that we have updated all event UI classes.
        calendar.refresh();

        calendar.element.classList[value.length > 0 ? 'add' : 'remove']('b-highlighting');
    }
});

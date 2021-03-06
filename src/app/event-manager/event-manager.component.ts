import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.css']
})
export class EventManagerComponent implements OnInit {

    events: any[];
    headerConfig: any;

    public constructor(
    ) { }

    ngOnInit(): void {
        this.events = [
            {
                "title": "All Day Event",
                "start": "2018-08-01"
            },
            {
                "title": "Long Event",
                "start": "2016-01-07",
                "end": "2018-08-10"
            },
            {
                "title": "Repeating Event",
                "start": "2018-08-09T16:00:00"
            },
            {
                "title": "Repeating Event",
                "start": "2018-08-16T16:00:00"
            },
            {
                "title": "Conference",
                "start": "2018-08-11",
                "end": "2018-08-13"
            }
        ];
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }


    handleEventClick(e:any) {
        //e.event = Selected event
        //e.jsEvent = Browser click event
        //e.view = Current view object
        console.log('Selected event: ' + e.event);
        console.log('Browser click event: ' + e.jsEvent);
        console.log('Current view object: ' + e.view);
    }

}

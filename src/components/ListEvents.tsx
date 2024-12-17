import { Event } from "@/CalendlyTypes";

export default function ListEvents(props: {events: Event[]}) {
  return <ol>
    {props.events.map(event => <li key={event.uri}>{event.start_time} - {event.end_time}</li>)}
  </ol>
}
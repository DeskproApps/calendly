import { Event } from "@/CalendlyTypes";
import { IDeskproClient, proxyFetch, useInitialisedDeskproAppClient } from "@deskpro/app-sdk";
import { useState } from "react";

async function getEventsForNumber(client: IDeskproClient, number: string): Promise<Event[]> {
    const fetch = await proxyFetch(client);
    const response = await fetch(
        "https://api.calendly.com/scheduled_events?invitee_email=" + number,
        {
            headers: {
                Authorization: `Basic __calendly_api_id+':'+calendly_api_secret.base64__`,
            },
        },
    );
    const data = (await response.json() as unknown as {collection: Event[]}).collection ?? [];
    
    return data;
}

export default function useEvents() {
    const [emailAddresses, setEmailAddresses] = useState<string[]>([]);
    const [events, setEvents] = useState<Event[]>([]);

    useInitialisedDeskproAppClient((client) => {
        Promise.all(emailAddresses.map(emailAddress => getEventsForNumber(client, emailAddress)))
            .then(results => results.flat())
            .then(setEvents);
    }, [emailAddresses, setEmailAddresses])

    return {
        setEmailAddresses,
        emailAddresses,
        events,
    } as const;
}
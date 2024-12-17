import {
  LoadingSpinner,
  useInitialisedDeskproAppClient,
} from "@deskpro/app-sdk";
import useEvents from "@/hooks/useEvents";
import ListEvents from "@/components/ListEvents";

export default function TicketSidebarApp() {
  const {
    setEmailAddresses,
    emailAddresses,
    events,
  } = useEvents();

  // Act on call data.
  useInitialisedDeskproAppClient((client) => {
    setEmailAddresses(client.context?.user.primaryEmailAddress);
  }, [setEmailAddresses])

  if (emailAddresses.length === 0) {
    return <LoadingSpinner />
  }

  return <ListEvents events={events} />;
};

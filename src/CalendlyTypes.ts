export type Event = {
  uri: string;
  name: string;
  meeting_notes_plain: string;
  meeting_notes_html: string;
  status: "active" | "canceled";
  start_time: string; // ISO 8601 formatted date string
  end_time: string; // ISO 8601 formatted date string
  event_type: string;
  location: {
    type: "physical" | "virtual";
    location: string;
    additional_info: string;
  };
  invitees_counter: {
    total: number;
    active: number;
    limit: number;
  };
  created_at: string; // ISO 8601 formatted date string
  updated_at: string; // ISO 8601 formatted date string
  event_memberships: {
    user: string;
    user_email: string;
    user_name: string;
  }[];
  event_guests: {
    email: string;
    created_at: string; // ISO 8601 formatted date string
    updated_at: string; // ISO 8601 formatted date string
  }[];
};

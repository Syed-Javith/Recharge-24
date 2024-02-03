export type EventSchema = {
  id: number;
  name: string; // Event Name
  category: Category;
  short_description?: string; // Short description
  description?: string; // Description
  image?: string; // Image
  registration_count?: string; // Registration count
  is_registered: boolean; // Is registered
};

export type EventInchargeSchema = {
  id: number;
  name: string;
  contact_number: number
}

export type EventDetailSchema = {
  id: number;
  incharges: EventInchargeSchema[];
  registration_count: number;
  is_registered: string; 
  event_registration: array; 
  name: string;
  short_description: string | null;
  description:	string | null;
  image: string;
  contact_mail: string;
  prize:	string | null;
  time_of_event:	string | null;
  duration: number;
  venue:	string | null;
  name_of_hosting_club:	string | null
  rules:	string;
  team_event:	boolean;
  team_min: number;
  team_max:	number;
  pay:	number;
  max_reg:	number;
  day:	number;
  category:	number;
  registration_end_date: string
}

export type Category = {
  id: number; // ID
  category_name: string; // Category name
  image?: string; // Image
  events_count?: number; // Number of events
};

type ProShow = {
  id: number;
  title: number;
  readOnly: true;
  name: string;
  maxLength: number;
  minLength: number;
  image: string; // Assuming $uri is a placeholder for a string representing a URI
  description: string;
  day: 1 | 2 | 3 | 4; // Assuming day is an enum with values 1, 2, 3, 4
  amount: number;
  discount_amount: number;
  combo: boolean;
  premium: boolean;
  is_registered: boolean;
  readOnly: true;
};

type UserProfileSchema = {
  email: string;
  first_name: string;
  last_name: string;
  profile_photo: string | null;
  mobile_number?: string | null;
  department?: string | null;
  college?: string | null;
  year?: number | null;
  qr_code?: string | undefined;
  proshow_registrations: ProShow[];
  event_registrations: EventSchema[];
};

export type CategoryEvents = {
  id: number;
  category_name: string;
  events: EventSchema[];
};
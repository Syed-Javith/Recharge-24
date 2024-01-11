export type EventSchema = {
  name: string; // Event Name
  category: Category;
  short_description?: string; // Short description
  description?: string; // Description
  image?: string; // Image
  registration_count?: string; // Registration count
  is_registered?: string; // Is registered
};

export type Category = {
  id: number; // ID
  category_name: string; // Category name
  image?: string; // Image
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
  is_registered: string;
  readOnly: true;
};

type UserProfileSchema = {
  email: string;
  first_name: string;
  last_name?: string;
  profile_photo: string | null;
  mobile_number?: string | null;
  department?: string | null;
  college?: string | null;
  year?: number | null;
  qr_code?: string | null;
  proshow_registrations:  {proshow : ProShow}[] ;
  event_registrations: any;
};

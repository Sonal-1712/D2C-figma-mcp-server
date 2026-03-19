/**
 * Common types for the application
 */

/**
 * Registration form data
 */
export interface RegistrationFormData {
  /**
   * Title (Mr, Mrs, Ms, etc.)
   */
  title: string;

  /**
   * First name
   */
  firstName: string;

  /**
   * Last name
   */
  lastName: string;

  /**
   * Date of birth
   */
  dateOfBirth: Date;

  /**
   * Postcode
   */
  postcode: string;

  /**
   * Country
   */
  country: string;

  /**
   * Whether the terms and conditions have been accepted
   */
  termsAccepted: boolean;

  /**
   * Whether the privacy policy has been accepted
   */
  privacyAccepted: boolean;
}

/**
 * Title options
 */
export const TITLE_OPTIONS = [
  { value: 'mr', label: 'Mr' },
  { value: 'mrs', label: 'Mrs' },
  { value: 'miss', label: 'Miss' },
  { value: 'ms', label: 'Ms' },
  { value: 'dr', label: 'Dr' },
  { value: 'prof', label: 'Prof' },
  { value: 'other', label: 'Other' }
];

/**
 * Country options
 */
export const COUNTRY_OPTIONS = [
  { value: 'uk', label: 'United Kingdom' },
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'nz', label: 'New Zealand' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'es', label: 'Spain' },
  { value: 'it', label: 'Italy' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
  { value: 'in', label: 'India' },
  { value: 'other', label: 'Other' }
];

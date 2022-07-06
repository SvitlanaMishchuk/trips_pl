export interface Step {
  title: string;
  content: string;
}

const FIRST_STEP = {
  title: 'Choose your location',
  content: 'Choose continent, country or city, which you want to visit',
};
const SECOND_STEP = {
  title: 'Save interesting place to your profile',
  content: 'Create trip in your account and add places which you want to see',
};
const THIRD_STEP = {
  title: 'Have a great trrip',
  content: 'Follow your plan, visit all places and enjoy an amazing trip',
};

export const steps: Array<Step> = [FIRST_STEP, SECOND_STEP, THIRD_STEP];

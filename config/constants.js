// Whether to ask the user for a predefined ID or not.
USE_PREDEFINED_ID = false;

// How long should a trial last (from apparition of the line).
TRIAL_TIME_LIMIT = 20000 //ms

// Snap the tip of the sign to the line when close enough.
USE_VERTICAL_SNAP = true;

// Snap the child response to the closest graduation upon click.
USE_HORIZONTAL_SNAP = true;

// Pathes to ressources files.
FRACTION_IMAGE_PATH = "./res/fractions/"
FRACTION_AUDIO_PATH = "./res/fractions_audio/final/"

// Specify the which voice to use (should be specified in file name, e.g., 0_FR_man)
AUDIO_VOICES = ["man"]

// Original dimension of image files
IMAGE_ORIGINAL_DIMENSION = 150;

// How many times should a fraction be repeated
NUMBER_OF_REPETITIONS = 2;

// Timings
TIME_BEFORE_FEEDBACK = 500; //ms
FEEDBACK_ANIMATION_DURATION = 800; //ms
AFTER_TRIAL_DELAY = 500; //ms

// Priority of response elements: if a click overlaps two elements,
// the one with highest priority will be considered clicked.
LINE_PRIORITY = 0;
OUT_OF_LINE_RESPONSE_PANELS_PRIORITY = 1;

class ChildEnglishLocalizer extends Localizer {
  constructor(){
    super();

    this.messages = {
      "FULLSCREEN_PROMPT": "Ready to start?",
      "FULLSCREEN_LABEL": "Yes!",


      "SPACE_BAR": `<b>[SPACE]</b>`,
      "PRESS_ANY_KEY": `Press any key to continue.`,
      "START": "Start",
      "PREVIOUS": "Previous",
      "NEXT": "Next",
      "TERMINATE": "Finish",

      "NEW_LINE": `The line will go from <strong>${Localizer.FORMATTABLE_MARKER} to ${Localizer.FORMATTABLE_MARKER}</strong>.`,
      "VISUAL_MODALITY_DISPLAY": `The numbers will be <strong>displayed</strong> on the sign.`,
      "AUDITORY_MODALITY_DISPLAY": `The numbers will be <strong>read aloud</strong>.`,
      "TRAINING_START": `Let's train a bit. A sound will tell you if you answered correctly.`,
      "TRAINING_FINISHED": "You have now finished training.",
      "NO_CORRECTION": `The next numbers will not be corrected anymore, even if you make a mistake.`,

      // "ACCURACY_DESCRIPTION_NONE": `Tu n'as pas réussi à placer de nombre...`,
      // "ACCURACY_DESCRIPTION_SINGULAR": `Tu as réussi à placer ${Localizer.FORMATTABLE_MARKER} nombre sur ${Localizer.FORMATTABLE_MARKER}.`,
      // "ACCURACY_DESCRIPTION_PLURAL": `Tu as réussi à placer ${Localizer.FORMATTABLE_MARKER} nombres sur ${Localizer.FORMATTABLE_MARKER}.`,
      "ACCURACY_DESCRIPTION": `You managed to place ${Localizer.FORMATTABLE_MARKER}% of the numbers.`,
      "ENCOURAGEMENT_POOR": `That's not a problem, you'll do better in the next part!`,
      "ENCOURAGEMENT_GOOD": `It's good, but you can do even better!`,
      "CONGRATULATIONS": `Congratulations, keep going!`,
      "BLOCK_ENDED": `Congratulations! You have reached the end of this part!`,

      "EXPERIENCE_ENDED": `You have finished the experiment. Thank you for your participation!`,
      "RESPONSES_SAVED": `Your answers have been fully saved. <strong>Merci!</strong>`,

      "INSTRUCTIONS_TITLE": `Instructions${Localizer.FORMATTABLE_MARKER}`,
      "INSTRUCTIONS_TEXT_1": `In this exercise, you will see a graduated number line.`,
      "INSTRUCTIONS_DISPLAY": `A button will be above the line. You'll click the button to be given a number. It will be either displayed on the sign, or it will be read aloud.`,
      "INSTRUCTIONS_RESPONSE": `<b>Place this number at the correct position on the line!</b> Move the sign on the line, and then click again to drop it at the correct position!`,
      "INSTRUCTIONS_RESPONSE_TIME": `Try to answer as soon as you have the (correct) answer. You will have about <strong>${Localizer.FORMATTABLE_MARKER} seconds</strong> each time the line appears.`,
      "INSTRUCTIONS_RECORDING": `We will save you accuracy and response time.
                                  It is not a big deal if you make a mistake;
                                  just do your best to answer correctly!`,

      "SMALLER": "SMALLER",
      "GREATER": "GREATER",

      "WHOLE_NUMBER_SCORE_FEEDBACK": `You managed to place ${Localizer.FORMATTABLE_MARKER}% of the whole numbers.`,
      "DECIMAL_SCORE_FEEDBACK": `You managed to place ${Localizer.FORMATTABLE_MARKER}% of decimal numbers.`,
      "FRACTION_SCORE_FEEDBACK": `You managed to place ${Localizer.FORMATTABLE_MARKER}% of fractions.`,

      "THANK_YOU": "Thank you for your participation!",
      "MORE_DETAILS_ON_ERRORS": "Let's have a closer look at your errors!",
    };
  }
}

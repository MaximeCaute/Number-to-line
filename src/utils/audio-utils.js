audioUtils = {
  correct: new Audio('./res/sound/correct.wav'),
  incorrect: new Audio('./res/sound/incorrect.wav'),
  fanfare: new Audio('./res/sound/fanfare.mp3'),
  correctStreak: [],
  incorrectStreak: [],
  streakTracker: {positive: true, last: -1},
  resetStreak: function(){this.streakTracker.last = -1},
  initializePositiveStreak: function(start = 1, stop = 7){
    for (let i = start; i <= stop; i++){
      this.correctStreak.push(new Audio(`./res/sound/pos${i}.wav`));
    }
  },
  initializeNegativeStreak: function(start = 1, stop = 1){
    for (let i = start; i <= stop; i++){
      this.incorrectStreak.push(new Audio(`./res/sound/neg${i}.wav`));
    }
  },
  playAudioFeedback: function(correct, useStreak = false)
  {
    if (useStreak == null){
      let sound = correct ? this.correct : this.incorrect;
      sound.volume = 0.5;
      sound.play();
      return;
    }

    // Continue streak
    if(this.streakTracker.positive == correct){
      let streak = this.streakTracker.positive ? this.correctStreak : this.incorrectStreak;

      if(this.streakTracker.last < streak.length - 1){
        streak[this.streakTracker.last + 1].play();
        this.streakTracker.last += 1;
      } else {
        streak[this.streakTracker.last].play();
      }

      return;
    }

    // Switch streak and reset count
    this.streakTracker.positive = correct;
    this.resetStreak();
    this.playAudioFeedback(correct, useStreak)
  },
  playFile: function(name){
    console.log(name)
    this.audioDict[name].play();
  },
  audioDict: {},
  initializeAudioDict(pathNames){
    for (let pathName of pathNames){
      this.audioDict[pathName] = new Audio(pathName);
    }
  },
}

class NumberLine {
  static tickTypes = {MAJOR: "MAJOR", INTERMEDIATE: "INTER", MINOR: "MINOR"};

  constructor(min, max, ticks = []){
    this.min = min;
    this.max = max;
    this.ticks = ticks;
  }

  static createLinearLine(lineMin, lineMax,
                          majorInterval, intermediateInterval, minorInterval,
                          useIntermediateTicks = true){
    let line = new NumberLine(lineMin, lineMax);

    // INTEGERS
    for (let i = lineMin; i <= lineMax; i+= majorInterval){
      line.addValueTick(i, NumberLine.tickTypes.MAJOR, i);
    }

    // HALVES & SMALLER GRADUATIONS
    // We use custom epsilon to allow for non decimal fraction graduations
    for (let i = lineMin; i < lineMax; i+= majorInterval){
      for (let j = minorInterval; j < majorInterval - Number.EPSILON; j+= minorInterval){

        // Round values
        let tickValue = parseFloat((i + j + Number.EPSILON).toFixed(2))

        if(useIntermediateTicks && MathUtils.isEqualWithMargin(j, intermediateInterval)){
          line.addValueTick(tickValue, NumberLine.tickTypes.INTERMEDIATE);
        } else{
          line.addValueTick(tickValue, NumberLine.tickTypes.MINOR);
        }
      }
    }

    return line
  }

  range(){
    return this.max - this.min;
  }

  addValueTick(tickValue, tickType, label = null){
    let tick = new Tick(tickType, tickValue, label);
    this.ticks.push(tick);
  }

  getClosestTickValue(rawValue, valueMargin = 0){
    let closestTickValue = 0;
    let closestTickDistance = this.max - this.min + 1;

    if (rawValue > this.max + Number.EPSILON + valueMargin | rawValue < this.min - Number.EPSILON - valueMargin)
      throw new Error(`Invalid position value: ${rawValue}!`)

    for (let tick of this.ticks){
      let tickDistance = Math.abs(rawValue - tick.value)
      if (tickDistance < closestTickDistance){
        closestTickValue = tick.value;
        closestTickDistance = tickDistance;
      }
    }

    return closestTickValue;
  }
}

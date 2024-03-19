class MathUtils {
  // Use a custom EPSILON because Number.EPSILON is too small to actually fix rounding errors...
  static EPSILON = 0.00005

  static isInRect(coordinates, rect){
    return coordinates.x >= rect.left
            & coordinates.x <= rect.right
            & coordinates.y >= rect.top
            & coordinates.y <= rect.bottom;
  }

  static computeRectCenter(rect){
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }
  }

  static isEqualWithMargin(a, b, margin = MathUtils.EPSILON){
    return Math.abs(a - b) < margin;
  }

  static isMultipleOfWithMargin(a, b, margin = MathUtils.EPSILON){
    return MathUtils.isEqualWithMargin(a % b, 0, margin) || MathUtils.isEqualWithMargin(a % b, b, margin);
  }
}

// Freeze the class to avoid redefinition of variables or methods
Object.freeze(MathUtils)

function solveEquations(A: number, B: number, C: number): string {
    const maxRange = Math.cbrt(B);
    for (let x = -maxRange; x <= maxRange; x++) {
      for (let y = -maxRange; y <= maxRange; y++) {
        for (let z = -maxRange; z <= maxRange; z++) {
          if (x + y + z === A && x * y * z === B && x ** 2 + y ** 2 + z ** 2 === C) {
            return `${x} ${y} ${z}`
          }
        }
      }
    }
  
    return "No solution"
  }
  
  console.log(solveEquations(123, 0, 0)) 
  console.log(solveEquations(6, 6, 14))
  
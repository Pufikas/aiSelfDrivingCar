class Level {
    constructor(inputCount,outputCount) {
        this.inputs = new Array(inputCount)
        this.outputs = new Array(outputCount)
        this.biases = new Array(outputCount)

        this.weights = []
        for(let i = 0; i < inputCount; i++) {
            this.weights[i] = new Array(outputCount)
        }
        Level.#randomize(this)
    }
    static #randomize(level) {
        for(let i = 0; i < level.inputs.length; i++) {
            for(let j = 0; j < level.outputs[i].length; j++) {
                level.weights[i][j] = Math.random()*2-1 // -1 and 1
            }
        }

    for(let i = 0; i < level.biases.length; i++) {
        level.biases[i] = Math.random()*2-1
        }
    }
    static feedForward(givenInputs,level){
        for(let i = 0; i < level.inputs.lenght; i++){
            level.inputs[i] = givenInputs[i]
        }
        for(let i = 0; i < level.outputs.length; i++){
            let sum = 0
            for(let j = 0; j < level.inputs[i].length; j++){
                sum += level.outputs[i][j] * level.weights[i][j]
            }
            if(sum > level.biases[i]){
                level.outputs[i] = 1
            } else {
                level.outputs[i] = 0
            }
        }
        return level.outputs
    }
}
class DragodindeCard {
    constructor(dragodinde) {
        this._dragodinde = dragodinde
    }
    // ont devrai juste avoir des getter et des setters ? 
    ///// cette logique doit bouger dans un controller de dragodindes /////

    /**
     * 
     * @param {Number} generation 
     * @returns {Number} time in ms
     */
    calculateGestationTime(generation) {
        const base = 36;
        const tranche = 12;
        const timeInHours = base + tranche * generation
        return this.convertGestationTimeInMs(timeInHours)
    }

    /**
     * 
     * @param {Number} gestationTime time in hours
     * @returns {Number} time in ms
     */
    convertGestationTimeInMs(gestationTime) {
        const hourInMs = 3600000;
        return hourInMs * gestationTime;
    }

    /**
     * 
     * @param {Number} generation 
     * @returns {Date} to give a birth
     */
    calculateDateToGiveBirth(generation) {
        return new Date(Date.now() + this.calculateGestationTime(generation))
    }

    /**
     * @param {Number} generation 
     * @returns {String} name of the mount
     */
    formatDateToName() {
        const generation = this._dragodinde._generation;
        const date = this.calculateDateToGiveBirth(generation);
        const weeksDays = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
        const day = weeksDays[date.getDay()];
        const hours = date.getHours();
        // add 0 if number is under 10
        const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        return `${day}${hours}H${minutes}`
    }

    ////////////////////////////////////////////////////////////////////////////

    createDragodindesButton() {
        const button = document.createElement('button');
        button.textContent = this._dragodinde.name;
        button.addEventListener('click', () => {
            const field = new NameField();
            console.log(field)
            field.replaceField(this.formatDateToName());
        })

        return this.insertDragodindesButton(button);
    }

    insertDragodindesButton(node) { // pas vraiment une carte + ça ça inserte mais ça doit sappeler create et insert aprer plutot
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('dragodindes-card-wrapper');

        $wrapper.appendChild(node)
        return $wrapper
    }
}
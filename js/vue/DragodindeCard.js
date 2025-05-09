class DragodindeCard {
    constructor(dragodinde) {
        this._dragodinde = dragodinde
    }

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

    createButton() {
        const button = document.createElement('button');
        button.textContent = this._dragodinde.name;
        button.addEventListener('click', () => {
            // TODO replace by new html component
            console.log(this.formatDateToName());
        })

        return button;
    }

    createDragodindesCard() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('dragodindes-card-wrapper');

        const dragodindeCard = this.createButton();

        $wrapper.appendChild(dragodindeCard)
        return $wrapper
    }
}
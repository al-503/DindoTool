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
        return convertGestationTimeInMs(timeInHours)
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
        return new Date(Date.now() + calculateGestationTime(generation))
    }

    /**
     * @param {Date} date 
     * @returns {String} name of the mount
     */
    formatDateToName(date) {
        const weeksDays = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"]
        const day = weeksDays[date.getDay() - 1]
        const hours = date.getHours()
        // add 0 if number is under 10
        const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        return `${day}${hours}H${minutes}`
    }

    ////////////////////////////////////////////////////////////////////////////

    createDragodindesCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('dragodindes-card-wrapper')

        const dragodindeCard = `
            <h3">${this._dragodinde.name}</h3>
        `

        $wrapper.innerHTML = dragodindeCard
        return $wrapper
    }
}
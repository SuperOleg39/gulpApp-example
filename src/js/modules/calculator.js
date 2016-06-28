'use strict!';

export class Calculator {

    addition(...numbers) {
        return numbers.reduce((sum, current) => {
            return sum + current;
        });
    }

    subtraction(...numbers) {
        return numbers.reduce((sum, current) => {
            return sum - current;
        });
    }

    multiplication(...numbers) {
        return numbers.reduce((sum, current) => {
            return sum * current;
        });
    }

    division(...numbers) {
        return numbers.reduce((sum, current) => {
            return sum / current;
        });
    }

}

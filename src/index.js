import {
    devineLog,
    sum
} from './js/utility/helpers.js';

{

    const init = () => {
        console.log(`hello Wereld, ik ben Julia - ik ga mee naar San Fransisco!`);
        devineLog(`Ik gebruik deze functie. Dit is de som ${sum(2, 33)}`);
    }
    init();
}
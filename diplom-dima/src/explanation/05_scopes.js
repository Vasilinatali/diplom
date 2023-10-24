/** Область видимости */

const globalConfig = {
    mode: 'development',
    env: {
        LOG_PATH: '/storage/logs',
        FEATURE_ENABLED: true,
        ERROR_MAX_LENGTH: 20,
    },
};

/**
 * Имитация функции отправки ошибки на бэк
 *
 * @param {string} error - ошибка в формате строки
 * @param {string} savePath - путь куда сохраняем ошибку
 */
function sendToBackend(error, savePath) {
    console.log('error was sent to backend');
}

/**
 * Функция печати ошибки в консоль
 *
 * @param {string} error
 */
function printToConsole(error) {
    console.log(error);
}

/**
 * Функция логирования ошибки
 *
 * @param {string} error - текст ошибки
 */
function logError(error) {
    const maxErrorlength = 20;

    function prepare() {
        const preparedString = JSON.stringify(error);
        return preparedString.length > maxErrorlength
            ? preparedString.slice(0, maxErrorlength) + '...'
            : preparedString;
    }

    const preparedString = prepare();

    if (globalConfig.mode === 'development') {
        printToConsole(preparedString);
    } else {
        sendToBackend(preparedString);
    }
}

/**
 * Функция возвращает значения таймера
 *
 * @param {number} initialValue - Начальное значение счетчика
 * @returns {() => number}
 */
function initCountdwon(initialValue = 59) {
    let count = initialValue;
    return () => {
        return count--;
    };
}

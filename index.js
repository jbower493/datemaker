const datemaker = {
  local() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ms = now.getMilliseconds();
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const currentDate = `${hours}:${minutes}:${seconds}:${ms} - ${date}/${month}/${year}`;
    return currentDate;
  },

  UTC() {
    const now = new Date();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    const ms = now.getUTCMilliseconds();
    const date = now.getUTCDate();
    const month = now.getUTCMonth();
    const year = now.getUTCFullYear();

    const currentDate = `${hours}:${minutes}:${seconds}:${ms} - ${date}/${month}/${year}`;
    return currentDate;
  }
};


module.exports = datemaker;